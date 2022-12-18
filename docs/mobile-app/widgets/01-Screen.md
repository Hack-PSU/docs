---
sidebar_position: 1
id: screen
---

# Screen

The `Screen` widget is a generic widget when creating a new screen. It has some configurations to adjust the safe area
padding, bottom navigation, and header. At its core, the widget is an extension of the `Scaffold` widget from Flutter.
```dart
Screen({
  Key? key,
  AppBar? appBar,
  Color? backgroundColor,
  ScreenHeader? header,
  bool withBottomNavigation = false,
  bool withDismissKeyboard = false,
  Color? contentBackgroundColor,
  bool? safeAreaTop,
  bool? safeAreaBottom,
  bool? safeAreaLeft,
  bool? safeAreaRight,
  required Widget body,
})
```

## Required

### `body`

```dart
Widget body
```

`body` is a required widget that contains all the UI for the screen.

## Properties (Optional)

### `appBar`

```dart
AppBar? appBar
```

The `appBar` follows the `AppBar` class provided by Flutter 
[here](https://api.flutter.dev/flutter/material/AppBar-class.html)

### `backgroundColor`

```dart
Color? backgroundColor
```

The `backgroundColor` property is the background color applied to the 
[Scaffold](https://api.flutter.dev/flutter/material/Scaffold/backgroundColor.html) widget from Flutter. Defaults to 
`Colors.white`.

### `header`

```dart
ScreenHeader? header
```

The `header` property displays a header with the profile button, favorites switch, and title of the screen. More about
`ScreenHeader` can be found [here](/docs/mobile-app/widgets/screen-header).

### `withBottomNavigation`

```dart
bool? withBottomNavigation = false
```

`withBottomNavigation` controls whether the bottom navigation will be shown in the screen. Defaults to `false`. 

### `withDismissKeyboard`

```dart
bool? withDismissKeyboard = false
```

`withDismissKeyboard` controls whether the keyboard should be dismissed when the user taps away from an input. This is
useful for a screen with forms as the keyboard will be dismissed and the input will not be focused when tapping away
from the input field. Defaults to `false`.

### `contentBackgroundColor`

```dart
Color? contentBackgroundColor
```

The background color of the body of the `Screen` widget.

### `safeAreaTop`

```dart
bool? safeAreaTop
```

`safeAreaTop` toggles safe area padding for the top of the screen. Defaults to `true`.

### `safeAreaBottom`

```dart
bool? safeAreaBottom
```

`safeAreaBottom` toggles safe area padding for the bottom of the screen. Defaults to `true`.

### `safeAreaLeft`

```dart
bool? safeAreaLeft
```

`safeAreaLeft` toggles safe area padding for the left of the screen. Defaults to `true`.

### `safeAreaRight`

```dart
bool? safeAreaRight
```

`safeAreaRight` toggles safe area padding for the right of the screen. Defaults to `true`.


