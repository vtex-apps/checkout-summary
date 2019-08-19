import React from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { Button } from 'vtex.styleguide'
import SummaryItem from './components/SummaryItem'

const minTotalizerValue = 0
const shippingData = {
  id: 'Shipping',
  name: 'Total do Frete',
  value: minTotalizerValue,
  __typename: 'Totalizer',
}

const getTotalizerId = (id: string) => {
  switch (id) {
    case 'Items':
      return 'Subtotal'
    case 'Shipping':
      return 'Delivery'
    case 'CustomTax':
      return 'Tax'
    default:
      return id
  }
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

const Summary: StorefrontFunctionComponent<SummaryProps> = ({
  totalizers,
  total,
}) => {
  if (!isShippingPresent(totalizers)) {
    totalizers.push(shippingData)
  }

  return (
    <div className="ph5 ph0-m">
      <h5 className="t-heading-5 mt6 mb6 mt8-l pt8-l">Summary</h5>
      <ExtensionPoint id="coupon" />

      {totalizers.map(totalizer => (
        <SummaryItem
          key={totalizer.id}
          label={getTotalizerId(totalizer.id)}
          value={(totalizer && totalizer.value) || minTotalizerValue}
          large={false}
        />
      ))}

      <SummaryItem
        label="Total"
        value={total ? total : minTotalizerValue}
        large
      />

      <Button variation="primary" size="large" block>
        Checkout
      </Button>
    </div>
  )
}

interface SummaryProps {
  title?: string
  intl: object
  totalizers: any[]
  total: number
}

Summary.defaultProps = {
  totalizers: [],
  total: minTotalizerValue,
}

Summary.schema = {
  title: 'editor.base-store-component.title',
  description: 'editor.base-store-component.description',
  type: 'object',
  properties: {
    title: {
      title: 'editor.base-store-component.title.title',
      description: 'editor.base-store-component.title.description',
      type: 'string',
      default: null,
    },
  },
}

export default Summary
