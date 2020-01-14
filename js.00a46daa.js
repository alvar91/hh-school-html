// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/grid.js":[function(require,module,exports) {
var grid = document.createElement('div');
grid.className = 'grid';
document.body.appendChild(grid);
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.code === 'KeyG') {
    grid.classList.toggle('grid_visible');
  }
});
},{}],"js/components/slider/slider.js":[function(require,module,exports) {
var active = document.querySelector(".js-slide.slider-section__slide_active");
document.querySelector(".js-slide-buttons").addEventListener("click", function (e) {
  var slideId = e.target.dataset.slideId;

  if (!slideId) {
    return;
  }

  if (active.dataset.slideId == slideId) {
    return;
  }

  var slide = document.querySelector(".js-slide[data-slide-id=\"".concat(slideId, "\"]"));
  slide.classList.add("slider-section__slide_show");
  active.classList.add("slider-section__slide_hide");
  active.classList.remove("slider-section__slide_active");
  var previous = active;
  active = slide;
  document.querySelector(".js-slide-button[data-slide-id=\"".concat(previous.dataset.slideId, "\"]")).classList.remove("pagination__dot_active");
  document.querySelector(".js-slide-button[data-slide-id=\"".concat(slideId, "\"]")).classList.add("pagination__dot_active");
  active.addEventListener("animationend", function () {
    active.classList.add("slider-section__slide_active");
    active.classList.remove("slider-section__slide_show");
    previous.classList.remove("slider-section__slide_hide");
    active.parentNode.insertBefore(active, previous);
  }, {
    once: true
  });
});
},{}],"js/models/productsModel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productsModel = void 0;
var productsModel = [{
  id: "1",
  name: "Зонт",
  image: "product-1.e0fb58ad.jpg",
  description: "Красный зонт",
  price: "1&nbsp;990"
}, {
  id: "2",
  name: "Сумка",
  image: "product-2.59eda275.jpg",
  description: "Красная сумка",
  price: "290"
}, {
  id: "3",
  name: "Шлепанцы",
  image: "product-3.83c9f311.jpg",
  description: "Красные шлепанцы",
  price: "790"
}, {
  id: "4",
  name: "Футболка",
  image: "product-4.9853c0ec.jpg",
  description: "Красная футболка",
  price: "690",
  salePrice: "390",
  sizes: {
    XS: true,
    X: true,
    M: true,
    L: true,
    XL: true,
    XXL: true
  }
}, {
  id: "5",
  name: "Толстовка",
  image: "product-5.593f3620.jpg",
  description: "Красная толстовка",
  price: "3 990",
  sizes: {
    XS: true,
    X: true,
    M: false,
    L: false,
    XL: true,
    XXL: true
  }
}, {
  id: "6",
  name: "Подушка",
  image: "product-6.5aa0fac8.jpg",
  description: "Красная подушка",
  price: "990"
}];
exports.productsModel = productsModel;
},{}],"js/components/templates/productSizesGen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productSizesGen = void 0;

//Функция для генерации шаблона с размерами продукта
var productSizesGen = function productSizesGen(productInfo) {
  var templateSizes = ""; //Если товар размерный, то включаем его размеры в шаблон

  if (productInfo.sizes) {
    for (var size in productInfo.sizes) {
      templateSizes += '<div class="product-card__sizing-box"><label>'; //Если товар в наличии, делаем input доступным для выбора

      if (productInfo.sizes[size]) {
        if (productInfo.checkedSize && productInfo.checkedSize === size) {
          templateSizes += "\n              <input type=\"radio\" name=\"size\" class=\"radio js-form-element\" value=\"".concat(size, "\" checked />\n            ");
        } else {
          templateSizes += "\n            <input type=\"radio\" name=\"size\" class=\"radio js-form-element\" value=\"".concat(size, "\" />\n        ");
        }
      } else {
        //В ином случае делаем input недоступным для выбора
        templateSizes += "\n                  <input type=\"radio\" name=\"size\" class=\"radio\" value=\"".concat(size, "\" disabled />\n              ");
      }

      templateSizes += "<span class=\"radio-button product-card__sizing-button\">".concat(size, "</span>\n              </label>\n            </div>\n            ");
    }

    return templateSizes;
  } else {
    return templateSizes;
  }
};

exports.productSizesGen = productSizesGen;
},{}],"js/components/templates/productTemplateGen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productTemplateGen = void 0;

var _productSizesGen = require("./productSizesGen");

