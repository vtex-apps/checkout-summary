import React, { FunctionComponent } from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'

import { OrderCouponProvider } from 'vtex.order-coupon/OrderCoupon'

const SummaryCoupon: FunctionComponent<SummaryCouponProps> = () => {
  return (
    <OrderCouponProvider>
      <ExtensionPoint id="coupon" />
    </OrderCouponProvider>
  )
}

interface SummaryCouponProps {}

export default SummaryCoupon
