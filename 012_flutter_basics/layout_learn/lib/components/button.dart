import 'package:flutter/material.dart';

class Button extends StatelessWidget {
  const Button(
      {required this.isSelected,
      required this.index,
      required this.onPressed,
      super.key});

  final bool isSelected;
  final int index;
  final VoidCallback onPressed;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () {
        Scrollable.ensureVisible(context,
            duration: const Duration(milliseconds: 350), alignment: 0.5);
        onPressed();
      },
      style: TextButton.styleFrom(
          foregroundColor: Colors.white,
          backgroundColor: isSelected ? Colors.grey[800] : Colors.grey),
      child: Text((index + 1).toString()),
    );
  }
}
