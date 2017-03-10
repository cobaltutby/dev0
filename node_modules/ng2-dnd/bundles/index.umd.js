(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["ng2-dnd"] = factory(require("@angular/core"));
	else
		root["ng2-dnd"] = factory(root["@angular/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dnd_utils__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTransferEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DragImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DragDropConfig; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd

var DataTransferEffect = (function () {
    function DataTransferEffect(name) {
        this.name = name;
    }
    DataTransferEffect.COPY = new DataTransferEffect('copy');
    DataTransferEffect.LINK = new DataTransferEffect('link');
    DataTransferEffect.MOVE = new DataTransferEffect('move');
    DataTransferEffect.NONE = new DataTransferEffect('none');
    return DataTransferEffect;
}());
var DragImage = (function () {
    function DragImage(imageElement, x_offset, y_offset) {
        if (x_offset === void 0) { x_offset = 0; }
        if (y_offset === void 0) { y_offset = 0; }
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["b" /* isString */])(this.imageElement)) {
            // Create real image from string source
            var imgScr = this.imageElement;
            this.imageElement = new HTMLImageElement();
            this.imageElement.src = imgScr;
        }
    }
    return DragImage;
}());
var DragDropConfig = (function () {
    function DragDropConfig() {
        this.onDragStartClass = "dnd-drag-start";
        this.onDragEnterClass = "dnd-drag-enter";
        this.onDragOverClass = "dnd-drag-over";
        this.onSortableDragClass = "dnd-sortable-drag";
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = "move";
    }
    return DragDropConfig;
}());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_utils__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropData; });
/* harmony export (immutable) */ __webpack_exports__["b"] = dragDropServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DragDropService; });
/* harmony export (immutable) */ __webpack_exports__["d"] = dragDropSortableServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DragDropSortableService; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DragDropData = (function () {
    function DragDropData() {
    }
    return DragDropData;
}());
function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    DragDropService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], DragDropService);
    return DragDropService;
}());
function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: function () {
            return this._elem;
        },
        enumerable: true,
        configurable: true
    });
    DragDropSortableService.prototype.markSortable = function (elem) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_utils__["a" /* isPresent */])(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_utils__["a" /* isPresent */])(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    DragDropSortableService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dnd_config__["c" /* DragDropConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__dnd_config__["c" /* DragDropConfig */]) === 'function' && _a) || Object])
    ], DragDropSortableService);
    return DragDropSortableService;
    var _a;
}());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_utils__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AbstractComponent = (function () {
    function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
        var _this = this;
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._cdr = _cdr;
        /**
         * Whether the object is draggable. Default is true.
         */
        this._dragEnabled = false;
        /**
         * Allows drop on this element
         */
        this.dropEnabled = false;
        this.dropZones = [];
        this.cloneItem = false;
        this._elem = elemRef.nativeElement;
        //
        // DROP events
        //
        this._elem.ondragenter = function (event) {
            _this._onDragEnter(event);
        };
        this._elem.ondragover = function (event) {
            _this._onDragOver(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.dropEffect = _this._config.dropEffect.name;
            }
            return false;
        };
        this._elem.ondragleave = function (event) {
            _this._onDragLeave(event);
        };
        this._elem.ondrop = function (event) {
            _this._onDrop(event);
        };
        //
        // Drag events
        //
        this._elem.ondragstart = function (event) {
            // console.log('ondragstart', event.target);
            _this._onDragStart(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.setData('text', '');
                // Change drag effect
                event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
                // Change drag image
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["a" /* isPresent */])(_this.dragImage)) {
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["b" /* isString */])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["c" /* createImage */])(_this.dragImage));
                    }
                    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["d" /* isFunction */])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["e" /* callFun */])(_this.dragImage));
                    }
                    else {
                        var img = _this.dragImage;
                        event.dataTransfer.setDragImage(img.imageElement, img.x_offset, img.y_offset);
                    }
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["a" /* isPresent */])(_this._config.dragImage)) {
                    var dragImage = _this._config.dragImage;
                    event.dataTransfer.setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                }
                else if (_this.cloneItem) {
                    _this._dragHelper = _this._elem.cloneNode(true);
                    _this._dragHelper.classList.add('dnd-drag-item');
                    _this._dragHelper.style.position = "absolute";
                    _this._dragHelper.style.top = "0px";
                    _this._dragHelper.style.left = "-1000px";
                    _this._elem.parentElement.appendChild(_this._dragHelper);
                    event.dataTransfer.setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
                }
                // Change drag cursor
                if (_this._dragEnabled) {
                    _this._elem.style.cursor = _this.effectCursor ? _this.effectCursor : _this._config.dragCursor;
                }
                else {
                    _this._elem.style.cursor = _this._defaultCursor;
                }
            }
        };
        this._elem.ondragend = function (event) {
            if (_this._elem.parentElement && _this._dragHelper) {
                _this._elem.parentElement.removeChild(_this._dragHelper);
            }
            // console.log('ondragend', event.target);
            _this._onDragEnd(event);
            // Restore style of dragged element
            _this._elem.style.cursor = _this._defaultCursor;
        };
    }
    Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        set: function (enabled) {
            this._dragEnabled = !!enabled;
            this._elem.draggable = this._dragEnabled;
        },
        enumerable: true,
        configurable: true
    });
    /******* Change detection ******/
    AbstractComponent.prototype.detectChanges = function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            _this._cdr.detectChanges();
        }, 250);
    };
    //****** Droppable *******//
    AbstractComponent.prototype._onDragEnter = function (event) {
        // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed) {
            // event.preventDefault();
            this._onDragEnterCallback(event);
        }
    };
    AbstractComponent.prototype._onDragOver = function (event) {
        // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed) {
            // The element is over the same source element - do nothing
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            this._onDragOverCallback(event);
        }
    };
    AbstractComponent.prototype._onDragLeave = function (event) {
        // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed) {
            // event.preventDefault();
            this._onDragLeaveCallback(event);
        }
    };
    AbstractComponent.prototype._onDrop = function (event) {
        // console.log('ondrop._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed) {
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            if (event.stopPropagation) {
                // Necessary. Allows us to drop.
                event.stopPropagation();
            }
            this._onDropCallback(event);
            this.detectChanges();
        }
    };
    Object.defineProperty(AbstractComponent.prototype, "_isDropAllowed", {
        get: function () {
            if (this._dragDropService.isDragged && this.dropEnabled) {
                // First, if `allowDrop` is set, call it to determine whether the
                // dragged element can be dropped here.
                if (this.allowDrop) {
                    return this.allowDrop(this._dragDropService.dragData);
                }
                // Otherwise, use dropZones if they are set.
                if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
                    return true;
                }
                for (var i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                    var dragZone = this._dragDropService.allowedDropZones[i];
                    if (this.dropZones.indexOf(dragZone) !== -1) {
                        return true;
                    }
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    //*********** Draggable **********//
    AbstractComponent.prototype._onDragStart = function (event) {
        // console.log('ondragstart.dragEnabled', this._dragEnabled);
        if (this._dragEnabled) {
            this._dragDropService.allowedDropZones = this.dropZones;
            // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
            this._onDragStartCallback(event);
        }
    };
    AbstractComponent.prototype._onDragEnd = function (event) {
        this._dragDropService.allowedDropZones = [];
        // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
        this._onDragEndCallback(event);
    };
    //**** Drop Callbacks ****//
    AbstractComponent.prototype._onDragEnterCallback = function (event) { };
    AbstractComponent.prototype._onDragOverCallback = function (event) { };
    AbstractComponent.prototype._onDragLeaveCallback = function (event) { };
    AbstractComponent.prototype._onDropCallback = function (event) { };
    //**** Drag Callbacks ****//
    AbstractComponent.prototype._onDragStartCallback = function (event) { };
    AbstractComponent.prototype._onDragEndCallback = function (event) { };
    AbstractComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dnd_service__["c" /* DragDropService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__dnd_service__["c" /* DragDropService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__dnd_config__["c" /* DragDropConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__dnd_config__["c" /* DragDropConfig */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _d) || Object])
    ], AbstractComponent);
    return AbstractComponent;
    var _a, _b, _c, _d;
}());


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DraggableComponent = (function (_super) {
    __extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, dragDropService, config, cdr) {
        _super.call(this, elemRef, dragDropService, config, cdr);
        /**
         * Callback function called when the drag actions happened.
         */
        this.onDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._defaultCursor = this._elem.style.cursor;
        this.dragEnabled = true;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DraggableComponent.prototype._onDragStartCallback = function (event) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.prototype._onDragEndCallback = function (event) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dragEnabled"), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], DraggableComponent.prototype, "draggable", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], DraggableComponent.prototype, "onDragStart", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], DraggableComponent.prototype, "onDragEnd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DraggableComponent.prototype, "dragData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDragSuccess"), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], DraggableComponent.prototype, "onDragSuccessCallback", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dropZones"), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], DraggableComponent.prototype, "dropzones", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectAllowed"), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], DraggableComponent.prototype, "effectallowed", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectCursor"), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], DraggableComponent.prototype, "effectcursor", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DraggableComponent.prototype, "dragImage", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], DraggableComponent.prototype, "cloneItem", void 0);
    DraggableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[dnd-draggable]' }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _g) || Object])
    ], DraggableComponent);
    return DraggableComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DroppableComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DroppableComponent = (function (_super) {
    __extends(DroppableComponent, _super);
    function DroppableComponent(elemRef, dragDropService, config, cdr) {
        _super.call(this, elemRef, dragDropService, config, cdr);
        /**
         * Callback function called when the drop action completes correctly.
         * It is activated before the on-drag-success callback.
         */
        this.onDropSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropEnabled = true;
    }
    Object.defineProperty(DroppableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
        set: function (value) {
            this.allowDrop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DroppableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    DroppableComponent.prototype._onDragOverCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDragLeaveCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDropCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dropEnabled"), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], DroppableComponent.prototype, "droppable", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], DroppableComponent.prototype, "onDropSuccess", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], DroppableComponent.prototype, "onDragEnter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], DroppableComponent.prototype, "onDragOver", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], DroppableComponent.prototype, "onDragLeave", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("allowDrop"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Function])
    ], DroppableComponent.prototype, "allowdrop", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dropZones"), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], DroppableComponent.prototype, "dropzones", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectAllowed"), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], DroppableComponent.prototype, "effectallowed", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectCursor"), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], DroppableComponent.prototype, "effectcursor", null);
    DroppableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[dnd-droppable]' }), 
        __metadata('design:paramtypes', [(typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _h) || Object])
    ], DroppableComponent);
    return DroppableComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SortableComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SortableContainer = (function (_super) {
    __extends(SortableContainer, _super);
    function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
        _super.call(this, elemRef, dragDropService, config, cdr);
        this._sortableDataService = _sortableDataService;
        this._sortableData = [];
        this.dragEnabled = false;
    }
    Object.defineProperty(SortableContainer.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "sortableData", {
        get: function () {
            return this._sortableData;
        },
        set: function (sortableData) {
            this._sortableData = sortableData;
            //
            this.dropEnabled = !!this._sortableData;
            // console.log("collection is changed, drop enabled: " + this.dropEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableContainer.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            var item = this._sortableDataService.sortableContainer._sortableData[this._sortableDataService.index];
            // Check does element exist in sortableData of this Container
            if (this._sortableData.indexOf(item) === -1) {
                // Let's add it
                // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + '] over parent node');
                // Remove item from previouse list
                this._sortableDataService.sortableContainer._sortableData.splice(this._sortableDataService.index, 1);
                if (this._sortableDataService.sortableContainer._sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableData.unshift(item);
                this._sortableDataService.sortableContainer = this;
                this._sortableDataService.index = 0;
            }
            // Refresh changes in properties of container component
            this.detectChanges();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dragEnabled"), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SortableContainer.prototype, "draggable", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], SortableContainer.prototype, "sortableData", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dropZones"), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], SortableContainer.prototype, "dropzones", null);
    SortableContainer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[dnd-sortable-container]' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__dnd_service__["e" /* DragDropSortableService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__dnd_service__["e" /* DragDropSortableService */]) === 'function' && _e) || Object])
    ], SortableContainer);
    return SortableContainer;
    var _a, _b, _c, _d, _e;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));
