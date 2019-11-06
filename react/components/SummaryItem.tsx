import React, { FunctionComponent } from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import { FormattedPrice } from 'vtex.formatted-price'

import { slugify } from '../utils/slugify'

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
  value: number | null
}

const SummaryItem: FunctionComponent<Props> = ({
  label,
  name,
  large,
  value,
}) => {
  const itemId = slugify(label)

  return (
    <div
      className={`flex w-100 c-on-base lh-copy items-center ${
        large ? 'f4 mt4 pb5' : 'mt3'
      }`}
    >
      <div id={itemId} className="flex-none fw6 fw5-l">
        {name ||
          (label && (
            <FormattedMessage id={`store/checkout-summary.${label}`} />
          ))}
      </div>
      <div
        id={`${itemId}-price`}
        className={`flex-auto tr ${large ? 'fw6 fw5-l' : ''}`}
      >
        <FormattedPrice value={value ? value / 100 : value} />
      </div>
    </div>
  )
}

export default SummaryItem
