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
  const subtotal = getTotalizerById('Items', totalizers)[0].value
  const delivery = getTotalizerById('Shipping', totalizers)[0].value
  const tax = getTotalizerById('CustomTax', totalizers)[0].value

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
        value={delivery ? delivery : minTotalizerValue}
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
