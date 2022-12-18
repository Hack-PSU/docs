---
sidebar_position: 3
id: file-structure
---

# File Structure

The structure below will be the file structure in the `lib` folder where all flutter source code should be located.

```
lib
├── common
│   ├── api
│   ├── bloc
│   ├── config
│   ├── models
│   └── services
├── routers
├── screens
├── styles
├── widgets
├── app_entry.dart
├── main.dart
└── main_dev.dart
```

## API

The `api` folder is structured to group data models together
```
api
└── <model>
    ├── <model>_model.dart
    ├── <model>_model.g.dart
    └── <model>_repository.dart
```

The `<model>_model.g.dart` is the generated model file from running the JSON serialization step. Below is an example 
of what a model looks like for the `Event` model.

```dart
import 'package:json_annotation/json_annotation.dart';

part 'event_model.g.dart';

enum EventType {
  @JsonValue("activity")
  ACTIVITY,
  @JsonValue("workshop")
  WORKSHOP,
  @JsonValue('food')
  FOOD,
}

@JsonSerializable(
  createFactory: true,
  createToJson: true,
  fieldRename: FieldRename.snake,
)
class Event {
  Event({
    required this.uid,
    required this.eventTitle,
    required this.eventType,
    required this.eventStartTime,
    required this.eventEndTime,
    required this.eventDescription,
    required this.locationName,
    this.starred = false,
    required this.eventIcon,
    required this.wsPresenterNames,
    required this.wsUrls,
    this.wsRelevantSkills,
    this.wsSkillLevel,
  });

  factory Event.fromJson(Map<String, dynamic> json) => _$EventFromJson(json);

  Map<String, dynamic> toJson() => _$EventToJson(this);

  static DateTime _eventTimeFromJson(int int) =>
      DateTime.fromMillisecondsSinceEpoch(int);

  final String? uid;
  final String? eventTitle;
  EventType? eventType;

  @JsonKey(fromJson: _eventTimeFromJson)
  final DateTime eventStartTime;

  @JsonKey(fromJson: _eventTimeFromJson)
  final DateTime eventEndTime;
  final String? eventDescription;
  final String? locationName;
  bool? starred;
  final String? eventIcon;
  final String? wsPresenterNames;
  final List<String>? wsUrls;
  final String? wsSkillLevel;
  final String? wsRelevantSkills;
}
```

Each model has a corresponding `repository` file that lists all the endpoints related to that model.

## BLoC

The `bloc` folder groups all **shared** blocs that is used in a more general case. For example blocs used to persist
global states, authentication blocs, or managing user information. To create a bloc follow the following structure:
```
bloc
└── <bloc_name>
    ├── <bloc_name>_bloc.dart
    ├── <bloc_name>_event.dart
    └── <bloc_name>_state.dart
```

## Services

The `services` folder groups general-purpose repositories that are not directly related to the API. This can include
integrations to Firebase Auth, integration for notification services, etc.
