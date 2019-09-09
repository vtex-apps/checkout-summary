import React, { FunctionComponent } from 'react'
import {
  defineMessages,
  injectIntl,
  InjectedIntlProps,
  FormattedMessage,
} from 'react-intl'
import { FormattedPrice } from 'vtex.formatted-price'

defineMessages({
  Shipping: {
    id: 'store/checkout-summary.Shipping',
    defaultMessage: 'Delivery',
  },
  Items: {
    id: 'store/checkout-summary.Items',
    defaultMessage: 'Subtotal',
  },
  Total: {
    id: 'store/checkout-summary.Total',
    defaultMessage: 'Total',
  },
  Discounts: {
    id: 'store/checkout-summary.Discounts',
    defaultMessage: 'Discounts',
  },
  Tax: {
    id: 'store/checkout-summary.Tax',
    defaultMessage: 'Taxes',
  },
})

interface Props {
  label: string
  name?: string
  large: boolean
  value: number
}

const SummaryItem: FunctionComponent<Props & InjectedIntlProps> = ({
  label,
  name,
  large,
  value,
}) => (
  <div
    className={`flex w-100 c-on-base lh-copy items-center ${
      large ? 'f4 mt4 pb6' : 'mt3'
    }`}
  >
    <div className="flex-none fw6 fw5-l">
      {name ||
        (label && <FormattedMessage id={`store/checkout-summary.${label}`} />)}
    </div>
    <div
      className={`flex-auto tr ${large ? 'fw6 fw5-l' : ''} ${
        value ? '' : 'c-success'
      }`}
    >
      <FormattedPrice value={value / 100}></FormattedPrice>
    </div>
  </div>
)

export default injectIntl(SummaryItem)
