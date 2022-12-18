---
sidebar_position: 2
id: websocket
---

# WebSocket

WebSocket integration is managed by a custom widget `SocketManager` that manages states and forwards listened events
through an observer pattern. We use `rxdart` to create a socket that sends events to its respective observers. This 
approach creates an internal bridge that spans between widgets and pages.

To ensure that we only create the connection once, `SocketManager` is designed to be a singleton such that we can use
dependency injection in order to supply this resource to pages that need its functionality. The `SocketManager` is
initialized once in the `AuthBloc` after a user is successfully authenticated. We then use the supplied token to 
properly authorize the user to use the service.

To use the `SocketManager`, we subscribe to the internal socket during the initialization of a page cubit.

```dart
class <ScreenName>PageCubit extends Cubit<<ScreenName>PageCubitState> {
  cosnt <ScreenName>PageCubit(
    //...insert dependencies here
  ) : super(
        const <ScreenName>PageCubitState(),
      ) {
   _socketSubscription = SocketManager.instance.socket.listen((data) {
     //...insert data integration with cubit
   }); 
  }
  
  late final StreamSubscription<SocketData> _socketSubscription;
  
  @override
  Future<void> close() async {
    await _socketSubscription.cancel();
    super.close();
  }
}
```

We need the two additional snippets (overriding close and the `socketSubscription`) in order to properly allocate
and deallocate a subscription to the socket.