var SortableComponent = (function (_super) {
    __extends(SortableComponent, _super);
    function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        _super.call(this, elemRef, dragDropService, config, cdr);
        this._sortableContainer = _sortableContainer;
        this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDragStartCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDragOverCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDragEndCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDropSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropZones = this._sortableContainer.dropZones;
        this.dragEnabled = true;
        this.dropEnabled = true;
    }
    Object.defineProperty(SortableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype._onDragStartCallback = function (event) {
        // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = true;
        this._sortableDataService.sortableContainer = this._sortableContainer;
        this._sortableDataService.index = this.index;
        this._sortableDataService.markSortable(this._elem);
        // Add dragData
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        //
        this.onDragStartCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragOverCallback = function (event) {
        if (this._sortableDataService.isDragged && this._elem !== this._sortableDataService.elem) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this._elem);
            this.onDragOverCallback.emit(this._dragDropService.dragData);
        }
    };
    SortableComponent.prototype._onDragEndCallback = function (event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            this._sortableDataService.markSortable(this._elem);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' + this._sortableDataService.index + ']');
                // Get item
                var item = this._sortableDataService.sortableContainer.sortableData[this._sortableDataService.index];
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.sortableData.splice(this._sortableDataService.index, 1);
                if (this._sortableDataService.sortableContainer.sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableContainer.sortableData.splice(this.index, 0, item);
                if (this._sortableContainer.dropEnabled) {
                    this._sortableContainer.dropEnabled = false;
                }
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
            }
        }
    };
    SortableComponent.prototype._onDropCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
            this.onDropSuccessCallback.emit(this._dragDropService.dragData);
            if (this._dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._sortableContainer.detectChanges();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('sortableIndex'), 
        __metadata('design:type', Number)
    ], SortableComponent.prototype, "index", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dragEnabled"), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SortableComponent.prototype, "draggable", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dropEnabled"), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SortableComponent.prototype, "droppable", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SortableComponent.prototype, "dragData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectAllowed"), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SortableComponent.prototype, "effectallowed", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectCursor"), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SortableComponent.prototype, "effectcursor", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDragSuccess"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], SortableComponent.prototype, "onDragSuccessCallback", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDragStart"), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], SortableComponent.prototype, "onDragStartCallback", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDragOver"), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], SortableComponent.prototype, "onDragOverCallback", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDragEnd"), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], SortableComponent.prototype, "onDragEndCallback", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDropSuccess"), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _e) || Object)
    ], SortableComponent.prototype, "onDropSuccessCallback", void 0);
    SortableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[dnd-sortable]' }), 
        __metadata('design:paramtypes', [(typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */]) === 'function' && _h) || Object, SortableContainer, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__dnd_service__["e" /* DragDropSortableService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__dnd_service__["e" /* DragDropSortableService */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _k) || Object])
    ], SortableComponent);
    return SortableComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isString;
