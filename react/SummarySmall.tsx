import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import SummaryContextProvider from './SummaryContext'

interface Props {
  totalizers: Totalizer[]
  total: number
  totalizersToShow: string[]
}

const CSS_HANDLES = ['summarySmallContent', 'summarySmallDisclaimer'] as const

const SummarySmall: FunctionComponent<Props> = ({
  total,
  children,
  totalizers,
  totalizersToShow = ['Items'],
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  const filteredTotalizers = totalizers.filter(totalizer =>
    totalizersToShow.includes(totalizer.id)
  )

  return (
    <SummaryContextProvider totalizers={filteredTotalizers} total={total}>
      <div className={`${handles.summarySmallContent} c-on-base`}>
        {children}
      </div>
      <span className={`${handles.summarySmallDisclaimer} t-small db mv4`}>
        <FormattedMessage id="store/checkout-summary.disclaimer" />
      </span>
    </SummaryContextProvider>
  )
}

export default SummarySmall
