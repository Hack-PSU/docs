---
sidebar_position: 2
id: getting-started
---

# Getting Started

To install dependencies you will need the latest version of [Flutter](https://docs.flutter.dev/get-started/install) and
the [Dart](https://dart.dev/get-dart) SDK.

## iOS Development

When developing for iOS, you will also need to download the latest version of XCode (from the App Store) and install the
developer tools:

```shell
xcode-select --install
```

## Local Development

Clone the [repo](https://github.com/Hack-PSU/mobile-app) into your current directory:
```shell
git clone git@github.com:Hack-PSU/mobile-app.git \
cd mobile-app
```

Install dependencies:
```shell
flutter pub get
```

Install iOS dependencies:
```shell
cd ios && pod install
```

:::note

`pod install` only works when developing for iOS and using an Apple device.

:::

To develop JSON models for both transferring data within the app and from the API, we use static JSON serialization
with the JSON Annotation library in Flutter. To run the app we need to perform the initial build:
```shell
flutter pub run build_runner build
```

### Environments

There are two environments setup within the repo to test different functionalities of the app. Check the table below to
see what each environment has.

Development Environment:
```shell
flutter run --flavor dev -t lib/main_dev.dart
```

Production Environment:
```shell
flutter run --flavor prod -t lib/main.dart
```

| Features       | Dev | Prod |
|----------------|:---:|:----:|
| Staging API v2 |  ✅  |  ❌   |
| Prod API v2    |  ❌  |  ✅   |
| Notifications  |  ❌  |  ✅   |
| WebSocket      |  ❌  |  ✅   |
| Native Login   |  ✅  |  ✅   |
| Social Login   |  ✅  |  ✅   |
