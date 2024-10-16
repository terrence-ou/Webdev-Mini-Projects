import 'package:flutter/material.dart';

abstract class Layout extends StatelessWidget {
  const Layout({super.key});
  String get title;
}

class BorderedBox extends StatelessWidget {
  const BorderedBox({super.key});
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          border: Border.all(color: Colors.transparent),
          color: Colors.orangeAccent,
          borderRadius: BorderRadius.circular(20)),
      width: 120,
      height: 120,
      // color: Colors.orangeAccent,
    );
  }
}

class Layout1 extends Layout {
  const Layout1({super.key});
  @override
  final title = "First layout";

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: BorderedBox(),
    );
  }
}
