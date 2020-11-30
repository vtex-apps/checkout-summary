import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import { FormattedPrice } from 'vtex.formatted-price'
import { useCssHandles } from 'vtex.css-handles'

import { slugify } from '../modules/slugify'

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

const CSS_HANDLES = [
  'summaryItemContainer',
  'summaryItemLabel',
  'summaryItemPrice',
] as const

function SummaryItem({ label, name, large, value }: Props) {
  const handles = useCssHandles(CSS_HANDLES)
  const itemId = slugify(label)

  return (
    <div
      className={`flex w-100 c-on-base lh-copy items-center ${
        handles.summaryItemContainer
      } ${large ? 'f4 mt4 pb5' : 'mt3'}`}
    >
      <div
        id={itemId}
        className={`${handles.summaryItemLabel} flex-none fw6 fw5-l`}
      >
        {name ||
          (label && (
            <FormattedMessage id={`store/checkout-summary.${label}`} />
          ))}
      </div>
      <div
        id={`${itemId}-price`}
        className={`flex-auto tr ${handles.summaryItemPrice} ${
          large ? 'fw6 fw5-l' : ''
        }`}
      >
        <FormattedPrice
          // @ts-expect-error: the component can handle null and
          // undefined values, but the prop typings are too
          // strict
          value={value ? value / 100 : value}
        />
      </div>
    </div>
  )
}

export default SummaryItem
