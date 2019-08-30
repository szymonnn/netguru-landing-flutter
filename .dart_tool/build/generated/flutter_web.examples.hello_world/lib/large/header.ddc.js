define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web.examples.hello_world/styles'], function(dart_sdk, animation, styles) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__text = animation.src__widgets__text;
  const src__painting__text_span = animation.src__painting__text_span;
  const src__painting__inline_span = animation.src__painting__inline_span;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__image = animation.src__widgets__image;
  const styles$ = styles.styles;
  const large__header = Object.create(dart.library);
  let JSArrayOfInlineSpan = () => (JSArrayOfInlineSpan = dart.constFn(_interceptors.JSArray$(src__painting__inline_span.InlineSpan)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let const$;
  let const$0;
  let const$1;
  const _socialMedia = dart.privateName(large__header, "_socialMedia");
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
  large__header.HeaderLarge = class HeaderLarge extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__container.Container.new({height: styles$.Dimen.headerHeight, decoration: new src__painting__box_decoration.BoxDecoration.new({color: styles$.NGColors.blackTransparent2}), padding: new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) * 0.1}), child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__text.Text.rich(new src__painting__text_span.TextSpan.new({text: "Check out our blog: ", style: styles$.Style.normal, children: JSArrayOfInlineSpan().of([new src__painting__text_span.TextSpan.new({text: "Building a New Business Branch on a Competitive Market – the Babbel Story", style: styles$.Style.greenUnderline})])}), {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 16, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/header.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 13, name: "textSpan"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.end, children: JSArrayOfWidget().of([src__widgets__framework.Widget._check(this[_socialMedia]("images/twitter.png")), src__widgets__framework.Widget._check(this[_socialMedia]("images/facebook.png")), src__widgets__framework.Widget._check(this[_socialMedia]("images/linkedin.png")), src__widgets__framework.Widget._check(this[_socialMedia]("images/github.png")), src__widgets__framework.Widget._check(this[_socialMedia]("images/dribble.png")), src__widgets__framework.Widget._check(this[_socialMedia]("images/behance.png"))]), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 20, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/header.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 15, name: "mainAxisAlignment"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/header.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 14, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/header.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 12, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/header.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 7, name: "height"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 7, name: "decoration"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 7, name: "padding"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    [_socialMedia](icon) {
      return new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: styles$.Dimen.spacingNormal, horizontal: styles$.Dimen.spacingSmall}), child: new src__widgets__image.Image.network(icon, {$creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 22, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/header.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 30, name: "src"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 32, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/large/header.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 9, name: "padding"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (large__header.HeaderLarge.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    large__header.HeaderLarge.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = large__header.HeaderLarge.prototype;
  dart.addTypeTests(large__header.HeaderLarge);
  dart.setMethodSignature(large__header.HeaderLarge, () => ({
    __proto__: dart.getMethods(large__header.HeaderLarge.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_socialMedia]: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setLibraryUri(large__header.HeaderLarge, "package:flutter_web.examples.hello_world/large/header.dart");
  dart.trackLibraries("packages/flutter_web.examples.hello_world/large/header", {
    "package:flutter_web.examples.hello_world/large/header.dart": large__header
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.hello_world/large/header.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,oDACS,wCACF,4DAA8B,+CACtB,iEAC8B,aAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe,cAC7C,2CACa,sBACX,iCACH,iDACQ,+BACO,gCACH,0BACR,iDAEQ,oFACS,yfAIvB,6CACS,oDACgC,sDACnB,4DAChB,mBAAa,8DACb,mBAAa,+DACb,mBAAa,+DACb,mBAAa,6DACb,mBAAa,8DACb,mBAAa;IAO3B;mBAEoB;AAAS,iEACH,+DACA,yCAAiC,qCACxC,sCAAQ,IAAI;IAC1B;;;;;;EACP","file":"header.ddc.js"}');
  // Exports:
  return {
    large__header: large__header
  };
});

//# sourceMappingURL=header.ddc.js.map
