define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material'], function(dart_sdk, animation, material) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__material__scaffold = material.src__material__scaffold;
  const ui_helper = Object.create(dart.library);
  ui_helper.isLarge = function(context) {
    return dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) >= 1100;
  };
  ui_helper.isSmall = function(context) {
    return dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) < 500;
  };
  ui_helper.toggleDrawer = function(context) {
    let scaffold = src__material__scaffold.Scaffold.of(context);
    if (dart.test(scaffold.isDrawerOpen)) {
      src__widgets__navigator.Navigator.of(context).pop(core.Object);
    } else {
      scaffold.openDrawer();
    }
  };
  dart.trackLibraries("packages/flutter_web.examples.hello_world/ui_helper", {
    "package:flutter_web.examples.hello_world/ui_helper.dart": ui_helper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.hello_world/ui_helper.dart"],"names":[],"mappings":";;;;;;;;;+BAEqB;AAAY,UAAkC,cAAvB,AAAY,AAAK,wCAAd,OAAO,iBAAgB;EAAI;+BAErD;AAAY,UAAkC,cAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe;EAAG;oCAE9C;AAClB,mBAAoB,oCAAG,OAAO;AACpC,kBAAI,AAAS,QAAD;MACA,AAAY,qCAAT,OAAO;;MAEpB,AAAS,QAAD;;EAEZ","file":"ui_helper.ddc.js"}');
  // Exports:
  return {
    ui_helper: ui_helper
  };
});

//# sourceMappingURL=ui_helper.ddc.js.map
