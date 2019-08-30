define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web.examples.hello_world/styles', 'packages/flutter_web.examples.hello_world/data/menu', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, styles, menu, material, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__painting__borders = animation.src__painting__borders;
  const src__painting__rounded_rectangle_border = animation.src__painting__rounded_rectangle_border;
  const styles$ = styles.styles;
  const data__menu = menu.data__menu;
  const src__material__outline_button = material.src__material__outline_button;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const large__menu = Object.create(dart.library);
  const $add = dartx.add;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  const _menuItem = dart.privateName(large__menu, "_menuItem");
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  const _specialMenuItem = dart.privateName(large__menu, "_specialMenuItem");
  const _normalMenuItem = dart.privateName(large__menu, "_normalMenuItem");
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  large__menu.MenuLarge = class MenuLarge extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__container.Container.new({height: styles$.Dimen.menuHeight, padding: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 10.0, horizontal: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) * 0.11}), child: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, mainAxisSize: src__rendering__flex.MainAxisSize.max, children: (() => {
            let t0 = JSArrayOfWidget().of([]);
            t0[$add](new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 22.0}), child: new src__widgets__image.Image.network("images/netguru-logo.png", {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 26, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/menu.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 34, name: "src"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/menu.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 13, name: "padding"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}));
            for (let item of data__menu.MenuItem.all())
              t0[$add](this[_menuItem](item));
            return t0;
          })(), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 14, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/menu.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "mainAxisAlignment"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, name: "mainAxisSize"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 12, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/menu.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 7, name: "height"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 7, name: "padding"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    [_menuItem](menuItem) {
      if (dart.test(menuItem.isSpecialItem)) {
        return this[_specialMenuItem](menuItem);
      } else {
        return this[_normalMenuItem](menuItem);
      }
    }
    [_specialMenuItem](menuItem) {
      return new src__material__outline_button.OutlineButton.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: styles$.Dimen.spacingLarge}), child: new src__widgets__text.Text.new(menuItem.name, {style: styles$.Style.button, $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 14, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/menu.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 18, name: "data"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
        }, VoidToNull()), borderSide: new src__painting__borders.BorderSide.new({color: styles$.NGColors.white, width: 3.0}), shape: new src__painting__rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.circular(100.0)}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 49, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/menu.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 7, name: "padding"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 7, name: "child"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 7, name: "onPressed"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 7, name: "borderSide"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 7, name: "shape"})))], src__widgets__widget_inspector._Location))})))});
    }
    [_normalMenuItem](menuItem) {
      return new src__widgets__text.Text.new(menuItem.name, {style: styles$.Style.normal, $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 48, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/menu.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 18, name: "data"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (large__menu.MenuLarge.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    large__menu.MenuLarge.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = large__menu.MenuLarge.prototype;
  dart.addTypeTests(large__menu.MenuLarge);
  dart.setMethodSignature(large__menu.MenuLarge, () => ({
    __proto__: dart.getMethods(large__menu.MenuLarge.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_menuItem]: dart.fnType(src__widgets__framework.Widget, [data__menu.MenuItem]),
    [_specialMenuItem]: dart.fnType(src__widgets__framework.Widget, [data__menu.MenuItem]),
    [_normalMenuItem]: dart.fnType(src__widgets__framework.Widget, [data__menu.MenuItem])
  }));
  dart.setLibraryUri(large__menu.MenuLarge, "package:flutter_web.examples.hello_world/large/menu.dart");
  dart.trackLibraries("packages/flutter_web.examples.hello_world/large/menu", {
    "package:flutter_web.examples.hello_world/large/menu.dart": large__menu
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.hello_world/large/menu.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAO4B;AACxB,YAAO,oDACS,mCACM,+DACN,kBAAkD,aAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe,eAC3D,oDACgC,mEACV;;qBAEzB,oDACsB,+DAAoB,eAC3B,sCAAQ;AAEvB,qBAAS,OAAiB;uBAAO,gBAAU,IAAI;;;IAIvD;gBAE0B;AACxB,oBAAI,AAAS,QAAD;AACV,cAAO,wBAAiB,QAAQ;;AAEhC,cAAO,uBAAgB,QAAQ;;IAEnC;uBAEiC;AAAa,2EACtB,iEAA4B,qCACzC,gCACL,AAAS,QAAD,eACK,onBAEJ;sCACC,kDAA2B,+BAAc,cAC9C,sFAAkD,uDAAS;IAAM;sBAE5C;AAAa,6CACvC,AAAS,QAAD,eACK;IACd;;;;;;EACP","file":"menu.ddc.js"}');
  // Exports:
  return {
    large__menu: large__menu
  };
});

//# sourceMappingURL=menu.ddc.js.map
