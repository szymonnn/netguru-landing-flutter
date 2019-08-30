define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web.examples.hello_world/styles', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/material', 'packages/flutter_web.examples.hello_world/data/page'], function(dart_sdk, animation, styles, animation$, ui, material, page) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__decoration_image = animation.src__painting__decoration_image;
  const src__painting__image_provider = animation.src__painting__image_provider;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__painting__rounded_rectangle_border = animation.src__painting__rounded_rectangle_border;
  const src__widgets__framework = animation.src__widgets__framework;
  const styles$ = styles.styles;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const ui$ = ui.ui;
  const src__material__raised_button = material.src__material__raised_button;
  const data__page = page.data__page;
  const page$ = Object.create(dart.library);
  const $open = dartx.open;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
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
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  page$.PageWidget = class PageWidget extends src__widgets__framework.StatelessWidget {
    get page() {
      return this[page$0];
    }
    set page(value) {
      super.page = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: styles$.Dimen.spacingNormal}), alignment: src__painting__alignment.AlignmentDirectional.center, decoration: new src__painting__box_decoration.BoxDecoration.new({color: styles$.NGColors.blackTransparent1, backgroundBlendMode: ui$.BlendMode.overlay, image: new src__painting__decoration_image.DecorationImage.new({image: new src__painting__image_provider.NetworkImage.new(this.page.image), fit: src__painting__box_fit.BoxFit.cover})}), child: new src__widgets__basic.Column.new({mainAxisSize: src__rendering__flex.MainAxisSize.min, children: JSArrayOfWidget().of([new src__widgets__text.Text.new(this.page.title, {style: styles$.Style.title, textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 18, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 13, name: "style"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 13, name: "textAlign"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({height: styles$.Dimen.spacingLarge, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 21, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new(this.page.subtitle, {style: styles$.Style.subtitle, textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 18, name: "data"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 13, name: "style"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 13, name: "textAlign"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({height: styles$.Dimen.spacingLarge, $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 21, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({child: new src__widgets__text.Text.new(this.page.description, {style: styles$.Style.description, textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 22, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 18, name: "data"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 13, name: "style"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 13, name: "textAlign"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({height: styles$.Dimen.spacingLarge, $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 21, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__material__raised_button.RaisedButton.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: styles$.Dimen.spacingNormal, horizontal: styles$.Dimen.spacingLarge}), child: new src__widgets__text.Text.new(this.page.button, {style: styles$.Style.button, $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 20, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 20, name: "data"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 15, name: "style"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                html.window[$open](this.page.buttonUrl, null);
              }, VoidToNull()), color: styles$.NGColors.accent, shape: new src__painting__rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(100.0))}), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 13, name: "padding"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 13, name: "child"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 13, name: "onPressed"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 13, name: "color"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 13, name: "shape"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 14, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 9, name: "mainAxisSize"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 12, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart", parameterLocations: const$45 || (const$45 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 7, name: "padding"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "alignment"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 7, name: "decoration"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (page$.PageWidget.new = function(page, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[page$0] = page;
    page$.PageWidget.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = page$.PageWidget.prototype;
  dart.addTypeTests(page$.PageWidget);
  const page$0 = Symbol("PageWidget.page");
  dart.setMethodSignature(page$.PageWidget, () => ({
    __proto__: dart.getMethods(page$.PageWidget.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(page$.PageWidget, "package:flutter_web.examples.hello_world/page.dart");
  dart.setFieldSignature(page$.PageWidget, () => ({
    __proto__: dart.getFields(page$.PageWidget.__proto__),
    page: dart.finalFieldType(data__page.Page)
  }));
  dart.trackLibraries("packages/flutter_web.examples.hello_world/page", {
    "package:flutter_web.examples.hello_world/page.dart": page$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.hello_world/page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQa;;;;;;UAKe;AACxB,YAAO,qDACe,iEAA4B,0CAChB,kEACpB,4DACQ,yDACe,8BACxB,gEACI,mDAAa,AAAK,uBAAoB,gDAC9C,kDACsB,iDACT,sBAChB,gCACE,AAAK,yBACQ,gCACQ,0tBAEvB,mDAAwB,weACxB,gCACE,AAAK,4BACQ,mCACQ,guBAEvB,mDAAwB,8eACxB,kDACW,gCACT,AAAK,+BACQ,sCACQ,urCAEvB,mDAAwB,8eACxB,4DACsB,+DACA,yCAAiC,qCAC9C,gCACL,AAAK,0BACQ,+mBAEJ;gBACJ,AAAO,mBAAK,AAAK,qBAAW;uCAEnB,gCACT,sFACwB,kDAAW,wBAAS;IAK7D;;mCAnDgB;;;AAAhB;;EAAqB","file":"page.ddc.js"}');
  // Exports:
  return {
    page: page$
  };
});

//# sourceMappingURL=page.ddc.js.map