//Функция для генерации подшаблона с размерами выбранного продукта
var productTemplateGen = function productTemplateGen(productInfo) {
  //Генерируем шаблон с размерами для продукта
  var templateSizes = (0, _productSizesGen.productSizesGen)(productInfo); //Составляем конечный шаблон на основе ранее
  //составленных подшаблонов 

  var templateHTML = "\n    <div class=\"product-card__order-info\">\n        <div class=\"product-card__description\">\n            ".concat(productInfo.description, "\n        </div>\n        <div class=\"product-card__sizing-container\">\n            ").concat(templateSizes, "\n        </div>\n        <button class=\"button button_disabled product-card__button-order\" disabled >\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C</button>\n    </div>\n    ");
  return templateHTML;
};

exports.productTemplateGen = productTemplateGen;
},{"./productSizesGen":"js/components/templates/productSizesGen.js"}],"js/components/templates/orderTemplateGen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderTemplateGen = void 0;

var _productSizesGen = require("./productSizesGen");

//Функция для генерации шаблона заказа с выбранным товаром
var orderTemplateGen = function orderTemplateGen(productInfo) {
  //Если существует скидочная цена, то добавляем лэйбл sale 
  //и саму цену в подшаблон
  var saleLabelHTML = '';
  var salePriceHTML = '';

  if (productInfo.salePrice) {
    saleLabelHTML = "<div class=\"popup-order__sale\">sale</div>";
    salePriceHTML = "<span class=\"popup-order__old-price\">".concat(productInfo.salePrice, "</span>");
  } //Генерируем шаблон с размерами для продукта


  var templateSizes = (0, _productSizesGen.productSizesGen)(productInfo); //Составляем конечный шаблон на основе ранее
  //составленных подшаблонов 

  var templateHTML = "\n        <div class=\"popup-order popup-order_active\">\n            <div class=\"columns-wrapper popup-order__columns\">\n            <button class=\"popup-order__button-close\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0442\u043E\u0432\u0430\u0440\u0430</button>\n            <div class=\"columns-row\">\n                <div class=\"column column_s-2 column_m-3 column_l-7\">\n                <div class=\"popup-order__form-container\">\n                    <form action=\"#\" class=\"form popup-order__form\">\n                    <div class=\"form__items\">\n                        <div class=\"heading popup-order__form-title\">\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430</div>\n                        <div class=\"form__block\">\n                        <h3 class=\"heading heading_level-3\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E</h3>\n                        <div class=\"form__item\">\n                            <input type=\"text\" name=\"user-name\" class=\"input js-form-element js-form-element-required\" placeholder=\"\u0424\u0418\u041E\" required />\n                        </div>\n                        <div class=\"form__item\">\n                            <input type=\"email\" name=\"user-email\" class=\"input js-form-element js-form-element-required\" placeholder=\"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430\" required />\n                        </div>\n                        <div class=\"form__item\">\n                            <input type=\"text\" class=\"input input_phone-pre js-form-element js-form-element-required\" value=\"+7\" />\n                            <input type=\"text\" name=\"code-country\" class=\"input input_phone-code js-form-element js-form-element-required\" placeholder=\"\u041A\u043E\u0434\" maxlength=\"3\" pattern=\"[0-9]{3}\"\n                            required />\n                            <input type=\"text\" name=\"mobile-number\" class=\"input input_phone-number js-form-element js-form-element-required\" placeholder=\"\u041D\u043E\u043C\u0435\u0440\" pattern=\"[0-9]{7}\"\n                            maxlength=\"7\" required />\n                        </div>\n                        </div>\n                        <div class=\"form__block\">\n                        <h3 class=\"heading heading_level-3\">\u0421\u043F\u043E\u0441\u043E\u0431 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430</h3>\n                        <div class=\"form__item\">\n                            <label class=\"form__label popup-order__form-label\" for=\"delivery-1\">\n                            <input type=\"radio\" id=\"delivery-1\" name=\"delivery\" class=\"radio js-form-element\"\n                                value=\"devivery-1\" />\n                            <span class=\"radio-button popup-order__form-button\">\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437</span>\n                            </label>\n                            <label class=\"form__label popup-order__form-label\" for=\"delivery-2\">\n                            <input type=\"radio\" id=\"delivery-2\" name=\"delivery\" class=\"radio js-form-element\"\n                                value=\"devivery-2\" checked />\n                            <span class=\"radio-button popup-order__form-button\">\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</span>\n                            </label>\n                        </div>\n                        </div>\n                        <div class=\"form__block\">\n                        <h3 class=\"heading heading_level-3\">\u0410\u0434\u0440\u0435\u0441</h3>\n                        <div class=\"form__item\">\n                            <select name=\"city\" class=\"select select_arrows js-form-element js-form-element-required\">\n                            <option disabled value=\"null\" class=\"option-city\" selected>\u0413\u043E\u0440\u043E\u0434</option>\n                            </select>\n                        </div>\n                        <div class=\"form__item\">\n                            <textarea name=\"address\" class=\"textarea js-form-element js-form-element-required\" maxlength=\"300\" required></textarea>\n                        </div>\n                        </div>\n                        <div class=\"form__block\">\n                        <h3 class=\"heading heading_level-3\">\u041E\u043F\u043B\u0430\u0442\u0430</h3>\n                        <div class=\"form__item\">\n                            <label for=\"online\" class=\"form__label\">\n                            <input type=\"radio\" name=\"pay\" id=\"online\" class=\"radio js-form-element\" value=\"online\" checked />\n                            <span class=\"radio-box\"></span>\n                            <span class=\"radio-text\">Online-\u043E\u043F\u043B\u0430\u0442\u0430</span>\n                            </label>\n                        </div>\n                        <div class=\"form__item\">\n                            <label for=\"cash\" class=\"form__label\">\n                            <input type=\"radio\" name=\"pay\" id=\"cash\" class=\"radio js-form-element\" value=\"cash\" />\n                            <span class=\"radio-box\"></span>\n                            <span class=\"radio-text\">\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438</span>\n                            </label>\n                        </div>\n                        <div class=\"form__item\">\n                            <label for=\"card\" class=\"form__label\">\n                            <input type=\"radio\" name=\"pay\" id=\"card\" class=\"radio js-form-element\" value=\"card\" />\n                            <span class=\"radio-box\"></span>\n                            <span class=\"radio-text\">\u041A\u0430\u0440\u0442\u043E\u0439 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438</span>\n                            </label>\n                        </div>\n                        </div>\n                        <div class=\"form__block\">\n                        <h3 class=\"heading heading_level-3\">\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F</h3>\n                        <div class=\"form__item\">\n                            <label for=\"sms\" class=\"form__label\">\n                            <input type=\"checkbox\" name=\"sms\" id=\"sms\" class=\"checkbox js-form-element\" />\n                            <span class=\"checkbox-box\"></span>\n                            <span class=\"checkbox-text\">\u0425\u043E\u0447\u0443 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C SMS \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F</span>\n                            </label>\n                        </div>\n                        </div>\n                        <div class=\"form__item\">\n                        <button type=\"submit\" class=\"button popup-order__form-button popup-order__form-button_submit\">\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C\n                            \u0437\u0430\u043A\u0430\u0437</button>\n                        </div>\n                    </div>\n                    </form>\n                </div>\n                </div>\n                <div class=\"column column_s-0 column_m-0 column_l-1\"></div>\n                <div class=\"column column_s-0 column_m-3 column_l-4\">\n                <div class=\"popup-order__product\">\n                    <div class=\"popup-order__product-card\">\n                        <div class=\"popup-order__image-container\">\n                            <img class=\"popup-order__image\" src=\"".concat(productInfo.image, "\" alt=\"").concat(productInfo.name, "\" />\n                            ").concat(saleLabelHTML, "\n                        </div>\n                        <div class=\"popup-order__name\">").concat(productInfo.name, "</div>\n                        <div class=\"popup-order__price\">\n                            ").concat(salePriceHTML, " ").concat(productInfo.price, " \u20BD\n                        </div>\n                        <div class=\"popup-order__description\">").concat(productInfo.description, "</div>\n                        <div class=\"popup-order__sizing-container\">\n                            ").concat((0, _productSizesGen.productSizesGen)(productInfo), "\n                        </div>\n                    </div>\n                </div>\n                </div>\n            </div>\n            </div>\n        </div>\n    "); //Возвращаем полученный шаблон

  return templateHTML;
};

