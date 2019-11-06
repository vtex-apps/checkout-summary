import React, { FunctionComponent } from 'react'
import { ExtensionPoint, Loading } from 'vtex.render-runtime'

import { OrderCouponProvider } from 'vtex.order-coupon/OrderCoupon'
import { useSummary } from './SummaryContext'

const SummaryCoupon: FunctionComponent<SummaryCouponProps> = () => {
  const { coupon, insertCoupon, couponErrorKey, loading } = useSummary()

  if (loading) {
    return <Loading />
  }

  return (
    <OrderCouponProvider>
      <ExtensionPoint
        id="coupon"
        coupon={coupon}
        insertCoupon={insertCoupon}
        couponErrorKey={couponErrorKey}
      />
    </OrderCouponProvider>
  )
}

interface SummaryCouponProps {}

export default SummaryCoupon
