import React from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'

import styles from './styles.css'

const Summary: StorefrontFunctionComponent<SummaryProps> = () => {

  return (
    <div className={`${styles.container} flex-column pv6 ph4`}>
      <span><h3>Summary</h3></span>
      <br></br>
      <div> 
        Subtotal
      </div>

      <hr/>
      <div>
        <p>Delivery</p>
      </div>

      <hr/>
      <div>
        <ExtensionPoint id="coupon"/>
      </div>

      <hr/>
      <div>
        <p>Tax</p>
      </div>
      <hr/>
      <p className="b">Total</p>
    </div>
  )
}

interface SummaryProps {
  title?: string
}

Summary.schema = {
  title: 'editor.base-store-component.title',
  description: 'editor.base-store-component.description',
  type: 'object',
  properties: {
    title: {
      title: 'editor.base-store-component.title.title',
      description: 'editor.base-store-component.title.description',
      type: 'string',
      default: null,
    },
  },
}

export default Summary
