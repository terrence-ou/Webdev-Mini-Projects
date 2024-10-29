import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:provider_shopper/models/cart.dart';

class MyCart extends StatelessWidget {
  const MyCart({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cart', style: Theme.of(context).textTheme.displayLarge),
        backgroundColor: Colors.white,
      ),
      body: Container(
          color: Colors.yellow,
          child: Column(
            children: [
              Expanded(
                  child: Padding(
                padding: const EdgeInsets.all(32),
                child: _CartList(),
              )),
              const Divider(
                height: 4,
                color: Colors.black,
              ),
              _CartTotal(),
            ],
          )),
    );
  }
}

class _CartList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var itemNameStyle = Theme.of(context).textTheme.titleLarge;
    var cart = context.watch<CartModel>();

    return ListView.builder(
        itemCount: cart.items.length,
        itemBuilder: (context, index) => ListTile(
              leading: const Icon(Icons.done),
              trailing: IconButton(
                  onPressed: () {
                    cart.remove(cart.items[index]);
                  },
                  icon: const Icon(Icons.remove_circle_outline)),
              title: Text(cart.items[index].name, style: itemNameStyle),
            ));
  }
}

class _CartTotal extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var hugeStyle =
        Theme.of(context).textTheme.displayLarge!.copyWith(fontSize: 48);
    return SizedBox(
        height: 200,
        child: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Consumer<CartModel>(
                  builder: (context, cart, child) => Text(
                        '\$${cart.totalPrice}',
                        style: hugeStyle,
                      )),
              const SizedBox(
                width: 24,
              ),
              FilledButton(
                  onPressed: () {
                    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                        content: Text('Buying not supported yet.')));
                  },
                  style: TextButton.styleFrom(foregroundColor: Colors.white),
                  child: const Text('BUY'))
            ],
          ),
        ));
  }
}
