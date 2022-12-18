---
sidebar_position: 3
id: default-text
---

# DefaultText

The `DefaultText` widget configures `Text` widgets to use a consistent font selection and font styles. The widget
extends from the existing `Text` widget.

```dart
DefaultText(
  String text, {
  Key? key,
  TextLevel? textLevel,
  FontWeight? weight,
  double? fontSize,
  FontStyle? fontStyle,
  int? maxLines,
  TextAlign? textAlign,
  double? letterSpacing,
  Color? color,
  double? height,
});
```

## Required

### `text`

The text to be shown by the widget.

## Properties (Optional)

### `textLevel`

```dart
enum TextLevel {
  h1,
  h2,
  h3,
  h4,
  sub1,
  sub2,
  button,
  body1,
  body2,
  caption,
  overline
}
```

`TextLevel` follows the naming conventions used by the design system. 

### `weight`

```dart
FontWeight? weight;
```

The font weight of the text (depends on font family availability).

### `fontSize`

```dart
double? fontSize;
```

The size of the font.

### `fontStyle`

```dart
FontStyle? fontStyle;
```

The style of the font (follows `FontStyle` from Flutter).

### `maxLines`

```dart
int? maxLines;
```

The maximum number of lines to be rendered; overflow is set to `TextOverflow.ellipsis`.

### `textAlign`

```dart
TextAlign? textAlign;
```

See `TextAlign` from Flutter.

### `letterSpacing`

```dart
double? letterSpacing;
```

Controls the spacing between each character of the font.

### `color`

```dart
Color? color;
```

The color of the text.

### `height`

```dart
double? height;
```

The height of the widget.
