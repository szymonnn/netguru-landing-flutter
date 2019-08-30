define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/flutter_web/material'], function(dart_sdk, ui, animation, material) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__page_view = animation.src__widgets__page_view;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__notification_listener = animation.src__widgets__notification_listener;
  const src__widgets__scroll_notification = animation.src__widgets__scroll_notification;
  const src__rendering__custom_paint = animation.src__rendering__custom_paint;
  const src__material__colors = material.src__material__colors;
  const page_indicator = Object.create(dart.library);
  const src__shape = Object.create(dart.library);
  const src__container = Object.create(dart.library);
  const src__indicator = Object.create(dart.library);
  const $toDouble = dartx.toDouble;
  let NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(src__widgets__notification_listener.NotificationListener$(src__widgets__scroll_notification.ScrollNotification)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let const$;
  let const$0;
  let const$1;
  src__shape.IndicatorShape = class IndicatorShape extends core.Object {
    static circle(opts) {
      let size = opts && 'size' in opts ? opts.size : 12.0;
      return new src__shape.CircleShape.new(size);
    }
    static roundRectangleShape(opts) {
      let size = opts && 'size' in opts ? opts.size : const$ || (const$ = dart.const(new ui$.Size.new(12.0, 12.0)));
      let cornerSize = opts && 'cornerSize' in opts ? opts.cornerSize : const$0 || (const$0 = dart.const(new ui$.Size.square(3.0)));
      return new src__shape.RoundRectangleShape.new({cornerSize: cornerSize, size: size});
    }
    static oval(opts) {
      let size = opts && 'size' in opts ? opts.size : const$1 || (const$1 = dart.const(new ui$.Size.new(12.0, 8.0)));
      return new src__shape.OvalShape.new({size: size});
    }
  };
  (src__shape.IndicatorShape.__ = function() {
    ;
  }).prototype = src__shape.IndicatorShape.prototype;
  dart.addTypeTests(src__shape.IndicatorShape);
  dart.setLibraryUri(src__shape.IndicatorShape, "package:page_indicator/src/shape.dart");
  dart.defineLazy(src__shape.IndicatorShape, {
    /*src__shape.IndicatorShape.defaultCircle*/get defaultCircle() {
      return dart.const(new src__shape.CircleShape.new(12.0));
    },
    /*src__shape.IndicatorShape.defaultRoundRectangle*/get defaultRoundRectangle() {
      return dart.const(new src__shape.RoundRectangleShape.new());
    },
    /*src__shape.IndicatorShape.defaultOval*/get defaultOval() {
      return dart.const(new src__shape.OvalShape.new());
    }
  });
  src__shape.CircleShape = class CircleShape extends src__shape.IndicatorShape {
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get height() {
      return this.size;
    }
    get width() {
      return this.size;
    }
  };
  (src__shape.CircleShape.new = function(size) {
    this[size$] = size;
    src__shape.CircleShape.__proto__.__.call(this);
    ;
  }).prototype = src__shape.CircleShape.prototype;
  dart.addTypeTests(src__shape.CircleShape);
  const size$ = Symbol("CircleShape.size");
  dart.setGetterSignature(src__shape.CircleShape, () => ({
    __proto__: dart.getGetters(src__shape.CircleShape.__proto__),
    height: core.double,
    width: core.double
  }));
  dart.setLibraryUri(src__shape.CircleShape, "package:page_indicator/src/shape.dart");
  dart.setFieldSignature(src__shape.CircleShape, () => ({
    __proto__: dart.getFields(src__shape.CircleShape.__proto__),
    size: dart.finalFieldType(core.double)
  }));
  let const$2;
  let const$3;
  src__shape.RoundRectangleShape = class RoundRectangleShape extends src__shape.IndicatorShape {
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    get cornerSize() {
      return this[cornerSize$];
    }
    set cornerSize(value) {
      super.cornerSize = value;
    }
    get height() {
      return this.size.height;
    }
    get width() {
      return this.size.width;
    }
  };
  (src__shape.RoundRectangleShape.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : const$2 || (const$2 = dart.const(new ui$.Size.new(12.0, 12.0)));
    let cornerSize = opts && 'cornerSize' in opts ? opts.cornerSize : const$3 || (const$3 = dart.const(new ui$.Size.square(3.0)));
    this[size$0] = size;
    this[cornerSize$] = cornerSize;
    src__shape.RoundRectangleShape.__proto__.__.call(this);
    ;
  }).prototype = src__shape.RoundRectangleShape.prototype;
  dart.addTypeTests(src__shape.RoundRectangleShape);
  const size$0 = Symbol("RoundRectangleShape.size");
  const cornerSize$ = Symbol("RoundRectangleShape.cornerSize");
  dart.setGetterSignature(src__shape.RoundRectangleShape, () => ({
    __proto__: dart.getGetters(src__shape.RoundRectangleShape.__proto__),
    height: core.double,
    width: core.double
  }));
  dart.setLibraryUri(src__shape.RoundRectangleShape, "package:page_indicator/src/shape.dart");
  dart.setFieldSignature(src__shape.RoundRectangleShape, () => ({
    __proto__: dart.getFields(src__shape.RoundRectangleShape.__proto__),
    size: dart.finalFieldType(ui$.Size),
    cornerSize: dart.finalFieldType(ui$.Size)
  }));
  let const$4;
  src__shape.OvalShape = class OvalShape extends src__shape.IndicatorShape {
    get size() {
      return this[size$1];
    }
    set size(value) {
      super.size = value;
    }
    get height() {
      return this.size.height;
    }
    get width() {
      return this.size.width;
    }
  };
  (src__shape.OvalShape.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : const$4 || (const$4 = dart.const(new ui$.Size.new(12.0, 4.0)));
    this[size$1] = size;
    src__shape.OvalShape.__proto__.__.call(this);
    ;
  }).prototype = src__shape.OvalShape.prototype;
  dart.addTypeTests(src__shape.OvalShape);
  const size$1 = Symbol("OvalShape.size");
  dart.setGetterSignature(src__shape.OvalShape, () => ({
    __proto__: dart.getGetters(src__shape.OvalShape.__proto__),
    height: core.double,
    width: core.double
  }));
  dart.setLibraryUri(src__shape.OvalShape, "package:page_indicator/src/shape.dart");
  dart.setFieldSignature(src__shape.OvalShape, () => ({
    __proto__: dart.getFields(src__shape.OvalShape.__proto__),
    size: dart.finalFieldType(ui$.Size)
  }));
  const _name$ = dart.privateName(src__container, "_name");
  src__container.IndicatorAlign = class IndicatorAlign extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__container.IndicatorAlign.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__container.IndicatorAlign.prototype;
  dart.addTypeTests(src__container.IndicatorAlign);
  dart.setLibraryUri(src__container.IndicatorAlign, "package:page_indicator/src/container.dart");
  dart.setFieldSignature(src__container.IndicatorAlign, () => ({
    __proto__: dart.getFields(src__container.IndicatorAlign.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__container.IndicatorAlign, ['toString']);
  src__container.IndicatorAlign.top = dart.const(new src__container.IndicatorAlign.new(0, "IndicatorAlign.top"));
  src__container.IndicatorAlign.center = dart.const(new src__container.IndicatorAlign.new(1, "IndicatorAlign.center"));
  src__container.IndicatorAlign.bottom = dart.const(new src__container.IndicatorAlign.new(2, "IndicatorAlign.bottom"));
  src__container.IndicatorAlign.values = dart.constList([src__container.IndicatorAlign.top, src__container.IndicatorAlign.center, src__container.IndicatorAlign.bottom], src__container.IndicatorAlign);
  let const$5;
  src__container.PageIndicatorContainer = class PageIndicatorContainer extends src__widgets__framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get align() {
      return this[align$];
    }
    set align(value) {
      super.align = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get indicatorColor() {
      return this[indicatorColor$];
    }
    set indicatorColor(value) {
      super.indicatorColor = value;
    }
    get indicatorSelectorColor() {
      return this[indicatorSelectorColor$];
    }
    set indicatorSelectorColor(value) {
      super.indicatorSelectorColor = value;
    }
    get indicatorSpace() {
      return this[indicatorSpace$];
    }
    set indicatorSpace(value) {
      super.indicatorSpace = value;
    }
    createState() {
      return new src__container.PageContainerState.new();
    }
  };
  (src__container.PageIndicatorContainer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let length = opts && 'length' in opts ? opts.length : null;
    let padding = opts && 'padding' in opts ? opts.padding : const$5 || (const$5 = dart.const(new src__painting__edge_insets.EdgeInsets.only({bottom: 10.0, top: 10.0})));
    let align = opts && 'align' in opts ? opts.align : src__container.IndicatorAlign.bottom;
    let indicatorColor = opts && 'indicatorColor' in opts ? opts.indicatorColor : src__material__colors.Colors.white;
    let indicatorSelectorColor = opts && 'indicatorSelectorColor' in opts ? opts.indicatorSelectorColor : src__material__colors.Colors.grey;
    let indicatorSpace = opts && 'indicatorSpace' in opts ? opts.indicatorSpace : 8.0;
    let shape = opts && 'shape' in opts ? opts.shape : src__shape.IndicatorShape.defaultCircle;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[length$] = length;
    this[padding$] = padding;
    this[align$] = align;
    this[indicatorColor$] = indicatorColor;
    this[indicatorSelectorColor$] = indicatorSelectorColor;
    this[indicatorSpace$] = indicatorSpace;
    this[shape$] = shape;
    src__container.PageIndicatorContainer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__container.PageIndicatorContainer.prototype;
  dart.addTypeTests(src__container.PageIndicatorContainer);
  const child$ = Symbol("PageIndicatorContainer.child");
  const length$ = Symbol("PageIndicatorContainer.length");
  const padding$ = Symbol("PageIndicatorContainer.padding");
  const align$ = Symbol("PageIndicatorContainer.align");
  const shape$ = Symbol("PageIndicatorContainer.shape");
  const indicatorColor$ = Symbol("PageIndicatorContainer.indicatorColor");
  const indicatorSelectorColor$ = Symbol("PageIndicatorContainer.indicatorSelectorColor");
  const indicatorSpace$ = Symbol("PageIndicatorContainer.indicatorSpace");
  dart.setMethodSignature(src__container.PageIndicatorContainer, () => ({
    __proto__: dart.getMethods(src__container.PageIndicatorContainer.__proto__),
    createState: dart.fnType(src__container.PageContainerState, [])
  }));
  dart.setLibraryUri(src__container.PageIndicatorContainer, "package:page_indicator/src/container.dart");
  dart.setFieldSignature(src__container.PageIndicatorContainer, () => ({
    __proto__: dart.getFields(src__container.PageIndicatorContainer.__proto__),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    length: dart.finalFieldType(core.int),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsets),
    align: dart.finalFieldType(src__container.IndicatorAlign),
    shape: dart.finalFieldType(src__shape.IndicatorShape),
    indicatorColor: dart.finalFieldType(ui$.Color),
    indicatorSelectorColor: dart.finalFieldType(ui$.Color),
    indicatorSpace: dart.finalFieldType(core.double)
  }));
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
  const _onScroll = dart.privateName(src__container, "_onScroll");
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  src__container.PageContainerState = class PageContainerState extends src__widgets__framework.State$(src__container.PageIndicatorContainer) {
    get currentPage() {
      return this[currentPage];
    }
    set currentPage(value) {
      this[currentPage] = value;
    }
    build(context) {
      let t0, t0$, t0$0, t0$1;
      if (!src__widgets__page_view.PageView.is(this.widget.child)) {
        return this.widget.child;
      }
      let height = this.widget.shape.height;
      let initPage = (t0$0 = (t0$ = (t0 = this.pageView, t0 == null ? null : t0.controller), t0$ == null ? null : t0$.initialPage), t0$0 == null ? 0.0 : t0$0);
      let currentPage = (t0$1 = this.currentPage, t0$1 == null ? initPage[$toDouble]() : t0$1);
      let indicator = new src__indicator.PageIndicator.new({length: this.widget.length, color: this.widget.indicatorColor, selectedColor: this.widget.indicatorSelectorColor, indicatorSpace: this.widget.indicatorSpace, indicatorShape: this.widget.shape, align: this.widget.align, reverse: this.pageView.reverse, currentPage: currentPage, initialPage: initPage[$toDouble](), $creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 24, file: "org-dartlang-app:///packages/page_indicator/src/container.dart", parameterLocations: const$15 || (const$15 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 7, name: "length"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 7, name: "color"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 7, name: "selectedColor"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 7, name: "indicatorSpace"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 7, name: "indicatorShape"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 7, name: "align"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 7, name: "reverse"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 7, name: "currentPage"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 7, name: "initialPage"})))], src__widgets__widget_inspector._Location))})))});
      let align = this.widget.align;
      if (dart.equals(align, src__container.IndicatorAlign.bottom)) {
        indicator = new src__widgets__basic.Positioned.new({left: 0.0, right: 0.0, bottom: this.widget.padding.bottom, height: height, child: indicator, $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 19, file: "org-dartlang-app:///packages/page_indicator/src/container.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 9, name: "left"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 9, name: "right"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 9, name: "bottom"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 9, name: "height"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      } else if (dart.equals(align, src__container.IndicatorAlign.top)) {
        indicator = new src__widgets__basic.Positioned.new({left: 0.0, right: 0.0, top: this.widget.padding.top, height: height, child: indicator, $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 19, file: "org-dartlang-app:///packages/page_indicator/src/container.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 9, name: "left"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 9, name: "right"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 9, name: "top"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 9, name: "height"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      } else if (dart.equals(align, src__container.IndicatorAlign.center)) {
        indicator = new src__widgets__basic.Center.new({child: new src__widgets__container.Container.new({child: indicator, height: height, $creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 16, file: "org-dartlang-app:///packages/page_indicator/src/container.dart", parameterLocations: const$33 || (const$33 = dart.constList([const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 11, name: "child"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 11, name: "height"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 19, file: "org-dartlang-app:///packages/page_indicator/src/container.dart", parameterLocations: const$36 || (const$36 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      return new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new (NotificationListenerOfScrollNotification()).new({child: this.pageView, onNotification: dart.bind(this, _onScroll), $creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 9, file: "org-dartlang-app:///packages/page_indicator/src/container.dart", parameterLocations: const$40 || (const$40 = dart.constList([const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 11, name: "child"}))), const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 11, name: "onNotification"})))], src__widgets__widget_inspector._Location))})))}), indicator]), $creationLocationd_0dea112b090073317d4: const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 12, file: "org-dartlang-app:///packages/page_indicator/src/container.dart", parameterLocations: const$43 || (const$43 = dart.constList([const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
    get pageView() {
      return src__widgets__page_view.PageView._check(this.widget.child);
    }
    [_onScroll](notification) {
      if (src__widgets__scroll_notification.ScrollUpdateNotification.is(notification)) {
        let metrics = src__widgets__page_view.PageMetrics._check(notification.metrics);
        this.currentPage = metrics.page;
        this.setState(dart.fn(() => {
        }, VoidToNull()));
      }
      return false;
    }
    forceRefreshState() {
      this.setState(dart.fn(() => {
      }, VoidToNull()));
    }
  };
  (src__container.PageContainerState.new = function() {
    this[currentPage] = null;
    src__container.PageContainerState.__proto__.new.call(this);
    ;
  }).prototype = src__container.PageContainerState.prototype;
  dart.addTypeTests(src__container.PageContainerState);
  const currentPage = Symbol("PageContainerState.currentPage");
  dart.setMethodSignature(src__container.PageContainerState, () => ({
    __proto__: dart.getMethods(src__container.PageContainerState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_onScroll]: dart.fnType(core.bool, [src__widgets__scroll_notification.ScrollNotification]),
    forceRefreshState: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__container.PageContainerState, () => ({
    __proto__: dart.getGetters(src__container.PageContainerState.__proto__),
    pageView: src__widgets__page_view.PageView
  }));
  dart.setLibraryUri(src__container.PageContainerState, "package:page_indicator/src/container.dart");
  dart.setFieldSignature(src__container.PageContainerState, () => ({
    __proto__: dart.getFields(src__container.PageContainerState.__proto__),
    currentPage: dart.fieldType(core.double)
  }));
  src__indicator.PageIndicator = class PageIndicator extends src__widgets__framework.StatefulWidget {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get selectedColor() {
      return this[selectedColor$];
    }
    set selectedColor(value) {
      super.selectedColor = value;
    }
    get length() {
      return this[length$0];
    }
    set length(value) {
      super.length = value;
    }
    get indicatorSpace() {
      return this[indicatorSpace$0];
    }
    set indicatorSpace(value) {
      super.indicatorSpace = value;
    }
    get indicatorShape() {
      return this[indicatorShape$];
    }
    set indicatorShape(value) {
      super.indicatorShape = value;
    }
    get align() {
      return this[align$0];
    }
    set align(value) {
      super.align = value;
    }
    get reverse() {
      return this[reverse$];
    }
    set reverse(value) {
      super.reverse = value;
    }
    get currentPage() {
      return this[currentPage$];
    }
    set currentPage(value) {
      super.currentPage = value;
    }
    get initialPage() {
      return this[initialPage$];
    }
    set initialPage(value) {
      super.initialPage = value;
    }
    createState() {
      return new src__indicator._PageIndicatorState.new();
    }
  };
  (src__indicator.PageIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : src__material__colors.Colors.white;
    let selectedColor = opts && 'selectedColor' in opts ? opts.selectedColor : src__material__colors.Colors.grey;
    let length = opts && 'length' in opts ? opts.length : null;
    let currentPage = opts && 'currentPage' in opts ? opts.currentPage : null;
    let initialPage = opts && 'initialPage' in opts ? opts.initialPage : 0.0;
    let indicatorSpace = opts && 'indicatorSpace' in opts ? opts.indicatorSpace : 5.0;
    let indicatorShape = opts && 'indicatorShape' in opts ? opts.indicatorShape : src__shape.IndicatorShape.defaultCircle;
    let align = opts && 'align' in opts ? opts.align : src__container.IndicatorAlign.bottom;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[selectedColor$] = selectedColor;
    this[length$0] = length;
    this[currentPage$] = currentPage;
    this[initialPage$] = initialPage;
    this[indicatorSpace$0] = indicatorSpace;
    this[indicatorShape$] = indicatorShape;
    this[align$0] = align;
    this[reverse$] = reverse;
    src__indicator.PageIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__indicator.PageIndicator.prototype;
  dart.addTypeTests(src__indicator.PageIndicator);
  const color$ = Symbol("PageIndicator.color");
  const selectedColor$ = Symbol("PageIndicator.selectedColor");
  const length$0 = Symbol("PageIndicator.length");
  const indicatorSpace$0 = Symbol("PageIndicator.indicatorSpace");
  const indicatorShape$ = Symbol("PageIndicator.indicatorShape");
  const align$0 = Symbol("PageIndicator.align");
  const reverse$ = Symbol("PageIndicator.reverse");
  const currentPage$ = Symbol("PageIndicator.currentPage");
  const initialPage$ = Symbol("PageIndicator.initialPage");
  dart.setMethodSignature(src__indicator.PageIndicator, () => ({
    __proto__: dart.getMethods(src__indicator.PageIndicator.__proto__),
    createState: dart.fnType(src__indicator._PageIndicatorState, [])
  }));
  dart.setLibraryUri(src__indicator.PageIndicator, "package:page_indicator/src/indicator.dart");
  dart.setFieldSignature(src__indicator.PageIndicator, () => ({
    __proto__: dart.getFields(src__indicator.PageIndicator.__proto__),
    color: dart.finalFieldType(ui$.Color),
    selectedColor: dart.finalFieldType(ui$.Color),
    length: dart.finalFieldType(core.int),
    indicatorSpace: dart.finalFieldType(core.double),
    indicatorShape: dart.finalFieldType(src__shape.IndicatorShape),
    align: dart.finalFieldType(src__container.IndicatorAlign),
    reverse: dart.finalFieldType(core.bool),
    currentPage: dart.finalFieldType(core.double),
    initialPage: dart.finalFieldType(core.double)
  }));
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  src__indicator._PageIndicatorState = class _PageIndicatorState extends src__widgets__framework.State$(src__indicator.PageIndicator) {
    initState() {
      super.initState();
    }
    dispose() {
      super.dispose();
    }
    build(context) {
      let t0;
      let indicatorPainter = null;
      let shape = this.widget.indicatorShape;
      let reverse = this.widget.reverse;
      let page = (t0 = this.widget.currentPage, t0 == null ? this.widget.initialPage : t0);
      if (src__shape.OvalShape.is(shape)) {
        indicatorPainter = new src__indicator.OvalPainter.new({color: this.widget.color, selectedColor: this.widget.selectedColor, count: this.widget.length, page: page, padding: this.widget.indicatorSpace, size: shape.size});
      } else if (src__shape.RoundRectangleShape.is(shape)) {
        indicatorPainter = new src__indicator.RRectPainter.new({color: this.widget.color, selectedColor: this.widget.selectedColor, count: this.widget.length, page: page, padding: this.widget.indicatorSpace, size: shape.size, cornerSize: shape.cornerSize});
      } else if (src__shape.CircleShape.is(shape)) {
        indicatorPainter = new src__indicator.CirclePainter.new({color: this.widget.color, selectedColor: this.widget.selectedColor, count: this.widget.length, page: page, padding: this.widget.indicatorSpace, radius: dart.notNull(shape.size) / 2});
      }
      return new src__widgets__basic.IgnorePointer.new({child: new src__widgets__basic.RotatedBox.new({quarterTurns: dart.test(reverse) ? 2 : 0, child: new src__widgets__basic.CustomPaint.new({child: new src__widgets__container.Container.new({height: shape.height, $creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 18, file: "org-dartlang-app:///packages/page_indicator/src/indicator.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 13, name: "height"})))], src__widgets__widget_inspector._Location))})))}), size: new ui$.Size.fromHeight(shape.height), painter: indicatorPainter, $creationLocationd_0dea112b090073317d4: const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 16, file: "org-dartlang-app:///packages/page_indicator/src/indicator.dart", parameterLocations: const$51 || (const$51 = dart.constList([const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 11, name: "child"}))), const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 11, name: "size"}))), const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 11, name: "painter"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 14, file: "org-dartlang-app:///packages/page_indicator/src/indicator.dart", parameterLocations: const$55 || (const$55 = dart.constList([const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 9, name: "quarterTurns"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 12, file: "org-dartlang-app:///packages/page_indicator/src/indicator.dart", parameterLocations: const$58 || (const$58 = dart.constList([const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__indicator._PageIndicatorState.new = function() {
    src__indicator._PageIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = src__indicator._PageIndicatorState.prototype;
  dart.addTypeTests(src__indicator._PageIndicatorState);
  dart.setMethodSignature(src__indicator._PageIndicatorState, () => ({
    __proto__: dart.getMethods(src__indicator._PageIndicatorState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__indicator._PageIndicatorState, "package:page_indicator/src/indicator.dart");
  const _circlePaint = dart.privateName(src__indicator, "_circlePaint");
  const _selectedPaint = dart.privateName(src__indicator, "_selectedPaint");
  src__indicator.OvalPainter = class OvalPainter extends src__rendering__custom_paint.CustomPainter {
    get page() {
      return this[page$];
    }
    set page(value) {
      this[page$] = value;
    }
    get count() {
      return this[count$];
    }
    set count(value) {
      this[count$] = value;
    }
    get color() {
      return this[color$0];
    }
    set color(value) {
      this[color$0] = value;
    }
    get selectedColor() {
      return this[selectedColor$0];
    }
    set selectedColor(value) {
      this[selectedColor$0] = value;
    }
    get padding() {
      return this[padding$0];
    }
    set padding(value) {
      this[padding$0] = value;
    }
    get size() {
      return this[size$2];
    }
    set size(value) {
      this[size$2] = value;
    }
    get totalWidth() {
      return dart.notNull(this.count) * dart.notNull(this.size.width) + dart.notNull(this.padding) * (dart.notNull(this.count) - 1);
    }
    paint(canvas, size) {
      let t0;
      let height = this.size.height;
      let width = this.size.width;
      let centerWidth = dart.notNull(size.width) / 2;
      let startX = centerWidth - dart.notNull(this.totalWidth) / 2;
      for (let i = 0; dart.dtest((t0 = i < dart.notNull(this.count), t0 === null ? 0 : t0)); i = i + 1) {
        let x = startX + i * (dart.notNull(width) + dart.notNull(this.padding));
        let rect = new ui$.Rect.fromLTWH(x, 0.0, width, height);
        canvas.drawOval(rect, this[_circlePaint]);
      }
      let selectedX = startX + dart.notNull(this.page) * (dart.notNull(width) + dart.notNull(this.padding));
      let rect = new ui$.Rect.fromLTWH(selectedX, 0.0, width, height);
      canvas.drawOval(rect, this[_selectedPaint]);
    }
    shouldRepaint(oldDelegate) {
      src__rendering__custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (src__indicator.OvalPainter.new = function(opts) {
    let page = opts && 'page' in opts ? opts.page : 0.0;
    let count = opts && 'count' in opts ? opts.count : 0;
    let color = opts && 'color' in opts ? opts.color : src__material__colors.Colors.white;
    let selectedColor = opts && 'selectedColor' in opts ? opts.selectedColor : src__material__colors.Colors.grey;
    let padding = opts && 'padding' in opts ? opts.padding : 5.0;
    let size = opts && 'size' in opts ? opts.size : null;
    this[_circlePaint] = null;
    this[_selectedPaint] = null;
    this[page$] = page;
    this[count$] = count;
    this[color$0] = color;
    this[selectedColor$0] = selectedColor;
    this[padding$0] = padding;
    this[size$2] = size;
    src__indicator.OvalPainter.__proto__.new.call(this);
    this[_circlePaint] = new ui$.Paint.new();
    this[_circlePaint].color = this.color;
    this[_selectedPaint] = new ui$.Paint.new();
    this[_selectedPaint].color = this.selectedColor;
    this.page == null ? this.page = 0.0 : null;
    this.count == null ? this.count = 0 : null;
    this.color == null ? this.color = src__material__colors.Colors.white : null;
    this.selectedColor == null ? this.selectedColor = src__material__colors.Colors.grey : null;
    this.size == null ? this.size = new ui$.Size.new(12.0, 12.0) : null;
    this.padding == null ? this.padding = 5.0 : null;
  }).prototype = src__indicator.OvalPainter.prototype;
  dart.addTypeTests(src__indicator.OvalPainter);
  const page$ = Symbol("OvalPainter.page");
  const count$ = Symbol("OvalPainter.count");
  const color$0 = Symbol("OvalPainter.color");
  const selectedColor$0 = Symbol("OvalPainter.selectedColor");
  const padding$0 = Symbol("OvalPainter.padding");
  const size$2 = Symbol("OvalPainter.size");
  dart.setMethodSignature(src__indicator.OvalPainter, () => ({
    __proto__: dart.getMethods(src__indicator.OvalPainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(src__indicator.OvalPainter, () => ({
    __proto__: dart.getGetters(src__indicator.OvalPainter.__proto__),
    totalWidth: core.double
  }));
  dart.setLibraryUri(src__indicator.OvalPainter, "package:page_indicator/src/indicator.dart");
  dart.setFieldSignature(src__indicator.OvalPainter, () => ({
    __proto__: dart.getFields(src__indicator.OvalPainter.__proto__),
    page: dart.fieldType(core.double),
    count: dart.fieldType(core.int),
    color: dart.fieldType(ui$.Color),
    selectedColor: dart.fieldType(ui$.Color),
    padding: dart.fieldType(core.double),
    [_circlePaint]: dart.fieldType(ui$.Paint),
    [_selectedPaint]: dart.fieldType(ui$.Paint),
    size: dart.fieldType(ui$.Size)
  }));
  src__indicator.RRectPainter = class RRectPainter extends src__rendering__custom_paint.CustomPainter {
    get page() {
      return this[page$0];
    }
    set page(value) {
      this[page$0] = value;
    }
    get count() {
      return this[count$0];
    }
    set count(value) {
      this[count$0] = value;
    }
    get color() {
      return this[color$1];
    }
    set color(value) {
      this[color$1] = value;
    }
    get selectedColor() {
      return this[selectedColor$1];
    }
    set selectedColor(value) {
      this[selectedColor$1] = value;
    }
    get padding() {
      return this[padding$1];
    }
    set padding(value) {
      this[padding$1] = value;
    }
    get size() {
      return this[size$3];
    }
    set size(value) {
      this[size$3] = value;
    }
    get cornerSize() {
      return this[cornerSize$0];
    }
    set cornerSize(value) {
      this[cornerSize$0] = value;
    }
    get totalWidth() {
      return dart.notNull(this.count) * dart.notNull(this.size.width) + dart.notNull(this.padding) * (dart.notNull(this.count) - 1);
    }
    paint(canvas, size) {
      let t0;
      let height = this.size.height;
      let width = this.size.width;
      let centerWidth = dart.notNull(size.width) / 2;
      let startX = centerWidth - dart.notNull(this.totalWidth) / 2;
      for (let i = 0; dart.dtest((t0 = i < dart.notNull(this.count), t0 === null ? 0 : t0)); i = i + 1) {
        let x = startX + i * (dart.notNull(width) + dart.notNull(this.padding));
        let rect = new ui$.Rect.fromLTWH(x, 0.0, width, height);
        let rrect = new ui$.RRect.fromRectAndRadius(rect, new ui$.Radius.elliptical(this.cornerSize.width, this.cornerSize.height));
        canvas.drawRRect(rrect, this[_circlePaint]);
      }
      let selectedX = startX + dart.notNull(this.page) * (dart.notNull(width) + dart.notNull(this.padding));
      let rect = new ui$.Rect.fromLTWH(selectedX, 0.0, width, height);
      let rrect = new ui$.RRect.fromRectAndRadius(rect, new ui$.Radius.elliptical(this.cornerSize.width, this.cornerSize.height));
      canvas.drawRRect(rrect, this[_selectedPaint]);
    }
    shouldRepaint(oldDelegate) {
      src__rendering__custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (src__indicator.RRectPainter.new = function(opts) {
    let page = opts && 'page' in opts ? opts.page : 0.0;
    let count = opts && 'count' in opts ? opts.count : 0;
    let color = opts && 'color' in opts ? opts.color : src__material__colors.Colors.white;
    let selectedColor = opts && 'selectedColor' in opts ? opts.selectedColor : src__material__colors.Colors.grey;
    let padding = opts && 'padding' in opts ? opts.padding : 5.0;
    let size = opts && 'size' in opts ? opts.size : null;
    let cornerSize = opts && 'cornerSize' in opts ? opts.cornerSize : null;
    this[_circlePaint] = null;
    this[_selectedPaint] = null;
    this[page$0] = page;
    this[count$0] = count;
    this[color$1] = color;
    this[selectedColor$1] = selectedColor;
    this[padding$1] = padding;
    this[size$3] = size;
    this[cornerSize$0] = cornerSize;
    src__indicator.RRectPainter.__proto__.new.call(this);
    this[_circlePaint] = new ui$.Paint.new();
    this[_circlePaint].color = this.color;
    this[_selectedPaint] = new ui$.Paint.new();
    this[_selectedPaint].color = this.selectedColor;
    this.page == null ? this.page = 0.0 : null;
    this.count == null ? this.count = 0 : null;
    this.color == null ? this.color = src__material__colors.Colors.white : null;
    this.selectedColor == null ? this.selectedColor = src__material__colors.Colors.grey : null;
    this.size == null ? this.size = new ui$.Size.new(12.0, 12.0) : null;
    this.padding == null ? this.padding = 5.0 : null;
  }).prototype = src__indicator.RRectPainter.prototype;
  dart.addTypeTests(src__indicator.RRectPainter);
  const page$0 = Symbol("RRectPainter.page");
  const count$0 = Symbol("RRectPainter.count");
  const color$1 = Symbol("RRectPainter.color");
  const selectedColor$1 = Symbol("RRectPainter.selectedColor");
  const padding$1 = Symbol("RRectPainter.padding");
  const size$3 = Symbol("RRectPainter.size");
  const cornerSize$0 = Symbol("RRectPainter.cornerSize");
  dart.setMethodSignature(src__indicator.RRectPainter, () => ({
    __proto__: dart.getMethods(src__indicator.RRectPainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(src__indicator.RRectPainter, () => ({
    __proto__: dart.getGetters(src__indicator.RRectPainter.__proto__),
    totalWidth: core.double
  }));
  dart.setLibraryUri(src__indicator.RRectPainter, "package:page_indicator/src/indicator.dart");
  dart.setFieldSignature(src__indicator.RRectPainter, () => ({
    __proto__: dart.getFields(src__indicator.RRectPainter.__proto__),
    page: dart.fieldType(core.double),
    count: dart.fieldType(core.int),
    color: dart.fieldType(ui$.Color),
    selectedColor: dart.fieldType(ui$.Color),
    padding: dart.fieldType(core.double),
    [_circlePaint]: dart.fieldType(ui$.Paint),
    [_selectedPaint]: dart.fieldType(ui$.Paint),
    size: dart.fieldType(ui$.Size),
    cornerSize: dart.fieldType(ui$.Size)
  }));
  src__indicator.CirclePainter = class CirclePainter extends src__rendering__custom_paint.CustomPainter {
    get page() {
      return this[page$1];
    }
    set page(value) {
      this[page$1] = value;
    }
    get count() {
      return this[count$1];
    }
    set count(value) {
      this[count$1] = value;
    }
    get color() {
      return this[color$2];
    }
    set color(value) {
      this[color$2] = value;
    }
    get selectedColor() {
      return this[selectedColor$2];
    }
    set selectedColor(value) {
      this[selectedColor$2] = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      this[radius$] = value;
    }
    get padding() {
      return this[padding$2];
    }
    set padding(value) {
      this[padding$2] = value;
    }
    get totalWidth() {
      return dart.notNull(this.count) * dart.notNull(this.radius) * 2 + dart.notNull(this.padding) * (dart.notNull(this.count) - 1);
    }
    paint(canvas, size) {
      let t0;
      let centerWidth = dart.notNull(size.width) / 2;
      let startX = centerWidth - dart.notNull(this.totalWidth) / 2;
      for (let i = 0; dart.dtest((t0 = i < dart.notNull(this.count), t0 === null ? 0 : t0)); i = i + 1) {
        let x = startX + i * (dart.notNull(this.radius) * 2 + dart.notNull(this.padding)) + dart.notNull(this.radius);
        canvas.drawCircle(new ui$.Offset.new(x, this.radius), this.radius, this[_circlePaint]);
      }
      let selectedX = startX + dart.notNull(this.page) * (dart.notNull(this.radius) * 2 + dart.notNull(this.padding)) + dart.notNull(this.radius);
      canvas.drawCircle(new ui$.Offset.new(selectedX, this.radius), this.radius, this[_selectedPaint]);
    }
    shouldRepaint(oldDelegate) {
      src__rendering__custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (src__indicator.CirclePainter.new = function(opts) {
    let page = opts && 'page' in opts ? opts.page : 0.0;
    let count = opts && 'count' in opts ? opts.count : 0;
    let color = opts && 'color' in opts ? opts.color : src__material__colors.Colors.white;
    let selectedColor = opts && 'selectedColor' in opts ? opts.selectedColor : src__material__colors.Colors.grey;
    let radius = opts && 'radius' in opts ? opts.radius : 12.0;
    let padding = opts && 'padding' in opts ? opts.padding : 5.0;
    this[_circlePaint] = null;
    this[_selectedPaint] = null;
    this[page$1] = page;
    this[count$1] = count;
    this[color$2] = color;
    this[selectedColor$2] = selectedColor;
    this[radius$] = radius;
    this[padding$2] = padding;
    src__indicator.CirclePainter.__proto__.new.call(this);
    this[_circlePaint] = new ui$.Paint.new();
    this[_circlePaint].color = this.color;
    this[_selectedPaint] = new ui$.Paint.new();
    this[_selectedPaint].color = this.selectedColor;
    this.page == null ? this.page = 0.0 : null;
    this.count == null ? this.count = 0 : null;
    this.color == null ? this.color = src__material__colors.Colors.white : null;
    this.selectedColor == null ? this.selectedColor = src__material__colors.Colors.grey : null;
    this.radius == null ? this.radius = 12.0 : null;
    this.padding == null ? this.padding = 5.0 : null;
  }).prototype = src__indicator.CirclePainter.prototype;
  dart.addTypeTests(src__indicator.CirclePainter);
  const page$1 = Symbol("CirclePainter.page");
  const count$1 = Symbol("CirclePainter.count");
  const color$2 = Symbol("CirclePainter.color");
  const selectedColor$2 = Symbol("CirclePainter.selectedColor");
  const radius$ = Symbol("CirclePainter.radius");
  const padding$2 = Symbol("CirclePainter.padding");
  dart.setMethodSignature(src__indicator.CirclePainter, () => ({
    __proto__: dart.getMethods(src__indicator.CirclePainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(src__indicator.CirclePainter, () => ({
    __proto__: dart.getGetters(src__indicator.CirclePainter.__proto__),
    totalWidth: core.double
  }));
  dart.setLibraryUri(src__indicator.CirclePainter, "package:page_indicator/src/indicator.dart");
  dart.setFieldSignature(src__indicator.CirclePainter, () => ({
    __proto__: dart.getFields(src__indicator.CirclePainter.__proto__),
    page: dart.fieldType(core.double),
    count: dart.fieldType(core.int),
    color: dart.fieldType(ui$.Color),
    selectedColor: dart.fieldType(ui$.Color),
    radius: dart.fieldType(core.double),
    padding: dart.fieldType(core.double),
    [_circlePaint]: dart.fieldType(ui$.Paint),
    [_selectedPaint]: dart.fieldType(ui$.Paint)
  }));
  dart.trackLibraries("packages/page_indicator/page_indicator", {
    "package:page_indicator/page_indicator.dart": page_indicator,
    "package:page_indicator/src/shape.dart": src__shape,
    "package:page_indicator/src/container.dart": src__container,
    "package:page_indicator/src/indicator.dart": src__indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/page_indicator/src/shape.dart","org-dartlang-app:///packages/page_indicator/src/container.dart","org-dartlang-app:///packages/page_indicator/src/indicator.dart"],"names":[],"mappings":"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","file":"page_indicator.ddc.js"}');
  // Exports:
  return {
    page_indicator: page_indicator,
    src__shape: src__shape,
    src__container: src__container,
    src__indicator: src__indicator
  };
});

//# sourceMappingURL=page_indicator.ddc.js.map
