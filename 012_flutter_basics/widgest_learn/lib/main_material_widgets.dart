import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(title: "Flutter Tutorial", home: TutotialHome()));
}

class TutotialHome extends StatelessWidget {
  const TutotialHome({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          leading: const IconButton(
            onPressed: null,
            icon: Icon(Icons.menu),
            tooltip: 'Navigation menu',
          ),
          title: const Text('Example title'),
          actions: const [
            IconButton(
              onPressed: null,
              icon: Icon(Icons.search),
              tooltip: 'Search',
            )
          ]),
      body: const Center(
        child: Text('Hello, flutter'),
      ),
      floatingActionButton: const FloatingActionButton(
          onPressed: null, tooltip: 'Add', child: Icon(Icons.add)),
    );
  }
}
