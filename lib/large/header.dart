import 'package:flutter/material.dart';

import '../styles.dart';

class HeaderLarge extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: Dimen.headerHeight,
      decoration: BoxDecoration(color: NGColors.blackTransparent2),
      padding: EdgeInsets.symmetric(
          horizontal: MediaQuery.of(context).size.width * 0.1),
      child: Row(
        children: <Widget>[
          Text.rich(
            TextSpan(
              text: "Check out our blog: ",
              style: Style.normal,
              children: [
                TextSpan(
                    text:
                        "Building a New Business Branch on a Competitive Market – the Babbel Story",
                    style: Style.greenUnderline),
              ],
            ),
          ),
          Expanded(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                _socialMedia("assets/twitter.png"),
                _socialMedia("assets/facebook.png"),
                _socialMedia("assets/linkedin.png"),
                _socialMedia("assets/github.png"),
                _socialMedia("assets/dribble.png"),
                _socialMedia("assets/behance.png"),
              ],
            ),
          ),
        ],
      ),
    );
  }

  _socialMedia(String icon) => Container(
        padding: EdgeInsets.symmetric(
            vertical: Dimen.spacingNormal, horizontal: Dimen.spacingSmall),
        child: Image.asset(icon),
      );
}
