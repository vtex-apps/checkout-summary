import React from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { Button } from 'vtex.styleguide'
import SummaryItem from './components/SummaryItem'

const minTotalizerValue = 0

const getTotalizerById = (id, totalizers) => {
  return totalizers.filter(totalizer => {
    return totalizer.id === id
  })
}

const Summary: StorefrontFunctionComponent<SummaryProps> = ({
  totalizers,
  total,
  currency,
}) => {
  const subtotal = getTotalizerById('Items', totalizers)
  const delivery = getTotalizerById('Shipping', totalizers)
  const tax = getTotalizerById('CustomTax', totalizers)

  return (
    <div className="ph5 ph0-l">

      <h5 className="t-heading-5 mt6 mb6 mt8-l pt8-l">Summary</h5>
      <ExtensionPoint id="coupon" />

      <SummaryItem
        label="Subtotal"
        value={subtotal[0] ? subtotal[0].value : minTotalizerValue}
        large={false}
        currency={currency}
      />
      <SummaryItem
        label="Delivery"
        value={delivery[0] ? delivery[0].value : minTotalizerValue}
        large={false}
        currency={currency}
      />
      <SummaryItem
        label="Tax"
        value={tax[0] ? tax[0].value : minTotalizerValue}
        large={false}
        currency={currency}
      />

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
