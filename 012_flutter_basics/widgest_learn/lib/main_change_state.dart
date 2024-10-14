import 'package:flutter/material.dart';

class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _counter = 0;

  void _increment() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        ElevatedButton(onPressed: _increment, child: const Text('Increment')),
        const SizedBox(
          width: 16,
        ),
        SizedBox(
          width: 100,
          child: Center(child: Text('Count: $_counter')),
        )
      ],
    );
  }
}

void main() {
  runApp(const MaterialApp(
      home: Scaffold(
    body: Center(child: Counter()),
  )));
}
