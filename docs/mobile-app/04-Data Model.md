---
sidebar_position: 4
id: data-model
---

# Data Models

Data models are used to model JSON structures for transferring data across widgets, API endpoints, or integrating with
services.

## JSON Serialization

Every model should always have the following line at the top under the import statement. This will allow the
JSON serialization step to know the filename it should create.
```dart
part '<model_name>.g.dart';
```

Every model will have the following structure:
```dart
@JsonSerializable(
  createFactory: true,
  createToJson: true,
  fieldRename: FieldRename.snake,  // see below
)
class Model {
  Model({
    // ...insert all fields
  });
  
  factory Model.fromJson(Map<String, dynamic> json) => _$ModelFromJson(json);
  
  Map<String, dynamic> toJson() => _$ModelToJson(this);
  
  //...rest of field initialization
}
```

:::note

Replace the `Model` class along with any symbols of the same name within the class to the name of the model.

:::

### Field Rename

The `fieldRename` field is used to indicate the naming convention used in the incoming JSON object. If the JSON
object to be serialized uses snake case (underlines) use the `FieldRename.snake` to cast names into the equivalent
fields (provided that fields are camel case).

## Generating Serialization

To generate the finalized JSON serialization to be used in other models:
```shell
flutter pub run build_runner build
```


