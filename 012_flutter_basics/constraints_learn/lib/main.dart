import 'package:flutter/material.dart';
import 'components/examples.dart';
import 'components/button.dart';

void main() => runApp(const HomePage());

class HomePage extends StatelessWidget {
  const HomePage({super.key});
  @override
  Widget build(BuildContext context) {
    return const FlutterLayoutArticle([
      Example1(),
      Example2(),
      Example3(),
      Example4(),
      Example5(),
      Example6(),
      Example7(),
      Example8(),
      Example9(),
      Example10(),
      Example11(),
      Example12(),
      Example13(),
      Example14(),
      Example15(),
      Example16(),
      Example17(),
      Example18(),
      Example19()
    ]);
  }
}

class FlutterLayoutArticle extends StatefulWidget {
  const FlutterLayoutArticle(this.examples, {super.key});
  final List<Example> examples;

  @override
  State<FlutterLayoutArticle> createState() => _FlutterLayoutArticleState();
}

class _FlutterLayoutArticleState extends State<FlutterLayoutArticle> {
  late int count;
  late Widget example;
  late String code;
  late String explanation;

  @override
  void initState() {
    count = 1;
    code = const Example1().code;
    explanation = const Example1().explanation;
    super.initState();
  }

  @override
  void didUpdateWidget(FlutterLayoutArticle oldWidget) {
    super.didUpdateWidget(oldWidget);
    var example = widget.examples[count - 1];
    code = example.code;
    explanation = example.explanation;
  }

  void showExample(int exampleNumber, String code, String explanation) {
    setState(() {
      count = exampleNumber;
      this.code = code;
      this.explanation = explanation;
    });
  }

  Widget button(int exampleNumber) {
    return Button(
        key: ValueKey('button$exampleNumber'),
        isSelected: count == exampleNumber,
        exampleNumber: exampleNumber,
        onPressed: () {
          showExample(exampleNumber, widget.examples[exampleNumber - 1].code,
              widget.examples[exampleNumber - 1].explanation);
        });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        // debugShowCheckedModeBanner: false,
        title: 'Flutter Layout Article',
        home: SafeArea(
            child: Material(
                color: Colors.black,
                child: FittedBox(
                    child: Container(
                  width: 400,
                  height: 670,
                  color: const Color(0xFFCCCCCC),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Expanded(
                          child: ConstrainedBox(
                              constraints: const BoxConstraints.tightFor(
                                  width: double.infinity,
                                  height: double.infinity),
                              child: widget.examples[count - 1])),
                      Container(
                          height: 50,
                          width: double.infinity,
                          color: Colors.black,
                          child: SingleChildScrollView(
                              scrollDirection: Axis.horizontal,
                              child: Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  for (int i = 0;
                                      i < widget.examples.length;
                                      i++)
                                    Container(
                                        width: 58,
                                        padding: const EdgeInsets.only(
                                            left: 4, right: 4),
                                        child: button(i + 1))
                                ],
                              ))),
                      Container(
                          height: 273,
                          color: Colors.grey[50],
                          child: Scrollbar(
                              child: SingleChildScrollView(
                            key: ValueKey(count),
                            child: Padding(
                              padding: const EdgeInsets.all(10),
                              child: Column(
                                children: [
                                  Center(child: Text(code)),
                                  const SizedBox(height: 15),
                                  Text(explanation,
                                      style: TextStyle(
                                          color: Colors.blue[800],
                                          fontStyle: FontStyle.italic))
                                ],
                              ),
                            ),
                          )))
                    ],
                  ),
                )))));
  }
}
