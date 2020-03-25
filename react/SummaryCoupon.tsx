import React, { FunctionComponent } from 'react'
import { ExtensionPoint, Loading } from 'vtex.render-runtime'
import { OrderCoupon } from 'vtex.order-coupon'

import { useSummary } from './SummaryContext'

const SummaryCoupon: FunctionComponent = () => {
  const { coupon, insertCoupon, loading } = useSummary()

  if (loading) {
    return <Loading />
  }

  return (
    <OrderCoupon.OrderCouponProvider>
      <ExtensionPoint id="coupon" coupon={coupon} insertCoupon={insertCoupon} />
    </OrderCoupon.OrderCouponProvider>
  )
}

export default SummaryCoupon
