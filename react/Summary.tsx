import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

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

const Summary: StorefrontFunctionComponent<StorefrontSummaryProps> = ({
  children,
  loading,
  totalizers,
  total,
  coupon,
  insertCoupon,
  title,
}) => {
  return (
    <SummaryContextProvider
      coupon={coupon}
      insertCoupon={insertCoupon}
      loading={loading}
      totalizers={totalizers}
      total={total}
    >
      <div>
        <h5 className="t-heading-5 mt0 mb5">
          <FormattedMessage id={title} />
        </h5>
        <div className="c-on-base">{children}</div>
      </div>
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
