import React, { PropsWithChildren } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'
import { PaymentData } from 'vtex.checkout-graphql'

import { Totalizer } from './modules/types'
import SummaryContextProvider from './SummaryContext'

interface Props {
  totalizers: Totalizer[]
  total: number
  totalizersToShow?: string[]
  totalCalculation?: 'visibleTotalizers' | 'allTotalizers'
  paymentData: PaymentData
}

const CSS_HANDLES = ['summarySmallContent', 'summarySmallDisclaimer'] as const

function SummarySmall({
  total,
  children,
  totalizers,
  totalizersToShow = ['Items'],
  totalCalculation = 'visibleTotalizers',
  paymentData,
}: PropsWithChildren<Props>) {
  const handles = useCssHandles(CSS_HANDLES)

  const filteredTotalizers = totalizers.filter((totalizer) =>
    totalizersToShow.includes(totalizer.id)
  )

  const totalToDisplay =
    totalCalculation === 'visibleTotalizers'
      ? filteredTotalizers.reduce((acc, totalizer) => {
          return (acc += totalizer.value ?? 0)
        }, 0)
      : total

  const shouldDisplayShippingDisclaimer = !totalizersToShow.includes('Shipping')

  return (
    <SummaryContextProvider
      totalizers={filteredTotalizers}
      total={totalToDisplay}
      paymentData={paymentData}
    >
      <div className={`${handles.summarySmallContent} c-on-base`}>
        {children}
      </div>
      {shouldDisplayShippingDisclaimer && (
        <span className={`${handles.summarySmallDisclaimer} t-small db mv4`}>
          <FormattedMessage id="store/checkout-summary.disclaimer" />
        </span>
      )}
    </SummaryContextProvider>
  )
}

export default SummarySmall
