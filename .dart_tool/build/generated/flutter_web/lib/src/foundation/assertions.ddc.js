define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/io', 'packages/typed_data/typed_buffers'], function(dart_sdk, ui, io, typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const io$ = io.io;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const src__foundation__bitfield = Object.create(dart.library);
  const src__foundation__binding = Object.create(dart.library);
  const src__foundation__print = Object.create(dart.library);
  const src__foundation__platform = Object.create(dart.library);
  const src__foundation__debug = Object.create(dart.library);
  const src__foundation__assertions = Object.create(dart.library);
  const src__foundation__diagnostics = Object.create(dart.library);
  const src__foundation__constants = Object.create(dart.library);
  const src__foundation__basic_types = Object.create(dart.library);
  const src__foundation__synchronous_future = Object.create(dart.library);
  const src__foundation__unicode = Object.create(dart.library);
  const src__foundation__key = Object.create(dart.library);
  const src__foundation__profile = Object.create(dart.library);
  const src__foundation__collections = Object.create(dart.library);
  const src__foundation__licenses = Object.create(dart.library);
  const src__foundation__observer_list = Object.create(dart.library);
  const src__foundation__change_notifier = Object.create(dart.library);
  const src__foundation__isolates = Object.create(dart.library);
  const src__foundation__node = Object.create(dart.library);
  const src__foundation__serialization = Object.create(dart.library);
  const $leftShift = dartx['<<'];
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $substring = dartx.substring;
  const $toString = dartx.toString;
  const $_set = dartx._set;
  const $runtimeType = dartx.runtimeType;
  const $split = dartx.split;
  const $expand = dartx.expand;
  const $join = dartx.join;
  const $isNotEmpty = dartx.isNotEmpty;
  const $trimLeft = dartx.trimLeft;
  const $matchAsPrefix = dartx.matchAsPrefix;
  const $times = dartx['*'];
  const $toStringAsPrecision = dartx.toStringAsPrecision;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $isEmpty = dartx.isEmpty;
  const $endsWith = dartx.endsWith;
  const $entries = dartx.entries;
  const $length = dartx.length;
  const $add = dartx.add;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $last = dartx.last;
  const $contains = dartx.contains;
  const $lastIndexOf = dartx.lastIndexOf;
  const $indexOf = dartx.indexOf;
  const $trimRight = dartx.trimRight;
  const $firstWhere = dartx.firstWhere;
  const $startsWith = dartx.startsWith;
  const $take = dartx.take;
  const $forEach = dartx.forEach;
  const $first = dartx.first;
  const $where = dartx.where;
  const $skip = dartx.skip;
  const $single = dartx.single;
  const $sort = dartx.sort;
  const $clear = dartx.clear;
  const $toUpperCase = dartx.toUpperCase;
  const $replaceAll = dartx.replaceAll;
  const $clamp = dartx.clamp;
  const $_equals = dartx._equals;
  const $hashCode = dartx.hashCode;
  const $toUnsigned = dartx.toUnsigned;
  const $toRadixString = dartx.toRadixString;
  const $padLeft = dartx.padLeft;
  const $iterator = dartx.iterator;
  const $takeWhile = dartx.takeWhile;
  const $skipWhile = dartx.skipWhile;
  const $truncate = dartx.truncate;
  const $remove = dartx.remove;
  const $buffer = dartx.buffer;
  const $asUint8List = dartx.asUint8List;
  const $setUint16 = dartx.setUint16;
  const $setUint32 = dartx.setUint32;
  const $setInt32 = dartx.setInt32;
  const $setInt64 = dartx.setInt64;
  const $setFloat64 = dartx.setFloat64;
  const $offsetInBytes = dartx.offsetInBytes;
  const $modulo = dartx['%'];
  const $asByteData = dartx.asByteData;
  const $lengthInBytes = dartx.lengthInBytes;
  const $getUint8 = dartx.getUint8;
  const $getUint16 = dartx.getUint16;
  const $getUint32 = dartx.getUint32;
  const $getInt32 = dartx.getInt32;
  const $getInt64 = dartx.getInt64;
  const $getFloat64 = dartx.getFloat64;
  const $asInt32List = dartx.asInt32List;
  const $asInt64List = dartx.asInt64List;
  const $asFloat64List = dartx.asFloat64List;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let FutureOfMapOfString$dynamic = () => (FutureOfMapOfString$dynamic = dart.constFn(async.Future$(MapOfString$dynamic())))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let MapOfString$StringToFutureOfMapOfString$dynamic = () => (MapOfString$StringToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(FutureOfMapOfString$dynamic(), [MapOfString$String()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfServiceExtensionResponse = () => (FutureOfServiceExtensionResponse = dart.constFn(async.Future$(developer.ServiceExtensionResponse)))();
  let StringAndMapOfString$StringToFutureOfServiceExtensionResponse = () => (StringAndMapOfString$StringToFutureOfServiceExtensionResponse = dart.constFn(dart.fnType(FutureOfServiceExtensionResponse(), [core.String, MapOfString$String()])))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let StringToIterableOfString = () => (StringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [core.String])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let SyncIterableOfString = () => (SyncIterableOfString = dart.constFn(_js_helper.SyncIterable$(core.String)))();
  let String__Tovoid = () => (String__Tovoid = dart.constFn(dart.fnType(dart.void, [core.String], {wrapWidth: core.int})))();
  let ListQueueOfString = () => (ListQueueOfString = dart.constFn(collection.ListQueue$(core.String)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let DiagnosticsPropertyOfvoid = () => (DiagnosticsPropertyOfvoid = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(dart.void)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let DiagnosticsNodeToMapOfString$Object = () => (DiagnosticsNodeToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [src__foundation__diagnostics.DiagnosticsNode])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let DiagnosticsNodeTobool = () => (DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [src__foundation__diagnostics.DiagnosticsNode])))();
  let DiagnosticableNodeOfDiagnosticable = () => (DiagnosticableNodeOfDiagnosticable = dart.constFn(src__foundation__diagnostics.DiagnosticableNode$(src__foundation__diagnostics.Diagnosticable)))();
  let IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(src__foundation__diagnostics.DiagnosticsNode)))();
  let IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [IterableOfDiagnosticsNode()])))();
  let JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = () => (JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode())))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(src__foundation__diagnostics.DiagnosticsNode)))();
  let DiagnosticsPropertyOfFlutterError = () => (DiagnosticsPropertyOfFlutterError = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__foundation__assertions.FlutterError)))();
  let DiagnosticsPropertyOfDiagnosticsNode = () => (DiagnosticsPropertyOfDiagnosticsNode = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__foundation__diagnostics.DiagnosticsNode)))();
  let StringToErrorDescription = () => (StringToErrorDescription = dart.constFn(dart.fnType(src__foundation__assertions.ErrorDescription, [core.String])))();
  let LinkedHashSetOfString = () => (LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))();
  let DiagnosticsNodeToString = () => (DiagnosticsNodeToString = dart.constFn(dart.fnType(core.String, [src__foundation__diagnostics.DiagnosticsNode])))();
  let FlutterErrorDetails__Tovoid = () => (FlutterErrorDetails__Tovoid = dart.constFn(dart.fnType(dart.void, [src__foundation__assertions.FlutterErrorDetails], {forceReport: core.bool})))();
  let IterableOfStringToIterableOfString = () => (IterableOfStringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [IterableOfString()])))();
  let StringToDiagnosticsNode = () => (StringToDiagnosticsNode = dart.constFn(dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [core.String])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  let DiagnosticsNodeTovoid = () => (DiagnosticsNodeTovoid = dart.constFn(dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticsNode])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidToLicenseParagraph = () => (VoidToLicenseParagraph = dart.constFn(dart.fnType(src__foundation__licenses.LicenseParagraph, [])))();
  let SyncIterableOfLicenseParagraph = () => (SyncIterableOfLicenseParagraph = dart.constFn(_js_helper.SyncIterable$(src__foundation__licenses.LicenseParagraph)))();
  let StreamOfLicenseEntry = () => (StreamOfLicenseEntry = dart.constFn(async.Stream$(src__foundation__licenses.LicenseEntry)))();
  let VoidToStreamOfLicenseEntry = () => (VoidToStreamOfLicenseEntry = dart.constFn(dart.fnType(StreamOfLicenseEntry(), [])))();
  let JSArrayOfVoidToStreamOfLicenseEntry = () => (JSArrayOfVoidToStreamOfLicenseEntry = dart.constFn(_interceptors.JSArray$(VoidToStreamOfLicenseEntry())))();
  let _AsyncStarImplOfLicenseEntry = () => (_AsyncStarImplOfLicenseEntry = dart.constFn(async._AsyncStarImpl$(src__foundation__licenses.LicenseEntry)))();
  let ObserverListOfVoidTovoid = () => (ObserverListOfVoidTovoid = dart.constFn(src__foundation__observer_list.ObserverList$(VoidTovoid())))();
  let ListOfVoidTovoid = () => (ListOfVoidTovoid = dart.constFn(core.List$(VoidTovoid())))();
  let DiagnosticsPropertyOfChangeNotifier = () => (DiagnosticsPropertyOfChangeNotifier = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__foundation__change_notifier.ChangeNotifier)))();
  let SyncIterableOfDiagnosticsPropertyOfChangeNotifier = () => (SyncIterableOfDiagnosticsPropertyOfChangeNotifier = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfChangeNotifier())))();
  let IterableOfDiagnosticsPropertyOfChangeNotifier = () => (IterableOfDiagnosticsPropertyOfChangeNotifier = dart.constFn(core.Iterable$(DiagnosticsPropertyOfChangeNotifier())))();
  let VoidToIterableOfDiagnosticsPropertyOfChangeNotifier = () => (VoidToIterableOfDiagnosticsPropertyOfChangeNotifier = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfChangeNotifier(), [])))();
  const _length$ = dart.privateName(src__foundation__bitfield, "_length");
  const _bits = dart.privateName(src__foundation__bitfield, "_bits");
  const _is_BitField_default = Symbol('_is_BitField_default');
  src__foundation__bitfield.BitField$ = dart.generic(T => {
    class BitField extends core.Object {
      _get(index) {
        T._check(index);
        if (!dart.test(core.bool._check(dart.dsend(dart.dload(index, 'index'), '<', [this[_length$]])))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/bitfield.dart", 50, 12, "index.index < _length");
        return (dart.notNull(this[_bits]) & (1)[$leftShift](core.int._check(dart.dload(index, 'index')))) >>> 0 > 0;
      }
      _set(index, value$) {
        let value = value$;
        T._check(index);
        if (!dart.test(core.bool._check(dart.dsend(dart.dload(index, 'index'), '<', [this[_length$]])))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/bitfield.dart", 59, 12, "index.index < _length");
        if (dart.test(value))
          this[_bits] = (dart.notNull(this[_bits]) | (1)[$leftShift](core.int._check(dart.dload(index, 'index')))) >>> 0;
        else
          this[_bits] = (dart.notNull(this[_bits]) & ~(1)[$leftShift](core.int._check(dart.dload(index, 'index'))) >>> 0) >>> 0;
        return value$;
      }
      reset(value) {
        if (value === void 0) value = false;
        this[_bits] = dart.test(value) ? src__foundation__bitfield.BitField._allOnes : src__foundation__bitfield.BitField._allZeros;
      }
    }
    (BitField.new = function(_length) {
      this[_length$] = _length;
      if (!(dart.notNull(_length) <= dart.notNull(src__foundation__bitfield.BitField._smiBits))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/bitfield.dart", 28, 16, "_length <= _smiBits");
      this[_bits] = src__foundation__bitfield.BitField._allZeros;
      ;
    }).prototype = BitField.prototype;
    (BitField.filled = function(_length, value) {
      this[_length$] = _length;
      if (!(dart.notNull(_length) <= dart.notNull(src__foundation__bitfield.BitField._smiBits))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/bitfield.dart", 38, 16, "_length <= _smiBits");
      this[_bits] = dart.test(value) ? src__foundation__bitfield.BitField._allOnes : src__foundation__bitfield.BitField._allZeros;
      ;
    }).prototype = BitField.prototype;
    dart.addTypeTests(BitField);
    BitField.prototype[_is_BitField_default] = true;
    dart.setMethodSignature(BitField, () => ({
      __proto__: dart.getMethods(BitField.__proto__),
      _get: dart.fnType(core.bool, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.bool]),
      reset: dart.fnType(dart.void, [], [core.bool])
    }));
    dart.setLibraryUri(BitField, "package:flutter_web/src/foundation/bitfield.dart");
    dart.setFieldSignature(BitField, () => ({
      __proto__: dart.getFields(BitField.__proto__),
      [_length$]: dart.finalFieldType(core.int),
      [_bits]: dart.fieldType(core.int)
    }));
    return BitField;
  });
  src__foundation__bitfield.BitField = src__foundation__bitfield.BitField$();
  dart.defineLazy(src__foundation__bitfield.BitField, {
    /*src__foundation__bitfield.BitField._smiBits*/get _smiBits() {
      return 62;
    },
    /*src__foundation__bitfield.BitField._allZeros*/get _allZeros() {
      return 0;
    },
    /*src__foundation__bitfield.BitField._allOnes*/get _allOnes() {
      return src__foundation__bitfield.kMaxUnsignedSMI;
    }
  });
  dart.addTypeTests(src__foundation__bitfield.BitField, _is_BitField_default);
  dart.defineLazy(src__foundation__bitfield, {
    /*src__foundation__bitfield.kMaxUnsignedSMI*/get kMaxUnsignedSMI() {
      return ui$.kMaxUnsignedSMI;
    }
  });
  const _lockCount = dart.privateName(src__foundation__binding, "_lockCount");
  const _postExtensionStateChangedEvent = dart.privateName(src__foundation__binding, "_postExtensionStateChangedEvent");
  src__foundation__binding.BindingBase = class BindingBase extends core.Object {
    get window() {
      return ui$.window;
    }
    initInstances() {
      if (!!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 101, 12, "!_debugInitialized");
      if (!dart.test(dart.fn(() => {
        src__foundation__binding.BindingBase._debugInitialized = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 102, 12, "() { _debugInitialized = true; return true; }()");
    }
    initServiceExtensions() {
      if (!!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 126, 12, "!_debugServiceExtensionsRegistered");
      if (!dart.test(dart.fn(() => {
        this.registerSignalServiceExtension({name: "reassemble", callback: dart.bind(this, 'reassembleApplication')});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 128, 12, "() {\n      registerSignalServiceExtension(\n        name: 'reassemble',\n        callback: reassembleApplication,\n      );\n      return true;\n    }()");
      if (!dart.test(src__foundation__constants.kReleaseMode) && !dart.test(ui$.isWeb)) {
        this.registerSignalServiceExtension({name: "exit", callback: dart.fn(src__foundation__binding._exitApplication, VoidToFutureOfvoid())});
        this.registerServiceExtension({name: "saveCompilationTrace", callback: dart.fn(parameters => async.async(MapOfString$dynamic(), function*() {
            return new (IdentityMapOfString$dynamic()).from(["value", ui$.saveCompilationTrace()]);
          }), MapOfString$StringToFutureOfMapOfString$dynamic())});
      }
      if (!dart.test(dart.fn(() => {
        if (dart.test(ui$.isWeb)) return true;
        let platformOverrideExtensionName = "platformOverride";
        this.registerServiceExtension({name: platformOverrideExtensionName, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
            if (dart.test(parameters[$containsKey]("value"))) {
              switch (parameters[$_get]("value")) {
                case "android":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.android;
                  break;
                }
                case "iOS":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.iOS;
                  break;
                }
                case "fuchsia":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.fuchsia;
                  break;
                }
                case "default":
                default:
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = null;
                }
              }
              this[_postExtensionStateChangedEvent](platformOverrideExtensionName, dart.toString(src__foundation__platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(src__foundation__platform.TargetPlatform)) + ".").length));
              yield this.reassembleApplication();
            }
            return new (IdentityMapOfString$dynamic()).from(["value", dart.toString(src__foundation__platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(src__foundation__platform.TargetPlatform)) + ".").length)]);
          }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 151, 12, "() {\n      // TODO(flutter_web): reenable after cupertino widgets supported on web.\n      if (ui.isWeb) return true;\n      const String platformOverrideExtensionName = 'platformOverride';\n      registerServiceExtension(\n        name: platformOverrideExtensionName,\n        callback: (Map<String, String> parameters) async {\n          if (parameters.containsKey('value')) {\n            switch (parameters['value']) {\n              case 'android':\n                debugDefaultTargetPlatformOverride = TargetPlatform.android;\n                break;\n              case 'iOS':\n                debugDefaultTargetPlatformOverride = TargetPlatform.iOS;\n                break;\n              case 'fuchsia':\n                debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia;\n                break;\n              case 'default':\n              default:\n                debugDefaultTargetPlatformOverride = null;\n            }\n            _postExtensionStateChangedEvent(\n              platformOverrideExtensionName,\n              defaultTargetPlatform.toString().substring('$TargetPlatform.'.length),\n            );\n            await reassembleApplication();\n          }\n          return <String, dynamic>{\n            'value': defaultTargetPlatform\n                     .toString()\n                     .substring('$TargetPlatform.'.length),\n          };\n        },\n      );\n      return true;\n    }()");
      if (!dart.test(dart.fn(() => {
        src__foundation__binding.BindingBase._debugServiceExtensionsRegistered = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 188, 12, "() { _debugServiceExtensionsRegistered = true; return true; }()");
    }
    get locked() {
      return dart.notNull(this[_lockCount]) > 0;
    }
    lockEvents(callback) {
      developer.Timeline.startSync("Lock events");
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 214, 12, "callback != null");
      this[_lockCount] = dart.notNull(this[_lockCount]) + 1;
      let future = callback();
      if (!(future != null)) dart.assertFailed("The lockEvents() callback returned null; it should return a Future<void> that completes when the lock is to expire.", "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 217, 12, "future != null");
      future.whenComplete(dart.fn(() => {
        this[_lockCount] = dart.notNull(this[_lockCount]) - 1;
        if (!dart.test(this.locked)) {
          developer.Timeline.finishSync();
          this.unlocked();
        }
      }, VoidToNull()));
      return future;
    }
    unlocked() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 234, 12, "!locked");
    }
    reassembleApplication() {
      return this.lockEvents(dart.bind(this, 'performReassemble'));
    }
    performReassemble() {
      src__foundation__assertions.FlutterError.resetErrorCount();
      return FutureOfvoid().value();
    }
    registerSignalServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 288, 12, "name != null");
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 289, 12, "callback != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), function*() {
          yield callback();
          return new (IdentityMapOfString$dynamic()).new();
        }), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerBoolServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 319, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 320, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 321, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("enabled"))) {
            yield setter(parameters[$_get]("enabled") === "true");
            this[_postExtensionStateChangedEvent](name, dart.test(yield getter()) ? "true" : "false");
          }
          return new (IdentityMapOfString$dynamic()).from(["enabled", dart.test(yield getter()) ? "true" : "false"]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerNumericServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 353, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 354, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 355, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey](name))) {
            yield setter(core.double.parse(parameters[$_get](name)));
            this[_postExtensionStateChangedEvent](name, dart.toString(yield getter()));
          }
          return new (IdentityMapOfString$dynamic()).from([name, dart.toString(yield getter())]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    [_postExtensionStateChangedEvent](name, value) {
      this.postEvent("Flutter.ServiceExtensionStateChanged", new (IdentityMapOfString$dynamic()).from(["extension", "ext.flutter." + dart.str(name), "value", value]));
    }
    postEvent(eventKind, eventData) {
      developer.postEvent(eventKind, eventData);
    }
    registerStringServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 415, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 416, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 417, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("value"))) {
            yield setter(parameters[$_get]("value"));
            this[_postExtensionStateChangedEvent](name, yield getter());
          }
          return new (IdentityMapOfString$dynamic()).from(["value", (yield getter())]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 486, 12, "name != null");
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 487, 12, "callback != null");
      let methodName = "ext.flutter." + dart.str(name);
      developer.registerExtension(methodName, dart.fn((method, parameters) => async.async(developer.ServiceExtensionResponse, function*() {
        if (!(method === methodName)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 490, 14, "method == methodName");
        if (!dart.test(dart.fn(() => {
          if (dart.test(src__foundation__debug.debugInstrumentationEnabled)) src__foundation__print.debugPrint("service extension method received: " + dart.str(method) + "(" + dart.str(parameters) + ")");
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 491, 14, "() {\n        if (debugInstrumentationEnabled)\n          debugPrint('service extension method received: $method($parameters)');\n        return true;\n      }()");
        yield src__foundation__debug.debugInstrumentAction(dart.void, "Wait for outer event loop", dart.fn(() => FutureOfvoid().delayed(core.Duration.zero), VoidToFutureOfvoid()));
        let caughtException = null;
        let caughtStack = null;
        let result = null;
        try {
          result = (yield callback(parameters));
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          caughtException = exception;
          caughtStack = stack;
        }
        if (caughtException == null) {
          result[$_set]("type", "_extensionType");
          result[$_set]("method", method);
          return new developer.ServiceExtensionResponse.result(convert.json.encode(result));
        } else {
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: caughtException, stack: caughtStack, context: new src__foundation__assertions.ErrorDescription.new("during a service extension callback for \"" + dart.str(method) + "\"")}));
          return new developer.ServiceExtensionResponse.error(developer.ServiceExtensionResponse.extensionError, convert.json.encode(new (IdentityMapOfString$String()).from(["exception", dart.toString(caughtException), "stack", dart.toString(caughtStack), "method", method])));
        }
      }), StringAndMapOfString$StringToFutureOfServiceExtensionResponse()));
    }
    toString() {
      return "<" + dart.str(this[$runtimeType]) + ">";
    }
  };
  (src__foundation__binding.BindingBase.new = function() {
    this[_lockCount] = 0;
    developer.Timeline.startSync("Framework initialization");
    if (!!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 56, 12, "!_debugInitialized");
    this.initInstances();
    if (!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 58, 12, "_debugInitialized");
    if (!!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 60, 12, "!_debugServiceExtensionsRegistered");
    this.initServiceExtensions();
    if (!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart", 62, 12, "_debugServiceExtensionsRegistered");
    developer.postEvent("Flutter.FrameworkInitialization", new (IdentityMapOfString$String()).new());
    developer.Timeline.finishSync();
  }).prototype = src__foundation__binding.BindingBase.prototype;
  dart.addTypeTests(src__foundation__binding.BindingBase);
  dart.setMethodSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getMethods(src__foundation__binding.BindingBase.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    lockEvents: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), [])]),
    unlocked: dart.fnType(dart.void, []),
    reassembleApplication: dart.fnType(async.Future$(dart.void), []),
    performReassemble: dart.fnType(async.Future$(dart.void), []),
    registerSignalServiceExtension: dart.fnType(dart.void, [], {callback: dart.fnType(async.Future$(dart.void), []), name: core.String}),
    registerBoolServiceExtension: dart.fnType(dart.void, [], {getter: dart.fnType(async.Future$(core.bool), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.bool])}),
    registerNumericServiceExtension: dart.fnType(dart.void, [], {getter: dart.fnType(async.Future$(core.double), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.double])}),
    [_postExtensionStateChangedEvent]: dart.fnType(dart.void, [core.String, dart.dynamic]),
    postEvent: dart.fnType(dart.void, [core.String, core.Map$(core.String, dart.dynamic)]),
    registerStringServiceExtension: dart.fnType(dart.void, [], {getter: dart.fnType(async.Future$(core.String), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.String])}),
    registerServiceExtension: dart.fnType(dart.void, [], {callback: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [core.Map$(core.String, core.String)]), name: core.String})
  }));
  dart.setGetterSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getGetters(src__foundation__binding.BindingBase.__proto__),
    window: ui$.Window,
    locked: core.bool
  }));
  dart.setLibraryUri(src__foundation__binding.BindingBase, "package:flutter_web/src/foundation/binding.dart");
  dart.setFieldSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getFields(src__foundation__binding.BindingBase.__proto__),
    [_lockCount]: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__binding.BindingBase, ['toString']);
  dart.defineLazy(src__foundation__binding.BindingBase, {
    /*src__foundation__binding.BindingBase._debugInitialized*/get _debugInitialized() {
      return false;
    },
    set _debugInitialized(_) {},
    /*src__foundation__binding.BindingBase._debugServiceExtensionsRegistered*/get _debugServiceExtensionsRegistered() {
      return false;
    },
    set _debugServiceExtensionsRegistered(_) {}
  });
  src__foundation__binding._exitApplication = function() {
    return async.async(dart.void, function* _exitApplication() {
      io$.exit(0);
    });
  };
  const _name$ = dart.privateName(src__foundation__print, "_name");
  src__foundation__print._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__foundation__print._WordWrapParseMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__foundation__print._WordWrapParseMode.prototype;
  dart.addTypeTests(src__foundation__print._WordWrapParseMode);
  dart.setLibraryUri(src__foundation__print._WordWrapParseMode, "package:flutter_web/src/foundation/print.dart");
  dart.setFieldSignature(src__foundation__print._WordWrapParseMode, () => ({
    __proto__: dart.getFields(src__foundation__print._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__foundation__print._WordWrapParseMode, ['toString']);
  src__foundation__print._WordWrapParseMode.inSpace = dart.const(new src__foundation__print._WordWrapParseMode.new(0, "_WordWrapParseMode.inSpace"));
  src__foundation__print._WordWrapParseMode.inWord = dart.const(new src__foundation__print._WordWrapParseMode.new(1, "_WordWrapParseMode.inWord"));
  src__foundation__print._WordWrapParseMode.atBreak = dart.const(new src__foundation__print._WordWrapParseMode.new(2, "_WordWrapParseMode.atBreak"));
  src__foundation__print._WordWrapParseMode.values = dart.constList([src__foundation__print._WordWrapParseMode.inSpace, src__foundation__print._WordWrapParseMode.inWord, src__foundation__print._WordWrapParseMode.atBreak], src__foundation__print._WordWrapParseMode);
  src__foundation__print.debugPrintSynchronously = function(message, opts) {
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    if (wrapWidth != null) {
      core.print(message[$split]("\n")[$expand](core.String, dart.fn(line => src__foundation__print.debugWordWrap(line, wrapWidth), StringToIterableOfString()))[$join]("\n"));
    } else {
      core.print(message);
    }
  };
  src__foundation__print.debugPrintThrottled = function(message, opts) {
    let t1, t1$;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    let messageLines = (t1$ = (t1 = message, t1 == null ? null : t1[$split]("\n")), t1$ == null ? JSArrayOfString().of(["null"]) : t1$);
    if (wrapWidth != null) {
      src__foundation__print._debugPrintBuffer.addAll(messageLines[$expand](core.String, dart.fn(line => src__foundation__print.debugWordWrap(line, wrapWidth), StringToIterableOfString())));
    } else {
      src__foundation__print._debugPrintBuffer.addAll(messageLines);
    }
    if (!dart.test(src__foundation__print._debugPrintScheduled)) src__foundation__print._debugPrintTask();
  };
  src__foundation__print._debugPrintTask = function() {
    let t1;
    src__foundation__print._debugPrintScheduled = false;
    if (dart.test(src__foundation__print._debugPrintStopwatch.elapsed['>'](src__foundation__print._kDebugPrintPauseTime))) {
      src__foundation__print._debugPrintStopwatch.stop();
      src__foundation__print._debugPrintStopwatch.reset();
      src__foundation__print._debugPrintedCharacters = 0;
    }
    while (dart.notNull(src__foundation__print._debugPrintedCharacters) < dart.notNull(src__foundation__print._kDebugPrintCapacity) && dart.test(src__foundation__print._debugPrintBuffer[$isNotEmpty])) {
      let line = src__foundation__print._debugPrintBuffer.removeFirst();
      src__foundation__print._debugPrintedCharacters = dart.notNull(src__foundation__print._debugPrintedCharacters) + line.length;
      core.print(line);
    }
    if (dart.test(src__foundation__print._debugPrintBuffer[$isNotEmpty])) {
      src__foundation__print._debugPrintScheduled = true;
      src__foundation__print._debugPrintedCharacters = 0;
      async.Timer.new(src__foundation__print._kDebugPrintPauseTime, dart.fn(src__foundation__print._debugPrintTask, VoidTovoid()));
      src__foundation__print._debugPrintCompleter == null ? src__foundation__print._debugPrintCompleter = CompleterOfvoid().new() : null;
    } else {
      src__foundation__print._debugPrintStopwatch.start();
      t1 = src__foundation__print._debugPrintCompleter;
      t1 == null ? null : t1.complete();
      src__foundation__print._debugPrintCompleter = null;
    }
  };
  src__foundation__print.debugWordWrap = function(message, width, opts) {
    let wrapIndent = opts && 'wrapIndent' in opts ? opts.wrapIndent : "";
    return new (SyncIterableOfString()).new(function* debugWordWrap() {
      if (message.length < dart.notNull(width) || message[$trimLeft]()[$_get](0) === "#") {
        yield message;
        return;
      }
      let prefixMatch = src__foundation__print._indentPattern[$matchAsPrefix](message);
      let prefix = dart.notNull(wrapIndent) + " "[$times](prefixMatch.group(0).length);
      let start = 0;
      let startForLengthCalculations = 0;
      let addPrefix = false;
      let index = prefix.length;
      let mode = src__foundation__print._WordWrapParseMode.inSpace;
      let lastWordStart = null;
      let lastWordEnd = null;
      while (true) {
        switch (mode) {
          case src__foundation__print._WordWrapParseMode.inSpace:
          {
            while (index < message.length && message[$_get](index) === " ")
              index = index + 1;
            lastWordStart = index;
            mode = src__foundation__print._WordWrapParseMode.inWord;
            break;
          }
          case src__foundation__print._WordWrapParseMode.inWord:
          {
            while (index < message.length && message[$_get](index) !== " ")
              index = index + 1;
            mode = src__foundation__print._WordWrapParseMode.atBreak;
            break;
          }
          case src__foundation__print._WordWrapParseMode.atBreak:
          {
            if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
              if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                lastWordEnd = index;
              }
              if (addPrefix) {
                yield prefix + message[$substring](start, lastWordEnd);
              } else {
                yield message[$substring](start, lastWordEnd);
                addPrefix = true;
              }
              if (dart.notNull(lastWordEnd) >= message.length) return;
              if (lastWordEnd === index) {
                while (index < message.length && message[$_get](index) === " ")
                  index = index + 1;
                start = index;
                mode = src__foundation__print._WordWrapParseMode.inWord;
              } else {
                if (!(dart.notNull(lastWordStart) > dart.notNull(lastWordEnd))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/print.dart", 161, 20, "lastWordStart > lastWordEnd");
                start = lastWordStart;
                mode = src__foundation__print._WordWrapParseMode.atBreak;
              }
              startForLengthCalculations = dart.notNull(start) - prefix.length;
              if (!addPrefix) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/print.dart", 166, 18, "addPrefix");
              lastWordEnd = null;
            } else {
              lastWordEnd = index;
              mode = src__foundation__print._WordWrapParseMode.inSpace;
            }
            break;
          }
        }
      }
    });
  };
  dart.copyProperties(src__foundation__print, {
    get debugPrintDone() {
      let t1, t1$;
      t1$ = (t1 = src__foundation__print._debugPrintCompleter, t1 == null ? null : t1.future);
      return t1$ == null ? FutureOfvoid().value() : t1$;
    }
  });
  dart.defineLazy(src__foundation__print, {
    /*src__foundation__print.debugPrint*/get debugPrint() {
      return dart.fn(src__foundation__print.debugPrintThrottled, String__Tovoid());
    },
    set debugPrint(_) {},
    /*src__foundation__print._debugPrintedCharacters*/get _debugPrintedCharacters() {
      return 0;
    },
    set _debugPrintedCharacters(_) {},
    /*src__foundation__print._kDebugPrintCapacity*/get _kDebugPrintCapacity() {
      return 12 * 1024;
    },
    /*src__foundation__print._kDebugPrintPauseTime*/get _kDebugPrintPauseTime() {
      return dart.const(new core.Duration.new({seconds: 1}));
    },
    /*src__foundation__print._debugPrintBuffer*/get _debugPrintBuffer() {
      return new (ListQueueOfString()).new();
    },
    /*src__foundation__print._debugPrintStopwatch*/get _debugPrintStopwatch() {
      return new core.Stopwatch.new();
    },
    /*src__foundation__print._debugPrintCompleter*/get _debugPrintCompleter() {
      return null;
    },
    set _debugPrintCompleter(_) {},
    /*src__foundation__print._debugPrintScheduled*/get _debugPrintScheduled() {
      return false;
    },
    set _debugPrintScheduled(_) {},
    /*src__foundation__print._indentPattern*/get _indentPattern() {
      return core.RegExp.new("^ *(?:[-+*] |[0-9]+[.):] )?");
    }
  });
  const _name$0 = dart.privateName(src__foundation__platform, "_name");
  src__foundation__platform.TargetPlatform = class TargetPlatform extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (src__foundation__platform.TargetPlatform.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = src__foundation__platform.TargetPlatform.prototype;
  dart.addTypeTests(src__foundation__platform.TargetPlatform);
  dart.setLibraryUri(src__foundation__platform.TargetPlatform, "package:flutter_web/src/foundation/platform.dart");
  dart.setFieldSignature(src__foundation__platform.TargetPlatform, () => ({
    __proto__: dart.getFields(src__foundation__platform.TargetPlatform.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__foundation__platform.TargetPlatform, ['toString']);
  src__foundation__platform.TargetPlatform.android = dart.const(new src__foundation__platform.TargetPlatform.new(0, "TargetPlatform.android"));
  src__foundation__platform.TargetPlatform.fuchsia = dart.const(new src__foundation__platform.TargetPlatform.new(1, "TargetPlatform.fuchsia"));
  src__foundation__platform.TargetPlatform.iOS = dart.const(new src__foundation__platform.TargetPlatform.new(2, "TargetPlatform.iOS"));
  src__foundation__platform.TargetPlatform.values = dart.constList([src__foundation__platform.TargetPlatform.android, src__foundation__platform.TargetPlatform.fuchsia, src__foundation__platform.TargetPlatform.iOS], src__foundation__platform.TargetPlatform);
  dart.copyProperties(src__foundation__platform, {
    get defaultTargetPlatform() {
      if (src__foundation__platform.debugDefaultTargetPlatformOverride != null) return src__foundation__platform.debugDefaultTargetPlatformOverride;
      return src__foundation__platform.TargetPlatform.android;
    }
  });
  dart.defineLazy(src__foundation__platform, {
    /*src__foundation__platform.debugDefaultTargetPlatformOverride*/get debugDefaultTargetPlatformOverride() {
      return null;
    },
    set debugDefaultTargetPlatformOverride(_) {}
  });
  src__foundation__debug.debugAssertAllFoundationVarsUnset = function(reason, opts) {
    let debugPrintOverride = opts && 'debugPrintOverride' in opts ? opts.debugPrintOverride : dart.fn(src__foundation__print.debugPrintThrottled, String__Tovoid());
    if (!dart.test(dart.fn(() => {
      if (!dart.equals(src__foundation__print.debugPrint, debugPrintOverride) || src__foundation__platform.debugDefaultTargetPlatformOverride != null || src__foundation__debug.debugDoublePrecision != null) dart.throw(src__foundation__assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/debug.dart", 25, 10, "() {\n    if (debugPrint != debugPrintOverride ||\n        debugDefaultTargetPlatformOverride != null ||\n        debugDoublePrecision != null)\n      throw FlutterError(reason);\n    return true;\n  }()");
    return true;
  };
  src__foundation__debug.debugInstrumentAction = function(T, description, action) {
    let t1;
    let instrument = false;
    if (!dart.test(dart.fn(() => {
      instrument = src__foundation__debug.debugInstrumentationEnabled;
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/debug.dart", 55, 10, "() { instrument = debugInstrumentationEnabled; return true; }()");
    if (dart.test(instrument)) {
      let stopwatch = (t1 = new core.Stopwatch.new(), t1.start(), t1);
      return action().whenComplete(dart.fn(() => {
        stopwatch.stop();
        src__foundation__print.debugPrint("Action \"" + dart.str(description) + "\" took " + dart.str(stopwatch.elapsed));
      }, VoidToNull()));
    } else {
      return action();
    }
  };
  src__foundation__debug.debugFormatDouble = function(value) {
    if (value == null) {
      return "null";
    }
    if (src__foundation__debug.debugDoublePrecision != null) {
      return value[$toStringAsPrecision](src__foundation__debug.debugDoublePrecision);
    }
    return value[$toStringAsFixed](1);
  };
  dart.defineLazy(src__foundation__debug, {
    /*src__foundation__debug.debugInstrumentationEnabled*/get debugInstrumentationEnabled() {
      return false;
    },
    set debugInstrumentationEnabled(_) {},
    /*src__foundation__debug.timelineWhitelistArguments*/get timelineWhitelistArguments() {
      return dart.constMap(core.String, core.String, ["mode", "basic"]);
    },
    /*src__foundation__debug.debugDoublePrecision*/get debugDoublePrecision() {
      return null;
    },
    set debugDoublePrecision(_) {}
  });
  const _exception = dart.privateName(src__foundation__diagnostics, "_exception");
  const _description = dart.privateName(src__foundation__diagnostics, "_description");
  const _valueComputed = dart.privateName(src__foundation__diagnostics, "_valueComputed");
  const _value = dart.privateName(src__foundation__diagnostics, "_value");
  const _computeValue = dart.privateName(src__foundation__diagnostics, "_computeValue");
  const _defaultLevel = dart.privateName(src__foundation__diagnostics, "_defaultLevel");
  const _addTooltip = dart.privateName(src__foundation__diagnostics, "_addTooltip");
  const _maybeCacheValue = dart.privateName(src__foundation__diagnostics, "_maybeCacheValue");
  let const$;
  let const$0;
  const _separator = dart.privateName(src__foundation__diagnostics, "_separator");
  let const$1;
  src__foundation__diagnostics.DiagnosticsNode = class DiagnosticsNode extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get showSeparator() {
      return this[showSeparator$];
    }
    set showSeparator(value) {
      super.showSeparator = value;
    }
    get showName() {
      return this[showName$];
    }
    set showName(value) {
      super.showName = value;
    }
    get linePrefix() {
      return this[linePrefix$];
    }
    set linePrefix(value) {
      super.linePrefix = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    static message(message, opts) {
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1435, 12, "|| !name.ends");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1436, 12, "      'Names ");
      return new (DiagnosticsPropertyOfvoid()).new("", null, {description: message, style: style, showName: false, allowWrap: allowWrap, level: level});
    }
    isFiltered(minLevel) {
      return dart.test(src__foundation__constants.kReleaseMode) || dart.notNull(this.level.index) < dart.notNull(minLevel.index);
    }
    get level() {
      return dart.test(src__foundation__constants.kReleaseMode) ? src__foundation__diagnostics.DiagnosticLevel.hidden : src__foundation__diagnostics.DiagnosticLevel.info;
    }
    get emptyBodyDescription() {
      return null;
    }
    get allowWrap() {
      return false;
    }
    get allowNameWrap() {
      return false;
    }
    get allowTruncate() {
      return false;
    }
    get [_separator]() {
      return dart.test(this.showSeparator) ? ":" : "";
    }
    toJsonMap(delegate) {
      let t3;
      if (dart.test(src__foundation__constants.kReleaseMode)) {
        return new (IdentityMapOfString$Object()).new();
      }
      let hasChildren = this.getChildren()[$isNotEmpty];
      return (() => {
        let t2 = new (IdentityMapOfString$Object()).new();
        t2[$_set]("description", this.toDescription());
        t2[$_set]("type", dart.toString(this[$runtimeType]));
        if (this.name != null) t2[$_set]("name", this.name);
        if (!dart.test(this.showSeparator)) t2[$_set]("showSeparator", this.showSeparator);
        if (!dart.equals(this.level, src__foundation__diagnostics.DiagnosticLevel.info)) t2[$_set]("level", src__foundation__diagnostics.describeEnum(this.level));
        if (dart.equals(this.showName, false)) t2[$_set]("showName", this.showName);
        if (this.emptyBodyDescription != null) t2[$_set]("emptyBodyDescription", this.emptyBodyDescription);
        if (!dart.equals(this.style, src__foundation__diagnostics.DiagnosticsTreeStyle.sparse)) t2[$_set]("style", src__foundation__diagnostics.describeEnum(this.style));
        if (dart.test(this.allowTruncate)) t2[$_set]("allowTruncate", this.allowTruncate);
        if (dart.test(hasChildren)) t2[$_set]("hasChildren", hasChildren);
        if (dart.equals((t3 = this.linePrefix, t3 == null ? null : t3[$isNotEmpty]), true)) t2[$_set]("linePrefix", this.linePrefix);
        if (!dart.test(this.allowWrap)) t2[$_set]("allowWrap", this.allowWrap);
        if (dart.test(this.allowNameWrap)) t2[$_set]("allowNameWrap", this.allowNameWrap);
        for (let t3$ of delegate.additionalNodeProperties(this)[$entries])
          t2[$_set](t3$.key, t3$.value);
        if (dart.test(delegate.includeProperties)) t2[$_set]("properties", src__foundation__diagnostics.DiagnosticsNode.toJsonList(delegate.filterProperties(this.getProperties(), this), this, delegate));
        if (dart.notNull(delegate.subtreeDepth) > 0) t2[$_set]("children", src__foundation__diagnostics.DiagnosticsNode.toJsonList(delegate.filterChildren(this.getChildren(), this), this, delegate));
        return t2;
      })();
    }
    static toJsonList(nodes, parent, delegate) {
      let truncated = false;
      if (nodes == null) return const$1 || (const$1 = dart.constList([], MapOfString$Object()));
      let originalNodeCount = nodes[$length];
      nodes = delegate.truncateNodesList(nodes, parent);
      if (nodes[$length] != originalNodeCount) {
        nodes[$add](src__foundation__diagnostics.DiagnosticsNode.message("..."));
        truncated = true;
      }
      let json = nodes[$map](MapOfString$Object(), dart.fn(node => node.toJsonMap(delegate.delegateForNode(node)), DiagnosticsNodeToMapOfString$Object()))[$toList]();
      if (truncated) json[$last][$_set]("truncated", true);
      return json;
    }
    toString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.info;
      if (dart.test(src__foundation__constants.kReleaseMode)) {
        return super[$toString]();
      }
      if (!(this.style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1631, 12, "\n\n  /// Retur");
      if (!(minLevel != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1632, 12, "presentation of ");
      if (dart.test(src__foundation__diagnostics._isSingleLine(this.style))) return this.toStringDeep({parentConfiguration: parentConfiguration, minLevel: minLevel});
      let description = this.toDescription({parentConfiguration: parentConfiguration});
      if (this.name == null || this.name[$isEmpty] || !dart.test(this.showName)) return description;
      return description[$contains]("\n") ? dart.str(this.name) + dart.str(this[_separator]) + "\n" + dart.str(description) : dart.str(this.name) + dart.str(this[_separator]) + " " + dart.str(description);
    }
    get textTreeConfiguration() {
      if (!(this.style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1649, 12, "super.toStrin");
      switch (this.style) {
        case src__foundation__diagnostics.DiagnosticsTreeStyle.none:
        {
          return null;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.dense:
        {
          return src__foundation__diagnostics.denseTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.sparse:
        {
          return src__foundation__diagnostics.sparseTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.offstage:
        {
          return src__foundation__diagnostics.dashedTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace:
        {
          return src__foundation__diagnostics.whitespaceTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.transition:
        {
          return src__foundation__diagnostics.transitionTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine:
        {
          return src__foundation__diagnostics.singleLineTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty:
        {
          return src__foundation__diagnostics.errorPropertyTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.shallow:
        {
          return src__foundation__diagnostics.shallowTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.error:
        {
          return src__foundation__diagnostics.errorTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.truncateChildren:
        {
          return src__foundation__diagnostics.whitespaceTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.flat:
        {
          return src__foundation__diagnostics.flatTextConfiguration;
        }
      }
      return null;
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      if (dart.test(src__foundation__constants.kReleaseMode)) {
        return "";
      }
      return new src__foundation__diagnostics.TextTreeRenderer.new({minLevel: minLevel, wrapWidth: 65, wrapWidthProperties: 65}).render(this, {prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, parentConfiguration: parentConfiguration});
    }
  };
  (src__foundation__diagnostics.DiagnosticsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    this[name$] = name;
    this[style$] = style;
    this[showName$] = showName;
    this[showSeparator$] = showSeparator;
    this[linePrefix$] = linePrefix;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1408, 15, "quality\n/// mult");
    if (!(showSeparator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1409, 15, "p via [toStringDeep].");
    if (!(name == null || !name[$endsWith](":"))) dart.assertFailed("Names of diagnostic nodes must not end with colons.\n" + "name:\n" + "  \"" + dart.str(name) + "\"", "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1414, 10, "d format output.\n///\n/// In release");
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticsNode.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsNode);
  const name$ = Symbol("DiagnosticsNode.name");
  const showSeparator$ = Symbol("DiagnosticsNode.showSeparator");
  const showName$ = Symbol("DiagnosticsNode.showName");
  const linePrefix$ = Symbol("DiagnosticsNode.linePrefix");
  const style$ = Symbol("DiagnosticsNode.style");
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    isFiltered: dart.fnType(core.bool, [src__foundation__diagnostics.DiagnosticLevel]),
    toJsonMap: dart.fnType(core.Map$(core.String, core.Object), [src__foundation__diagnostics.DiagnosticsSerializationDelegate]),
    toString: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel, parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
    [$toString]: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel, parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel, parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration, prefixLineOne: core.String, prefixOtherLines: core.String})
  }));
  dart.setGetterSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    level: src__foundation__diagnostics.DiagnosticLevel,
    emptyBodyDescription: core.String,
    allowWrap: core.bool,
    allowNameWrap: core.bool,
    allowTruncate: core.bool,
    [_separator]: core.String,
    textTreeConfiguration: src__foundation__diagnostics.TextTreeConfiguration
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticsNode, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    name: dart.finalFieldType(core.String),
    showSeparator: dart.finalFieldType(core.bool),
    showName: dart.finalFieldType(core.bool),
    linePrefix: dart.finalFieldType(core.String),
    style: dart.finalFieldType(src__foundation__diagnostics.DiagnosticsTreeStyle)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticsNode, ['toString']);
  const _is_DiagnosticsProperty_default = Symbol('_is_DiagnosticsProperty_default');
  src__foundation__diagnostics.DiagnosticsProperty$ = dart.generic(T => {
    class DiagnosticsProperty extends src__foundation__diagnostics.DiagnosticsNode {
      get expandableValue() {
        return this[expandableValue$];
      }
      set expandableValue(value) {
        super.expandableValue = value;
      }
      get allowWrap() {
        return this[allowWrap$];
      }
      set allowWrap(value) {
        super.allowWrap = value;
      }
      get allowNameWrap() {
        return this[allowNameWrap$];
      }
      set allowNameWrap(value) {
        super.allowNameWrap = value;
      }
      get ifNull() {
        return this[ifNull$];
      }
      set ifNull(value) {
        super.ifNull = value;
      }
      get ifEmpty() {
        return this[ifEmpty$];
      }
      set ifEmpty(value) {
        super.ifEmpty = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get missingIfNull() {
        return this[missingIfNull$];
      }
      set missingIfNull(value) {
        super.missingIfNull = value;
      }
      get defaultValue() {
        return this[defaultValue$];
      }
      set defaultValue(value) {
        super.defaultValue = value;
      }
      toJsonMap(delegate) {
        let v = this.value;
        let properties = null;
        if (dart.test(delegate.expandPropertyValues) && dart.test(delegate.includeProperties) && src__foundation__diagnostics.Diagnosticable.is(v) && dart.test(this.getProperties()[$isEmpty])) {
          delegate = delegate.copyWith({subtreeDepth: 0, includeProperties: false});
          properties = src__foundation__diagnostics.DiagnosticsNode.toJsonList(delegate.filterProperties(v.toDiagnosticsNode().getProperties(), this), this, delegate);
        }
        let json = super.toJsonMap(delegate);
        if (properties != null) {
          json[$_set]("properties", properties);
        }
        if (!dart.equals(this.defaultValue, src__foundation__diagnostics.kNoDefaultValue)) json[$_set]("defaultValue", dart.toString(this.defaultValue));
        if (this.ifEmpty != null) json[$_set]("ifEmpty", this.ifEmpty);
        if (this.ifNull != null) json[$_set]("ifNull", this.ifNull);
        if (this.tooltip != null) json[$_set]("tooltip", this.tooltip);
        json[$_set]("missingIfNull", this.missingIfNull);
        if (this.exception != null) json[$_set]("exception", dart.toString(this.exception));
        json[$_set]("propertyType", dart.toString(this.propertyType));
        json[$_set]("defaultLevel", src__foundation__diagnostics.describeEnum(this[_defaultLevel]));
        if (src__foundation__diagnostics.Diagnosticable.is(this.value) || src__foundation__diagnostics.DiagnosticsNode.is(this.value)) json[$_set]("isDiagnosticableValue", true);
        if (typeof this.value == 'number' || typeof this.value == 'string' || typeof this.value == 'boolean' || this.value == null) json[$_set]("value", this.value);
        return json;
      }
      valueToString(opts) {
        let t1;
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        let v = this.value;
        t1 = src__foundation__diagnostics.DiagnosticableTree.is(v) ? v.toStringShort() : dart.toString(v);
        return t1 == null ? "" : t1;
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this[_description] != null) return this[_addTooltip](this[_description]);
        if (this.exception != null) return "EXCEPTION (" + dart.str(dart.runtimeType(this.exception)) + ")";
        if (this.ifNull != null && this.value == null) return this[_addTooltip](this.ifNull);
        let result = this.valueToString({parentConfiguration: parentConfiguration});
        if (result[$isEmpty] && this.ifEmpty != null) result = this.ifEmpty;
        return this[_addTooltip](result);
      }
      [_addTooltip](text) {
        if (!(text != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2618, 12, "tion parentC");
        return this.tooltip == null ? text : dart.str(text) + " (" + dart.str(this.tooltip) + ")";
      }
      get propertyType() {
        return dart.wrapType(T);
      }
      get value() {
        this[_maybeCacheValue]();
        return this[_value];
      }
      get exception() {
        this[_maybeCacheValue]();
        return this[_exception];
      }
      [_maybeCacheValue]() {
        if (dart.test(this[_valueComputed])) return;
        this[_valueComputed] = true;
        if (!(this[_computeValue] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2688, 12, "llback],\n  /// [value");
        try {
          this[_value] = this[_computeValue]();
        } catch (e) {
          let exception = dart.getThrown(e);
          this[_exception] = exception;
          this[_value] = null;
        }
      }
      get level() {
        if (dart.equals(this[_defaultLevel], src__foundation__diagnostics.DiagnosticLevel.hidden)) return this[_defaultLevel];
        if (this.exception != null) return src__foundation__diagnostics.DiagnosticLevel.error;
        if (this.value == null && dart.test(this.missingIfNull)) return src__foundation__diagnostics.DiagnosticLevel.warning;
        if (!dart.equals(this.defaultValue, src__foundation__diagnostics.kNoDefaultValue) && dart.equals(this.value, this.defaultValue)) return src__foundation__diagnostics.DiagnosticLevel.fine;
        return this[_defaultLevel];
      }
      getProperties() {
        if (dart.test(this.expandableValue)) {
          let object = this.value;
          if (src__foundation__diagnostics.DiagnosticsNode.is(object)) {
            return object.getProperties();
          }
          if (src__foundation__diagnostics.Diagnosticable.is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getProperties();
          }
        }
        return const$ || (const$ = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
      getChildren() {
        if (dart.test(this.expandableValue)) {
          let object = this.value;
          if (src__foundation__diagnostics.DiagnosticsNode.is(object)) {
            return object.getChildren();
          }
          if (src__foundation__diagnostics.Diagnosticable.is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getChildren();
          }
        }
        return const$0 || (const$0 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
    }
    (DiagnosticsProperty.new = function(name, value, opts) {
      let t1;
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2460, 15, "perty causes it ");
      if (!(showSeparator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2461, 15, "r higher\n  /// level.");
      if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2462, 15, "the property ");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2463, 15, " [missingIfNu");
      this[_description] = description;
      this[_valueComputed] = true;
      this[_value] = value;
      this[_computeValue] = null;
      this[ifNull$] = (t1 = ifNull, t1 == null ? dart.test(missingIfNull) ? "MISSING" : null : t1);
      this[_defaultLevel] = level;
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style, linePrefix: linePrefix});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    (DiagnosticsProperty.lazy = function(name, computeValue, opts) {
      let t1;
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2506, 15, "s it to have a l");
      if (!(showSeparator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2507, 15, "/// level. For exampl");
      if (!(dart.equals(defaultValue, src__foundation__diagnostics.kNoDefaultValue) || T.is(defaultValue))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2508, 15, "mputeValue` throws an exception, [level]\n  /// will ");
      if (!(missingIfNull != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2509, 15, "agnosticLevel.error].");
      if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2510, 15, "perty.lazy(\n ");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2511, 15, "   ComputePro");
      this[_description] = description;
      this[_valueComputed] = false;
      this[_value] = null;
      this[_computeValue] = computeValue;
      this[_defaultLevel] = level;
      this[ifNull$] = (t1 = ifNull, t1 == null ? dart.test(missingIfNull) ? "MISSING" : null : t1);
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    dart.addTypeTests(DiagnosticsProperty);
    DiagnosticsProperty.prototype[_is_DiagnosticsProperty_default] = true;
    const expandableValue$ = Symbol("DiagnosticsProperty.expandableValue");
    const allowWrap$ = Symbol("DiagnosticsProperty.allowWrap");
    const allowNameWrap$ = Symbol("DiagnosticsProperty.allowNameWrap");
    const ifNull$ = Symbol("DiagnosticsProperty.ifNull");
    const ifEmpty$ = Symbol("DiagnosticsProperty.ifEmpty");
    const tooltip$ = Symbol("DiagnosticsProperty.tooltip");
    const missingIfNull$ = Symbol("DiagnosticsProperty.missingIfNull");
    const defaultValue$ = Symbol("DiagnosticsProperty.defaultValue");
    dart.setMethodSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getMethods(DiagnosticsProperty.__proto__),
      valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
      [_addTooltip]: dart.fnType(core.String, [core.String]),
      [_maybeCacheValue]: dart.fnType(dart.void, []),
      getProperties: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [])
    }));
    dart.setGetterSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getGetters(DiagnosticsProperty.__proto__),
      propertyType: core.Type,
      value: T,
      exception: core.Object
    }));
    dart.setLibraryUri(DiagnosticsProperty, "package:flutter_web/src/foundation/diagnostics.dart");
    dart.setFieldSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getFields(DiagnosticsProperty.__proto__),
      [_description]: dart.finalFieldType(core.String),
      expandableValue: dart.finalFieldType(core.bool),
      allowWrap: dart.finalFieldType(core.bool),
      allowNameWrap: dart.finalFieldType(core.bool),
      ifNull: dart.finalFieldType(core.String),
      ifEmpty: dart.finalFieldType(core.String),
      tooltip: dart.finalFieldType(core.String),
      missingIfNull: dart.finalFieldType(core.bool),
      [_value]: dart.fieldType(T),
      [_valueComputed]: dart.fieldType(core.bool),
      [_exception]: dart.fieldType(core.Object),
      defaultValue: dart.finalFieldType(core.Object),
      [_defaultLevel]: dart.finalFieldType(src__foundation__diagnostics.DiagnosticLevel),
      [_computeValue]: dart.finalFieldType(dart.fnType(T, []))
    }));
    return DiagnosticsProperty;
  });
  src__foundation__diagnostics.DiagnosticsProperty = src__foundation__diagnostics.DiagnosticsProperty$();
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsProperty, _is_DiagnosticsProperty_default);
  src__foundation__assertions._ErrorDiagnostic = class _ErrorDiagnostic extends src__foundation__diagnostics.DiagnosticsProperty$(core.List$(core.Object)) {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this.value[$join]("");
    }
  };
  (src__foundation__assertions._ErrorDiagnostic.new = function(message, opts) {
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.flat;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(message != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 31, 17, "message != null");
    src__foundation__assertions._ErrorDiagnostic.__proto__.new.call(this, null, JSArrayOfObject().of([message]), {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
    ;
  }).prototype = src__foundation__assertions._ErrorDiagnostic.prototype;
  (src__foundation__assertions._ErrorDiagnostic._fromParts = function(messageParts, opts) {
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.flat;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(messageParts != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 71, 15, "messageParts != null");
    src__foundation__assertions._ErrorDiagnostic.__proto__.new.call(this, null, messageParts, {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
    ;
  }).prototype = src__foundation__assertions._ErrorDiagnostic.prototype;
  dart.addTypeTests(src__foundation__assertions._ErrorDiagnostic);
  dart.setLibraryUri(src__foundation__assertions._ErrorDiagnostic, "package:flutter_web/src/foundation/assertions.dart");
  src__foundation__assertions.ErrorDescription = class ErrorDescription extends src__foundation__assertions._ErrorDiagnostic {};
  (src__foundation__assertions.ErrorDescription.new = function(message) {
    src__foundation__assertions.ErrorDescription.__proto__.new.call(this, message, {level: src__foundation__diagnostics.DiagnosticLevel.info});
    ;
  }).prototype = src__foundation__assertions.ErrorDescription.prototype;
  (src__foundation__assertions.ErrorDescription._fromParts = function(messageParts) {
    src__foundation__assertions.ErrorDescription.__proto__._fromParts.call(this, messageParts, {level: src__foundation__diagnostics.DiagnosticLevel.info});
    ;
  }).prototype = src__foundation__assertions.ErrorDescription.prototype;
  dart.addTypeTests(src__foundation__assertions.ErrorDescription);
  dart.setLibraryUri(src__foundation__assertions.ErrorDescription, "package:flutter_web/src/foundation/assertions.dart");
  src__foundation__assertions.ErrorSummary = class ErrorSummary extends src__foundation__assertions._ErrorDiagnostic {};
  (src__foundation__assertions.ErrorSummary.new = function(message) {
    src__foundation__assertions.ErrorSummary.__proto__.new.call(this, message, {level: src__foundation__diagnostics.DiagnosticLevel.summary});
    ;
  }).prototype = src__foundation__assertions.ErrorSummary.prototype;
  (src__foundation__assertions.ErrorSummary._fromParts = function(messageParts) {
    src__foundation__assertions.ErrorSummary.__proto__._fromParts.call(this, messageParts, {level: src__foundation__diagnostics.DiagnosticLevel.summary});
    ;
  }).prototype = src__foundation__assertions.ErrorSummary.prototype;
  dart.addTypeTests(src__foundation__assertions.ErrorSummary);
  dart.setLibraryUri(src__foundation__assertions.ErrorSummary, "package:flutter_web/src/foundation/assertions.dart");
  src__foundation__assertions.ErrorHint = class ErrorHint extends src__foundation__assertions._ErrorDiagnostic {};
  (src__foundation__assertions.ErrorHint.new = function(message) {
    src__foundation__assertions.ErrorHint.__proto__.new.call(this, message, {level: src__foundation__diagnostics.DiagnosticLevel.hint});
    ;
  }).prototype = src__foundation__assertions.ErrorHint.prototype;
  (src__foundation__assertions.ErrorHint._fromParts = function(messageParts) {
    src__foundation__assertions.ErrorHint.__proto__._fromParts.call(this, messageParts, {level: src__foundation__diagnostics.DiagnosticLevel.hint});
    ;
  }).prototype = src__foundation__assertions.ErrorHint.prototype;
  dart.addTypeTests(src__foundation__assertions.ErrorHint);
  dart.setLibraryUri(src__foundation__assertions.ErrorHint, "package:flutter_web/src/foundation/assertions.dart");
  src__foundation__assertions.ErrorSpacer = class ErrorSpacer extends src__foundation__diagnostics.DiagnosticsProperty$(dart.void) {};
  (src__foundation__assertions.ErrorSpacer.new = function() {
    src__foundation__assertions.ErrorSpacer.__proto__.new.call(this, "", null, {description: "", showName: false});
    ;
  }).prototype = src__foundation__assertions.ErrorSpacer.prototype;
  dart.addTypeTests(src__foundation__assertions.ErrorSpacer);
  dart.setLibraryUri(src__foundation__assertions.ErrorSpacer, "package:flutter_web/src/foundation/assertions.dart");
  const _exceptionToDiagnosticable = dart.privateName(src__foundation__assertions, "_exceptionToDiagnosticable");
  src__foundation__diagnostics.DiagnosticableMixin = class DiagnosticableMixin extends core.Object {};
  src__foundation__diagnostics.DiagnosticableMixin[dart.mixinOn] = Object => {
    class DiagnosticableMixin extends Object {
      toStringShort() {
        return src__foundation__diagnostics.describeIdentity(this);
      }
      toString(opts) {
        let t4;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        let fullString = null;
        if (!dart.test(dart.fn(() => {
          fullString = this.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2988, 12, "    class already describes the children of a node properly or a node has\n///    no children.\n///  * [DiagnosticsProperty], which should b");
        t4 = fullString;
        return t4 == null ? this.toStringShort() : t4;
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new (DiagnosticableNodeOfDiagnosticable()).new({name: name, value: src__foundation__diagnostics.Diagnosticable._check(this), style: style});
      }
      debugFillProperties(properties) {
      }
    }
    dart.defineExtensionMethods(DiagnosticableMixin, ['toString']);
    return DiagnosticableMixin;
  };
  (src__foundation__diagnostics.DiagnosticableMixin[dart.mixinNew] = function() {
  }).prototype = src__foundation__diagnostics.DiagnosticableMixin.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableMixin);
  src__foundation__diagnostics.DiagnosticableMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticableMixin, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticableMixin.__proto__),
    toStringShort: dart.fnType(core.String, []),
    toString: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    [$toString]: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toDiagnosticsNode: dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [], {name: core.String, style: src__foundation__diagnostics.DiagnosticsTreeStyle}),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticableMixin, "package:flutter_web/src/foundation/diagnostics.dart");
  const Object_DiagnosticableMixin$ = class Object_DiagnosticableMixin extends core.Object {};
  (Object_DiagnosticableMixin$.new = function() {
  }).prototype = Object_DiagnosticableMixin$.prototype;
  dart.applyMixin(Object_DiagnosticableMixin$, src__foundation__diagnostics.DiagnosticableMixin);
  src__foundation__diagnostics.Diagnosticable = class Diagnosticable extends Object_DiagnosticableMixin$ {};
  (src__foundation__diagnostics.Diagnosticable.new = function() {
    ;
  }).prototype = src__foundation__diagnostics.Diagnosticable.prototype;
  dart.addTypeTests(src__foundation__diagnostics.Diagnosticable);
  dart.setLibraryUri(src__foundation__diagnostics.Diagnosticable, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__assertions.FlutterErrorDetails = class FlutterErrorDetails extends src__foundation__diagnostics.Diagnosticable {
    get exception() {
      return this[exception$];
    }
    set exception(value) {
      super.exception = value;
    }
    get stack() {
      return this[stack$];
    }
    set stack(value) {
      super.stack = value;
    }
    get library() {
      return this[library$];
    }
    set library(value) {
      super.library = value;
    }
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get stackFilter() {
      return this[stackFilter$];
    }
    set stackFilter(value) {
      super.stackFilter = value;
    }
    get informationCollector() {
      return this[informationCollector$];
    }
    set informationCollector(value) {
      super.informationCollector = value;
    }
    get silent() {
      return this[silent$];
    }
    set silent(value) {
      super.silent = value;
    }
    exceptionAsString() {
      let longMessage = null;
      if (core.AssertionError.is(this.exception)) {
        let message = dart.dload(this.exception, 'message');
        let fullMessage = dart.toString(this.exception);
        if (typeof message == 'string' && message != fullMessage) {
          if (fullMessage.length > message.length) {
            let position = fullMessage[$lastIndexOf](message);
            if (position === fullMessage.length - message.length && position > 2 && fullMessage[$substring](position - 2, position) === ": ") {
              let body = fullMessage[$substring](0, position - 2);
              let splitPoint = body[$indexOf](" Failed assertion:");
              if (splitPoint >= 0) {
                body = body[$substring](0, splitPoint) + "\n" + body[$substring](splitPoint + 1);
              }
              longMessage = message[$trimRight]() + "\n" + body;
            }
          }
        }
        longMessage == null ? longMessage = fullMessage : null;
      } else if (typeof this.exception == 'string') {
        longMessage = core.String._check(this.exception);
      } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
        longMessage = dart.toString(this.exception);
      } else {
        longMessage = "  " + dart.str(dart.toString(this.exception));
      }
      longMessage = longMessage[$trimRight]();
      if (longMessage[$isEmpty]) longMessage = "  <no message available>";
      return longMessage;
    }
    [_exceptionToDiagnosticable]() {
      if (src__foundation__assertions.FlutterError.is(this.exception)) {
        return src__foundation__diagnostics.Diagnosticable._check(this.exception);
      }
      if (core.AssertionError.is(this.exception) && src__foundation__assertions.FlutterError.is(dart.dload(this.exception, 'message'))) {
        return src__foundation__diagnostics.Diagnosticable._check(dart.dload(this.exception, 'message'));
      }
      return null;
    }
    get summary() {
      let t4;
      const formatException = () => {
        return this.exceptionAsString()[$split]("\n")[$_get](0)[$trimLeft]();
      };
      dart.fn(formatException, VoidToString());
      if (dart.test(src__foundation__constants.kReleaseMode)) {
        return src__foundation__diagnostics.DiagnosticsNode.message(formatException());
      }
      let diagnosticable = this[_exceptionToDiagnosticable]();
      let summary = null;
      if (diagnosticable != null) {
        let builder = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        summary = builder.properties[$firstWhere](dart.fn(node => dart.equals(node.level, src__foundation__diagnostics.DiagnosticLevel.summary), DiagnosticsNodeTobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }
      t4 = summary;
      return t4 == null ? new src__foundation__assertions.ErrorSummary.new(dart.str(formatException())) : t4;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let verb = new src__foundation__assertions.ErrorDescription.new("thrown" + dart.str(this.context != null ? new src__foundation__assertions.ErrorDescription.new(" " + dart.str(this.context)) : ""));
      let diagnosticable = this[_exceptionToDiagnosticable]();
      if (core.NullThrownError.is(this.exception)) {
        properties.add(new src__foundation__assertions.ErrorDescription.new("The null value was " + dart.str(verb) + "."));
      } else if (typeof this.exception == 'number') {
        properties.add(new src__foundation__assertions.ErrorDescription.new("The number " + dart.str(this.exception) + " was " + dart.str(verb) + "."));
      } else {
        let errorName = null;
        if (core.AssertionError.is(this.exception)) {
          errorName = new src__foundation__assertions.ErrorDescription.new("assertion");
        } else if (typeof this.exception == 'string') {
          errorName = new src__foundation__assertions.ErrorDescription.new("message");
        } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
          errorName = new src__foundation__assertions.ErrorDescription.new(dart.str(dart.runtimeType(this.exception)));
        } else {
          errorName = new src__foundation__assertions.ErrorDescription.new(dart.str(dart.runtimeType(this.exception)) + " object");
        }
        properties.add(new src__foundation__assertions.ErrorDescription.new("The following " + dart.str(errorName) + " was " + dart.str(verb) + ":"));
        if (diagnosticable != null) {
          diagnosticable.debugFillProperties(properties);
        } else {
          let prefix = dart.str(dart.runtimeType(this.exception)) + ": ";
          let message = this.exceptionAsString();
          if (message[$startsWith](prefix)) message = message[$substring](prefix.length);
          properties.add(new src__foundation__assertions.ErrorDescription.new(dart.str(message)));
        }
      }
      let stackLines = this.stack != null ? dart.toString(this.stack)[$trimRight]()[$split]("\n") : null;
      if (core.AssertionError.is(this.exception) && diagnosticable == null) {
        let ourFault = true;
        if (stackLines != null) {
          let stackList = stackLines[$take](2)[$toList]();
          if (dart.notNull(stackList[$length]) >= 2) {
            let throwPattern = core.RegExp.new("^#0 +_AssertionError._throwNew \\(dart:.+\\)$");
            let assertPattern = core.RegExp.new("^#1 +[^(]+ \\((.+?):([0-9]+)(?::[0-9]+)?\\)$");
            if (dart.test(throwPattern.hasMatch(stackList[$_get](0)))) {
              let assertMatch = assertPattern.firstMatch(stackList[$_get](1));
              if (assertMatch != null) {
                if (!(assertMatch.groupCount === 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 433, 22, "assertMatch.groupCount == 2");
                let ourLibraryPattern = core.RegExp.new("^package:flutter/");
                ourFault = ourLibraryPattern.hasMatch(assertMatch.group(1));
              }
            }
          }
        }
        if (dart.test(ourFault)) {
          properties.add(new src__foundation__assertions.ErrorSpacer.new());
          properties.add(new src__foundation__assertions.ErrorHint.new("Either the assertion indicates an error in the framework itself, or we should " + "provide substantially more information in this error message to help you determine " + "and fix the underlying cause.\n" + "In either case, please report this assertion by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md"));
        }
      }
      if (this.stack != null) {
        properties.add(new src__foundation__assertions.ErrorSpacer.new());
        properties.add(new src__foundation__assertions.DiagnosticsStackTrace.new("When the exception was thrown, this was the stack", this.stack, {stackFilter: this.stackFilter}));
      }
      if (this.informationCollector != null) {
        properties.add(new src__foundation__assertions.ErrorSpacer.new());
        this.informationCollector()[$forEach](dart.bind(properties, 'add'));
      }
    }
    toStringShort() {
      return this.library != null ? "Exception caught by " + dart.str(this.library) : "Exception caught";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      return this.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.error}).toStringDeep({minLevel: minLevel});
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new src__foundation__assertions._FlutterErrorDetailsNode.new({name: name, value: this, style: style});
    }
  };
  (src__foundation__assertions.FlutterErrorDetails.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : "Flutter framework";
    let context = opts && 'context' in opts ? opts.context : null;
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[exception$] = exception;
    this[stack$] = stack;
    this[library$] = library;
    this[context$] = context;
    this[stackFilter$] = stackFilter;
    this[informationCollector$] = informationCollector;
    this[silent$] = silent;
    src__foundation__assertions.FlutterErrorDetails.__proto__.new.call(this);
    ;
  }).prototype = src__foundation__assertions.FlutterErrorDetails.prototype;
  dart.addTypeTests(src__foundation__assertions.FlutterErrorDetails);
  const exception$ = Symbol("FlutterErrorDetails.exception");
  const stack$ = Symbol("FlutterErrorDetails.stack");
  const library$ = Symbol("FlutterErrorDetails.library");
  const context$ = Symbol("FlutterErrorDetails.context");
  const stackFilter$ = Symbol("FlutterErrorDetails.stackFilter");
  const informationCollector$ = Symbol("FlutterErrorDetails.informationCollector");
  const silent$ = Symbol("FlutterErrorDetails.silent");
  dart.setMethodSignature(src__foundation__assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getMethods(src__foundation__assertions.FlutterErrorDetails.__proto__),
    exceptionAsString: dart.fnType(core.String, []),
    [_exceptionToDiagnosticable]: dart.fnType(src__foundation__diagnostics.Diagnosticable, [])
  }));
  dart.setGetterSignature(src__foundation__assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getGetters(src__foundation__assertions.FlutterErrorDetails.__proto__),
    summary: src__foundation__diagnostics.DiagnosticsNode
  }));
  dart.setLibraryUri(src__foundation__assertions.FlutterErrorDetails, "package:flutter_web/src/foundation/assertions.dart");
  dart.setFieldSignature(src__foundation__assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getFields(src__foundation__assertions.FlutterErrorDetails.__proto__),
    exception: dart.finalFieldType(dart.dynamic),
    stack: dart.finalFieldType(core.StackTrace),
    library: dart.finalFieldType(core.String),
    context: dart.finalFieldType(src__foundation__diagnostics.DiagnosticsNode),
    stackFilter: dart.finalFieldType(dart.fnType(core.Iterable$(core.String), [core.Iterable$(core.String)])),
    informationCollector: dart.finalFieldType(dart.fnType(core.Iterable$(src__foundation__diagnostics.DiagnosticsNode), [])),
    silent: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__foundation__assertions.FlutterErrorDetails, ['toString']);
  dart.defineLazy(src__foundation__assertions.FlutterErrorDetails, {
    /*src__foundation__assertions.FlutterErrorDetails.propertiesTransformers*/get propertiesTransformers() {
      return JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode().of([]);
    }
  });
  let const$2;
  let const$3;
  let const$4;
  src__foundation__diagnostics.DiagnosticableTreeMixin = class DiagnosticableTreeMixin extends core.Object {};
  src__foundation__diagnostics.DiagnosticableTreeMixin[dart.mixinOn] = Object => {
    class DiagnosticableTreeMixin extends Object {
      toString(opts) {
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        return this.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
      }
      toStringShallow(opts) {
        let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        if (dart.test(src__foundation__constants.kReleaseMode)) {
          return this.toString();
        }
        let result = new core.StringBuffer.new();
        result.write(this.toStringShort());
        result.write(joiner);
        let builder = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$join](joiner));
        return result.toString();
      }
      toStringDeep(opts) {
        let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
        let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
      }
      toStringShort() {
        return src__foundation__diagnostics.describeIdentity(this);
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new src__foundation__diagnostics.DiagnosticableTreeNode.new({name: name, value: this, style: style});
      }
      debugDescribeChildren() {
        return const$4 || (const$4 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
      debugFillProperties(properties) {
      }
    }
    dart.defineExtensionMethods(DiagnosticableTreeMixin, ['toString']);
    return DiagnosticableTreeMixin;
  };
  (src__foundation__diagnostics.DiagnosticableTreeMixin[dart.mixinNew] = function() {
  }).prototype = src__foundation__diagnostics.DiagnosticableTreeMixin.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableTreeMixin);
  src__foundation__diagnostics.DiagnosticableTreeMixin[dart.implements] = () => [src__foundation__diagnostics.DiagnosticableTree, core.Object];
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticableTreeMixin, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticableTreeMixin.__proto__),
    toString: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    [$toString]: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: core.String}),
    toStringShort: dart.fnType(core.String, []),
    toDiagnosticsNode: dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [], {name: core.String, style: src__foundation__diagnostics.DiagnosticsTreeStyle}),
    debugDescribeChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticableTreeMixin, "package:flutter_web/src/foundation/diagnostics.dart");
  const Error_DiagnosticableTreeMixin$ = class Error_DiagnosticableTreeMixin extends core.Error {};
  (Error_DiagnosticableTreeMixin$.new = function() {
    Error_DiagnosticableTreeMixin$.__proto__.new.call(this);
  }).prototype = Error_DiagnosticableTreeMixin$.prototype;
  dart.applyMixin(Error_DiagnosticableTreeMixin$, src__foundation__diagnostics.DiagnosticableTreeMixin);
  src__foundation__assertions.FlutterError = class FlutterError extends Error_DiagnosticableTreeMixin$ {
    get diagnostics() {
      return this[diagnostics$];
    }
    set diagnostics(value) {
      super.diagnostics = value;
    }
    static new(message) {
      let lines = message[$split]("\n");
      return new src__foundation__assertions.FlutterError.fromParts((() => {
        let t4 = JSArrayOfDiagnosticsNode().of([]);
        t4[$add](new src__foundation__assertions.ErrorSummary.new(lines[$first]));
        for (let t5 of lines[$skip](1)[$map](src__foundation__diagnostics.DiagnosticsNode, dart.fn(line => new src__foundation__assertions.ErrorDescription.new(line), StringToErrorDescription())))
          t4[$add](t5);
        return t4;
      })());
    }
    get message() {
      return this.toString();
    }
    static resetErrorCount() {
      src__foundation__assertions.FlutterError._errorCount = 0;
    }
    static dumpErrorToConsole(details, opts) {
      let forceReport = opts && 'forceReport' in opts ? opts.forceReport : false;
      if (!(details != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 632, 12, "details != null");
      if (!(details.exception != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 633, 12, "details.exception != null");
      let reportError = !dart.equals(details.silent, true);
      if (!dart.test(dart.fn(() => {
        reportError = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 635, 12, "() {\n      // In checked mode, we ignore the \"silent\" flag.\n      reportError = true;\n      return true;\n    }()");
      if (!reportError && !dart.test(forceReport)) return;
      if (src__foundation__assertions.FlutterError._errorCount === 0 || dart.test(forceReport)) {
        src__foundation__print.debugPrint(new src__foundation__diagnostics.TextTreeRenderer.new({wrapWidth: src__foundation__assertions.FlutterError.wrapWidth, wrapWidthProperties: src__foundation__assertions.FlutterError.wrapWidth, maxDescendentsTruncatableNode: 5}).render(details.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.error}))[$trimRight]());
      } else {
        src__foundation__print.debugPrint("Another exception was thrown: " + dart.str(details.summary));
      }
      src__foundation__assertions.FlutterError._errorCount = dart.notNull(src__foundation__assertions.FlutterError._errorCount) + 1;
    }
    static defaultStackFilter(frames) {
      let t6;
      let filteredPackages = const$2 || (const$2 = dart.constList(["dart:async-patch", "dart:async", "package:stack_trace"], core.String));
      let filteredClasses = const$3 || (const$3 = dart.constList(["_AssertionError", "_FakeAsync", "_FrameCallbackEntry"], core.String));
      let stackParser = core.RegExp.new("^#[0-9]+ +([^.]+).* \\(([^/\\\\]*)[/\\\\].+:[0-9]+(?::[0-9]+)?\\)$");
      let packageParser = core.RegExp.new("^([^:]+):(.+)$");
      let result = JSArrayOfString().of([]);
      let skipped = JSArrayOfString().of([]);
      for (let line of frames) {
        let match = stackParser.firstMatch(line);
        if (match != null) {
          if (!(match.groupCount === 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 685, 16, "match.groupCount == 2");
          if (dart.test(filteredPackages[$contains](match.group(2)))) {
            let packageMatch = packageParser.firstMatch(match.group(2));
            if (packageMatch != null && packageMatch.group(1) === "package") {
              skipped[$add]("package " + dart.str(packageMatch.group(2)));
            } else {
              skipped[$add]("package " + dart.str(match.group(2)));
            }
            continue;
          }
          if (dart.test(filteredClasses[$contains](match.group(1)))) {
            skipped[$add]("class " + dart.str(match.group(1)));
            continue;
          }
        }
        result[$add](line);
      }
      if (skipped[$length] === 1) {
        result[$add]("(elided one frame from " + dart.str(skipped[$single]) + ")");
      } else if (dart.notNull(skipped[$length]) > 1) {
        let where = (t6 = LinkedHashSetOfString().from(skipped)[$toList](), t6[$sort](), t6);
        if (dart.notNull(where[$length]) > 1) where[$_set](dart.notNull(where[$length]) - 1, "and " + dart.str(where[$last]));
        if (dart.notNull(where[$length]) > 2) {
          result[$add]("(elided " + dart.str(skipped[$length]) + " frames from " + dart.str(where[$join](", ")) + ")");
        } else {
          result[$add]("(elided " + dart.str(skipped[$length]) + " frames from " + dart.str(where[$join](" ")) + ")");
        }
      }
      return result;
    }
    debugFillProperties(properties) {
      let t6;
      t6 = this.diagnostics;
      t6 == null ? null : t6[$forEach](dart.bind(properties, 'add'));
    }
    toStringShort() {
      return "FlutterError";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      let renderer = new src__foundation__diagnostics.TextTreeRenderer.new({wrapWidth: 4000000000});
      return this.diagnostics[$map](core.String, dart.fn(node => renderer.render(node)[$trimRight](), DiagnosticsNodeToString()))[$join]("\n");
    }
    static reportError(details) {
      if (!(details != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 734, 12, "details != null");
      if (!(details.exception != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 735, 12, "details.exception != null");
      if (src__foundation__assertions.FlutterError.onError != null) src__foundation__assertions.FlutterError.onError(details);
    }
  };
  (src__foundation__assertions.FlutterError.fromParts = function(diagnostics) {
    this[diagnostics$] = diagnostics;
    if (!dart.test(diagnostics[$isNotEmpty])) dart.assertFailed(new src__foundation__assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new src__foundation__assertions.ErrorSummary.new("Empty FlutterError")])), "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 523, 53, "diagnostics.isNotEmpty");
    src__foundation__assertions.FlutterError.__proto__.new.call(this);
    if (!dart.equals(this.diagnostics[$first].level, src__foundation__diagnostics.DiagnosticLevel.summary)) dart.assertFailed(new src__foundation__assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new src__foundation__assertions.ErrorSummary.new("FlutterError is missing a summary."), new src__foundation__assertions.ErrorDescription.new("All FlutterError objects should start with a short (one line) " + "summary description of the problem that was detected."), new (DiagnosticsPropertyOfFlutterError()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace}), new src__foundation__assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md")])), "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 525, 7, "diagnostics.first.level == DiagnosticLevel.summary");
    if (!dart.test(dart.fn(() => {
      let summaries = this.diagnostics[$where](dart.fn(node => dart.equals(node.level, src__foundation__diagnostics.DiagnosticLevel.summary), DiagnosticsNodeTobool()));
      if (dart.notNull(summaries[$length]) > 1) {
        let message = JSArrayOfDiagnosticsNode().of([new src__foundation__assertions.ErrorSummary.new("FlutterError contained multiple error summaries."), new src__foundation__assertions.ErrorDescription.new("All FlutterError objects should have only a single short " + "(one line) summary description of the problem that was " + "detected.")]);
        message[$add](new (DiagnosticsPropertyOfFlutterError()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace}));
        message[$add](new src__foundation__assertions.ErrorDescription.new("\nThe malformed error has " + dart.str(summaries[$length]) + " summaries."));
        let i = 1;
        for (let summary of summaries) {
          message[$add](new (DiagnosticsPropertyOfDiagnosticsNode()).new("Summary " + dart.str(i), summary, {expandableValue: true}));
          i = i + 1;
        }
        message[$add](new src__foundation__assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md"));
        dart.throw(new src__foundation__assertions.FlutterError.fromParts(message));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart", 541, 12, "() {\n      final Iterable<DiagnosticsNode> summaries = diagnostics.where((DiagnosticsNode node) => node.level == DiagnosticLevel.summary);\n      if (summaries.length > 1) {\n        final List<DiagnosticsNode> message = <DiagnosticsNode>[\n          ErrorSummary('FlutterError contained multiple error summaries.'),\n          ErrorDescription(\n            'All FlutterError objects should have only a single short '\n            '(one line) summary description of the problem that was '\n            'detected.'\n          ),\n        ];\n        message.add(DiagnosticsProperty<FlutterError>('Malformed', this, expandableValue: true, showSeparator: false, style: DiagnosticsTreeStyle.whitespace));\n        message.add(ErrorDescription('\\nThe malformed error has ${summaries.length} summaries.'));\n        int i = 1;\n        for (DiagnosticsNode summary in summaries) {\n          message.add(DiagnosticsProperty<DiagnosticsNode>('Summary $i', summary, expandableValue : true));\n          i += 1;\n        }\n        message.add(ErrorDescription(\n          '\\nThis error should still help you solve your problem, '\n          'however please also report this malformed error in the '\n          'framework by filing a bug on GitHub:\\n'\n          '  https://github.com/flutter/flutter/issues/new?template=BUG.md'\n        ));\n        throw FlutterError.fromParts(message);\n      }\n      return true;\n    }()");
  }).prototype = src__foundation__assertions.FlutterError.prototype;
  dart.addTypeTests(src__foundation__assertions.FlutterError);
  const diagnostics$ = Symbol("FlutterError.diagnostics");
  src__foundation__assertions.FlutterError[dart.implements] = () => [core.AssertionError];
  dart.setGetterSignature(src__foundation__assertions.FlutterError, () => ({
    __proto__: dart.getGetters(src__foundation__assertions.FlutterError.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(src__foundation__assertions.FlutterError, "package:flutter_web/src/foundation/assertions.dart");
  dart.setFieldSignature(src__foundation__assertions.FlutterError, () => ({
    __proto__: dart.getFields(src__foundation__assertions.FlutterError.__proto__),
    diagnostics: dart.finalFieldType(core.List$(src__foundation__diagnostics.DiagnosticsNode))
  }));
  dart.defineExtensionMethods(src__foundation__assertions.FlutterError, ['toString']);
  dart.defineLazy(src__foundation__assertions.FlutterError, {
    /*src__foundation__assertions.FlutterError.onError*/get onError() {
      return dart.fn(src__foundation__assertions.FlutterError.dumpErrorToConsole, FlutterErrorDetails__Tovoid());
    },
    set onError(_) {},
    /*src__foundation__assertions.FlutterError._errorCount*/get _errorCount() {
      return 0;
    },
    set _errorCount(_) {},
    /*src__foundation__assertions.FlutterError.wrapWidth*/get wrapWidth() {
      return 100;
    }
  });
  let const$5;
  let const$6;
  const _children = dart.privateName(src__foundation__diagnostics, "_children");
  const _properties = dart.privateName(src__foundation__diagnostics, "_properties");
  src__foundation__diagnostics.DiagnosticsBlock = class DiagnosticsBlock extends src__foundation__diagnostics.DiagnosticsNode {
    get level() {
      return this[level$];
    }
    set level(value) {
      super.level = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get allowTruncate() {
      return this[allowTruncate$];
    }
    set allowTruncate(value) {
      super.allowTruncate = value;
    }
    getChildren() {
      return this[_children];
    }
    getProperties() {
      return this[_properties];
    }
    toDescription(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this[_description];
    }
  };
  (src__foundation__diagnostics.DiagnosticsBlock.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    let allowTruncate = opts && 'allowTruncate' in opts ? opts.allowTruncate : false;
    let children = opts && 'children' in opts ? opts.children : const$5 || (const$5 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    let properties = opts && 'properties' in opts ? opts.properties : const$6 || (const$6 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    this[value$] = value;
    this[level$] = level;
    this[allowTruncate$] = allowTruncate;
    this[_description] = description;
    this[_children] = children;
    this[_properties] = properties;
    src__foundation__diagnostics.DiagnosticsBlock.__proto__.new.call(this, {name: name, style: style, showName: dart.test(showName) && name != null, showSeparator: showSeparator, linePrefix: linePrefix});
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticsBlock.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsBlock);
  const level$ = Symbol("DiagnosticsBlock.level");
  const value$ = Symbol("DiagnosticsBlock.value");
  const allowTruncate$ = Symbol("DiagnosticsBlock.allowTruncate");
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticsBlock, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticsBlock.__proto__),
    getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
    getProperties: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
    toDescription: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticsBlock, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticsBlock, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticsBlock.__proto__),
    [_children]: dart.finalFieldType(core.List$(src__foundation__diagnostics.DiagnosticsNode)),
    [_properties]: dart.finalFieldType(core.List$(src__foundation__diagnostics.DiagnosticsNode)),
    level: dart.finalFieldType(src__foundation__diagnostics.DiagnosticLevel),
    [_description]: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.Object),
    allowTruncate: dart.finalFieldType(core.bool)
  }));
  src__foundation__assertions.DiagnosticsStackTrace = class DiagnosticsStackTrace extends src__foundation__diagnostics.DiagnosticsBlock {
    static _createStackFrame(frame) {
      return src__foundation__diagnostics.DiagnosticsNode.message(frame, {allowWrap: false});
    }
  };
  (src__foundation__assertions.DiagnosticsStackTrace.new = function(name, stack, opts) {
    let t6;
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    src__foundation__assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, value: stack, properties: (t6 = stackFilter, t6 == null ? dart.fn(src__foundation__assertions.FlutterError.defaultStackFilter, IterableOfStringToIterableOfString()) : t6)(dart.toString(stack)[$trimRight]()[$split]("\n"))[$map](src__foundation__diagnostics.DiagnosticsNode, dart.fn(src__foundation__assertions.DiagnosticsStackTrace._createStackFrame, StringToDiagnosticsNode()))[$toList](), style: src__foundation__diagnostics.DiagnosticsTreeStyle.flat, showSeparator: showSeparator, allowTruncate: true});
    ;
  }).prototype = src__foundation__assertions.DiagnosticsStackTrace.prototype;
  (src__foundation__assertions.DiagnosticsStackTrace.singleFrame = function(name, opts) {
    let frame = opts && 'frame' in opts ? opts.frame : null;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    src__foundation__assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, properties: JSArrayOfDiagnosticsNode().of([src__foundation__assertions.DiagnosticsStackTrace._createStackFrame(frame)]), style: src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace, showSeparator: showSeparator});
    ;
  }).prototype = src__foundation__assertions.DiagnosticsStackTrace.prototype;
  dart.addTypeTests(src__foundation__assertions.DiagnosticsStackTrace);
  dart.setLibraryUri(src__foundation__assertions.DiagnosticsStackTrace, "package:flutter_web/src/foundation/assertions.dart");
  const _cachedBuilder = dart.privateName(src__foundation__diagnostics, "_cachedBuilder");
  let const$7;
  let const$8;
  const _is_DiagnosticableNode_default = Symbol('_is_DiagnosticableNode_default');
  src__foundation__diagnostics.DiagnosticableNode$ = dart.generic(T => {
    class DiagnosticableNode extends src__foundation__diagnostics.DiagnosticsNode {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get builder() {
        let t6;
        if (dart.test(src__foundation__constants.kReleaseMode)) return null;
        if (this[_cachedBuilder] == null) {
          this[_cachedBuilder] = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
          t6 = this.value;
          t6 == null ? null : t6.debugFillProperties(this[_cachedBuilder]);
        }
        return this[_cachedBuilder];
      }
      get style() {
        let t6;
        return dart.test(src__foundation__constants.kReleaseMode) ? src__foundation__diagnostics.DiagnosticsTreeStyle.none : (t6 = super.style, t6 == null ? this.builder.defaultDiagnosticsTreeStyle : t6);
      }
      get emptyBodyDescription() {
        return dart.test(src__foundation__constants.kReleaseMode) ? "" : this.builder.emptyBodyDescription;
      }
      getProperties() {
        return dart.test(src__foundation__constants.kReleaseMode) ? const$7 || (const$7 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode)) : this.builder.properties;
      }
      getChildren() {
        return const$8 || (const$8 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (dart.test(src__foundation__constants.kReleaseMode)) {
          return "";
        }
        return this.value.toStringShort();
      }
    }
    (DiagnosticableNode.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let style = opts && 'style' in opts ? opts.style : null;
      this[_cachedBuilder] = null;
      this[value$] = value;
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2775, 15, "if (object is");
      DiagnosticableNode.__proto__.new.call(this, {name: name, style: style});
      ;
    }).prototype = DiagnosticableNode.prototype;
    dart.addTypeTests(DiagnosticableNode);
    DiagnosticableNode.prototype[_is_DiagnosticableNode_default] = true;
    const value$ = Symbol("DiagnosticableNode.value");
    dart.setMethodSignature(DiagnosticableNode, () => ({
      __proto__: dart.getMethods(DiagnosticableNode.__proto__),
      getProperties: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
    }));
    dart.setGetterSignature(DiagnosticableNode, () => ({
      __proto__: dart.getGetters(DiagnosticableNode.__proto__),
      builder: src__foundation__diagnostics.DiagnosticPropertiesBuilder,
      style: src__foundation__diagnostics.DiagnosticsTreeStyle
    }));
    dart.setLibraryUri(DiagnosticableNode, "package:flutter_web/src/foundation/diagnostics.dart");
    dart.setFieldSignature(DiagnosticableNode, () => ({
      __proto__: dart.getFields(DiagnosticableNode.__proto__),
      value: dart.finalFieldType(T),
      [_cachedBuilder]: dart.fieldType(src__foundation__diagnostics.DiagnosticPropertiesBuilder)
    }));
    return DiagnosticableNode;
  });
  src__foundation__diagnostics.DiagnosticableNode = src__foundation__diagnostics.DiagnosticableNode$();
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableNode, _is_DiagnosticableNode_default);
  src__foundation__assertions._FlutterErrorDetailsNode = class _FlutterErrorDetailsNode extends src__foundation__diagnostics.DiagnosticableNode$(src__foundation__assertions.FlutterErrorDetails) {
    get builder() {
      let builder = super.builder;
      if (builder == null) {
        return null;
      }
      let properties = builder.properties;
      for (let transformer of src__foundation__assertions.FlutterErrorDetails.propertiesTransformers) {
        properties = transformer(properties);
      }
      return new src__foundation__diagnostics.DiagnosticPropertiesBuilder.fromProperties(properties[$toList]());
    }
  };
  (src__foundation__assertions._FlutterErrorDetailsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    src__foundation__assertions._FlutterErrorDetailsNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = src__foundation__assertions._FlutterErrorDetailsNode.prototype;
  dart.addTypeTests(src__foundation__assertions._FlutterErrorDetailsNode);
  dart.setLibraryUri(src__foundation__assertions._FlutterErrorDetailsNode, "package:flutter_web/src/foundation/assertions.dart");
  src__foundation__assertions.debugPrintStack = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let maxFrames = opts && 'maxFrames' in opts ? opts.maxFrames : null;
    if (label != null) src__foundation__print.debugPrint(label);
    let lines = dart.toString(core.StackTrace.current)[$trimRight]()[$split]("\n");
    if (dart.test(src__foundation__constants.kIsWeb)) {
      lines = lines[$skip](1);
    }
    if (maxFrames != null) lines = lines[$take](maxFrames);
    src__foundation__print.debugPrint(src__foundation__assertions.FlutterError.defaultStackFilter(lines)[$join]("\n"));
  };
  const _name$1 = dart.privateName(src__foundation__diagnostics, "_name");
  src__foundation__diagnostics.DiagnosticLevel = class DiagnosticLevel extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (src__foundation__diagnostics.DiagnosticLevel.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticLevel.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticLevel);
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticLevel, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticLevel, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticLevel.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticLevel, ['toString']);
  src__foundation__diagnostics.DiagnosticLevel.hidden = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(0, "DiagnosticLevel.hidden"));
  src__foundation__diagnostics.DiagnosticLevel.fine = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(1, "DiagnosticLevel.fine"));
  src__foundation__diagnostics.DiagnosticLevel.debug = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(2, "DiagnosticLevel.debug"));
  src__foundation__diagnostics.DiagnosticLevel.info = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(3, "DiagnosticLevel.info"));
  src__foundation__diagnostics.DiagnosticLevel.warning = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(4, "DiagnosticLevel.warning"));
  src__foundation__diagnostics.DiagnosticLevel.hint = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(5, "DiagnosticLevel.hint"));
  src__foundation__diagnostics.DiagnosticLevel.summary = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(6, "DiagnosticLevel.summary"));
  src__foundation__diagnostics.DiagnosticLevel.error = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(7, "DiagnosticLevel.error"));
  src__foundation__diagnostics.DiagnosticLevel.off = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(8, "DiagnosticLevel.off"));
  src__foundation__diagnostics.DiagnosticLevel.values = dart.constList([src__foundation__diagnostics.DiagnosticLevel.hidden, src__foundation__diagnostics.DiagnosticLevel.fine, src__foundation__diagnostics.DiagnosticLevel.debug, src__foundation__diagnostics.DiagnosticLevel.info, src__foundation__diagnostics.DiagnosticLevel.warning, src__foundation__diagnostics.DiagnosticLevel.hint, src__foundation__diagnostics.DiagnosticLevel.summary, src__foundation__diagnostics.DiagnosticLevel.error, src__foundation__diagnostics.DiagnosticLevel.off], src__foundation__diagnostics.DiagnosticLevel);
  src__foundation__diagnostics.DiagnosticsTreeStyle = class DiagnosticsTreeStyle extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (src__foundation__diagnostics.DiagnosticsTreeStyle.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticsTreeStyle.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsTreeStyle);
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticsTreeStyle, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticsTreeStyle, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticsTreeStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticsTreeStyle, ['toString']);
  src__foundation__diagnostics.DiagnosticsTreeStyle.none = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(0, "DiagnosticsTreeStyle.none"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.sparse = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(1, "DiagnosticsTreeStyle.sparse"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.offstage = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(2, "DiagnosticsTreeStyle.offstage"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.dense = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(3, "DiagnosticsTreeStyle.dense"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.transition = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(4, "DiagnosticsTreeStyle.transition"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.error = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(5, "DiagnosticsTreeStyle.error"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(6, "DiagnosticsTreeStyle.whitespace"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.flat = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(7, "DiagnosticsTreeStyle.flat"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(8, "DiagnosticsTreeStyle.singleLine"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(9, "DiagnosticsTreeStyle.errorProperty"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.shallow = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(10, "DiagnosticsTreeStyle.shallow"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.truncateChildren = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(11, "DiagnosticsTreeStyle.truncateChildren"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.values = dart.constList([src__foundation__diagnostics.DiagnosticsTreeStyle.none, src__foundation__diagnostics.DiagnosticsTreeStyle.sparse, src__foundation__diagnostics.DiagnosticsTreeStyle.offstage, src__foundation__diagnostics.DiagnosticsTreeStyle.dense, src__foundation__diagnostics.DiagnosticsTreeStyle.transition, src__foundation__diagnostics.DiagnosticsTreeStyle.error, src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace, src__foundation__diagnostics.DiagnosticsTreeStyle.flat, src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine, src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty, src__foundation__diagnostics.DiagnosticsTreeStyle.shallow, src__foundation__diagnostics.DiagnosticsTreeStyle.truncateChildren], src__foundation__diagnostics.DiagnosticsTreeStyle);
  src__foundation__diagnostics.TextTreeConfiguration = class TextTreeConfiguration extends core.Object {
    get prefixLineOne() {
      return this[prefixLineOne$];
    }
    set prefixLineOne(value) {
      super.prefixLineOne = value;
    }
    get suffixLineOne() {
      return this[suffixLineOne$];
    }
    set suffixLineOne(value) {
      super.suffixLineOne = value;
    }
    get prefixOtherLines() {
      return this[prefixOtherLines$];
    }
    set prefixOtherLines(value) {
      super.prefixOtherLines = value;
    }
    get prefixLastChildLineOne() {
      return this[prefixLastChildLineOne$];
    }
    set prefixLastChildLineOne(value) {
      super.prefixLastChildLineOne = value;
    }
    get prefixOtherLinesRootNode() {
      return this[prefixOtherLinesRootNode$];
    }
    set prefixOtherLinesRootNode(value) {
      super.prefixOtherLinesRootNode = value;
    }
    get propertyPrefixIfChildren() {
      return this[propertyPrefixIfChildren$];
    }
    set propertyPrefixIfChildren(value) {
      super.propertyPrefixIfChildren = value;
    }
    get propertyPrefixNoChildren() {
      return this[propertyPrefixNoChildren$];
    }
    set propertyPrefixNoChildren(value) {
      super.propertyPrefixNoChildren = value;
    }
    get linkCharacter() {
      return this[linkCharacter$];
    }
    set linkCharacter(value) {
      super.linkCharacter = value;
    }
    get childLinkSpace() {
      return this[childLinkSpace];
    }
    set childLinkSpace(value) {
      super.childLinkSpace = value;
    }
    get lineBreak() {
      return this[lineBreak$];
    }
    set lineBreak(value) {
      super.lineBreak = value;
    }
    get lineBreakProperties() {
      return this[lineBreakProperties$];
    }
    set lineBreakProperties(value) {
      super.lineBreakProperties = value;
    }
    get beforeName() {
      return this[beforeName$];
    }
    set beforeName(value) {
      super.beforeName = value;
    }
    get afterName() {
      return this[afterName$];
    }
    set afterName(value) {
      super.afterName = value;
    }
    get afterDescriptionIfBody() {
      return this[afterDescriptionIfBody$];
    }
    set afterDescriptionIfBody(value) {
      super.afterDescriptionIfBody = value;
    }
    get afterDescription() {
      return this[afterDescription$];
    }
    set afterDescription(value) {
      super.afterDescription = value;
    }
    get beforeProperties() {
      return this[beforeProperties$];
    }
    set beforeProperties(value) {
      super.beforeProperties = value;
    }
    get afterProperties() {
      return this[afterProperties$];
    }
    set afterProperties(value) {
      super.afterProperties = value;
    }
    get mandatoryAfterProperties() {
      return this[mandatoryAfterProperties$];
    }
    set mandatoryAfterProperties(value) {
      super.mandatoryAfterProperties = value;
    }
    get propertySeparator() {
      return this[propertySeparator$];
    }
    set propertySeparator(value) {
      super.propertySeparator = value;
    }
    get bodyIndent() {
      return this[bodyIndent$];
    }
    set bodyIndent(value) {
      super.bodyIndent = value;
    }
    get showChildren() {
      return this[showChildren$];
    }
    set showChildren(value) {
      super.showChildren = value;
    }
    get addBlankLineIfNoChildren() {
      return this[addBlankLineIfNoChildren$];
    }
    set addBlankLineIfNoChildren(value) {
      super.addBlankLineIfNoChildren = value;
    }
    get isNameOnOwnLine() {
      return this[isNameOnOwnLine$];
    }
    set isNameOnOwnLine(value) {
      super.isNameOnOwnLine = value;
    }
    get footer() {
      return this[footer$];
    }
    set footer(value) {
      super.footer = value;
    }
    get manditoryFooter() {
      return this[manditoryFooter$];
    }
    set manditoryFooter(value) {
      super.manditoryFooter = value;
    }
    get isBlankLineBetweenPropertiesAndChildren() {
      return this[isBlankLineBetweenPropertiesAndChildren$];
    }
    set isBlankLineBetweenPropertiesAndChildren(value) {
      super.isBlankLineBetweenPropertiesAndChildren = value;
    }
  };
  (src__foundation__diagnostics.TextTreeConfiguration.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let prefixLastChildLineOne = opts && 'prefixLastChildLineOne' in opts ? opts.prefixLastChildLineOne : null;
    let prefixOtherLinesRootNode = opts && 'prefixOtherLinesRootNode' in opts ? opts.prefixOtherLinesRootNode : null;
    let linkCharacter = opts && 'linkCharacter' in opts ? opts.linkCharacter : null;
    let propertyPrefixIfChildren = opts && 'propertyPrefixIfChildren' in opts ? opts.propertyPrefixIfChildren : null;
    let propertyPrefixNoChildren = opts && 'propertyPrefixNoChildren' in opts ? opts.propertyPrefixNoChildren : null;
    let lineBreak = opts && 'lineBreak' in opts ? opts.lineBreak : "\n";
    let lineBreakProperties = opts && 'lineBreakProperties' in opts ? opts.lineBreakProperties : true;
    let afterName = opts && 'afterName' in opts ? opts.afterName : ":";
    let afterDescriptionIfBody = opts && 'afterDescriptionIfBody' in opts ? opts.afterDescriptionIfBody : "";
    let afterDescription = opts && 'afterDescription' in opts ? opts.afterDescription : "";
    let beforeProperties = opts && 'beforeProperties' in opts ? opts.beforeProperties : "";
    let afterProperties = opts && 'afterProperties' in opts ? opts.afterProperties : "";
    let mandatoryAfterProperties = opts && 'mandatoryAfterProperties' in opts ? opts.mandatoryAfterProperties : "";
    let propertySeparator = opts && 'propertySeparator' in opts ? opts.propertySeparator : "";
    let bodyIndent = opts && 'bodyIndent' in opts ? opts.bodyIndent : "";
    let footer = opts && 'footer' in opts ? opts.footer : "";
    let showChildren = opts && 'showChildren' in opts ? opts.showChildren : true;
    let addBlankLineIfNoChildren = opts && 'addBlankLineIfNoChildren' in opts ? opts.addBlankLineIfNoChildren : true;
    let isNameOnOwnLine = opts && 'isNameOnOwnLine' in opts ? opts.isNameOnOwnLine : false;
    let isBlankLineBetweenPropertiesAndChildren = opts && 'isBlankLineBetweenPropertiesAndChildren' in opts ? opts.isBlankLineBetweenPropertiesAndChildren : true;
    let beforeName = opts && 'beforeName' in opts ? opts.beforeName : "";
    let suffixLineOne = opts && 'suffixLineOne' in opts ? opts.suffixLineOne : "";
    let manditoryFooter = opts && 'manditoryFooter' in opts ? opts.manditoryFooter : "";
    this[prefixLineOne$] = prefixLineOne;
    this[prefixOtherLines$] = prefixOtherLines;
    this[prefixLastChildLineOne$] = prefixLastChildLineOne;
    this[prefixOtherLinesRootNode$] = prefixOtherLinesRootNode;
    this[linkCharacter$] = linkCharacter;
    this[propertyPrefixIfChildren$] = propertyPrefixIfChildren;
    this[propertyPrefixNoChildren$] = propertyPrefixNoChildren;
    this[lineBreak$] = lineBreak;
    this[lineBreakProperties$] = lineBreakProperties;
    this[afterName$] = afterName;
    this[afterDescriptionIfBody$] = afterDescriptionIfBody;
    this[afterDescription$] = afterDescription;
    this[beforeProperties$] = beforeProperties;
    this[afterProperties$] = afterProperties;
    this[mandatoryAfterProperties$] = mandatoryAfterProperties;
    this[propertySeparator$] = propertySeparator;
    this[bodyIndent$] = bodyIndent;
    this[footer$] = footer;
    this[showChildren$] = showChildren;
    this[addBlankLineIfNoChildren$] = addBlankLineIfNoChildren;
    this[isNameOnOwnLine$] = isNameOnOwnLine;
    this[isBlankLineBetweenPropertiesAndChildren$] = isBlankLineBetweenPropertiesAndChildren;
    this[beforeName$] = beforeName;
    this[suffixLineOne$] = suffixLineOne;
    this[manditoryFooter$] = manditoryFooter;
    if (!(prefixLineOne != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 218, 15, "prefixLineOne != null");
    if (!(prefixOtherLines != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 219, 15, "prefixOtherLines != null");
    if (!(prefixLastChildLineOne != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 220, 15, "prefixLastChildLineOne != null");
    if (!(prefixOtherLinesRootNode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 221, 15, "prefixOtherLinesRootNode != null");
    if (!(linkCharacter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 222, 15, "linkCharacter != null");
    if (!(propertyPrefixIfChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 223, 15, "propertyPrefixIfChildren != null");
    if (!(propertyPrefixNoChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 224, 15, "propertyPrefixNoChildren != null");
    if (!(lineBreak != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 225, 15, "lineBreak != null");
    if (!(lineBreakProperties != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 226, 15, "lineBreakProperties != null");
    if (!(afterName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 227, 15, "afterName != null");
    if (!(afterDescriptionIfBody != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 228, 15, "afterDescriptionIfBody != null");
    if (!(afterDescription != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 229, 15, "afterDescription != null");
    if (!(beforeProperties != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 230, 15, "beforeProperties != null");
    if (!(afterProperties != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 231, 15, "afterProperties != null");
    if (!(propertySeparator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 232, 15, "propertySeparator != null");
    if (!(bodyIndent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 233, 15, "bodyIndent != null");
    if (!(footer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 234, 15, "footer != null");
    if (!(showChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 235, 15, "showChildren != null");
    if (!(addBlankLineIfNoChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 236, 15, "addBlankLineIfNoChildren != null");
    if (!(isNameOnOwnLine != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 237, 15, "isNameOnOwnLine != null");
    if (!(isBlankLineBetweenPropertiesAndChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 238, 15, "isBlankLineBetweenPropertiesAndChildren != null");
    this[childLinkSpace] = " "[$times](linkCharacter.length);
    ;
  }).prototype = src__foundation__diagnostics.TextTreeConfiguration.prototype;
  dart.addTypeTests(src__foundation__diagnostics.TextTreeConfiguration);
  const prefixLineOne$ = Symbol("TextTreeConfiguration.prefixLineOne");
  const suffixLineOne$ = Symbol("TextTreeConfiguration.suffixLineOne");
  const prefixOtherLines$ = Symbol("TextTreeConfiguration.prefixOtherLines");
  const prefixLastChildLineOne$ = Symbol("TextTreeConfiguration.prefixLastChildLineOne");
  const prefixOtherLinesRootNode$ = Symbol("TextTreeConfiguration.prefixOtherLinesRootNode");
  const propertyPrefixIfChildren$ = Symbol("TextTreeConfiguration.propertyPrefixIfChildren");
  const propertyPrefixNoChildren$ = Symbol("TextTreeConfiguration.propertyPrefixNoChildren");
  const linkCharacter$ = Symbol("TextTreeConfiguration.linkCharacter");
  const childLinkSpace = Symbol("TextTreeConfiguration.childLinkSpace");
  const lineBreak$ = Symbol("TextTreeConfiguration.lineBreak");
  const lineBreakProperties$ = Symbol("TextTreeConfiguration.lineBreakProperties");
  const beforeName$ = Symbol("TextTreeConfiguration.beforeName");
  const afterName$ = Symbol("TextTreeConfiguration.afterName");
  const afterDescriptionIfBody$ = Symbol("TextTreeConfiguration.afterDescriptionIfBody");
  const afterDescription$ = Symbol("TextTreeConfiguration.afterDescription");
  const beforeProperties$ = Symbol("TextTreeConfiguration.beforeProperties");
  const afterProperties$ = Symbol("TextTreeConfiguration.afterProperties");
  const mandatoryAfterProperties$ = Symbol("TextTreeConfiguration.mandatoryAfterProperties");
  const propertySeparator$ = Symbol("TextTreeConfiguration.propertySeparator");
  const bodyIndent$ = Symbol("TextTreeConfiguration.bodyIndent");
  const showChildren$ = Symbol("TextTreeConfiguration.showChildren");
  const addBlankLineIfNoChildren$ = Symbol("TextTreeConfiguration.addBlankLineIfNoChildren");
  const isNameOnOwnLine$ = Symbol("TextTreeConfiguration.isNameOnOwnLine");
  const footer$ = Symbol("TextTreeConfiguration.footer");
  const manditoryFooter$ = Symbol("TextTreeConfiguration.manditoryFooter");
  const isBlankLineBetweenPropertiesAndChildren$ = Symbol("TextTreeConfiguration.isBlankLineBetweenPropertiesAndChildren");
  dart.setLibraryUri(src__foundation__diagnostics.TextTreeConfiguration, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.TextTreeConfiguration, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.TextTreeConfiguration.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    suffixLineOne: dart.finalFieldType(core.String),
    prefixOtherLines: dart.finalFieldType(core.String),
    prefixLastChildLineOne: dart.finalFieldType(core.String),
    prefixOtherLinesRootNode: dart.finalFieldType(core.String),
    propertyPrefixIfChildren: dart.finalFieldType(core.String),
    propertyPrefixNoChildren: dart.finalFieldType(core.String),
    linkCharacter: dart.finalFieldType(core.String),
    childLinkSpace: dart.finalFieldType(core.String),
    lineBreak: dart.finalFieldType(core.String),
    lineBreakProperties: dart.finalFieldType(core.bool),
    beforeName: dart.finalFieldType(core.String),
    afterName: dart.finalFieldType(core.String),
    afterDescriptionIfBody: dart.finalFieldType(core.String),
    afterDescription: dart.finalFieldType(core.String),
    beforeProperties: dart.finalFieldType(core.String),
    afterProperties: dart.finalFieldType(core.String),
    mandatoryAfterProperties: dart.finalFieldType(core.String),
    propertySeparator: dart.finalFieldType(core.String),
    bodyIndent: dart.finalFieldType(core.String),
    showChildren: dart.finalFieldType(core.bool),
    addBlankLineIfNoChildren: dart.finalFieldType(core.bool),
    isNameOnOwnLine: dart.finalFieldType(core.bool),
    footer: dart.finalFieldType(core.String),
    manditoryFooter: dart.finalFieldType(core.String),
    isBlankLineBetweenPropertiesAndChildren: dart.finalFieldType(core.bool)
  }));
  src__foundation__diagnostics._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (src__foundation__diagnostics._WordWrapParseMode.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = src__foundation__diagnostics._WordWrapParseMode.prototype;
  dart.addTypeTests(src__foundation__diagnostics._WordWrapParseMode);
  dart.setLibraryUri(src__foundation__diagnostics._WordWrapParseMode, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics._WordWrapParseMode, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics._WordWrapParseMode, ['toString']);
  src__foundation__diagnostics._WordWrapParseMode.inSpace = dart.const(new src__foundation__diagnostics._WordWrapParseMode.new(0, "_WordWrapParseMode.inSpace"));
  src__foundation__diagnostics._WordWrapParseMode.inWord = dart.const(new src__foundation__diagnostics._WordWrapParseMode.new(1, "_WordWrapParseMode.inWord"));
  src__foundation__diagnostics._WordWrapParseMode.atBreak = dart.const(new src__foundation__diagnostics._WordWrapParseMode.new(2, "_WordWrapParseMode.atBreak"));
  src__foundation__diagnostics._WordWrapParseMode.values = dart.constList([src__foundation__diagnostics._WordWrapParseMode.inSpace, src__foundation__diagnostics._WordWrapParseMode.inWord, src__foundation__diagnostics._WordWrapParseMode.atBreak], src__foundation__diagnostics._WordWrapParseMode);
  const _nextPrefixOtherLines = dart.privateName(src__foundation__diagnostics, "_nextPrefixOtherLines");
  const _buffer = dart.privateName(src__foundation__diagnostics, "_buffer");
  const _currentLine = dart.privateName(src__foundation__diagnostics, "_currentLine");
  const _wrappableRanges = dart.privateName(src__foundation__diagnostics, "_wrappableRanges");
  const _numLines = dart.privateName(src__foundation__diagnostics, "_numLines");
  const _prefixOtherLines = dart.privateName(src__foundation__diagnostics, "_prefixOtherLines");
  const _getCurrentPrefix = dart.privateName(src__foundation__diagnostics, "_getCurrentPrefix");
  const _writeLine = dart.privateName(src__foundation__diagnostics, "_writeLine");
  const _finalizeLine = dart.privateName(src__foundation__diagnostics, "_finalizeLine");
  const _updatePrefix = dart.privateName(src__foundation__diagnostics, "_updatePrefix");
  src__foundation__diagnostics._PrefixedStringBuilder = class _PrefixedStringBuilder extends core.Object {
    get prefixOtherLines() {
      let t6;
      t6 = this[_nextPrefixOtherLines];
      return t6 == null ? this[_prefixOtherLines] : t6;
    }
    set prefixOtherLines(prefix) {
      this[_prefixOtherLines] = prefix;
      this[_nextPrefixOtherLines] = null;
    }
    incrementPrefixOtherLines(suffix, opts) {
      let updateCurrentLine = opts && 'updateCurrentLine' in opts ? opts.updateCurrentLine : null;
      if (dart.test(this[_currentLine].isEmpty) || dart.test(updateCurrentLine)) {
        this[_prefixOtherLines] = dart.notNull(this.prefixOtherLines) + dart.notNull(suffix);
        this[_nextPrefixOtherLines] = null;
      } else {
        this[_nextPrefixOtherLines] = dart.notNull(this.prefixOtherLines) + dart.notNull(suffix);
      }
    }
    get requiresMultipleLines() {
      return dart.notNull(this[_numLines]) > 1 || this[_numLines] === 1 && dart.test(this[_currentLine].isNotEmpty) || dart.notNull(this[_currentLine].length) + this[_getCurrentPrefix](true).length > dart.notNull(this.wrapWidth);
    }
    get isCurrentLineEmpty() {
      return this[_currentLine].isEmpty;
    }
    [_finalizeLine](addTrailingLineBreak) {
      let firstLine = this[_buffer].isEmpty;
      let text = dart.toString(this[_currentLine]);
      this[_currentLine].clear();
      if (dart.test(this[_wrappableRanges][$isEmpty])) {
        this[_writeLine](text, {includeLineBreak: addTrailingLineBreak, firstLine: firstLine});
        return;
      }
      let lines = src__foundation__diagnostics._PrefixedStringBuilder._wordWrapLine(text, this[_wrappableRanges], this.wrapWidth, {startOffset: dart.test(firstLine) ? this.prefixLineOne.length : this[_prefixOtherLines].length, otherLineOffset: dart.test(firstLine) ? this[_prefixOtherLines].length : this[_prefixOtherLines].length});
      let i = 0;
      let length = lines[$length];
      for (let line of lines) {
        i = i + 1;
        this[_writeLine](line, {includeLineBreak: dart.test(addTrailingLineBreak) || i < dart.notNull(length), firstLine: firstLine});
      }
      this[_wrappableRanges][$clear]();
    }
    static _wordWrapLine(message, wrapRanges, width, opts) {
      let startOffset = opts && 'startOffset' in opts ? opts.startOffset : 0;
      let otherLineOffset = opts && 'otherLineOffset' in opts ? opts.otherLineOffset : 0;
      return new (SyncIterableOfString()).new(function* _wordWrapLine() {
        if (message.length + dart.notNull(startOffset) < dart.notNull(width)) {
          yield message;
          return;
        }
        let startForLengthCalculations = -dart.notNull(startOffset);
        let addPrefix = false;
        let index = 0;
        let mode = src__foundation__diagnostics._WordWrapParseMode.inSpace;
        let lastWordStart = null;
        let lastWordEnd = null;
        let start = 0;
        let currentChunk = 0;
        function noWrap(index) {
          while (true) {
            if (currentChunk >= dart.notNull(wrapRanges[$length])) return true;
            if (dart.notNull(index) < dart.notNull(wrapRanges[$_get](currentChunk + 1))) break;
            currentChunk = currentChunk + 2;
          }
          return dart.notNull(index) < dart.notNull(wrapRanges[$_get](currentChunk));
        }
        dart.fn(noWrap, intTobool());
        while (true) {
          switch (mode) {
            case src__foundation__diagnostics._WordWrapParseMode.inSpace:
            {
              while (index < message.length && message[$_get](index) === " ")
                index = index + 1;
              lastWordStart = index;
              mode = src__foundation__diagnostics._WordWrapParseMode.inWord;
              break;
            }
            case src__foundation__diagnostics._WordWrapParseMode.inWord:
            {
              while (index < message.length && (message[$_get](index) !== " " || dart.test(noWrap(index))))
                index = index + 1;
              mode = src__foundation__diagnostics._WordWrapParseMode.atBreak;
              break;
            }
            case src__foundation__diagnostics._WordWrapParseMode.atBreak:
            {
              if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
                if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                  lastWordEnd = index;
                }
                let line = message[$substring](start, lastWordEnd);
                yield line;
                addPrefix = true;
                if (dart.notNull(lastWordEnd) >= message.length) return;
                if (lastWordEnd === index) {
                  while (index < message.length && message[$_get](index) === " ")
                    index = index + 1;
                  start = index;
                  mode = src__foundation__diagnostics._WordWrapParseMode.inWord;
                } else {
                  if (!(dart.notNull(lastWordStart) > dart.notNull(lastWordEnd))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 935, 22, "yield line;\n            add");
                  start = lastWordStart;
                  mode = src__foundation__diagnostics._WordWrapParseMode.atBreak;
                }
                startForLengthCalculations = dart.notNull(start) - dart.notNull(otherLineOffset);
                if (!addPrefix) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 940, 20, "current p");
                lastWordEnd = null;
              } else {
                lastWordEnd = index;
                mode = src__foundation__diagnostics._WordWrapParseMode.inSpace;
              }
              break;
            }
          }
        }
      });
    }
    write(s, opts) {
      let t6;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : false;
      if (s[$isEmpty]) return;
      let lines = s[$split]("\n");
      for (let i = 0; i < dart.notNull(lines[$length]); i = i + 1) {
        if (i > 0) {
          this[_finalizeLine](true);
          this[_updatePrefix]();
        }
        let line = lines[$_get](i);
        if (line[$isNotEmpty]) {
          if (dart.test(allowWrap) && this.wrapWidth != null) {
            let wrapStart = this[_currentLine].length;
            let wrapEnd = dart.notNull(wrapStart) + line.length;
            if (dart.test(this[_wrappableRanges][$isNotEmpty]) && this[_wrappableRanges][$last] == wrapStart) {
              this[_wrappableRanges][$last] = wrapEnd;
            } else {
              t6 = this[_wrappableRanges];
              t6[$add](wrapStart);
              t6[$add](wrapEnd);
              t6;
            }
          }
          this[_currentLine].write(line);
        }
      }
    }
    [_updatePrefix]() {
      if (this[_nextPrefixOtherLines] != null) {
        this[_prefixOtherLines] = this[_nextPrefixOtherLines];
        this[_nextPrefixOtherLines] = null;
      }
    }
    [_writeLine](line, opts) {
      let includeLineBreak = opts && 'includeLineBreak' in opts ? opts.includeLineBreak : null;
      let firstLine = opts && 'firstLine' in opts ? opts.firstLine : null;
      line = dart.str(this[_getCurrentPrefix](firstLine)) + dart.str(line);
      this[_buffer].write(line[$trimRight]());
      if (dart.test(includeLineBreak)) this[_buffer].write("\n");
      this[_numLines] = dart.notNull(this[_numLines]) + 1;
    }
    [_getCurrentPrefix](firstLine) {
      return dart.test(this[_buffer].isEmpty) ? this.prefixLineOne : dart.test(firstLine) ? this[_prefixOtherLines] : this[_prefixOtherLines];
    }
    writeRawLines(lines) {
      if (lines[$isEmpty]) return;
      if (dart.test(this[_currentLine].isNotEmpty)) {
        this[_finalizeLine](true);
      }
      if (!dart.test(this[_currentLine].isEmpty)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1016, 13, "ne(\n    String line,");
      this[_buffer].write(lines);
      if (!lines[$endsWith]("\n")) this[_buffer].write("\n");
      this[_numLines] = dart.notNull(this[_numLines]) + 1;
      this[_updatePrefix]();
    }
    writeStretched(text, targetLineLength) {
      this.write(text);
      let currentLineLength = dart.notNull(this[_currentLine].length) + this[_getCurrentPrefix](this[_buffer].isEmpty).length;
      if (!(dart.notNull(this[_currentLine].length) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1029, 13, " }\n\n  /// Write lines a");
      let targetLength = dart.notNull(targetLineLength) - currentLineLength;
      if (targetLength > 0) {
        if (!text[$isNotEmpty]) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1032, 14, "oid writeRawLin");
        let lastChar = text[$_get](text.length - 1);
        if (!(lastChar !== "\n")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1034, 14, "rentLine.isNotEm");
        this[_currentLine].write(lastChar[$times](targetLength));
      }
      this[_wrappableRanges][$clear]();
    }
    build() {
      if (dart.test(this[_currentLine].isNotEmpty)) this[_finalizeLine](false);
      return dart.toString(this[_buffer]);
    }
  };
  (src__foundation__diagnostics._PrefixedStringBuilder.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    this[_nextPrefixOtherLines] = null;
    this[_buffer] = new core.StringBuffer.new();
    this[_currentLine] = new core.StringBuffer.new();
    this[_wrappableRanges] = JSArrayOfint().of([]);
    this[_numLines] = 0;
    this.prefixLineOne = prefixLineOne;
    this.wrapWidth = wrapWidth;
    this[_prefixOtherLines] = prefixOtherLines;
    ;
  }).prototype = src__foundation__diagnostics._PrefixedStringBuilder.prototype;
  dart.addTypeTests(src__foundation__diagnostics._PrefixedStringBuilder);
  dart.setMethodSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    incrementPrefixOtherLines: dart.fnType(dart.void, [core.String], {updateCurrentLine: core.bool}),
    [_finalizeLine]: dart.fnType(dart.void, [core.bool]),
    write: dart.fnType(dart.void, [core.String], {allowWrap: core.bool}),
    [_updatePrefix]: dart.fnType(dart.void, []),
    [_writeLine]: dart.fnType(dart.void, [core.String], {firstLine: core.bool, includeLineBreak: core.bool}),
    [_getCurrentPrefix]: dart.fnType(core.String, [core.bool]),
    writeRawLines: dart.fnType(dart.void, [core.String]),
    writeStretched: dart.fnType(dart.void, [core.String, core.int]),
    build: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    prefixOtherLines: core.String,
    requiresMultipleLines: core.bool,
    isCurrentLineEmpty: core.bool
  }));
  dart.setSetterSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getSetters(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    prefixOtherLines: core.String
  }));
  dart.setLibraryUri(src__foundation__diagnostics._PrefixedStringBuilder, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    [_prefixOtherLines]: dart.fieldType(core.String),
    [_nextPrefixOtherLines]: dart.fieldType(core.String),
    wrapWidth: dart.finalFieldType(core.int),
    [_buffer]: dart.finalFieldType(core.StringBuffer),
    [_currentLine]: dart.finalFieldType(core.StringBuffer),
    [_wrappableRanges]: dart.finalFieldType(core.List$(core.int)),
    [_numLines]: dart.fieldType(core.int)
  }));
  src__foundation__diagnostics._NoDefaultValue = class _NoDefaultValue extends core.Object {};
  (src__foundation__diagnostics._NoDefaultValue.new = function() {
    ;
  }).prototype = src__foundation__diagnostics._NoDefaultValue.prototype;
  dart.addTypeTests(src__foundation__diagnostics._NoDefaultValue);
  dart.setLibraryUri(src__foundation__diagnostics._NoDefaultValue, "package:flutter_web/src/foundation/diagnostics.dart");
  const _minLevel = dart.privateName(src__foundation__diagnostics, "_minLevel");
  const _wrapWidth = dart.privateName(src__foundation__diagnostics, "_wrapWidth");
  const _wrapWidthProperties = dart.privateName(src__foundation__diagnostics, "_wrapWidthProperties");
  const _maxDescendentsTruncatableNode = dart.privateName(src__foundation__diagnostics, "_maxDescendentsTruncatableNode");
  const _childTextConfiguration = dart.privateName(src__foundation__diagnostics, "_childTextConfiguration");
  src__foundation__diagnostics.TextTreeRenderer = class TextTreeRenderer extends core.Object {
    [_childTextConfiguration](child, textStyle) {
      let t6;
      let childStyle = (t6 = child, t6 == null ? null : t6.style);
      return dart.test(src__foundation__diagnostics._isSingleLine(childStyle)) || dart.equals(childStyle, src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty) ? textStyle : child.textTreeConfiguration;
    }
    render(node, opts) {
      let t6, t6$, t6$0;
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (dart.test(src__foundation__constants.kReleaseMode)) {
        return "";
      }
      let isSingleLine = dart.test(src__foundation__diagnostics._isSingleLine(node.style)) && !dart.equals((t6 = parentConfiguration, t6 == null ? null : t6.lineBreakProperties), true);
      prefixOtherLines == null ? prefixOtherLines = prefixLineOne : null;
      if (node.linePrefix != null) {
        prefixLineOne = dart.notNull(prefixLineOne) + dart.notNull(node.linePrefix);
        prefixOtherLines = dart.notNull(prefixOtherLines) + dart.notNull(node.linePrefix);
      }
      let config = node.textTreeConfiguration;
      if (prefixOtherLines[$isEmpty]) prefixOtherLines = dart.notNull(prefixOtherLines) + dart.notNull(config.prefixOtherLinesRootNode);
      if (dart.equals(node.style, src__foundation__diagnostics.DiagnosticsTreeStyle.truncateChildren)) {
        let descendants = JSArrayOfString().of([]);
        let maxDepth = 5;
        let depth = 0;
        let maxLines = 25;
        let lines = 0;
        function visitor(node) {
          for (let child of node.getChildren()) {
            if (lines < maxLines) {
              depth = depth + 1;
              descendants[$add](dart.str(prefixOtherLines) + "  "[$times](depth) + dart.str(child));
              if (depth < maxDepth) visitor(child);
              depth = depth - 1;
            } else if (lines === maxLines) {
              descendants[$add](dart.str(prefixOtherLines) + "  ...(descendants list truncated after " + dart.str(lines) + " lines)");
            }
            lines = lines + 1;
          }
        }
        dart.fn(visitor, DiagnosticsNodeTovoid());
        visitor(node);
        let information = new core.StringBuffer.new(prefixLineOne);
        if (lines > 1) {
          information.writeln("This " + dart.str(node.name) + " had the following descendants (showing up to depth " + dart.str(maxDepth) + "):");
        } else if (descendants[$length] === 1) {
          information.writeln("This " + dart.str(node.name) + " had the following child:");
        } else {
          information.writeln("This " + dart.str(node.name) + " has no descendants.");
        }
        information.writeAll(descendants, "\n");
        return information.toString();
      }
      let builder = new src__foundation__diagnostics._PrefixedStringBuilder.new({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, wrapWidth: math.max(core.int, this[_wrapWidth], prefixOtherLines.length + dart.notNull(this[_wrapWidthProperties]))});
      let children = node.getChildren();
      let description = node.toDescription({parentConfiguration: parentConfiguration});
      if (config.beforeName[$isNotEmpty]) {
        builder.write(config.beforeName);
      }
      let wrapName = !isSingleLine && dart.test(node.allowNameWrap);
      let wrapDescription = !isSingleLine && dart.test(node.allowWrap);
      let uppercaseTitle = dart.equals(node.style, src__foundation__diagnostics.DiagnosticsTreeStyle.error);
      let name = node.name;
      if (uppercaseTitle) {
        name = (t6$ = name, t6$ == null ? null : t6$[$toUpperCase]());
      }
      if (description == null || description[$isEmpty]) {
        if (dart.test(node.showName) && name != null) builder.write(name, {allowWrap: wrapName});
      } else {
        let includeName = false;
        if (name != null && name[$isNotEmpty] && dart.test(node.showName)) {
          includeName = true;
          builder.write(name, {allowWrap: wrapName});
          if (dart.test(node.showSeparator)) builder.write(config.afterName, {allowWrap: wrapName});
          builder.write(dart.test(config.isNameOnOwnLine) || description[$contains]("\n") ? "\n" : " ", {allowWrap: wrapName});
        }
        if (!isSingleLine && dart.test(builder.requiresMultipleLines) && !dart.test(builder.isCurrentLineEmpty)) {
          builder.write("\n");
        }
        if (includeName) {
          builder.incrementPrefixOtherLines(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: true});
        }
        if (uppercaseTitle) {
          description = description[$toUpperCase]();
        }
        builder.write(description[$trimRight](), {allowWrap: wrapDescription});
        if (!includeName) {
          builder.incrementPrefixOtherLines(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: false});
        }
      }
      if (config.suffixLineOne[$isNotEmpty]) {
        builder.writeStretched(config.suffixLineOne, builder.wrapWidth);
      }
      let propertiesIterable = node.getProperties()[$where](dart.fn(n => !dart.test(n.isFiltered(this[_minLevel])), DiagnosticsNodeTobool()));
      let properties = null;
      if (dart.notNull(this[_maxDescendentsTruncatableNode]) >= 0 && dart.test(node.allowTruncate)) {
        if (dart.notNull(propertiesIterable[$length]) < dart.notNull(this[_maxDescendentsTruncatableNode])) {
          properties = propertiesIterable[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          properties[$add](src__foundation__diagnostics.DiagnosticsNode.message("..."));
        } else {
          properties = propertiesIterable[$toList]();
        }
        if (dart.notNull(this[_maxDescendentsTruncatableNode]) < dart.notNull(children[$length])) {
          children = children[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          children[$add](src__foundation__diagnostics.DiagnosticsNode.message("..."));
        }
      } else {
        properties = propertiesIterable[$toList]();
      }
      if ((dart.test(properties[$isNotEmpty]) || dart.test(children[$isNotEmpty]) || node.emptyBodyDescription != null) && (dart.test(node.showSeparator) || dart.equals((t6$0 = description, t6$0 == null ? null : t6$0[$isNotEmpty]), true))) {
        builder.write(config.afterDescriptionIfBody);
      }
      if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      if (dart.test(properties[$isNotEmpty])) builder.write(config.beforeProperties);
      builder.incrementPrefixOtherLines(config.bodyIndent, {updateCurrentLine: false});
      if (node.emptyBodyDescription != null && dart.test(properties[$isEmpty]) && dart.test(children[$isEmpty]) && prefixLineOne[$isNotEmpty]) {
        builder.write(node.emptyBodyDescription);
        if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      }
      for (let i = 0; i < dart.notNull(properties[$length]); i = i + 1) {
        let property = properties[$_get](i);
        if (i > 0) builder.write(config.propertySeparator);
        let propertyStyle = property.textTreeConfiguration;
        if (dart.test(src__foundation__diagnostics._isSingleLine(property.style))) {
          let propertyRender = this.render(property, {prefixLineOne: dart.str(propertyStyle.prefixLineOne), prefixOtherLines: dart.str(propertyStyle.childLinkSpace) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config});
          let propertyLines = propertyRender[$split]("\n");
          if (propertyLines[$length] === 1 && !dart.test(config.lineBreakProperties)) {
            builder.write(propertyLines[$first]);
          } else {
            builder.write(propertyRender, {allowWrap: false});
            if (!propertyRender[$endsWith]("\n")) builder.write("\n");
          }
        } else {
          let propertyRender = this.render(property, {prefixLineOne: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.prefixLineOne), prefixOtherLines: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.childLinkSpace) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config});
          builder.writeRawLines(propertyRender);
        }
      }
      if (dart.test(properties[$isNotEmpty])) builder.write(config.afterProperties);
      builder.write(config.mandatoryAfterProperties);
      if (!dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      let prefixChildren = dart.str(config.bodyIndent);
      let prefixChildrenRaw = dart.str(prefixOtherLines) + prefixChildren;
      if (dart.test(children[$isEmpty]) && dart.test(config.addBlankLineIfNoChildren) && dart.test(builder.requiresMultipleLines) && builder.prefixOtherLines[$trimRight]()[$isNotEmpty]) {
        builder.write(config.lineBreak);
      }
      if (dart.test(children[$isNotEmpty]) && dart.test(config.showChildren)) {
        if (dart.test(config.isBlankLineBetweenPropertiesAndChildren) && dart.test(properties[$isNotEmpty]) && dart.test(children[$first].textTreeConfiguration.isBlankLineBetweenPropertiesAndChildren)) {
          builder.write(config.lineBreak);
        }
        builder.prefixOtherLines = prefixOtherLines;
        for (let i = 0; i < dart.notNull(children[$length]); i = i + 1) {
          let child = children[$_get](i);
          if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1333, 16, "Children';\n  ");
          let childConfig = this[_childTextConfiguration](child, config);
          if (i === dart.notNull(children[$length]) - 1) {
            let lastChildPrefixLineOne = prefixChildrenRaw + dart.str(childConfig.prefixLastChildLineOne);
            let childPrefixOtherLines = prefixChildrenRaw + dart.str(childConfig.childLinkSpace) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLines(this.render(child, {prefixLineOne: lastChildPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(dart.str(childConfig.childLinkSpace) + dart.str(childConfig.footer));
              if (childConfig.manditoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.manditoryFooter, math.max(core.int, builder.wrapWidth, dart.notNull(this[_wrapWidthProperties]) + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          } else {
            let nextChildStyle = this[_childTextConfiguration](children[$_get](i + 1), config);
            let childPrefixLineOne = prefixChildrenRaw + dart.str(childConfig.prefixLineOne);
            let childPrefixOtherLines = prefixChildrenRaw + dart.str(nextChildStyle.linkCharacter) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLines(this.render(child, {prefixLineOne: childPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(dart.str(childConfig.linkCharacter) + dart.str(childConfig.footer));
              if (childConfig.manditoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.manditoryFooter, math.max(core.int, builder.wrapWidth, dart.notNull(this[_wrapWidthProperties]) + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          }
        }
      }
      if (parentConfiguration == null && config.manditoryFooter[$isNotEmpty]) {
        builder.writeStretched(config.manditoryFooter, builder.wrapWidth);
        builder.write(config.lineBreak);
      }
      return builder.build();
    }
  };
  (src__foundation__diagnostics.TextTreeRenderer.new = function(opts) {
    let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : 100;
    let wrapWidthProperties = opts && 'wrapWidthProperties' in opts ? opts.wrapWidthProperties : 65;
    let maxDescendentsTruncatableNode = opts && 'maxDescendentsTruncatableNode' in opts ? opts.maxDescendentsTruncatableNode : -1;
    if (!(minLevel != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1083, 15, "dth] and the cur");
    this[_minLevel] = minLevel;
    this[_wrapWidth] = wrapWidth;
    this[_wrapWidthProperties] = wrapWidthProperties;
    this[_maxDescendentsTruncatableNode] = maxDescendentsTruncatableNode;
    ;
  }).prototype = src__foundation__diagnostics.TextTreeRenderer.prototype;
  dart.addTypeTests(src__foundation__diagnostics.TextTreeRenderer);
  dart.setMethodSignature(src__foundation__diagnostics.TextTreeRenderer, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.TextTreeRenderer.__proto__),
    [_childTextConfiguration]: dart.fnType(src__foundation__diagnostics.TextTreeConfiguration, [src__foundation__diagnostics.DiagnosticsNode, src__foundation__diagnostics.TextTreeConfiguration]),
    render: dart.fnType(core.String, [src__foundation__diagnostics.DiagnosticsNode], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration, prefixLineOne: core.String, prefixOtherLines: core.String})
  }));
  dart.setLibraryUri(src__foundation__diagnostics.TextTreeRenderer, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.TextTreeRenderer, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.TextTreeRenderer.__proto__),
    [_wrapWidth]: dart.finalFieldType(core.int),
    [_wrapWidthProperties]: dart.finalFieldType(core.int),
    [_minLevel]: dart.finalFieldType(src__foundation__diagnostics.DiagnosticLevel),
    [_maxDescendentsTruncatableNode]: dart.finalFieldType(core.int)
  }));
  src__foundation__diagnostics.MessageProperty = class MessageProperty extends src__foundation__diagnostics.DiagnosticsProperty$(dart.void) {};
  (src__foundation__diagnostics.MessageProperty.new = function(name, message, opts) {
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1761, 15, "gnosticsNode");
    if (!(message != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1762, 15, "serves the same");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1763, 15, "s\n///    with");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1764, 15, "rty name.\n///");
    src__foundation__diagnostics.MessageProperty.__proto__.new.call(this, name, null, {description: message, style: style, level: level});
    ;
  }).prototype = src__foundation__diagnostics.MessageProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.MessageProperty);
  dart.setLibraryUri(src__foundation__diagnostics.MessageProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics.StringProperty = class StringProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.String) {
    get quoted() {
      return this[quoted$];
    }
    set quoted(value) {
      super.quoted = value;
    }
    toJsonMap(delegate) {
      let json = super.toJsonMap(delegate);
      json[$_set]("quoted", this.quoted);
      return json;
    }
    valueToString(opts) {
      let t6;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let text = (t6 = this[_description], t6 == null ? this.value : t6);
      if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties) && text != null) {
        text = text[$replaceAll]("\n", "\\n");
      }
      if (dart.test(this.quoted) && text != null) {
        if (this.ifEmpty != null && text[$isEmpty]) return this.ifEmpty;
        return "\"" + dart.str(text) + "\"";
      }
      return dart.toString(text);
    }
  };
  (src__foundation__diagnostics.StringProperty.new = function(name, value, opts) {
    let description = opts && 'description' in opts ? opts.description : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let quoted = opts && 'quoted' in opts ? opts.quoted : true;
    let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    this[quoted$] = quoted;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1789, 15, "///\n/// See also");
    if (!(quoted != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1790, 15, "sageProperty],");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1791, 15, "r fit for sho");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1792, 15, "/    instead ");
    src__foundation__diagnostics.StringProperty.__proto__.new.call(this, name, value, {description: description, defaultValue: defaultValue, tooltip: tooltip, showName: showName, ifEmpty: ifEmpty, style: style, level: level});
    ;
  }).prototype = src__foundation__diagnostics.StringProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.StringProperty);
  const quoted$ = Symbol("StringProperty.quoted");
  dart.setLibraryUri(src__foundation__diagnostics.StringProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.StringProperty, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.StringProperty.__proto__),
    quoted: dart.finalFieldType(core.bool)
  }));
  const _is__NumProperty_default = Symbol('_is__NumProperty_default');
  src__foundation__diagnostics._NumProperty$ = dart.generic(T => {
    class _NumProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      get unit() {
        return this[unit$];
      }
      set unit(value) {
        super.unit = value;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.unit != null) json[$_set]("unit", this.unit);
        json[$_set]("numberToString", this.numberToString());
        return json;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return this.unit != null ? dart.str(this.numberToString()) + dart.str(this.unit) : this.numberToString();
      }
    }
    (_NumProperty.new = function(name, value, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[unit$] = unit;
      _NumProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, level: level, style: style});
      ;
    }).prototype = _NumProperty.prototype;
    (_NumProperty.lazy = function(name, computeValue, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[unit$] = unit;
      _NumProperty.__proto__.lazy.call(this, name, computeValue, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, style: style, level: level});
      ;
    }).prototype = _NumProperty.prototype;
    dart.addTypeTests(_NumProperty);
    _NumProperty.prototype[_is__NumProperty_default] = true;
    const unit$ = Symbol("_NumProperty.unit");
    dart.setLibraryUri(_NumProperty, "package:flutter_web/src/foundation/diagnostics.dart");
    dart.setFieldSignature(_NumProperty, () => ({
      __proto__: dart.getFields(_NumProperty.__proto__),
      unit: dart.finalFieldType(core.String)
    }));
    return _NumProperty;
  });
  src__foundation__diagnostics._NumProperty = src__foundation__diagnostics._NumProperty$();
  dart.addTypeTests(src__foundation__diagnostics._NumProperty, _is__NumProperty_default);
  src__foundation__diagnostics.DoubleProperty = class DoubleProperty extends src__foundation__diagnostics._NumProperty$(core.double) {
    numberToString() {
      return src__foundation__debug.debugFormatDouble(this.value);
    }
  };
  (src__foundation__diagnostics.DoubleProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1926, 15, "numberToString()");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1927, 15, "rty describin");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1928, 15, "ue] with an o");
    src__foundation__diagnostics.DoubleProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, showName: showName, style: style, level: level});
    ;
  }).prototype = src__foundation__diagnostics.DoubleProperty.prototype;
  (src__foundation__diagnostics.DoubleProperty.lazy = function(name, computeValue, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1956, 15, "   name,\n    val");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1957, 15, "fNull,\n    un");
    src__foundation__diagnostics.DoubleProperty.__proto__.lazy.call(this, name, computeValue, {showName: showName, ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, level: level});
    ;
  }).prototype = src__foundation__diagnostics.DoubleProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DoubleProperty);
  dart.setMethodSignature(src__foundation__diagnostics.DoubleProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DoubleProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DoubleProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics.IntProperty = class IntProperty extends src__foundation__diagnostics._NumProperty$(core.int) {
    numberToString() {
      return dart.toString(this.value);
    }
  };
  (src__foundation__diagnostics.IntProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1989, 15, " defaultValue,\n ");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1990, 15, "  );\n\n  @over");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 1991, 15, "berToString()");
    src__foundation__diagnostics.IntProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, unit: unit, defaultValue: defaultValue, level: level});
    ;
  }).prototype = src__foundation__diagnostics.IntProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.IntProperty);
  dart.setMethodSignature(src__foundation__diagnostics.IntProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.IntProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.IntProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics.PercentProperty = class PercentProperty extends src__foundation__diagnostics.DoubleProperty {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (this.value == null) return dart.toString(this.value);
      return this.unit != null ? dart.str(this.numberToString()) + " " + dart.str(this.unit) : this.numberToString();
    }
    numberToString() {
      if (this.value == null) return dart.toString(this.value);
      return (this.value[$clamp](0.0, 1.0) * 100.0)[$toStringAsFixed](1) + "%";
    }
  };
  (src__foundation__diagnostics.PercentProperty.new = function(name, fraction, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2025, 15, " [double] to bet");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2026, 15, "formats it as");
    src__foundation__diagnostics.PercentProperty.__proto__.new.call(this, name, fraction, {ifNull: ifNull, showName: showName, tooltip: tooltip, unit: unit, level: level});
    ;
  }).prototype = src__foundation__diagnostics.PercentProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.PercentProperty);
  dart.setLibraryUri(src__foundation__diagnostics.PercentProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics.FlagProperty = class FlagProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.bool) {
    get ifTrue() {
      return this[ifTrue$];
    }
    set ifTrue(value) {
      super.ifTrue = value;
    }
    get ifFalse() {
      return this[ifFalse$];
    }
    set ifFalse(value) {
      super.ifFalse = value;
    }
    toJsonMap(delegate) {
      let json = super.toJsonMap(delegate);
      if (this.ifTrue != null) json[$_set]("ifTrue", this.ifTrue);
      if (this.ifFalse != null) json[$_set]("ifFalse", this.ifFalse);
      return json;
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (dart.equals(this.value, true)) {
        if (this.ifTrue != null) return this.ifTrue;
      } else if (dart.equals(this.value, false)) {
        if (this.ifFalse != null) return this.ifFalse;
      }
      return super.valueToString({parentConfiguration: parentConfiguration});
    }
    get showName() {
      if (this.value == null || dart.equals(this.value, true) && this.ifTrue == null || dart.equals(this.value, false) && this.ifFalse == null) {
        return true;
      }
      return super.showName;
    }
    get level() {
      if (dart.equals(this.value, true)) {
        if (this.ifTrue == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
      }
      if (dart.equals(this.value, false)) {
        if (this.ifFalse == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
      }
      return super.level;
    }
  };
  (src__foundation__diagnostics.FlagProperty.new = function(name, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let ifTrue = opts && 'ifTrue' in opts ? opts.ifTrue : null;
    let ifFalse = opts && 'ifFalse' in opts ? opts.ifFalse : null;
    let showName = opts && 'showName' in opts ? opts.showName : false;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    this[ifTrue$] = ifTrue;
    this[ifFalse$] = ifFalse;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2106, 15, "e also:\n///\n/// ");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2107, 15, "perty], which");
    if (!(ifTrue != null || ifFalse != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2108, 15, " behavior describing whether\n/// ");
    src__foundation__diagnostics.FlagProperty.__proto__.new.call(this, name, value, {showName: showName, defaultValue: defaultValue, level: level});
    ;
  }).prototype = src__foundation__diagnostics.FlagProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.FlagProperty);
  const ifTrue$ = Symbol("FlagProperty.ifTrue");
  const ifFalse$ = Symbol("FlagProperty.ifFalse");
  dart.setGetterSignature(src__foundation__diagnostics.FlagProperty, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics.FlagProperty.__proto__),
    showName: core.bool
  }));
  dart.setLibraryUri(src__foundation__diagnostics.FlagProperty, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.FlagProperty, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.FlagProperty.__proto__),
    ifTrue: dart.finalFieldType(core.String),
    ifFalse: dart.finalFieldType(core.String)
  }));
  const _is_IterableProperty_default = Symbol('_is_IterableProperty_default');
  src__foundation__diagnostics.IterableProperty$ = dart.generic(T => {
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class IterableProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.Iterable$(T)) {
      valueToString(opts) {
        let t6;
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        if (dart.test(this.value[$isEmpty])) {
          t6 = this.ifEmpty;
          return t6 == null ? "[]" : t6;
        }
        let formattedValues = this.value[$map](core.String, dart.fn(v => {
          if (dart.wrapType(T)[$_equals](dart.wrapType(core.double)) && typeof v == 'number') {
            return src__foundation__debug.debugFormatDouble(v);
          } else {
            return dart.toString(v);
          }
        }, TToString()));
        if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
          return "[" + dart.str(formattedValues[$join](", ")) + "]";
        }
        return formattedValues[$join](dart.test(src__foundation__diagnostics._isSingleLine(this.style)) ? ", " : "\n");
      }
      get level() {
        if (this.ifEmpty == null && this.value != null && dart.test(this.value[$isEmpty]) && !dart.equals(super.level, src__foundation__diagnostics.DiagnosticLevel.hidden)) return src__foundation__diagnostics.DiagnosticLevel.fine;
        return super.level;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.value != null) {
          json[$_set]("values", this.value[$map](core.String, dart.fn(value => dart.toString(value), TToString()))[$toList]());
        }
        return json;
      }
    }
    (IterableProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : "[]";
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2204, 15, "/// elements ");
      if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2205, 15, "[ifEmpty] equals");
      if (!(showSeparator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2206, 15, "tes that an\n  /// emp");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2207, 15, "e] is not int");
      IterableProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, ifNull: ifNull, ifEmpty: ifEmpty, style: style, showName: showName, showSeparator: showSeparator, level: level});
      ;
    }).prototype = IterableProperty.prototype;
    dart.addTypeTests(IterableProperty);
    IterableProperty.prototype[_is_IterableProperty_default] = true;
    dart.setLibraryUri(IterableProperty, "package:flutter_web/src/foundation/diagnostics.dart");
    return IterableProperty;
  });
  src__foundation__diagnostics.IterableProperty = src__foundation__diagnostics.IterableProperty$();
  dart.addTypeTests(src__foundation__diagnostics.IterableProperty, _is_IterableProperty_default);
  const _is_EnumProperty_default = Symbol('_is_EnumProperty_default');
  src__foundation__diagnostics.EnumProperty$ = dart.generic(T => {
    class EnumProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return src__foundation__diagnostics.describeEnum(this.value);
      }
    }
    (EnumProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2287, 15, ")).toList();\n");
      EnumProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, level: level});
      ;
    }).prototype = EnumProperty.prototype;
    dart.addTypeTests(EnumProperty);
    EnumProperty.prototype[_is_EnumProperty_default] = true;
    dart.setLibraryUri(EnumProperty, "package:flutter_web/src/foundation/diagnostics.dart");
    return EnumProperty;
  });
  src__foundation__diagnostics.EnumProperty = src__foundation__diagnostics.EnumProperty$();
  dart.addTypeTests(src__foundation__diagnostics.EnumProperty, _is_EnumProperty_default);
  const _is_ObjectFlagProperty_default = Symbol('_is_ObjectFlagProperty_default');
  src__foundation__diagnostics.ObjectFlagProperty$ = dart.generic(T => {
    class ObjectFlagProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      get ifPresent() {
        return this[ifPresent$];
      }
      set ifPresent(value) {
        super.ifPresent = value;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value != null) {
          if (this.ifPresent != null) return this.ifPresent;
        } else {
          if (this.ifNull != null) return this.ifNull;
        }
        return super.valueToString({parentConfiguration: parentConfiguration});
      }
      get showName() {
        if (this.value != null && this.ifPresent == null || this.value == null && this.ifNull == null) {
          return true;
        }
        return super.showName;
      }
      get level() {
        if (this.value != null) {
          if (this.ifPresent == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
        } else {
          if (this.ifNull == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
        }
        return super.level;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.ifPresent != null) json[$_set]("ifPresent", this.ifPresent);
        return json;
      }
    }
    (ObjectFlagProperty.new = function(name, value, opts) {
      let ifPresent = opts && 'ifPresent' in opts ? opts.ifPresent : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : false;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[ifPresent$] = ifPresent;
      if (!(ifPresent != null || ifNull != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2335, 15, "vides similar functionality describ");
      if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2336, 15, "  a [value] is t");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2337, 15, "ss ObjectFlag");
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: showName, ifNull: ifNull, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    (ObjectFlagProperty.has = function(name, value, opts) {
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2356, 15, " this.ifPres");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2357, 15, "fNull,\n    bo");
      this[ifPresent$] = "has " + dart.str(name);
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: false, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    dart.addTypeTests(ObjectFlagProperty);
    ObjectFlagProperty.prototype[_is_ObjectFlagProperty_default] = true;
    const ifPresent$ = Symbol("ObjectFlagProperty.ifPresent");
    dart.setGetterSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getGetters(ObjectFlagProperty.__proto__),
      showName: core.bool
    }));
    dart.setLibraryUri(ObjectFlagProperty, "package:flutter_web/src/foundation/diagnostics.dart");
    dart.setFieldSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getFields(ObjectFlagProperty.__proto__),
      ifPresent: dart.finalFieldType(core.String)
    }));
    return ObjectFlagProperty;
  });
  src__foundation__diagnostics.ObjectFlagProperty = src__foundation__diagnostics.ObjectFlagProperty$();
  dart.addTypeTests(src__foundation__diagnostics.ObjectFlagProperty, _is_ObjectFlagProperty_default);
  let const$9;
  let const$10;
  src__foundation__diagnostics.DiagnosticableTree = class DiagnosticableTree extends src__foundation__diagnostics.Diagnosticable {
    toStringShallow(opts) {
      let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      if (dart.test(src__foundation__constants.kReleaseMode)) {
        return this.toString();
      }
      let result = new core.StringBuffer.new();
      result.write(this.toString());
      result.write(joiner);
      let builder = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
      this.debugFillProperties(builder);
      result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$join](joiner));
      return result.toString();
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
    }
    toStringShort() {
      return src__foundation__diagnostics.describeIdentity(this);
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new src__foundation__diagnostics.DiagnosticableTreeNode.new({name: name, value: this, style: style});
    }
    debugDescribeChildren() {
      return const$10 || (const$10 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    }
  };
  (src__foundation__diagnostics.DiagnosticableTree.new = function() {
    src__foundation__diagnostics.DiagnosticableTree.__proto__.new.call(this);
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticableTree.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableTree);
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticableTree, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticableTree.__proto__),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: core.String}),
    debugDescribeChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticableTree, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics.DiagnosticableTreeNode = class DiagnosticableTreeNode extends src__foundation__diagnostics.DiagnosticableNode$(src__foundation__diagnostics.DiagnosticableTree) {
    getChildren() {
      if (this.value != null) return this.value.debugDescribeChildren();
      return const$9 || (const$9 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    }
  };
  (src__foundation__diagnostics.DiagnosticableTreeNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    src__foundation__diagnostics.DiagnosticableTreeNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticableTreeNode.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableTreeNode);
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticableTreeNode, "package:flutter_web/src/foundation/diagnostics.dart");
  src__foundation__diagnostics.DiagnosticPropertiesBuilder = class DiagnosticPropertiesBuilder extends core.Object {
    get properties() {
      return this[properties$];
    }
    set properties(value) {
      super.properties = value;
    }
    get defaultDiagnosticsTreeStyle() {
      return this[defaultDiagnosticsTreeStyle];
    }
    set defaultDiagnosticsTreeStyle(value) {
      this[defaultDiagnosticsTreeStyle] = value;
    }
    get emptyBodyDescription() {
      return this[emptyBodyDescription];
    }
    set emptyBodyDescription(value) {
      this[emptyBodyDescription] = value;
    }
    add(property) {
      if (!dart.test(src__foundation__constants.kReleaseMode)) {
        this.properties[$add](property);
      }
    }
  };
  (src__foundation__diagnostics.DiagnosticPropertiesBuilder.new = function() {
    this[defaultDiagnosticsTreeStyle] = src__foundation__diagnostics.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
    this[properties$] = JSArrayOfDiagnosticsNode().of([]);
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticPropertiesBuilder.prototype;
  (src__foundation__diagnostics.DiagnosticPropertiesBuilder.fromProperties = function(properties) {
    this[defaultDiagnosticsTreeStyle] = src__foundation__diagnostics.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
    this[properties$] = properties;
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticPropertiesBuilder.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticPropertiesBuilder);
  const properties$ = Symbol("DiagnosticPropertiesBuilder.properties");
  const defaultDiagnosticsTreeStyle = Symbol("DiagnosticPropertiesBuilder.defaultDiagnosticsTreeStyle");
  const emptyBodyDescription = Symbol("DiagnosticPropertiesBuilder.emptyBodyDescription");
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticPropertiesBuilder.__proto__),
    add: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticsNode])
  }));
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticPropertiesBuilder, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticPropertiesBuilder.__proto__),
    properties: dart.finalFieldType(core.List$(src__foundation__diagnostics.DiagnosticsNode)),
    defaultDiagnosticsTreeStyle: dart.fieldType(src__foundation__diagnostics.DiagnosticsTreeStyle),
    emptyBodyDescription: dart.fieldType(core.String)
  }));
  src__foundation__diagnostics.DiagnosticsSerializationDelegate = class DiagnosticsSerializationDelegate extends core.Object {};
  (src__foundation__diagnostics.DiagnosticsSerializationDelegate[dart.mixinNew] = function() {
  }).prototype = src__foundation__diagnostics.DiagnosticsSerializationDelegate.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsSerializationDelegate);
  dart.setLibraryUri(src__foundation__diagnostics.DiagnosticsSerializationDelegate, "package:flutter_web/src/foundation/diagnostics.dart");
  let const$11;
  src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate = class _DefaultDiagnosticsSerializationDelegate extends core.Object {
    additionalNodeProperties(node) {
      return const$11 || (const$11 = dart.constMap(core.String, core.Object, []));
    }
    delegateForNode(node) {
      return dart.notNull(this.subtreeDepth) > 0 ? this.copyWith({subtreeDepth: dart.notNull(this.subtreeDepth) - 1}) : this;
    }
    get expandPropertyValues() {
      return false;
    }
    filterChildren(nodes, owner) {
      return nodes;
    }
    filterProperties(nodes, owner) {
      return nodes;
    }
    truncateNodesList(nodes, owner) {
      return nodes;
    }
    copyWith(opts) {
      let t6, t6$;
      let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : null;
      let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : null;
      return new src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate.new({subtreeDepth: (t6 = subtreeDepth, t6 == null ? this.subtreeDepth : t6), includeProperties: (t6$ = includeProperties, t6$ == null ? this.includeProperties : t6$)});
    }
  };
  (src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate.new = function(opts) {
    let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : false;
    let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : 0;
    this.includeProperties = includeProperties;
    this.subtreeDepth = subtreeDepth;
    ;
  }).prototype = src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate.prototype;
  dart.addTypeTests(src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate);
  src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate[dart.implements] = () => [src__foundation__diagnostics.DiagnosticsSerializationDelegate];
  dart.setMethodSignature(src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate.__proto__),
    additionalNodeProperties: dart.fnType(core.Map$(core.String, core.Object), [src__foundation__diagnostics.DiagnosticsNode]),
    delegateForNode: dart.fnType(src__foundation__diagnostics.DiagnosticsSerializationDelegate, [src__foundation__diagnostics.DiagnosticsNode]),
    filterChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [core.List$(src__foundation__diagnostics.DiagnosticsNode), src__foundation__diagnostics.DiagnosticsNode]),
    filterProperties: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [core.List$(src__foundation__diagnostics.DiagnosticsNode), src__foundation__diagnostics.DiagnosticsNode]),
    truncateNodesList: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [core.List$(src__foundation__diagnostics.DiagnosticsNode), src__foundation__diagnostics.DiagnosticsNode]),
    copyWith: dart.fnType(src__foundation__diagnostics.DiagnosticsSerializationDelegate, [], {includeProperties: core.bool, subtreeDepth: core.int})
  }));
  dart.setGetterSignature(src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate.__proto__),
    expandPropertyValues: core.bool
  }));
  dart.setLibraryUri(src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate, "package:flutter_web/src/foundation/diagnostics.dart");
  dart.setFieldSignature(src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics._DefaultDiagnosticsSerializationDelegate.__proto__),
    includeProperties: dart.finalFieldType(core.bool),
    subtreeDepth: dart.finalFieldType(core.int)
  }));
  src__foundation__diagnostics._isSingleLine = function(style) {
    return dart.equals(style, src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine);
  };
  src__foundation__diagnostics.shortHash = function(object) {
    return dart.hashCode(object)[$toUnsigned](20)[$toRadixString](16)[$padLeft](5, "0");
  };
  src__foundation__diagnostics.describeIdentity = function(object) {
    return dart.str(dart.runtimeType(object)) + "#" + dart.str(src__foundation__diagnostics.shortHash(object));
  };
  src__foundation__diagnostics.describeEnum = function(enumEntry) {
    let description = dart.toString(enumEntry);
    let indexOfDot = description[$indexOf](".");
    if (!(indexOfDot !== -1 && indexOfDot < description.length - 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart", 2883, 10, "e}#${shortHash(object)}';\n\n// This method exists as a w");
    return description[$substring](indexOfDot + 1);
  };
  dart.defineLazy(src__foundation__diagnostics, {
    /*src__foundation__diagnostics.sparseTextConfiguration*/get sparseTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "├─", prefixOtherLines: " ", prefixLastChildLineOne: "└─", linkCharacter: "│", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*src__foundation__diagnostics.dashedTextConfiguration*/get dashedTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "╎╌", prefixLastChildLineOne: "└╌", prefixOtherLines: " ", linkCharacter: "╎", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*src__foundation__diagnostics.denseTextConfiguration*/get denseTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", lineBreakProperties: false, prefixLineOne: "├", prefixOtherLines: "", prefixLastChildLineOne: "└", linkCharacter: "│", propertyPrefixIfChildren: "│", propertyPrefixNoChildren: " ", prefixOtherLinesRootNode: "", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.transitionTextConfiguration*/get transitionTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "╞═╦══ ", prefixLastChildLineOne: "╘═╦══ ", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", afterName: " ═══", afterDescriptionIfBody: ":", bodyIndent: "  ", isNameOnOwnLine: true, addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.errorTextConfiguration*/get errorTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "╞═╦", prefixLastChildLineOne: "╘═╦", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", beforeName: "══╡ ", suffixLineOne: " ╞══", manditoryFooter: "═════", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.whitespaceTextConfiguration*/get whitespaceTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.flatTextConfiguration*/get flatTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: "", prefixOtherLinesRootNode: "", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: "", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.singleLineTextConfiguration*/get singleLineTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: ""});
    },
    /*src__foundation__diagnostics.errorPropertyTextConfiguration*/get errorPropertyTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "\n", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: "", afterName: ":", isNameOnOwnLine: true});
    },
    /*src__foundation__diagnostics.shallowTextConfiguration*/get shallowTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false, showChildren: false});
    },
    /*src__foundation__diagnostics.kNoDefaultValue*/get kNoDefaultValue() {
      return dart.const(new src__foundation__diagnostics._NoDefaultValue.new());
    }
  });
  dart.defineLazy(src__foundation__constants, {
    /*src__foundation__constants.kReleaseMode*/get kReleaseMode() {
      return false;
    },
    /*src__foundation__constants.kProfileMode*/get kProfileMode() {
      return false;
    },
    /*src__foundation__constants.kDebugMode*/get kDebugMode() {
      return !dart.test(src__foundation__constants.kReleaseMode) && !dart.test(src__foundation__constants.kProfileMode);
    },
    /*src__foundation__constants.precisionErrorTolerance*/get precisionErrorTolerance() {
      return 1e-10;
    },
    /*src__foundation__constants.kIsWeb*/get kIsWeb() {
      return 0 === 0.0;
    }
  });
  const _results = dart.privateName(src__foundation__basic_types, "_results");
  const _prefillIterator$ = dart.privateName(src__foundation__basic_types, "_prefillIterator");
  const _precacheEntireList = dart.privateName(src__foundation__basic_types, "_precacheEntireList");
  const _fillNext = dart.privateName(src__foundation__basic_types, "_fillNext");
  const _is_CachingIterable_default = Symbol('_is_CachingIterable_default');
  src__foundation__basic_types.CachingIterable$ = dart.generic(E => {
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let _LazyListIteratorOfE = () => (_LazyListIteratorOfE = dart.constFn(src__foundation__basic_types._LazyListIterator$(E)))();
    let CachingIterableOfE = () => (CachingIterableOfE = dart.constFn(src__foundation__basic_types.CachingIterable$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    class CachingIterable extends collection.IterableBase$(E) {
      get iterator() {
        return new (_LazyListIteratorOfE()).new(this);
      }
      map(T, f) {
        return new (src__foundation__basic_types.CachingIterable$(T)).new(super[$map](T, f)[$iterator]);
      }
      where(test) {
        return new (CachingIterableOfE()).new(super[$where](test)[$iterator]);
      }
      expand(T, f) {
        return new (src__foundation__basic_types.CachingIterable$(T)).new(super[$expand](T, f)[$iterator]);
      }
      take(count) {
        return new (CachingIterableOfE()).new(super[$take](count)[$iterator]);
      }
      takeWhile(test) {
        return new (CachingIterableOfE()).new(super[$takeWhile](test)[$iterator]);
      }
      skip(count) {
        return new (CachingIterableOfE()).new(super[$skip](count)[$iterator]);
      }
      skipWhile(test) {
        return new (CachingIterableOfE()).new(super[$skipWhile](test)[$iterator]);
      }
      get length() {
        this[_precacheEntireList]();
        return this[_results][$length];
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        this[_precacheEntireList]();
        return ListOfE().from(this[_results], {growable: growable});
      }
      [_precacheEntireList]() {
        while (dart.test(this[_fillNext]())) {
        }
      }
      [_fillNext]() {
        if (!dart.test(this[_prefillIterator$].moveNext())) return false;
        this[_results][$add](this[_prefillIterator$].current);
        return true;
      }
    }
    (CachingIterable.new = function(_prefillIterator) {
      this[_results] = JSArrayOfE().of([]);
      this[_prefillIterator$] = _prefillIterator;
      CachingIterable.__proto__.new.call(this);
      ;
    }).prototype = CachingIterable.prototype;
    dart.addTypeTests(CachingIterable);
    CachingIterable.prototype[_is_CachingIterable_default] = true;
    dart.setMethodSignature(CachingIterable, () => ({
      __proto__: dart.getMethods(CachingIterable.__proto__),
      [_precacheEntireList]: dart.fnType(dart.void, []),
      [_fillNext]: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(CachingIterable, () => ({
      __proto__: dart.getGetters(CachingIterable.__proto__),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E)
    }));
    dart.setLibraryUri(CachingIterable, "package:flutter_web/src/foundation/basic_types.dart");
    dart.setFieldSignature(CachingIterable, () => ({
      __proto__: dart.getFields(CachingIterable.__proto__),
      [_prefillIterator$]: dart.finalFieldType(core.Iterator$(E)),
      [_results]: dart.finalFieldType(core.List$(E))
    }));
    dart.defineExtensionMethods(CachingIterable, [
      'map',
      'where',
      'expand',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'toList'
    ]);
    dart.defineExtensionAccessors(CachingIterable, ['iterator', 'length']);
    return CachingIterable;
  });
  src__foundation__basic_types.CachingIterable = src__foundation__basic_types.CachingIterable$();
  dart.addTypeTests(src__foundation__basic_types.CachingIterable, _is_CachingIterable_default);
  const _owner$ = dart.privateName(src__foundation__basic_types, "_owner");
  const _index = dart.privateName(src__foundation__basic_types, "_index");
  const _is__LazyListIterator_default = Symbol('_is__LazyListIterator_default');
  src__foundation__basic_types._LazyListIterator$ = dart.generic(E => {
    class _LazyListIterator extends core.Object {
      get current() {
        if (!(dart.notNull(this[_index]) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/basic_types.dart", 203, 12, "_index >= 0");
        if (dart.notNull(this[_index]) < 0 || this[_index] == this[_owner$][_results][$length]) return null;
        return this[_owner$][_results][$_get](this[_index]);
      }
      moveNext() {
        if (dart.notNull(this[_index]) >= dart.notNull(this[_owner$][_results][$length])) return false;
        this[_index] = dart.notNull(this[_index]) + 1;
        if (this[_index] == this[_owner$][_results][$length]) return this[_owner$][_fillNext]();
        return true;
      }
    }
    (_LazyListIterator.new = function(_owner) {
      this[_owner$] = _owner;
      this[_index] = -1;
      ;
    }).prototype = _LazyListIterator.prototype;
    dart.addTypeTests(_LazyListIterator);
    _LazyListIterator.prototype[_is__LazyListIterator_default] = true;
    _LazyListIterator[dart.implements] = () => [core.Iterator$(E)];
    dart.setMethodSignature(_LazyListIterator, () => ({
      __proto__: dart.getMethods(_LazyListIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_LazyListIterator, () => ({
      __proto__: dart.getGetters(_LazyListIterator.__proto__),
      current: E
    }));
    dart.setLibraryUri(_LazyListIterator, "package:flutter_web/src/foundation/basic_types.dart");
    dart.setFieldSignature(_LazyListIterator, () => ({
      __proto__: dart.getFields(_LazyListIterator.__proto__),
      [_owner$]: dart.finalFieldType(src__foundation__basic_types.CachingIterable$(E)),
      [_index]: dart.fieldType(core.int)
    }));
    return _LazyListIterator;
  });
  src__foundation__basic_types._LazyListIterator = src__foundation__basic_types._LazyListIterator$();
  dart.addTypeTests(src__foundation__basic_types._LazyListIterator, _is__LazyListIterator_default);
  const _is_Factory_default = Symbol('_is_Factory_default');
  src__foundation__basic_types.Factory$ = dart.generic(T => {
    class Factory extends core.Object {
      get _constructor() {
        return this[constructor$];
      }
      set _constructor(value) {
        super._constructor = value;
      }
      get type() {
        return dart.wrapType(T);
      }
      toString() {
        return "Factory(type: " + dart.str(this.type) + ")";
      }
    }
    (Factory.new = function(constructor) {
      this[constructor$] = constructor;
      if (!(constructor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/basic_types.dart", 222, 44, "constructor != null");
      ;
    }).prototype = Factory.prototype;
    dart.addTypeTests(Factory);
    Factory.prototype[_is_Factory_default] = true;
    const constructor$ = Symbol("Factory.constructor");
    dart.setGetterSignature(Factory, () => ({
      __proto__: dart.getGetters(Factory.__proto__),
      type: core.Type
    }));
    dart.setLibraryUri(Factory, "package:flutter_web/src/foundation/basic_types.dart");
    dart.setFieldSignature(Factory, () => ({
      __proto__: dart.getFields(Factory.__proto__),
      _constructor: dart.finalFieldType(dart.fnType(T, []))
    }));
    dart.defineExtensionMethods(Factory, ['toString']);
    return Factory;
  });
  src__foundation__basic_types.Factory = src__foundation__basic_types.Factory$();
  dart.addTypeTests(src__foundation__basic_types.Factory, _is_Factory_default);
  const _value$ = dart.privateName(src__foundation__synchronous_future, "_value");
  const _is_SynchronousFuture_default = Symbol('_is_SynchronousFuture_default');
  src__foundation__synchronous_future.SynchronousFuture$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    class SynchronousFuture extends core.Object {
      asStream() {
        let controller = StreamControllerOfT().new();
        controller.add(this[_value$]);
        controller.close();
        return controller.stream;
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return CompleterOfT().new().future;
      }
      then(E, f, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let result = f(this[_value$]);
        if (async.Future$(E).is(result)) return result;
        return new (src__foundation__synchronous_future.SynchronousFuture$(E)).new(E._check(result));
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidTodynamic()._check(onTimeout);
        return FutureOfT().value(this[_value$]).timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)});
      }
      whenComplete(action) {
        try {
          let result = action();
          if (async.Future.is(result)) return result.then(T, dart.fn(value => this[_value$], dynamicToT()));
          return this;
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          return FutureOfT().error(e, stack);
        }
      }
    }
    (SynchronousFuture.new = function(_value) {
      this[_value$] = _value;
      ;
    }).prototype = SynchronousFuture.prototype;
    SynchronousFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(SynchronousFuture);
    SynchronousFuture.prototype[_is_SynchronousFuture_default] = true;
    SynchronousFuture[dart.implements] = () => [async.Future$(T)];
    dart.setMethodSignature(SynchronousFuture, () => ({
      __proto__: dart.getMethods(SynchronousFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}),
      then: dart.gFnType(E => [async.Future$(E), [dart.fnType(dart.dynamic, [T])], {onError: core.Function}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: core.Object}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.dynamic, [])])
    }));
    dart.setLibraryUri(SynchronousFuture, "package:flutter_web/src/foundation/synchronous_future.dart");
    dart.setFieldSignature(SynchronousFuture, () => ({
      __proto__: dart.getFields(SynchronousFuture.__proto__),
      [_value$]: dart.finalFieldType(T)
    }));
    return SynchronousFuture;
  });
  src__foundation__synchronous_future.SynchronousFuture = src__foundation__synchronous_future.SynchronousFuture$();
  dart.addTypeTests(src__foundation__synchronous_future.SynchronousFuture, _is_SynchronousFuture_default);
  src__foundation__unicode.Unicode = class Unicode extends core.Object {};
  (src__foundation__unicode.Unicode.__ = function() {
    ;
  }).prototype = src__foundation__unicode.Unicode.prototype;
  dart.addTypeTests(src__foundation__unicode.Unicode);
  dart.setLibraryUri(src__foundation__unicode.Unicode, "package:flutter_web/src/foundation/unicode.dart");
  dart.defineLazy(src__foundation__unicode.Unicode, {
    /*src__foundation__unicode.Unicode.LRE*/get LRE() {
      return "‪";
    },
    /*src__foundation__unicode.Unicode.RLE*/get RLE() {
      return "‫";
    },
    /*src__foundation__unicode.Unicode.PDF*/get PDF() {
      return "‬";
    },
    /*src__foundation__unicode.Unicode.LRO*/get LRO() {
      return "‭";
    },
    /*src__foundation__unicode.Unicode.RLO*/get RLO() {
      return "‮";
    },
    /*src__foundation__unicode.Unicode.LRI*/get LRI() {
      return "⁦";
    },
    /*src__foundation__unicode.Unicode.RLI*/get RLI() {
      return "⁧";
    },
    /*src__foundation__unicode.Unicode.FSI*/get FSI() {
      return "⁨";
    },
    /*src__foundation__unicode.Unicode.PDI*/get PDI() {
      return "⁩";
    },
    /*src__foundation__unicode.Unicode.LRM*/get LRM() {
      return "‎";
    },
    /*src__foundation__unicode.Unicode.RLM*/get RLM() {
      return "‏";
    },
    /*src__foundation__unicode.Unicode.ALM*/get ALM() {
      return "؜";
    }
  });
  src__foundation__key.Key = class Key extends core.Object {};
  (src__foundation__key.Key.empty = function() {
    ;
  }).prototype = src__foundation__key.Key.prototype;
  dart.addTypeTests(src__foundation__key.Key);
  dart.setLibraryUri(src__foundation__key.Key, "package:flutter_web/src/foundation/key.dart");
  src__foundation__key.LocalKey = class LocalKey extends src__foundation__key.Key {};
  (src__foundation__key.LocalKey.new = function() {
    src__foundation__key.LocalKey.__proto__.empty.call(this);
    ;
  }).prototype = src__foundation__key.LocalKey.prototype;
  dart.addTypeTests(src__foundation__key.LocalKey);
  dart.setLibraryUri(src__foundation__key.LocalKey, "package:flutter_web/src/foundation/key.dart");
  const _is_ValueKey_default = Symbol('_is_ValueKey_default');
  src__foundation__key.ValueKey$ = dart.generic(T => {
    let ValueKeyOfT = () => (ValueKeyOfT = dart.constFn(src__foundation__key.ValueKey$(T)))();
    let _TypeLiteralOfValueKeyOfT = () => (_TypeLiteralOfValueKeyOfT = dart.constFn(src__foundation__key._TypeLiteral$(ValueKeyOfT())))();
    class ValueKey extends src__foundation__key.LocalKey {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
        let typedOther = ValueKeyOfT()._check(other);
        return dart.equals(this.value, typedOther.value);
      }
      get hashCode() {
        return ui$.hashValues(this[$runtimeType], this.value);
      }
      toString() {
        let valueString = dart.wrapType(T)[$_equals](dart.wrapType(core.String)) ? "<'" + dart.str(this.value) + "'>" : "<" + dart.str(this.value) + ">";
        if (dart.equals(this[$runtimeType], new (_TypeLiteralOfValueKeyOfT()).new().type)) return "[" + valueString + "]";
        return "[" + dart.str(dart.wrapType(T)) + " " + valueString + "]";
      }
    }
    (ValueKey.new = function(value) {
      this[value$] = value;
      ValueKey.__proto__.new.call(this);
      ;
    }).prototype = ValueKey.prototype;
    dart.addTypeTests(ValueKey);
    ValueKey.prototype[_is_ValueKey_default] = true;
    const value$ = Symbol("ValueKey.value");
    dart.setLibraryUri(ValueKey, "package:flutter_web/src/foundation/key.dart");
    dart.setFieldSignature(ValueKey, () => ({
      __proto__: dart.getFields(ValueKey.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(ValueKey, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ValueKey, ['hashCode']);
    return ValueKey;
  });
  src__foundation__key.ValueKey = src__foundation__key.ValueKey$();
  dart.addTypeTests(src__foundation__key.ValueKey, _is_ValueKey_default);
  const _is__TypeLiteral_default = Symbol('_is__TypeLiteral_default');
  src__foundation__key._TypeLiteral$ = dart.generic(T => {
    class _TypeLiteral extends core.Object {
      get type() {
        return dart.wrapType(T);
      }
    }
    (_TypeLiteral.new = function() {
      ;
    }).prototype = _TypeLiteral.prototype;
    dart.addTypeTests(_TypeLiteral);
    _TypeLiteral.prototype[_is__TypeLiteral_default] = true;
    dart.setGetterSignature(_TypeLiteral, () => ({
      __proto__: dart.getGetters(_TypeLiteral.__proto__),
      type: core.Type
    }));
    dart.setLibraryUri(_TypeLiteral, "package:flutter_web/src/foundation/key.dart");
    return _TypeLiteral;
  });
  src__foundation__key._TypeLiteral = src__foundation__key._TypeLiteral$();
  dart.addTypeTests(src__foundation__key._TypeLiteral, _is__TypeLiteral_default);
  src__foundation__profile.profile = function(func) {
    if (dart.test(src__foundation__profile._kReleaseMode)) return;
    func();
  };
  dart.defineLazy(src__foundation__profile, {
    /*src__foundation__profile._kReleaseMode*/get _kReleaseMode() {
      return false;
    }
  });
  src__foundation__collections.setEquals = function(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    for (let value of a) {
      if (!dart.test(b.contains(value))) return false;
    }
    return true;
  };
  src__foundation__collections.listEquals = function(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    for (let index = 0; index < dart.notNull(a[$length]); index = index + 1) {
      if (!dart.equals(a[$_get](index), b[$_get](index))) return false;
    }
    return true;
  };
  src__foundation__licenses.LicenseParagraph = class LicenseParagraph extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      super.indent = value;
    }
  };
  (src__foundation__licenses.LicenseParagraph.new = function(text, indent) {
    this[text$] = text;
    this[indent$] = indent;
    ;
  }).prototype = src__foundation__licenses.LicenseParagraph.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseParagraph);
  const text$ = Symbol("LicenseParagraph.text");
  const indent$ = Symbol("LicenseParagraph.indent");
  dart.setLibraryUri(src__foundation__licenses.LicenseParagraph, "package:flutter_web/src/foundation/licenses.dart");
  dart.setFieldSignature(src__foundation__licenses.LicenseParagraph, () => ({
    __proto__: dart.getFields(src__foundation__licenses.LicenseParagraph.__proto__),
    text: dart.finalFieldType(core.String),
    indent: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__foundation__licenses.LicenseParagraph, {
    /*src__foundation__licenses.LicenseParagraph.centeredIndent*/get centeredIndent() {
      return -1;
    }
  });
  src__foundation__licenses.LicenseEntry = class LicenseEntry extends core.Object {};
  (src__foundation__licenses.LicenseEntry.new = function() {
    ;
  }).prototype = src__foundation__licenses.LicenseEntry.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseEntry);
  dart.setLibraryUri(src__foundation__licenses.LicenseEntry, "package:flutter_web/src/foundation/licenses.dart");
  const _name$2 = dart.privateName(src__foundation__licenses, "_name");
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState = class _LicenseEntryWithLineBreaksParserState extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.prototype;
  dart.addTypeTests(src__foundation__licenses._LicenseEntryWithLineBreaksParserState);
  dart.setLibraryUri(src__foundation__licenses._LicenseEntryWithLineBreaksParserState, "package:flutter_web/src/foundation/licenses.dart");
  dart.setFieldSignature(src__foundation__licenses._LicenseEntryWithLineBreaksParserState, () => ({
    __proto__: dart.getFields(src__foundation__licenses._LicenseEntryWithLineBreaksParserState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__foundation__licenses._LicenseEntryWithLineBreaksParserState, ['toString']);
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph = dart.const(new src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new(0, "_LicenseEntryWithLineBreaksParserState.beforeParagraph"));
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph = dart.const(new src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new(1, "_LicenseEntryWithLineBreaksParserState.inParagraph"));
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.values = dart.constList([src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph, src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph], src__foundation__licenses._LicenseEntryWithLineBreaksParserState);
  src__foundation__licenses.LicenseEntryWithLineBreaks = class LicenseEntryWithLineBreaks extends src__foundation__licenses.LicenseEntry {
    get packages() {
      return this[packages$];
    }
    set packages(value) {
      super.packages = value;
    }
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get paragraphs() {
      return new (SyncIterableOfLicenseParagraph()).new((function* paragraphs() {
        let lineStart = 0;
        let currentPosition = 0;
        let lastLineIndent = 0;
        let currentLineIndent = 0;
        let currentParagraphIndentation = null;
        let state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
        let lines = JSArrayOfString().of([]);
        const addLine = () => {
          if (!(lineStart < currentPosition)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/licenses.dart", 152, 14, "lineStart < currentPosition");
          lines[$add](this.text[$substring](lineStart, currentPosition));
        };
        dart.fn(addLine, VoidTovoid());
        function getParagraph() {
          if (!dart.test(lines[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/licenses.dart", 157, 14, "lines.isNotEmpty");
          if (!(currentParagraphIndentation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/licenses.dart", 158, 14, "currentParagraphIndentation != null");
          let result = new src__foundation__licenses.LicenseParagraph.new(lines[$join](" "), currentParagraphIndentation);
          if (!(result.text[$trimLeft]() === result.text)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/licenses.dart", 161, 14, "result.text.trimLeft() == result.text");
          if (!result.text[$isNotEmpty]) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/licenses.dart", 162, 14, "result.text.isNotEmpty");
          lines[$clear]();
          return result;
        }
        dart.fn(getParagraph, VoidToLicenseParagraph());
        while (currentPosition < this.text.length) {
          switch (state) {
            case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph:
            {
              if (!(lineStart === currentPosition)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/licenses.dart", 170, 18, "lineStart == currentPosition");
              let labelState = this.text[$_get](currentPosition);
              SL0:
                while (true) {
                  switch (labelState) {
                    case " ":
                    {
                      lineStart = currentPosition + 1;
                      currentLineIndent = currentLineIndent + 1;
                      state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "\t":
                    {
                      lineStart = currentPosition + 1;
                      currentLineIndent = currentLineIndent + 8;
                      state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "\n":
                    case "\f":
                    {
                      if (dart.test(lines[$isNotEmpty])) {
                        yield getParagraph();
                      }
                      lastLineIndent = 0;
                      currentLineIndent = 0;
                      currentParagraphIndentation = null;
                      lineStart = currentPosition + 1;
                      state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "[":
                    {
                      currentLineIndent = currentLineIndent + 1;
                      labelState = Symbol('_default');
                      continue SL0;
                    }
                    default:
                    {
                      if (dart.test(lines[$isNotEmpty]) && currentLineIndent > lastLineIndent) {
                        yield getParagraph();
                        currentParagraphIndentation = null;
                      }
                      if (currentParagraphIndentation == null) {
                        if (currentLineIndent > 10)
                          currentParagraphIndentation = src__foundation__licenses.LicenseParagraph.centeredIndent;
                        else
                          currentParagraphIndentation = (currentLineIndent / 3)[$truncate]();
                      }
                      state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                      break SL0;
                    }
                  }
                  break;
                }
              break;
            }
            case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph:
            {
              switch (this.text[$_get](currentPosition)) {
                case "\n":
                {
                  addLine();
                  lastLineIndent = currentLineIndent;
                  currentLineIndent = 0;
                  lineStart = currentPosition + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\f":
                {
                  addLine();
                  yield getParagraph();
                  lastLineIndent = 0;
                  currentLineIndent = 0;
                  currentParagraphIndentation = null;
                  lineStart = currentPosition + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                default:
                {
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                }
              }
              break;
            }
          }
          currentPosition = currentPosition + 1;
        }
        switch (state) {
          case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph:
          {
            if (dart.test(lines[$isNotEmpty])) {
              yield getParagraph();
            }
            break;
          }
          case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph:
          {
            addLine();
            yield getParagraph();
            break;
          }
        }
      }).bind(this));
    }
  };
  (src__foundation__licenses.LicenseEntryWithLineBreaks.new = function(packages, text) {
    this[packages$] = packages;
    this[text$0] = text;
    src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__.new.call(this);
    ;
  }).prototype = src__foundation__licenses.LicenseEntryWithLineBreaks.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseEntryWithLineBreaks);
  const packages$ = Symbol("LicenseEntryWithLineBreaks.packages");
  const text$0 = Symbol("LicenseEntryWithLineBreaks.text");
  dart.setGetterSignature(src__foundation__licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getGetters(src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__),
    paragraphs: core.Iterable$(src__foundation__licenses.LicenseParagraph)
  }));
  dart.setLibraryUri(src__foundation__licenses.LicenseEntryWithLineBreaks, "package:flutter_web/src/foundation/licenses.dart");
  dart.setFieldSignature(src__foundation__licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getFields(src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__),
    packages: dart.finalFieldType(core.List$(core.String)),
    text: dart.finalFieldType(core.String)
  }));
  src__foundation__licenses.LicenseRegistry = class LicenseRegistry extends core.Object {
    static addLicense(collector) {
      src__foundation__licenses.LicenseRegistry._collectors == null ? src__foundation__licenses.LicenseRegistry._collectors = JSArrayOfVoidToStreamOfLicenseEntry().of([]) : null;
      src__foundation__licenses.LicenseRegistry._collectors[$add](collector);
    }
    static get licenses() {
      return new (_AsyncStarImplOfLicenseEntry()).new(function* licenses(stream) {
        if (src__foundation__licenses.LicenseRegistry._collectors == null) return;
        for (let collector of src__foundation__licenses.LicenseRegistry._collectors) {
          if (stream.addStream(collector())) return;
          yield;
        }
      }).stream;
    }
  };
  (src__foundation__licenses.LicenseRegistry.__ = function() {
    ;
  }).prototype = src__foundation__licenses.LicenseRegistry.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseRegistry);
  dart.setLibraryUri(src__foundation__licenses.LicenseRegistry, "package:flutter_web/src/foundation/licenses.dart");
  dart.defineLazy(src__foundation__licenses.LicenseRegistry, {
    /*src__foundation__licenses.LicenseRegistry._collectors*/get _collectors() {
      return null;
    },
    set _collectors(_) {}
  });
  const _list = dart.privateName(src__foundation__observer_list, "_list");
  const _isDirty = dart.privateName(src__foundation__observer_list, "_isDirty");
  const _set = dart.privateName(src__foundation__observer_list, "_set");
  const _is_ObserverList_default = Symbol('_is_ObserverList_default');
  src__foundation__observer_list.ObserverList$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let HashSetOfT = () => (HashSetOfT = dart.constFn(collection.HashSet$(T)))();
    class ObserverList extends core.Iterable$(T) {
      add(item) {
        T._check(item);
        this[_isDirty] = true;
        this[_list][$add](item);
      }
      remove(item) {
        T._check(item);
        this[_isDirty] = true;
        return this[_list][$remove](item);
      }
      contains(element) {
        if (dart.notNull(this[_list][$length]) < 15) {
          return this[_list][$contains](element);
        }
        if (dart.test(this[_isDirty])) {
          if (this[_set] == null) {
            this[_set] = HashSetOfT().from(this[_list]);
          } else {
            this[_set].clear();
            this[_set].addAll(this[_list]);
          }
          this[_isDirty] = false;
        }
        return this[_set].contains(element);
      }
      get iterator() {
        return this[_list][$iterator];
      }
      get isEmpty() {
        return this[_list][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list][$isNotEmpty];
      }
    }
    (ObserverList.new = function() {
      this[_list] = JSArrayOfT().of([]);
      this[_isDirty] = false;
      this[_set] = null;
      ObserverList.__proto__.new.call(this);
      ;
    }).prototype = ObserverList.prototype;
    dart.addTypeTests(ObserverList);
    ObserverList.prototype[_is_ObserverList_default] = true;
    dart.setMethodSignature(ObserverList, () => ({
      __proto__: dart.getMethods(ObserverList.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(ObserverList, () => ({
      __proto__: dart.getGetters(ObserverList.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(ObserverList, "package:flutter_web/src/foundation/observer_list.dart");
    dart.setFieldSignature(ObserverList, () => ({
      __proto__: dart.getFields(ObserverList.__proto__),
      [_list]: dart.finalFieldType(core.List$(T)),
      [_isDirty]: dart.fieldType(core.bool),
      [_set]: dart.fieldType(collection.HashSet$(T))
    }));
    dart.defineExtensionMethods(ObserverList, ['contains']);
    dart.defineExtensionAccessors(ObserverList, ['iterator', 'isEmpty', 'isNotEmpty']);
    return ObserverList;
  });
  src__foundation__observer_list.ObserverList = src__foundation__observer_list.ObserverList$();
  dart.addTypeTests(src__foundation__observer_list.ObserverList, _is_ObserverList_default);
  src__foundation__change_notifier.Listenable = class Listenable extends core.Object {};
  (src__foundation__change_notifier.Listenable.new = function() {
    ;
  }).prototype = src__foundation__change_notifier.Listenable.prototype;
  dart.addTypeTests(src__foundation__change_notifier.Listenable);
  dart.setLibraryUri(src__foundation__change_notifier.Listenable, "package:flutter_web/src/foundation/change_notifier.dart");
  const _is_ValueListenable_default = Symbol('_is_ValueListenable_default');
  src__foundation__change_notifier.ValueListenable$ = dart.generic(T => {
    class ValueListenable extends src__foundation__change_notifier.Listenable {}
    (ValueListenable.new = function() {
      ValueListenable.__proto__.new.call(this);
      ;
    }).prototype = ValueListenable.prototype;
    dart.addTypeTests(ValueListenable);
    ValueListenable.prototype[_is_ValueListenable_default] = true;
    dart.setLibraryUri(ValueListenable, "package:flutter_web/src/foundation/change_notifier.dart");
    return ValueListenable;
  });
  src__foundation__change_notifier.ValueListenable = src__foundation__change_notifier.ValueListenable$();
  dart.addTypeTests(src__foundation__change_notifier.ValueListenable, _is_ValueListenable_default);
  const _listeners = dart.privateName(src__foundation__change_notifier, "_listeners");
  const _debugAssertNotDisposed = dart.privateName(src__foundation__change_notifier, "_debugAssertNotDisposed");
  src__foundation__change_notifier.ChangeNotifier = class ChangeNotifier extends core.Object {
    [_debugAssertNotDisposed]() {
      if (!dart.test(dart.fn(() => {
        if (this[_listeners] == null) {
          dart.throw(src__foundation__assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " was used after being disposed.\n" + "Once you have called dispose() on a " + dart.str(this[$runtimeType]) + ", it can no longer be used."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/change_notifier.dart", 104, 12, "(() {\n      if (_listeners == null) {\n        throw FlutterError(\n          'A $runtimeType was used after being disposed.\\n'\n          'Once you have called dispose() on a $runtimeType, it can no longer be used.'\n        );\n      }\n      return true;\n    }(");
      return true;
    }
    get hasListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/change_notifier.dart", 133, 12, "(_debugAssertNotDisposed(");
      return this[_listeners].isNotEmpty;
    }
    addListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/change_notifier.dart", 142, 12, "(_debugAssertNotDisposed(");
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/change_notifier.dart", 167, 12, "(_debugAssertNotDisposed(");
      this[_listeners].remove(listener);
    }
    dispose() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/change_notifier.dart", 179, 12, "(_debugAssertNotDisposed(");
      this[_listeners] = null;
    }
    notifyListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/change_notifier.dart", 201, 12, "(_debugAssertNotDisposed(");
      if (this[_listeners] != null) {
        let localListeners = ListOfVoidTovoid().from(this[_listeners]);
        for (let listener of localListeners) {
          try {
            if (dart.test(this[_listeners].contains(listener))) listener();
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "foundation library", context: new src__foundation__assertions.ErrorDescription.new("while dispatching notifications for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfChangeNotifier()).new((function*() {
                yield new (DiagnosticsPropertyOfChangeNotifier()).new("The " + dart.str(this[$runtimeType]) + " sending notification was", this, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
              }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfChangeNotifier())}));
          }
        }
      }
    }
  };
  (src__foundation__change_notifier.ChangeNotifier.new = function() {
    this[_listeners] = new (ObserverListOfVoidTovoid()).new();
    ;
  }).prototype = src__foundation__change_notifier.ChangeNotifier.prototype;
  dart.addTypeTests(src__foundation__change_notifier.ChangeNotifier);
  src__foundation__change_notifier.ChangeNotifier[dart.implements] = () => [src__foundation__change_notifier.Listenable];
  dart.setMethodSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getMethods(src__foundation__change_notifier.ChangeNotifier.__proto__),
    [_debugAssertNotDisposed]: dart.fnType(core.bool, []),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    dispose: dart.fnType(dart.void, []),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getGetters(src__foundation__change_notifier.ChangeNotifier.__proto__),
    hasListeners: core.bool
  }));
  dart.setLibraryUri(src__foundation__change_notifier.ChangeNotifier, "package:flutter_web/src/foundation/change_notifier.dart");
  dart.setFieldSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getFields(src__foundation__change_notifier.ChangeNotifier.__proto__),
    [_listeners]: dart.fieldType(src__foundation__observer_list.ObserverList$(dart.fnType(dart.void, [])))
  }));
  const _children$ = dart.privateName(src__foundation__change_notifier, "_children");
  src__foundation__change_notifier._MergingListenable = class _MergingListenable extends src__foundation__change_notifier.Listenable {
    addListener(listener) {
      let t8;
      for (let child of this[_children$]) {
        t8 = child;
        t8 == null ? null : t8.addListener(listener);
      }
    }
    removeListener(listener) {
      let t8;
      for (let child of this[_children$]) {
        t8 = child;
        t8 == null ? null : t8.removeListener(listener);
      }
    }
    toString() {
      return "Listenable.merge([" + dart.str(this[_children$][$join](", ")) + "])";
    }
  };
  (src__foundation__change_notifier._MergingListenable.new = function(_children) {
    this[_children$] = _children;
    src__foundation__change_notifier._MergingListenable.__proto__.new.call(this);
    ;
  }).prototype = src__foundation__change_notifier._MergingListenable.prototype;
  dart.addTypeTests(src__foundation__change_notifier._MergingListenable);
  dart.setMethodSignature(src__foundation__change_notifier._MergingListenable, () => ({
    __proto__: dart.getMethods(src__foundation__change_notifier._MergingListenable.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(src__foundation__change_notifier._MergingListenable, "package:flutter_web/src/foundation/change_notifier.dart");
  dart.setFieldSignature(src__foundation__change_notifier._MergingListenable, () => ({
    __proto__: dart.getFields(src__foundation__change_notifier._MergingListenable.__proto__),
    [_children$]: dart.finalFieldType(core.List$(src__foundation__change_notifier.Listenable))
  }));
  dart.defineExtensionMethods(src__foundation__change_notifier._MergingListenable, ['toString']);
  const _value$0 = dart.privateName(src__foundation__change_notifier, "_value");
  const _is_ValueNotifier_default = Symbol('_is_ValueNotifier_default');
  src__foundation__change_notifier.ValueNotifier$ = dart.generic(T => {
    class ValueNotifier extends src__foundation__change_notifier.ChangeNotifier {
      get value() {
        return this[_value$0];
      }
      set value(newValue) {
        T._check(newValue);
        if (dart.equals(this[_value$0], newValue)) return;
        this[_value$0] = newValue;
        this.notifyListeners();
      }
      toString() {
        return dart.str(src__foundation__diagnostics.describeIdentity(this)) + "(" + dart.str(this.value) + ")";
      }
    }
    (ValueNotifier.new = function(_value) {
      this[_value$0] = _value;
      ValueNotifier.__proto__.new.call(this);
      ;
    }).prototype = ValueNotifier.prototype;
    dart.addTypeTests(ValueNotifier);
    ValueNotifier.prototype[_is_ValueNotifier_default] = true;
    ValueNotifier[dart.implements] = () => [src__foundation__change_notifier.ValueListenable$(T)];
    dart.setGetterSignature(ValueNotifier, () => ({
      __proto__: dart.getGetters(ValueNotifier.__proto__),
      value: T
    }));
    dart.setSetterSignature(ValueNotifier, () => ({
      __proto__: dart.getSetters(ValueNotifier.__proto__),
      value: core.Object
    }));
    dart.setLibraryUri(ValueNotifier, "package:flutter_web/src/foundation/change_notifier.dart");
    dart.setFieldSignature(ValueNotifier, () => ({
      __proto__: dart.getFields(ValueNotifier.__proto__),
      [_value$0]: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(ValueNotifier, ['toString']);
    return ValueNotifier;
  });
  src__foundation__change_notifier.ValueNotifier = src__foundation__change_notifier.ValueNotifier$();
  dart.addTypeTests(src__foundation__change_notifier.ValueNotifier, _is_ValueNotifier_default);
  src__foundation__isolates.compute = function(Q, R, callback, message, opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    return async.async(R, function* compute() {
      return callback(message);
    });
  };
  const _depth = dart.privateName(src__foundation__node, "_depth");
  const _owner = dart.privateName(src__foundation__node, "_owner");
  const _parent = dart.privateName(src__foundation__node, "_parent");
  src__foundation__node.AbstractNode = class AbstractNode extends core.Object {
    get depth() {
      return this[_depth];
    }
    redepthChild(child) {
      if (!dart.equals(child.owner, this.owner)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 52, 12, "child.owner == owner");
      if (dart.notNull(child[_depth]) <= dart.notNull(this[_depth])) {
        child[_depth] = dart.notNull(this[_depth]) + 1;
        child.redepthChildren();
      }
    }
    redepthChildren() {
    }
    get owner() {
      return this[_owner];
    }
    get attached() {
      return this[_owner] != null;
    }
    attach(owner) {
      if (!(owner != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 88, 12, "owner != null");
      if (!(this[_owner] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 89, 12, "_owner == null");
      this[_owner] = owner;
    }
    detach() {
      if (!(this[_owner] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 102, 12, "_owner != null");
      this[_owner] = null;
      if (!(this.parent == null || dart.equals(this.attached, this.parent.attached))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 104, 12, "parent == null || attached == parent.attached");
    }
    get parent() {
      return this[_parent];
    }
    adoptChild(child) {
      src__foundation__node.AbstractNode._check(child);
      if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 117, 12, "child != null");
      if (!(child[_parent] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 118, 12, "child._parent == null");
      if (!dart.test(dart.fn(() => {
        let node = this;
        while (node.parent != null)
          node = node.parent;
        if (!!dart.equals(node, child)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 122, 14, "node != child");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 119, 12, "() {\n      AbstractNode node = this;\n      while (node.parent != null) node = node.parent;\n      assert(node != child); // indicates we are about to create a cycle\n      return true;\n    }()");
      child[_parent] = this;
      if (dart.test(this.attached)) {
        child.attach(this[_owner]);
      }
      this.redepthChild(child);
    }
    dropChild(child) {
      src__foundation__node.AbstractNode._check(child);
      if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 138, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 139, 12, "child._parent == this");
      if (!dart.equals(child.attached, this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart", 140, 12, "child.attached == attached");
      child[_parent] = null;
      if (dart.test(this.attached)) {
        child.detach();
      }
    }
  };
  (src__foundation__node.AbstractNode.new = function() {
    this[_depth] = 0;
    this[_owner] = null;
    this[_parent] = null;
    ;
  }).prototype = src__foundation__node.AbstractNode.prototype;
  dart.addTypeTests(src__foundation__node.AbstractNode);
  dart.setMethodSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getMethods(src__foundation__node.AbstractNode.__proto__),
    redepthChild: dart.fnType(dart.void, [src__foundation__node.AbstractNode]),
    redepthChildren: dart.fnType(dart.void, []),
    attach: dart.fnType(dart.void, [core.Object]),
    detach: dart.fnType(dart.void, []),
    adoptChild: dart.fnType(dart.void, [core.Object]),
    dropChild: dart.fnType(dart.void, [core.Object])
  }));
  dart.setGetterSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getGetters(src__foundation__node.AbstractNode.__proto__),
    depth: core.int,
    owner: core.Object,
    attached: core.bool,
    parent: src__foundation__node.AbstractNode
  }));
  dart.setLibraryUri(src__foundation__node.AbstractNode, "package:flutter_web/src/foundation/node.dart");
  dart.setFieldSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getFields(src__foundation__node.AbstractNode.__proto__),
    [_depth]: dart.fieldType(core.int),
    [_owner]: dart.fieldType(core.Object),
    [_parent]: dart.fieldType(src__foundation__node.AbstractNode)
  }));
  const _buffer$ = dart.privateName(src__foundation__serialization, "_buffer");
  const _eightBytes = dart.privateName(src__foundation__serialization, "_eightBytes");
  const _eightBytesAsList = dart.privateName(src__foundation__serialization, "_eightBytesAsList");
  const _alignTo = dart.privateName(src__foundation__serialization, "_alignTo");
  src__foundation__serialization.WriteBuffer = class WriteBuffer extends core.Object {
    putUint8(byte) {
      this[_buffer$].add(byte);
    }
    putUint16(value) {
      this[_eightBytes][$setUint16](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 2);
    }
    putUint32(value) {
      this[_eightBytes][$setUint32](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt32(value) {
      this[_eightBytes][$setInt32](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt64(value) {
      this[_eightBytes][$setInt64](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 8);
    }
    putFloat64(value) {
      this[_alignTo](8);
      this[_eightBytes][$setFloat64](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList]);
    }
    putUint8List(list) {
      this[_buffer$].addAll(list);
    }
    putInt32List(list) {
      this[_alignTo](4);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 4 * dart.notNull(list[$length])));
    }
    putInt64List(list) {
      this[_alignTo](8);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * dart.notNull(list[$length])));
    }
    putFloat64List(list) {
      this[_alignTo](8);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * dart.notNull(list[$length])));
    }
    [_alignTo](alignment) {
      let mod = this[_buffer$].length[$modulo](alignment);
      if (mod !== 0) {
        for (let i = 0; i < dart.notNull(alignment) - mod; i = i + 1)
          this[_buffer$].add(0);
      }
    }
    done() {
      let result = this[_buffer$].buffer[$asByteData](0, this[_buffer$].lengthInBytes);
      this[_buffer$] = null;
      return result;
    }
  };
  (src__foundation__serialization.WriteBuffer.new = function() {
    this[_buffer$] = null;
    this[_eightBytes] = null;
    this[_eightBytesAsList] = null;
    this[_buffer$] = new typed_buffers$.Uint8Buffer.new();
    this[_eightBytes] = _native_typed_data.NativeByteData.new(8);
    this[_eightBytesAsList] = this[_eightBytes][$buffer][$asUint8List]();
  }).prototype = src__foundation__serialization.WriteBuffer.prototype;
  dart.addTypeTests(src__foundation__serialization.WriteBuffer);
  dart.setMethodSignature(src__foundation__serialization.WriteBuffer, () => ({
    __proto__: dart.getMethods(src__foundation__serialization.WriteBuffer.__proto__),
    putUint8: dart.fnType(dart.void, [core.int]),
    putUint16: dart.fnType(dart.void, [core.int]),
    putUint32: dart.fnType(dart.void, [core.int]),
    putInt32: dart.fnType(dart.void, [core.int]),
    putInt64: dart.fnType(dart.void, [core.int]),
    putFloat64: dart.fnType(dart.void, [core.double]),
    putUint8List: dart.fnType(dart.void, [typed_data.Uint8List]),
    putInt32List: dart.fnType(dart.void, [typed_data.Int32List]),
    putInt64List: dart.fnType(dart.void, [typed_data.Int64List]),
    putFloat64List: dart.fnType(dart.void, [typed_data.Float64List]),
    [_alignTo]: dart.fnType(dart.void, [core.int]),
    done: dart.fnType(typed_data.ByteData, [])
  }));
  dart.setLibraryUri(src__foundation__serialization.WriteBuffer, "package:flutter_web/src/foundation/serialization.dart");
  dart.setFieldSignature(src__foundation__serialization.WriteBuffer, () => ({
    __proto__: dart.getFields(src__foundation__serialization.WriteBuffer.__proto__),
    [_buffer$]: dart.fieldType(typed_buffers$.Uint8Buffer),
    [_eightBytes]: dart.fieldType(typed_data.ByteData),
    [_eightBytesAsList]: dart.fieldType(typed_data.Uint8List)
  }));
  const _position = dart.privateName(src__foundation__serialization, "_position");
  src__foundation__serialization.ReadBuffer = class ReadBuffer extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get hasRemaining() {
      return dart.notNull(this[_position]) < dart.notNull(this.data[$lengthInBytes]);
    }
    getUint8() {
      let t8;
      return this.data[$getUint8]((t8 = this[_position], this[_position] = dart.notNull(t8) + 1, t8));
    }
    getUint16() {
      let value = this.data[$getUint16](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 2;
      return value;
    }
    getUint32() {
      let value = this.data[$getUint32](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt32() {
      let value = this.data[$getInt32](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt64() {
      let value = this.data[$getInt64](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getFloat64() {
      this[_alignTo](8);
      let value = this.data[$getFloat64](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getUint8List(length) {
      let list = this.data[$buffer][$asUint8List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + dart.notNull(length);
      return list;
    }
    getInt32List(length) {
      this[_alignTo](4);
      let list = this.data[$buffer][$asInt32List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 4 * dart.notNull(length);
      return list;
    }
    getInt64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asInt64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    getFloat64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asFloat64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    [_alignTo](alignment) {
      let mod = this[_position][$modulo](alignment);
      if (mod !== 0) this[_position] = dart.notNull(this[_position]) + (dart.notNull(alignment) - mod);
    }
  };
  (src__foundation__serialization.ReadBuffer.new = function(data) {
    this[_position] = 0;
    this[data$] = data;
    if (!(data != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/foundation/serialization.dart", 109, 34, "data != null");
    ;
  }).prototype = src__foundation__serialization.ReadBuffer.prototype;
  dart.addTypeTests(src__foundation__serialization.ReadBuffer);
  const data$ = Symbol("ReadBuffer.data");
  dart.setMethodSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getMethods(src__foundation__serialization.ReadBuffer.__proto__),
    getUint8: dart.fnType(core.int, []),
    getUint16: dart.fnType(core.int, []),
    getUint32: dart.fnType(core.int, []),
    getInt32: dart.fnType(core.int, []),
    getInt64: dart.fnType(core.int, []),
    getFloat64: dart.fnType(core.double, []),
    getUint8List: dart.fnType(typed_data.Uint8List, [core.int]),
    getInt32List: dart.fnType(typed_data.Int32List, [core.int]),
    getInt64List: dart.fnType(typed_data.Int64List, [core.int]),
    getFloat64List: dart.fnType(typed_data.Float64List, [core.int]),
    [_alignTo]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getGetters(src__foundation__serialization.ReadBuffer.__proto__),
    hasRemaining: core.bool
  }));
  dart.setLibraryUri(src__foundation__serialization.ReadBuffer, "package:flutter_web/src/foundation/serialization.dart");
  dart.setFieldSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getFields(src__foundation__serialization.ReadBuffer.__proto__),
    data: dart.finalFieldType(typed_data.ByteData),
    [_position]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/flutter_web/src/foundation/assertions", {
    "package:flutter_web/src/foundation/bitfield.dart": src__foundation__bitfield,
    "package:flutter_web/src/foundation/binding.dart": src__foundation__binding,
    "package:flutter_web/src/foundation/print.dart": src__foundation__print,
    "package:flutter_web/src/foundation/platform.dart": src__foundation__platform,
    "package:flutter_web/src/foundation/debug.dart": src__foundation__debug,
    "package:flutter_web/src/foundation/assertions.dart": src__foundation__assertions,
    "package:flutter_web/src/foundation/diagnostics.dart": src__foundation__diagnostics,
    "package:flutter_web/src/foundation/constants.dart": src__foundation__constants,
    "package:flutter_web/src/foundation/basic_types.dart": src__foundation__basic_types,
    "package:flutter_web/src/foundation/synchronous_future.dart": src__foundation__synchronous_future,
    "package:flutter_web/src/foundation/unicode.dart": src__foundation__unicode,
    "package:flutter_web/src/foundation/key.dart": src__foundation__key,
    "package:flutter_web/src/foundation/profile.dart": src__foundation__profile,
    "package:flutter_web/src/foundation/collections.dart": src__foundation__collections,
    "package:flutter_web/src/foundation/licenses.dart": src__foundation__licenses,
    "package:flutter_web/src/foundation/observer_list.dart": src__foundation__observer_list,
    "package:flutter_web/src/foundation/change_notifier.dart": src__foundation__change_notifier,
    "package:flutter_web/src/foundation/isolates.dart": src__foundation__isolates,
    "package:flutter_web/src/foundation/node.dart": src__foundation__node,
    "package:flutter_web/src/foundation/serialization.dart": src__foundation__serialization
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web/src/foundation/bitfield.dart","org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart","org-dartlang-app:///packages/flutter_web/src/foundation/print.dart","org-dartlang-app:///packages/flutter_web/src/foundation/platform.dart","org-dartlang-app:///packages/flutter_web/src/foundation/debug.dart","org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart","org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart","org-dartlang-app:///packages/flutter_web/src/foundation/constants.dart","org-dartlang-app:///packages/flutter_web/src/foundation/basic_types.dart","org-dartlang-app:///packages/flutter_web/src/foundation/synchronous_future.dart","org-dartlang-app:///packages/flutter_web/src/foundation/unicode.dart","org-dartlang-app:///packages/flutter_web/src/foundation/key.dart","org-dartlang-app:///packages/flutter_web/src/foundation/profile.dart","org-dartlang-app:///packages/flutter_web/src/foundation/collections.dart","org-dartlang-app:///packages/flutter_web/src/foundation/licenses.dart","org-dartlang-app:///packages/flutter_web/src/foundation/observer_list.dart","org-dartlang-app:///packages/flutter_web/src/foundation/change_notifier.dart","org-dartlang-app:///packages/flutter_web/src/foundation/isolates.dart","org-dartlang-app:///packages/flutter_web/src/foundation/node.dart","org-dartlang-app:///packages/flutter_web/src/foundation/serialization.dart"],"names":[],"mappings":"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","file":"assertions.ddc.js"}');
  // Exports:
  return {
    src__foundation__bitfield: src__foundation__bitfield,
    src__foundation__binding: src__foundation__binding,
    src__foundation__print: src__foundation__print,
    src__foundation__platform: src__foundation__platform,
    src__foundation__debug: src__foundation__debug,
    src__foundation__assertions: src__foundation__assertions,
    src__foundation__diagnostics: src__foundation__diagnostics,
    src__foundation__constants: src__foundation__constants,
    src__foundation__basic_types: src__foundation__basic_types,
    src__foundation__synchronous_future: src__foundation__synchronous_future,
    src__foundation__unicode: src__foundation__unicode,
    src__foundation__key: src__foundation__key,
    src__foundation__profile: src__foundation__profile,
    src__foundation__collections: src__foundation__collections,
    src__foundation__licenses: src__foundation__licenses,
    src__foundation__observer_list: src__foundation__observer_list,
    src__foundation__change_notifier: src__foundation__change_notifier,
    src__foundation__isolates: src__foundation__isolates,
    src__foundation__node: src__foundation__node,
    src__foundation__serialization: src__foundation__serialization
  };
});

//# sourceMappingURL=assertions.ddc.js.map
