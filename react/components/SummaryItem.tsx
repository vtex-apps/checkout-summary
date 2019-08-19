import React, { FunctionComponent } from 'react'
import { FormattedCurrency } from 'vtex.format-currency'
import { defineMessages, injectIntl, InjectedIntlProps } from 'react-intl'

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
})

interface Props {
  label: string
  name?: string
  large: boolean
  value: number
}

const SummaryItem: FunctionComponent<Props & InjectedIntlProps> = ({
  label,
  intl,
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
        (label &&
          intl.formatMessage({ id: `store/checkout-summary.${label}` }))}
    </div>
    <div className={`flex-auto tr ${large ? 'fw6 fw5-l' : ''}`}>
      <FormattedCurrency value={value / 100} />
    </div>
  </div>
)

export default injectIntl(SummaryItem)
