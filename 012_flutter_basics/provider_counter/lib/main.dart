import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  return runApp(ChangeNotifierProvider(
      create: (context) => Counter(), child: const MyApp()));
}

class Counter with ChangeNotifier {
  int value = 0;
  void increment() {
    value += 1;
    notifyListeners();
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(primarySwatch: Colors.blue),
        home: const MyHomePage());
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Flutter Demo Home Page')),
      body: Center(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text('You have pushed the button this many times:'),
          Consumer<Counter>(
            builder: (context, counter, child) => Text(
              '${counter.value}',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          )
        ],
      )),
      floatingActionButton: FloatingActionButton(
          onPressed: () {
            var counter = context.read<Counter>();
            counter.increment();
          },
          tooltip: 'Increment',
          child: const Icon(Icons.add)),
    );
  }
}
