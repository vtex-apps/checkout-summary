import React, { Fragment } from 'react'
import { Loading } from 'vtex.render-runtime'

import SummaryItem from './components/SummaryItem'
import { Totalizer } from './modules/types'
import { useSummary } from './SummaryContext'

const minTotalizerValue = 0
let minicartTotal = 0
const tba = null
const shippingData = {
  id: 'Shipping',
  name: '',
  value: tba,
  __typename: 'Totalizer',
}

const isShippingPresent = (totalizers: Totalizer[]) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return totalizers.some((t: { id: string }) => t.id === 'Shipping')
}

interface Props {
  showTotal?: boolean
  showDeliveryTotal?: boolean
}

function SummaryTotalizers({
  showTotal = true,
  showDeliveryTotal = true,
}: Props) {
  const { loading, totalizers, total }: any = useSummary()

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
      (t: { value: number | null }) =>
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
        {totalizers.map((totalizer: any) => (
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
            value={minicartTotal || minTotalizerValue}
            large
          />
        )}
      </Fragment>
    )
  }

  return null
}

export default SummaryTotalizers
