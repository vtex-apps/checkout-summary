import React, { createContext, useContext, FunctionComponent } from 'react'

import { SummaryProps } from './Summary'

const SummaryContext = createContext<SummaryProps | undefined>(undefined)

export const useSummary = () => {
  const context = useContext(SummaryContext)
  if (context === undefined) {
    throw new Error('useSummary must be used within a SummaryProvider')
  }

  return context
}

const SummaryContextProvider: FunctionComponent<SummaryProps> = ({
  coupon,
  insertCoupon,
  loading,
  totalizers,
  total,
  children,
}) => (
  <SummaryContext.Provider
    value={{
      coupon,
      insertCoupon,
      loading,
      totalizers,
      total,
    }}
  >
    {children}
  </SummaryContext.Provider>
)

export default SummaryContextProvider
