define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/page_indicator/page_indicator', 'packages/flutter_web.examples.hello_world/data/page', 'packages/flutter_web.examples.hello_world/styles', 'packages/flutter_web.examples.hello_world/page', 'packages/flutter_web.examples.hello_world/ui_helper', 'packages/flutter_web.examples.hello_world/large/header', 'packages/flutter_web.examples.hello_world/small/header', 'packages/flutter_web.examples.hello_world/large/menu', 'packages/flutter_web.examples.hello_world/small/menu'], function(dart_sdk, material, animation, page_indicator, page, styles, page$, ui_helper, header, header$, menu, menu$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__drawer = material.src__material__drawer;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__page_view = animation.src__widgets__page_view;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__container = page_indicator.src__container;
  const data__page = page.data__page;
  const styles$ = styles.styles;
  const page$0 = page$.page;
  const ui_helper$ = ui_helper.ui_helper;
  const large__header = header.large__header;
  const small__header = header$.small__header;
  const large__menu = menu.large__menu;
  const small__menu = menu$.small__menu;
  const home = Object.create(dart.library);
  const $length = dartx.length;
  const $add = dartx.add;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToStack = () => (BuildContextToStack = dart.constFn(dart.fnType(src__widgets__basic.Stack, [src__widgets__framework.BuildContext])))();
  const _drawer = dart.privateName(home, "_drawer");
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
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
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
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  home.HomePage = class HomePage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__scaffold.Scaffold.new({drawer: this[_drawer](context), body: new src__widgets__basic.Builder.new({builder: dart.fn(context => new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__container.PageIndicatorContainer.new({length: data__page.Page.all()[$length], padding: new src__painting__edge_insets.EdgeInsets.only({bottom: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.1}), indicatorSpace: styles$.Dimen.spacingNormal, indicatorColor: styles$.NGColors.whiteTransparent1, indicatorSelectorColor: styles$.NGColors.white, child: new src__widgets__page_view.PageView.new({children: (() => {
                    let t0 = JSArrayOfWidget().of([]);
                    for (let page of data__page.Page.all())
                      t0[$add](new page$0.PageWidget.new(page, {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 19, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 30, name: "page"})))], src__widgets__widget_inspector._Location))})))}));
                    return t0;
                  })(), $creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 22, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 31, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 13, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 15, name: "length"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 15, name: "padding"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 15, name: "indicatorSpace"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 15, name: "indicatorColor"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 15, name: "indicatorSelectorColor"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Column.new({children: (() => {
                  let t1 = JSArrayOfWidget().of([]);
                  if (dart.dtest(ui_helper$.isLarge(context)))
                    t1[$add](new large__header.HeaderLarge.new({$creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 19, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$13 || (const$13 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
                  else
                    t1[$add](new small__header.HeaderSmall.new(dart.fn(() => {
                      ui_helper$.toggleDrawer(context);
                    }, VoidToNull()), {$creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 19, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 31, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}));
                  if (dart.dtest(ui_helper$.isLarge(context))) t1[$add](new large__menu.MenuLarge.new({$creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 19, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$18 || (const$18 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
                  return t1;
                })(), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 13, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 31, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), BuildContextToStack()), $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 13, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 9, name: "builder"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 12, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "drawer"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
    [_drawer](context) {
      if (!dart.dtest(ui_helper$.isLarge(context)))
        return new src__material__drawer.Drawer.new({child: new small__menu.MenuSmall.new({$creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 16, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$33 || (const$33 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 14, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart", parameterLocations: const$36 || (const$36 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      else
        return null;
    }
  };
  (home.HomePage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.HomePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.HomePage.prototype;
  dart.addTypeTests(home.HomePage);
  dart.setMethodSignature(home.HomePage, () => ({
    __proto__: dart.getMethods(home.HomePage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_drawer]: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(home.HomePage, "package:flutter_web.examples.hello_world/home.dart");
  dart.trackLibraries("packages/flutter_web.examples.hello_world/home", {
    "package:flutter_web.examples.hello_world/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.hello_world/home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAc4B;AACxB,YAAO,mDACG,cAAQ,OAAO,SACjB,8CACK,QAAC,WAAY,6CACF,sBAChB,uDACe,AAAM,yCACC,wDAC2B,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,uBAC3B,6CACG,4DACQ,+BAC1B;;AACL,6BAAS,OAAa;+BACpB,0BAAW,IAAI;;ykDAGrB;;AAGI,iCAAI,mBAAQ,OAAO;6BACjB;;6BAEA,kCAAY;sBACV,wBAAa,OAAO;;AAGxB,iCAAI,mBAAQ,OAAO,aACjB;;;IAOhB;cAE4B;AAE1B,sBAAK,mBAAQ,OAAO;AAClB,cAAO,8CACE;;AAGT,cAAO;IACX;;;;;;EACF","file":"home.ddc.js"}');
  // Exports:
  return {
    home: home
  };
});

//# sourceMappingURL=home.ddc.js.map
