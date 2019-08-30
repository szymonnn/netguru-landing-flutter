define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__text_style = animation.src__painting__text_style;
  const ui$ = ui.ui;
  const styles = Object.create(dart.library);
  styles.Style = class Style extends core.Object {};
  (styles.Style.new = function() {
    ;
  }).prototype = styles.Style.prototype;
  dart.addTypeTests(styles.Style);
  dart.setLibraryUri(styles.Style, "package:flutter_web.examples.hello_world/styles.dart");
  dart.defineLazy(styles.Style, {
    /*styles.Style.title*/get title() {
      return new src__painting__text_style.TextStyle.new({color: new ui$.Color.new(2164260863), fontSize: 14.0});
    },
    /*styles.Style.subtitle*/get subtitle() {
      return new src__painting__text_style.TextStyle.new({color: new ui$.Color.new(4294967295), fontSize: 50.0, fontWeight: ui$.FontWeight.bold});
    },
    /*styles.Style.description*/get description() {
      return new src__painting__text_style.TextStyle.new({color: new ui$.Color.new(3439329279), fontSize: 16.0});
    },
    /*styles.Style.button*/get button() {
      return new src__painting__text_style.TextStyle.new({color: new ui$.Color.new(4294967295), fontSize: 15.0});
    },
    /*styles.Style.normal*/get normal() {
      return new src__painting__text_style.TextStyle.new({color: new ui$.Color.new(4294967295), fontSize: 14.0, fontWeight: ui$.FontWeight.bold});
    },
    /*styles.Style.greenUnderline*/get greenUnderline() {
      return new src__painting__text_style.TextStyle.new({color: styles.NGColors.accent, fontSize: 14.0, decoration: ui$.TextDecoration.underline, fontWeight: ui$.FontWeight.w800});
    },
    /*styles.Style.normalBlack*/get normalBlack() {
      return new src__painting__text_style.TextStyle.new({color: new ui$.Color.new(4278190080), fontSize: 14.0, fontWeight: ui$.FontWeight.bold});
    }
  });
  styles.NGColors = class NGColors extends core.Object {};
  (styles.NGColors.new = function() {
    ;
  }).prototype = styles.NGColors.prototype;
  dart.addTypeTests(styles.NGColors);
  dart.setLibraryUri(styles.NGColors, "package:flutter_web.examples.hello_world/styles.dart");
  dart.defineLazy(styles.NGColors, {
    /*styles.NGColors.accent*/get accent() {
      return new ui$.Color.new(4280078674);
    },
    /*styles.NGColors.blackTransparent1*/get blackTransparent1() {
      return new ui$.Color.new(2147483648);
    },
    /*styles.NGColors.blackTransparent2*/get blackTransparent2() {
      return new ui$.Color.new(1073741824);
    },
    /*styles.NGColors.whiteTransparent1*/get whiteTransparent1() {
      return new ui$.Color.new(1358954495);
    },
    /*styles.NGColors.white*/get white() {
      return new ui$.Color.new(4294967295);
    },
    /*styles.NGColors.black*/get black() {
      return new ui$.Color.new(4278190080);
    },
    set black(_) {}
  });
  styles.Dimen = class Dimen extends core.Object {};
  (styles.Dimen.new = function() {
    ;
  }).prototype = styles.Dimen.prototype;
  dart.addTypeTests(styles.Dimen);
  dart.setLibraryUri(styles.Dimen, "package:flutter_web.examples.hello_world/styles.dart");
  dart.defineLazy(styles.Dimen, {
    /*styles.Dimen.spacingSmall*/get spacingSmall() {
      return 8.0;
    },
    /*styles.Dimen.spacingNormal*/get spacingNormal() {
      return 16.0;
    },
    /*styles.Dimen.spacingLarge*/get spacingLarge() {
      return 48.0;
    },
    /*styles.Dimen.headerHeight*/get headerHeight() {
      return 55.0;
    },
    /*styles.Dimen.menuHeight*/get menuHeight() {
      return 90.0;
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.hello_world/styles", {
    "package:flutter_web.examples.hello_world/styles.dart": styles
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.hello_world/styles.dart"],"names":[],"mappings":";;;;;;;;;;;EAUA;;;;MAPe,kBAAK;YAAG,qDAAiB,kBAAM,uBAAuB;;MACtD,qBAAQ;YAAG,qDAAiB,kBAAM,uBAAuB,kBAA2B;;MACpF,wBAAW;YAAG,qDAAiB,kBAAM,uBAAuB;;MAC5D,mBAAM;YAAG,qDAAiB,kBAAM,uBAAuB;;MACvD,mBAAM;YAAG,qDAAiB,kBAAM,uBAAuB,kBAA2B;;MAClF,2BAAc;YAAG,qDAA0B,kCAAkB,kBAA+B,0CAAkC;;MAC9H,wBAAW;YAAG,qDAAiB,kBAAM,uBAAuB,kBAA2B;;;;;;EAUtG;;;;MANe,sBAAM;YAAI,mBAAM;;MAChB,iCAAiB;YAAG,mBAAM;;MAC1B,iCAAiB;YAAG,mBAAM;;MAC1B,iCAAiB;YAAG,mBAAM;;MAC1B,qBAAK;YAAG,mBAAM;;MAChB,qBAAK;YAAG,mBAAM;;;;;;;EAS3B;;;;MALe,yBAAY;YAAG;;MACf,0BAAa;YAAG;;MAChB,yBAAY;YAAG;;MACf,yBAAY;YAAG;;MACf,uBAAU;YAAG","file":"styles.ddc.js"}');
  // Exports:
  return {
    styles: styles
  };
});

//# sourceMappingURL=styles.ddc.js.map
