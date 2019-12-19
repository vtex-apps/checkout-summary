import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import SummaryContextProvider from './SummaryContext'

const messages = defineMessages({
  label: {
    id: 'admin/editor.checkout-summary.label',
    defaultMessage: '',
  },
  title: {
    id: 'store/checkout-summary.Summary',
    defaultMessage: '',
  },
})

const CSS_HANDLES = ['summaryTitle', 'summaryContent'] as const

const Summary: StorefrontFunctionComponent<StorefrontSummaryProps> = ({
  children,
  loading,
  totalizers,
  total,
  coupon,
  insertCoupon,
  title,
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <SummaryContextProvider
      coupon={coupon}
      insertCoupon={insertCoupon}
      loading={loading}
      totalizers={totalizers}
      total={total}
    >
      <h5 className={`${handles.summaryTitle} t-heading-5 mt0 mb5`}>
        <FormattedMessage id={title} />
      </h5>
      <div className={`${handles.summaryContent} c-on-base`}>{children}</div>
    </SummaryContextProvider>
  )
}

interface InsertCouponResult {
  success: boolean
  errorKey: string
}

export interface SummaryProps {
  coupon?: string
  insertCoupon?: (coupon: string) => Promise<InsertCouponResult>
  loading?: boolean
  totalizers: Totalizer[]
  total: number
}

interface StorefrontSummaryProps extends SummaryProps {
  title: string
}

Summary.schema = {
  title: messages.label.id,
}

export default Summary
