define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const data__page = Object.create(dart.library);
  let JSArrayOfPage = () => (JSArrayOfPage = dart.constFn(_interceptors.JSArray$(data__page.Page)))();
  data__page.Page = class Page extends core.Object {
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get subtitle() {
      return this[subtitle$];
    }
    set subtitle(value) {
      super.subtitle = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get button() {
      return this[button$];
    }
    set button(value) {
      super.button = value;
    }
    get buttonUrl() {
      return this[buttonUrl$];
    }
    set buttonUrl(value) {
      super.buttonUrl = value;
    }
    static first() {
      return new data__page.Page.new({image: "images/netguru1.jpg", title: "Dream job", subtitle: "Find your dream job at Netguru", description: "Join us and create revolutionary products that change the way people do things. Learn by doing what you enjoy most.", button: "View available jobs", buttonUrl: "https://www.netguru.com/career"});
    }
    static second() {
      return new data__page.Page.new({image: "images/netguru2.jpg", title: "Our culture supports our vision", subtitle: "Dive deep into our unique culture", description: "Core values. Social norms. Principles of collaboration.", button: "See the Culture book", buttonUrl: "https://www.netguru.com/netguru-culture-book"});
    }
    static third() {
      return new data__page.Page.new({image: "images/netguru3.jpg", title: "Netguru College workshops", subtitle: "Learn from the best", description: "The vision for the Netguru College workshops is to share knowledge and experience with those who have the desire to grow.", button: "Find out more", buttonUrl: "https://www.netguru.com/netgurucollege"});
    }
    static all() {
      return JSArrayOfPage().of([data__page.Page.first(), data__page.Page.second(), data__page.Page.third()]);
    }
  };
  (data__page.Page.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let button = opts && 'button' in opts ? opts.button : null;
    let buttonUrl = opts && 'buttonUrl' in opts ? opts.buttonUrl : null;
    this[image$] = image;
    this[title$] = title;
    this[subtitle$] = subtitle;
    this[description$] = description;
    this[button$] = button;
    this[buttonUrl$] = buttonUrl;
    ;
  }).prototype = data__page.Page.prototype;
  dart.addTypeTests(data__page.Page);
  const image$ = Symbol("Page.image");
  const title$ = Symbol("Page.title");
  const subtitle$ = Symbol("Page.subtitle");
  const description$ = Symbol("Page.description");
  const button$ = Symbol("Page.button");
  const buttonUrl$ = Symbol("Page.buttonUrl");
  dart.setLibraryUri(data__page.Page, "package:flutter_web.examples.hello_world/data/page.dart");
  dart.setFieldSignature(data__page.Page, () => ({
    __proto__: dart.getFields(data__page.Page.__proto__),
    image: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String),
    subtitle: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    button: dart.finalFieldType(core.String),
    buttonUrl: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/flutter_web.examples.hello_world/data/page", {
    "package:flutter_web.examples.hello_world/data/page.dart": data__page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.hello_world/data/page.dart"],"names":[],"mappings":";;;;;;;;;IACe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;AAUU,6CACZ,8BACA,uBACG,+CAEN,+HACI,kCACG;IAAiC;;AAExB,6CACb,8BACA,6CACG,kDACG,mEACL,mCACG;IAA+C;;AAEvC,6CACZ,8BACA,uCACG,oCAEN,qIACI,4BACG;IAAyC;;AAE7B,iCACzB,yBACA,0BACA;IACD;;;QArCS;QACD;QACA;QACA;QACA;QACA;IALC;IACD;IACA;IACA;IACA;IACA;;EAAW","file":"page.ddc.js"}');
  // Exports:
  return {
    data__page: data__page
  };
});

//# sourceMappingURL=page.ddc.js.map
