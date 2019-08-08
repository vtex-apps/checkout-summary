import React from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { Button } from 'vtex.styleguide'

import styles from './styles.css'

const Summary: StorefrontFunctionComponent<SummaryProps> = () => {

  return (
    <div className={`${styles.container} flex-column pv6 ph4`}>
      <h3 className="mid-gray ph4">Summary</h3>
      <br></br>
      <div className="flex ph4 pv4"> 
        <div className="fl w-60 pa2 b">Subtotal</div>
        <div className="w-40 pa2 tr">$100000202</div>
      </div>

      <div className="b--black-20 bt ph4">
        <p className="b">Delivery</p>
      </div>

      <div className="b--black-20 bt ph4">
        <ExtensionPoint id="coupon"/>
      </div>

      <div className="b--black-20 bt flex ph4 pv4">
        <div className="fl w-60 pa2 b">Tax</div>
        <div className="w-40 pa2 tr">$100000202</div>
      </div>

      <div className="b--black-20 bt ph4 pv4">
        <div className="flex">
          <div className="fl w-60 pa2 b">Total</div>
          <div className="w-40 pa2 tr">$100000202</div>
        </div>

        <div className="pv4">
          <Button variation="primary" size="large" block>CHECKOUT</Button>
        </div>
      </div>

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
