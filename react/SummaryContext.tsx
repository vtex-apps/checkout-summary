import React, { createContext, useContext, FunctionComponent } from 'react'

interface ContextProps {
  coupon?: string
  insertCoupon?: (coupon: string) => Promise<boolean>
  couponErrorKey?: string
  loading?: boolean
  totalizers: Totalizer[]
  total: number
}

const SummaryContext = createContext<ContextProps | undefined>(undefined)

export const useSummary = () => {
  const context = useContext(SummaryContext)
  if (context === undefined) {
    throw new Error('useSummary must be used within a SummaryProvider')
  }

  return context
}

const SummaryContextProvider: FunctionComponent<ContextProps> = ({
  coupon,
  insertCoupon,
  couponErrorKey,
  loading,
  totalizers,
  total,
  children,
}) => (
  <SummaryContext.Provider
    value={{
      coupon,
      insertCoupon,
      couponErrorKey,
      loading,
      totalizers,
      total,
    }}
  >
    {children}
  </SummaryContext.Provider>
)

export default SummaryContextProvider
