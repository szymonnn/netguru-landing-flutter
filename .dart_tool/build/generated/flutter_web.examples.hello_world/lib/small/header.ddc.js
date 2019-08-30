define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web.examples.hello_world/styles', 'packages/flutter_web/material'], function(dart_sdk, animation, styles, material) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const styles$ = styles.styles;
  const src__material__icon_button = material.src__material__icon_button;
  const small__header = Object.create(dart.library);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  small__header.HeaderSmall = class HeaderSmall extends src__widgets__framework.StatelessWidget {
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.all(styles$.Dimen.spacingNormal), height: styles$.Dimen.headerHeight, child: new src__material__icon_button.IconButton.new({icon: new src__widgets__image.Image.network("images/menu-icon.png", {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 23, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/small/header.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 31, name: "src"})))], src__widgets__widget_inspector._Location))})))}), onPressed: VoidTovoid()._check(this.onPressed), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 16, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/small/header.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 11, name: "icon"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 11, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 12, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/small/header.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 9, name: "margin"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "height"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (small__header.HeaderSmall.new = function(onPressed, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    small__header.HeaderSmall.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = small__header.HeaderSmall.prototype;
  dart.addTypeTests(small__header.HeaderSmall);
  const onPressed$ = Symbol("HeaderSmall.onPressed");
  dart.setMethodSignature(small__header.HeaderSmall, () => ({
    __proto__: dart.getMethods(small__header.HeaderSmall.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(small__header.HeaderSmall, "package:flutter_web.examples.hello_world/small/header.dart");
  dart.setFieldSignature(small__header.HeaderSmall, () => ({
    __proto__: dart.getFields(small__header.HeaderSmall.__proto__),
    onPressed: dart.finalFieldType(core.Function)
  }));
  dart.trackLibraries("packages/flutter_web.examples.hello_world/small/header", {
    "package:flutter_web.examples.hello_world/small/header.dart": small__header
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.hello_world/small/header.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;IAKiB;;;;;;UAKW;AACxB,YAAO,oDACgB,8CAAU,sCACf,mCACP,qDACO,sCAAQ,ugBACT;IAEnB;;4CAXiB;;;AAAjB;;EAA2B","file":"header.ddc.js"}');
  // Exports:
  return {
    small__header: small__header
  };
});

//# sourceMappingURL=header.ddc.js.map