exports.orderTemplateGen = orderTemplateGen;
},{"./productSizesGen":"js/components/templates/productSizesGen.js"}],"node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"node_modules/@babel/runtime-corejs2/regenerator/index.js":[function(require,module,exports) {
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":"node_modules/regenerator-runtime/runtime.js"}],"js/components/common/asyncLoader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncLoader = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Функция ассинхронной загрузки данных от API
var asyncLoader = function asyncLoader(url) {
  var response, citiesResponse;
  return _regenerator.default.async(function asyncLoader$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _regenerator.default.awrap(fetch(url));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return _regenerator.default.awrap(response.json());

        case 6:
          citiesResponse = _context.sent;
          return _context.abrupt("return", citiesResponse);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          alert("Ошибка в получении данных от сервера");

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.asyncLoader = asyncLoader;
},{"@babel/runtime-corejs2/regenerator":"node_modules/@babel/runtime-corejs2/regenerator/index.js"}],"js/components/templates/selectTemplateGen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectTemplateGen = void 0;

var _asyncLoader = require("../common/asyncLoader");

//Функция для получения городов из API
var selectTemplateGen = function selectTemplateGen(citySelect) {
  var areaNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 21;
  (0, _asyncLoader.asyncLoader)("https://api.hh.ru/areas/113").then(function (citiesResponse) {
    var areas = citiesResponse.areas[areaNum].areas.slice(0, 10);

    for (var i = 1; i < areas.length; i++) {
      citySelect.innerHTML += "\n        <option value=\"".concat(areas[i].name, "\" class=\"option-city\">").concat(areas[i].name, "</option>");
    }
  });
};

