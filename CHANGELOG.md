# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `schema` to `Summary` component so it appears in Site Editor.

## [0.12.0] - 2019-11-14

### Changed

- `couponErrorKey` is not being provided as a prop anymore but, instead, it is now part of `insertCoupon` result.

## [0.11.0] - 2019-11-06

### Added

- The necessary `checkout-coupon` data.

### Changed

- Store interfaces `preview` props.

## [0.10.0] - 2019-11-06

### Added

- Preview skeleton.
- `flex-layout` to coupon's block.

## [0.9.0] - 2019-11-06

### Added

- New `SummarySmall` component and `checkout-summary.compact` interface.
- New `showTotal` and `showDeliveryTotal` props to `SummaryTotalizers`.

## [0.8.1] - 2019-10-23

### Changed

- Element's `id` to lowercase letters.

## [0.8.0] - 2019-10-18

### Removed

- "Checkout" button. It was moved to `checkout-cart`.

## [0.7.1] - 2019-10-16

### Added

- `Styleguide` components ids.

## [0.7.0] - 2019-10-14

## [0.6.1] - 2019-10-01

### Changed

- Styles to fit in flex layout

## [0.6.0] - 2019-09-20

### Changed

- Summary components to be store blocks

## [0.5.0] - 2019-09-09

### Added

- Tax totalizer translations

### Changed

- FormattedMessage instead of intl

## [0.4.1] - 2019-09-06

### Added

- Summary and Checkout entries in intl list

## [0.4.0] - 2019-08-29

### Added

- Price component in order to show message "free" instead of zero

## [0.3.0] - 2019-08-26

### Added

- Discounts internationalization

## [0.2.2] - 2019-08-23

- Hot fix: title margin

## [0.2.1] - 2019-08-20

## [0.2.0] - 2019-08-19

### Changed

- Totalizers prop as an array of Totalizer objects
- Default values to props

## [0.1.0] - 2019-08-15

### Added

- React component for summary
- Extension point in order to render Coupon app
- Go to checkout button
- Interface to be used by Cart app

- **Component** Create the VTEX Store Component _IO Base App_
