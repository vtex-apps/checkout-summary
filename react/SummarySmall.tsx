import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

import SummaryContextProvider from './SummaryContext'

interface Props {
  totalizers: Totalizer[]
  total: number
  totalizersToShow: string[]
}

const SummarySmall: FunctionComponent<Props> = ({
  total,
  children,
  totalizers,
  totalizersToShow = ['Items'],
}) => {
  const filteredTotalizers = totalizers.filter(totalizer =>
    totalizersToShow.includes(totalizer.id)
  )

  return (
    <SummaryContextProvider
      loading={false}
      totalizers={filteredTotalizers}
      total={total}
    >
      <div className="c-on-base">{children}</div>
      <span className="t-small db mv4">
        <FormattedMessage id="store/checkout-summary.disclaimer" />
      </span>
    </SummaryContextProvider>
  )
}

export default SummarySmall
