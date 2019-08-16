import React from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { Button } from 'vtex.styleguide'
import SummaryItem from './components/SummaryItem'

const minTotalizerValue = 0

const getTotalizerId = (id: string) => {
  let customizedId = id

  if (id === 'Items') {
    customizedId = 'Subtotal'
  } else if (id === 'Shipping') {
    customizedId = 'Delivery'
  } else if (id === 'CustomTax') {
    customizedId = 'Tax'
  }

  return customizedId
}

const Summary: StorefrontFunctionComponent<SummaryProps> = ({
  totalizers,
  total,
  currency,
}) => {
  return (
    <div className="ph5 ph0-m">
      <h5 className="t-heading-5 mt6 mb6 mt8-l pt8-l">Summary</h5>
      <ExtensionPoint id="coupon" />

      {totalizers.map(totalizer => (
        <SummaryItem
          label={getTotalizerId(totalizer.id)}
          value={(totalizer && totalizer.value) || minTotalizerValue}
          large={false}
          currency={currency}
        />
      ))}

      <SummaryItem
        label="Total"
        value={total ? total : minTotalizerValue}
        large
        currency={currency}
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
  currency: string
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
