import 'package:flutter/material.dart';

import '../styles.dart';
import '../data/menu.dart';

class MenuSmall extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
          vertical: Dimen.spacingSmall),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        mainAxisSize: MainAxisSize.max,
        children: <Widget>[
          for (var item in MenuItem.all())
            _menuItem(item)
        ],
      ),
    );
  }

  Widget _menuItem(MenuItem menuItem) {
    if (menuItem.isSpecialItem){
      return _specialMenuItem(menuItem);
    } else {
      return _normalMenuItem(menuItem);
    }
  }

  Widget _specialMenuItem(MenuItem menuItem) => OutlineButton(
      padding: EdgeInsets.symmetric(horizontal: Dimen.spacingNormal),
      child: Text(
        menuItem.name,
        style: Style.normalBlack,
      ),
      onPressed: () {},
      borderSide: BorderSide(color: NGColors.black, width: 3),
      shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(100)));

  Widget _normalMenuItem(MenuItem menuItem) =>
      Text(menuItem.name, style: Style.normalBlack,);
}
