import React, { FunctionComponent } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Button } from 'vtex.styleguide'

defineMessages({
  checkout: {
    defaultMessage: 'Checkout',
    id: 'store/checkout-summary.Checkout',
  },
})

const SummaryGoToCheckoutButton: FunctionComponent<ButtonProps> = () => {
  return (
    <Button href="/checkout/#payment" variation="primary" size="large" block>
      <FormattedMessage id="store/checkout-summary.Checkout" />
    </Button>
  )
}

interface ButtonProps {}

export default SummaryGoToCheckoutButton