exports.selectTemplateGen = selectTemplateGen;
},{"../common/asyncLoader":"js/components/common/asyncLoader.js"}],"node_modules/core-js/library/modules/_add-to-unscopables.js":[function(require,module,exports) {
module.exports = function () { /* empty */ };

},{}],"node_modules/core-js/library/modules/_iter-step.js":[function(require,module,exports) {
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],"node_modules/core-js/library/modules/_iterators.js":[function(require,module,exports) {
module.exports = {};

},{}],"node_modules/core-js/library/modules/_cof.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"node_modules/core-js/library/modules/_iobject.js":[function(require,module,exports) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":"node_modules/core-js/library/modules/_cof.js"}],"node_modules/core-js/library/modules/_defined.js":[function(require,module,exports) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],"node_modules/core-js/library/modules/_to-iobject.js":[function(require,module,exports) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_iobject":"node_modules/core-js/library/modules/_iobject.js","./_defined":"node_modules/core-js/library/modules/_defined.js"}],"node_modules/core-js/library/modules/_library.js":[function(require,module,exports) {
module.exports = true;

},{}],"node_modules/core-js/library/modules/_global.js":[function(require,module,exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],"node_modules/core-js/library/modules/_core.js":[function(require,module,exports) {
var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],"node_modules/core-js/library/modules/_a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],"node_modules/core-js/library/modules/_ctx.js":[function(require,module,exports) {
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":"node_modules/core-js/library/modules/_a-function.js"}],"node_modules/core-js/library/modules/_is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"node_modules/core-js/library/modules/_an-object.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":"node_modules/core-js/library/modules/_is-object.js"}],"node_modules/core-js/library/modules/_fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],"node_modules/core-js/library/modules/_descriptors.js":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":"node_modules/core-js/library/modules/_fails.js"}],"node_modules/core-js/library/modules/_dom-create.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_is-object":"node_modules/core-js/library/modules/_is-object.js","./_global":"node_modules/core-js/library/modules/_global.js"}],"node_modules/core-js/library/modules/_ie8-dom-define.js":[function(require,module,exports) {
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":"node_modules/core-js/library/modules/_descriptors.js","./_fails":"node_modules/core-js/library/modules/_fails.js","./_dom-create":"node_modules/core-js/library/modules/_dom-create.js"}],"node_modules/core-js/library/modules/_to-primitive.js":[function(require,module,exports) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":"node_modules/core-js/library/modules/_is-object.js"}],"node_modules/core-js/library/modules/_object-dp.js":[function(require,module,exports) {
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":"node_modules/core-js/library/modules/_an-object.js","./_ie8-dom-define":"node_modules/core-js/library/modules/_ie8-dom-define.js","./_to-primitive":"node_modules/core-js/library/modules/_to-primitive.js","./_descriptors":"node_modules/core-js/library/modules/_descriptors.js"}],"node_modules/core-js/library/modules/_property-desc.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"node_modules/core-js/library/modules/_hide.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_object-dp":"node_modules/core-js/library/modules/_object-dp.js","./_property-desc":"node_modules/core-js/library/modules/_property-desc.js","./_descriptors":"node_modules/core-js/library/modules/_descriptors.js"}],"node_modules/core-js/library/modules/_has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"node_modules/core-js/library/modules/_export.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_global":"node_modules/core-js/library/modules/_global.js","./_core":"node_modules/core-js/library/modules/_core.js","./_ctx":"node_modules/core-js/library/modules/_ctx.js","./_hide":"node_modules/core-js/library/modules/_hide.js","./_has":"node_modules/core-js/library/modules/_has.js"}],"node_modules/core-js/library/modules/_redefine.js":[function(require,module,exports) {
module.exports = require('./_hide');

},{"./_hide":"node_modules/core-js/library/modules/_hide.js"}],"node_modules/core-js/library/modules/_to-integer.js":[function(require,module,exports) {
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],"node_modules/core-js/library/modules/_to-length.js":[function(require,module,exports) {
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":"node_modules/core-js/library/modules/_to-integer.js"}],"node_modules/core-js/library/modules/_to-absolute-index.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":"node_modules/core-js/library/modules/_to-integer.js"}],"node_modules/core-js/library/modules/_array-includes.js":[function(require,module,exports) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-iobject":"node_modules/core-js/library/modules/_to-iobject.js","./_to-length":"node_modules/core-js/library/modules/_to-length.js","./_to-absolute-index":"node_modules/core-js/library/modules/_to-absolute-index.js"}],"node_modules/core-js/library/modules/_shared.js":[function(require,module,exports) {

var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":"node_modules/core-js/library/modules/_core.js","./_global":"node_modules/core-js/library/modules/_global.js","./_library":"node_modules/core-js/library/modules/_library.js"}],"node_modules/core-js/library/modules/_uid.js":[function(require,module,exports) {
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],"node_modules/core-js/library/modules/_shared-key.js":[function(require,module,exports) {
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":"node_modules/core-js/library/modules/_shared.js","./_uid":"node_modules/core-js/library/modules/_uid.js"}],"node_modules/core-js/library/modules/_object-keys-internal.js":[function(require,module,exports) {
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_has":"node_modules/core-js/library/modules/_has.js","./_to-iobject":"node_modules/core-js/library/modules/_to-iobject.js","./_array-includes":"node_modules/core-js/library/modules/_array-includes.js","./_shared-key":"node_modules/core-js/library/modules/_shared-key.js"}],"node_modules/core-js/library/modules/_enum-bug-keys.js":[function(require,module,exports) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],"node_modules/core-js/library/modules/_object-keys.js":[function(require,module,exports) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_object-keys-internal":"node_modules/core-js/library/modules/_object-keys-internal.js","./_enum-bug-keys":"node_modules/core-js/library/modules/_enum-bug-keys.js"}],"node_modules/core-js/library/modules/_object-dps.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_object-dp":"node_modules/core-js/library/modules/_object-dp.js","./_an-object":"node_modules/core-js/library/modules/_an-object.js","./_object-keys":"node_modules/core-js/library/modules/_object-keys.js","./_descriptors":"node_modules/core-js/library/modules/_descriptors.js"}],"node_modules/core-js/library/modules/_html.js":[function(require,module,exports) {
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":"node_modules/core-js/library/modules/_global.js"}],"node_modules/core-js/library/modules/_object-create.js":[function(require,module,exports) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":"node_modules/core-js/library/modules/_an-object.js","./_object-dps":"node_modules/core-js/library/modules/_object-dps.js","./_enum-bug-keys":"node_modules/core-js/library/modules/_enum-bug-keys.js","./_shared-key":"node_modules/core-js/library/modules/_shared-key.js","./_dom-create":"node_modules/core-js/library/modules/_dom-create.js","./_html":"node_modules/core-js/library/modules/_html.js"}],"node_modules/core-js/library/modules/_wks.js":[function(require,module,exports) {
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_shared":"node_modules/core-js/library/modules/_shared.js","./_uid":"node_modules/core-js/library/modules/_uid.js","./_global":"node_modules/core-js/library/modules/_global.js"}],"node_modules/core-js/library/modules/_set-to-string-tag.js":[function(require,module,exports) {
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_object-dp":"node_modules/core-js/library/modules/_object-dp.js","./_has":"node_modules/core-js/library/modules/_has.js","./_wks":"node_modules/core-js/library/modules/_wks.js"}],"node_modules/core-js/library/modules/_iter-create.js":[function(require,module,exports) {
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_object-create":"node_modules/core-js/library/modules/_object-create.js","./_property-desc":"node_modules/core-js/library/modules/_property-desc.js","./_set-to-string-tag":"node_modules/core-js/library/modules/_set-to-string-tag.js","./_hide":"node_modules/core-js/library/modules/_hide.js","./_wks":"node_modules/core-js/library/modules/_wks.js"}],"node_modules/core-js/library/modules/_to-object.js":[function(require,module,exports) {
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":"node_modules/core-js/library/modules/_defined.js"}],"node_modules/core-js/library/modules/_object-gpo.js":[function(require,module,exports) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":"node_modules/core-js/library/modules/_has.js","./_to-object":"node_modules/core-js/library/modules/_to-object.js","./_shared-key":"node_modules/core-js/library/modules/_shared-key.js"}],"node_modules/core-js/library/modules/_iter-define.js":[function(require,module,exports) {
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_library":"node_modules/core-js/library/modules/_library.js","./_export":"node_modules/core-js/library/modules/_export.js","./_redefine":"node_modules/core-js/library/modules/_redefine.js","./_hide":"node_modules/core-js/library/modules/_hide.js","./_iterators":"node_modules/core-js/library/modules/_iterators.js","./_iter-create":"node_modules/core-js/library/modules/_iter-create.js","./_set-to-string-tag":"node_modules/core-js/library/modules/_set-to-string-tag.js","./_object-gpo":"node_modules/core-js/library/modules/_object-gpo.js","./_wks":"node_modules/core-js/library/modules/_wks.js"}],"node_modules/core-js/library/modules/es6.array.iterator.js":[function(require,module,exports) {
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":"node_modules/core-js/library/modules/_add-to-unscopables.js","./_iter-step":"node_modules/core-js/library/modules/_iter-step.js","./_iterators":"node_modules/core-js/library/modules/_iterators.js","./_to-iobject":"node_modules/core-js/library/modules/_to-iobject.js","./_iter-define":"node_modules/core-js/library/modules/_iter-define.js"}],"node_modules/core-js/library/modules/web.dom.iterable.js":[function(require,module,exports) {

require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./es6.array.iterator":"node_modules/core-js/library/modules/es6.array.iterator.js","./_global":"node_modules/core-js/library/modules/_global.js","./_hide":"node_modules/core-js/library/modules/_hide.js","./_iterators":"node_modules/core-js/library/modules/_iterators.js","./_wks":"node_modules/core-js/library/modules/_wks.js"}],"node_modules/core-js/library/modules/_string-at.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_to-integer":"node_modules/core-js/library/modules/_to-integer.js","./_defined":"node_modules/core-js/library/modules/_defined.js"}],"node_modules/core-js/library/modules/es6.string.iterator.js":[function(require,module,exports) {
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_string-at":"node_modules/core-js/library/modules/_string-at.js","./_iter-define":"node_modules/core-js/library/modules/_iter-define.js"}],"node_modules/core-js/library/modules/_classof.js":[function(require,module,exports) {
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":"node_modules/core-js/library/modules/_cof.js","./_wks":"node_modules/core-js/library/modules/_wks.js"}],"node_modules/core-js/library/modules/core.get-iterator-method.js":[function(require,module,exports) {
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":"node_modules/core-js/library/modules/_classof.js","./_wks":"node_modules/core-js/library/modules/_wks.js","./_iterators":"node_modules/core-js/library/modules/_iterators.js","./_core":"node_modules/core-js/library/modules/_core.js"}],"node_modules/core-js/library/modules/core.get-iterator.js":[function(require,module,exports) {
var anObject = require('./_an-object');
var get = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

},{"./_an-object":"node_modules/core-js/library/modules/_an-object.js","./core.get-iterator-method":"node_modules/core-js/library/modules/core.get-iterator-method.js","./_core":"node_modules/core-js/library/modules/_core.js"}],"node_modules/core-js/library/fn/get-iterator.js":[function(require,module,exports) {
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');

},{"../modules/web.dom.iterable":"node_modules/core-js/library/modules/web.dom.iterable.js","../modules/es6.string.iterator":"node_modules/core-js/library/modules/es6.string.iterator.js","../modules/core.get-iterator":"node_modules/core-js/library/modules/core.get-iterator.js"}],"node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":[function(require,module,exports) {
module.exports = require("core-js/library/fn/get-iterator");
},{"core-js/library/fn/get-iterator":"node_modules/core-js/library/fn/get-iterator.js"}],"js/components/form/validate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/get-iterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Функция валидации полей формы и стилевого оформления 
var validate = function validate(elements) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var element = _step.value;
      element.addEventListener("invalid", function () {
        element.classList.add("form-error");
      }, false);
      element.addEventListener("blur", function () {
        element.checkValidity();
      });
    };

    for (var _iterator = (0, _getIterator2.default)(elements), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

exports.validate = validate;
},{"@babel/runtime-corejs2/core-js/get-iterator":"node_modules/@babel/runtime-corejs2/core-js/get-iterator.js"}],"js/components/popup-order/outputSubmit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outputSubmit = void 0;

