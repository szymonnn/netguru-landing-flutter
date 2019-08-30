import 'package:flutter_web/material.dart';

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
                _socialMedia("images/twitter.png"),
                _socialMedia("images/facebook.png"),
                _socialMedia("images/linkedin.png"),
                _socialMedia("images/github.png"),
                _socialMedia("images/dribble.png"),
                _socialMedia("images/behance.png"),
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
        child: Image.network(icon),
      );
}
