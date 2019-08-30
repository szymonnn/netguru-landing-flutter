define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const data__menu = Object.create(dart.library);
  let JSArrayOfMenuItem = () => (JSArrayOfMenuItem = dart.constFn(_interceptors.JSArray$(data__menu.MenuItem)))();
  data__menu.MenuItem = class MenuItem extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get isSpecialItem() {
      return this[isSpecialItem$];
    }
    set isSpecialItem(value) {
      this[isSpecialItem$] = value;
    }
    static all() {
      return JSArrayOfMenuItem().of([new data__menu.MenuItem.new("Services"), new data__menu.MenuItem.new("Clients"), new data__menu.MenuItem.new("About Us"), new data__menu.MenuItem.new("Resources"), new data__menu.MenuItem.new("Blog"), new data__menu.MenuItem.new("Code stories"), new data__menu.MenuItem.new("Careers"), new data__menu.MenuItem.new("Estimate project", {isSpecialItem: true})]);
    }
  };
  (data__menu.MenuItem.new = function(name, opts) {
    let isSpecialItem = opts && 'isSpecialItem' in opts ? opts.isSpecialItem : false;
    this[name$] = name;
    this[isSpecialItem$] = isSpecialItem;
    ;
  }).prototype = data__menu.MenuItem.prototype;
  dart.addTypeTests(data__menu.MenuItem);
  const name$ = Symbol("MenuItem.name");
  const isSpecialItem$ = Symbol("MenuItem.isSpecialItem");
  dart.setLibraryUri(data__menu.MenuItem, "package:flutter_web.examples.hello_world/data/menu.dart");
  dart.setFieldSignature(data__menu.MenuItem, () => ({
    __proto__: dart.getFields(data__menu.MenuItem.__proto__),
    name: dart.finalFieldType(core.String),
    isSpecialItem: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter_web.examples.hello_world/data/menu", {
    "package:flutter_web.examples.hello_world/data/menu.dart": data__menu
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.hello_world/data/menu.dart"],"names":[],"mappings":";;;;;;;;;IACe;;;;;;IACR;;;;;;;AAI0B,qCAC7B,4BAAS,aACT,4BAAS,YACT,4BAAS,aACT,4BAAS,cACT,4BAAS,SACT,4BAAS,iBACT,4BAAS,YACT,4BAAS,oCAAmC;IAC7C;;sCAXa;QAAY,uEAAgB;IAA5B;IAAY;;EAAuB","file":"menu.ddc.js"}');
  // Exports:
  return {
    data__menu: data__menu
  };
});

//# sourceMappingURL=menu.ddc.js.map
