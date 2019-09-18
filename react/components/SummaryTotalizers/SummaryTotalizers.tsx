import React, { FunctionComponent } from 'react'
import SummaryItem from '../SummaryItem/SummaryItem'

import { useSummary } from '../../Summary'

const minTotalizerValue = 0
const shippingData = {
  id: 'Shipping',
  name: 'Total do Frete',
  value: minTotalizerValue,
  __typename: 'Totalizer',
}

const isShippingPresent = (totalizers: Totalizer[]) => {
  let result = false

  for (let totalizer of totalizers) {
    if (totalizer.id === 'Shipping') {
      result = true
    }
  }

  return result
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
          value={(totalizer && totalizer.value) || minTotalizerValue}
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

export default SummaryTotalizers
