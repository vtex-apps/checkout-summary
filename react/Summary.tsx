import React from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Button } from 'vtex.styleguide'
import SummaryItem from './components/SummaryItem'

import { OrderCouponProvider } from 'vtex.order-coupon/OrderCoupon'

defineMessages({
  summary: {
    defaultMessage: 'Summary',
    id: 'store/checkout-summary.Summary',
  },
  checkout: {
    defaultMessage: 'Checkout',
    id: 'store/checkout-summary.Checkout',
  },
})

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

const Summary: StorefrontFunctionComponent<SummaryProps> = ({
  totalizers,
  total,
}) => {
  if (!isShippingPresent(totalizers)) {
    totalizers.push(shippingData)
  }

  return (
    <div className="c-on-base">
      <h5 className="t-heading-5 mt6 mb5"><FormattedMessage id="store/checkout-summary.Summary" /></h5>
      <OrderCouponProvider>
        <ExtensionPoint id="coupon" />
      </OrderCouponProvider>

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

      <Button href="/checkout/#payment" variation="primary" size="large" block>
        <FormattedMessage id="store/checkout-summary.Checkout" />
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

export default Summary
