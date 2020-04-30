# Checkout Summary

The Checkout Summary app exports blocks that allow users to apply coupon codes and verify their order value in the [Minicart](https://github.com/vtex-apps/minicart) and in the [Checkout Cart](https://github.com/vtex-apps/checkout-cart).

![image](https://user-images.githubusercontent.com/8902498/71037159-eb04da80-20fd-11ea-983e-ce49d2ca27c9.png)
*Checkout Summary using the `checkout-summary` block*

![image](https://user-images.githubusercontent.com/8902498/71039765-b7c54a00-2103-11ea-9e38-32fc9eb174ba.png)
*Checkout Summary shortened version using the `checkout-summary.compact` block*

## Configuration

1. Add the Checkout Summary app to your theme's dependencies in `manifest.json`. For example:

```json
  "dependencies": {
    "vtex.checkout-summary": "0.x"
  {
```

You are now able to use all blocks exported by the `checkout-summary` app. These are:

| Block name | Description |
| -------------- | ----------------------------------------------- |
| `checkout-summary` | Displays the checkout summary. |
| `checkout-summary.compact` | Displays a shortened version of the checkout summary. |
| `summary-totalizers` | This block is a child of `checkout-summary` and `checkout-summary.compact`. It is responsible for defining which values are going to be displayed in the checkout summary. |

2. According to the desired version, add the `checkout-summary` or the `checkout-summary.compact` block to your theme. These must be declared as a block in the `minicart-summary` (block exported from the [Minicart](https://vtex.io/docs/components/all/vtex.minicart@2.45.0/) app) or in the `summary-wrapper` (block exported from the Checkout Cart). For example:

```json
{
  "minicart-summary#example": {
    "blocks": ["checkout-summary.compact"]
  }
}
```

By declaring one of the blocks instructed above, the Checkout Summary component will be automatically rendered due to a default JSON being implemented behind the scenes.

In order to customize it, check out the Advanced Configuration section below.

### Advanced Configuration

The `checkout-summary` uses the JSON below in order to render the Checkout Summary component:

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

The `checkout-summary.compact` uses the JSON below in order to render the Checkout Summary component in the shortened version:
  
```json
{
  "checkout-summary.compact": {
    "children": ["summary-totalizers"]
  }
}
```

Therefore, in order to customize it, you can simply use the default implementations stated above in your theme code (in the `minicart-summary` or `summary-wrapper` ) and change it as you wish, according to the desired Checkout Summary component (default or shortened version)

#### `checkout-summary` props
 
| Prop name | Type | Description | Default value |
| --- | --------- | ------ | -------|
| `title` | `string` | Displays a text label as the Checkout Summary component's title. | `Summary` |
| `totalizersToShow` | `array` | Array of strings defining which values are going to be displayed on the Checkout Summary page. Possible values are: `'Items'`, `'Discounts'` and `'Shipping'`. | `['Items']`| 

Additionally, it is also possible to declare a [Drawer](https://vtex.io/docs/components/content-blocks/vtex.store-drawer) as a `block` within `checkout-summary`.

#### `checkout-summary.compact` props

| Prop name | Type | Description | Default value |
| --- | --------- | ------ | -------|
| `totalizersToShow` | `array` | Defines which values are going to be displayed on the Checkout Summary page. | `undefined`|

#### `summary-totalizers` props
 
| Prop name | Type | Description | Default value |
| --- | --------- | ------ | -------|
| `showTotal` | `boolean` | Whether the total value of the purchase should be displayed (`true`) or not (`false`). | `true`|
| `showDeliveryTotal` | `boolean` | Whether the delivery cost should be displayed (`true`) or not (`false`). | `true` |

## Customization

In order to apply CSS customization to this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ------------------------ |
| `summaryTitle` |
| `summaryContent` |
| `summarySmallContent` |
| `summarySmallDisclaimer` |
| `summaryItemContainer` |
| `summaryItemLabel` |
| `summaryItemPrice` |
