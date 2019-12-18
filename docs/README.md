# Summary

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