//Функция для формирования объекта с пользовательскими данными из формы
var outputSubmit = function outputSubmit(allElements, productName) {
  var sendObj = {};
  allElements.forEach(function (element) {
    if (element.name === "user-name") {
      sendObj["Имя пользователя"] = element.value;
    } else if (element.name === "user-email") {
      sendObj["Электронный адрес пользователя"] = element.value;
    } else if (element.name === "user-name") {
      sendObj["Имя пользователя"] = element.value;
    } else if (element.name === "code-country") {
      sendObj["Код страны"] = element.value;
    } else if (element.name === "mobile-number") {
      sendObj["Номер мобильного телефона"] = element.value;
    } else if (element.name === "delivery" && element.checked) {
      sendObj["Выбранный способ получения"] = element.value;
    } else if (element.name === "city") {
      sendObj["Выбранный город"] = element.value;
    } else if (element.name === "address") {
      sendObj["Указанный адрес"] = element.value;
    } else if (element.name === "pay" && element.checked) {
      sendObj["Выбранный способ оплаты"] = element.value;
    } else if (element.name === "sms") {
      sendObj["Оповещение по sms"] = element.checked;
    } else if (element.name === "size" && element.checked) {
      sendObj["Выбранный размер"] = element.value;
    } else if (productName) {
      sendObj["Выбранный продукт"] = productName;
    }
  });
  return sendObj;
};

