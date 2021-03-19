import React, { Fragment } from 'react'
import { Loading } from 'vtex.render-runtime'

import SummaryItem from './components/SummaryItem'
import { Totalizer } from './modules/types'
import { useSummary } from './SummaryContext'

const minTotalizerValue = 0
const tba = null
const shippingData = {
  id: 'Shipping',
  name: '',
  value: tba,
  __typename: 'Totalizer',
}

const isShippingPresent = (totalizers: Totalizer[]) => {
  return totalizers.some((t) => t.id === 'Shipping')
}

interface Props {
  showTotal?: boolean
  showDeliveryTotal?: boolean
}

function SummaryTotalizers({
  showTotal = true,
  showDeliveryTotal = true,
}: Props) {
  const { loading, totalizers, total } = useSummary()

  if (loading) {
    return <Loading />
  }

  if (!isShippingPresent(totalizers) && showDeliveryTotal) {
    totalizers.push(shippingData)
  }

  const orderHasNoValue = totalizers.length === 0

  return (
    <Fragment>
      {totalizers.map((totalizer) => (
        <SummaryItem
          key={totalizer.id}
          label={totalizer.id}
          name={totalizer.id === 'CustomTax' ? totalizer.name : ''}
          value={totalizer.value}
          large={false}
        />
      ))}

      {showTotal && (
        <SummaryItem
          label="Total"
          value={orderHasNoValue ? null : total || minTotalizerValue}
          large
        />
      )}
    </Fragment>
  )
}

export default SummaryTotalizers
