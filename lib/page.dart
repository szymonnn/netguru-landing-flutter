
import 'package:flutter/material.dart';

import 'data/page.dart';
import 'styles.dart';

class PageWidget extends StatelessWidget {
  final Page page;

  PageWidget(this.page);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: Dimen.spacingNormal),
      alignment: AlignmentDirectional.center,
      decoration: BoxDecoration(
          color: NGColors.blackTransparent1,
          backgroundBlendMode: BlendMode.overlay,
          image: DecorationImage(
              image: AssetImage(page.image), fit: BoxFit.cover)),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          Text(
            page.title,
            style: Style.title,
            textAlign: TextAlign.center,
          ),
          Container(height: Dimen.spacingLarge),
          Text(
            page.subtitle,
            style: Style.subtitle,
            textAlign: TextAlign.center,
          ),
          Container(height: Dimen.spacingLarge),
          Container(
              child: Text(
            page.description,
            style: Style.description,
            textAlign: TextAlign.center,
          )),
          Container(height: Dimen.spacingLarge),
          RaisedButton(
            padding: EdgeInsets.symmetric(
                vertical: Dimen.spacingNormal, horizontal: Dimen.spacingLarge),
            child: Text(
              page.button,
              style: Style.button,
            ),
            onPressed: () {

            },
            color: NGColors.accent,
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.all(Radius.circular(100))),
          )
        ],
      ),
    );
  }
}
