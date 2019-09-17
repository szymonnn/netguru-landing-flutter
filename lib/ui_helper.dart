import 'package:flutter/material.dart';

isLarge(BuildContext context) => MediaQuery.of(context).size.width >= 1100;

isSmall(BuildContext context) => MediaQuery.of(context).size.width < 500;

toggleDrawer(BuildContext context) {
  final scaffold = Scaffold.of(context);
  if (scaffold.isDrawerOpen) {
    Navigator.of(context).pop();
  } else {
    scaffold.openDrawer();
  }
}