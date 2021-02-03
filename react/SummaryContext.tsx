import React, { createContext, useContext, PropsWithChildren } from 'react'

import { SummaryProps } from './Summary'

const SummaryContext = createContext<SummaryProps | undefined>(undefined)

export function useSummary() {
  const context = useContext(SummaryContext)

  if (context === undefined) {
    throw new Error('useSummary must be used within a SummaryProvider')
  }

  return context
}

function SummaryContextProvider({
  coupon,
  insertCoupon,
  loading,
  totalizers,
  total,
  children,
}: PropsWithChildren<SummaryProps>) {
  return (
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
}

export default SummaryContextProvider
