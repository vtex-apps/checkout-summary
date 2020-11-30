import React, { PropsWithChildren } from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'
import { ExtensionPoint } from 'vtex.render-runtime'

import SummaryContextProvider from './SummaryContext'

const messages = defineMessages({
  label: {
    id: 'admin/editor.checkout-summary.label',
  },
  title: {
    id: 'store/checkout-summary.Summary',
  },
})

const CSS_HANDLES = ['summaryTitle', 'summaryContent'] as const

interface InsertCouponResult {
  success: boolean
  errorKey: string
}

interface SiteEditorSummaryProps {
  title: string
}

export interface SummaryProps {
  coupon?: string
  insertCoupon?: (coupon: string) => Promise<InsertCouponResult>
  loading?: boolean
  totalizers: Totalizer[]
  total: number
}

type Props = PropsWithChildren<SummaryProps & SiteEditorSummaryProps>

function Summary({
  children,
  loading,
  totalizers,
  total,
  coupon,
  insertCoupon,
  title,
}: Props) {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <SummaryContextProvider
      coupon={coupon}
      insertCoupon={insertCoupon}
      loading={loading}
      totalizers={totalizers}
      total={total}
    >
      {/* Removing the div below may break the layout. See PR #25 */}
      <div>
        <h5
          className={`${handles.summaryTitle} t-heading-5 mt0 mb5 flex justify-between items-center`}
        >
          <FormattedMessage id={title} />
          <ExtensionPoint id="drawer" />
        </h5>
        <div className={`${handles.summaryContent} c-on-base`}>{children}</div>
      </div>
    </SummaryContextProvider>
  )
}

Summary.schema = {
  title: messages.label.id,
}

export default Summary
