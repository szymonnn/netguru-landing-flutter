import 'package:flutter/material.dart';
import '../data/menu.dart';

import '../styles.dart';

class MenuLarge extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: Dimen.menuHeight,
      padding: EdgeInsets.symmetric(
          vertical: 10, horizontal: MediaQuery.of(context).size.width * 0.11),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        mainAxisSize: MainAxisSize.max,
        children: <Widget>[
          Container(
            padding: EdgeInsets.symmetric(vertical: 22),
            child: Image.asset("assets/netguru-logo.png"),
          ),
          for (var item in MenuItem.all()) _menuItem(item)
        ],
      ),
    );
  }

  Widget _menuItem(MenuItem menuItem) {
    if (menuItem.isSpecialItem) {
      return _specialMenuItem(menuItem);
    } else {
      return _normalMenuItem(menuItem);
    }
  }

  Widget _specialMenuItem(MenuItem menuItem) => OutlineButton(
      padding: EdgeInsets.symmetric(horizontal: Dimen.spacingLarge),
      child: Text(
        menuItem.name,
        style: Style.button,
      ),
      onPressed: () {},
      borderSide: BorderSide(color: NGColors.white, width: 3),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(100)));

  Widget _normalMenuItem(MenuItem menuItem) => Text(
        menuItem.name,
        style: Style.normal,
      );
}
