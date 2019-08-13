import React from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { Button } from 'vtex.styleguide'
import SummaryItem from './components/SummaryItem'

const minTotalizerValue = 0

const Summary: StorefrontFunctionComponent<SummaryProps> = ({
  subtotal,
  tax,
  total,
  currency,
}) => {
  return (
    <div>
      <SummaryItem
        label="Subtotal"
        value={subtotal ? subtotal : minTotalizerValue}
        large={false}
        currency={currency}
      />
      <SummaryItem
        label="Delivery"
        value={5000}
        large={false}
        currency={currency}
      />

      <div className="b--black-20 bt ph4">
        <ExtensionPoint id="coupon" />
      </div>
      <SummaryItem
        label="Tax"
        value={tax ? tax : minTotalizerValue}
        large={false}
        currency={currency}
      />

      <div className="pb6 bg-muted-5">
        <SummaryItem
          label="Total"
          value={total ? total : minTotalizerValue}
          large
          currency={currency}
        />

        <div className="ph5">
          <Button variation="primary" size="large" block>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

interface SummaryProps {
  title?: string
  intl: object
  subtotal: number
  tax: number
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