/* harmony export (immutable) */ __webpack_exports__["a"] = isPresent;
/* harmony export (immutable) */ __webpack_exports__["d"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["c"] = createImage;
/* harmony export (immutable) */ __webpack_exports__["e"] = callFun;
/**
 * Check and return true if an object is type of string
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object not undefined or null
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * Check and return true if an object is type of Function
 */
function isFunction(obj) {
    return typeof obj === "function";
}
/**
 * Create Image element with specified url string
 */
function createImage(src) {
    var img = new HTMLImageElement();
    img.src = src;
    return img;
}
/**
 * Call the function
 */
function callFun(fun) {
    return fun();
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_draggable_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_abstract_component__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__src_abstract_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataTransferEffect", function() { return __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragImage", function() { return __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragDropConfig", function() { return __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragDropData", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dragDropServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragDropService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dragDropSortableServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragDropSortableService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DraggableComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DroppableComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SortableContainer", function() { return __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["b"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndModule", function() { return DndModule; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var providers = [
    __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["c" /* DragDropConfig */],
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["c" /* DragDropService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["b" /* dragDropServiceFactory */] },
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["e" /* DragDropSortableService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["d" /* dragDropSortableServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["c" /* DragDropConfig */]] }
];
var DndModule = (function () {
    function DndModule() {
    }
    DndModule.forRoot = function () {
        return {
            ngModule: DndModule,
            providers: providers
        };
    };
    DndModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["a" /* DraggableComponent */], __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__["a" /* DroppableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["a" /* SortableContainer */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["b" /* SortableComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["a" /* DraggableComponent */], __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__["a" /* DroppableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["a" /* SortableContainer */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["b" /* SortableComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], DndModule);
    return DndModule;
}());


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZDRkZmJlYzdmZjcyNmM2ZmE3NiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RuZC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RuZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hYnN0cmFjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYWdnYWJsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Ryb3BwYWJsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvcnRhYmxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG5kLnV0aWxzLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7Ozs7OztBQ0FBO0FBQUEsMENBQTBDO0FBQzFDLCtEQUErRDtBQUMvRCxvQ0FBb0M7QUFFQTtBQUVwQztJQU9JLDRCQUFtQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFMN0IsdUJBQUksR0FBRyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLHVCQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0Qyx1QkFBSSxHQUFHLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsdUJBQUksR0FBRyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBR2pELHlCQUFDO0FBQUQsQ0FBQztBQUVEO0lBQ0ksbUJBQ1csWUFBaUIsRUFDakIsUUFBb0IsRUFDcEIsUUFBb0I7UUFEM0Isd0JBQTJCLEdBQTNCLFlBQTJCO1FBQzNCLHdCQUEyQixHQUEzQixZQUEyQjtRQUZwQixpQkFBWSxHQUFaLFlBQVksQ0FBSztRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDdkIsRUFBRSxDQUFDLENBQUMsbUZBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLHVDQUF1QztZQUN2QyxJQUFJLE1BQU0sR0FBbUIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBYSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDdkQsQ0FBQztJQUNMLENBQUM7SUFDVCxnQkFBQztBQUFELENBQUM7QUFFRDtJQUFBO1FBQ1cscUJBQWdCLEdBQVcsZ0JBQWdCLENBQUM7UUFDNUMscUJBQWdCLEdBQVcsZ0JBQWdCLENBQUM7UUFDNUMsb0JBQWUsR0FBVyxlQUFlLENBQUM7UUFDMUMsd0JBQW1CLEdBQVcsbUJBQW1CLENBQUM7UUFFbEQsZUFBVSxHQUF1QixrQkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFDekQsZUFBVSxHQUF1QixrQkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFDekQsZUFBVSxHQUFXLE1BQU0sQ0FBQztJQUV2QyxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeENEO0FBQUEsMENBQTBDO0FBQzFDLCtEQUErRDtBQUMvRCxvQ0FBb0M7Ozs7Ozs7Ozs7QUFFa0I7QUFFWDtBQUNOO0FBR3JDO0lBQUE7SUFHQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDO0FBRUQ7SUFDSSxNQUFNLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUNqQyxDQUFDO0FBR0Q7SUFBQTtRQUNJLHFCQUFnQixHQUFrQixFQUFFLENBQUM7SUFJekMsQ0FBQztJQU5EO1FBQUMsZ0ZBQVUsRUFBRTs7dUJBQUE7SUFNYixzQkFBQztBQUFELENBQUM7QUFFRCx3Q0FBK0MsTUFBc0I7SUFDakUsTUFBTSxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUdEO0lBVUksaUNBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFBRyxDQUFDO0lBSjlDLHNCQUFXLHlDQUFJO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUlELDhDQUFZLEdBQVosVUFBYSxJQUFpQjtRQUMxQixFQUFFLENBQUMsQ0FBQyxvRkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsb0ZBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMvRCxDQUFDO0lBQ0wsQ0FBQztJQXJCTDtRQUFDLGdGQUFVLEVBQUU7OytCQUFBO0lBc0JiLDhCQUFDOztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyREQ7QUFBQSwwQ0FBMEM7QUFDMUMsK0RBQStEO0FBQy9ELG9DQUFvQzs7Ozs7Ozs7OztBQUV1QjtBQUNuQjtBQUVjO0FBQ1Q7QUFDb0M7QUFHakY7SUEyRUksMkJBQVksT0FBbUIsRUFBUyxnQkFBaUMsRUFBUyxPQUF1QixFQUM3RixJQUF1QjtRQTVFdkMsaUJBa1FDO1FBdkwyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDN0YsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUF2RW5DOztXQUVHO1FBQ0ssaUJBQVksR0FBWSxLQUFLLENBQUM7UUFTdEM7O1dBRUc7UUFDSCxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQTBCN0IsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQTJCekIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUt2QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDbkMsRUFBRTtRQUNGLGNBQWM7UUFDZCxFQUFFO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsVUFBQyxLQUFZO1lBQ2xDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsVUFBQyxLQUFnQjtZQUNyQyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLEVBQUU7WUFDRixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNqRSxDQUFDO1lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFDLEtBQVk7WUFDbEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFDLEtBQVk7WUFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7UUFDRixFQUFFO1FBQ0YsY0FBYztRQUNkLEVBQUU7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFDLEtBQWdCO1lBQ3RDLDRDQUE0QztZQUM1QyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLEVBQUU7WUFDRixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkMscUJBQXFCO2dCQUNyQixLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDdEYsb0JBQW9CO2dCQUNwQixFQUFFLENBQUMsQ0FBQyxvRkFBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLEVBQUUsQ0FBQyxDQUFDLG1GQUFRLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsS0FBSyxDQUFDLFlBQWEsQ0FBQyxZQUFZLENBQUMsc0ZBQVcsQ0FBUyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDaEYsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMscUZBQVUsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixLQUFLLENBQUMsWUFBYSxDQUFDLFlBQVksQ0FBQyxrRkFBTyxDQUFXLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksR0FBRyxHQUF5QixLQUFJLENBQUMsU0FBUyxDQUFDO3dCQUN6QyxLQUFLLENBQUMsWUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN6RixDQUFDO2dCQUNMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLG9GQUFTLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLElBQUksU0FBUyxHQUFjLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO29CQUM1QyxLQUFLLENBQUMsWUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzRyxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsS0FBSSxDQUFDLFdBQVcsR0FBZ0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNELEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDaEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztvQkFDN0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDbkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztvQkFDeEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDakQsS0FBSyxDQUFDLFlBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0YsQ0FBQztnQkFDRCxxQkFBcUI7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUNwQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUM5RixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO2dCQUNsRCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFVBQUMsS0FBWTtZQUNoQyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzRCxDQUFDO1lBQ0QsMENBQTBDO1lBQzFDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsbUNBQW1DO1lBQ25DLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2xELENBQUMsQ0FBQztJQUNOLENBQUM7SUE3SUQsc0JBQUksMENBQVc7YUFJZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7YUFORCxVQUFnQixPQUFnQjtZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQTRJRCxpQ0FBaUM7SUFFakMseUNBQWEsR0FBYjtRQUFBLGlCQUtDO1FBSkcsK0RBQStEO1FBQy9ELFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELDRCQUE0QjtJQUNwQix3Q0FBWSxHQUFwQixVQUFxQixLQUFZO1FBQzdCLGtFQUFrRTtRQUNsRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN0QiwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBRU8sdUNBQVcsR0FBbkIsVUFBb0IsS0FBWTtRQUM1QixvRUFBb0U7UUFDcEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsMkRBQTJEO1lBQzNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixnQ0FBZ0M7Z0JBQ2hDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQixDQUFDO1lBRUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDO0lBRU8sd0NBQVksR0FBcEIsVUFBcUIsS0FBWTtRQUM3QixrRUFBa0U7UUFDbEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG1DQUFPLEdBQWYsVUFBZ0IsS0FBWTtRQUN4Qiw2REFBNkQ7UUFDN0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLGdDQUFnQztnQkFDaEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsZ0NBQWdDO2dCQUNoQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsQ0FBQztZQUVELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFNUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQVksNkNBQWM7YUFBMUI7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxpRUFBaUU7Z0JBQ2pFLHVDQUF1QztnQkFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztnQkFFRCw0Q0FBNEM7Z0JBQzVDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQzdFLElBQUksUUFBUSxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUVELG9DQUFvQztJQUU1Qix3Q0FBWSxHQUFwQixVQUFxQixLQUFZO1FBQzdCLDZEQUE2RDtRQUM3RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4RCx1RkFBdUY7WUFDdkYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBRU8sc0NBQVUsR0FBbEIsVUFBbUIsS0FBWTtRQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzVDLHFGQUFxRjtRQUNyRixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDRCQUE0QjtJQUM1QixnREFBb0IsR0FBcEIsVUFBcUIsS0FBWSxJQUFJLENBQUM7SUFDdEMsK0NBQW1CLEdBQW5CLFVBQW9CLEtBQVksSUFBSSxDQUFDO0lBQ3JDLGdEQUFvQixHQUFwQixVQUFxQixLQUFZLElBQUksQ0FBQztJQUN0QywyQ0FBZSxHQUFmLFVBQWdCLEtBQVksSUFBSSxDQUFDO0lBRWpDLDRCQUE0QjtJQUM1QixnREFBb0IsR0FBcEIsVUFBcUIsS0FBWSxJQUFJLENBQUM7SUFDdEMsOENBQWtCLEdBQWxCLFVBQW1CLEtBQVksSUFBSSxDQUFDO0lBbFF4QztRQUFDLGdGQUFVLEVBQUU7O3lCQUFBO0lBbVFiLHdCQUFDOztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUM5UUQ7QUFBQSwwQ0FBMEM7QUFDMUMsK0RBQStEO0FBQy9ELG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FBRVc7QUFDaUM7QUFFMUI7QUFDQTtBQUNLO0FBRzNEO0lBQXdDLHNDQUFpQjtJQXFFckQsNEJBQVksT0FBbUIsRUFBRSxlQUFnQyxFQUFFLE1BQXFCLEVBQ3BGLEdBQXFCO1FBRXJCLGtCQUFNLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBbEVqRDs7V0FFRztRQUNPLGdCQUFXLEdBQStCLElBQUksMkRBQVksRUFBZ0IsQ0FBQztRQUMzRSxjQUFTLEdBQStCLElBQUksMkRBQVksRUFBZ0IsQ0FBQztRQU9uRjs7O1dBR0c7UUFDc0IsMEJBQXFCLEdBQXNCLElBQUksMkRBQVksRUFBTyxDQUFDO1FBb0R4RixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBekVxQixzQkFBSSx5Q0FBUzthQUFiLFVBQWMsS0FBYTtZQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFtQm1CLHNCQUFJLHlDQUFTO2FBQWIsVUFBYyxLQUFtQjtZQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUt1QixzQkFBSSw2Q0FBYTtRQUh6Qzs7V0FFRzthQUNxQixVQUFrQixLQUFhO1lBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBS3NCLHNCQUFJLDRDQUFZO1FBSHZDOztXQUVHO2FBQ29CLFVBQWlCLEtBQWE7WUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFzQ0QsaURBQW9CLEdBQXBCLFVBQXFCLEtBQWlCO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDeEQsRUFBRTtRQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELCtDQUFrQixHQUFsQixVQUFtQixLQUFpQjtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0QsRUFBRTtRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQTNGRDtRQUFDLDJFQUFLLENBQUMsYUFBYSxDQUFDOzs7dURBQUE7SUFPckI7UUFBQyw0RUFBTSxFQUFFOzsyREFBQTtJQUNUO1FBQUMsNEVBQU0sRUFBRTs7eURBQUE7SUFLVDtRQUFDLDJFQUFLLEVBQUU7O3dEQUFBO0lBTVI7UUFBQyw0RUFBTSxDQUFDLGVBQWUsQ0FBQzs7cUVBQUE7SUFFeEI7UUFBQywyRUFBSyxDQUFDLFdBQVcsQ0FBQzs7O3VEQUFBO0lBT25CO1FBQUMsMkVBQUssQ0FBQyxlQUFlLENBQUM7OzsyREFBQTtJQU92QjtRQUFDLDJFQUFLLENBQUMsY0FBYyxDQUFDOzs7MERBQUE7SUEyQnRCO1FBQUMsMkVBQUssRUFBRTs7eURBQUE7SUFHUjtRQUFDLDJFQUFLLEVBQUU7O3lEQUFBO0lBcEVaO1FBQUMsK0VBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxDQUFDOzswQkFBQTtJQStGM0MseUJBQUM7O0FBQUQsQ0FBQyxDQTlGdUMsOEVBQWlCLEdBOEZ4RDs7Ozs7Ozs7Ozs7OztBQzFHRDtBQUFBLDBDQUEwQztBQUMxQywrREFBK0Q7QUFDL0Qsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUFFVztBQUNpQztBQUUxQjtBQUNYO0FBQ2dCO0FBRzNEO0lBQXdDLHNDQUFpQjtJQXFDckQsNEJBQVksT0FBbUIsRUFBRSxlQUFnQyxFQUFFLE1BQXFCLEVBQ3BGLEdBQXFCO1FBRXJCLGtCQUFNLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBbENqRDs7O1dBR0c7UUFDTyxrQkFBYSxHQUErQixJQUFJLDJEQUFZLEVBQWdCLENBQUM7UUFDN0UsZ0JBQVcsR0FBK0IsSUFBSSwyREFBWSxFQUFnQixDQUFDO1FBQzNFLGVBQVUsR0FBK0IsSUFBSSwyREFBWSxFQUFnQixDQUFDO1FBQzFFLGdCQUFXLEdBQStCLElBQUksMkRBQVksRUFBZ0IsQ0FBQztRQTZCakYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQXpDcUIsc0JBQUkseUNBQVM7YUFBYixVQUFjLEtBQWE7WUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBV21CLHNCQUFJLHlDQUFTO2FBQWIsVUFBYyxLQUFpQztZQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVtQixzQkFBSSx5Q0FBUzthQUFiLFVBQWMsS0FBbUI7WUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFLdUIsc0JBQUksNkNBQWE7UUFIekM7O1dBRUc7YUFDcUIsVUFBa0IsS0FBYTtZQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUtzQixzQkFBSSw0Q0FBWTtRQUh2Qzs7V0FFRzthQUNvQixVQUFpQixLQUFhO1lBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBVUQsaURBQW9CLEdBQXBCLFVBQXFCLEtBQWlCO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUN6RixDQUFDO0lBQ0wsQ0FBQztJQUVELGdEQUFtQixHQUFuQixVQUFxQixLQUFpQjtRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7SUFDTCxDQUFDOztJQUVELGlEQUFvQixHQUFwQixVQUFzQixLQUFpQjtRQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDekYsQ0FBQztJQUNMLENBQUM7O0lBRUQsNENBQWUsR0FBZixVQUFpQixLQUFpQjtRQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUNwSCxDQUFDO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvRCxDQUFDO0lBQ0wsQ0FBQztJQTFFRDtRQUFDLDJFQUFLLENBQUMsYUFBYSxDQUFDOzs7dURBQUE7SUFRckI7UUFBQyw0RUFBTSxFQUFFOzs2REFBQTtJQUNUO1FBQUMsNEVBQU0sRUFBRTs7MkRBQUE7SUFDVDtRQUFDLDRFQUFNLEVBQUU7OzBEQUFBO0lBQ1Q7UUFBQyw0RUFBTSxFQUFFOzsyREFBQTtJQUVUO1FBQUMsMkVBQUssQ0FBQyxXQUFXLENBQUM7Ozt1REFBQTtJQUluQjtRQUFDLDJFQUFLLENBQUMsV0FBVyxDQUFDOzs7dURBQUE7SUFPbkI7UUFBQywyRUFBSyxDQUFDLGVBQWUsQ0FBQzs7OzJEQUFBO0lBT3ZCO1FBQUMsMkVBQUssQ0FBQyxjQUFjLENBQUM7OzswREFBQTtJQWxDMUI7UUFBQywrRUFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLENBQUM7OzBCQUFBO0lBOEUzQyx5QkFBQzs7QUFBRCxDQUFDLENBN0V1Qyw4RUFBaUIsR0E2RXhEOzs7Ozs7Ozs7Ozs7OztBQ3pGRDtBQUFBLDBDQUEwQztBQUMxQywrREFBK0Q7QUFDL0Qsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUFFVztBQUNpQztBQUUxQjtBQUNYO0FBQzJCO0FBR3RFO0lBQXVDLHFDQUFpQjtJQXNCcEQsMkJBQVksT0FBbUIsRUFBRSxlQUFnQyxFQUFFLE1BQXFCLEVBQUUsR0FBcUIsRUFDbkcsb0JBQTZDO1FBRXJELGtCQUFNLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRnJDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBeUI7UUFqQmpELGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBb0JuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBekJxQixzQkFBSSx3Q0FBUzthQUFiLFVBQWMsS0FBYTtZQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFJUSxzQkFBSSwyQ0FBWTthQU16QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7YUFSUSxVQUFpQixZQUF3QjtZQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztZQUNsQyxFQUFFO1lBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN4QywyRUFBMkU7UUFDL0UsQ0FBQzs7O09BQUE7SUFLbUIsc0JBQUksd0NBQVM7YUFBYixVQUFjLEtBQW1CO1lBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBU0QsZ0RBQW9CLEdBQXBCLFVBQXFCLEtBQVk7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxJQUFJLEdBQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUcsNkRBQTZEO1lBQzdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsZUFBZTtnQkFDZixrSUFBa0k7Z0JBQ2xJLGtDQUFrQztnQkFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ25FLENBQUM7Z0JBQ0QsdUJBQXVCO2dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztnQkFDbkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUNELHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUEvQ0Q7UUFBQywyRUFBSyxDQUFDLGFBQWEsQ0FBQzs7O3NEQUFBO0lBTXJCO1FBQUMsMkVBQUssRUFBRTs7O3lEQUFBO0lBVVI7UUFBQywyRUFBSyxDQUFDLFdBQVcsQ0FBQzs7O3NEQUFBO0lBbkJ2QjtRQUFDLCtFQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQzs7eUJBQUE7SUFtRHBELHdCQUFDOztBQUFELENBQUMsQ0FsRHNDLDhFQUFpQixHQWtEdkQ7QUFHRDtJQUF1QyxxQ0FBaUI7SUEwQ3BELDJCQUFZLE9BQW1CLEVBQUUsZUFBZ0MsRUFBRSxNQUFxQixFQUM1RSxrQkFBcUMsRUFDckMsb0JBQTZDLEVBQ3JELEdBQXFCO1FBRXJCLGtCQUFNLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBSnJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF5QjtRQWJ6RDs7O1dBR0c7UUFDc0IsMEJBQXFCLEdBQXNCLElBQUksMkRBQVksRUFBTyxDQUFDO1FBRXJFLHdCQUFtQixHQUFzQixJQUFJLDJEQUFZLEVBQU8sQ0FBQztRQUNsRSx1QkFBa0IsR0FBc0IsSUFBSSwyREFBWSxFQUFPLENBQUM7UUFDakUsc0JBQWlCLEdBQXNCLElBQUksMkRBQVksRUFBTyxDQUFDO1FBQzNELDBCQUFxQixHQUFzQixJQUFJLDJEQUFZLEVBQU8sQ0FBQztRQVN4RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQWhEcUIsc0JBQUksd0NBQVM7YUFBYixVQUFjLEtBQWE7WUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRXFCLHNCQUFJLHdDQUFTO2FBQWIsVUFBYyxLQUFhO1lBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQVV1QixzQkFBSSw0Q0FBYTtRQUh6Qzs7V0FFRzthQUNxQixVQUFrQixLQUFhO1lBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBS3NCLHNCQUFJLDJDQUFZO1FBSHZDOztXQUVHO2FBQ29CLFVBQWlCLEtBQWE7WUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUF5QkQsZ0RBQW9CLEdBQXBCLFVBQXFCLEtBQVk7UUFDN0IsK0VBQStFO1FBQy9FLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDdEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELGVBQWU7UUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN6RSxFQUFFO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELCtDQUFtQixHQUFuQixVQUFvQixLQUFZO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2Riw4RUFBOEU7WUFDOUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUN0RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDN0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNMLENBQUM7SUFFRCw4Q0FBa0IsR0FBbEIsVUFBbUIsS0FBWTtRQUMzQixpRkFBaUY7UUFDakYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLGVBQWU7UUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ25ELEVBQUU7UUFDRixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZ0RBQW9CLEdBQXBCLFVBQXFCLEtBQVk7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hELENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RyxxSUFBcUk7Z0JBQ3JJLFdBQVc7Z0JBQ1gsSUFBSSxJQUFJLEdBQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pHLGtDQUFrQztnQkFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ25FLENBQUM7Z0JBQ0QsdUJBQXVCO2dCQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDakUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUNoRCxDQUFDO2dCQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqRCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBZSxHQUFmLFVBQWlCLEtBQVk7UUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsZ0dBQWdHO1lBQ2hHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLGdHQUFnRztnQkFDaEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckYsQ0FBQztZQUNELHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUMsQ0FBQztJQUNMLENBQUM7SUE3SEQ7UUFBQywyRUFBSyxDQUFDLGVBQWUsQ0FBQzs7b0RBQUE7SUFFdkI7UUFBQywyRUFBSyxDQUFDLGFBQWEsQ0FBQzs7O3NEQUFBO0lBSXJCO1FBQUMsMkVBQUssQ0FBQyxhQUFhLENBQUM7OztzREFBQTtJQU9yQjtRQUFDLDJFQUFLLEVBQUU7O3VEQUFBO0lBS1I7UUFBQywyRUFBSyxDQUFDLGVBQWUsQ0FBQzs7OzBEQUFBO0lBT3ZCO1FBQUMsMkVBQUssQ0FBQyxjQUFjLENBQUM7Ozt5REFBQTtJQVF0QjtRQUFDLDRFQUFNLENBQUMsZUFBZSxDQUFDOztvRUFBQTtJQUV4QjtRQUFDLDRFQUFNLENBQUMsYUFBYSxDQUFDOztrRUFBQTtJQUN0QjtRQUFDLDRFQUFNLENBQUMsWUFBWSxDQUFDOztpRUFBQTtJQUNyQjtRQUFDLDRFQUFNLENBQUMsV0FBVyxDQUFDOztnRUFBQTtJQUNwQjtRQUFDLDRFQUFNLENBQUMsZUFBZSxDQUFDOztvRUFBQTtJQXpDNUI7UUFBQywrRUFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQUM7O3lCQUFBO0lBaUkxQyx3QkFBQzs7QUFBRCxDQUFDLENBaElzQyw4RUFBaUIsR0FnSXZEOzs7Ozs7Ozs7Ozs7QUNqTUQ7QUFBQTs7R0FFRztBQUNILGtCQUF5QixHQUFPO0lBQzVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUM7QUFDbkMsQ0FBQztBQUVEOztHQUVHO0FBQ0gsbUJBQTBCLEdBQVE7SUFDOUIsTUFBTSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztBQUM3QyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxvQkFBMkIsR0FBUTtJQUMvQixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFDO0FBQ3JDLENBQUM7QUFFRDs7R0FFRztBQUNILHFCQUE0QixHQUFXO0lBQ25DLElBQUksR0FBRyxHQUFvQixJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDbEQsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDZCxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsaUJBQXdCLEdBQWE7SUFDakMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFBQSwwQ0FBMEM7QUFDMUMsK0RBQStEO0FBQy9ELG9DQUFvQzs7Ozs7Ozs7OztBQUV5QjtBQUVkO0FBQ21GO0FBQ3RFO0FBQ0E7QUFDaUI7QUFFcEM7QUFDUjtBQUNDO0FBQ1E7QUFDQTtBQUNEO0FBRWxDLElBQUksU0FBUyxHQUFHO0lBQ25CLHVFQUFjO0lBQ2QsRUFBRSxPQUFPLEVBQUUseUVBQWUsRUFBRSxVQUFVLEVBQUUsZ0ZBQXNCLEVBQUU7SUFDaEUsRUFBRSxPQUFPLEVBQUUsaUZBQXVCLEVBQUUsVUFBVSxFQUFFLHdGQUE4QixFQUFFLElBQUksRUFBRSxDQUFDLHVFQUFjLENBQUMsRUFBRTtDQUMzRyxDQUFDO0FBT0Y7SUFBQTtJQU9BLENBQUM7SUFOUSxpQkFBTyxHQUFkO1FBQ00sTUFBTSxDQUFDO1lBQ0gsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLFNBQVM7U0FDdkIsQ0FBQztJQUNOLENBQUM7SUFYTDtRQUFDLDhFQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxvRkFBa0IsRUFBRSxvRkFBa0IsRUFBRSxrRkFBaUIsRUFBRSxrRkFBaUIsQ0FBQztZQUM1RixPQUFPLEVBQUcsQ0FBQyxvRkFBa0IsRUFBRSxvRkFBa0IsRUFBRSxrRkFBaUIsRUFBRSxrRkFBaUIsQ0FBQztTQUV6RixDQUFDOztpQkFBQTtJQVFGLGdCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJpbmRleC51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBhbmd1bGFyL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmcyLWRuZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5nMi1kbmRcIl0gPSBmYWN0b3J5KHJvb3RbXCJAYW5ndWxhci9jb3JlXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZDRkZmJlYzdmZjcyNmM2ZmE3NiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxuXG5pbXBvcnQge2lzU3RyaW5nfSBmcm9tICcuL2RuZC51dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVHJhbnNmZXJFZmZlY3Qge1xuXG4gICAgc3RhdGljIENPUFkgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdjb3B5Jyk7XG4gICAgc3RhdGljIExJTksgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdsaW5rJyk7XG4gICAgc3RhdGljIE1PVkUgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdtb3ZlJyk7XG4gICAgc3RhdGljIE5PTkUgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdub25lJyk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYWdJbWFnZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpbWFnZUVsZW1lbnQ6IGFueSxcbiAgICAgICAgcHVibGljIHhfb2Zmc2V0OiBudW1iZXIgPSAwLFxuICAgICAgICBwdWJsaWMgeV9vZmZzZXQ6IG51bWJlciA9IDApIHtcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh0aGlzLmltYWdlRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgcmVhbCBpbWFnZSBmcm9tIHN0cmluZyBzb3VyY2VcbiAgICAgICAgICAgICAgICBsZXQgaW1nU2NyOiBzdHJpbmcgPSA8c3RyaW5nPnRoaXMuaW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICAoPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5pbWFnZUVsZW1lbnQpLnNyYyA9IGltZ1NjcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BDb25maWcge1xuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSBcImRuZC1kcmFnLXN0YXJ0XCI7XG4gICAgcHVibGljIG9uRHJhZ0VudGVyQ2xhc3M6IHN0cmluZyA9IFwiZG5kLWRyYWctZW50ZXJcIjtcbiAgICBwdWJsaWMgb25EcmFnT3ZlckNsYXNzOiBzdHJpbmcgPSBcImRuZC1kcmFnLW92ZXJcIjtcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gXCJkbmQtc29ydGFibGUtZHJhZ1wiO1xuXG4gICAgcHVibGljIGRyYWdFZmZlY3Q6IERhdGFUcmFuc2ZlckVmZmVjdCA9IERhdGFUcmFuc2ZlckVmZmVjdC5NT1ZFO1xuICAgIHB1YmxpYyBkcm9wRWZmZWN0OiBEYXRhVHJhbnNmZXJFZmZlY3QgPSBEYXRhVHJhbnNmZXJFZmZlY3QuTU9WRTtcbiAgICBwdWJsaWMgZHJhZ0N1cnNvcjogc3RyaW5nID0gXCJtb3ZlXCI7XG4gICAgcHVibGljIGRyYWdJbWFnZTogRHJhZ0ltYWdlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9kbmQuY29uZmlnLnRzIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxuXG5pbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4vZG5kLmNvbmZpZyc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi9kbmQudXRpbHMnO1xuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lcn0gZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BEYXRhIHtcbiAgICBkcmFnRGF0YTogYW55O1xuICAgIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5KCk6IERyYWdEcm9wU2VydmljZSAge1xuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTZXJ2aWNlKCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFNlcnZpY2Uge1xuICAgIGFsbG93ZWREcm9wWm9uZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+O1xuICAgIGRyYWdEYXRhOiBhbnk7XG4gICAgaXNEcmFnZ2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5KGNvbmZpZzogRHJhZ0Ryb3BDb25maWcpOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSAge1xuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UoY29uZmlnKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlIHtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIHNvcnRhYmxlQ29udGFpbmVyOiBTb3J0YWJsZUNvbnRhaW5lcjtcbiAgICBpc0RyYWdnZWQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9lbGVtOiBIVE1MRWxlbWVudDtcbiAgICBwdWJsaWMgZ2V0IGVsZW0oKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb25maWc6RHJhZ0Ryb3BDb25maWcpIHt9XG5cbiAgICBtYXJrU29ydGFibGUoZWxlbTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9lbGVtKSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vblNvcnRhYmxlRHJhZ0NsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcmVzZW50KGVsZW0pKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtID0gZWxlbTtcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcub25Tb3J0YWJsZURyYWdDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvZG5kLnNlcnZpY2UudHMiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYgU2VyZ2V5IEFrb3Brb2toeWFudHNcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXG5cbmltcG9ydCB7SW5qZWN0YWJsZSwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZywgRHJhZ0ltYWdlfSBmcm9tICcuL2RuZC5jb25maWcnO1xuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4vZG5kLnNlcnZpY2UnO1xuaW1wb3J0IHtpc1N0cmluZywgaXNGdW5jdGlvbiwgaXNQcmVzZW50LCBjcmVhdGVJbWFnZSwgY2FsbEZ1bn0gZnJvbSAnLi9kbmQudXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RDb21wb25lbnQge1xuICAgIF9lbGVtOiBIVE1MRWxlbWVudDtcbiAgICBfZHJhZ0hlbHBlcjogSFRNTEVsZW1lbnQ7XG4gICAgX2RlZmF1bHRDdXJzb3I6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIG9iamVjdCBpcyBkcmFnZ2FibGUuIERlZmF1bHQgaXMgdHJ1ZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9kcmFnRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNldCBkcmFnRW5hYmxlZChlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2RyYWdFbmFibGVkID0gISFlbmFibGVkO1xuICAgICAgICB0aGlzLl9lbGVtLmRyYWdnYWJsZSA9IHRoaXMuX2RyYWdFbmFibGVkO1xuICAgIH1cbiAgICBnZXQgZHJhZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmFnRW5hYmxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgZHJvcCBvbiB0aGlzIGVsZW1lbnRcbiAgICAgKi9cbiAgICBkcm9wRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIERyYWcgZWZmZWN0XG4gICAgICovXG4gICAgZWZmZWN0QWxsb3dlZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIERyYWcgY3Vyc29yXG4gICAgICovXG4gICAgZWZmZWN0Q3Vyc29yOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBSZXN0cmljdCBwbGFjZXMgd2hlcmUgYSBkcmFnZ2FibGUgZWxlbWVudCBjYW4gYmUgZHJvcHBlZC4gRWl0aGVyIG9uZSBvZlxuICAgICAqIHRoZXNlIHR3byBtZWNoYW5pc21zIGNhbiBiZSB1c2VkOlxuICAgICAqXG4gICAgICogLSBkcm9wWm9uZXM6IGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCBwZXJtaXRzIHRvIHNwZWNpZnkgdGhlIGRyb3Agem9uZXNcbiAgICAgKiAgIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbXBvbmVudC4gQnkgZGVmYXVsdCwgaWYgdGhlIGRyb3Atem9uZXMgYXR0cmlidXRlXG4gICAgICogICBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgZHJvcHBhYmxlIGNvbXBvbmVudCBhY2NlcHRzIGRyb3Agb3BlcmF0aW9ucyBieVxuICAgICAqICAgYWxsIHRoZSBkcmFnZ2FibGUgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBzcGVjaWZ5IHRoZSBhbGxvd2VkLWRyb3Atem9uZXNcbiAgICAgKlxuICAgICAqIC0gYWxsb3dEcm9wOiBhIGJvb2xlYW4gZnVuY3Rpb24gZm9yIGRyb3BwYWJsZSBjb21wb25lbnRzLCB0aGF0IGlzIGNoZWNrZWRcbiAgICAgKiAgIHdoZW4gYW4gaXRlbSBpcyBkcmFnZ2VkLiBUaGUgZnVuY3Rpb24gaXMgcGFzc2VkIHRoZSBkcmFnRGF0YSBvZiB0aGlzXG4gICAgICogICBpdGVtLlxuICAgICAqICAgLSBpZiBpdCByZXR1cm5zIHRydWUsIHRoZSBpdGVtIGNhbiBiZSBkcm9wcGVkIGluIHRoaXMgY29tcG9uZW50XG4gICAgICogICAtIGlmIGl0IHJldHVybnMgZmFsc2UsIHRoZSBpdGVtIGNhbm5vdCBiZSBkcm9wcGVkIGhlcmVcbiAgICAgKi9cbiAgICBhbGxvd0Ryb3A6IChkcm9wRGF0YTogYW55KSA9PiBib29sZWFuO1xuICAgIGRyb3Bab25lczogc3RyaW5nW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEhlcmUgaXMgdGhlIHByb3BlcnR5IGRyYWdJbWFnZSB5b3UgY2FuIHVzZTpcbiAgICAgKiAtIFRoZSBzdHJpbmcgdmFsdWUgYXMgdXJsIHRvIHRoZSBpbWFnZVxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCIvaW1hZ2VzL3NpbXBsZXIucG5nXCI+XG4gICAgICogLi4uXG4gICAgICogLSBUaGUgRHJhZ0ltYWdlIHZhbHVlIHdpdGggSW1hZ2UgYW5kIG9wdGlvbmFsIG9mZnNldCBieSB4IGFuZCB5OlxuICAgICAqICAgbGV0IG15RHJhZ0ltYWdlOiBEcmFnSW1hZ2UgPSBuZXcgRHJhZ0ltYWdlKFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiwgMCwgMCk7XG4gICAgICogLi4uXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cIm15RHJhZ0ltYWdlXCI+XG4gICAgICogLi4uXG4gICAgICogLSBUaGUgY3VzdG9tIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgdmFsdWUgb2YgZHJhZ0ltYWdlIHByb2dyYW1tYXRpY2FsbHk6XG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cImdldERyYWdJbWFnZShzb21lRGF0YSlcIj5cbiAgICAgKiAuLi5cbiAgICAgKiAgIGdldERyYWdJbWFnZSh2YWx1ZTphbnkpOiBzdHJpbmcge1xuICAgICAqICAgICByZXR1cm4gdmFsdWUgPyBcIi9pbWFnZXMvc2ltcGxlcjEucG5nXCIgOiBcIi9pbWFnZXMvc2ltcGxlcjIucG5nXCJcbiAgICAgKiAgIH1cbiAgICAgKi9cbiAgICBkcmFnSW1hZ2U6IHN0cmluZyB8IERyYWdJbWFnZSB8IEZ1bmN0aW9uO1xuXG4gICAgY2xvbmVJdGVtOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgX2RyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgX2NvbmZpZzogRHJhZ0Ryb3BDb25maWcsXG4gICAgICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAvL1xuICAgICAgICAvLyBEUk9QIGV2ZW50c1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLl9lbGVtLm9uZHJhZ2VudGVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25EcmFnRW50ZXIoZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9lbGVtLm9uZHJhZ292ZXIgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25EcmFnT3ZlcihldmVudCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLl9jb25maWcuZHJvcEVmZmVjdC5uYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnbGVhdmUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdMZWF2ZShldmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2VsZW0ub25kcm9wID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25Ecm9wKGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gRHJhZyBldmVudHNcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdzdGFydCA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnc3RhcnQnLCBldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5fb25EcmFnU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJycpO1xuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBkcmFnIGVmZmVjdFxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5lZmZlY3RBbGxvd2VkIHx8IHRoaXMuX2NvbmZpZy5kcmFnRWZmZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGRyYWcgaW1hZ2VcbiAgICAgICAgICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMuZHJhZ0ltYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5kcmFnSW1hZ2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShjcmVhdGVJbWFnZSg8c3RyaW5nPnRoaXMuZHJhZ0ltYWdlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLmRyYWdJbWFnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGNhbGxGdW4oPEZ1bmN0aW9uPnRoaXMuZHJhZ0ltYWdlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nOiBEcmFnSW1hZ2UgPSA8RHJhZ0ltYWdlPnRoaXMuZHJhZ0ltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoaW1nLmltYWdlRWxlbWVudCwgaW1nLnhfb2Zmc2V0LCBpbWcueV9vZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXNlbnQodGhpcy5fY29uZmlnLmRyYWdJbWFnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRyYWdJbWFnZTogRHJhZ0ltYWdlID0gdGhpcy5fY29uZmlnLmRyYWdJbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLmltYWdlRWxlbWVudCwgZHJhZ0ltYWdlLnhfb2Zmc2V0LCBkcmFnSW1hZ2UueV9vZmZzZXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jbG9uZUl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlciA9IDxIVE1MRWxlbWVudD50aGlzLl9lbGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlci5jbGFzc0xpc3QuYWRkKCdkbmQtZHJhZy1pdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdIZWxwZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdIZWxwZXIuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlci5zdHlsZS5sZWZ0ID0gXCItMTAwMHB4XCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW0ucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9kcmFnSGVscGVyKTtcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UodGhpcy5fZHJhZ0hlbHBlciwgZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBkcmFnIGN1cnNvclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuZWZmZWN0Q3Vyc29yID8gdGhpcy5lZmZlY3RDdXJzb3IgOiB0aGlzLl9jb25maWcuZHJhZ0N1cnNvcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuX2RlZmF1bHRDdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9lbGVtLm9uZHJhZ2VuZCA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbGVtLnBhcmVudEVsZW1lbnQgJiYgdGhpcy5fZHJhZ0hlbHBlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9kcmFnSGVscGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdlbmQnLCBldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5fb25EcmFnRW5kKGV2ZW50KTtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgc3R5bGUgb2YgZHJhZ2dlZCBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuX2RlZmF1bHRDdXJzb3I7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqKioqKiogQ2hhbmdlIGRldGVjdGlvbiAqKioqKiovXG5cbiAgICBkZXRlY3RDaGFuZ2VzKCkge1xuICAgICAgICAvLyBQcm9ncmFtbWF0aWNhbGx5IHJ1biBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGZpeCBpc3N1ZSBpbiBTYWZhcmlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9LCAyNTApO1xuICAgIH1cblxuICAgIC8vKioqKioqIERyb3BwYWJsZSAqKioqKioqLy9cbiAgICBwcml2YXRlIF9vbkRyYWdFbnRlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ2VudGVyLl9pc0Ryb3BBbGxvd2VkJywgdGhpcy5faXNEcm9wQWxsb3dlZCk7XG4gICAgICAgIGlmICh0aGlzLl9pc0Ryb3BBbGxvd2VkKSB7XG4gICAgICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5fb25EcmFnRW50ZXJDYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbkRyYWdPdmVyKGV2ZW50OiBFdmVudCkge1xuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnb25kcmFnb3Zlci5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xuICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZCkge1xuICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgb3ZlciB0aGUgc2FtZSBzb3VyY2UgZWxlbWVudCAtIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fb25EcmFnT3ZlckNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uRHJhZ0xlYXZlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnbGVhdmUuX2lzRHJvcEFsbG93ZWQnLCB0aGlzLl9pc0Ryb3BBbGxvd2VkKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzRHJvcEFsbG93ZWQpIHtcbiAgICAgICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uRHJvcChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJvcC5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xuICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fb25Ecm9wQ2FsbGJhY2soZXZlbnQpO1xuXG4gICAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9pc0Ryb3BBbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCAmJiB0aGlzLmRyb3BFbmFibGVkKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCwgaWYgYGFsbG93RHJvcGAgaXMgc2V0LCBjYWxsIGl0IHRvIGRldGVybWluZSB3aGV0aGVyIHRoZVxuICAgICAgICAgICAgLy8gZHJhZ2dlZCBlbGVtZW50IGNhbiBiZSBkcm9wcGVkIGhlcmUuXG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd0Ryb3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxvd0Ryb3AodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB1c2UgZHJvcFpvbmVzIGlmIHRoZXkgYXJlIHNldC5cbiAgICAgICAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5sZW5ndGggPT09IDAgJiYgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZHJhZ1pvbmU6IHN0cmluZyA9IHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzW2ldO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5pbmRleE9mKGRyYWdab25lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyoqKioqKioqKioqIERyYWdnYWJsZSAqKioqKioqKioqLy9cblxuICAgIHByaXZhdGUgX29uRHJhZ1N0YXJ0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnc3RhcnQuZHJhZ0VuYWJsZWQnLCB0aGlzLl9kcmFnRW5hYmxlZCk7XG4gICAgICAgIGlmICh0aGlzLl9kcmFnRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSB0aGlzLmRyb3Bab25lcztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdzdGFydC5hbGxvd2VkRHJvcFpvbmVzJywgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMpO1xuICAgICAgICAgICAgdGhpcy5fb25EcmFnU3RhcnRDYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzID0gW107XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdlbmQuYWxsb3dlZERyb3Bab25lcycsIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzKTtcbiAgICAgICAgdGhpcy5fb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQpO1xuICAgIH1cblxuICAgIC8vKioqKiBEcm9wIENhbGxiYWNrcyAqKioqLy9cbiAgICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxuICAgIF9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cbiAgICBfb25EcmFnTGVhdmVDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxuICAgIF9vbkRyb3BDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxuXG4gICAgLy8qKioqIERyYWcgQ2FsbGJhY2tzICoqKiovL1xuICAgIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XG4gICAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYWJzdHJhY3QuY29tcG9uZW50LnRzIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxuXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Fic3RyYWN0Q29tcG9uZW50fSBmcm9tICcuL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2V9IGZyb20gJy4vZG5kLmNvbmZpZyc7XG5pbXBvcnQge0RyYWdEcm9wU2VydmljZSwgRHJhZ0Ryb3BEYXRhfSBmcm9tICcuL2RuZC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2RuZC1kcmFnZ2FibGVdJyB9KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dChcImRyYWdFbmFibGVkXCIpIHNldCBkcmFnZ2FibGUodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgZHJhZyBhY3Rpb25zIGhhcHBlbmVkLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcbiAgICBAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgdGhhdCBoYXMgdG8gYmUgZHJhZ2dlZC4gSXQgY2FuIGJlIGFueSBKUyBvYmplY3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkcmFnRGF0YTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyYWcgYWN0aW9uIGVuZHMgd2l0aCBhIHZhbGlkIGRyb3AgYWN0aW9uLlxuICAgICAqIEl0IGlzIGFjdGl2YXRlZCBhZnRlciB0aGUgb24tZHJvcC1zdWNjZXNzIGNhbGxiYWNrXG4gICAgICovXG4gICAgQE91dHB1dChcIm9uRHJhZ1N1Y2Nlc3NcIikgb25EcmFnU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgQElucHV0KFwiZHJvcFpvbmVzXCIpIHNldCBkcm9wem9uZXModmFsdWU6QXJyYXk8c3RyaW5nPikge1xuICAgICAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYWcgYWxsb3dlZCBlZmZlY3RcbiAgICAgKi9cbiAgICBASW5wdXQoXCJlZmZlY3RBbGxvd2VkXCIpIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhZyBlZmZlY3QgY3Vyc29yXG4gICAgICovXG4gICAgQElucHV0KFwiZWZmZWN0Q3Vyc29yXCIpIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlcmUgaXMgdGhlIHByb3BlcnR5IGRyYWdJbWFnZSB5b3UgY2FuIHVzZTpcbiAgICAgKiAtIFRoZSBzdHJpbmcgdmFsdWUgYXMgdXJsIHRvIHRoZSBpbWFnZVxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCIvaW1hZ2VzL3NpbXBsZXIucG5nXCI+XG4gICAgICogLi4uXG4gICAgICogLSBUaGUgRHJhZ0ltYWdlIHZhbHVlIHdpdGggSW1hZ2UgYW5kIG9mZnNldCBieSB4IGFuZCB5OlxuICAgICAqICAgbGV0IG15RHJhZ0ltYWdlOiBEcmFnSW1hZ2UgPSBuZXcgRHJhZ0ltYWdlKFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiwgMCwgMCk7XG4gICAgICogLi4uXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cIm15RHJhZ0ltYWdlXCI+XG4gICAgICogLi4uXG4gICAgICogLSBUaGUgY3VzdG9tIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgdmFsdWUgb2YgZHJhZ0ltYWdlIHByb2dyYW1tYXRpY2FsbHk6XG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cImdldERyYWdJbWFnZShzb21lRGF0YSlcIj5cbiAgICAgKiAuLi5cbiAgICAgKiAgIGdldERyYWdJbWFnZSh2YWx1ZTphbnkpOiBzdHJpbmcge1xuICAgICAqICAgICByZXR1cm4gdmFsdWUgPyBcIi9pbWFnZXMvc2ltcGxlcjEucG5nXCIgOiBcIi9pbWFnZXMvc2ltcGxlcjIucG5nXCJcbiAgICAgKiAgIH1cbiAgICAgKi9cbiAgICBASW5wdXQoKSBkcmFnSW1hZ2U6IHN0cmluZyB8IERyYWdJbWFnZSB8IEZ1bmN0aW9uO1xuXG4gICAgXG4gICAgQElucHV0KCkgY2xvbmVJdGVtOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZyxcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRDdXJzb3IgPSB0aGlzLl9lbGVtLnN0eWxlLmN1cnNvcjtcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgX29uRHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IHRoaXMuZHJhZ0RhdGE7XG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSB0aGlzLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaztcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5vbkRyYWdTdGFydENsYXNzKTtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5vbkRyYWdTdGFydC5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcbiAgICB9XG5cbiAgICBfb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vbkRyYWdTdGFydENsYXNzKTtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5vbkRyYWdFbmQuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9kcmFnZ2FibGUuY29tcG9uZW50LnRzIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxuXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Fic3RyYWN0Q29tcG9uZW50fSBmcm9tICcuL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuL2RuZC5jb25maWcnO1xuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wRGF0YX0gZnJvbSAnLi9kbmQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtZHJvcHBhYmxlXScgfSlcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoXCJkcm9wRW5hYmxlZFwiKSBzZXQgZHJvcHBhYmxlKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyb3AgYWN0aW9uIGNvbXBsZXRlcyBjb3JyZWN0bHkuXG4gICAgICogSXQgaXMgYWN0aXZhdGVkIGJlZm9yZSB0aGUgb24tZHJhZy1zdWNjZXNzIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkRyb3BTdWNjZXNzOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xuICAgIEBPdXRwdXQoKSBvbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcbiAgICBAT3V0cHV0KCkgb25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcbiAgICBAT3V0cHV0KCkgb25EcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XG5cbiAgICBASW5wdXQoXCJhbGxvd0Ryb3BcIikgc2V0IGFsbG93ZHJvcCh2YWx1ZTogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hbGxvd0Ryb3AgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJkcm9wWm9uZXNcIikgc2V0IGRyb3B6b25lcyh2YWx1ZTpBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhZyBhbGxvd2VkIGVmZmVjdFxuICAgICAqL1xuICAgIEBJbnB1dChcImVmZmVjdEFsbG93ZWRcIikgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVmZmVjdEFsbG93ZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcbiAgICAgKi9cbiAgICBASW5wdXQoXCJlZmZlY3RDdXJzb3JcIikgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZyxcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XG5cbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25EcmFnT3ZlckNhbGxiYWNrIChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5vbkRyYWdPdmVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX29uRHJhZ0xlYXZlQ2FsbGJhY2sgKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uRHJhZ092ZXJDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5vbkRyYWdMZWF2ZS5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIF9vbkRyb3BDYWxsYmFjayAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25Ecm9wU3VjY2Vzcy5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQoe2RyYWdEYXRhOiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uRHJhZ092ZXJDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2Ryb3BwYWJsZS5jb21wb25lbnQudHMiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYgU2VyZ2V5IEFrb3Brb2toeWFudHNcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXG5cbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWJzdHJhY3RDb21wb25lbnR9IGZyb20gJy4vYWJzdHJhY3QuY29tcG9uZW50JztcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4vZG5kLmNvbmZpZyc7XG5pbXBvcnQge0RyYWdEcm9wU2VydmljZSwgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2V9IGZyb20gJy4vZG5kLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG5kLXNvcnRhYmxlLWNvbnRhaW5lcl0nIH0pXG5leHBvcnQgY2xhc3MgU29ydGFibGVDb250YWluZXIgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoXCJkcmFnRW5hYmxlZFwiKSBzZXQgZHJhZ2dhYmxlKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc29ydGFibGVEYXRhOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICBASW5wdXQoKSBzZXQgc29ydGFibGVEYXRhKHNvcnRhYmxlRGF0YTogQXJyYXk8YW55Pikge1xuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGEgPSBzb3J0YWJsZURhdGE7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuZHJvcEVuYWJsZWQgPSAhIXRoaXMuX3NvcnRhYmxlRGF0YTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2xsZWN0aW9uIGlzIGNoYW5nZWQsIGRyb3AgZW5hYmxlZDogXCIgKyB0aGlzLmRyb3BFbmFibGVkKTtcbiAgICB9XG4gICAgZ2V0IHNvcnRhYmxlRGF0YSgpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlRGF0YTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJkcm9wWm9uZXNcIikgc2V0IGRyb3B6b25lcyh2YWx1ZTpBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZywgY2RyOkNoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSkge1xuXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xuICAgICAgICAgICAgbGV0IGl0ZW06YW55ID0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5fc29ydGFibGVEYXRhW3RoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXhdO1xuICAgICAgICAgICAgLy8gQ2hlY2sgZG9lcyBlbGVtZW50IGV4aXN0IGluIHNvcnRhYmxlRGF0YSBvZiB0aGlzIENvbnRhaW5lclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YS5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIExldCdzIGFkZCBpdFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb250YWluZXIuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgudG9TdHJpbmcoKSArICddIG92ZXIgcGFyZW50IG5vZGUnKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIHByZXZpb3VzZSBsaXN0XG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5fc29ydGFibGVEYXRhLnNwbGljZSh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5fc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIGl0ZW0gdG8gbmV3IGxpc3RcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGEudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG5kLXNvcnRhYmxlXScgfSlcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgnc29ydGFibGVJbmRleCcpIGluZGV4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoXCJkcmFnRW5hYmxlZFwiKSBzZXQgZHJhZ2dhYmxlKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KFwiZHJvcEVuYWJsZWRcIikgc2V0IGRyb3BwYWJsZSh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZHJvcEVuYWJsZWQgPSAhIXZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHRoYXQgaGFzIHRvIGJlIGRyYWdnZWQuIEl0IGNhbiBiZSBhbnkgSlMgb2JqZWN0XG4gICAgICovXG4gICAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcblxuICAgIC8qKlxuICAgICAqIERyYWcgYWxsb3dlZCBlZmZlY3RcbiAgICAgKi9cbiAgICBASW5wdXQoXCJlZmZlY3RBbGxvd2VkXCIpIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhZyBlZmZlY3QgY3Vyc29yXG4gICAgICovXG4gICAgQElucHV0KFwiZWZmZWN0Q3Vyc29yXCIpIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkcmFnIGFjdGlvbiBlbmRzIHdpdGggYSB2YWxpZCBkcm9wIGFjdGlvbi5cbiAgICAgKiBJdCBpcyBhY3RpdmF0ZWQgYWZ0ZXIgdGhlIG9uLWRyb3Atc3VjY2VzcyBjYWxsYmFja1xuICAgICAqL1xuICAgIEBPdXRwdXQoXCJvbkRyYWdTdWNjZXNzXCIpIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBPdXRwdXQoXCJvbkRyYWdTdGFydFwiKSBvbkRyYWdTdGFydENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoXCJvbkRyYWdPdmVyXCIpIG9uRHJhZ092ZXJDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KFwib25EcmFnRW5kXCIpIG9uRHJhZ0VuZENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoXCJvbkRyb3BTdWNjZXNzXCIpIG9uRHJvcFN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6RHJhZ0Ryb3BDb25maWcsXG4gICAgICAgIHByaXZhdGUgX3NvcnRhYmxlQ29udGFpbmVyOiBTb3J0YWJsZUNvbnRhaW5lcixcbiAgICAgICAgcHJpdmF0ZSBfc29ydGFibGVEYXRhU2VydmljZTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UsXG4gICAgICAgIGNkcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xuXG4gICAgICAgIHRoaXMuZHJvcFpvbmVzID0gdGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcFpvbmVzO1xuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgX29uRHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdfb25EcmFnU3RhcnRDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLl9lbGVtKTtcbiAgICAgICAgLy8gQWRkIGRyYWdEYXRhXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzQ2FsbGJhY2s7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnRDYWxsYmFjay5lbWl0KHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XG4gICAgfVxuXG4gICAgX29uRHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkICYmIHRoaXMuX2VsZW0gIT09IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuZWxlbSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdPdmVyQ2FsbGJhY2suIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XG4gICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuX2VsZW0pO1xuICAgICAgICAgICAgdGhpcy5vbkRyYWdPdmVyQ2FsbGJhY2suZW1pdCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ0VuZENhbGxiYWNrLiBlbmQgZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSBudWxsO1xuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZShudWxsKTtcbiAgICAgICAgLy8gQWRkIGRyYWdHYXRhXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMub25EcmFnRW5kQ2FsbGJhY2suZW1pdCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xuICAgIH1cblxuICAgIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuX2VsZW0pO1xuICAgICAgICAgICAgaWYgKCh0aGlzLmluZGV4ICE9PSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSAhPT0gdGhpcy5fc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhKSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21wb25lbnQuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuaW5kZXggKyAnXSBvdmVyIG5vZGUgWycgKyB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ICsgJ10nKTtcbiAgICAgICAgICAgICAgICAvLyBHZXQgaXRlbVxuICAgICAgICAgICAgICAgIGxldCBpdGVtOmFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhW3RoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXhdO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YS5zcGxpY2UodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIGl0ZW0gdG8gbmV3IGxpc3RcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEuc3BsaWNlKHRoaXMuaW5kZXgsIDAsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25Ecm9wQ2FsbGJhY2sgKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkRyb3BDYWxsYmFjay5vbkRyb3BTdWNjZXNzQ2FsbGJhY2suZHJhZ0RhdGEnLCB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xuICAgICAgICAgICAgdGhpcy5vbkRyb3BTdWNjZXNzQ2FsbGJhY2suZW1pdCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcbiAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9zb3J0YWJsZS5jb21wb25lbnQudHMiLCIvKipcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG9iajphbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIjtcbn1cblxuLyoqXG4gKiBDaGVjayBhbmQgcmV0dXJuIHRydWUgaWYgYW4gb2JqZWN0IG5vdCB1bmRlZmluZWQgb3IgbnVsbFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcmVzZW50KG9iajogYW55KSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbDtcbn1cblxuLyoqXG4gKiBDaGVjayBhbmQgcmV0dXJuIHRydWUgaWYgYW4gb2JqZWN0IGlzIHR5cGUgb2YgRnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG4vKipcbiAqIENyZWF0ZSBJbWFnZSBlbGVtZW50IHdpdGggc3BlY2lmaWVkIHVybCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNyYzogc3RyaW5nKSB7XG4gICAgbGV0IGltZzpIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIHJldHVybiBpbWc7XG59XG5cbi8qKlxuICogQ2FsbCB0aGUgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGxGdW4oZnVuOiBGdW5jdGlvbikge1xuICAgIHJldHVybiBmdW4oKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvZG5kLnV0aWxzLnRzIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxuXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4vc3JjL2RuZC5jb25maWcnO1xuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLCBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5LCBkcmFnRHJvcFNvcnRhYmxlU2VydmljZUZhY3Rvcnl9IGZyb20gJy4vc3JjL2RuZC5zZXJ2aWNlJztcbmltcG9ydCB7RHJhZ2dhYmxlQ29tcG9uZW50fSBmcm9tICcuL3NyYy9kcmFnZ2FibGUuY29tcG9uZW50JztcbmltcG9ydCB7RHJvcHBhYmxlQ29tcG9uZW50fSBmcm9tICcuL3NyYy9kcm9wcGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7U29ydGFibGVDb250YWluZXIsIFNvcnRhYmxlQ29tcG9uZW50fSBmcm9tICcuL3NyYy9zb3J0YWJsZS5jb21wb25lbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NyYy9hYnN0cmFjdC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG5kLmNvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9kbmQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9kcmFnZ2FibGUuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2Ryb3BwYWJsZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvc29ydGFibGUuY29tcG9uZW50JztcblxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbXG4gICAgRHJhZ0Ryb3BDb25maWcsXG4gICAgeyBwcm92aWRlOiBEcmFnRHJvcFNlcnZpY2UsIHVzZUZhY3Rvcnk6IGRyYWdEcm9wU2VydmljZUZhY3RvcnkgfSxcbiAgICB7IHByb3ZpZGU6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLCB1c2VGYWN0b3J5OiBkcmFnRHJvcFNvcnRhYmxlU2VydmljZUZhY3RvcnksIGRlcHM6IFtEcmFnRHJvcENvbmZpZ10gfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRHJhZ2dhYmxlQ29tcG9uZW50LCBEcm9wcGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHMgOiBbRHJhZ2dhYmxlQ29tcG9uZW50LCBEcm9wcGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgRG5kTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogRG5kTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcnNcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9