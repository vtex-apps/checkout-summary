# Summary
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

The Summary block displays the order totalizers and allows the user to add coupon codes. Currently, the Summary block only works out of the box within the [Minicart](https://github.com/vtex-apps/minicart) and the [Checkout Cart](https://github.com/vtex-apps/checkout-cart).

![image](https://user-images.githubusercontent.com/8902498/71037159-eb04da80-20fd-11ea-983e-ce49d2ca27c9.png)

Compact version:

![image](https://user-images.githubusercontent.com/8902498/71039765-b7c54a00-2103-11ea-9e38-32fc9eb174ba.png)

## Configuration

1. Add the Summary app to your theme's dependencies in `manifest.json`. For example:

```json
{
  "dependencies": {
    "vtex.checkout-summary": "0.x"
  }
}
```

2. Add the `checkout-summary.compact` block to the `minicart-summary` block of the Minicart or the `checkout-summary` block to the `summary-wrapper` block of the Checkout Cart. For example:

```json
{
  "minicart-summary#example": {
    "blocks": ["checkout-summary.compact"]
  }
}
```

### Advanced Customization

The `checkout-summary` block is made up of other smaller blocks. Currently, its default implementation is as follows:

```json
{
  "checkout-summary": {
    "children": ["flex-layout.row#summary-coupon", "summary-totalizers"]
  },
  "flex-layout.row#summary-coupon": {
    "children": ["summary-coupon"],
    "props": {
      "marginBottom": 6
    }
  },
  "summary-coupon": {
    "blocks": ["coupon"]
  }
}
```

By default implementation we mean that whenever you use `checkout-summary` in your store you're actually using the `json` above behind the scenes.

Therefore, in order to customize the Checkout Summary configuration, you can simply use the default implementation in your code and change it as you wish.
For more information on which props you need to pass to the Summary component, [see below](#components).

This app exports all of the following blocks. You can see more detailed information of the
`checkout-summary` and `checkout-summary.compact` blocks in the [Components](#components) section.

```jsonc
{
  "checkout-summary": {
    "props": {
      "title": "Order Summary"
    }
  },
  "checkout-summary.compact": {
    "props": {
      "totalizersToShow": ["Items"]
    }
  },
  "summary-totalizers": {
    "props": {
      "showTotal": true,
      "showDeliveryTotal": true
    }
  },
  "summary-coupon": {
    // this block doesn't have any props
  }
}
```

Additionally, you can also include a [Drawer](https://vtex.io/docs/components/content-blocks/vtex.store-drawer) inside the `checkout-summary`.

Notice the following: the block declared as children of the `drawer-trigger` block will appear alongside the Summary title.

```jsonc
{
  "checkout-summary": {
    "blocks": [
      "drawer#my-drawer"
    ],
    "children": [
      "flex-layout.row#summary-coupon",
      "summary-totalizers"
    ]
  },
  "drawer#my-drawer": {
    "blocks": [
      "drawer-trigger#my-trigger"
    ]
  },
  "drawer-trigger#my-trigger": {
    "children": [
      // whatever you put inside here will
      // appear alongside the summary title
    ]
  }
}
```


### SummarySmall

The component rendered when used the `checkout-summary.compact` block.

#### Props

| Prop name | Type | Required |
| --- | --- | --- |
| [`totalizers`](#summarysmall-totalizers) | `array` | `true` |
| [`totalizersToShow`](#summarysmall-totalizerstoshow) | `array` | `true` |
| [`total`](#summarysmall-total) | `number` | `true` |

##### SummarySmall totalizers

`Array<{ id: string; value: number | null; name: string }>`

Same as the [Summary totalizers](#summary-totalizers) prop.

##### SummarySmall total

Same as the [Summary total](#summary-total) prop.

##### SummarySmall totalizersToShow

`string[]`

Id of the totalizers that should be displayed inside this component, e.g.:

```js
[
  // Value of the subtotal
  'Items',
  // Delivery value
  'Shipping'
]
```

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles              |
| ------------------------ |
| `summaryTitle`           |
| `summaryContent`         |
| `summarySmallContent`    |
| `summarySmallDisclaimer` |
| `summaryItemContainer`   |
| `summaryItemLabel`       |
| `summaryItemPrice`       |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!
