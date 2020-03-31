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
  "dependencies": {
    "vtex.checkout-summary": "0.x"
  }
```

2. Add the `checkout-summary.compact` block to the `minicart-summary` block of the Minicart or the `checkout-summary` block to the `summary-wrapper` block of the Checkout Cart. For example:

```json
  "minicart-summary#example": {
    "blocks": ["checkout-summary.compact"]
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

Additionally, you can also include a `"drawer"` block inside the `checkout-summary`, and the drawer trigger
will appear alongside the "Summary" title.

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

## Components

### Summary

The wrapper and orchestrator of the inner components of the `checkout-summary` block.

#### Props

| Prop name | Type | Required |
| --- | --- | --- |
| [`coupon`](#summary-coupon) | `string` | `false` |
| [`insertCoupon`](#summary-insertCoupon) | `func` | `false` |
| [`loading`](#summary-loading) | `boolean` | `false` |
| [`totalizers`](#summary-totalizers) | `array` | `true` |
| [`total`](#summary-total) | `number` | `true` |

##### Summary coupon

The value of the coupon displayed inside the input. E.g.: `FIRSTBUY`

##### Summary insertCoupon

`(coupon: string) => Promise<{ success: boolean; errorKey: string }>`

Function used when the user typed in the coupon form and submitted a new value.

##### Summary loading

Whether the submission for a new coupon is still loading.

##### Summary totalizers

`Array<{ id: string; value: number | null; name: string }>`

The totalizers displayed in the summary. Should have at least a `Items` and `Shipping`
totalizers. E.g.:

```javascript
[
  {
     id: 'Items',
     name: 'Items total',
     value: 2000,
  },
  {
     id: 'Shipping',
     name: 'Shipping total',
     value: 0,
  },
]
```

##### Summary total

The total value of the order. Should be the sum of all totalizers values.

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

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
