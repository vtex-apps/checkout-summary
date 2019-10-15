import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
} from 'react'
import { FormattedMessage } from 'react-intl'

interface Context {
  totalizers: any[]
  total: number
}

const SummaryContext = createContext<Context | undefined>(undefined)

export const useSummary = () => {
  const context = useContext(SummaryContext)
  if (context === undefined) {
    throw new Error('useSummary must be used within a SummaryProvider')
  }

  return context
}

const Summary: FunctionComponent<SummaryProps> = ({
  children,
  totalizers,
  total,
}) => {
  return (
    <SummaryContext.Provider value={{ totalizers: totalizers, total: total }}>
      <div>
        <h5 className="t-heading-5 mt0 mb5">
          <FormattedMessage id="store/checkout-summary.Summary" />
        </h5>
        <div className="c-on-base">{children}</div>
      </div>
    </SummaryContext.Provider>
  )
}

interface SummaryProps {
  children: ReactNode
  title?: string
  intl: object
  totalizers: any[]
  total: number
}

export default Summary
