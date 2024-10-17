import 'package:flutter/material.dart';

abstract class Layout extends StatelessWidget {
  const Layout({super.key});
  String get title;
}

class Item {
  late Color color;
  late String text;

  Item({required this.color, required this.text});
}

class BorderedBox extends StatelessWidget {
  const BorderedBox({super.key});
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          border: Border.all(color: Colors.orangeAccent.shade700, width: 3),
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
  final title = "Center()";

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const BorderedBox(),
          const SizedBox(
            height: 10,
          ),
          Text(title)
        ],
      ),
    );
  }
}

class Layout2 extends Layout {
  const Layout2({super.key});
  @override
  final title = "EdgeInsets()";

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            padding: const EdgeInsets.all(20),
            color: Colors.amberAccent[100],
            child: const BorderedBox(),
          ),
          const SizedBox(
            height: 10,
          ),
          Text(title)
        ],
      ),
    );
  }
}

class Layout3 extends Layout {
  const Layout3({super.key});
  @override
  final title = "Row()";

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Row(
            children: [BorderedBox(), BorderedBox(), BorderedBox()],
          ),
          const SizedBox(
            height: 10,
          ),
          Text(title)
        ],
      ),
    );
  }
}

class Layout4 extends Layout {
  const Layout4({super.key});
  @override
  final title = "Row(): spaceEvenly";

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [BorderedBox(), BorderedBox(), BorderedBox()],
          ),
          const SizedBox(
            height: 10,
          ),
          Text(title)
        ],
      ),
    );
  }
}

class Layout5 extends Layout {
  const Layout5({super.key});
  @override
  final title = "Row(): Expanded()";

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Row(
            children: [
              BorderedBox(),
              Expanded(
                child: BorderedBox(),
              ),
              BorderedBox()
            ],
          ),
          const SizedBox(
            height: 10,
          ),
          Text(title)
        ],
      ),
    );
  }
}

class Layout6 extends Layout {
  const Layout6({super.key});
  @override
  final title = "Row(): Expanded(flex:2)";

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Row(
            children: [
              Expanded(
                child: BorderedBox(),
              ),
              Expanded(
                flex: 2,
                child: BorderedBox(),
              ),
              Expanded(
                child: BorderedBox(),
              ),
            ],
          ),
          const SizedBox(
            height: 10,
          ),
          Text(title)
        ],
      ),
    );
  }
}

class Layout7 extends Layout {
  const Layout7({super.key});
  @override
  final title = "ListView";

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
            padding: const EdgeInsets.symmetric(vertical: 4),
            child: Text(
              title,
              style:
                  const TextStyle(fontSize: 20.0, fontWeight: FontWeight.bold),
            )),
        Expanded(
            child: ListViewBuilder(items: [
          Item(color: Colors.teal, text: 'Teal'),
          Item(color: Colors.indigo, text: 'Indigo'),
          Item(color: Colors.pink, text: 'Pink'),
          Item(color: Colors.lime, text: 'Lime'),
          Item(color: Colors.orange, text: 'Orange'),
          Item(color: Colors.amber, text: 'Amber'),
        ])),
      ],
    );
  }
}

class ListViewBuilder extends StatelessWidget {
  const ListViewBuilder({required this.items, super.key});
  final List<Item> items;

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: items.length,
      itemBuilder: (context, idx) {
        return ListItem(color: items[idx].color, text: items[idx].text);
      },
    );
  }
}

class ListItem extends StatelessWidget {
  const ListItem({required this.color, required this.text, super.key});
  final Color color;
  final String text;
  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 30),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              color: color,
              width: 60,
              height: 25,
            ),
            Text(text)
          ],
        ));
  }
}
