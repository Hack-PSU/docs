---
sidebar_position: 4
id: render-html
---

# RenderHtml

The `RenderHtml` widget takes an HTML string with a `p` tag and transforms them into a widget tree that Flutter can
display. The widget uses the `RichText` widget and recursively parses the HTML string to build the tree of `RichText`
widgets while maintaining the inheritance order of styles from bold, italics, and underline tags in HTML. These styles
are embedded into the `RichText` widget and should display the same styles as the HTML string.

The widget supports styles from bold `<b></b>`, italics `<i></i>`, and underline `<u></u>` tags. Hyperlink elements
are taken from anchor links `<a></a>`.

```dart
RenderHtml(
  String html, {
  Key? key,
  TextStyle? textStyle,
  TextStyle? hyperlinkStyle,
});
```

## Required

### `html`

```dart
String html;
```

The HTML string to render. If `html` is a string that does not contain a `p` tag, the widget will wrap the text into
a `p` HTML element.

## Properties (Optional)

### `textStyle`

```dart
TextStyle? textStyle;
```

The base style for all text elements.

### `hyperlinkStyle`

```dart
TextStyle? hyperlinkStyle;
```

The base style for all hyperlink elements.

