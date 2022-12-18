---
sidebar_position: 5
id: screens
---

# Screens

`Screens` refer to individual pages that the app can route to and from. To create a screen create the following 
structure under the `screens` folder:
```
screens
└── <screen_name>
    ├── <screen_name>_page.dart
    └── <screen_name>_cubit.dart  // optional
```

A screen can be broken up into two main parts: the UI and the data layer. The UI deals with the interface and widgets
that would show data and let users interact with data. The data layer prefetches, manipulates, interacts with
repositories, and interacts with services. The `<screen_name>_page.dart` file is where the UI lives and the
`<screen_name>_cubit.dart` file is where the data layer lives.

Widgets that are specific to the page, for example a list that shows events or a scrollable agenda to show a breakdown
of the events for a specific day can be stored within the same folder as the page (under the `<screen_name>` folder).

The following two sections will assume the normal case in which a screen has a cubit associated with it.

## UI

The UI portion will require two widgets: the first to initialize the cubit and the second to host all the UI widgets.

### Skeleton

The first widget is referred to the page. This widget will initialize the cubit as a provider for the screen widgets.
```dart
class <ScreenName>Page extends StatelessWidget {
  const <ScreenName>Page({
    Key? key,
  }) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => <ScreenName>PageCubit(
        //...initialize cubit with context
      ),
      child: Screen(
        body: const <ScreenName>Screen(),
      ),
    );
  }
}
```

The second widget is referred to as the screen. This widget will include the design, interactions, and other bloc
consumption widgets.

```dart
class <ScreenName>Screen extends StatelessWidget {
  const <ScreenName>Screen({ Key? key }) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    //...return Content here
  }
}
```

:::note

Replace any occurrence of `<ScreenName>` with the name of the screen in Pascal Case

:::

### Screen Widget

The `Screen` widget contains generic options to customize the screen. Its main function is to control padding depending
on the screen size or creating scrollable content. See more [here](/docs/mobile-app/widgets/screen).

## Data Layer

The following widgets are used to organize the cubit for the specific page. To create a cubit, we need a widget to store
the states and a widget that UI widgets can interface to manipulate states.

The following example will assume that there will be data to be fetched in which the page will need to initially load.
We keep track of this using an enum for the states of the page.

```dart
enum PageStatus { idle, loading, ready }
```

### States

We can then create our state widget, which will manage all the states from the API or user interaction.

```dart
class <ScreenName>PageCubitState {
  const <ScreenName>PageCubitState({
    //...insert fields here
    this.status = PageStatus.idle,  // optionally change the name of the field
  });
  
  <ScreenName>PageCubitState copyWith({
    //...insert fields here (make all optional)
  }) {
    return <ScreenName>PageCubitState(
      //...insert fields here
    );
  }
}
```

The `copyWith` function returns an instant of the `<ScreenName>PageCubitState` which allows the cubit to modify specific 
fields by creating a new state object without replacing previous fields.

### Cubit

A cubit is a simplified BLoC in which states are only modified through specific functions instead of through an event.
The following cubit will be used in the case of the need for a data fetch. We will include functions that will help
initializing and refetching data requests.

```dart
class <ScreenName>PageCubit extends Cubit<<ScreenName>PageCubitState> {
  <ScreenName>PageCubit(
    //...insert dependencies here
  ) : super(
        const <ScreenName>PageCubitState(
          //...initialize fields here
        );
      );
      
  Future<void> init() async {
    emit(state.copyWith(status: PageStatus.loading));
    //...insert data fetches here
    emit(
      state.copyWith(
        status: PageStatus.ready,
      ),
    );
  }
  
  void refetch() {
    emit(state.copyWith(status: PageStatus.idle));
  }
}
```

To trigger an initialization or a refetch, we need to listen to the states 

:::note

Replace all occurrence of `<ScreenName>` with the name of the screen in Pascal Case.

:::

