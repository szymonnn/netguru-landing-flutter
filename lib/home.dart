import 'package:flutter/material.dart';
import 'package:page_indicator/page_indicator.dart';

import 'data/page.dart';
import 'large/header.dart';
import 'large/menu.dart';
import 'page.dart';
import 'small/header.dart';
import 'small/menu.dart';
import 'styles.dart';
import 'ui_helper.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: _drawer(context),
      body: Builder(
        builder: (context) => Stack(
          children: <Widget>[
            PageIndicatorContainer(
              length: Page.all().length,
              padding: EdgeInsets.only(
                  bottom: MediaQuery.of(context).size.height * 0.1),
              indicatorSpace: Dimen.spacingNormal,
              indicatorColor: NGColors.whiteTransparent1,
              indicatorSelectorColor: NGColors.white,
              child: PageView(children: [
                for (var page in Page.all())
                  PageWidget(page)
              ]),
            ),
            Column(
              children: <Widget>[

                if (isLarge(context))
                  HeaderLarge()
                else
                  HeaderSmall(() {
                    toggleDrawer(context);
                  }),

                if (isLarge(context))
                  MenuLarge()
              ],
            )
          ],
        ),
      ),
    );
  }

  Widget _drawer(BuildContext context) {

    if (!isLarge(context))
      return Drawer(
        child: MenuSmall(),
      );
    else
      return null;
  }
}