exports.outputSubmit = outputSubmit;
},{}],"js/components/popup-order/showOrder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showOrder = void 0;

var _orderTemplateGen = require("../templates/orderTemplateGen");

var _selectTemplateGen = require("../templates/selectTemplateGen");

var _validate = require("../form/validate");

var _outputSubmit = require("./outputSubmit");

//Функция для отображения активной формы заказа для выбранного продукта
var showOrder = function showOrder(productInfo) {
  //Генерируем шаблон с информацией по продукту
  var productTemplate = (0, _orderTemplateGen.orderTemplateGen)(productInfo); //Вставляем шаблон с информацией по продукту на страницу

  document.querySelector(".footer").insertAdjacentHTML("afterend", "".concat(productTemplate));
  var activeOrder = document.querySelector(".popup-order_active");
  var body = document.querySelector("#body");
  body.style.overflow = "hidden"; //При нажатии на крестик закрытия
  //снимаем с заказа статус активного
  //и удаляем информацию по предыдущему заказу

  var exitIcon = document.querySelector(".popup-order__button-close");
  var activeProduct = document.querySelector(".popup-order__product-card");
  body = document.querySelector("#body");
  exitIcon.addEventListener("click", function () {
    activeOrder.remove("popup-order_active");
    activeProduct.remove("popup-order__product-card");
    body.style.overflow = "auto";
  }); //Генерируем шаблон с городами для select и вставляем его на страницу

  var citySelect = document.querySelector(".select");
  (0, _selectTemplateGen.selectTemplateGen)(citySelect); //Провалидируем все поля формы, обязательные для заполнения

  var elementsRequired = document.querySelectorAll(".js-form-element-required");
  (0, _validate.validate)(elementsRequired); //Навешиваем обработчик на submit

  var submitForm = document.querySelector(".popup-order__form");
  submitForm.addEventListener('submit', function (e) {
    e.preventDefault(); //Собираем все пользовательские данные из формы

    var allElements = document.querySelectorAll(".js-form-element"); //Упаковываем пользовательские данные в объект

    var sendObj = (0, _outputSubmit.outputSubmit)(allElements, productInfo.name); //Выводим полученный объект в консоль

    console.log(sendObj);
  });
};

