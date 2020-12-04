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
  
  minicartTotal = total
  if (!showDeliveryTotal) {
    let totalizersTotal = 0
    totalizers.map(
      t =>
        (totalizersTotal =
          t.value !== null && !Number.isNaN(t.value)
            ? totalizersTotal + t.value
            : totalizersTotal)
    )

    if (totalizersTotal !== total) {
      minicartTotal = totalizersTotal
    }
  }

if (totalizers.length) {
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
        <SummaryItem label="Total" value={total || minTotalizerValue} large />
      )}
    </Fragment>
  )
  }

  return null
}

interface SummaryTotalizersProps {
  showTotal: boolean
  showDeliveryTotal: boolean
}

export default SummaryTotalizers