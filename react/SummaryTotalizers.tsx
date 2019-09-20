import React, { FunctionComponent } from 'react'
import SummaryItem from './components/SummaryItem'

import { useSummary } from './Summary'

const minTotalizerValue = 0
const tba = undefined
const shippingData = {
  id: 'Shipping',
  name: '',
  value: tba,
  __typename: 'Totalizer',
}

const isShippingPresent = (totalizers: Totalizer[]) => {
  return totalizers.some(t => t.id === 'Shipping')
}

const SummaryTotalizers: FunctionComponent<SummaryTotalizersProps> = () => {
  const { totalizers, total } = useSummary()

  if (!isShippingPresent(totalizers)) {
    totalizers.push(shippingData)
  }

  return (
    <div>
      {totalizers.map(totalizer => (
        <SummaryItem
          key={totalizer.id}
          label={totalizer.id}
          name={totalizer.id === 'CustomTax' ? totalizer.name : ''}
          value={totalizer.value}
          large={false}
        />
      ))}

      <SummaryItem
        label="Total"
        value={total ? total : minTotalizerValue}
        large
      />
    </div>
  )
}

interface SummaryTotalizersProps {}

SummaryTotalizers.defaultProps = {
  totalizers: [],
  total: minTotalizerValue,
}

export default SummaryTotalizers
