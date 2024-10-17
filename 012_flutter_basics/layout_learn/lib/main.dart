import 'package:flutter/material.dart';
import 'components/layout.dart';
import 'components/button.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.purple),
        useMaterial3: true,
      ),
      home: const LayoutTutorial([
        Layout1(),
        Layout2(),
        Layout3(),
        Layout4(),
        Layout5(),
        Layout6(),
        Layout7()
      ]),
    );
  }
}

class LayoutTutorial extends StatefulWidget {
  const LayoutTutorial(this.examples, {super.key});
  final List<Layout> examples;

  @override
  State<StatefulWidget> createState() => _LayoutTutorial();
}

class _LayoutTutorial extends State<LayoutTutorial> {
  late int index;
  late String title;
  late Widget example;

  void setExampleIndex(int newIndex) {
    setState(() {
      index = newIndex;
      title = widget.examples[newIndex].title;
      example = widget.examples[newIndex];
    });
  }

  Widget button(int currIndex) {
    return Button(
        key: ValueKey('example$currIndex'),
        isSelected: currIndex == index,
        index: currIndex,
        onPressed: () {
          setExampleIndex(currIndex);
        });
  }

  @override
  void initState() {
    index = 0;
    title = widget.examples[index].title;
    example = widget.examples[index];
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
            child: Column(
      children: [
        Expanded(
          child: example,
        ),
        Padding(
            padding: const EdgeInsets.symmetric(horizontal: 10.0),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  for (int i = 0; i < widget.examples.length; i++)
                    Container(
                      width: 50,
                      padding: const EdgeInsets.symmetric(horizontal: 5),
                      child: button(i),
                    ),
                ],
              ),
            ))
      ],
    )));
  }
}
