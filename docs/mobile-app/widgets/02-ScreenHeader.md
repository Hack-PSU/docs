---
sidebar_position: 2
id: screen-header
---

# ScreenHeader

The `ScreenHeader` widget provides a generic header for each screen allowing a custom body to be used instead of the
defaults. There are three variations for the `ScreenHeader` widget:

## Custom Body
```dart
ScreenHeader({
  Key? key,
  required Widget body,
});
```

### `body`
```dart
Widget body;
```

A custom widget used as the body of the header.

## Custom Default Header

```dart
ScreenHeader.only({
  Key? key,
  bool? withText,
  bool? withSwitch,
  bool? withBackgroundImage,
  bool? withProfile,
  String? text,
  DecorationImage? backgroundImage,
});
```

### `withText`

```dart
bool? withText;
```

This property toggles whether a text will be shown on the left side of the header. Defaults to `false`.

### `withSwitch`

```dart
bool? withSwitch;
```

This property toggles whether the favorites switch will be shown. Defaults to `false`.

### `withBackgroundImage`
```dart
bool? withBackgroundImage;
```

This property toggles whether the header will use a background image. Defaults to `false`.

### `withProfile`
```dart
bool? withProfile;
```

This property toggles whether the user's profile button will be shown. Defaults to `false`.

### `text`
```dart
String? text;
```

The text shown when `withText` is set to `true`.

### `backgroundImage`
```dart
DecorationImage? backgroundImage;
```

The background image shown when `withBackgroundImage` is set to `true`.

## Default Text Header

```dart
ScreenHeader.text(
  String text, {
  Key? key,
  DecorationImage? backgroundImage,
});
```

This factory constructor is equivalent to the following:
```dart
ScreenHeader.only(
  key: key,
  text: text,
  backgroundImage: backgroundImage,
  withText: true,
  withBackgroundImage: true,
  withProfile: true,
  withSwitch: true,
)
```