exports.showOrder = showOrder;
},{"../templates/orderTemplateGen":"js/components/templates/orderTemplateGen.js","../templates/selectTemplateGen":"js/components/templates/selectTemplateGen.js","../form/validate":"js/components/form/validate.js","./outputSubmit":"js/components/popup-order/outputSubmit.js"}],"js/components/popup-card/showCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showCard = void 0;

var _productsModel = require("../../models/productsModel");

var _productTemplateGen = require("../templates/productTemplateGen");

var _showOrder = require("../popup-order/showOrder");

//Функция для отображения и скрытия элементов активной карточки товара
var showCard = function showCard(card) {
  //Если на странице уже присутствует активная карточка, то выходим из функции
  if (card.classList.contains("product-card_active")) {
    return;
  } //Назначаем карточку активной


  card.classList.add("product-card_active"); //Навешиваем крестик закрытия на активную карточку

  card.insertAdjacentHTML("afterbegin", "<button class=\"product-card__button-close\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0442\u043E\u0432\u0430\u0440\u0430</button>"); //При нажатии на крестик закрытия
  //удаляем сам крестик и снимаем с карточки статус активной,
  //удаляем дополнитльную информацию о товаре

  var exitIcon = document.querySelector(".product-card__button-close");
  var orderInfo = document.querySelector(".product-card__order-info");
  exitIcon.addEventListener("click", function () {
    exitIcon.remove();
    orderInfo.remove();
  }); //Получаем дополнительную информацию по продукту из модели

  var productInfo = _productsModel.productsModel.find(function (product) {
    return card.dataset.productId === product.id;
  }); //Генерируем шаблон с дополнительной информацией по продукту


  var productTemplate = (0, _productTemplateGen.productTemplateGen)(productInfo); //Вставляем шаблон с дополнительной информацией на страницу

  card.insertAdjacentHTML("beforeend", "".concat(productTemplate)); //Скрываем выбранный размер товара

  document.querySelectorAll(".js-size-radio").forEach(function (sizeLabel) {
    sizeLabel.checked = false;
  }); //Разблокируем кнопку "Заказать", при выборе размера для размерного товара
  //если товар безразмерный, то кнопка "Заказать" разблокируется автоматически

  var orderButton = document.querySelector(".product-card__button-order");

  if (productInfo.sizes) {
    //Eсли продукт имеет размерность
    document.querySelectorAll(".radio").forEach(function (sizeLabel) {
      //Если размер был уже выбран ранее, то разблокируем кнопку "Заказать"
      if (productInfo.checkedSize) {
        orderButton.classList.remove("button_disabled");
        orderButton.disabled = false;
      }

      sizeLabel.addEventListener("click", function () {
        orderButton.classList.remove("button_disabled");
        orderButton.disabled = false;
        productInfo.checkedSize = sizeLabel.value;
      });
    });
  } else {
    //Eсли продукт не имеет размерности
    orderButton.classList.remove("button_disabled");
    orderButton.disabled = false;
  } //Назначаем обработчики на кнопку "Заказать"


  exitIcon = document.querySelector(".product-card__button-close");
  orderInfo = document.querySelector(".product-card__order-info");
  orderButton.addEventListener("click", function () {
    //Если кнопка заказа разблокирована
    if (!orderButton.disabled) {
      //Вызываем функцию для отображения активной формы заказа
      (0, _showOrder.showOrder)(productInfo); //Снимаем с карточки товара активный статус с удалением
      //крестика закрытия и дополнительной информации по товару

      card.classList.remove("product-card_active");
      exitIcon.remove();
      orderInfo.remove();
    }
  });
};

