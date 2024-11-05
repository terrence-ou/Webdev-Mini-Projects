import 'package:flutter/material.dart';
import 'data.dart';

void main() {
  runApp(const DocumentApp());
}

class DocumentApp extends StatelessWidget {
  const DocumentApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(useMaterial3: true),
        home: DocumentScreen(
          document: Document(),
        ));
  }
}

class DocumentScreen extends StatelessWidget {
  final Document document;
  const DocumentScreen({required this.document, super.key});

  @override
  Widget build(BuildContext context) {
    final (title, :modified) = document.metadata;
    final blocks = document.getBlocks();
    final formattedModifiedDate = formatDate(modified);
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: Column(
        children: [
          Center(
            child: Text('Last Modified $formattedModifiedDate'),
          ),
          Expanded(
              child: ListView.builder(
                  itemCount: blocks.length,
                  itemBuilder: (context, index) {
                    return BlockWidget(block: blocks[index]);
                  }))
        ],
      ),
    );
  }
}

class BlockWidget extends StatelessWidget {
  final Block block;

  const BlockWidget({required this.block, super.key});

  @override
  Widget build(BuildContext context) {
    TextStyle? textStyle;

    //switch (block.type) {
    //  case 'h1':
    //    textStyle = Theme.of(context).textTheme.displayMedium;
    //  case 'p' || 'checkbox':
    //    textStyle = Theme.of(context).textTheme.bodyMedium;
    //  case _:
    //    textStyle = Theme.of(context).textTheme.bodySmall;
    //}

    textStyle = switch (block.type) {
      'h1' => Theme.of(context).textTheme.displayMedium,
      'p' || 'checkbox' => Theme.of(context).textTheme.bodyMedium,
      _ => Theme.of(context).textTheme.bodySmall,
    };

    return Container(
        margin: const EdgeInsets.symmetric(horizontal: 30, vertical: 6),
        child: Text(
          block.text,
          style: textStyle,
        ));
  }
}

String formatDate(DateTime dateTime) {
  final today = DateTime.now();
  final difference = dateTime.difference(today);
  return switch (difference) {
    Duration(inDays: 0) => 'today',
    Duration(inDays: 1) => 'tomorrow',
    Duration(inDays: -1) => 'yesterday',
    Duration(inDays: final days) when days > 7 => '${days ~/ 7} weeks from now',
    Duration(inDays: final days) when days < -7 =>
      '${days.abs() ~/ 7} weeks ago',
    Duration(inDays: final days, isNegative: true) => '${days.abs()} days ago',
    Duration(inDays: final days) => '$days days from now',
  };
}
