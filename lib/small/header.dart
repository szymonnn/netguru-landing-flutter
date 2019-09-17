import 'package:flutter/material.dart';

import '../styles.dart';

class HeaderSmall extends StatelessWidget {
  final Function onPressed;

  HeaderSmall(this.onPressed);

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: EdgeInsets.all(Dimen.spacingNormal),
        height: Dimen.headerHeight,
        child: IconButton(
          icon: Image.network("images/menu-icon.png"),
          onPressed: onPressed,
        ));
  }
}
