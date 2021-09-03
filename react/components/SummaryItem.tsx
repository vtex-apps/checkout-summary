import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import { FormattedPrice } from 'vtex.formatted-price'
import { useCssHandles } from 'vtex.css-handles'

import { slugify } from '../modules/slugify'
import LeafIcon from './LeafIcon'

defineMessages({
  Shipping: {
    id: 'store/checkout-summary.Shipping',
    defaultMessage: 'Delivery',
  },
  Items: {
    id: 'store/checkout-summary.Items',
    defaultMessage: 'Subtotal',
  },
  CarbonEstimate: {
    id: 'store/checkout-summary.CarbonEstimate',
    defaultMessage: 'Green Shipping',
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
      <div id={itemId} className={`${handles.summaryItemLabel} flex fw6 fw5-l`}>
        {name ||
          (label && (
            <FormattedMessage id={`store/checkout-summary.${label}`} />
          ))}
        {label === 'CarbonEstimate' && (
          <div className="ml3">
            <LeafIcon />
          </div>
        )}
      </div>
      <div
        id={`${itemId}-price`}
        className={`flex-auto tr ${handles.summaryItemPrice} ${
          large ? 'fw6 fw5-l' : ''
        }`}
      >
        <FormattedPrice value={value ? value / 100 : value} />
      </div>
    </div>
  )
}

export default SummaryItem
