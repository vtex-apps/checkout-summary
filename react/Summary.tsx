import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

import SummaryContextProvider from './SummaryContext'

const Summary: FunctionComponent<SummaryProps> = ({
  children,
  loading,
  totalizers,
  total,
}) => {
  return (
    <SummaryContextProvider
      loading={loading}
      totalizers={totalizers}
      total={total}
    >
      <div>
        <h5 className="t-heading-5 mt0 mb5">
          <FormattedMessage id="store/checkout-summary.Summary" />
        </h5>
        <div className="c-on-base">{children}</div>
      </div>
    </SummaryContextProvider>
  )
}

interface SummaryProps {
  loading: boolean
  totalizers: Totalizer[]
  total: number
}

export default Summary
