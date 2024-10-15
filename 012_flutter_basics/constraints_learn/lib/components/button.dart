import 'package:flutter/material.dart';

class Button extends StatelessWidget {
  final bool isSelected;
  final int exampleNumber;
  final VoidCallback onPressed;

  const Button(
      {required this.isSelected,
      required this.exampleNumber,
      required this.onPressed,
      super.key});

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: TextButton.styleFrom(
        foregroundColor: Colors.white,
        backgroundColor: isSelected ? Colors.grey : Colors.grey[800],
      ),
      child: Text(exampleNumber.toString()),
      onPressed: () {
        Scrollable.ensureVisible(context,
            duration: const Duration(milliseconds: 350),
            curve: Curves.easeOut,
            alignment: 0.5);
        onPressed();
      },
    );
  }
}
