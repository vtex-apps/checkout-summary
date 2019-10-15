import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from 'vtex.styleguide'

const SummaryGoToCheckoutButton: FunctionComponent<ButtonProps> = () => {
  return (
    <Button
      id="go-to-checkout"
      href="/checkout/#payment"
      variation="primary"
      size="large"
      block
    >
      <FormattedMessage id="store/checkout-summary.Checkout" />
    </Button>
  )
}

interface ButtonProps {}

export default SummaryGoToCheckoutButton