exports.showCard = showCard;
},{"../../models/productsModel":"js/models/productsModel.js","../templates/productTemplateGen":"js/components/templates/productTemplateGen.js","../popup-order/showOrder":"js/components/popup-order/showOrder.js"}],"js/components/popup-card/hideCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideCard = void 0;

//Функция сокрытия и удаления данных для карточки активного товара
var hideCard = function hideCard(card) {
  card.classList.remove("product-card_active"); //Находим в карточке первый дочерний элемент
  //если он является крестиком закрытия, то удаляем его

  var orderInfo = card.firstElementChild;

  if (orderInfo.classList.contains("product-card__button-close")) {
    orderInfo.remove();
  } //Находим в карточке последний дочерний элемент
  //если он является дополнительной информацией по товару, то удаляем его


  var exitIcon = card.lastElementChild;

  if (exitIcon.classList.contains("product-card__order-info")) {
    exitIcon.remove();
  }
};

exports.hideCard = hideCard;
},{}],"js/components/popup-card/popup.js":[function(require,module,exports) {
"use strict";

var _showCard = require("./showCard");

var _hideCard = require("./hideCard");

//Навешиваем обработчики на все карточки
//При клике на подложку (body) скрываем и удаляем элементы
var cards = document.querySelectorAll(".product-card");
var body = document.querySelector("#body");

var handlerActive = function handlerActive(event) {
  cards.forEach(function (card) {
    if (event.target.closest(".product-card") === card) {
      (0, _showCard.showCard)(card);
    } else {
      (0, _hideCard.hideCard)(card);
    }
  });
};

body.addEventListener("click", handlerActive);
},{"./showCard":"js/components/popup-card/showCard.js","./hideCard":"js/components/popup-card/hideCard.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

require("./grid");

require("./components/slider/slider");

require("./components/popup-card/popup");
},{"./grid":"js/grid.js","./components/slider/slider":"js/components/slider/slider.js","./components/popup-card/popup":"js/components/popup-card/popup.js"}],"C:/Users/Алексей/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59962" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Алексей/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map