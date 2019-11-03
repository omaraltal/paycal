var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-income-tax-calculator-income-tax-calculator-module"], {
        /***/ "./node_modules/@angular/forms/fesm2015/forms.js": 
        /*!*******************************************************!*\
          !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
          \*******************************************************/
        /*! exports provided: ɵangular_packages_forms_forms_d, ɵInternalFormsSharedModule, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_z, ɵNgNoValidate, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_ba, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, NumberValueAccessor, RadioControlValueAccessor, RangeValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () { return ɵInternalFormsSharedModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () { return ɵInternalFormsSharedModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () { return REACTIVE_DRIVEN_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () { return SHARED_FORM_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () { return TEMPLATE_DRIVEN_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () { return CHECKBOX_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () { return DEFAULT_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () { return AbstractControlStatus; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () { return ngControlStatusHost; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () { return formDirectiveProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () { return NG_FORM_SELECTOR_WARNING; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () { return formControlBinding; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () { return modelGroupProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () { return ɵNgNoValidate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () { return ɵNgNoValidate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () { return NUMBER_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () { return RADIO_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () { return RadioControlRegistry; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () { return RANGE_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () { return formControlBinding$1; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () { return controlNameBinding; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () { return formDirectiveProvider$1; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () { return formArrayNameProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () { return formGroupNameProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () { return SELECT_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () { return ɵNgSelectMultipleOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () { return ɵNgSelectMultipleOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () { return CHECKBOX_REQUIRED_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () { return EMAIL_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () { return MAX_LENGTH_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () { return MIN_LENGTH_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function () { return PATTERN_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () { return REQUIRED_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () { return AbstractControlDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () { return AbstractFormGroupDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () { return CheckboxControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function () { return ControlContainer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () { return NG_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () { return COMPOSITION_BUFFER_MODE; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () { return DefaultValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function () { return NgControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () { return NgControlStatus; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () { return NgControlStatusGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function () { return NgForm; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormSelectorWarning", function () { return NgFormSelectorWarning; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function () { return NgModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () { return NgModelGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () { return NumberValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () { return RadioControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () { return RangeValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () { return FormControlDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function () { return FormControlName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () { return FormGroupDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function () { return FormArrayName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function () { return FormGroupName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () { return NgSelectOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () { return SelectControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () { return SelectMultipleControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () { return CheckboxRequiredValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function () { return EmailValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () { return MaxLengthValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () { return MinLengthValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function () { return PatternValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () { return RequiredValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function () { return FormBuilder; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function () { return AbstractControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function () { return FormArray; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function () { return FormControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function () { return FormGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () { return NG_ASYNC_VALIDATORS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () { return NG_VALIDATORS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function () { return Validators; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function () { return VERSION; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function () { return FormsModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () { return ReactiveFormsModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /**
             * @license Angular v8.2.12
             * (c) 2010-2019 Google LLC. https://angular.io/
             * License: MIT
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * Defines an interface that acts as a bridge between the Angular forms API and a
             * native element in the DOM.
             *
             * Implement this interface to create a custom form control directive
             * that integrates with Angular forms.
             *
             * @see DefaultValueAccessor
             *
             * \@publicApi
             * @record
             */
            function ControlValueAccessor() { }
            if (false) { }
            /**
             * Used to provide a `ControlValueAccessor` for form controls.
             *
             * See `DefaultValueAccessor` for how to implement one.
             *
             * \@publicApi
             * @type {?}
             */
            var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var CHECKBOX_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return CheckboxControlValueAccessor; })),
                multi: true,
            };
            /**
             * \@description
             * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
             * element.
             *
             * \@usageNotes
             *
             * ### Using a checkbox with a reactive form.
             *
             * The following example shows how to use a checkbox with a reactive form.
             *
             * ```ts
             * const rememberLoginControl = new FormControl();
             * ```
             *
             * ```
             * <input type="checkbox" [formControl]="rememberLoginControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var CheckboxControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function CheckboxControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "checked" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.writeValue = function (value) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return CheckboxControlValueAccessor;
            }());
            CheckboxControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                            host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                            providers: [CHECKBOX_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            CheckboxControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var DEFAULT_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return DefaultValueAccessor; })),
                multi: true
            };
            /**
             * We must check whether the agent is Android because composition events
             * behave differently between iOS and Android.
             * @return {?}
             */
            function _isAndroid() {
                /** @type {?} */
                var userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
                return /android (\d+)/.test(userAgent.toLowerCase());
            }
            /**
             * \@description
             * Provide this token to control if form directives buffer IME input until
             * the "compositionend" event occurs.
             * \@publicApi
             * @type {?}
             */
            var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
            /**
             * \@description
             * The default `ControlValueAccessor` for writing a value and listening to changes on input
             * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using the default value accessor
             *
             * The following example shows how to use an input element that activates the default value accessor
             * (in this case, a text field).
             *
             * ```ts
             * const firstNameControl = new FormControl();
             * ```
             *
             * ```
             * <input type="text" [formControl]="firstNameControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var DefaultValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 * @param {?} _compositionMode
                 */
                function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    this._compositionMode = _compositionMode;
                    /**
                     * \@description
                     * The registered callback function called when an input event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * Whether the user is creating a composition string (IME events).
                     */
                    this._composing = false;
                    if (this._compositionMode == null) {
                        this._compositionMode = !_isAndroid();
                    }
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.writeValue = function (value) {
                    /** @type {?} */
                    var normalizedValue = value == null ? '' : value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._handleInput = function (value) {
                    if (!this._compositionMode || (this._compositionMode && !this._composing)) {
                        this.onChange(value);
                    }
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._compositionEnd = function (value) {
                    this._composing = false;
                    this._compositionMode && this.onChange(value);
                };
                return DefaultValueAccessor;
            }());
            DefaultValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                            // TODO: vsavkin replace the above selector with the one below it once
                            // https://github.com/angular/angular/issues/3011 is implemented
                            // selector: '[ngModel],[formControl],[formControlName]',
                            host: {
                                '(input)': '$any(this)._handleInput($event.target.value)',
                                '(blur)': 'onTouched()',
                                '(compositionstart)': '$any(this)._compositionStart()',
                                '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
                            },
                            providers: [DEFAULT_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            DefaultValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COMPOSITION_BUFFER_MODE,] }] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * \@description
             * Base class for control directives.
             *
             * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
             *
             * \@publicApi
             * @abstract
             */
            var AbstractControlDirective = /** @class */ (function () {
                function AbstractControlDirective() {
                }
                Object.defineProperty(AbstractControlDirective.prototype, "value", {
                    /**
                     * \@description
                     * Reports the value of the control if it is present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.value : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "valid", {
                    /**
                     * \@description
                     * Reports whether the control is valid. A control is considered valid if no
                     * validation errors exist with the current value.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.valid : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
                    /**
                     * \@description
                     * Reports whether the control is invalid, meaning that an error exists in the input value.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.invalid : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "pending", {
                    /**
                     * \@description
                     * Reports whether a control is pending, meaning that that async validation is occurring and
                     * errors are not yet available for the input value. If the control is not present, null is
                     * returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.pending : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
                    /**
                     * \@description
                     * Reports whether the control is disabled, meaning that the control is disabled
                     * in the UI and is exempt from validation checks and excluded from aggregate
                     * values of ancestor controls. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.disabled : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
                    /**
                     * \@description
                     * Reports whether the control is enabled, meaning that the control is included in ancestor
                     * calculations of validity or value. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.enabled : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "errors", {
                    /**
                     * \@description
                     * Reports the control's validation errors. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.errors : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
                    /**
                     * \@description
                     * Reports whether the control is pristine, meaning that the user has not yet changed
                     * the value in the UI. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.pristine : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
                    /**
                     * \@description
                     * Reports whether the control is dirty, meaning that the user has changed
                     * the value in the UI. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.dirty : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "touched", {
                    /**
                     * \@description
                     * Reports whether the control is touched, meaning that the user has triggered
                     * a `blur` event on it. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.touched : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "status", {
                    /**
                     * \@description
                     * Reports the validation status of the control. Possible values include:
                     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.status : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
                    /**
                     * \@description
                     * Reports whether the control is untouched, meaning that the user has not yet triggered
                     * a `blur` event on it. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.untouched : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
                    /**
                     * \@description
                     * Returns a multicasting observable that emits a validation status whenever it is
                     * calculated for the control. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () {
                        return this.control ? this.control.statusChanges : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
                    /**
                     * \@description
                     * Returns a multicasting observable of value changes for the control that emits every time the
                     * value of the control changes in the UI or programmatically.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () {
                        return this.control ? this.control.valueChanges : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Resets the control with the provided value if the control is present.
                 * @param {?=} value
                 * @return {?}
                 */
                AbstractControlDirective.prototype.reset = function (value) {
                    if (value === void 0) { value = undefined; }
                    if (this.control)
                        this.control.reset(value);
                };
                /**
                 * \@description
                 * Reports whether the control with the given path has the error specified.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * If no path is given, this method checks for the error on the current control.
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} whether the given error is present in the control at the given path.
                 *
                 * If the control is not present, false is returned.
                 */
                AbstractControlDirective.prototype.hasError = function (errorCode, path) {
                    return this.control ? this.control.hasError(errorCode, path) : false;
                };
                /**
                 * \@description
                 * Reports error data for the control with the given path.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} error data for that particular error. If the control or error is not present,
                 * null is returned.
                 */
                AbstractControlDirective.prototype.getError = function (errorCode, path) {
                    return this.control ? this.control.getError(errorCode, path) : null;
                };
                return AbstractControlDirective;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * A base class for directives that contain multiple registered instances of `NgControl`.
             * Only used by the forms module.
             *
             * \@publicApi
             * @abstract
             */
            var ControlContainer = /** @class */ (function (_super) {
                __extends(ControlContainer, _super);
                function ControlContainer() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(ControlContainer.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level form directive for the control.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ControlContainer.prototype, "path", {
                    /**
                     * \@description
                     * The path to this group.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                return ControlContainer;
            }(AbstractControlDirective));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @return {?}
             */
            function unimplemented() {
                throw new Error('unimplemented');
            }
            /**
             * \@description
             * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
             * object to a DOM element.
             *
             * \@publicApi
             * @abstract
             */
            var NgControl = /** @class */ (function (_super) {
                __extends(NgControl, _super);
                function NgControl() {
                    var _this = _super.apply(this, arguments) || this;
                    /**
                     * \@description
                     * The parent form for the control.
                     *
                     * \@internal
                     */
                    _this._parent = null;
                    /**
                     * \@description
                     * The name for the control
                     */
                    _this.name = null;
                    /**
                     * \@description
                     * The value accessor for the control
                     */
                    _this.valueAccessor = null;
                    /**
                     * \@description
                     * The uncomposed array of synchronous validators for the control
                     *
                     * \@internal
                     */
                    _this._rawValidators = [];
                    /**
                     * \@description
                     * The uncomposed array of async validators for the control
                     *
                     * \@internal
                     */
                    _this._rawAsyncValidators = [];
                    return _this;
                }
                Object.defineProperty(NgControl.prototype, "validator", {
                    /**
                     * \@description
                     * The registered synchronous validator function for the control
                     *
                     * @throws An exception that this method is not implemented
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(unimplemented())); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgControl.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * The registered async validator function for the control
                     *
                     * @throws An exception that this method is not implemented
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(unimplemented())); },
                    enumerable: true,
                    configurable: true
                });
                return NgControl;
            }(AbstractControlDirective));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var AbstractControlStatus = /** @class */ (function () {
                /**
                 * @param {?} cd
                 */
                function AbstractControlStatus(cd) {
                    this._cd = cd;
                }
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.untouched : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.touched : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.pristine : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.dirty : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.valid : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.invalid : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.pending : false; },
                    enumerable: true,
                    configurable: true
                });
                return AbstractControlStatus;
            }());
            if (false) { }
            /** @type {?} */
            var ngControlStatusHost = {
                '[class.ng-untouched]': 'ngClassUntouched',
                '[class.ng-touched]': 'ngClassTouched',
                '[class.ng-pristine]': 'ngClassPristine',
                '[class.ng-dirty]': 'ngClassDirty',
                '[class.ng-valid]': 'ngClassValid',
                '[class.ng-invalid]': 'ngClassInvalid',
                '[class.ng-pending]': 'ngClassPending',
            };
            /**
             * \@description
             * Directive automatically applied to Angular form controls that sets CSS classes
             * based on control status.
             *
             * \@usageNotes
             *
             * ### CSS classes applied
             *
             * The following classes are applied as the properties become true:
             *
             * * ng-valid
             * * ng-invalid
             * * ng-pending
             * * ng-pristine
             * * ng-dirty
             * * ng-untouched
             * * ng-touched
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgControlStatus = /** @class */ (function (_super) {
                __extends(NgControlStatus, _super);
                /**
                 * @param {?} cd
                 */
                function NgControlStatus(cd) {
                    return _super.call(this, cd) || this;
                }
                return NgControlStatus;
            }(AbstractControlStatus));
            NgControlStatus.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] }
            ];
            /** @nocollapse */
            NgControlStatus.ctorParameters = function () { return [
                { type: NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
            ]; };
            /**
             * \@description
             * Directive automatically applied to Angular form groups that sets CSS classes
             * based on control status (valid/invalid/dirty/etc).
             *
             * @see `NgControlStatus`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgControlStatusGroup = /** @class */ (function (_super) {
                __extends(NgControlStatusGroup, _super);
                /**
                 * @param {?} cd
                 */
                function NgControlStatusGroup(cd) {
                    return _super.call(this, cd) || this;
                }
                return NgControlStatusGroup;
            }(AbstractControlStatus));
            NgControlStatusGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                            host: ngControlStatusHost
                        },] }
            ];
            /** @nocollapse */
            NgControlStatusGroup.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} value
             * @return {?}
             */
            function isEmptyInputValue(value) {
                // we don't check for string here so it also works with arrays
                return value == null || value.length === 0;
            }
            /**
             * \@description
             * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
             *
             * @see `NG_ASYNC_VALIDATORS`
             *
             * \@usageNotes
             *
             * ### Providing a custom validator
             *
             * The following example registers a custom validator directive. Adding the validator to the
             * existing collection of validators requires the `multi: true` option.
             *
             * ```typescript
             * \@Directive({
             *   selector: '[customValidator]',
             *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
             * })
             * class CustomValidatorDirective implements Validator {
             *   validate(control: AbstractControl): ValidationErrors | null {
             *     return { 'custom': true };
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @type {?}
             */
            var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
            /**
             * \@description
             * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
             *
             * @see `NG_VALIDATORS`
             *
             * \@publicApi
             * @type {?}
             */
            var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
            /**
             * A regular expression that matches valid e-mail addresses.
             *
             * At a high level, this regexp matches e-mail addresses of the format `local-part\@tld`, where:
             * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
             *   punctuation symbols).
             * - `local-part` cannot begin or end with a period (`.`).
             * - `local-part` cannot be longer than 64 characters.
             * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
             *   `foo.com`.
             * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
             *   periods (`.`)).
             * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
             * - A `label` cannot be longer than 63 characters.
             * - The whole address cannot be longer than 254 characters.
             *
             * ## Implementation background
             *
             * This regexp was ported over from AngularJS (see there for git history):
             * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
             * It is based on the
             * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
             * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
             * lengths of different parts of the address). The main differences from the WHATWG version are:
             *   - Disallow `local-part` to begin or end with a period (`.`).
             *   - Disallow `local-part` length to exceed 64 characters.
             *   - Disallow total address length to exceed 254 characters.
             *
             * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
             * @type {?}
             */
            var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            /**
             * \@description
             * Provides a set of built-in validators that can be used by form controls.
             *
             * A validator is a function that processes a `FormControl` or collection of
             * controls and returns an error map or null. A null map means that validation has passed.
             *
             * @see [Form Validation](/guide/form-validation)
             *
             * \@publicApi
             */
            var Validators = /** @class */ (function () {
                function Validators() {
                }
                /**
                 * \@description
                 * Validator that requires the control's value to be greater than or equal to the provided number.
                 * The validator exists only as a function and not as a directive.
                 *
                 * \@usageNotes
                 *
                 * ### Validate against a minimum of 3
                 *
                 * ```typescript
                 * const control = new FormControl(2, Validators.min(3));
                 *
                 * console.log(control.errors); // {min: {min: 3, actual: 2}}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} min
                 * @return {?} A validator function that returns an error map with the
                 * `min` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.min = function (min) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = parseFloat(control.value);
                        // Controls with NaN values after parsing should be treated as not having a
                        // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
                        return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control's value to be less than or equal to the provided number.
                 * The validator exists only as a function and not as a directive.
                 *
                 * \@usageNotes
                 *
                 * ### Validate against a maximum of 15
                 *
                 * ```typescript
                 * const control = new FormControl(16, Validators.max(15));
                 *
                 * console.log(control.errors); // {max: {max: 15, actual: 16}}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} max
                 * @return {?} A validator function that returns an error map with the
                 * `max` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.max = function (max) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = parseFloat(control.value);
                        // Controls with NaN values after parsing should be treated as not having a
                        // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
                        return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control have a non-empty value.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field is non-empty
                 *
                 * ```typescript
                 * const control = new FormControl('', Validators.required);
                 *
                 * console.log(control.errors); // {required: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map with the `required` property
                 * if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.required = function (control) {
                    return isEmptyInputValue(control.value) ? { 'required': true } : null;
                };
                /**
                 * \@description
                 * Validator that requires the control's value be true. This validator is commonly
                 * used for required checkboxes.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field value is true
                 *
                 * ```typescript
                 * const control = new FormControl('', Validators.requiredTrue);
                 *
                 * console.log(control.errors); // {required: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map that contains the `required` property
                 * set to `true` if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.requiredTrue = function (control) {
                    return control.value === true ? null : { 'required': true };
                };
                /**
                 * \@description
                 * Validator that requires the control's value pass an email validation test.
                 *
                 * Tests the value using a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
                 * pattern suitable for common usecases. The pattern is based on the definition of a valid email
                 * address in the [WHATWG HTML specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)
                 * with some enhancements to incorporate more RFC rules (such as rules related to domain names and
                 * the lengths of different parts of the address).
                 *
                 * The differences from the WHATWG version include:
                 * - Disallow `local-part` (the part before the `\@` symbol) to begin or end with a period (`.`).
                 * - Disallow `local-part` to be longer than 64 characters.
                 * - Disallow the whole address to be longer than 254 characters.
                 *
                 * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
                 * validate the value against a different pattern.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field matches a valid email pattern
                 *
                 * ```typescript
                 * const control = new FormControl('bad\@', Validators.email);
                 *
                 * console.log(control.errors); // {email: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map with the `email` property
                 * if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.email = function (control) {
                    if (isEmptyInputValue(control.value)) {
                        return null; // don't validate empty values to allow optional controls
                    }
                    return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
                };
                /**
                 * \@description
                 * Validator that requires the length of the control's value to be greater than or equal
                 * to the provided minimum length. This validator is also provided by default if you use the
                 * the HTML5 `minlength` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field has a minimum of 3 characters
                 *
                 * ```typescript
                 * const control = new FormControl('ng', Validators.minLength(3));
                 *
                 * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
                 * ```
                 *
                 * ```html
                 * <input minlength="5">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} minLength
                 * @return {?} A validator function that returns an error map with the
                 * `minlength` if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.minLength = function (minLength) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var length = control.value ? control.value.length : 0;
                        return length < minLength ?
                            { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                            null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the length of the control's value to be less than or equal
                 * to the provided maximum length. This validator is also provided by default if you use the
                 * the HTML5 `maxlength` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field has maximum of 5 characters
                 *
                 * ```typescript
                 * const control = new FormControl('Angular', Validators.maxLength(5));
                 *
                 * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
                 * ```
                 *
                 * ```html
                 * <input maxlength="5">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} maxLength
                 * @return {?} A validator function that returns an error map with the
                 * `maxlength` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.maxLength = function (maxLength) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        /** @type {?} */
                        var length = control.value ? control.value.length : 0;
                        return length > maxLength ?
                            { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                            null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control's value to match a regex pattern. This validator is also
                 * provided by default if you use the HTML5 `pattern` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field only contains letters or spaces
                 *
                 * ```typescript
                 * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
                 *
                 * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
                 * ```
                 *
                 * ```html
                 * <input pattern="[a-zA-Z ]*">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} pattern A regular expression to be used as is to test the values, or a string.
                 * If a string is passed, the `^` character is prepended and the `$` character is
                 * appended to the provided string (if not already present), and the resulting regular
                 * expression is used to test the values.
                 *
                 * @return {?} A validator function that returns an error map with the
                 * `pattern` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.pattern = function (pattern) {
                    if (!pattern)
                        return Validators.nullValidator;
                    /** @type {?} */
                    var regex;
                    /** @type {?} */
                    var regexStr;
                    if (typeof pattern === 'string') {
                        regexStr = '';
                        if (pattern.charAt(0) !== '^')
                            regexStr += '^';
                        regexStr += pattern;
                        if (pattern.charAt(pattern.length - 1) !== '$')
                            regexStr += '$';
                        regex = new RegExp(regexStr);
                    }
                    else {
                        regexStr = pattern.toString();
                        regex = pattern;
                    }
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = control.value;
                        return regex.test(value) ? null :
                            { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
                    });
                };
                /**
                 * \@description
                 * Validator that performs no operation.
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?}
                 */
                Validators.nullValidator = function (control) { return null; };
                /**
                 * @param {?} validators
                 * @return {?}
                 */
                Validators.compose = function (validators) {
                    if (!validators)
                        return null;
                    /** @type {?} */
                    var presentValidators = ( /** @type {?} */(validators.filter(isPresent)));
                    if (presentValidators.length == 0)
                        return null;
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        return _mergeErrors(_executeValidators(control, presentValidators));
                    });
                };
                /**
                 * \@description
                 * Compose multiple async validators into a single function that returns the union
                 * of the individual error objects for the provided control.
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} validators
                 * @return {?} A validator function that returns an error map with the
                 * merged error objects of the async validators if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.composeAsync = function (validators) {
                    if (!validators)
                        return null;
                    /** @type {?} */
                    var presentValidators = ( /** @type {?} */(validators.filter(isPresent)));
                    if (presentValidators.length == 0)
                        return null;
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        /** @type {?} */
                        var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
                    });
                };
                return Validators;
            }());
            /**
             * @param {?} o
             * @return {?}
             */
            function isPresent(o) {
                return o != null;
            }
            /**
             * @param {?} r
             * @return {?}
             */
            function toObservable(r) {
                /** @type {?} */
                var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
                if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs))) {
                    throw new Error("Expected validator to return Promise or Observable.");
                }
                return obs;
            }
            /**
             * @param {?} control
             * @param {?} validators
             * @return {?}
             */
            function _executeValidators(control, validators) {
                return validators.map(( /**
                 * @param {?} v
                 * @return {?}
                 */function (/**
                 * @param {?} v
                 * @return {?}
                 */ v) { return v(control); }));
            }
            /**
             * @param {?} control
             * @param {?} validators
             * @return {?}
             */
            function _executeAsyncValidators(control, validators) {
                return validators.map(( /**
                 * @param {?} v
                 * @return {?}
                 */function (/**
                 * @param {?} v
                 * @return {?}
                 */ v) { return v(control); }));
            }
            /**
             * @param {?} arrayOfErrors
             * @return {?}
             */
            function _mergeErrors(arrayOfErrors) {
                /** @type {?} */
                var res = arrayOfErrors.reduce(( /**
                 * @param {?} res
                 * @param {?} errors
                 * @return {?}
                 */function (res, errors) {
                    return errors != null ? Object.assign({}, ( /** @type {?} */(res)), errors) : ( /** @type {?} */(res));
                }), {});
                return Object.keys(res).length === 0 ? null : res;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @param {?} validator
             * @return {?}
             */
            function normalizeValidator(validator) {
                if ((( /** @type {?} */(validator))).validate) {
                    return ( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return (( /** @type {?} */(validator))).validate(c); });
                }
                else {
                    return ( /** @type {?} */(validator));
                }
            }
            /**
             * @param {?} validator
             * @return {?}
             */
            function normalizeAsyncValidator(validator) {
                if ((( /** @type {?} */(validator))).validate) {
                    return ( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return (( /** @type {?} */(validator))).validate(c); });
                }
                else {
                    return ( /** @type {?} */(validator));
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NUMBER_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NumberValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * The `ControlValueAccessor` for writing a number value and listening to number input changes.
             * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
             * directives.
             *
             * \@usageNotes
             *
             * ### Using a number input with a reactive form.
             *
             * The following example shows how to use a number input with a reactive form.
             *
             * ```ts
             * const totalCountControl = new FormControl();
             * ```
             *
             * ```
             * <input type="number" [formControl]="totalCountControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NumberValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function NumberValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change or input event occurs on the input
                     * element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                NumberValueAccessor.prototype.writeValue = function (value) {
                    // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
                    /** @type {?} */
                    var normalizedValue = value == null ? '' : value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                NumberValueAccessor.prototype.registerOnChange = function (fn) {
                    this.onChange = ( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) { fn(value == '' ? null : parseFloat(value)); });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return NumberValueAccessor;
            }());
            NumberValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                            host: {
                                '(change)': 'onChange($event.target.value)',
                                '(input)': 'onChange($event.target.value)',
                                '(blur)': 'onTouched()'
                            },
                            providers: [NUMBER_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            NumberValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var RADIO_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RadioControlValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * Class used by Angular to track radio buttons. For internal use only.
             */
            var RadioControlRegistry = /** @class */ (function () {
                function RadioControlRegistry() {
                    this._accessors = [];
                }
                /**
                 * \@description
                 * Adds a control to the internal registry. For internal use only.
                 * @param {?} control
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.add = function (control, accessor) {
                    this._accessors.push([control, accessor]);
                };
                /**
                 * \@description
                 * Removes a control from the internal registry. For internal use only.
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.remove = function (accessor) {
                    for (var i = this._accessors.length - 1; i >= 0; --i) {
                        if (this._accessors[i][1] === accessor) {
                            this._accessors.splice(i, 1);
                            return;
                        }
                    }
                };
                /**
                 * \@description
                 * Selects a radio button. For internal use only.
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.select = function (accessor) {
                    var _this = this;
                    this._accessors.forEach(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) {
                        if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                            c[1].fireUncheck(accessor.value);
                        }
                    }));
                };
                /**
                 * @private
                 * @param {?} controlPair
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
                    if (!controlPair[0].control)
                        return false;
                    return controlPair[0]._parent === accessor._control._parent &&
                        controlPair[1].name === accessor.name;
                };
                return RadioControlRegistry;
            }());
            RadioControlRegistry.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            if (false) { }
            /**
             * \@description
             * The `ControlValueAccessor` for writing radio control values and listening to radio control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using radio buttons with reactive form directives
             *
             * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
             * a reactive form, radio buttons in the same group should have the same `formControlName`.
             * Providing a `name` attribute is optional.
             *
             * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var RadioControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 * @param {?} _registry
                 * @param {?} _injector
                 */
                function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    this._registry = _registry;
                    this._injector = _injector;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive is initialized. For internal use only.
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.ngOnInit = function () {
                    this._control = this._injector.get(NgControl);
                    this._checkName();
                    this._registry.add(this._control, this);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
                /**
                 * \@description
                 * Sets the "checked" property value on the radio input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.writeValue = function (value) {
                    this._state = value === this.value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this._fn = fn;
                    this.onChange = ( /**
                     * @return {?}
                     */function () {
                        fn(_this.value);
                        _this._registry.select(_this);
                    });
                };
                /**
                 * Sets the "value" on the radio input element and unchecks it.
                 *
                 * @param {?} value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * @private
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype._checkName = function () {
                    if (this.name && this.formControlName && this.name !== this.formControlName) {
                        this._throwNameError();
                    }
                    if (!this.name && this.formControlName)
                        this.name = this.formControlName;
                };
                /**
                 * @private
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype._throwNameError = function () {
                    throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
                };
                return RadioControlValueAccessor;
            }());
            RadioControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                            host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                            providers: [RADIO_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            RadioControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: RadioControlRegistry },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
            ]; };
            RadioControlValueAccessor.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var RANGE_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RangeValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * The `ControlValueAccessor` for writing a range value and listening to range input changes.
             * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
             * directives.
             *
             * \@usageNotes
             *
             * ### Using a range input with a reactive form
             *
             * The following example shows how to use a range input with a reactive form.
             *
             * ```ts
             * const ageControl = new FormControl();
             * ```
             *
             * ```
             * <input type="range" [formControl]="ageControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var RangeValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function RangeValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change or input event occurs on the input
                     * element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                RangeValueAccessor.prototype.writeValue = function (value) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RangeValueAccessor.prototype.registerOnChange = function (fn) {
                    this.onChange = ( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) { fn(value == '' ? null : parseFloat(value)); });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the range input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return RangeValueAccessor;
            }());
            RangeValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                            host: {
                                '(change)': 'onChange($event.target.value)',
                                '(input)': 'onChange($event.target.value)',
                                '(blur)': 'onTouched()'
                            },
                            providers: [RANGE_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            RangeValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /** @type {?} */
            var FormErrorExamples = {
                formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
                formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
                formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
                ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
                ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var ReactiveErrors = /** @class */ (function () {
                function ReactiveErrors() {
                }
                /**
                 * @return {?}
                 */
                ReactiveErrors.controlParentException = function () {
                    throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.ngModelGroupException = function () {
                    throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.missingFormException = function () {
                    throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.groupParentException = function () {
                    throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.arrayParentException = function () {
                    throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.disabledAttrWarning = function () {
                    console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
                };
                /**
                 * @param {?} directiveName
                 * @return {?}
                 */
                ReactiveErrors.ngModelWarning = function (directiveName) {
                    console.warn("\n    It looks like you're using ngModel on the same form field as " + directiveName + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + (directiveName === 'formControl' ? 'FormControlDirective'
                        : 'FormControlName') + "#use-with-ngmodel\n    ");
                };
                return ReactiveErrors;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SELECT_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return SelectControlValueAccessor; })),
                multi: true
            };
            /**
             * @param {?} id
             * @param {?} value
             * @return {?}
             */
            function _buildValueString(id, value) {
                if (id == null)
                    return "" + value;
                if (value && typeof value === 'object')
                    value = 'Object';
                return (id + ": " + value).slice(0, 50);
            }
            /**
             * @param {?} valueString
             * @return {?}
             */
            function _extractId(valueString) {
                return valueString.split(':')[0];
            }
            /**
             * \@description
             * The `ControlValueAccessor` for writing select control values and listening to select control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using select controls in a reactive form
             *
             * The following examples show how to use a select control in a reactive form.
             *
             * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
             *
             * ### Using select controls in a template-driven form
             *
             * To use a select in a template-driven form, simply add an `ngModel` and a `name`
             * attribute to the main `<select>` tag.
             *
             * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
             *
             * ### Customizing option selection
             *
             * Angular uses object identity to select option. It's possible for the identities of items
             * to change while the data does not. This can happen, for example, if the items are produced
             * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
             * second response will produce objects with different identities.
             *
             * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
             * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
             * If `compareWith` is given, Angular selects option by the return value of the function.
             *
             * ```ts
             * const selectedCountriesControl = new FormControl();
             * ```
             *
             * ```
             * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
             *     <option *ngFor="let country of countries" [ngValue]="country">
             *         {{country.name}}
             *     </option>
             * </select>
             *
             * compareFn(c1: Country, c2: Country): boolean {
             *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
             * }
             * ```
             *
             * **Note:** We listen to the 'change' event because 'input' events aren't fired
             * for selects in Firefox and IE:
             * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
             * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var SelectControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function SelectControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@internal
                     */
                    this._optionMap = new Map();
                    /**
                     * \@internal
                     */
                    this._idCounter = 0;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
                }
                Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
                    /**
                     * \@description
                     * Tracks the option comparison algorithm for tracking identities when
                     * checking for changes.
                     * @param {?} fn
                     * @return {?}
                     */
                    set: function (fn) {
                        if (typeof fn !== 'function') {
                            throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                        }
                        this._compareWith = fn;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the "value" property on the input element. The "selectedIndex"
                 * property is also set if an ID is provided on the option element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.writeValue = function (value) {
                    this.value = value;
                    /** @type {?} */
                    var id = this._getOptionId(value);
                    if (id == null) {
                        this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
                    }
                    /** @type {?} */
                    var valueString = _buildValueString(id, value);
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this.onChange = ( /**
                     * @param {?} valueString
                     * @return {?}
                     */function (valueString) {
                        _this.value = _this._getOptionValue(valueString);
                        fn(_this.value);
                    });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the select input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._getOptionId = function (value) {
                    for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
                        var id = _a[_i];
                        if (this._compareWith(this._optionMap.get(id), value))
                            return id;
                    }
                    return null;
                };
                /**
                 * \@internal
                 * @param {?} valueString
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
                    /** @type {?} */
                    var id = _extractId(valueString);
                    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
                };
                return SelectControlValueAccessor;
            }());
            SelectControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                            host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                            providers: [SELECT_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            SelectControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            SelectControlValueAccessor.propDecorators = {
                compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Marks `<option>` as dynamic, so Angular can be notified when options change.
             *
             * @see `SelectControlValueAccessor`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgSelectOption = /** @class */ (function () {
                /**
                 * @param {?} _element
                 * @param {?} _renderer
                 * @param {?} _select
                 */
                function NgSelectOption(_element, _renderer, _select) {
                    this._element = _element;
                    this._renderer = _renderer;
                    this._select = _select;
                    if (this._select)
                        this.id = this._select._registerOption();
                }
                Object.defineProperty(NgSelectOption.prototype, "ngValue", {
                    /**
                     * \@description
                     * Tracks the value bound to the option element. Unlike the value binding,
                     * ngValue supports binding to objects.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select == null)
                            return;
                        this._select._optionMap.set(this.id, value);
                        this._setElementValue(_buildValueString(this.id, value));
                        this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgSelectOption.prototype, "value", {
                    /**
                     * \@description
                     * Tracks simple string values bound to the option element.
                     * For objects, use the `ngValue` input binding.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._setElementValue(value);
                        if (this._select)
                            this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                NgSelectOption.prototype._setElementValue = function (value) {
                    this._renderer.setProperty(this._element.nativeElement, 'value', value);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                NgSelectOption.prototype.ngOnDestroy = function () {
                    if (this._select) {
                        this._select._optionMap.delete(this.id);
                        this._select.writeValue(this._select.value);
                    }
                };
                return NgSelectOption;
            }());
            NgSelectOption.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
            ];
            /** @nocollapse */
            NgSelectOption.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: SelectControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
            ]; };
            NgSelectOption.propDecorators = {
                ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SELECT_MULTIPLE_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return SelectMultipleControlValueAccessor; })),
                multi: true
            };
            /**
             * @param {?} id
             * @param {?} value
             * @return {?}
             */
            function _buildValueString$1(id, value) {
                if (id == null)
                    return "" + value;
                if (typeof value === 'string')
                    value = "'" + value + "'";
                if (value && typeof value === 'object')
                    value = 'Object';
                return (id + ": " + value).slice(0, 50);
            }
            /**
             * @param {?} valueString
             * @return {?}
             */
            function _extractId$1(valueString) {
                return valueString.split(':')[0];
            }
            /**
             * Mock interface for HTML Options
             * @record
             */
            function HTMLOption() { }
            if (false) { }
            /**
             * Mock interface for HTMLCollection
             * @abstract
             */
            var HTMLCollection = /** @class */ (function () {
                function HTMLCollection() {
                }
                return HTMLCollection;
            }());
            if (false) { }
            /**
             * \@description
             * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
             * directives.
             *
             * @see `SelectControlValueAccessor`
             *
             * \@usageNotes
             *
             * ### Using a multi-select control
             *
             * The follow example shows you how to use a multi-select control with a reactive form.
             *
             * ```ts
             * const countryControl = new FormControl();
             * ```
             *
             * ```
             * <select multiple name="countries" [formControl]="countryControl">
             *   <option *ngFor="let country of countries" [ngValue]="country">
             *     {{ country.name }}
             *   </option>
             * </select>
             * ```
             *
             * ### Customizing option selection
             *
             * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
             * See the `SelectControlValueAccessor` for usage.
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var SelectMultipleControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@internal
                     */
                    this._optionMap = new Map();
                    /**
                     * \@internal
                     */
                    this._idCounter = 0;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
                }
                Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
                    /**
                     * \@description
                     * Tracks the option comparison algorithm for tracking identities when
                     * checking for changes.
                     * @param {?} fn
                     * @return {?}
                     */
                    set: function (fn) {
                        if (typeof fn !== 'function') {
                            throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                        }
                        this._compareWith = fn;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the "value" property on one or of more
                 * of the select's options.
                 *
                 * @param {?} value The value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
                    var _this = this;
                    this.value = value;
                    /** @type {?} */
                    var optionSelectedStateSetter;
                    if (Array.isArray(value)) {
                        // convert values to ids
                        /** @type {?} */
                        var ids_1 = value.map(( /**
                         * @param {?} v
                         * @return {?}
                         */function (v) { return _this._getOptionId(v); }));
                        optionSelectedStateSetter = ( /**
                         * @param {?} opt
                         * @param {?} o
                         * @return {?}
                         */function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); });
                    }
                    else {
                        optionSelectedStateSetter = ( /**
                         * @param {?} opt
                         * @param {?} o
                         * @return {?}
                         */function (opt, o) { opt._setSelected(false); });
                    }
                    this._optionMap.forEach(optionSelectedStateSetter);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes
                 * and writes an array of the selected options.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) {
                        /** @type {?} */
                        var selected = [];
                        if (_.hasOwnProperty('selectedOptions')) {
                            /** @type {?} */
                            var options = _.selectedOptions;
                            for (var i = 0; i < options.length; i++) {
                                /** @type {?} */
                                var opt = options.item(i);
                                /** @type {?} */
                                var val = _this._getOptionValue(opt.value);
                                selected.push(val);
                            }
                        }
                        // Degrade on IE
                        else {
                            /** @type {?} */
                            var options = ( /** @type {?} */(_.options));
                            for (var i = 0; i < options.length; i++) {
                                /** @type {?} */
                                var opt = options.item(i);
                                if (opt.selected) {
                                    /** @type {?} */
                                    var val = _this._getOptionValue(opt.value);
                                    selected.push(val);
                                }
                            }
                        }
                        _this.value = selected;
                        fn(selected);
                    });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the select input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
                    /** @type {?} */
                    var id = (this._idCounter++).toString();
                    this._optionMap.set(id, value);
                    return id;
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
                    for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
                        var id = _a[_i];
                        if (this._compareWith(( /** @type {?} */(this._optionMap.get(id)))._value, value))
                            return id;
                    }
                    return null;
                };
                /**
                 * \@internal
                 * @param {?} valueString
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
                    /** @type {?} */
                    var id = _extractId$1(valueString);
                    return this._optionMap.has(id) ? ( /** @type {?} */(this._optionMap.get(id)))._value : valueString;
                };
                return SelectMultipleControlValueAccessor;
            }());
            SelectMultipleControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                            host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            SelectMultipleControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            SelectMultipleControlValueAccessor.propDecorators = {
                compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Marks `<option>` as dynamic, so Angular can be notified when options change.
             *
             * @see `SelectMultipleControlValueAccessor`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var ɵNgSelectMultipleOption = /** @class */ (function () {
                /**
                 * @param {?} _element
                 * @param {?} _renderer
                 * @param {?} _select
                 */
                function ɵNgSelectMultipleOption(_element, _renderer, _select) {
                    this._element = _element;
                    this._renderer = _renderer;
                    this._select = _select;
                    if (this._select) {
                        this.id = this._select._registerOption(this);
                    }
                }
                Object.defineProperty(ɵNgSelectMultipleOption.prototype, "ngValue", {
                    /**
                     * \@description
                     * Tracks the value bound to the option element. Unlike the value binding,
                     * ngValue supports binding to objects.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select == null)
                            return;
                        this._value = value;
                        this._setElementValue(_buildValueString$1(this.id, value));
                        this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ɵNgSelectMultipleOption.prototype, "value", {
                    /**
                     * \@description
                     * Tracks simple string values bound to the option element.
                     * For objects, use the `ngValue` input binding.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select) {
                            this._value = value;
                            this._setElementValue(_buildValueString$1(this.id, value));
                            this._select.writeValue(this._select.value);
                        }
                        else {
                            this._setElementValue(value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype._setElementValue = function (value) {
                    this._renderer.setProperty(this._element.nativeElement, 'value', value);
                };
                /**
                 * \@internal
                 * @param {?} selected
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype._setSelected = function (selected) {
                    this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype.ngOnDestroy = function () {
                    if (this._select) {
                        this._select._optionMap.delete(this.id);
                        this._select.writeValue(this._select.value);
                    }
                };
                return ɵNgSelectMultipleOption;
            }());
            ɵNgSelectMultipleOption.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
            ];
            /** @nocollapse */
            ɵNgSelectMultipleOption.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
            ]; };
            ɵNgSelectMultipleOption.propDecorators = {
                ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} name
             * @param {?} parent
             * @return {?}
             */
            function controlPath(name, parent) {
                return ( /** @type {?} */(parent.path)).concat([name]);
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpControl(control, dir) {
                if (!control)
                    _throwError(dir, 'Cannot find control with');
                if (!dir.valueAccessor)
                    _throwError(dir, 'No value accessor for form control with');
                control.validator = Validators.compose([( /** @type {?} */(control.validator)), dir.validator]);
                control.asyncValidator = Validators.composeAsync([( /** @type {?} */(control.asyncValidator)), dir.asyncValidator]);
                ( /** @type {?} */(dir.valueAccessor)).writeValue(control.value);
                setUpViewChangePipeline(control, dir);
                setUpModelChangePipeline(control, dir);
                setUpBlurPipeline(control, dir);
                if (( /** @type {?} */(dir.valueAccessor)).setDisabledState) {
                    control.registerOnDisabledChange(( /**
                     * @param {?} isDisabled
                     * @return {?}
                     */function (isDisabled) { ( /** @type {?} */(( /** @type {?} */(dir.valueAccessor)).setDisabledState))(isDisabled); }));
                }
                // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
                dir._rawValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if ((( /** @type {?} */(validator))).registerOnValidatorChange)
                        ( /** @type {?} */((( /** @type {?} */(validator))).registerOnValidatorChange))(( /**
                         * @return {?}
                         */function () { return control.updateValueAndValidity(); }));
                }));
                dir._rawAsyncValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if ((( /** @type {?} */(validator))).registerOnValidatorChange)
                        ( /** @type {?} */((( /** @type {?} */(validator))).registerOnValidatorChange))(( /**
                         * @return {?}
                         */function () { return control.updateValueAndValidity(); }));
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function cleanUpControl(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnChange(( /**
                 * @return {?}
                 */function () { return _noControlError(dir); }));
                ( /** @type {?} */(dir.valueAccessor)).registerOnTouched(( /**
                 * @return {?}
                 */function () { return _noControlError(dir); }));
                dir._rawValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if (validator.registerOnValidatorChange) {
                        validator.registerOnValidatorChange(null);
                    }
                }));
                dir._rawAsyncValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if (validator.registerOnValidatorChange) {
                        validator.registerOnValidatorChange(null);
                    }
                }));
                if (control)
                    control._clearChangeFns();
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpViewChangePipeline(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnChange(( /**
                 * @param {?} newValue
                 * @return {?}
                 */function (newValue) {
                    control._pendingValue = newValue;
                    control._pendingChange = true;
                    control._pendingDirty = true;
                    if (control.updateOn === 'change')
                        updateControl(control, dir);
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpBlurPipeline(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnTouched(( /**
                 * @return {?}
                 */function () {
                    control._pendingTouched = true;
                    if (control.updateOn === 'blur' && control._pendingChange)
                        updateControl(control, dir);
                    if (control.updateOn !== 'submit')
                        control.markAsTouched();
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function updateControl(control, dir) {
                if (control._pendingDirty)
                    control.markAsDirty();
                control.setValue(control._pendingValue, { emitModelToViewChange: false });
                dir.viewToModelUpdate(control._pendingValue);
                control._pendingChange = false;
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpModelChangePipeline(control, dir) {
                control.registerOnChange(( /**
                 * @param {?} newValue
                 * @param {?} emitModelEvent
                 * @return {?}
                 */function (newValue, emitModelEvent) {
                    // control -> view
                    ( /** @type {?} */(dir.valueAccessor)).writeValue(newValue);
                    // control -> ngModel
                    if (emitModelEvent)
                        dir.viewToModelUpdate(newValue);
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpFormContainer(control, dir) {
                if (control == null)
                    _throwError(dir, 'Cannot find control with');
                control.validator = Validators.compose([control.validator, dir.validator]);
                control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
            }
            /**
             * @param {?} dir
             * @return {?}
             */
            function _noControlError(dir) {
                return _throwError(dir, 'There is no FormControl instance attached to form control element with');
            }
            /**
             * @param {?} dir
             * @param {?} message
             * @return {?}
             */
            function _throwError(dir, message) {
                /** @type {?} */
                var messageEnd;
                if (( /** @type {?} */(dir.path)).length > 1) {
                    messageEnd = "path: '" + ( /** @type {?} */(dir.path)).join(' -> ') + "'";
                }
                else if (( /** @type {?} */(dir.path))[0]) {
                    messageEnd = "name: '" + dir.path + "'";
                }
                else {
                    messageEnd = 'unspecified name attribute';
                }
                throw new Error(message + " " + messageEnd);
            }
            /**
             * @param {?} validators
             * @return {?}
             */
            function composeValidators(validators) {
                return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
            }
            /**
             * @param {?} validators
             * @return {?}
             */
            function composeAsyncValidators(validators) {
                return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
                    null;
            }
            /**
             * @param {?} changes
             * @param {?} viewModel
             * @return {?}
             */
            function isPropertyUpdated(changes, viewModel) {
                if (!changes.hasOwnProperty('model'))
                    return false;
                /** @type {?} */
                var change = changes['model'];
                if (change.isFirstChange())
                    return true;
                return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"])(viewModel, change.currentValue);
            }
            /** @type {?} */
            var BUILTIN_ACCESSORS = [
                CheckboxControlValueAccessor,
                RangeValueAccessor,
                NumberValueAccessor,
                SelectControlValueAccessor,
                SelectMultipleControlValueAccessor,
                RadioControlValueAccessor,
            ];
            /**
             * @param {?} valueAccessor
             * @return {?}
             */
            function isBuiltInAccessor(valueAccessor) {
                return BUILTIN_ACCESSORS.some(( /**
                 * @param {?} a
                 * @return {?}
                 */function (/**
                 * @param {?} a
                 * @return {?}
                 */ a) { return valueAccessor.constructor === a; }));
            }
            /**
             * @param {?} form
             * @param {?} directives
             * @return {?}
             */
            function syncPendingControls(form, directives) {
                form._syncPendingControls();
                directives.forEach(( /**
                 * @param {?} dir
                 * @return {?}
                 */function (/**
                 * @param {?} dir
                 * @return {?}
                 */ dir) {
                    /** @type {?} */
                    var control = ( /** @type {?} */(dir.control));
                    if (control.updateOn === 'submit' && control._pendingChange) {
                        dir.viewToModelUpdate(control._pendingValue);
                        control._pendingChange = false;
                    }
                }));
            }
            // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
            /**
             * @param {?} dir
             * @param {?} valueAccessors
             * @return {?}
             */
            function selectValueAccessor(dir, valueAccessors) {
                if (!valueAccessors)
                    return null;
                if (!Array.isArray(valueAccessors))
                    _throwError(dir, 'Value accessor was not provided as an array for form control with');
                /** @type {?} */
                var defaultAccessor = undefined;
                /** @type {?} */
                var builtinAccessor = undefined;
                /** @type {?} */
                var customAccessor = undefined;
                valueAccessors.forEach(( /**
                 * @param {?} v
                 * @return {?}
                 */function (v) {
                    if (v.constructor === DefaultValueAccessor) {
                        defaultAccessor = v;
                    }
                    else if (isBuiltInAccessor(v)) {
                        if (builtinAccessor)
                            _throwError(dir, 'More than one built-in value accessor matches form control with');
                        builtinAccessor = v;
                    }
                    else {
                        if (customAccessor)
                            _throwError(dir, 'More than one custom value accessor matches form control with');
                        customAccessor = v;
                    }
                }));
                if (customAccessor)
                    return customAccessor;
                if (builtinAccessor)
                    return builtinAccessor;
                if (defaultAccessor)
                    return defaultAccessor;
                _throwError(dir, 'No valid value accessor for form control with');
                return null;
            }
            /**
             * @template T
             * @param {?} list
             * @param {?} el
             * @return {?}
             */
            function removeDir(list, el) {
                /** @type {?} */
                var index = list.indexOf(el);
                if (index > -1)
                    list.splice(index, 1);
            }
            // TODO(kara): remove after deprecation period
            /**
             * @param {?} name
             * @param {?} type
             * @param {?} instance
             * @param {?} warningConfig
             * @return {?}
             */
            function _ngModelWarning(name, type, instance, warningConfig) {
                if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never')
                    return;
                if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
                    (warningConfig === 'always' && !instance._ngModelWarningSent)) {
                    ReactiveErrors.ngModelWarning(name);
                    type._ngModelWarningSentOnce = true;
                    instance._ngModelWarningSent = true;
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Reports that a FormControl is valid, meaning that no errors exist in the input value.
             *
             * @see `status`
             * @type {?}
             */
            var VALID = 'VALID';
            /**
             * Reports that a FormControl is invalid, meaning that an error exists in the input value.
             *
             * @see `status`
             * @type {?}
             */
            var INVALID = 'INVALID';
            /**
             * Reports that a FormControl is pending, meaning that that async validation is occurring and
             * errors are not yet available for the input value.
             *
             * @see `markAsPending`
             * @see `status`
             * @type {?}
             */
            var PENDING = 'PENDING';
            /**
             * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
             * calculations of validity or value.
             *
             * @see `markAsDisabled`
             * @see `status`
             * @type {?}
             */
            var DISABLED = 'DISABLED';
            /**
             * @param {?} control
             * @param {?} path
             * @param {?} delimiter
             * @return {?}
             */
            function _find(control, path, delimiter) {
                if (path == null)
                    return null;
                if (!(path instanceof Array)) {
                    path = (( /** @type {?} */(path))).split(delimiter);
                }
                if (path instanceof Array && (path.length === 0))
                    return null;
                return (( /** @type {?} */(path))).reduce(( /**
                 * @param {?} v
                 * @param {?} name
                 * @return {?}
                 */function (v, name) {
                    if (v instanceof FormGroup) {
                        return v.controls.hasOwnProperty(( /** @type {?} */(name))) ? v.controls[name] : null;
                    }
                    if (v instanceof FormArray) {
                        return v.at(( /** @type {?} */(name))) || null;
                    }
                    return null;
                }), control);
            }
            /**
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function coerceToValidator(validatorOrOpts) {
                /** @type {?} */
                var validator = ( /** @type {?} */((isOptionsObj(validatorOrOpts) ? (( /** @type {?} */(validatorOrOpts))).validators :
                    validatorOrOpts)));
                return Array.isArray(validator) ? composeValidators(validator) : validator || null;
            }
            /**
             * @param {?=} asyncValidator
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
                /** @type {?} */
                var origAsyncValidator = ( /** @type {?} */((isOptionsObj(validatorOrOpts) ? (( /** @type {?} */(validatorOrOpts))).asyncValidators :
                    asyncValidator)));
                return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
                    origAsyncValidator || null;
            }
            /**
             * Interface for options provided to an `AbstractControl`.
             *
             * \@publicApi
             * @record
             */
            function AbstractControlOptions() { }
            if (false) { }
            /**
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function isOptionsObj(validatorOrOpts) {
                return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
                    typeof validatorOrOpts === 'object';
            }
            /**
             * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
             *
             * It provides some of the shared behavior that all controls and groups of controls have, like
             * running validators, calculating status, and resetting state. It also defines the properties
             * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
             * instantiated directly.
             *
             * @see [Forms Guide](/guide/forms)
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             * @see [Dynamic Forms Guide](/guide/dynamic-form)
             *
             * \@publicApi
             * @abstract
             */
            var AbstractControl = /** @class */ (function () {
                /**
                 * Initialize the AbstractControl instance.
                 *
                 * @param {?} validator The function that determines the synchronous validity of this control.
                 * @param {?} asyncValidator The function that determines the asynchronous validity of this
                 * control.
                 */
                function AbstractControl(validator, asyncValidator) {
                    this.validator = validator;
                    this.asyncValidator = asyncValidator;
                    /**
                     * \@internal
                     */
                    this._onCollectionChange = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * A control is `pristine` if the user has not yet changed
                     * the value in the UI.
                     *
                     * @return True if the user has not yet changed the value in the UI; compare `dirty`.
                     * Programmatic changes to a control's value do not mark it dirty.
                     */
                    this.pristine = true;
                    /**
                     * True if the control is marked as `touched`.
                     *
                     * A control is marked `touched` once the user has triggered
                     * a `blur` event on it.
                     */
                    this.touched = false;
                    /**
                     * \@internal
                     */
                    this._onDisabledChange = [];
                }
                Object.defineProperty(AbstractControl.prototype, "parent", {
                    /**
                     * The parent control.
                     * @return {?}
                     */
                    get: function () { return this._parent; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "valid", {
                    /**
                     * A control is `valid` when its `status` is `VALID`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control has passed all of its validation tests,
                     * false otherwise.
                     */
                    get: function () { return this.status === VALID; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "invalid", {
                    /**
                     * A control is `invalid` when its `status` is `INVALID`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if this control has failed one or more of its validation checks,
                     * false otherwise.
                     */
                    get: function () { return this.status === INVALID; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "pending", {
                    /**
                     * A control is `pending` when its `status` is `PENDING`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if this control is in the process of conducting a validation check,
                     * false otherwise.
                     */
                    get: function () { return this.status == PENDING; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "disabled", {
                    /**
                     * A control is `disabled` when its `status` is `DISABLED`.
                     *
                     * Disabled controls are exempt from validation checks and
                     * are not included in the aggregate value of their ancestor
                     * controls.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control is disabled, false otherwise.
                     */
                    get: function () { return this.status === DISABLED; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "enabled", {
                    /**
                     * A control is `enabled` as long as its `status` is not `DISABLED`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control has any status other than 'DISABLED',
                     * false if the status is 'DISABLED'.
                     *
                     */
                    get: function () { return this.status !== DISABLED; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "dirty", {
                    /**
                     * A control is `dirty` if the user has changed the value
                     * in the UI.
                     *
                     * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
                     * Programmatic changes to a control's value do not mark it dirty.
                     */
                    get: function () { return !this.pristine; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "untouched", {
                    /**
                     * True if the control has not been marked as touched
                     *
                     * A control is `untouched` if the user has not yet triggered
                     * a `blur` event on it.
                     * @return {?}
                     */
                    get: function () { return !this.touched; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "updateOn", {
                    /**
                     * Reports the update strategy of the `AbstractControl` (meaning
                     * the event on which the control updates itself).
                     * Possible values: `'change'` | `'blur'` | `'submit'`
                     * Default value: `'change'`
                     * @return {?}
                     */
                    get: function () {
                        return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the synchronous validators that are active on this control.  Calling
                 * this overwrites any existing sync validators.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @param {?} newValidator
                 * @return {?}
                 */
                AbstractControl.prototype.setValidators = function (newValidator) {
                    this.validator = coerceToValidator(newValidator);
                };
                /**
                 * Sets the async validators that are active on this control. Calling this
                 * overwrites any existing async validators.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @param {?} newValidator
                 * @return {?}
                 */
                AbstractControl.prototype.setAsyncValidators = function (newValidator) {
                    this.asyncValidator = coerceToAsyncValidator(newValidator);
                };
                /**
                 * Empties out the sync validator list.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.clearValidators = function () { this.validator = null; };
                /**
                 * Empties out the async validator list.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
                /**
                 * Marks the control as `touched`. A control is touched by focus and
                 * blur events that do not change the value.
                 *
                 * @see `markAsUntouched()` / `markAsDirty()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsTouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = true;
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsTouched(opts);
                    }
                };
                /**
                 * Marks the control and all its descendant controls as `touched`.
                 * @see `markAsTouched()`
                 * @return {?}
                 */
                AbstractControl.prototype.markAllAsTouched = function () {
                    this.markAsTouched({ onlySelf: true });
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.markAllAsTouched(); }));
                };
                /**
                 * Marks the control as `untouched`.
                 *
                 * If the control has any children, also marks all children as `untouched`
                 * and recalculates the `touched` status of all parent controls.
                 *
                 * @see `markAsTouched()` / `markAsDirty()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events after the marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsUntouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = false;
                    this._pendingTouched = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.markAsUntouched({ onlySelf: true }); }));
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updateTouched(opts);
                    }
                };
                /**
                 * Marks the control as `dirty`. A control becomes dirty when
                 * the control's value is changed through the UI; compare `markAsTouched`.
                 *
                 * @see `markAsTouched()` / `markAsUntouched()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsDirty = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = false;
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsDirty(opts);
                    }
                };
                /**
                 * Marks the control as `pristine`.
                 *
                 * If the control has any children, marks all children as `pristine`,
                 * and recalculates the `pristine` status of all parent
                 * controls.
                 *
                 * @see `markAsTouched()` / `markAsUntouched()` / `markAsDirty()`
                 *
                 * @param {?=} opts Configuration options that determine how the control emits events after
                 * marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * @return {?}
                 */
                AbstractControl.prototype.markAsPristine = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = true;
                    this._pendingDirty = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.markAsPristine({ onlySelf: true }); }));
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updatePristine(opts);
                    }
                };
                /**
                 * Marks the control as `pending`.
                 *
                 * A control is pending while the control performs async validation.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes and
                 * emits events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
                 * observable emits an event with the latest status the control is marked pending.
                 * When false, no events are emitted.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.markAsPending = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).status = PENDING;
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsPending(opts);
                    }
                };
                /**
                 * Disables the control. This means the control is exempt from validation checks and
                 * excluded from the aggregate value of any parent. Its status is `DISABLED`.
                 *
                 * If the control has children, all children are also disabled.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates
                 * changes and emits events after the control is disabled.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is disabled.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.disable = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    // If parent has been marked artificially dirty we don't want to re-calculate the
                    // parent's dirtiness based on the children.
                    /** @type {?} */
                    var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
                    (( /** @type {?} */(this))).status = DISABLED;
                    (( /** @type {?} */(this))).errors = null;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.disable(Object.assign({}, opts, { onlySelf: true })); }));
                    this._updateValue();
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.valueChanges))).emit(this.value);
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    this._updateAncestors(Object.assign({}, opts, { skipPristineCheck: skipPristineCheck }));
                    this._onDisabledChange.forEach(( /**
                     * @param {?} changeFn
                     * @return {?}
                     */function (changeFn) { return changeFn(true); }));
                };
                /**
                 * Enables the control. This means the control is included in validation checks and
                 * the aggregate value of its parent. Its status recalculates based on its value and
                 * its validators.
                 *
                 * By default, if the control has children, all children are enabled.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configure options that control how the control propagates changes and
                 * emits events when marked as untouched
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is enabled.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.enable = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    // If parent has been marked artificially dirty we don't want to re-calculate the
                    // parent's dirtiness based on the children.
                    /** @type {?} */
                    var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
                    (( /** @type {?} */(this))).status = VALID;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.enable(Object.assign({}, opts, { onlySelf: true })); }));
                    this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
                    this._updateAncestors(Object.assign({}, opts, { skipPristineCheck: skipPristineCheck }));
                    this._onDisabledChange.forEach(( /**
                     * @param {?} changeFn
                     * @return {?}
                     */function (changeFn) { return changeFn(false); }));
                };
                /**
                 * @private
                 * @param {?} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateAncestors = function (opts) {
                    if (this._parent && !opts.onlySelf) {
                        this._parent.updateValueAndValidity(opts);
                        if (!opts.skipPristineCheck) {
                            this._parent._updatePristine();
                        }
                        this._parent._updateTouched();
                    }
                };
                /**
                 * @param {?} parent Sets the parent of the control
                 * @return {?}
                 */
                AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
                /**
                 * Recalculates the value and validation status of the control.
                 *
                 * By default, it also updates the value and validity of its ancestors.
                 *
                 * @param {?=} opts Configuration options determine how the control propagates changes and emits events
                 * after updates and validity checks are applied.
                 * * `onlySelf`: When true, only update this control. When false or not supplied,
                 * update all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is updated.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.updateValueAndValidity = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    this._setInitialStatus();
                    this._updateValue();
                    if (this.enabled) {
                        this._cancelExistingSubscription();
                        (( /** @type {?} */(this))).errors = this._runValidator();
                        (( /** @type {?} */(this))).status = this._calculateStatus();
                        if (this.status === VALID || this.status === PENDING) {
                            this._runAsyncValidator(opts.emitEvent);
                        }
                    }
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.valueChanges))).emit(this.value);
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent && !opts.onlySelf) {
                        this._parent.updateValueAndValidity(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateTreeValidity = function (opts) {
                    if (opts === void 0) { opts = { emitEvent: true }; }
                    this._forEachChild(( /**
                     * @param {?} ctrl
                     * @return {?}
                     */function (ctrl) { return ctrl._updateTreeValidity(opts); }));
                    this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._setInitialStatus = function () {
                    (( /** @type {?} */(this))).status = this._allControlsDisabled() ? DISABLED : VALID;
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._runValidator = function () {
                    return this.validator ? this.validator(this) : null;
                };
                /**
                 * @private
                 * @param {?=} emitEvent
                 * @return {?}
                 */
                AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
                    var _this = this;
                    if (this.asyncValidator) {
                        (( /** @type {?} */(this))).status = PENDING;
                        /** @type {?} */
                        var obs = toObservable(this.asyncValidator(this));
                        this._asyncValidationSubscription =
                            obs.subscribe(( /**
                             * @param {?} errors
                             * @return {?}
                             */function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); }));
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._cancelExistingSubscription = function () {
                    if (this._asyncValidationSubscription) {
                        this._asyncValidationSubscription.unsubscribe();
                    }
                };
                /**
                 * Sets errors on a form control when running validations manually, rather than automatically.
                 *
                 * Calling `setErrors` also updates the validity of the parent control.
                 *
                 * \@usageNotes
                 * ### Manually set the errors for a control
                 *
                 * ```
                 * const login = new FormControl('someLogin');
                 * login.setErrors({
                 *   notUnique: true
                 * });
                 *
                 * expect(login.valid).toEqual(false);
                 * expect(login.errors).toEqual({ notUnique: true });
                 *
                 * login.setValue('someOtherLogin');
                 *
                 * expect(login.valid).toEqual(true);
                 * ```
                 * @param {?} errors
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype.setErrors = function (errors, opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).errors = errors;
                    this._updateControlsErrors(opts.emitEvent !== false);
                };
                /**
                 * Retrieves a child control given the control's name or path.
                 *
                 * \@usageNotes
                 * ### Retrieve a nested control
                 *
                 * For example, to get a `name` control nested within a `person` sub-group:
                 *
                 * * `this.form.get('person.name');`
                 *
                 * -OR-
                 *
                 * * `this.form.get(['person', 'name']);`
                 * @param {?} path A dot-delimited string or array of string/number values that define the path to the
                 * control.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
                /**
                 * \@description
                 * Reports error data for the control with the given path.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} error data for that particular error. If the control or error is not present,
                 * null is returned.
                 */
                AbstractControl.prototype.getError = function (errorCode, path) {
                    /** @type {?} */
                    var control = path ? this.get(path) : this;
                    return control && control.errors ? control.errors[errorCode] : null;
                };
                /**
                 * \@description
                 * Reports whether the control with the given path has the error specified.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * If no path is given, this method checks for the error on the current control.
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} whether the given error is present in the control at the given path.
                 *
                 * If the control is not present, false is returned.
                 */
                AbstractControl.prototype.hasError = function (errorCode, path) {
                    return !!this.getError(errorCode, path);
                };
                Object.defineProperty(AbstractControl.prototype, "root", {
                    /**
                     * Retrieves the top-level ancestor of this control.
                     * @return {?}
                     */
                    get: function () {
                        /** @type {?} */
                        var x = this;
                        while (x._parent) {
                            x = x._parent;
                        }
                        return x;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} emitEvent
                 * @return {?}
                 */
                AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
                    (( /** @type {?} */(this))).status = this._calculateStatus();
                    if (emitEvent) {
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent) {
                        this._parent._updateControlsErrors(emitEvent);
                    }
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._initObservables = function () {
                    (( /** @type {?} */(this))).valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    (( /** @type {?} */(this))).statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._calculateStatus = function () {
                    if (this._allControlsDisabled())
                        return DISABLED;
                    if (this.errors)
                        return INVALID;
                    if (this._anyControlsHaveStatus(PENDING))
                        return PENDING;
                    if (this._anyControlsHaveStatus(INVALID))
                        return INVALID;
                    return VALID;
                };
                /**
                 * \@internal
                 * @param {?} status
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsHaveStatus = function (status) {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.status === status; }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsDirty = function () {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.dirty; }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsTouched = function () {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.touched; }));
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updatePristine = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = !this._anyControlsDirty();
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updatePristine(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateTouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = this._anyControlsTouched();
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updateTouched(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?} formState
                 * @return {?}
                 */
                AbstractControl.prototype._isBoxedValue = function (formState) {
                    return typeof formState === 'object' && formState !== null &&
                        Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
                };
                /**
                 * \@internal
                 * @param {?} fn
                 * @return {?}
                 */
                AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._setUpdateStrategy = function (opts) {
                    if (isOptionsObj(opts) && (( /** @type {?} */(opts))).updateOn != null) {
                        this._updateOn = ( /** @type {?} */((( /** @type {?} */(opts))).updateOn));
                    }
                };
                /**
                 * Check to see if parent has been marked artificially dirty.
                 *
                 * \@internal
                 * @private
                 * @param {?=} onlySelf
                 * @return {?}
                 */
                AbstractControl.prototype._parentMarkedDirty = function (onlySelf) {
                    /** @type {?} */
                    var parentDirty = this._parent && this._parent.dirty;
                    return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
                };
                return AbstractControl;
            }());
            if (false) { }
            /**
             * Tracks the value and validation status of an individual form control.
             *
             * This is one of the three fundamental building blocks of Angular forms, along with
             * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
             * implements most of the base functionality for accessing the value, validation status,
             * user interactions and events.
             *
             * @see `AbstractControl`
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see [Usage Notes](#usage-notes)
             *
             * \@usageNotes
             *
             * ### Initializing Form Controls
             *
             * Instantiate a `FormControl`, with an initial value.
             *
             * ```ts
             * const control = new FormControl('some value');
             * console.log(control.value);     // 'some value'
             * ```
             *
             * The following example initializes the control with a form state object. The `value`
             * and `disabled` keys are required in this case.
             *
             * ```ts
             * const control = new FormControl({ value: 'n/a', disabled: true });
             * console.log(control.value);     // 'n/a'
             * console.log(control.status);    // 'DISABLED'
             * ```
             *
             * The following example initializes the control with a sync validator.
             *
             * ```ts
             * const control = new FormControl('', Validators.required);
             * console.log(control.value);      // ''
             * console.log(control.status);     // 'INVALID'
             * ```
             *
             * The following example initializes the control using an options object.
             *
             * ```ts
             * const control = new FormControl('', {
             *    validators: Validators.required,
             *    asyncValidators: myAsyncValidator
             * });
             * ```
             *
             * ### Configure the control to update on a blur event
             *
             * Set the `updateOn` option to `'blur'` to update on the blur `event`.
             *
             * ```ts
             * const control = new FormControl('', { updateOn: 'blur' });
             * ```
             *
             * ### Configure the control to update on a submit event
             *
             * Set the `updateOn` option to `'submit'` to update on a submit `event`.
             *
             * ```ts
             * const control = new FormControl('', { updateOn: 'submit' });
             * ```
             *
             * ### Reset the control back to an initial value
             *
             * You reset to a specific form state by passing through a standalone
             * value or a form state object that contains both a value and a disabled state
             * (these are the only two properties that cannot be calculated).
             *
             * ```ts
             * const control = new FormControl('Nancy');
             *
             * console.log(control.value); // 'Nancy'
             *
             * control.reset('Drew');
             *
             * console.log(control.value); // 'Drew'
             * ```
             *
             * ### Reset the control back to an initial value and disabled
             *
             * ```
             * const control = new FormControl('Nancy');
             *
             * console.log(control.value); // 'Nancy'
             * console.log(control.status); // 'VALID'
             *
             * control.reset({ value: 'Drew', disabled: true });
             *
             * console.log(control.value); // 'Drew'
             * console.log(control.status); // 'DISABLED'
             * ```
             *
             * \@publicApi
             */
            var FormControl = /** @class */ (function (_super) {
                __extends(FormControl, _super);
                /**
                 * Creates a new `FormControl` instance.
                 *
                 * @param {?=} formState Initializes the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormControl(formState, validatorOrOpts, asyncValidator) {
                    if (formState === void 0) { formState = null; }
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    /**
                     * \@internal
                     */
                    _this._onChange = [];
                    _this._applyFormState(formState);
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    _this._initObservables();
                    return _this;
                }
                /**
                 * Sets a new value for the form control.
                 *
                 * @param {?} value The new value for the control.
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events when the value changes.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
                 * `onChange` event to
                 * update the view.
                 * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
                 * `ngModelChange`
                 * event to update the model.
                 *
                 * @return {?}
                 */
                FormControl.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    (( /** @type {?} */(this))).value = this._pendingValue = value;
                    if (this._onChange.length && options.emitModelToViewChange !== false) {
                        this._onChange.forEach(( /**
                         * @param {?} changeFn
                         * @return {?}
                         */function (changeFn) { return changeFn(_this.value, options.emitViewToModelChange !== false); }));
                    }
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of a control.
                 *
                 * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
                 * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
                 * `FormArrays`, where it does behave differently.
                 *
                 * @see `setValue` for options
                 * @param {?} value
                 * @param {?=} options
                 * @return {?}
                 */
                FormControl.prototype.patchValue = function (value, options) {
                    if (options === void 0) { options = {}; }
                    this.setValue(value, options);
                };
                /**
                 * Resets the form control, marking it `pristine` and `untouched`, and setting
                 * the value to null.
                 *
                 * @param {?=} formState Resets the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events after the value changes.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 *
                 * @return {?}
                 */
                FormControl.prototype.reset = function (formState, options) {
                    if (formState === void 0) { formState = null; }
                    if (options === void 0) { options = {}; }
                    this._applyFormState(formState);
                    this.markAsPristine(options);
                    this.markAsUntouched(options);
                    this.setValue(this.value, options);
                    this._pendingChange = false;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._updateValue = function () { };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormControl.prototype._anyControls = function (condition) { return false; };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
                /**
                 * Register a listener for change events.
                 *
                 * @param {?} fn The method that is called when the value changes
                 * @return {?}
                 */
                FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._clearChangeFns = function () {
                    this._onChange = [];
                    this._onDisabledChange = [];
                    this._onCollectionChange = ( /**
                     * @return {?}
                     */function () { });
                };
                /**
                 * Register a listener for disabled events.
                 *
                 * @param {?} fn The method that is called when the disabled status changes.
                 * @return {?}
                 */
                FormControl.prototype.registerOnDisabledChange = function (fn) {
                    this._onDisabledChange.push(fn);
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormControl.prototype._forEachChild = function (cb) { };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._syncPendingControls = function () {
                    if (this.updateOn === 'submit') {
                        if (this._pendingDirty)
                            this.markAsDirty();
                        if (this._pendingTouched)
                            this.markAsTouched();
                        if (this._pendingChange) {
                            this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                            return true;
                        }
                    }
                    return false;
                };
                /**
                 * @private
                 * @param {?} formState
                 * @return {?}
                 */
                FormControl.prototype._applyFormState = function (formState) {
                    if (this._isBoxedValue(formState)) {
                        (( /** @type {?} */(this))).value = this._pendingValue = formState.value;
                        formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                            this.enable({ onlySelf: true, emitEvent: false });
                    }
                    else {
                        (( /** @type {?} */(this))).value = this._pendingValue = formState;
                    }
                };
                return FormControl;
            }(AbstractControl));
            if (false) { }
            /**
             * Tracks the value and validity state of a group of `FormControl` instances.
             *
             * A `FormGroup` aggregates the values of each child `FormControl` into one object,
             * with each control name as the key.  It calculates its status by reducing the status values
             * of its children. For example, if one of the controls in a group is invalid, the entire
             * group becomes invalid.
             *
             * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
             * along with `FormControl` and `FormArray`.
             *
             * When instantiating a `FormGroup`, pass in a collection of child controls as the first
             * argument. The key for each child registers the name for the control.
             *
             * \@usageNotes
             *
             * ### Create a form group with 2 controls
             *
             * ```
             * const form = new FormGroup({
             *   first: new FormControl('Nancy', Validators.minLength(2)),
             *   last: new FormControl('Drew'),
             * });
             *
             * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
             * console.log(form.status);  // 'VALID'
             * ```
             *
             * ### Create a form group with a group-level validator
             *
             * You include group-level validators as the second arg, or group-level async
             * validators as the third arg. These come in handy when you want to perform validation
             * that considers the value of more than one child control.
             *
             * ```
             * const form = new FormGroup({
             *   password: new FormControl('', Validators.minLength(2)),
             *   passwordConfirm: new FormControl('', Validators.minLength(2)),
             * }, passwordMatchValidator);
             *
             *
             * function passwordMatchValidator(g: FormGroup) {
             *    return g.get('password').value === g.get('passwordConfirm').value
             *       ? null : {'mismatch': true};
             * }
             * ```
             *
             * Like `FormControl` instances, you choose to pass in
             * validators and async validators as part of an options object.
             *
             * ```
             * const form = new FormGroup({
             *   password: new FormControl('')
             *   passwordConfirm: new FormControl('')
             * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
             * ```
             *
             * ### Set the updateOn property for all controls in a form group
             *
             * The options object is used to set a default value for each child
             * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
             * group level, all child controls default to 'blur', unless the child
             * has explicitly specified a different `updateOn` value.
             *
             * ```ts
             * const c = new FormGroup({
             *   one: new FormControl()
             * }, { updateOn: 'blur' });
             * ```
             *
             * \@publicApi
             */
            var FormGroup = /** @class */ (function (_super) {
                __extends(FormGroup, _super);
                /**
                 * Creates a new `FormGroup` instance.
                 *
                 * @param {?} controls A collection of child controls. The key for each child is the name
                 * under which it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormGroup(controls, validatorOrOpts, asyncValidator) {
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    _this.controls = controls;
                    _this._initObservables();
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this._setUpControls();
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    return _this;
                }
                /**
                 * Registers a control with the group's list of controls.
                 *
                 * This method does not update the value or validity of the control.
                 * Use {\@link FormGroup#addControl addControl} instead.
                 *
                 * @param {?} name The control name to register in the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.registerControl = function (name, control) {
                    if (this.controls[name])
                        return this.controls[name];
                    this.controls[name] = control;
                    control.setParent(this);
                    control._registerOnCollectionChange(this._onCollectionChange);
                    return control;
                };
                /**
                 * Add a control to this group.
                 *
                 * This method also updates the value and validity of the control.
                 *
                 * @param {?} name The control name to add to the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.addControl = function (name, control) {
                    this.registerControl(name, control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Remove a control from this group.
                 *
                 * @param {?} name The control name to remove from the collection
                 * @return {?}
                 */
                FormGroup.prototype.removeControl = function (name) {
                    if (this.controls[name])
                        this.controls[name]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    delete (this.controls[name]);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Replace an existing control.
                 *
                 * @param {?} name The control name to replace in the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.setControl = function (name, control) {
                    if (this.controls[name])
                        this.controls[name]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    delete (this.controls[name]);
                    if (control)
                        this.registerControl(name, control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Check whether there is an enabled control with the given name in the group.
                 *
                 * Reports false for disabled controls. If you'd like to check for existence in the group
                 * only, use {\@link AbstractControl#get get} instead.
                 *
                 * @param {?} controlName The control name to check for existence in the collection
                 *
                 * @return {?} false for disabled controls, true otherwise.
                 */
                FormGroup.prototype.contains = function (controlName) {
                    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
                };
                /**
                 * Sets the value of the `FormGroup`. It accepts an object that matches
                 * the structure of the group, with control names as keys.
                 *
                 * \@usageNotes
                 * ### Set the complete value for the form group
                 *
                 * ```
                 * const form = new FormGroup({
                 *   first: new FormControl(),
                 *   last: new FormControl()
                 * });
                 *
                 * console.log(form.value);   // {first: null, last: null}
                 *
                 * form.setValue({first: 'Nancy', last: 'Drew'});
                 * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
                 * ```
                 *
                 * @throws When strict checks fail, such as setting the value of a control
                 * that doesn't exist or if you exclude a value of a control that does exist.
                 *
                 * @param {?} value The new value for the control that matches the structure of the group.
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events after the value changes.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                FormGroup.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    this._checkAllValuesPresent(value);
                    Object.keys(value).forEach(( /**
                     * @param {?} name
                     * @return {?}
                     */function (/**
                     * @param {?} name
                     * @return {?}
                     */ name) {
                        _this._throwIfControlMissing(name);
                        _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of the `FormGroup`. It accepts an object with control
                 * names as keys, and does its best to match the values to the correct controls
                 * in the group.
                 *
                 * It accepts both super-sets and sub-sets of the group without throwing an error.
                 *
                 * \@usageNotes
                 * ### Patch the value for a form group
                 *
                 * ```
                 * const form = new FormGroup({
                 *    first: new FormControl(),
                 *    last: new FormControl()
                 * });
                 * console.log(form.value);   // {first: null, last: null}
                 *
                 * form.patchValue({first: 'Nancy'});
                 * console.log(form.value);   // {first: 'Nancy', last: null}
                 * ```
                 *
                 * @param {?} value The object that matches the structure of the group.
                 * @param {?=} options Configuration options that determine how the control propagates changes and
                 * emits events after the value is patched.
                 * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
                 * true.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormGroup.prototype.patchValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    Object.keys(value).forEach(( /**
                     * @param {?} name
                     * @return {?}
                     */function (/**
                     * @param {?} name
                     * @return {?}
                     */ name) {
                        if (_this.controls[name]) {
                            _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                        }
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
                 * the value of all descendants to null.
                 *
                 * You reset to a specific form state by passing in a map of states
                 * that matches the structure of your form, with control names as keys. The state
                 * is a standalone value or a form state object with both a value and a disabled
                 * status.
                 *
                 * \@usageNotes
                 *
                 * ### Reset the form group values
                 *
                 * ```ts
                 * const form = new FormGroup({
                 *   first: new FormControl('first name'),
                 *   last: new FormControl('last name')
                 * });
                 *
                 * console.log(form.value);  // {first: 'first name', last: 'last name'}
                 *
                 * form.reset({ first: 'name', last: 'last name' });
                 *
                 * console.log(form.value);  // {first: 'name', last: 'last name'}
                 * ```
                 *
                 * ### Reset the form group values and disabled status
                 *
                 * ```
                 * const form = new FormGroup({
                 *   first: new FormControl('first name'),
                 *   last: new FormControl('last name')
                 * });
                 *
                 * form.reset({
                 *   first: {value: 'name', disabled: true},
                 *   last: 'last'
                 * });
                 *
                 * console.log(this.form.value);  // {first: 'name', last: 'last name'}
                 * console.log(this.form.get('first').status);  // 'DISABLED'
                 * ```
                 * @param {?=} value Resets the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events when the group is reset.
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * @return {?}
                 */
                FormGroup.prototype.reset = function (value, options) {
                    if (value === void 0) { value = {}; }
                    if (options === void 0) { options = {}; }
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this._updatePristine(options);
                    this._updateTouched(options);
                    this.updateValueAndValidity(options);
                };
                /**
                 * The aggregate value of the `FormGroup`, including any disabled controls.
                 *
                 * Retrieves all values regardless of disabled status.
                 * The `value` property is the best way to get the value of the group, because
                 * it excludes disabled controls in the `FormGroup`.
                 * @return {?}
                 */
                FormGroup.prototype.getRawValue = function () {
                    return this._reduceChildren({}, ( /**
                     * @param {?} acc
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (acc, control, name) {
                        acc[name] = control instanceof FormControl ? control.value : (( /** @type {?} */(control))).getRawValue();
                        return acc;
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._syncPendingControls = function () {
                    /** @type {?} */
                    var subtreeUpdated = this._reduceChildren(false, ( /**
                     * @param {?} updated
                     * @param {?} child
                     * @return {?}
                     */function (updated, child) {
                        return child._syncPendingControls() ? true : updated;
                    }));
                    if (subtreeUpdated)
                        this.updateValueAndValidity({ onlySelf: true });
                    return subtreeUpdated;
                };
                /**
                 * \@internal
                 * @param {?} name
                 * @return {?}
                 */
                FormGroup.prototype._throwIfControlMissing = function (name) {
                    if (!Object.keys(this.controls).length) {
                        throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                    }
                    if (!this.controls[name]) {
                        throw new Error("Cannot find form control with name: " + name + ".");
                    }
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormGroup.prototype._forEachChild = function (cb) {
                    var _this = this;
                    Object.keys(this.controls).forEach(( /**
                     * @param {?} k
                     * @return {?}
                     */function (/**
                     * @param {?} k
                     * @return {?}
                     */ k) { return cb(_this.controls[k], k); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._setUpControls = function () {
                    var _this = this;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        control.setParent(_this);
                        control._registerOnCollectionChange(_this._onCollectionChange);
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._updateValue = function () { (( /** @type {?} */(this))).value = this._reduceValue(); };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormGroup.prototype._anyControls = function (condition) {
                    var _this = this;
                    /** @type {?} */
                    var res = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        res = res || (_this.contains(name) && condition(control));
                    }));
                    return res;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._reduceValue = function () {
                    var _this = this;
                    return this._reduceChildren({}, ( /**
                     * @param {?} acc
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (acc, control, name) {
                        if (control.enabled || _this.disabled) {
                            acc[name] = control.value;
                        }
                        return acc;
                    }));
                };
                /**
                 * \@internal
                 * @param {?} initValue
                 * @param {?} fn
                 * @return {?}
                 */
                FormGroup.prototype._reduceChildren = function (initValue, fn) {
                    /** @type {?} */
                    var res = initValue;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) { res = fn(res, control, name); }));
                    return res;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._allControlsDisabled = function () {
                    for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
                        var controlName = _a[_i];
                        if (this.controls[controlName].enabled) {
                            return false;
                        }
                    }
                    return Object.keys(this.controls).length > 0 || this.disabled;
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                FormGroup.prototype._checkAllValuesPresent = function (value) {
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        if (value[name] === undefined) {
                            throw new Error("Must supply a value for form control with name: '" + name + "'.");
                        }
                    }));
                };
                return FormGroup;
            }(AbstractControl));
            if (false) { }
            /**
             * Tracks the value and validity state of an array of `FormControl`,
             * `FormGroup` or `FormArray` instances.
             *
             * A `FormArray` aggregates the values of each child `FormControl` into an array.
             * It calculates its status by reducing the status values of its children. For example, if one of
             * the controls in a `FormArray` is invalid, the entire array becomes invalid.
             *
             * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
             * along with `FormControl` and `FormGroup`.
             *
             * \@usageNotes
             *
             * ### Create an array of form controls
             *
             * ```
             * const arr = new FormArray([
             *   new FormControl('Nancy', Validators.minLength(2)),
             *   new FormControl('Drew'),
             * ]);
             *
             * console.log(arr.value);   // ['Nancy', 'Drew']
             * console.log(arr.status);  // 'VALID'
             * ```
             *
             * ### Create a form array with array-level validators
             *
             * You include array-level validators and async validators. These come in handy
             * when you want to perform validation that considers the value of more than one child
             * control.
             *
             * The two types of validators are passed in separately as the second and third arg
             * respectively, or together as part of an options object.
             *
             * ```
             * const arr = new FormArray([
             *   new FormControl('Nancy'),
             *   new FormControl('Drew')
             * ], {validators: myValidator, asyncValidators: myAsyncValidator});
             * ```
             *
             * ### Set the updateOn property for all controls in a form array
             *
             * The options object is used to set a default value for each child
             * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
             * array level, all child controls default to 'blur', unless the child
             * has explicitly specified a different `updateOn` value.
             *
             * ```ts
             * const arr = new FormArray([
             *    new FormControl()
             * ], {updateOn: 'blur'});
             * ```
             *
             * ### Adding or removing controls from a form array
             *
             * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
             * in `FormArray` itself. These methods ensure the controls are properly tracked in the
             * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
             * the `FormArray` directly, as that result in strange and unexpected behavior such
             * as broken change detection.
             *
             * \@publicApi
             */
            var FormArray = /** @class */ (function (_super) {
                __extends(FormArray, _super);
                /**
                 * Creates a new `FormArray` instance.
                 *
                 * @param {?} controls An array of child controls. Each child control is given an index
                 * where it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormArray(controls, validatorOrOpts, asyncValidator) {
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    _this.controls = controls;
                    _this._initObservables();
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this._setUpControls();
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    return _this;
                }
                /**
                 * Get the `AbstractControl` at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to retrieve the control
                 * @return {?}
                 */
                FormArray.prototype.at = function (index) { return this.controls[index]; };
                /**
                 * Insert a new `AbstractControl` at the end of the array.
                 *
                 * @param {?} control Form control to be inserted
                 * @return {?}
                 */
                FormArray.prototype.push = function (control) {
                    this.controls.push(control);
                    this._registerControl(control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Insert a new `AbstractControl` at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to insert the control
                 * @param {?} control Form control to be inserted
                 * @return {?}
                 */
                FormArray.prototype.insert = function (index, control) {
                    this.controls.splice(index, 0, control);
                    this._registerControl(control);
                    this.updateValueAndValidity();
                };
                /**
                 * Remove the control at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to remove the control
                 * @return {?}
                 */
                FormArray.prototype.removeAt = function (index) {
                    if (this.controls[index])
                        this.controls[index]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this.controls.splice(index, 1);
                    this.updateValueAndValidity();
                };
                /**
                 * Replace an existing control.
                 *
                 * @param {?} index Index in the array to replace the control
                 * @param {?} control The `AbstractControl` control to replace the existing control
                 * @return {?}
                 */
                FormArray.prototype.setControl = function (index, control) {
                    if (this.controls[index])
                        this.controls[index]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this.controls.splice(index, 1);
                    if (control) {
                        this.controls.splice(index, 0, control);
                        this._registerControl(control);
                    }
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                Object.defineProperty(FormArray.prototype, "length", {
                    /**
                     * Length of the control array.
                     * @return {?}
                     */
                    get: function () { return this.controls.length; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the value of the `FormArray`. It accepts an array that matches
                 * the structure of the control.
                 *
                 * This method performs strict checks, and throws an error if you try
                 * to set the value of a control that doesn't exist or if you exclude the
                 * value of a control.
                 *
                 * \@usageNotes
                 * ### Set the values for the controls in the form array
                 *
                 * ```
                 * const arr = new FormArray([
                 *   new FormControl(),
                 *   new FormControl()
                 * ]);
                 * console.log(arr.value);   // [null, null]
                 *
                 * arr.setValue(['Nancy', 'Drew']);
                 * console.log(arr.value);   // ['Nancy', 'Drew']
                 * ```
                 *
                 * @param {?} value Array of values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    this._checkAllValuesPresent(value);
                    value.forEach(( /**
                     * @param {?} newValue
                     * @param {?} index
                     * @return {?}
                     */function (newValue, index) {
                        _this._throwIfControlMissing(index);
                        _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of the `FormArray`. It accepts an array that matches the
                 * structure of the control, and does its best to match the values to the correct
                 * controls in the group.
                 *
                 * It accepts both super-sets and sub-sets of the array without throwing an error.
                 *
                 * \@usageNotes
                 * ### Patch the values for controls in a form array
                 *
                 * ```
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * console.log(arr.value);   // [null, null]
                 *
                 * arr.patchValue(['Nancy']);
                 * console.log(arr.value);   // ['Nancy', null]
                 * ```
                 *
                 * @param {?} value Array of latest values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.patchValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    value.forEach(( /**
                     * @param {?} newValue
                     * @param {?} index
                     * @return {?}
                     */function (newValue, index) {
                        if (_this.at(index)) {
                            _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
                        }
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
                 * value of all descendants to null or null maps.
                 *
                 * You reset to a specific form state by passing in an array of states
                 * that matches the structure of the control. The state is a standalone value
                 * or a form state object with both a value and a disabled status.
                 *
                 * \@usageNotes
                 * ### Reset the values in a form array
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * arr.reset(['name', 'last name']);
                 *
                 * console.log(this.arr.value);  // ['name', 'last name']
                 * ```
                 *
                 * ### Reset the values in a form array and the disabled status for the first control
                 *
                 * ```
                 * this.arr.reset([
                 *   {value: 'name', disabled: true},
                 *   'last'
                 * ]);
                 *
                 * console.log(this.arr.value);  // ['name', 'last name']
                 * console.log(this.arr.get(0).status);  // 'DISABLED'
                 * ```
                 *
                 * @param {?=} value Array of values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.reset = function (value, options) {
                    if (value === void 0) { value = []; }
                    if (options === void 0) { options = {}; }
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} index
                     * @return {?}
                     */function (control, index) {
                        control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this._updatePristine(options);
                    this._updateTouched(options);
                    this.updateValueAndValidity(options);
                };
                /**
                 * The aggregate value of the array, including any disabled controls.
                 *
                 * Reports all values regardless of disabled status.
                 * For enabled controls only, the `value` property is the best way to get the value of the array.
                 * @return {?}
                 */
                FormArray.prototype.getRawValue = function () {
                    return this.controls.map(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        return control instanceof FormControl ? control.value : (( /** @type {?} */(control))).getRawValue();
                    }));
                };
                /**
                 * Remove all controls in the `FormArray`.
                 *
                 * \@usageNotes
                 * ### Remove all elements from a FormArray
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * console.log(arr.length);  // 2
                 *
                 * arr.clear();
                 * console.log(arr.length);  // 0
                 * ```
                 *
                 * It's a simpler and more efficient alternative to removing all elements one by one:
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 *
                 * while (arr.length) {
                 *    arr.removeAt(0);
                 * }
                 * ```
                 * @return {?}
                 */
                FormArray.prototype.clear = function () {
                    if (this.controls.length < 1)
                        return;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control._registerOnCollectionChange(( /**
                     * @return {?}
                     */function () { })); }));
                    this.controls.splice(0);
                    this.updateValueAndValidity();
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._syncPendingControls = function () {
                    /** @type {?} */
                    var subtreeUpdated = this.controls.reduce(( /**
                     * @param {?} updated
                     * @param {?} child
                     * @return {?}
                     */function (updated, child) {
                        return child._syncPendingControls() ? true : updated;
                    }), false);
                    if (subtreeUpdated)
                        this.updateValueAndValidity({ onlySelf: true });
                    return subtreeUpdated;
                };
                /**
                 * \@internal
                 * @param {?} index
                 * @return {?}
                 */
                FormArray.prototype._throwIfControlMissing = function (index) {
                    if (!this.controls.length) {
                        throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                    }
                    if (!this.at(index)) {
                        throw new Error("Cannot find form control at index " + index);
                    }
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormArray.prototype._forEachChild = function (cb) {
                    this.controls.forEach(( /**
                     * @param {?} control
                     * @param {?} index
                     * @return {?}
                     */function (control, index) { cb(control, index); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._updateValue = function () {
                    var _this = this;
                    (( /** @type {?} */(this))).value =
                        this.controls.filter(( /**
                         * @param {?} control
                         * @return {?}
                         */function (control) { return control.enabled || _this.disabled; }))
                            .map(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.value; }));
                };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormArray.prototype._anyControls = function (condition) {
                    return this.controls.some(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.enabled && condition(control); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._setUpControls = function () {
                    var _this = this;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return _this._registerControl(control); }));
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                FormArray.prototype._checkAllValuesPresent = function (value) {
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} i
                     * @return {?}
                     */function (control, i) {
                        if (value[i] === undefined) {
                            throw new Error("Must supply a value for form control at index: " + i + ".");
                        }
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._allControlsDisabled = function () {
                    for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
                        var control = _a[_i];
                        if (control.enabled)
                            return false;
                    }
                    return this.controls.length > 0 || this.disabled;
                };
                /**
                 * @private
                 * @param {?} control
                 * @return {?}
                 */
                FormArray.prototype._registerControl = function (control) {
                    control.setParent(this);
                    control._registerOnCollectionChange(this._onCollectionChange);
                };
                return FormArray;
            }(AbstractControl));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formDirectiveProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgForm; }))
            };
            var ɵ0 = /**
             * @return {?}
             */ function () { return Promise.resolve(null); };
            /** @type {?} */
            var resolvedPromise = ((ɵ0))();
            /**
             * \@description
             * Creates a top-level `FormGroup` instance and binds it to a form
             * to track aggregate form value and validation status.
             *
             * As soon as you import the `FormsModule`, this directive becomes active by default on
             * all `<form>` tags.  You don't need to add a special selector.
             *
             * You optionally export the directive into a local template variable using `ngForm` as the key
             * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
             * `FormGroup` instance are duplicated on the directive itself, so a reference to it
             * gives you access to the aggregate value and validity status of the form, as well as
             * user interaction properties like `dirty` and `touched`.
             *
             * To register child controls with the form, use `NgModel` with a `name`
             * attribute. You may use `NgModelGroup` to create sub-groups within the form.
             *
             * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
             * triggered a form submission. The `ngSubmit` event emits the original form
             * submission event.
             *
             * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
             * To import the `FormsModule` but skip its usage in some forms,
             * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
             * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
             * unnecessary because the `<form>` tags are inert. In that case, you would
             * refrain from using the `formGroup` directive.
             *
             * \@usageNotes
             *
             * ### Migrating from deprecated ngForm selector
             *
             * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
             * in Angular v9.
             *
             * This has been deprecated to keep selectors consistent with other core Angular selectors,
             * as element selectors are typically written in kebab-case.
             *
             * Now deprecated:
             * ```html
             * <ngForm #myForm="ngForm">
             * ```
             *
             * After:
             * ```html
             * <ng-form #myForm="ngForm">
             * ```
             *
             * ### Listening for form submission
             *
             * The following example shows how to capture the form values from the "ngSubmit" event.
             *
             * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
             *
             * ### Setting the update options
             *
             * The following example shows you how to change the "updateOn" option from its default using
             * ngFormOptions.
             *
             * ```html
             * <form [ngFormOptions]="{updateOn: 'blur'}">
             *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
             * </form>
             * ```
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgForm = /** @class */ (function (_super) {
                __extends(NgForm, _super);
                /**
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function NgForm(validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    /**
                     * \@description
                     * Returns whether the form submission has been triggered.
                     */
                    _this.submitted = false;
                    _this._directives = [];
                    /**
                     * \@description
                     * Event emitter for the "ngSubmit" event
                     */
                    _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this.form =
                        new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
                    return _this;
                }
                /**
                 * \@description
                 * Lifecycle method called after the view is initialized. For internal use only.
                 * @return {?}
                 */
                NgForm.prototype.ngAfterViewInit = function () { this._setUpdateStrategy(); };
                Object.defineProperty(NgForm.prototype, "formDirective", {
                    /**
                     * \@description
                     * The directive instance.
                     * @return {?}
                     */
                    get: function () { return this; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "control", {
                    /**
                     * \@description
                     * The internal `FormGroup` instance.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array representing the path to this group. Because this directive
                     * always lives at the top level of a form, it is always an empty array.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "controls", {
                    /**
                     * \@description
                     * Returns a map of the controls in this group.
                     * @return {?}
                     */
                    get: function () { return this.form.controls; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that sets up the control directive in this group, re-calculates its value
                 * and validity, and adds the instance to the internal list of directives.
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.addControl = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        (( /** @type {?} */(dir))).control =
                            ( /** @type {?} */(container.registerControl(dir.name, dir.control)));
                        setUpControl(dir.control, dir);
                        dir.control.updateValueAndValidity({ emitEvent: false });
                        _this._directives.push(dir);
                    }));
                };
                /**
                 * \@description
                 * Retrieves the `FormControl` instance from the provided `NgModel` directive.
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.getControl = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * \@description
                 * Removes the `NgModel` instance from the internal list of directives
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.removeControl = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        if (container) {
                            container.removeControl(dir.name);
                        }
                        removeDir(_this._directives, dir);
                    }));
                };
                /**
                 * \@description
                 * Adds a new `NgModelGroup` directive instance to the form.
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.addFormGroup = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        /** @type {?} */
                        var group = new FormGroup({});
                        setUpFormContainer(group, dir);
                        container.registerControl(dir.name, group);
                        group.updateValueAndValidity({ emitEvent: false });
                    }));
                };
                /**
                 * \@description
                 * Removes the `NgModelGroup` directive instance from the form.
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.removeFormGroup = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        if (container) {
                            container.removeControl(dir.name);
                        }
                    }));
                };
                /**
                 * \@description
                 * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.getFormGroup = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Sets the new value for the provided `NgControl` directive.
                 *
                 * @param {?} dir The `NgControl` directive instance.
                 * @param {?} value The new value for the directive's control.
                 * @return {?}
                 */
                NgForm.prototype.updateModel = function (dir, value) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var ctrl = ( /** @type {?} */(_this.form.get(( /** @type {?} */(dir.path)))));
                        ctrl.setValue(value);
                    }));
                };
                /**
                 * \@description
                 * Sets the value for this `FormGroup`.
                 *
                 * @param {?} value The new value
                 * @return {?}
                 */
                NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
                /**
                 * \@description
                 * Method called when the "submit" event is triggered on the form.
                 * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
                 *
                 * @param {?} $event The "submit" event object
                 * @return {?}
                 */
                NgForm.prototype.onSubmit = function ($event) {
                    (( /** @type {?} */(this))).submitted = true;
                    syncPendingControls(this.form, this._directives);
                    this.ngSubmit.emit($event);
                    return false;
                };
                /**
                 * \@description
                 * Method called when the "reset" event is triggered on the form.
                 * @return {?}
                 */
                NgForm.prototype.onReset = function () { this.resetForm(); };
                /**
                 * \@description
                 * Resets the form to an initial value and resets its submitted status.
                 *
                 * @param {?=} value The new value for the form.
                 * @return {?}
                 */
                NgForm.prototype.resetForm = function (value) {
                    if (value === void 0) { value = undefined; }
                    this.form.reset(value);
                    (( /** @type {?} */(this))).submitted = false;
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgForm.prototype._setUpdateStrategy = function () {
                    if (this.options && this.options.updateOn != null) {
                        this.form._updateOn = this.options.updateOn;
                    }
                };
                /**
                 * \@internal
                 * @param {?} path
                 * @return {?}
                 */
                NgForm.prototype._findContainer = function (path) {
                    path.pop();
                    return path.length ? ( /** @type {?} */(this.form.get(path))) : this.form;
                };
                return NgForm;
            }(ControlContainer));
            NgForm.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
                            providers: [formDirectiveProvider],
                            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                            outputs: ['ngSubmit'],
                            exportAs: 'ngForm'
                        },] }
            ];
            /** @nocollapse */
            NgForm.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            NgForm.propDecorators = {
                options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngFormOptions',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var TemplateDrivenErrors = /** @class */ (function () {
                function TemplateDrivenErrors() {
                }
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.modelParentException = function () {
                    throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.formGroupNameException = function () {
                    throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.missingNameException = function () {
                    throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.modelGroupParentException = function () {
                    throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.ngFormWarning = function () {
                    console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ");
                };
                return TemplateDrivenErrors;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * `InjectionToken` to provide to turn off the warning when using 'ngForm' deprecated selector.
             * @type {?}
             */
            var NG_FORM_SELECTOR_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgFormSelectorWarning');
            /**
             * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
             *
             * @deprecated in Angular v6 and will be removed in Angular v9.
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgFormSelectorWarning = /** @class */ (function () {
                /**
                 * @param {?} ngFormWarning
                 */
                function NgFormSelectorWarning(ngFormWarning) {
                    if (((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning._ngFormWarning) ||
                        ngFormWarning === 'always') {
                        TemplateDrivenErrors.ngFormWarning();
                        NgFormSelectorWarning._ngFormWarning = true;
                    }
                }
                return NgFormSelectorWarning;
            }());
            /**
             * Static property used to track whether the deprecation warning for this selector has been sent.
             * Used to support warning config of "once".
             *
             * \@internal
             */
            NgFormSelectorWarning._ngFormWarning = false;
            NgFormSelectorWarning.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngForm' },] }
            ];
            /** @nocollapse */
            NgFormSelectorWarning.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_FORM_SELECTOR_WARNING,] }] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
             *
             * \@publicApi
             */
            var AbstractFormGroupDirective = /** @class */ (function (_super) {
                __extends(AbstractFormGroupDirective, _super);
                function AbstractFormGroupDirective() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * \@description
                 * An internal callback method triggered on the instance after the inputs are set.
                 * Registers the group with its parent group.
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype.ngOnInit = function () {
                    this._checkParentType();
                    ( /** @type {?} */(this.formDirective)).addFormGroup(this);
                };
                /**
                 * \@description
                 * An internal callback method triggered before the instance is destroyed.
                 * Removes the group from its parent group.
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeFormGroup(this);
                    }
                };
                Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
                    /**
                     * \@description
                     * The `FormGroup` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(this.formDirective)).getFormGroup(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
                    /**
                     * \@description
                     * The path to this group from the top-level directive.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, this._parent); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
                    /**
                     * \@description
                     * The synchronous validators registered with this group.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._validators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * The async validators registered with this group.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._asyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype._checkParentType = function () { };
                return AbstractFormGroupDirective;
            }(ControlContainer));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var modelGroupProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgModelGroup; }))
            };
            /**
             * \@description
             * Creates and binds a `FormGroup` instance to a DOM element.
             *
             * This directive can only be used as a child of `NgForm` (within `<form>` tags).
             *
             * Use this directive to validate a sub-group of your form separately from the
             * rest of your form, or if some values in your domain model make more sense
             * to consume together in a nested object.
             *
             * Provide a name for the sub-group and it will become the key
             * for the sub-group in the form's full value. If you need direct access, export the directive into
             * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
             *
             * \@usageNotes
             *
             * ### Consuming controls in a grouping
             *
             * The following example shows you how to combine controls together in a sub-group
             * of the form.
             *
             * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgModelGroup = /** @class */ (function (_super) {
                __extends(NgModelGroup, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function NgModelGroup(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@internal
                 * @return {?}
                 */
                NgModelGroup.prototype._checkParentType = function () {
                    if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                        TemplateDrivenErrors.modelGroupParentException();
                    }
                };
                return NgModelGroup;
            }(AbstractFormGroupDirective));
            NgModelGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] }
            ];
            /** @nocollapse */
            NgModelGroup.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            NgModelGroup.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelGroup',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formControlBinding = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgModel; }))
            };
            var ɵ0$1 = /**
             * @return {?}
             */ function () { return Promise.resolve(null); };
            /**
             * `ngModel` forces an additional change detection run when its inputs change:
             * E.g.:
             * ```
             * <div>{{myModel.valid}}</div>
             * <input [(ngModel)]="myValue" #myModel="ngModel">
             * ```
             * I.e. `ngModel` can export itself on the element and then be used in the template.
             * Normally, this would result in expressions before the `input` that use the exported directive
             * to have and old value as they have been
             * dirty checked before. As this is a very common case for `ngModel`, we added this second change
             * detection run.
             *
             * Notes:
             * - this is just one extra run no matter how many `ngModel` have been changed.
             * - this is a general problem when using `exportAs` for directives!
             * @type {?}
             */
            var resolvedPromise$1 = ((ɵ0$1))();
            /**
             * \@description
             * Creates a `FormControl` instance from a domain model and binds it
             * to a form control element.
             *
             * The `FormControl` instance tracks the value, user interaction, and
             * validation status of the control and keeps the view synced with the model. If used
             * within a parent form, the directive also registers itself with the form as a child
             * control.
             *
             * This directive is used by itself or as part of a larger form. Use the
             * `ngModel` selector to activate it.
             *
             * It accepts a domain model as an optional `Input`. If you have a one-way binding
             * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
             * class sets the value in the view. If you have a two-way binding with `[()]` syntax
             * (also known as 'banana-box syntax'), the value in the UI always syncs back to
             * the domain model in your class.
             *
             * To inspect the properties of the associated `FormControl` (like validity state),
             * export the directive into a local template variable using `ngModel` as the key (ex: `#myVar="ngModel"`).
             * You then access the control using the directive's `control` property,
             * but most properties used (like `valid` and `dirty`) fall through to the control anyway for direct access.
             * See a full list of properties directly available in `AbstractControlDirective`.
             *
             * @see `RadioControlValueAccessor`
             * @see `SelectControlValueAccessor`
             *
             * \@usageNotes
             *
             * ### Using ngModel on a standalone control
             *
             * The following examples show a simple standalone control using `ngModel`:
             *
             * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
             *
             * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
             * so that the control can be registered with the parent form under that name.
             *
             * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
             * as the parent form syncs the value for you. You access its properties by exporting it into a
             * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
             * needed on form submission.
             *
             * If you do need to populate initial values into your form, using a one-way binding for
             * `ngModel` tends to be sufficient as long as you use the exported form's value rather
             * than the domain model's value on submit.
             *
             * ### Using ngModel within a form
             *
             * The following example shows controls using `ngModel` within a form:
             *
             * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
             *
             * ### Using a standalone ngModel within a group
             *
             * The following example shows you how to use a standalone ngModel control
             * within a form. This controls the display of the form, but doesn't contain form data.
             *
             * ```html
             * <form>
             *   <input name="login" ngModel placeholder="Login">
             *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
             * </form>
             * <!-- form value: {login: ''} -->
             * ```
             *
             * ### Setting the ngModel name attribute through options
             *
             * The following example shows you an alternate way to set the name attribute. The name attribute is used
             * within a custom form component, and the name `\@Input` property serves a different purpose.
             *
             * ```html
             * <form>
             *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
             *   </my-person-control>
             * </form>
             * <!-- form value: {user: ''} -->
             * ```
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgModel = /** @class */ (function (_super) {
                __extends(NgModel, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 */
                function NgModel(parent, validators, asyncValidators, valueAccessors) {
                    var _this = _super.call(this) || this;
                    _this.control = new FormControl();
                    /**
                     * \@internal
                     */
                    _this._registered = false;
                    /**
                     * \@description
                     * Event emitter for producing the `ngModelChange` event after
                     * the view model updates.
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this._parent = parent;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                NgModel.prototype.ngOnChanges = function (changes) {
                    this._checkForErrors();
                    if (!this._registered)
                        this._setUpControl();
                    if ('isDisabled' in changes) {
                        this._updateDisabled(changes);
                    }
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        this._updateValue(this.model);
                        this.viewModel = this.model;
                    }
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal
                 * use only.
                 * @return {?}
                 */
                NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
                Object.defineProperty(NgModel.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () {
                        return this._parent ? controlPath(this.name, this._parent) : [this.name];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this control if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._rawAsyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value emitted by `ngModelChange`.
                 * @return {?}
                 */
                NgModel.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpControl = function () {
                    this._setUpdateStrategy();
                    this._isStandalone() ? this._setUpStandalone() :
                        this.formDirective.addControl(this);
                    this._registered = true;
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpdateStrategy = function () {
                    if (this.options && this.options.updateOn != null) {
                        this.control._updateOn = this.options.updateOn;
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._isStandalone = function () {
                    return !this._parent || !!(this.options && this.options.standalone);
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpStandalone = function () {
                    setUpControl(this.control, this);
                    this.control.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkForErrors = function () {
                    if (!this._isStandalone()) {
                        this._checkParentType();
                    }
                    this._checkName();
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkParentType = function () {
                    if (!(this._parent instanceof NgModelGroup) &&
                        this._parent instanceof AbstractFormGroupDirective) {
                        TemplateDrivenErrors.formGroupNameException();
                    }
                    else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                        TemplateDrivenErrors.modelParentException();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkName = function () {
                    if (this.options && this.options.name)
                        this.name = this.options.name;
                    if (!this._isStandalone() && !this.name) {
                        TemplateDrivenErrors.missingNameException();
                    }
                };
                /**
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                NgModel.prototype._updateValue = function (value) {
                    var _this = this;
                    resolvedPromise$1.then(( /**
                     * @return {?}
                     */function () { _this.control.setValue(value, { emitViewToModelChange: false }); }));
                };
                /**
                 * @private
                 * @param {?} changes
                 * @return {?}
                 */
                NgModel.prototype._updateDisabled = function (changes) {
                    var _this = this;
                    /** @type {?} */
                    var disabledValue = changes['isDisabled'].currentValue;
                    /** @type {?} */
                    var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
                    resolvedPromise$1.then(( /**
                     * @return {?}
                     */function () {
                        if (isDisabled && !_this.control.disabled) {
                            _this.control.disable();
                        }
                        else if (!isDisabled && _this.control.disabled) {
                            _this.control.enable();
                        }
                    }));
                };
                return NgModel;
            }(NgControl));
            NgModel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[ngModel]:not([formControlName]):not([formControl])',
                            providers: [formControlBinding],
                            exportAs: 'ngModel'
                        },] }
            ];
            /** @nocollapse */
            NgModel.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] }
            ]; };
            NgModel.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelOptions',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             *
             * Adds `novalidate` attribute to all forms by default.
             *
             * `novalidate` is used to disable browser's native form validation.
             *
             * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
             *
             * ```
             * <form ngNativeValidate></form>
             * ```
             *
             * \@publicApi
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             */
            var ɵNgNoValidate = /** @class */ (function () {
                function ɵNgNoValidate() {
                }
                return ɵNgNoValidate;
            }());
            ɵNgNoValidate.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                            host: { 'novalidate': '' },
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Token to provide to turn off the ngModel warning on formControl and formControlName.
             * @type {?}
             */
            var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
            /** @type {?} */
            var formControlBinding$1 = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormControlDirective; }))
            };
            /**
             * \@description
             * * Syncs a standalone `FormControl` instance to a form control element.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `FormControl`
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Registering a single form control
             *
             * The following examples shows how to register a standalone control and set its value.
             *
             * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
             *
             * ### Use with ngModel
             *
             * Support for using the `ngModel` input property and `ngModelChange` event with reactive
             * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
             *
             * Now deprecated:
             *
             * ```html
             * <input [formControl]="control" [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * This has been deprecated for a few reasons. First, developers have found this pattern
             * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
             * an input/output property named `ngModel` on the reactive form directive that simply
             * approximates (some of) its behavior. Specifically, it allows getting/setting the value
             * and intercepting value events. However, some of `ngModel`'s other features - like
             * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
             * which has understandably caused some confusion.
             *
             * In addition, this pattern mixes template-driven and reactive forms strategies, which
             * we generally don't recommend because it doesn't take advantage of the full benefits of
             * either strategy. Setting the value in the template violates the template-agnostic
             * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
             * the class removes the convenience of defining forms in the template.
             *
             * To update your code before v7, you'll want to decide whether to stick with reactive form
             * directives (and get/set values using reactive forms patterns) or switch over to
             * template-driven directives.
             *
             * After (choice 1 - use reactive forms):
             *
             * ```html
             * <input [formControl]="control">
             * ```
             *
             * ```ts
             * this.control.setValue('some value');
             * ```
             *
             * After (choice 2 - use template-driven forms):
             *
             * ```html
             * <input [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * By default, when you use this pattern, you will see a deprecation warning once in dev
             * mode. You can choose to silence this warning by providing a config for
             * `ReactiveFormsModule` at import time:
             *
             * ```ts
             * imports: [
             *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
             * ]
             * ```
             *
             * Alternatively, you can choose to surface a separate warning for each instance of this
             * pattern with a config value of `"always"`. This may help to track down where in the code
             * the pattern is being used as the code is being updated.
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormControlDirective = /** @class */ (function (_super) {
                __extends(FormControlDirective, _super);
                /**
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 * @param {?} _ngModelWarningConfig
                 */
                function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
                    var _this = _super.call(this) || this;
                    _this._ngModelWarningConfig = _ngModelWarningConfig;
                    /**
                     * @deprecated as of v6
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * \@description
                     * Instance property used to track whether an ngModel warning has been sent out for this
                     * particular `FormControlDirective` instance. Used to support warning config of "always".
                     *
                     * \@internal
                     */
                    _this._ngModelWarningSent = false;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
                    /**
                     * \@description
                     * Triggers a warning that this input should not be used with reactive forms.
                     * @param {?} isDisabled
                     * @return {?}
                     */
                    set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormControlDirective.prototype.ngOnChanges = function (changes) {
                    if (this._isControlChanged(changes)) {
                        setUpControl(this.form, this);
                        if (this.control.disabled && ( /** @type {?} */(this.valueAccessor)).setDisabledState) {
                            ( /** @type {?} */(( /** @type {?} */(this.valueAccessor)).setDisabledState))(true);
                        }
                        this.form.updateValueAndValidity({ emitEvent: false });
                    }
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);
                        this.form.setValue(this.model);
                        this.viewModel = this.model;
                    }
                };
                Object.defineProperty(FormControlDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._rawAsyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "control", {
                    /**
                     * \@description
                     * The `FormControl` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value for the view model.
                 * @return {?}
                 */
                FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                /**
                 * @private
                 * @param {?} changes
                 * @return {?}
                 */
                FormControlDirective.prototype._isControlChanged = function (changes) {
                    return changes.hasOwnProperty('form');
                };
                return FormControlDirective;
            }(NgControl));
            /**
             * \@description
             * Static property used to track whether any ngModel warnings have been sent across
             * all instances of FormControlDirective. Used to support warning config of "once".
             *
             * \@internal
             */
            FormControlDirective._ngModelWarningSentOnce = false;
            FormControlDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] }
            ];
            /** @nocollapse */
            FormControlDirective.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
            ]; };
            FormControlDirective.propDecorators = {
                form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControl',] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formDirectiveProvider$1 = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormGroupDirective; }))
            };
            /**
             * \@description
             *
             * Binds an existing `FormGroup` to a DOM element.
             *
             * This directive accepts an existing `FormGroup` instance. It will then use this
             * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
             * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
             * and `FormArrayName` directives.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `AbstractControl`
             *
             * ### Register Form Group
             *
             * The following example registers a `FormGroup` with first name and last name controls,
             * and listens for the *ngSubmit* event when the button is clicked.
             *
             * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormGroupDirective = /** @class */ (function (_super) {
                __extends(FormGroupDirective, _super);
                /**
                 * @param {?} _validators
                 * @param {?} _asyncValidators
                 */
                function FormGroupDirective(_validators, _asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._validators = _validators;
                    _this._asyncValidators = _asyncValidators;
                    /**
                     * \@description
                     * Reports whether the form submission has been triggered.
                     */
                    _this.submitted = false;
                    /**
                     * \@description
                     * Tracks the list of added `FormControlName` instances
                     */
                    _this.directives = [];
                    /**
                     * \@description
                     * Tracks the `FormGroup` bound to this directive.
                     */
                    _this.form = ( /** @type {?} */(null));
                    /**
                     * \@description
                     * Emits an event when the form submission has been triggered.
                     */
                    _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormGroupDirective.prototype.ngOnChanges = function (changes) {
                    this._checkFormPresent();
                    if (changes.hasOwnProperty('form')) {
                        this._updateValidators();
                        this._updateDomValue();
                        this._updateRegistrations();
                    }
                };
                Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
                    /**
                     * \@description
                     * Returns this directive's instance.
                     * @return {?}
                     */
                    get: function () { return this; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormGroupDirective.prototype, "control", {
                    /**
                     * \@description
                     * Returns the `FormGroup` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormGroupDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array representing the path to this group. Because this directive
                     * always lives at the top level of a form, it always an empty array.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that sets up the control directive in this group, re-calculates its value
                 * and validity, and adds the instance to the internal list of directives.
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addControl = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpControl(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                    this.directives.push(dir);
                    return ctrl;
                };
                /**
                 * \@description
                 * Retrieves the `FormControl` instance from the provided `FormControlName` directive
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getControl = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * \@description
                 * Removes the `FormControlName` instance from the internal list of directives
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeControl = function (dir) { removeDir(this.directives, dir); };
                /**
                 * Adds a new `FormGroupName` directive instance to the form.
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addFormGroup = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpFormContainer(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * No-op method to remove the form group.
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeFormGroup = function (dir) { };
                /**
                 * \@description
                 * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getFormGroup = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Adds a new `FormArrayName` directive instance to the form.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addFormArray = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpFormContainer(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * No-op method to remove the form array.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeFormArray = function (dir) { };
                /**
                 * \@description
                 * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getFormArray = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Sets the new value for the provided `FormControlName` directive.
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @param {?} value The new value for the directive's control.
                 * @return {?}
                 */
                FormGroupDirective.prototype.updateModel = function (dir, value) {
                    /** @type {?} */
                    var ctrl = ( /** @type {?} */(this.form.get(dir.path)));
                    ctrl.setValue(value);
                };
                /**
                 * \@description
                 * Method called with the "submit" event is triggered on the form.
                 * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
                 *
                 * @param {?} $event The "submit" event object
                 * @return {?}
                 */
                FormGroupDirective.prototype.onSubmit = function ($event) {
                    (( /** @type {?} */(this))).submitted = true;
                    syncPendingControls(this.form, this.directives);
                    this.ngSubmit.emit($event);
                    return false;
                };
                /**
                 * \@description
                 * Method called when the "reset" event is triggered on the form.
                 * @return {?}
                 */
                FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
                /**
                 * \@description
                 * Resets the form to an initial value and resets its submitted status.
                 *
                 * @param {?=} value The new value for the form.
                 * @return {?}
                 */
                FormGroupDirective.prototype.resetForm = function (value) {
                    if (value === void 0) { value = undefined; }
                    this.form.reset(value);
                    (( /** @type {?} */(this))).submitted = false;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateDomValue = function () {
                    var _this = this;
                    this.directives.forEach(( /**
                     * @param {?} dir
                     * @return {?}
                     */function (/**
                     * @param {?} dir
                     * @return {?}
                     */ dir) {
                        /** @type {?} */
                        var newCtrl = _this.form.get(dir.path);
                        if (dir.control !== newCtrl) {
                            cleanUpControl(dir.control, dir);
                            if (newCtrl)
                                setUpControl(newCtrl, dir);
                            (( /** @type {?} */(dir))).control = newCtrl;
                        }
                    }));
                    this.form._updateTreeValidity({ emitEvent: false });
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateRegistrations = function () {
                    var _this = this;
                    this.form._registerOnCollectionChange(( /**
                     * @return {?}
                     */function () { return _this._updateDomValue(); }));
                    if (this._oldForm)
                        this._oldForm._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this._oldForm = this.form;
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateValidators = function () {
                    /** @type {?} */
                    var sync = composeValidators(this._validators);
                    this.form.validator = Validators.compose([( /** @type {?} */(this.form.validator)), ( /** @type {?} */(sync))]);
                    /** @type {?} */
                    var async = composeAsyncValidators(this._asyncValidators);
                    this.form.asyncValidator = Validators.composeAsync([( /** @type {?} */(this.form.asyncValidator)), ( /** @type {?} */(async))]);
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._checkFormPresent = function () {
                    if (!this.form) {
                        ReactiveErrors.missingFormException();
                    }
                };
                return FormGroupDirective;
            }(ControlContainer));
            FormGroupDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[formGroup]',
                            providers: [formDirectiveProvider$1],
                            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                            exportAs: 'ngForm'
                        },] }
            ];
            /** @nocollapse */
            FormGroupDirective.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormGroupDirective.propDecorators = {
                form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroup',] }],
                ngSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formGroupNameProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormGroupName; }))
            };
            /**
             * \@description
             *
             * Syncs a nested `FormGroup` to a DOM element.
             *
             * This directive can only be used with a parent `FormGroupDirective`.
             *
             * It accepts the string name of the nested `FormGroup` to link, and
             * looks for a `FormGroup` registered with that name in the parent
             * `FormGroup` instance you passed into `FormGroupDirective`.
             *
             * Use nested form groups to validate a sub-group of a
             * form separately from the rest or to group the values of certain
             * controls into their own nested object.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             *
             * \@usageNotes
             *
             * ### Access the group by name
             *
             * The following example uses the {\@link AbstractControl#get get} method to access the
             * associated `FormGroup`
             *
             * ```ts
             *   this.form.get('name');
             * ```
             *
             * ### Access individual controls in the group
             *
             * The following example uses the {\@link AbstractControl#get get} method to access
             * individual controls within the group using dot syntax.
             *
             * ```ts
             *   this.form.get('name.first');
             * ```
             *
             * ### Register a nested `FormGroup`.
             *
             * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
             * and provides methods to retrieve the nested `FormGroup` and individual controls.
             *
             * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormGroupName = /** @class */ (function (_super) {
                __extends(FormGroupName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function FormGroupName(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroupName.prototype._checkParentType = function () {
                    if (_hasInvalidParent(this._parent)) {
                        ReactiveErrors.groupParentException();
                    }
                };
                return FormGroupName;
            }(AbstractFormGroupDirective));
            FormGroupName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] }
            ];
            /** @nocollapse */
            FormGroupName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormGroupName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroupName',] }]
            };
            if (false) { }
            /** @type {?} */
            var formArrayNameProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormArrayName; }))
            };
            /**
             * \@description
             *
             * Syncs a nested `FormArray` to a DOM element.
             *
             * This directive is designed to be used with a parent `FormGroupDirective` (selector:
             * `[formGroup]`).
             *
             * It accepts the string name of the nested `FormArray` you want to link, and
             * will look for a `FormArray` registered with that name in the parent
             * `FormGroup` instance you passed into `FormGroupDirective`.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Example
             *
             * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormArrayName = /** @class */ (function (_super) {
                __extends(FormArrayName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function FormArrayName(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs are initialized. For internal use only.
                 *
                 * @throws If the directive does not have a valid parent.
                 * @return {?}
                 */
                FormArrayName.prototype.ngOnInit = function () {
                    this._checkParentType();
                    ( /** @type {?} */(this.formDirective)).addFormArray(this);
                };
                /**
                 * \@description
                 * A lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                FormArrayName.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeFormArray(this);
                    }
                };
                Object.defineProperty(FormArrayName.prototype, "control", {
                    /**
                     * \@description
                     * The `FormArray` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(this.formDirective)).getFormArray(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () {
                        return this._parent ? ( /** @type {?} */(this._parent.formDirective)) : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, this._parent); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._validators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._asyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                FormArrayName.prototype._checkParentType = function () {
                    if (_hasInvalidParent(this._parent)) {
                        ReactiveErrors.arrayParentException();
                    }
                };
                return FormArrayName;
            }(ControlContainer));
            FormArrayName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] }
            ];
            /** @nocollapse */
            FormArrayName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormArrayName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formArrayName',] }]
            };
            if (false) { }
            /**
             * @param {?} parent
             * @return {?}
             */
            function _hasInvalidParent(parent) {
                return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
                    !(parent instanceof FormArrayName);
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var controlNameBinding = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormControlName; }))
            };
            /**
             * \@description
             * Syncs a `FormControl` in an existing `FormGroup` to a form control
             * element by name.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `FormControl`
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Register `FormControl` within a group
             *
             * The following example shows how to register multiple form controls within a form group
             * and set their value.
             *
             * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
             *
             * To see `formControlName` examples with different form control types, see:
             *
             * * Radio buttons: `RadioControlValueAccessor`
             * * Selects: `SelectControlValueAccessor`
             *
             * ### Use with ngModel
             *
             * Support for using the `ngModel` input property and `ngModelChange` event with reactive
             * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
             *
             * Now deprecated:
             *
             * ```html
             * <form [formGroup]="form">
             *   <input formControlName="first" [(ngModel)]="value">
             * </form>
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * This has been deprecated for a few reasons. First, developers have found this pattern
             * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
             * an input/output property named `ngModel` on the reactive form directive that simply
             * approximates (some of) its behavior. Specifically, it allows getting/setting the value
             * and intercepting value events. However, some of `ngModel`'s other features - like
             * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
             * which has understandably caused some confusion.
             *
             * In addition, this pattern mixes template-driven and reactive forms strategies, which
             * we generally don't recommend because it doesn't take advantage of the full benefits of
             * either strategy. Setting the value in the template violates the template-agnostic
             * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
             * the class removes the convenience of defining forms in the template.
             *
             * To update your code before v7, you'll want to decide whether to stick with reactive form
             * directives (and get/set values using reactive forms patterns) or switch over to
             * template-driven directives.
             *
             * After (choice 1 - use reactive forms):
             *
             * ```html
             * <form [formGroup]="form">
             *   <input formControlName="first">
             * </form>
             * ```
             *
             * ```ts
             * this.form.get('first').setValue('some value');
             * ```
             *
             * After (choice 2 - use template-driven forms):
             *
             * ```html
             * <input [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * By default, when you use this pattern, you will see a deprecation warning once in dev
             * mode. You can choose to silence this warning by providing a config for
             * `ReactiveFormsModule` at import time:
             *
             * ```ts
             * imports: [
             *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
             * ]
             * ```
             *
             * Alternatively, you can choose to surface a separate warning for each instance of this
             * pattern with a config value of `"always"`. This may help to track down where in the code
             * the pattern is being used as the code is being updated.
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormControlName = /** @class */ (function (_super) {
                __extends(FormControlName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 * @param {?} _ngModelWarningConfig
                 */
                function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
                    var _this = _super.call(this) || this;
                    _this._ngModelWarningConfig = _ngModelWarningConfig;
                    _this._added = false;
                    /**
                     * @deprecated as of v6
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * \@description
                     * Instance property used to track whether an ngModel warning has been sent out for this
                     * particular FormControlName instance. Used to support warning config of "always".
                     *
                     * \@internal
                     */
                    _this._ngModelWarningSent = false;
                    _this._parent = parent;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                Object.defineProperty(FormControlName.prototype, "isDisabled", {
                    /**
                     * \@description
                     * Triggers a warning that this input should not be used with reactive forms.
                     * @param {?} isDisabled
                     * @return {?}
                     */
                    set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormControlName.prototype.ngOnChanges = function (changes) {
                    if (!this._added)
                        this._setUpControl();
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);
                        this.viewModel = this.model;
                        this.formDirective.updateModel(this, this.model);
                    }
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                FormControlName.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeControl(this);
                    }
                };
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value for the view model.
                 * @return {?}
                 */
                FormControlName.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                Object.defineProperty(FormControlName.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, ( /** @type {?} */(this._parent))); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return ( /** @type {?} */(composeAsyncValidators(this._rawAsyncValidators)));
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                FormControlName.prototype._checkParentType = function () {
                    if (!(this._parent instanceof FormGroupName) &&
                        this._parent instanceof AbstractFormGroupDirective) {
                        ReactiveErrors.ngModelGroupException();
                    }
                    else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
                        !(this._parent instanceof FormArrayName)) {
                        ReactiveErrors.controlParentException();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormControlName.prototype._setUpControl = function () {
                    this._checkParentType();
                    (( /** @type {?} */(this))).control = this.formDirective.addControl(this);
                    if (this.control.disabled && ( /** @type {?} */(this.valueAccessor)).setDisabledState) {
                        ( /** @type {?} */(( /** @type {?} */(this.valueAccessor)).setDisabledState))(true);
                    }
                    this._added = true;
                };
                return FormControlName;
            }(NgControl));
            /**
             * \@description
             * Static property used to track whether any ngModel warnings have been sent across
             * all instances of FormControlName. Used to support warning config of "once".
             *
             * \@internal
             */
            FormControlName._ngModelWarningSentOnce = false;
            FormControlName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] }
            ];
            /** @nocollapse */
            FormControlName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
            ]; };
            FormControlName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControlName',] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * An interface implemented by classes that perform synchronous validation.
             *
             * \@usageNotes
             *
             * ### Provide a custom validator
             *
             * The following example implements the `Validator` interface to create a
             * validator directive with a custom error key.
             *
             * ```typescript
             * \@Directive({
             *   selector: '[customValidator]',
             *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
             * })
             * class CustomValidatorDirective implements Validator {
             *   validate(control: AbstractControl): ValidationErrors|null {
             *     return {'custom': true};
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @record
             */
            function Validator() { }
            if (false) { }
            /**
             * \@description
             * An interface implemented by classes that perform asynchronous validation.
             *
             * \@usageNotes
             *
             * ### Provide a custom async validator directive
             *
             * The following example implements the `AsyncValidator` interface to create an
             * async validator directive with a custom error key.
             *
             * ```typescript
             * import { of as observableOf } from 'rxjs';
             *
             * \@Directive({
             *   selector: '[customAsyncValidator]',
             *   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
             * true}]
             * })
             * class CustomAsyncValidatorDirective implements AsyncValidator {
             *   validate(control: AbstractControl): Observable<ValidationErrors|null> {
             *     return observableOf({'custom': true});
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @record
             */
            function AsyncValidator() { }
            if (false) { }
            /**
             * \@description
             * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var REQUIRED_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RequiredValidator; })),
                multi: true
            };
            /**
             * \@description
             * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var CHECKBOX_REQUIRED_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return CheckboxRequiredValidator; })),
                multi: true
            };
            /**
             * \@description
             * A directive that adds the `required` validator to any controls marked with the
             * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a required validator using template-driven forms
             *
             * ```
             * <input name="fullName" ngModel required>
             * ```
             *
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var RequiredValidator = /** @class */ (function () {
                function RequiredValidator() {
                }
                Object.defineProperty(RequiredValidator.prototype, "required", {
                    /**
                     * \@description
                     * Tracks changes to the required attribute bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this._required; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._required = value != null && value !== false && "" + value !== 'false';
                        if (this._onChange)
                            this._onChange();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that validates whether the control is empty.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                RequiredValidator.prototype.validate = function (control) {
                    return this.required ? Validators.required(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                return RequiredValidator;
            }());
            RequiredValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                            providers: [REQUIRED_VALIDATOR],
                            host: { '[attr.required]': 'required ? "" : null' }
                        },] }
            ];
            RequiredValidator.propDecorators = {
                required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * A Directive that adds the `required` validator to checkbox controls marked with the
             * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a required checkbox validator using template-driven forms
             *
             * The following example shows how to add a checkbox required validator to an input attached to an ngModel binding.
             *
             * ```
             * <input type="checkbox" name="active" ngModel required>
             * ```
             *
             * \@publicApi
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             */
            var CheckboxRequiredValidator = /** @class */ (function (_super) {
                __extends(CheckboxRequiredValidator, _super);
                function CheckboxRequiredValidator() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * \@description
                 * Method that validates whether or not the checkbox has been checked.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                CheckboxRequiredValidator.prototype.validate = function (control) {
                    return this.required ? Validators.requiredTrue(control) : null;
                };
                return CheckboxRequiredValidator;
            }(RequiredValidator));
            CheckboxRequiredValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                            providers: [CHECKBOX_REQUIRED_VALIDATOR],
                            host: { '[attr.required]': 'required ? "" : null' }
                        },] }
            ];
            /**
             * \@description
             * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var EMAIL_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return EmailValidator; })),
                multi: true
            };
            /**
             * A directive that adds the `email` validator to controls marked with the
             * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding an email validator
             *
             * The following example shows how to add an email validator to an input attached to an ngModel binding.
             *
             * ```
             * <input type="email" name="email" ngModel email>
             * <input type="email" name="email" ngModel email="true">
             * <input type="email" name="email" ngModel [email]="true">
             * ```
             *
             * \@publicApi
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             */
            var EmailValidator = /** @class */ (function () {
                function EmailValidator() {
                }
                Object.defineProperty(EmailValidator.prototype, "email", {
                    /**
                     * \@description
                     * Tracks changes to the email attribute bound to this directive.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._enabled = value === '' || value === true || value === 'true';
                        if (this._onChange)
                            this._onChange();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that validates whether an email address is valid.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                EmailValidator.prototype.validate = function (control) {
                    return this._enabled ? Validators.email(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                return EmailValidator;
            }());
            EmailValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                            providers: [EMAIL_VALIDATOR]
                        },] }
            ];
            EmailValidator.propDecorators = {
                email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * A function that receives a control and synchronously returns a map of
             * validation errors if present, otherwise null.
             *
             * \@publicApi
             * @record
             */
            function ValidatorFn() { }
            /**
             * \@description
             * A function that receives a control and returns a Promise or observable
             * that emits validation errors if present, otherwise null.
             *
             * \@publicApi
             * @record
             */
            function AsyncValidatorFn() { }
            /**
             * \@description
             * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var MIN_LENGTH_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MinLengthValidator; })),
                multi: true
            };
            /**
             * A directive that adds minimum length validation to controls marked with the
             * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` mult-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a minimum length validator
             *
             * The following example shows how to add a minimum length validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel minlength="4">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var MinLengthValidator = /** @class */ (function () {
                function MinLengthValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                MinLengthValidator.prototype.ngOnChanges = function (changes) {
                    if ('minlength' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value meets a minimum length
                 * requirement. Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                MinLengthValidator.prototype.validate = function (control) {
                    return this.minlength == null ? null : this._validator(control);
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                MinLengthValidator.prototype._createValidator = function () {
                    this._validator = Validators.minLength(parseInt(this.minlength, 10));
                };
                return MinLengthValidator;
            }());
            MinLengthValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                            providers: [MIN_LENGTH_VALIDATOR],
                            host: { '[attr.minlength]': 'minlength ? minlength : null' }
                        },] }
            ];
            MinLengthValidator.propDecorators = {
                minlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var MAX_LENGTH_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MaxLengthValidator; })),
                multi: true
            };
            /**
             * A directive that adds max length validation to controls marked with the
             * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a maximum length validator
             *
             * The following example shows how to add a maximum length validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel maxlength="25">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var MaxLengthValidator = /** @class */ (function () {
                function MaxLengthValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                MaxLengthValidator.prototype.ngOnChanges = function (changes) {
                    if ('maxlength' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value exceeds
                 * the maximum length requirement.
                 * @param {?} control
                 * @return {?}
                 */
                MaxLengthValidator.prototype.validate = function (control) {
                    return this.maxlength != null ? this._validator(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                MaxLengthValidator.prototype._createValidator = function () {
                    this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
                };
                return MaxLengthValidator;
            }());
            MaxLengthValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                            providers: [MAX_LENGTH_VALIDATOR],
                            host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
                        },] }
            ];
            MaxLengthValidator.propDecorators = {
                maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var PATTERN_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return PatternValidator; })),
                multi: true
            };
            /**
             * \@description
             * A directive that adds regex pattern validation to controls marked with the
             * `pattern` attribute. The regex must match the entire control value.
             * The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a pattern validator
             *
             * The following example shows how to add a pattern validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var PatternValidator = /** @class */ (function () {
                function PatternValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                PatternValidator.prototype.ngOnChanges = function (changes) {
                    if ('pattern' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value matches the
                 * the pattern requirement.
                 * @param {?} control
                 * @return {?}
                 */
                PatternValidator.prototype.validate = function (control) { return this._validator(control); };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
                return PatternValidator;
            }());
            PatternValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                            providers: [PATTERN_VALIDATOR],
                            host: { '[attr.pattern]': 'pattern ? pattern : null' }
                        },] }
            ];
            PatternValidator.propDecorators = {
                pattern: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SHARED_FORM_DIRECTIVES = [
                ɵNgNoValidate,
                NgSelectOption,
                ɵNgSelectMultipleOption,
                DefaultValueAccessor,
                NumberValueAccessor,
                RangeValueAccessor,
                CheckboxControlValueAccessor,
                SelectControlValueAccessor,
                SelectMultipleControlValueAccessor,
                RadioControlValueAccessor,
                NgControlStatus,
                NgControlStatusGroup,
                RequiredValidator,
                MinLengthValidator,
                MaxLengthValidator,
                PatternValidator,
                CheckboxRequiredValidator,
                EmailValidator,
            ];
            /** @type {?} */
            var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
            /** @type {?} */
            var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
            /**
             * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
             */
            var ɵInternalFormsSharedModule = /** @class */ (function () {
                function ɵInternalFormsSharedModule() {
                }
                return ɵInternalFormsSharedModule;
            }());
            ɵInternalFormsSharedModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: SHARED_FORM_DIRECTIVES,
                            exports: SHARED_FORM_DIRECTIVES,
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} options
             * @return {?}
             */
            function isAbstractControlOptions(options) {
                return (( /** @type {?} */(options))).asyncValidators !== undefined ||
                    (( /** @type {?} */(options))).validators !== undefined ||
                    (( /** @type {?} */(options))).updateOn !== undefined;
            }
            /**
             * \@description
             * Creates an `AbstractControl` from a user-specified configuration.
             *
             * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
             * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
             * forms.
             *
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             *
             * \@publicApi
             */
            var FormBuilder = /** @class */ (function () {
                function FormBuilder() {
                }
                /**
                 * \@description
                 * Construct a new `FormGroup` instance.
                 *
                 * @param {?} controlsConfig A collection of child controls. The key for each child is the name
                 * under which it is registered.
                 *
                 * @param {?=} options Configuration options object for the `FormGroup`. The object can
                 * have two shapes:
                 *
                 * 1) `AbstractControlOptions` object (preferred), which consists of:
                 * * `validators`: A synchronous validator function, or an array of validator functions
                 * * `asyncValidators`: A single async validator or array of async validator functions
                 * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
                 * submit')
                 *
                 * 2) Legacy configuration object, which consists of:
                 * * `validator`: A synchronous validator function, or an array of validator functions
                 * * `asyncValidator`: A single async validator or array of async validator functions
                 *
                 * @return {?}
                 */
                FormBuilder.prototype.group = function (controlsConfig, options) {
                    if (options === void 0) { options = null; }
                    /** @type {?} */
                    var controls = this._reduceControls(controlsConfig);
                    /** @type {?} */
                    var validators = null;
                    /** @type {?} */
                    var asyncValidators = null;
                    /** @type {?} */
                    var updateOn = undefined;
                    if (options != null) {
                        if (isAbstractControlOptions(options)) {
                            // `options` are `AbstractControlOptions`
                            validators = options.validators != null ? options.validators : null;
                            asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                            updateOn = options.updateOn != null ? options.updateOn : undefined;
                        }
                        else {
                            // `options` are legacy form group options
                            validators = options['validator'] != null ? options['validator'] : null;
                            asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
                        }
                    }
                    return new FormGroup(controls, { asyncValidators: asyncValidators, updateOn: updateOn, validators: validators });
                };
                /**
                 * \@description
                 * Construct a new `FormControl` with the given state, validators and options.
                 *
                 * \@usageNotes
                 *
                 * ### Initialize a control as disabled
                 *
                 * The following example returns a control with an initial value in a disabled state.
                 *
                 * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
                 * </code-example>
                 * @param {?} formState Initializes the control with an initial state value, or
                 * with an object that contains both a value and a disabled status.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains
                 * validation functions and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator
                 * functions.
                 *
                 * @return {?}
                 */
                FormBuilder.prototype.control = function (formState, validatorOrOpts, asyncValidator) {
                    return new FormControl(formState, validatorOrOpts, asyncValidator);
                };
                /**
                 * Constructs a new `FormArray` from the given array of configurations,
                 * validators and options.
                 *
                 * @param {?} controlsConfig An array of child controls or control configs. Each
                 * child control is given an index when it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains
                 * validation functions and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator
                 * functions.
                 * @return {?}
                 */
                FormBuilder.prototype.array = function (controlsConfig, validatorOrOpts, asyncValidator) {
                    var _this = this;
                    /** @type {?} */
                    var controls = controlsConfig.map(( /**
                     * @param {?} c
                     * @return {?}
                     */function (/**
                     * @param {?} c
                     * @return {?}
                     */ c) { return _this._createControl(c); }));
                    return new FormArray(controls, validatorOrOpts, asyncValidator);
                };
                /**
                 * \@internal
                 * @param {?} controlsConfig
                 * @return {?}
                 */
                FormBuilder.prototype._reduceControls = function (controlsConfig) {
                    var _this = this;
                    /** @type {?} */
                    var controls = {};
                    Object.keys(controlsConfig).forEach(( /**
                     * @param {?} controlName
                     * @return {?}
                     */function (/**
                     * @param {?} controlName
                     * @return {?}
                     */ controlName) {
                        controls[controlName] = _this._createControl(controlsConfig[controlName]);
                    }));
                    return controls;
                };
                /**
                 * \@internal
                 * @param {?} controlConfig
                 * @return {?}
                 */
                FormBuilder.prototype._createControl = function (controlConfig) {
                    if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
                        controlConfig instanceof FormArray) {
                        return controlConfig;
                    }
                    else if (Array.isArray(controlConfig)) {
                        /** @type {?} */
                        var value = controlConfig[0];
                        /** @type {?} */
                        var validator = controlConfig.length > 1 ? controlConfig[1] : null;
                        /** @type {?} */
                        var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
                        return this.control(value, validator, asyncValidator);
                    }
                    else {
                        return this.control(controlConfig);
                    }
                };
                return FormBuilder;
            }());
            FormBuilder.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@publicApi
             * @type {?}
             */
            var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.12');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Exports the required providers and directives for template-driven forms,
             * making them available for import by NgModules that import this module.
             *
             * @see [Forms Guide](/guide/forms)
             *
             * \@publicApi
             */
            var FormsModule = /** @class */ (function () {
                function FormsModule() {
                }
                /**
                 * \@description
                 * Provides options for configuring the template-driven forms module.
                 *
                 * @param {?} opts An object of configuration options
                 * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
                 * `ngForm` selector is used.
                 * @return {?}
                 */
                FormsModule.withConfig = function (opts) {
                    return {
                        ngModule: FormsModule,
                        providers: [{ provide: NG_FORM_SELECTOR_WARNING, useValue: opts.warnOnDeprecatedNgFormSelector }]
                    };
                };
                return FormsModule;
            }());
            FormsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                            providers: [RadioControlRegistry],
                            exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
                        },] }
            ];
            /**
             * Exports the required infrastructure and directives for reactive forms,
             * making them available for import by NgModules that import this module.
             * @see [Forms](guide/reactive-forms)
             *
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             *
             * \@publicApi
             */
            var ReactiveFormsModule = /** @class */ (function () {
                function ReactiveFormsModule() {
                }
                /**
                 * \@description
                 * Provides options for configuring the reactive forms module.
                 *
                 * @param {?} opts An object of configuration options
                 * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
                 * binding is used with reactive form directives.
                 * @return {?}
                 */
                ReactiveFormsModule.withConfig = function (opts) {
                    return {
                        ngModule: ReactiveFormsModule,
                        providers: [{
                                provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                                useValue: opts.warnOnNgModelWithFormControl
                            }]
                    };
                };
                return ReactiveFormsModule;
            }());
            ReactiveFormsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                            providers: [FormBuilder, RadioControlRegistry],
                            exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Generated bundle index. Do not edit.
             */
            //# sourceMappingURL=forms.js.map
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/income-tax-calculator/income-tax-calculator.component.html": 
        /*!***************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/income-tax-calculator/income-tax-calculator.component.html ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-12 col-md-6\">\n    <h2><span>Calculate my</span> <br />income tax <br /></h2>\n    <shared-currency [(value)]=\"income\"></shared-currency>\n    <div class=\"mt-1\">\n      <shared-toggle\n        [checked]=\"false\"\n        data-label=\"Includes Superannuation\"\n        (changetoggleState)=\"updateIncludeSuperannuation($event)\"\n      ></shared-toggle>\n    </div>\n    <div class=\"mt-1\">\n      <shared-dropdown\n        (selectionChange)=\"onIncomeYearSelectionChange($event)\"\n        [data]=\"incomeYears\"\n      ></shared-dropdown>\n    </div>\n    <div>\n      <shared-radio></shared-radio>\n    </div>\n  </div>\n</div>\n<div class=\"col-12 col-md-6\"></div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/income-tax-calculator/income-tax-panel.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/income-tax-calculator/income-tax-panel.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel\">\n  <h2>{{ title }}</h2>\n  <div class=\"information\">\n    <div class=\"title\">\n      Pay\n    </div>\n    <div class=\"value\">\n      {{ pay }}\n    </div>\n  </div>\n  <div class=\"information\">\n    <div class=\"title\">\n      Taxable Income\n    </div>\n    <div class=\"value\">\n      {{ taxableIncome }}\n    </div>\n  </div>\n  <div class=\"information\">\n    <div class=\"title\">\n      Superannuation\n    </div>\n    <div class=\"value\">\n      {{ superannuation }}\n    </div>\n  </div>\n  <div class=\"information\">\n    <div class=\"title\">\n      Total Taxes\n    </div>\n    <div class=\"value\">\n      {{ totalTaxes }}\n    </div>\n  </div>\n  <div class=\"information\">\n    <div class=\"title\">\n      Income Tax\n    </div>\n    <div class=\"value\">\n      {{ incomeTax }}\n    </div>\n  </div>\n  <div class=\"information\">\n    <div class=\"title\">\n      Medicare Levy\n    </div>\n    <div class=\"value\">\n      {{ medicareLevy }}\n    </div>\n  </div>\n  <div class=\"information\" *ngIf=\"taxOffset !== undefined\">\n    <div class=\"title\">\n      Tax Offsets\n    </div>\n    <div class=\"value\">\n      {{ taxOffset }}\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/checkbox/checkbox.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/checkbox/checkbox.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <input\n    id=\"a11y-issue-1\"\n    name=\"a11y-issues\"\n    type=\"checkbox\"\n    value=\"no-issues\"\n  />\n  <label for=\"a11y-issue-1\">There are no issues</label>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/currency/currency.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/currency/currency.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input\n  type=\"text\"\n  [ngModel]=\"value | currency\"\n  (ngModelChange)=\"setValue($event)\"\n  #input\n/>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/dropdown/dropdown.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/dropdown/dropdown.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ul\n  class=\"dropdown\"\n  [ngClass]=\"{ expanded: expanded, selected: selected }\"\n  (click)=\"$event.stopPropagation()\"\n>\n  <li\n    role=\"button\"\n    attr.aria-labelledby=\"dropdown-label-{{ id }}\"\n    id=\"dropdown-selected-{{ id }}\"\n    tabindex=\"0\"\n    (click)=\"toggleList()\"\n    (keydown)=\"onLabelKeydown($event)\"\n  >\n    <span>\n      <span>\n        <span id=\"dropdown-label-{{ id }}\" class=\"label\">{{ label }}</span>\n        <br />\n        <span *ngIf=\"selected\">{{ selected }}</span>\n      </span>\n      <i class=\"caret\" [ngClass]=\"{ up: expanded, down: !expanded }\"></i>\n    </span>\n  </li>\n\n  <li attr.aria-expanded=\"{{ expanded }}\" role=\"list\">\n    <ul class=\"list\">\n      <li\n        tabindex=\"\"\n        class=\"list-item\"\n        *ngFor=\"let item of data\"\n        id=\"{{ item }}-{{ id }}\"\n        (click)=\"setectItem(item)\"\n        [ngClass]=\"{ selected: selected === item }\"\n      >\n        {{ item }}\n      </li>\n    </ul>\n  </li>\n</ul>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/label/label.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/label/label.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<label [id]=\"id\">{{ label }}</label>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/radio/radio.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/radio/radio.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div role=\"radiogroup\">\n  <span\n    role=\"radio\"\n    *ngFor=\"let item of data\"\n    (click)=\"check(item)\"\n    [attr.aria-checked]=\"checkedItem === item\"\n    (keydown)=\"onKeydown(item, $event)\"\n    [tabindex]=\"focusableItem === item ? 0 : -1\"\n    #radio\n    >{{ item }}</span\n  >\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/toggle/toggle.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/toggle/toggle.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"toggle\">\n  <shared-label [label]=\"label\" [id]=\"id\" class=\"pb-1\"></shared-label>\n  <span\n    role=\"checkbox\"\n    attr.aria-checked=\"{{ checked }}\"\n    class=\"toggle-wrapper\"\n    [ngClass]=\"{ checked: checked }\"\n    (click)=\"toggle()\"\n    tabindex=\"0\"\n    (keydown)=\"onKeydown($event)\"\n    attr.aria-labelledby=\"{{ id }}\"\n  >\n    <span class=\"toggle-btn\"></span>\n  </span>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/data/income-tax-data.ts": 
        /*!*****************************************!*\
          !*** ./src/app/data/income-tax-data.ts ***!
          \*****************************************/
        /*! exports provided: INCOME_TAX_DATA */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var _a, _b;
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCOME_TAX_DATA", function () { return INCOME_TAX_DATA; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _pc_models_residency_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pc/models/residency-status */ "./src/app/models/residency-status.ts");
            var INCOME_TAX_DATA = {
                2019: (_a = {},
                    _a[_pc_models_residency_status__WEBPACK_IMPORTED_MODULE_1__["ResidencyStatus"].RESIDENT] = {
                        taxRates: [
                            {
                                range: [0, 18200],
                                rate: 0,
                            },
                            {
                                range: [18201, 37000],
                                rate: 0.19,
                            },
                            {
                                range: [37001, 90000],
                                rate: 0.325,
                            },
                            {
                                range: [90001, 180000],
                                rate: 0.37,
                            },
                            {
                                range: [180001],
                                rate: 0.45,
                            },
                        ],
                        superannuation: 0.095,
                        medicareLevy: [
                            {
                                range: [0, 22397],
                                formula: function () { return 0; },
                            },
                            {
                                range: [22398, 27997],
                                formula: function (taxableIncome) { return (taxableIncome - 22398) * 0.1; },
                            },
                            {
                                range: [27997],
                                formula: function (taxableIncome) { return taxableIncome * 0.02; },
                            },
                        ],
                        lowIncomeTaxOffset: [
                            {
                                range: [0, 37000],
                                formula: function () { return 445; },
                            },
                            {
                                range: [37000, 66667],
                                formula: function (taxableIncome) { return 445 - (taxableIncome - 37000) * 0.015; },
                            },
                        ],
                        lowAndMiddleIncomeTaxOffset: [
                            {
                                range: [0, 37000],
                                formula: function () { return 255; },
                            },
                            {
                                range: [37000, 48000],
                                formula: function (taxableIncome) { return 255 + (taxableIncome - 37000) * 0.075; },
                            },
                            {
                                range: [48000, 90000],
                                formula: function () { return 1080; },
                            },
                            {
                                range: [90000, 126000],
                                formula: function (taxableIncome) { return 1080 - (taxableIncome - 90000) * 0.03; },
                            },
                        ],
                    },
                    _a[_pc_models_residency_status__WEBPACK_IMPORTED_MODULE_1__["ResidencyStatus"].NON_RESIDENT] = {
                        taxRates: [
                            {
                                range: [0, 18200],
                                rate: 0,
                            },
                        ],
                        superannuation: 0.095,
                        medicareLevy: [
                            {
                                range: [27997],
                                formula: function (income) { return income * 0.02; },
                            },
                        ],
                        lowIncomeTaxOffset: [
                            {
                                range: [0, 37000],
                                formula: function () { return 445; },
                            },
                        ],
                        lowAndMiddleIncomeTaxOffset: [
                            {
                                range: [0, 37000],
                                formula: function () { return 445; },
                            },
                        ],
                    },
                    _a),
                2018: (_b = {},
                    _b[_pc_models_residency_status__WEBPACK_IMPORTED_MODULE_1__["ResidencyStatus"].RESIDENT] = {
                        taxRates: [
                            {
                                range: [0, 18200],
                                rate: 0,
                            },
                            {
                                range: [18201, 37000],
                                rate: 0.19,
                            },
                            {
                                range: [37001, 90000],
                                rate: 0.325,
                            },
                            {
                                range: [90001, 180000],
                                rate: 0.37,
                            },
                            {
                                range: [180001],
                                rate: 0.45,
                            },
                        ],
                        superannuation: 0.095,
                        medicareLevy: [
                            {
                                range: [0, 22397],
                                formula: function () { return 0; },
                            },
                            {
                                range: [22398, 27997],
                                formula: function (taxableIncome) { return (taxableIncome - 22398) * 0.1; },
                            },
                            {
                                range: [27997],
                                formula: function (taxableIncome) { return taxableIncome * 0.02; },
                            },
                        ],
                        lowIncomeTaxOffset: [
                            {
                                range: [0, 37000],
                                formula: function () { return 445; },
                            },
                            {
                                range: [37000, 66667],
                                formula: function (taxableIncome) { return 445 - (taxableIncome - 37000) * 0.015; },
                            },
                        ],
                        lowAndMiddleIncomeTaxOffset: [
                            {
                                range: [0, 37000],
                                formula: function () { return 255; },
                            },
                            {
                                range: [37000, 48000],
                                formula: function (taxableIncome) { return 255 + (taxableIncome - 37000) * 0.075; },
                            },
                            {
                                range: [48000, 90000],
                                formula: function () { return 1080; },
                            },
                            {
                                range: [90000, 126000],
                                formula: function (taxableIncome) { return 1080 - (taxableIncome - 90000) * 0.03; },
                            },
                        ],
                    },
                    _b[_pc_models_residency_status__WEBPACK_IMPORTED_MODULE_1__["ResidencyStatus"].NON_RESIDENT] = {
                        taxRates: [
                            {
                                range: [0, 18200],
                                rate: 0,
                            },
                        ],
                        superannuation: 0.095,
                        medicareLevy: [
                            {
                                range: [27997],
                                formula: function (income) { return income * 0.02; },
                            },
                        ],
                        lowIncomeTaxOffset: [
                            {
                                range: [0, 37000],
                                formula: function () { return 445; },
                            },
                        ],
                        lowAndMiddleIncomeTaxOffset: [
                            {
                                range: [0, 37000],
                                formula: function () { return 445; },
                            },
                        ],
                    },
                    _b),
            };
            /***/ 
        }),
        /***/ "./src/app/features/income-tax-calculator/income-tax-calculator-routing.module.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/features/income-tax-calculator/income-tax-calculator-routing.module.ts ***!
          \****************************************************************************************/
        /*! exports provided: IncomeTaxCalculatorRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTaxCalculatorRoutingModule", function () { return IncomeTaxCalculatorRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _income_tax_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income-tax-calculator.component */ "./src/app/features/income-tax-calculator/income-tax-calculator.component.ts");
            var routes = [
                {
                    path: '',
                    component: _income_tax_calculator_component__WEBPACK_IMPORTED_MODULE_3__["IncomeTaxCalculatorComponent"],
                },
            ];
            var IncomeTaxCalculatorRoutingModule = /** @class */ (function () {
                function IncomeTaxCalculatorRoutingModule() {
                }
                return IncomeTaxCalculatorRoutingModule;
            }());
            IncomeTaxCalculatorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], IncomeTaxCalculatorRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/features/income-tax-calculator/income-tax-calculator.component.scss": 
        /*!*************************************************************************************!*\
          !*** ./src/app/features/income-tax-calculator/income-tax-calculator.component.scss ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".calculator-options {\n  flex-grow: 1;\n}\n\n.panels-container {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyYWx0YWwvU2l0ZXMvcGF5Y2FsL3NyYy9hcHAvZmVhdHVyZXMvaW5jb21lLXRheC1jYWxjdWxhdG9yL2luY29tZS10YXgtY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvaW5jb21lLXRheC1jYWxjdWxhdG9yL2luY29tZS10YXgtY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2luY29tZS10YXgtY2FsY3VsYXRvci9pbmNvbWUtdGF4LWNhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsY3VsYXRvci1vcHRpb25zIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ucGFuZWxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iLCIuY2FsY3VsYXRvci1vcHRpb25zIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ucGFuZWxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/features/income-tax-calculator/income-tax-calculator.component.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/features/income-tax-calculator/income-tax-calculator.component.ts ***!
          \***********************************************************************************/
        /*! exports provided: IncomeTaxCalculatorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTaxCalculatorComponent", function () { return IncomeTaxCalculatorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _pc_models_residency_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pc/models/residency-status */ "./src/app/models/residency-status.ts");
            /* harmony import */ var _pc_shared_services_income_tax_calculator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pc/shared/services/income-tax-calculator.service */ "./src/app/shared/services/income-tax-calculator.service.ts");
            /* harmony import */ var _pc_shared_services_tax_offset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pc/shared/services/tax-offset.service */ "./src/app/shared/services/tax-offset.service.ts");
            /* harmony import */ var _pc_shared_services_superannuation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pc/shared/services/superannuation.service */ "./src/app/shared/services/superannuation.service.ts");
            /* harmony import */ var _pc_shared_services_taxable_income_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pc/shared/services/taxable-income.service */ "./src/app/shared/services/taxable-income.service.ts");
            /* harmony import */ var _pc_shared_services_medicare_levy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pc/shared/services/medicare-levy.service */ "./src/app/shared/services/medicare-levy.service.ts");
            /* harmony import */ var _pc_shared_services_pay_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pc/shared/services/pay.service */ "./src/app/shared/services/pay.service.ts");
            /* harmony import */ var _pc_shared_services_tax_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pc/shared/services/tax-data.service */ "./src/app/shared/services/tax-data.service.ts");
            var IncomeTaxCalculatorComponent = /** @class */ (function () {
                function IncomeTaxCalculatorComponent(itc, toc, sc, tic, mlc, payc, td) {
                    this.itc = itc;
                    this.toc = toc;
                    this.sc = sc;
                    this.tic = tic;
                    this.mlc = mlc;
                    this.payc = payc;
                    this.td = td;
                    this.residencyStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_pc_models_residency_status__WEBPACK_IMPORTED_MODULE_3__["ResidencyStatus"].RESIDENT);
                    // superannuation
                    this.innerSuperannuationIncluded = false;
                    this.innerIncome = 163200;
                    this.income$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.income);
                    this.incomeYear$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](2019);
                    this.superannuationIncluded$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
                }
                Object.defineProperty(IncomeTaxCalculatorComponent.prototype, "superannuationIncluded", {
                    get: function () {
                        return this.innerSuperannuationIncluded;
                    },
                    set: function (value) {
                        this.innerSuperannuationIncluded = value;
                        this.superannuationIncluded$.next(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(IncomeTaxCalculatorComponent.prototype, "income", {
                    get: function () {
                        return this.innerIncome;
                    },
                    set: function (value) {
                        this.innerIncome = value;
                        this.income$.next(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                IncomeTaxCalculatorComponent.prototype.ngOnInit = function () {
                    // tax data
                    this.applicableTaxData$ = this.td.getApplicableTaxData(this.incomeYear$, this.residencyStatus$);
                    this.taxRatesData$ = this.td.getTaxRatesData(this.applicableTaxData$);
                    this.superannuationData$ = this.td.getSuperannuationData(this.applicableTaxData$);
                    this.medicareLevyData$ = this.td.getMedicareLevyData(this.applicableTaxData$);
                    this.lowIncomeTaxOffsetData$ = this.td.getLowIncomeTaxOffsetData(this.applicableTaxData$);
                    this.lowAndMiddleIncomeTaxOffsetData$ = this.td.getLowAndMiddleIncomeTaxOffsetData(this.applicableTaxData$);
                    this.incomeYears = this.td.getTaxYearsData();
                    // taxable income
                    this.annuallyTaxableIncome$ = this.tic.calculateAnnuallyTaxableIncome(this.superannuationData$, this.income$, this.superannuationIncluded$);
                    this.monthlyTaxableIncome$ = this.tic.calculateMonthlyTaxableIncome(this.annuallyTaxableIncome$);
                    this.fortnightlyTaxableIncome$ = this.tic.calculateFortnightlyTaxableIncome(this.annuallyTaxableIncome$);
                    this.weeklyTaxableIncome$ = this.tic.calculateWeeklyTaxableIncome(this.annuallyTaxableIncome$);
                    // superannuation
                    this.annuallySuperannuation$ = this.sc.calculateAnnuallySuperannuation(this.superannuationData$, this.income$, this.superannuationIncluded$);
                    this.monthlySuperannuation$ = this.sc.calculateMonthlySuperannuation(this.annuallySuperannuation$);
                    this.fortnightlySuperannuation$ = this.sc.calculateFortnightlySuperannuation(this.annuallySuperannuation$);
                    this.weeklySuperannuation$ = this.sc.calculateWeeklySuperannuation(this.annuallySuperannuation$);
                    // income tax
                    this.annuallyIncomeTax$ = this.itc.calculateAnnuallyIncomeTax(this.taxRatesData$, this.annuallyTaxableIncome$);
                    this.monthlyIncomeTax$ = this.itc.calculateMonthlyIncomeTax(this.annuallyIncomeTax$);
                    this.fortnightlyIncomeTax$ = this.itc.calculateFortnightlyIncomeTax(this.annuallyIncomeTax$);
                    this.weeklyIncomeTax$ = this.itc.calculateWeeklyIncomeTax(this.annuallyIncomeTax$);
                    // medical levy
                    this.annuallyMedicareLevy$ = this.mlc.calculateAnnuallyMedicareLevy(this.medicareLevyData$, this.annuallyTaxableIncome$);
                    this.monthlyMedicareLevy$ = this.mlc.calculateMonthlyMedicareLevy(this.annuallyMedicareLevy$);
                    this.fortnightlyMedicareLevy$ = this.mlc.calculateFortnightlyMedicareLevy(this.annuallyMedicareLevy$);
                    this.weeklyMedicareLevy$ = this.mlc.calculateWeeklyMedicareLevy(this.annuallyMedicareLevy$);
                    // total taxes
                    this.annuallyTotalTaxes$ = this.itc.calculateAnnuallyTotalTaxes(this.annuallyIncomeTax$, this.annuallyMedicareLevy$);
                    this.monthlyTotalTaxes$ = this.itc.calculateMonthlyTotalTaxes(this.monthlyIncomeTax$, this.monthlyMedicareLevy$);
                    this.fortnightlyTotalTaxes$ = this.itc.calculateFortnightlyTotalTaxes(this.fortnightlyIncomeTax$, this.fortnightlyMedicareLevy$);
                    this.weeklyTotalTaxes$ = this.itc.calculateWeeklyTotalTaxes(this.weeklyIncomeTax$, this.weeklyMedicareLevy$);
                    // low income tax offset
                    this.annuallyLowIncomeTaxOffset$ = this.toc.calculateLowIncomeTaxOffset(this.annuallyTaxableIncome$, this.lowIncomeTaxOffsetData$);
                    // low income and middle tax offset
                    this.annuallyLowAndMiddleIncomeTaxOffset$ = this.toc.calculateLowAndMiddleIncomeTaxOffset(this.annuallyTaxableIncome$, this.lowAndMiddleIncomeTaxOffsetData$);
                    // total tax offset
                    this.annuallyTaxOffset$ = this.toc.calculateTotalIncomeTaxOffset(this.annuallyLowIncomeTaxOffset$, this.annuallyLowAndMiddleIncomeTaxOffset$, this.annuallyIncomeTax$);
                    // total tax excluding offsets
                    this.annuallyIncomeTaxExcludingOffsets$ = this.itc.calculateAnnuallyIncomeTaxExcludingOffsets(this.annuallyTotalTaxes$, this.annuallyTaxOffset$);
                    // pay
                    this.annuallyPay$ = this.payc.calculateAnnuallyPay(this.annuallyTaxableIncome$, this.annuallyTotalTaxes$);
                    this.monthlyPay$ = this.payc.calculateMonthlyPay(this.monthlyTaxableIncome$, this.monthlyTotalTaxes$);
                    this.fortnightlyPay$ = this.payc.calculateFortnightlyPay(this.fortnightlyTaxableIncome$, this.fortnightlyTotalTaxes$);
                    this.weeklyPay$ = this.payc.calculateWeeklyPay(this.weeklyTaxableIncome$, this.weeklyTotalTaxes$);
                    // pay including tax offsets
                    this.annuallyPayIncludingTaxOffsets$ = this.payc.calculateAnnuallyPayIncludingTaxOffsets(this.annuallyTaxableIncome$, this.annuallyIncomeTaxExcludingOffsets$);
                };
                IncomeTaxCalculatorComponent.prototype.updateIncludeSuperannuation = function (isIncluded) {
                    this.superannuationIncluded = isIncluded;
                };
                IncomeTaxCalculatorComponent.prototype.onIncomeYearSelectionChange = function (year) {
                    this.incomeYear$.next(year);
                };
                return IncomeTaxCalculatorComponent;
            }());
            IncomeTaxCalculatorComponent.ctorParameters = function () { return [
                { type: _pc_shared_services_income_tax_calculator_service__WEBPACK_IMPORTED_MODULE_4__["IncomeTaxService"] },
                { type: _pc_shared_services_tax_offset_service__WEBPACK_IMPORTED_MODULE_5__["TaxOffsetService"] },
                { type: _pc_shared_services_superannuation_service__WEBPACK_IMPORTED_MODULE_6__["SuperannuationService"] },
                { type: _pc_shared_services_taxable_income_service__WEBPACK_IMPORTED_MODULE_7__["TaxableIncomeService"] },
                { type: _pc_shared_services_medicare_levy_service__WEBPACK_IMPORTED_MODULE_8__["MedicareLevyService"] },
                { type: _pc_shared_services_pay_service__WEBPACK_IMPORTED_MODULE_9__["PayService"] },
                { type: _pc_shared_services_tax_data_service__WEBPACK_IMPORTED_MODULE_10__["TaxDataService"] }
            ]; };
            IncomeTaxCalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-income-tax-calculator',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-tax-calculator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/income-tax-calculator/income-tax-calculator.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-tax-calculator.component.scss */ "./src/app/features/income-tax-calculator/income-tax-calculator.component.scss")).default]
                })
            ], IncomeTaxCalculatorComponent);
            /***/ 
        }),
        /***/ "./src/app/features/income-tax-calculator/income-tax-calculator.module.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/features/income-tax-calculator/income-tax-calculator.module.ts ***!
          \********************************************************************************/
        /*! exports provided: IncomeTaxCalculatorModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTaxCalculatorModule", function () { return IncomeTaxCalculatorModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _income_tax_calculator_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income-tax-calculator-routing.module */ "./src/app/features/income-tax-calculator/income-tax-calculator-routing.module.ts");
            /* harmony import */ var _income_tax_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income-tax-calculator.component */ "./src/app/features/income-tax-calculator/income-tax-calculator.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _pc_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pc/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _income_tax_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./income-tax-panel.component */ "./src/app/features/income-tax-calculator/income-tax-panel.component.ts");
            var IncomeTaxCalculatorModule = /** @class */ (function () {
                function IncomeTaxCalculatorModule() {
                }
                return IncomeTaxCalculatorModule;
            }());
            IncomeTaxCalculatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _income_tax_calculator_routing_module__WEBPACK_IMPORTED_MODULE_3__["IncomeTaxCalculatorRoutingModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _pc_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    ],
                    declarations: [_income_tax_calculator_component__WEBPACK_IMPORTED_MODULE_4__["IncomeTaxCalculatorComponent"], _income_tax_panel_component__WEBPACK_IMPORTED_MODULE_7__["IncomeTaxPanelComponent"]],
                })
            ], IncomeTaxCalculatorModule);
            /***/ 
        }),
        /***/ "./src/app/features/income-tax-calculator/income-tax-panel.component.scss": 
        /*!********************************************************************************!*\
          !*** ./src/app/features/income-tax-calculator/income-tax-panel.component.scss ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  flex-grow: 1;\n}\n\n.panel {\n  padding: 20px;\n  text-align: left;\n}\n\nh2 {\n  font-weight: normal;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\n.information {\n  font-size: 1.6rem;\n  padding-top: 0.6rem;\n}\n\n.title {\n  font-size: 1rem;\n}\n\n.value {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyYWx0YWwvU2l0ZXMvcGF5Y2FsL3NyYy9hcHAvZmVhdHVyZXMvaW5jb21lLXRheC1jYWxjdWxhdG9yL2luY29tZS10YXgtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2luY29tZS10YXgtY2FsY3VsYXRvci9pbmNvbWUtdGF4LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7QUNLRjs7QURIQTtFQUNFLGlCQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9pbmNvbWUtdGF4LWNhbGN1bGF0b3IvaW5jb21lLXRheC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnBhbmVsIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmluZm9ybWF0aW9uIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmctdG9wOiAwLjZyZW07XG59XG4udGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG4udmFsdWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiIsIjpob3N0IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ucGFuZWwge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluZm9ybWF0aW9uIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmctdG9wOiAwLjZyZW07XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/features/income-tax-calculator/income-tax-panel.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/features/income-tax-calculator/income-tax-panel.component.ts ***!
          \******************************************************************************/
        /*! exports provided: IncomeTaxPanelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTaxPanelComponent", function () { return IncomeTaxPanelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var IncomeTaxPanelComponent = /** @class */ (function () {
                function IncomeTaxPanelComponent() {
                }
                return IncomeTaxPanelComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], IncomeTaxPanelComponent.prototype, "title", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], IncomeTaxPanelComponent.prototype, "pay", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], IncomeTaxPanelComponent.prototype, "taxableIncome", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], IncomeTaxPanelComponent.prototype, "superannuation", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], IncomeTaxPanelComponent.prototype, "totalTaxes", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], IncomeTaxPanelComponent.prototype, "incomeTax", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], IncomeTaxPanelComponent.prototype, "medicareLevy", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], IncomeTaxPanelComponent.prototype, "taxOffset", void 0);
            IncomeTaxPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'pc-income-tax-panel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-tax-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/income-tax-calculator/income-tax-panel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-tax-panel.component.scss */ "./src/app/features/income-tax-calculator/income-tax-panel.component.scss")).default]
                })
            ], IncomeTaxPanelComponent);
            /***/ 
        }),
        /***/ "./src/app/models/keys.ts": 
        /*!********************************!*\
          !*** ./src/app/models/keys.ts ***!
          \********************************/
        /*! exports provided: Keys */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function () { return Keys; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Keys;
            (function (Keys) {
                Keys["SPACE"] = " ";
                Keys["ARROW_DOWN"] = "ArrowDown";
                Keys["ARROW_UP"] = "ArrowUp";
                Keys["ARROW_LEFT"] = "ArrowLeft";
                Keys["ARROW_RIGHT"] = "ArrowRight";
            })(Keys || (Keys = {}));
            /***/ 
        }),
        /***/ "./src/app/models/residency-status.ts": 
        /*!********************************************!*\
          !*** ./src/app/models/residency-status.ts ***!
          \********************************************/
        /*! exports provided: ResidencyStatus */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidencyStatus", function () { return ResidencyStatus; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ResidencyStatus;
            (function (ResidencyStatus) {
                ResidencyStatus["RESIDENT"] = "Resident";
                ResidencyStatus["NON_RESIDENT"] = "Non Resident";
                ResidencyStatus["WORKING_HOLIDAY"] = "Working Holiday";
            })(ResidencyStatus || (ResidencyStatus = {}));
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/checkbox/checkbox.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/inputs/checkbox/checkbox.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  position: relative;\n}\n.wrapper input {\n  height: 30px;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  width: 30px;\n}\n.wrapper input + label::before {\n  border: 2px solid;\n  content: \"\";\n  height: 40px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n  background: blue;\n}\n.wrapper input + label::after {\n  content: \"\";\n  border: 4px solid;\n  border-left: 0;\n  border-top: 0;\n  height: 20px;\n  left: 14px;\n  opacity: 0;\n  position: absolute;\n  top: 6px;\n  transform: rotate(45deg);\n  transition: opacity 0.2s ease-in-out;\n  width: 12px;\n  color: white;\n}\n.wrapper input:checked + label::after {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyYWx0YWwvU2l0ZXMvcGF5Y2FsL3NyYy9hcHAvc2hhcmVkL2lucHV0cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2lucHV0cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDRUo7QURESTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDR047QURESTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR047QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbnB1dHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaW5wdXQge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgICYgKyBsYWJlbDo6YmVmb3JlIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgIH1cbiAgICAmICsgbGFiZWw6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYm9yZGVyOiA0cHggc29saWQ7XG4gICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBsZWZ0OiAxNHB4O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNnB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgd2lkdGg6IDEycHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi53cmFwcGVyIGlucHV0OmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuIiwiLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud3JhcHBlciBpbnB1dCB7XG4gIGhlaWdodDogMzBweDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMzBweDtcbn1cbi53cmFwcGVyIGlucHV0ICsgbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbn1cbi53cmFwcGVyIGlucHV0ICsgbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiA0cHggc29saWQ7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItdG9wOiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxlZnQ6IDE0cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud3JhcHBlciBpbnB1dDpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/checkbox/checkbox.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/inputs/checkbox/checkbox.component.ts ***!
          \**************************************************************/
        /*! exports provided: CheckboxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () { return CheckboxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CheckboxComponent = /** @class */ (function () {
                function CheckboxComponent() {
                }
                return CheckboxComponent;
            }());
            CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shared-checkbox',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/checkbox/checkbox.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/shared/inputs/checkbox/checkbox.component.scss")).default]
                })
            ], CheckboxComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/currency/currency.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/inputs/currency/currency.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input {\n  color: #fb3c4c;\n  font-size: 2rem;\n  border: none;\n  padding: 0 0 14px;\n  border-bottom: 2px solid #ddd;\n  background: white;\n  font-weight: bold;\n  transition: 0.2s border-color;\n}\ninput:focus {\n  outline: none;\n  border-color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyYWx0YWwvU2l0ZXMvcGF5Y2FsL3NyYy9hcHAvc2hhcmVkL2lucHV0cy9jdXJyZW5jeS9jdXJyZW5jeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2lucHV0cy9jdXJyZW5jeS9jdXJyZW5jeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUVBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaW5wdXRzL2N1cnJlbmN5L2N1cnJlbmN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xuICBjb2xvcjogI2ZiM2M0YztcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMCAxNHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2l0aW9uOiAwLjJzIGJvcmRlci1jb2xvcjtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAvLyBvdXRsaW5lOiAjM2E0NzRlIGRhc2hlZCAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTk5O1xuICB9XG59XG4iLCJpbnB1dCB7XG4gIGNvbG9yOiAjZmIzYzRjO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCAwIDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IDAuMnMgYm9yZGVyLWNvbG9yO1xufVxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICM5OTk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/currency/currency.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/inputs/currency/currency.component.ts ***!
          \**************************************************************/
        /*! exports provided: CurrencyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function () { return CurrencyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CurrencyComponent = /** @class */ (function () {
                function CurrencyComponent() {
                    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.showDisplay = true;
                }
                CurrencyComponent.prototype.setValue = function (value) {
                    var _this = this;
                    var el = this.input.nativeElement;
                    var stripped = value.toString().replace(/[^0-9\.]/g, '');
                    var parsed = parseFloat(stripped);
                    if (parsed === this.value) {
                        this.forceRedraw(parsed);
                    }
                    var selectionStart = this.input.nativeElement.selectionStart;
                    var reversedSelectionStart = el.value.length - selectionStart;
                    if (el.value.indexOf('.') < selectionStart) {
                        reversedSelectionStart = reversedSelectionStart - 1;
                    }
                    if (parsed !== 0) {
                        this.valueChange.emit(parsed);
                    }
                    setTimeout(function () {
                        _this.input.nativeElement.focus();
                        _this.input.nativeElement.setSelectionRange(el.value.length - reversedSelectionStart, el.value.length - reversedSelectionStart);
                    }, 0);
                };
                CurrencyComponent.prototype.forceRedraw = function (value) {
                    var _this = this;
                    this.value = 0;
                    setTimeout(function () {
                        _this.value = value;
                    }, 0);
                };
                return CurrencyComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CurrencyComponent.prototype, "value", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], CurrencyComponent.prototype, "valueChange", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: true })
            ], CurrencyComponent.prototype, "input", void 0);
            CurrencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shared-currency',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./currency.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/currency/currency.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./currency.component.scss */ "./src/app/shared/inputs/currency/currency.component.scss")).default]
                })
            ], CurrencyComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/dropdown/dropdown.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/inputs/dropdown/dropdown.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".dropdown {\n  position: relative;\n  display: inline-block;\n  font-family: \"Lato\", sans-serif;\n  color: #212529;\n  font-size: 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 350px;\n}\n\n.label {\n  color: #999;\n  font-size: 0.9rem;\n}\n\n[role=button] {\n  border: 1px solid white;\n  padding: 0 15px;\n  line-height: 20px;\n  width: 350px;\n  transition: border-color 0.15s linear;\n}\n\n[role=button] > span {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 15px 0;\n  border-bottom: 1px solid #999;\n}\n\n.expanded [role=button] > span {\n  border-color: #3397d3;\n}\n\n.selected [role=button] > span {\n  padding: 5px 0;\n}\n\n[role=button] > span span {\n  display: inline-block;\n}\n\n[role=button] > span svg {\n  align-self: center;\n}\n\n.expanded [role=button] {\n  border-color: #ccc;\n  border-bottom: none;\n}\n\nli {\n  list-style: none;\n}\n\nul {\n  padding-left: 0;\n}\n\n[role=list] {\n  position: absolute;\n  background: white;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-top: none;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.2s linear;\n}\n\n[role=list][aria-expanded=true] {\n  visibility: visible;\n  opacity: 1;\n}\n\n.list-item {\n  padding: 15px 0;\n  margin: 0 15px;\n  border-bottom: 1px solid #ccc;\n  color: #999;\n}\n\n.list-item:last-child {\n  border-bottom: none;\n}\n\n.list-item.selected {\n  color: black;\n  font-weight: bold;\n}\n\ni.caret {\n  border: solid #999;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 4px;\n  align-self: center;\n  transition: all 0.2s;\n}\n\ni.caret.up {\n  transform: rotate(-135deg);\n  border-color: #3397d3;\n}\n\ni.caret.down {\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyYWx0YWwvU2l0ZXMvcGF5Y2FsL3NyYy9hcHAvc2hhcmVkL2lucHV0cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9vbWFyYWx0YWwvU2l0ZXMvcGF5Y2FsL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL29tYXJhbHRhbC9TaXRlcy9wYXljYWwvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2lucHV0cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkNKaUI7RURLakIsY0VXUztFRlZULGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUdBRjs7QUhFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBR0NGOztBSENBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUdFRjs7QUhERTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUdHSjs7QUhESTtFQUNFLHFCQUFBO0FHR047O0FIREk7RUFDRSxjQUFBO0FHR047O0FIREk7RUFDRSxxQkFBQTtBR0dOOztBSERJO0VBQ0Usa0JBQUE7QUdHTjs7QUhDRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUdDSjs7QUhHQTtFQUNFLGdCQUFBO0FHQUY7O0FIR0E7RUFDRSxlQUFBO0FHQUY7O0FIR0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtBR0FGOztBSENFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FHQ0o7O0FIR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBR0FGOztBSENFO0VBQ0UsbUJBQUE7QUdDSjs7QUhDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBR0NKOztBSEdBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUdBRjs7QUhFRTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUdBSjs7QUhHRTtFQUNFLHdCQUFBO0FHREoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaW5wdXRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWxhdG87XG4gIGNvbG9yOiAkZ3JheS05MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdpZHRoOiAzNTBweDtcbn1cbi5sYWJlbCB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbltyb2xlPSdidXR0b24nXSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBsaW5lYXI7XG4gID4gc3BhbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xuICAgIC8vIHRyYW5zaXRpb246IHBhZGRpbmcgMC4ycztcbiAgICAuZXhwYW5kZWQgJiB7XG4gICAgICBib3JkZXItY29sb3I6ICMzMzk3ZDM7XG4gICAgfVxuICAgIC5zZWxlY3RlZCAmIHtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuZXhwYW5kZWQgJiB7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG51bCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuW3JvbGU9J2xpc3QnXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItdG9wOiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gICZbYXJpYS1leHBhbmRlZD0ndHJ1ZSddIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmxpc3QtaXRlbSB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBjb2xvcjogIzk5OTtcbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG4gICYuc2VsZWN0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG5pLmNhcmV0IHtcbiAgYm9yZGVyOiBzb2xpZCAjOTk5O1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAmLnVwIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICBib3JkZXItY29sb3I6ICMzMzk3ZDM7XG4gIH1cblxuICAmLmRvd24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxufVxuIiwiJGZvbnQtZmFtaWx5LWxhdG86ICdMYXRvJywgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktbGF0bztcblxuQGltcG9ydCAnZnVuY3Rpb25zJztcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cblxuLy8gQ29sb3Igc3lzdGVtXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJGJsdWU6ICAgICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzI4YTc0NSAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMxN2EyYjggIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRjb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcbiAgICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcbiAgICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcbiAgICBcInBpbmtcIjogICAgICAgJHBpbmssXG4gICAgXCJyZWRcIjogICAgICAgICRyZWQsXG4gICAgXCJvcmFuZ2VcIjogICAgICRvcmFuZ2UsXG4gICAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcbiAgICBcInRlYWxcIjogICAgICAgJHRlYWwsXG4gICAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXG4gICAgXCJncmF5XCI6ICAgICAgICRncmF5LTYwMCxcbiAgICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXG4gICksXG4gICRjb2xvcnNcbik7XG5cbiRwcmltYXJ5OiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgKSxcbiAgJHRoZW1lLWNvbG9yc1xuKTtcblxuLy8gU2V0IGEgc3BlY2lmaWMganVtcCBwb2ludCBmb3IgcmVxdWVzdGluZyBjb2xvciBqdW1wc1xuJHRoZW1lLWNvbG9yLWludGVydmFsOiAgICAgIDglICFkZWZhdWx0O1xuXG4vLyBUaGUgeWlxIGxpZ2h0bmVzcyB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hlbiB0aGUgbGlnaHRuZXNzIG9mIGNvbG9yIGNoYW5nZXMgZnJvbSBcImRhcmtcIiB0byBcImxpZ2h0XCIuIEFjY2VwdGFibGUgdmFsdWVzIGFyZSBiZXR3ZWVuIDAgYW5kIDI1NS5cbiR5aXEtY29udHJhc3RlZC10aHJlc2hvbGQ6ICAxNTAgIWRlZmF1bHQ7XG5cbi8vIEN1c3RvbWl6ZSB0aGUgbGlnaHQgYW5kIGRhcmsgdGV4dCBjb2xvcnMgZm9yIHVzZSBpbiBvdXIgWUlRIGNvbG9yIGNvbnRyYXN0IGZ1bmN0aW9uLlxuJHlpcS10ZXh0LWRhcms6ICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiR5aXEtdGV4dC1saWdodDogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cblxuLy8gT3B0aW9uc1xuLy9cbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cblxuJGVuYWJsZS1jYXJldDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJvdW5kZWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6ICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmVmZXJzLXJlZHVjZWQtbW90aW9uLW1lZGlhLXF1ZXJ5OiAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQsIG5vIGxvbmdlciBhZmZlY3RzIGFueSBjb21waWxlZCBDU1NcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgIDM6ICRzcGFjZXIsXG4gICAgNDogKCRzcGFjZXIgKiAxLjUpLFxuICAgIDU6ICgkc3BhY2VyICogMylcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNpemVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAyNTogMjUlLFxuICAgIDUwOiA1MCUsXG4gICAgNzU6IDc1JSxcbiAgICAxMDA6IDEwMCUsXG4gICAgYXV0bzogYXV0b1xuICApLFxuICAkc2l6ZXNcbik7XG5cblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJGxpbmstY29sb3IsIDE1JSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XG4vLyBEYXJrZW4gcGVyY2VudGFnZSBmb3IgbGlua3Mgd2l0aCBgLnRleHQtKmAgY2xhc3MgKGUuZy4gYC50ZXh0LXN1Y2Nlc3NgKVxuJGVtcGhhc2l6ZWQtbGluay1ob3Zlci1kYXJrZW4tcGVyY2VudGFnZTogMTUlICFkZWZhdWx0O1xuXG4vLyBQYXJhZ3JhcGhzXG4vL1xuLy8gU3R5bGUgcCBlbGVtZW50LlxuXG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206ICAgMXJlbSAhZGVmYXVsdDtcblxuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vL1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcbkBpbmNsdWRlIF9hc3NlcnQtc3RhcnRzLWF0LXplcm8oJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5cblxuLy8gR3JpZCBjb250YWluZXJzXG4vL1xuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXG4gIHNtOiA1NDBweCxcbiAgbWQ6IDcyMHB4LFxuICBsZzogOTYwcHgsXG4gIHhsOiAxMTQwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRjb250YWluZXItbWF4LXdpZHRocywgXCIkY29udGFpbmVyLW1heC13aWR0aHNcIik7XG5cblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcblxuJHJvdW5kZWQtcGlsbDogICAgICAgICAgICAgICAgNTByZW0gIWRlZmF1bHQ7XG5cbiRib3gtc2hhZG93LXNtOiAgICAgICAgICAgICAgIDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG5cbiRjYXJldC13aWR0aDogICAgICAgICAgICAgICAgIC4zZW0gIWRlZmF1bHQ7XG4kY2FyZXQtdmVydGljYWwtYWxpZ246ICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG4kY2FyZXQtc3BhY2luZzogICAgICAgICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5IC4xNXMgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcblxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogam9pbihcbiAgKFxuICAgICgyMSA5KSxcbiAgICAoMTYgOSksXG4gICAgKDQgMyksXG4gICAgKDEgMSksXG4gICksXG4gICRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3Ncbik7XG5cbi8vIFR5cG9ncmFwaHlcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCIgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgICAgICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuODc1ICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogICAgICAgICBsaWdodGVyICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogICAgICAgICAgNDAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICAgNzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGRlcjogICAgICAgICAgYm9sZGVyICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtYmFzZTogICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG5cbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgIDEuMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS1zaXplOiAgICAgICAgICAgICAgIDZyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTItc2l6ZTogICAgICAgICAgICAgICA1LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTMtc2l6ZTogICAgICAgICAgICAgICA0LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTQtc2l6ZTogICAgICAgICAgICAgICAzLjVyZW0gIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5Mi13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5My13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5NC13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5LWxpbmUtaGVpZ2h0OiAgICAgICAgICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRsZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgODAlICFkZWZhdWx0O1xuXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLXNtYWxsLWZvbnQtc2l6ZTogICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuXG4kaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcblxuJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XG4kbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtYXJrLWJnOiAgICAgICAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XG5cbiRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItY29sb3I6ICAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG5cbiR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJnOiAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgJHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgICByZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xuXG4kdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJHRhYmxlLWJnLWxldmVsOiAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6ICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAgICAgICByZ2JhKCRjb21wb25lbnQtYWN0aXZlLWJnLCAuMjUpICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgMCAwIDAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAkbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAkbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGJ0bi1mb250LWZhbWlseTogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplOiAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodDogICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGJ0bi1wYWRkaW5nLXktc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodC1zbTogICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGJ0bi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodC1sZzogICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoJHdoaXRlLCAuMTUpLCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy13aWR0aDogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIC42NSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgIGluc2V0IDAgM3B4IDVweCByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDI1JSkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGlucHV0LXBsYWludGV4dC1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAqIDJ9KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXl9KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW19ICsgI3skaW5wdXQtcGFkZGluZy15IC8gMn0pICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfSArICN7JGlucHV0LWhlaWdodC1ib3JkZXJ9KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0LXNtICogMWVtfSArICN7JGlucHV0LWJ0bi1wYWRkaW5nLXktc20gKiAyfSArICN7JGlucHV0LWhlaWdodC1ib3JkZXJ9KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0LWxnICogMWVtfSArICN7JGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgKiAyfSArICN7JGlucHV0LWhlaWdodC1ib3JkZXJ9KSAhZGVmYXVsdDtcblxuJGlucHV0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2IDIuOTc0IDcuMjUgOCAyLjE5M3onLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNCclM2UlM2NwYXRoIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgZD0nTTAgMmg0Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzZSUzY2NpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogMS43NSAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAvIDIgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAgICAgICAgICBjYWxjKCN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplfSAtICN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKiA0fSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAgICAgICAgICAgJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNSclM2UlM2NwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmFja2dyb3VuZDogICAgICAgICAgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yIG5vLXJlcGVhdCByaWdodCAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZSAhZGVmYXVsdDsgLy8gVXNlZCBzbyB3ZSBjYW4gaGF2ZSBtdWx0aXBsZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIChlLmcuLCBhcnJvdyBhbmQgZmVlZGJhY2sgaWNvbilcblxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLXJpZ2h0OiBjYWxjKCgxZW0gKyAjezIgKiAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXl9KSAqIDMgLyA0ICsgI3skY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZ30pICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogICAgICBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6ICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogICAgICAgICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgMCAkY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICAgICAgICAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogICAgICAgICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxuJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLWhlaWdodDogICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbiRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcblxuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PSctMiAtMiA3IDcnJTNlJTNjcGF0aCBzdHJva2U9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgZD0nTTAgMGwzIDNtMC0zTDAgMycvJTNlJTNjY2lyY2xlIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3g9JzMnIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3k9JzMnIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3g9JzMnIGN5PSczJyByPScuNScvJTNlJTNjL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwidmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXG4gICAgKSxcbiAgICBcImludmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxuICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxuICAgICksXG4gICksXG4gICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG4pO1xuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG5cblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgLyAyICFkZWZhdWx0O1xuXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlJTNjcGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3BhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLW1pbi13aWR0aDogICAgICAgICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1zcGFjZXI6ICAgICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kZHJvcGRvd24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgY2FsYygjeyRkcm9wZG93bi1ib3JkZXItcmFkaXVzfSAtICN7JGRyb3Bkb3duLWJvcmRlci13aWR0aH0pICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgJG5hdi1kaXZpZGVyLW1hcmdpbi15ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgZGFya2VuKCRncmF5LTkwMCwgNSUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRncmF5LTMwMCAhZGVmYXVsdDtcblxuXG4vLyBKdW1ib3Ryb25cblxuJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gQ2FyZHNcblxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIGNhbGMoI3skY2FyZC1ib3JkZXItcmFkaXVzfSAtICN7JGNhcmQtYm9yZGVyLXdpZHRofSkgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyICFkZWZhdWx0O1xuJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xuXG4kY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xuXG5cbi8vIFRvb2x0aXBzXG5cbiR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcblxuLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHBvcG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgICAgICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcblxuJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpICFkZWZhdWx0O1xuXG5cbi8vIFRvYXN0c1xuXG4kdG9hc3QtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAzNTBweCAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4xKSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC43NXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBCYWRnZXNcblxuJGJhZGdlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgNzUlICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC40ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGJhZGdlLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uICFkZWZhdWx0O1xuJGJhZGdlLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcblxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgICAgICAgLjZlbSAhZGVmYXVsdDtcbi8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cbi8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cbiRiYWRnZS1waWxsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAgICAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gS2VlcCB0aGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICA4MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG5cbiRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XG4kbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGFsZXJ0LWJnLWxldmVsOiAgICAgICAgICAgICAgICAgICAgLTEwICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XG5cblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuXG4vLyBGaWd1cmVzXG5cbiRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcbiRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuXG4vLyBCcmVhZGNydW1ic1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cblxuLy8gQ2Fyb3VzZWxcblxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246ICAgICAgb3BhY2l0eSAuNnMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41LTIuNS0yLjUgMi41LTIuNS0xLjUtMS41eicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcbiRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXG5cblxuLy8gU3Bpbm5lcnNcblxuJHNwaW5uZXItd2lkdGg6ICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodDogICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgLjI1ZW0gIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XG5cblxuLy8gQ2xvc2VcblxuJGNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAwIDFweCAwICR3aGl0ZSAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XG5cbiRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4ka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xuXG5cbi8vIFV0aWxpdGllc1xuXG4kZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XG4kcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreSAhZGVmYXVsdDtcblxuXG4vLyBQcmludGluZ1xuXG4kcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcbiRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XG4iLCIuZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzIxMjUyOTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG4ubGFiZWwge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbltyb2xlPWJ1dHRvbl0ge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2lkdGg6IDM1MHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgbGluZWFyO1xufVxuW3JvbGU9YnV0dG9uXSA+IHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xufVxuLmV4cGFuZGVkIFtyb2xlPWJ1dHRvbl0gPiBzcGFuIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzM5N2QzO1xufVxuLnNlbGVjdGVkIFtyb2xlPWJ1dHRvbl0gPiBzcGFuIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5bcm9sZT1idXR0b25dID4gc3BhbiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuW3JvbGU9YnV0dG9uXSA+IHNwYW4gc3ZnIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmV4cGFuZGVkIFtyb2xlPWJ1dHRvbl0ge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxudWwge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbltyb2xlPWxpc3RdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cbltyb2xlPWxpc3RdW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBtYXJnaW46IDAgMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIGNvbG9yOiAjOTk5O1xufVxuLmxpc3QtaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5saXN0LWl0ZW0uc2VsZWN0ZWQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pLmNhcmV0IHtcbiAgYm9yZGVyOiBzb2xpZCAjOTk5O1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbmkuY2FyZXQudXAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgYm9yZGVyLWNvbG9yOiAjMzM5N2QzO1xufVxuaS5jYXJldC5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/dropdown/dropdown.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/inputs/dropdown/dropdown.component.ts ***!
          \**************************************************************/
        /*! exports provided: DropdownComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () { return DropdownComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var id = 0;
            var DropdownComponent = /** @class */ (function () {
                function DropdownComponent() {
                    this.label = 'Income year';
                    this.expanded = false;
                    this.data = [2017, 2018, 2019];
                    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.id = ++id;
                }
                DropdownComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return (_this.expanded = false); }))
                        .subscribe();
                };
                DropdownComponent.prototype.toggleList = function () {
                    this.expanded = !this.expanded;
                };
                DropdownComponent.prototype.setectItem = function (item) {
                    this.selected = item;
                    this.selectionChange.emit(item);
                    this.expanded = false;
                };
                DropdownComponent.prototype.onLabelKeydown = function () { };
                return DropdownComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DropdownComponent.prototype, "label", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DropdownComponent.prototype, "expanded", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DropdownComponent.prototype, "data", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DropdownComponent.prototype, "selectionChange", void 0);
            DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shared-dropdown',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/dropdown/dropdown.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/shared/inputs/dropdown/dropdown.component.scss")).default]
                })
            ], DropdownComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/label/label.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/inputs/label/label.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("label {\n  font-family: \"Lato\", sans-serif;\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyYWx0YWwvU2l0ZXMvcGF5Y2FsL3NyYy9hcHAvc2hhcmVkL2lucHV0cy9sYWJlbC9sYWJlbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9vbWFyYWx0YWwvU2l0ZXMvcGF5Y2FsL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL29tYXJhbHRhbC9TaXRlcy9wYXljYWwvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2lucHV0cy9sYWJlbC9sYWJlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLCtCQ05pQjtFRE9qQixpQkFMc0I7RUFNdEIsY0VLUztBQ1RYIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2lucHV0cy9sYWJlbC9sYWJlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbiRpbnB1dC1sYWJlbC1mb250LXNpemU6IDAuOXJlbTtcbiR0b2dnbGUtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1sYXRvO1xuXG5sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiAkdG9nZ2xlLWZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6ICRpbnB1dC1sYWJlbC1mb250LXNpemU7XG4gIGNvbG9yOiAkZ3JheS02MDA7XG59XG4iLCIkZm9udC1mYW1pbHktbGF0bzogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1sYXRvO1xuXG5AaW1wb3J0ICdmdW5jdGlvbnMnO1xuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG4iLCIvLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG4vLyBDb2xvciBzeXN0ZW1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRncmF5czogbWFwLW1lcmdlKFxuICAoXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcbiAgKSxcbiAgJGdyYXlzXG4pO1xuXG4kYmx1ZTogICAgIzAwN2JmZiAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjZGMzNTQ1ICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI2ZmYzEwNyAhZGVmYXVsdDtcbiRncmVlbjogICAjMjhhNzQ1ICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzE3YTJiOCAhZGVmYXVsdDtcblxuJGNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJibHVlXCI6ICAgICAgICRibHVlLFxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxuICAgIFwicGlua1wiOiAgICAgICAkcGluayxcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcbiAgICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcbiAgICBcImN5YW5cIjogICAgICAgJGN5YW4sXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxuICAgIFwiZ3JheS1kYXJrXCI6ICAkZ3JheS04MDBcbiAgKSxcbiAgJGNvbG9yc1xuKTtcblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xuICApLFxuICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyBTZXQgYSBzcGVjaWZpYyBqdW1wIHBvaW50IGZvciByZXF1ZXN0aW5nIGNvbG9yIGp1bXBzXG4kdGhlbWUtY29sb3ItaW50ZXJ2YWw6ICAgICAgOCUgIWRlZmF1bHQ7XG5cbi8vIFRoZSB5aXEgbGlnaHRuZXNzIHZhbHVlIHRoYXQgZGV0ZXJtaW5lcyB3aGVuIHRoZSBsaWdodG5lc3Mgb2YgY29sb3IgY2hhbmdlcyBmcm9tIFwiZGFya1wiIHRvIFwibGlnaHRcIi4gQWNjZXB0YWJsZSB2YWx1ZXMgYXJlIGJldHdlZW4gMCBhbmQgMjU1LlxuJHlpcS1jb250cmFzdGVkLXRocmVzaG9sZDogIDE1MCAhZGVmYXVsdDtcblxuLy8gQ3VzdG9taXplIHRoZSBsaWdodCBhbmQgZGFyayB0ZXh0IGNvbG9ycyBmb3IgdXNlIGluIG91ciBZSVEgY29sb3IgY29udHJhc3QgZnVuY3Rpb24uXG4keWlxLXRleHQtZGFyazogICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHlpcS10ZXh0LWxpZ2h0OiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByZWZlcnMtcmVkdWNlZC1tb3Rpb24tbWVkaWEtcXVlcnk6ICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtaG92ZXItbWVkaWEtcXVlcnk6ICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCwgbm8gbG9uZ2VyIGFmZmVjdHMgYW55IGNvbXBpbGVkIENTU1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJpbnQtc3R5bGVzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yZXNwb25zaXZlLWZvbnQtc2l6ZXM6ICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuXG4vLyBTcGFjaW5nXG4vL1xuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cblxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAoXG4gICAgMDogMCxcbiAgICAxOiAoJHNwYWNlciAqIC4yNSksXG4gICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgMzogJHNwYWNlcixcbiAgICA0OiAoJHNwYWNlciAqIDEuNSksXG4gICAgNTogKCRzcGFjZXIgKiAzKVxuICApLFxuICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDI1OiAyNSUsXG4gICAgNTA6IDUwJSxcbiAgICA3NTogNzUlLFxuICAgIDEwMDogMTAwJSxcbiAgICBhdXRvOiBhdXRvXG4gICksXG4gICRzaXplc1xuKTtcblxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcbi8vIERhcmtlbiBwZXJjZW50YWdlIGZvciBsaW5rcyB3aXRoIGAudGV4dC0qYCBjbGFzcyAoZS5nLiBgLnRleHQtc3VjY2Vzc2ApXG4kZW1waGFzaXplZC1saW5rLWhvdmVyLWRhcmtlbi1wZXJjZW50YWdlOiAxNSUgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuXG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuXG4kcm91bmRlZC1waWxsOiAgICAgICAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcblxuJGJveC1zaGFkb3ctc206ICAgICAgICAgICAgICAgMCAuMTI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogICAgICAgICAgICAgICAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcblxuJGNhcmV0LXdpZHRoOiAgICAgICAgICAgICAgICAgLjNlbSAhZGVmYXVsdDtcbiRjYXJldC12ZXJ0aWNhbC1hbGlnbjogICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcbiRjYXJldC1zcGFjaW5nOiAgICAgICAgICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogICAgICAgICBoZWlnaHQgLjM1cyBlYXNlICFkZWZhdWx0O1xuXG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiBqb2luKFxuICAoXG4gICAgKDIxIDkpLFxuICAgICgxNiA5KSxcbiAgICAoNCAzKSxcbiAgICAoMSAxKSxcbiAgKSxcbiAgJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvc1xuKTtcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC44NzUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXNpemU6ICAgICAgICAgICAgICAgNnJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5Mi1zaXplOiAgICAgICAgICAgICAgIDUuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgIDQuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgIDMuNXJlbSAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXk0LXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICAgICAgICAgJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kbGVhZC1mb250LXNpemU6ICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGxlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICA4MCUgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG5cbiRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kaHItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xuXG4kZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGtiZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAtLjFyZW0gMCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcbiRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4kbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcblxuJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4zcmVtICFkZWZhdWx0O1xuXG4kdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcblxuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgcmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICAkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kdGFibGUtYmctbGV2ZWw6ICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItbGV2ZWw6ICAgICAgICAgIC02ICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsIC4yNSkgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAwIDAgMCAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICAgICRsaW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogICAgICAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICAgICRsaW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYnRuLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgkd2hpdGUsIC4xNSksIDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjY1ICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgaW5zZXQgMCAzcHggNXB4IHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kYnRuLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybXNcblxuJGxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1iZzogICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMjUlKSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAxZW19ICsgI3skaW5wdXQtcGFkZGluZy15ICogMn0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtfSArICN7JGlucHV0LXBhZGRpbmcteX0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgLyAyfSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAqIDJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW19ICsgI3skaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAqIDJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW19ICsgI3skaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAqIDJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuXG4kaW5wdXQtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtZ3V0dGVyOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teTogICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teDogICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLXg6ICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5saW5lLWlucHV0LW1hcmdpbi14OiAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1ncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiAgcmdiYSh0aGVtZS1jb2xvcihcInByaW1hcnlcIiksIC41KSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm94LXNoYWRvdzogICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3JkZXItY29sb3I6ICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJvcmRlci1jb2xvcjogICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9JyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjYgMi45NzQgNy4yNSA4IDIuMTkzeicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA0JyUzZSUzY3BhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNlJTNjY2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplIC8gMiAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIGNhbGMoI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemV9IC0gI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aCAqIDR9KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICAgICAgICAgICAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAgIDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA1JyUzZSUzY3BhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiAgICAgICAgICAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3Igbm8tcmVwZWF0IHJpZ2h0ICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxuXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6IGNhbGMoKDFlbSArICN7MiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteX0pICogMyAvIDQgKyAjeyRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nfSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiAgICAgIGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogICAgICAgICAgaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAgICAgICAgICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAwICRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICAgICAgICAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogICAgICAgICAgICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogICAgICAgICAgICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXG4kY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJveC1zaGFkb3c6ICAgICAgICAgICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkY3VzdG9tLWZpbGUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtdGV4dDogKFxuICBlbjogXCJCcm93c2VcIlxuKSAhZGVmYXVsdDtcblxuXG4vLyBGb3JtIHZhbGlkYXRpb25cblxuJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xuXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHZpZXdCb3g9Jy0yIC0yIDcgNyclM2UlM2NwYXRoIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBkPSdNMCAwbDMgM20wLTNMMCAzJy8lM2UlM2NjaXJjbGUgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeD0nMycgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeT0nMycgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeD0nMycgY3k9JzMnIHI9Jy41Jy8lM2UlM2Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJ2YWxpZFwiOiAoXG4gICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxuICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWRcbiAgICApLFxuICAgIFwiaW52YWxpZFwiOiAoXG4gICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkXG4gICAgKSxcbiAgKSxcbiAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcbik7XG5cbi8vIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cblxuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuXG4vLyBOYXZzXG5cbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LWRpdmlkZXItY29sb3I6ICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kbmF2LWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcblxuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xuJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAvIDIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiAgcmdiYSgkd2hpdGUsIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlJTNjcGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4kZHJvcGRvd24tbWluLXdpZHRoOiAgICAgICAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBjYWxjKCN7JGRyb3Bkb3duLWJvcmRlci1yYWRpdXN9IC0gI3skZHJvcGRvd24tYm9yZGVyLXdpZHRofSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogICAgICAgICAkbmF2LWRpdmlkZXItbWFyZ2luLXkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJGdyYXktOTAwLCA1JSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgMS4yNSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRwYWdpbmF0aW9uLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG5cbi8vIEp1bWJvdHJvblxuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBDYXJkc1xuXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgY2FsYygjeyRjYXJkLWJvcmRlci1yYWRpdXN9IC0gI3skY2FyZC1ib3JkZXItd2lkdGh9KSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XG4kY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XG5cbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XG5cblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG4vLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gVG9hc3RzXG5cbiR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjEpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMDUpICFkZWZhdWx0O1xuXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICA3NSUgIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNWVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjRlbSAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kYmFkZ2UtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAkYnRuLXRyYW5zaXRpb24gIWRlZmF1bHQ7XG4kYmFkZ2UtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNmVtICFkZWZhdWx0O1xuLy8gVXNlIGEgaGlnaGVyIHRoYW4gbm9ybWFsIHZhbHVlIHRvIGVuc3VyZSBjb21wbGV0ZWx5IHJvdW5kZWQgZWRnZXMgd2hlblxuLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxuJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtY29sb3I6ICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG5cbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcbiRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xuXG5cbi8vIEFsZXJ0c1xuLy9cbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYWxlcnQtYmctbGV2ZWw6ICAgICAgICAgICAgICAgICAgICAtMTAgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLWxldmVsOiAgICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcbiRhbGVydC1jb2xvci1sZXZlbDogICAgICAgICAgICAgICAgIDYgIWRlZmF1bHQ7XG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcblxuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWNvbG9yOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIEltYWdlIHRodW1ibmFpbHNcblxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG5cbi8vIEZpZ3VyZXNcblxuJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgOTAlICFkZWZhdWx0O1xuJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG5cbi8vIEJyZWFkY3J1bWJzXG5cbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBDYXJvdXNlbFxuXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk6ICAgICAuOSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDIwcHggIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjUtMi41LTIuNSAyLjUtMi41LTEuNS0xLjV6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZD0nTTIuNzUgMGwtMS41IDEuNSAyLjUgMi41LTIuNSAyLjUgMS41IDEuNSA0LTQtNC00eicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xuJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcblxuXG4vLyBTcGlubmVyc1xuXG4kc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAuMjVlbSAhZGVmYXVsdDtcblxuJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcblxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xuXG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcblxuJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4ka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgICAgICAgMzQwcHggIWRlZmF1bHQ7XG5cblxuLy8gVXRpbGl0aWVzXG5cbiRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LCBpbmxpbmUtZmxleCAhZGVmYXVsdDtcbiRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiAhZGVmYXVsdDtcbiRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xuXG5cbi8vIFByaW50aW5nXG5cbiRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xuJHByaW50LWJvZHktbWluLXdpZHRoOiAgICAgICAgICAgICAgbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSAhZGVmYXVsdDtcbiIsImxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/label/label.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/shared/inputs/label/label.component.ts ***!
          \********************************************************/
        /*! exports provided: LabelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponent", function () { return LabelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LabelComponent = /** @class */ (function () {
                function LabelComponent() {
                }
                return LabelComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LabelComponent.prototype, "label", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LabelComponent.prototype, "id", void 0);
            LabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shared-label',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./label.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/label/label.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./label.component.scss */ "./src/app/shared/inputs/label/label.component.scss")).default]
                })
            ], LabelComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/radio/radio.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/inputs/radio/radio.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("[role=radiogroup] {\n  display: inline-block;\n  padding: 3px;\n  border-radius: 30px;\n  border: solid 1px #999;\n  background: #efefef;\n}\n\n[role=radio] {\n  display: inline-block;\n  padding: 5px 15px;\n  border-radius: 20px;\n  transition: 0.2s all;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: #666;\n}\n\n[role=radio]:focus {\n  color: black;\n}\n\n[role=radio][aria-checked=true] {\n  background-color: #41c3f7;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyYWx0YWwvU2l0ZXMvcGF5Y2FsL3NyYy9hcHAvc2hhcmVkL2lucHV0cy9yYWRpby9yYWRpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2lucHV0cy9yYWRpby9yYWRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFdBQUE7QUNFRjs7QURERTtFQUNFLFlBQUE7QUNHSjs7QURERTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2lucHV0cy9yYWRpby9yYWRpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltyb2xlPSdyYWRpb2dyb3VwJ10ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzk5OTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cbltyb2xlPSdyYWRpbyddIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjb2xvcjogIzY2NjtcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gICZbYXJpYS1jaGVja2VkPSd0cnVlJ10ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MWMzZjc7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG4iLCJbcm9sZT1yYWRpb2dyb3VwXSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjOTk5O1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG5bcm9sZT1yYWRpb10ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGNvbG9yOiAjNjY2O1xufVxuW3JvbGU9cmFkaW9dOmZvY3VzIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuW3JvbGU9cmFkaW9dW2FyaWEtY2hlY2tlZD10cnVlXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MWMzZjc7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/radio/radio.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/shared/inputs/radio/radio.component.ts ***!
          \********************************************************/
        /*! exports provided: RadioComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function () { return RadioComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _pc_models_residency_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pc/models/residency-status */ "./src/app/models/residency-status.ts");
            /* harmony import */ var _pc_models_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pc/models/keys */ "./src/app/models/keys.ts");
            var RadioComponent = /** @class */ (function () {
                function RadioComponent() {
                    this.changeSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.data = [
                        _pc_models_residency_status__WEBPACK_IMPORTED_MODULE_2__["ResidencyStatus"].RESIDENT,
                        _pc_models_residency_status__WEBPACK_IMPORTED_MODULE_2__["ResidencyStatus"].NON_RESIDENT,
                        _pc_models_residency_status__WEBPACK_IMPORTED_MODULE_2__["ResidencyStatus"].WORKING_HOLIDAY,
                    ];
                }
                Object.defineProperty(RadioComponent.prototype, "focusableItem", {
                    get: function () {
                        return this.checkedItem !== undefined ? this.checkedItem : this.data[0];
                    },
                    enumerable: true,
                    configurable: true
                });
                RadioComponent.prototype.check = function (item) {
                    this.changeSelection.emit(item);
                    this.checkedItem = item;
                };
                RadioComponent.prototype.focus = function (idx) {
                    this.radios._results[idx].nativeElement.focus();
                };
                RadioComponent.prototype.onKeydown = function (item, event) {
                    var idx;
                    var key = event.key;
                    if (key === _pc_models_keys__WEBPACK_IMPORTED_MODULE_3__["Keys"].SPACE) {
                        idx = this.data.indexOf(item);
                        this.check(item);
                        event.preventDefault();
                        return;
                    }
                    if ([_pc_models_keys__WEBPACK_IMPORTED_MODULE_3__["Keys"].ARROW_DOWN, _pc_models_keys__WEBPACK_IMPORTED_MODULE_3__["Keys"].ARROW_RIGHT].includes(key)) {
                        idx = (this.data.indexOf(item) + 1) % this.data.length;
                        this.check(this.data[idx]);
                        this.focus(idx);
                        event.preventDefault();
                        return;
                    }
                    if ([_pc_models_keys__WEBPACK_IMPORTED_MODULE_3__["Keys"].ARROW_UP, _pc_models_keys__WEBPACK_IMPORTED_MODULE_3__["Keys"].ARROW_LEFT].includes(key)) {
                        idx =
                            this.data.indexOf(item) === 0
                                ? this.data.length - 1
                                : (this.data.indexOf(item) - 1) % this.data.length;
                        this.check(this.data[idx]);
                        this.focus(idx);
                        event.preventDefault();
                        return;
                    }
                };
                return RadioComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('radio')
            ], RadioComponent.prototype, "radios", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], RadioComponent.prototype, "checkedItem", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], RadioComponent.prototype, "changeSelection", void 0);
            RadioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shared-radio',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./radio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/radio/radio.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./radio.component.scss */ "./src/app/shared/inputs/radio/radio.component.scss")).default]
                })
            ], RadioComponent);
            // var KEYCODE = {
            //   DOWN: 40,
            //   LEFT: 37,
            //   RIGHT: 39,
            //   SPACE: 32,
            //   UP: 38,
            // };
            // window.addEventListener('load', function() {
            //   var radiobuttons = document.querySelectorAll('[role=radio]');
            //   for (var i = 0; i < radiobuttons.length; i++) {
            //     var rb = radiobuttons[i];
            //     console.log(rb.tagName + ' ' + rb.id);
            //     rb.addEventListener('click', clickRadioGroup);
            //     rb.addEventListener('keydown', keyDownRadioGroup);
            //     rb.addEventListener('focus', focusRadioButton);
            //     rb.addEventListener('blur', blurRadioButton);
            //   }
            // });
            // /*
            //  * @function firstRadioButton
            //  *
            //  * @desc Returns the first radio button
            //  *
            //  * @param   {Object}  event  =  Standard W3C event object
            //  */
            // function firstRadioButton(node) {
            //   var first = node.parentNode.firstChild;
            //   while (first) {
            //     if (first.nodeType === Node.ELEMENT_NODE) {
            //       if (first.getAttribute('role') === 'radio') return first;
            //     }
            //     first = first.nextSibling;
            //   }
            //   return null;
            // }
            // /*
            //  * @function lastRadioButton
            //  *
            //  * @desc Returns the last radio button
            //  *
            //  * @param   {Object}  event  =  Standard W3C event object
            //  */
            // function lastRadioButton(node) {
            //   var last = node.parentNode.lastChild;
            //   while (last) {
            //     if (last.nodeType === Node.ELEMENT_NODE) {
            //       if (last.getAttribute('role') === 'radio') return last;
            //     }
            //     last = last.previousSibling;
            //   }
            //   return last;
            // }
            // /*
            //  * @function nextRadioButton
            //  *
            //  * @desc Returns the next radio button
            //  *
            //  * @param   {Object}  event  =  Standard W3C event object
            //  */
            // function nextRadioButton(node) {
            //   var next = node.nextSibling;
            //   while (next) {
            //     if (next.nodeType === Node.ELEMENT_NODE) {
            //       if (next.getAttribute('role') === 'radio') return next;
            //     }
            //     next = next.nextSibling;
            //   }
            //   return null;
            // }
            // /*
            //  * @function previousRadioButton
            //  *
            //  * @desc Returns the previous radio button
            //  *
            //  * @param   {Object}  event  =  Standard W3C event object
            //  */
            // function previousRadioButton(node) {
            //   var prev = node.previousSibling;
            //   while (prev) {
            //     if (prev.nodeType === Node.ELEMENT_NODE) {
            //       if (prev.getAttribute('role') === 'radio') return prev;
            //     }
            //     prev = prev.previousSibling;
            //   }
            //   return null;
            // }
            // /*
            //  * @function getImage
            //  *
            //  * @desc Gets the image for radio box
            //  *
            //  * @param   {Object}  event  =  Standard W3C event object
            //  */
            // function getImage(node) {
            //   var child = node.firstChild;
            //   while (child) {
            //     if (child.nodeType === Node.ELEMENT_NODE) {
            //       if (child.tagName === 'IMG') return child;
            //     }
            //     child = child.nextSibling;
            //   }
            //   return null;
            // }
            // /*
            //  * @function setRadioButton
            //  *
            //  * @desc Toogles the state of a radio button
            //  *
            //  * @param   {Object}  event  -  Standard W3C event object
            //  *
            //  */
            // function setRadioButton(node, state) {
            //   var image = getImage(node);
            //   if (state == 'true') {
            //     node.setAttribute('aria-checked', 'true');
            //     node.tabIndex = 0;
            //     node.focus();
            //   } else {
            //     node.setAttribute('aria-checked', 'false');
            //     node.tabIndex = -1;
            //   }
            // }
            // /*
            //  * @function clickRadioGroup
            //  *
            //  * @desc
            //  *
            //  * @param   {Object}  node  -  DOM node of updated group radio buttons
            //  */
            // function clickRadioGroup(event) {
            //   var type = event.type;
            //   if (type === 'click') {
            //     // If either enter or space is pressed, execute the funtion
            //     var node = event.currentTarget;
            //     var radioButton = firstRadioButton(node);
            //     while (radioButton) {
            //       setRadioButton(radioButton, 'false');
            //       radioButton = nextRadioButton(radioButton);
            //     }
            //     setRadioButton(node, 'true');
            //     event.preventDefault();
            //     event.stopPropagation();
            //   }
            // }
            // /*
            //  * @function keyDownRadioGroup
            //  *
            //  * @desc
            //  *
            //  * @param   {Object}   node  -  DOM node of updated group radio buttons
            //  */
            // function keyDownRadioGroup(event) {
            //   var type = event.type;
            //   var next = false;
            //   if (type === 'keydown') {
            //     var node = event.currentTarget;
            //     switch (event.keyCode) {
            //       case KEYCODE.DOWN:
            //       case KEYCODE.RIGHT:
            //         var next = nextRadioButton(node);
            //         if (!next) next = firstRadioButton(node); //if node is the last node, node cycles to first.
            //         break;
            //       case KEYCODE.UP:
            //       case KEYCODE.LEFT:
            //         next = previousRadioButton(node);
            //         if (!next) next = lastRadioButton(node); //if node is the last node, node cycles to first.
            //         break;
            //       case KEYCODE.SPACE:
            //         next = node;
            //         break;
            //     }
            //     if (next) {
            //       var radioButton = firstRadioButton(node);
            //       while (radioButton) {
            //         setRadioButton(radioButton, 'false');
            //         radioButton = nextRadioButton(radioButton);
            //       }
            //       setRadioButton(next, 'true');
            //       event.preventDefault();
            //       event.stopPropagation();
            //     }
            //   }
            // }
            // /*
            //  * @function focusRadioButton
            //  *
            //  * @desc Adds focus styling to label element encapsulating standard radio button
            //  *
            //  * @param   {Object}  event  -  Standard W3C event object
            //  */
            // function focusRadioButton(event) {
            //   event.currentTarget.className += ' focus';
            // }
            // /*
            //  * @function blurRadioButton
            //  *
            //  * @desc Adds focus styling to the label element encapsulating standard radio button
            //  *
            //  * @param   {Object}  event  -  Standard W3C event object
            //  */
            // function blurRadioButton(event) {
            //   event.currentTarget.className = event.currentTarget.className.replace(
            //     ' focus',
            //     ''
            //   );
            // }
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/toggle/toggle.component.scss": 
        /*!************************************************************!*\
          !*** ./src/app/shared/inputs/toggle/toggle.component.scss ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".toggle {\n  display: flex;\n  flex-direction: column;\n}\n\n.toggle-wrapper {\n  display: inline-block;\n  padding: 0.1875rem;\n  width: 2.1875rem;\n  background: #adb5bd;\n  border-radius: 1.09375rem;\n  transition: 0.2s background;\n  font-size: 0;\n}\n\n.toggle-wrapper .toggle-btn {\n  position: relative;\n  display: inline-block;\n  width: 0.90625rem;\n  height: 0.90625rem;\n  background: #fff;\n  border-radius: 0.453125rem;\n  transition: 0.2s left;\n  left: 0;\n}\n\n.toggle-wrapper:focus {\n  background: #bbc2c8;\n}\n\n.toggle-wrapper.checked {\n  background: #20c997;\n}\n\n.toggle-wrapper.checked .toggle-btn {\n  left: 0.90625rem;\n}\n\n.toggle-wrapper.checked:focus {\n  background: #26dca6;\n}\n\nlabel {\n  margin-left: 10px;\n  font-family: \"Lato\", sans-serif;\n  color: #212529;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbWFyYWx0YWwvU2l0ZXMvcGF5Y2FsL3NyYy9hcHAvc2hhcmVkL2lucHV0cy90b2dnbGUvdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaW5wdXRzL3RvZ2dsZS90b2dnbGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvb21hcmFsdGFsL1NpdGVzL3BheWNhbC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL29tYXJhbHRhbC9TaXRlcy9wYXljYWwvc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDakJGOztBRG1CQTtFQUNFLHFCQUFBO0VBQ0Esa0JBckJlO0VBc0JmLGdCQXZCYTtFQXdCYixtQkVkUztFRmdCUCx5QkFBQTtFQUdBLDJCQUFBO0VBRUYsWUFBQTtBQ3BCRjs7QURxQkU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBeEJpQjtFQXlCakIsa0JBekJpQjtFQTBCakIsZ0JFaENPO0VGa0NMLDBCQUFBO0VBR0EscUJBQUE7RUFFRixPQUFBO0FDdkJKOztBRHlCRTtFQUNFLG1CQTVDc0I7QUNxQjFCOztBRHlCRTtFQUNFLG1CRVJNO0FEZlY7O0FEd0JJO0VBQ0UsZ0JBekNlO0FDbUJyQjs7QUR3Qkk7RUFDRSxtQkFsRDRCO0FDNEJsQzs7QUQwQkE7RUFDRSxpQkFBQTtFQUNBLCtCRy9EaUI7RUhnRWpCLGNFaERTO0FEeUJYIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2lucHV0cy90b2dnbGUvdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcblxuJHRvZ2dsZS13aWR0aDogMi4xODc1cmVtICFkZWZhdWx0O1xuJHRvZ2dsZS1wYWRkaW5nOiAwLjE4NzVyZW0gIWRlZmF1bHQ7XG4kdG9nZ2xlLWJhY2tncm91bmQ6ICRncmF5LTUwMCAhZGVmYXVsdDtcbiR0b2dnbGUtZm9jdXMtYmFja2dyb3VuZDogbGlnaHRlbigkdG9nZ2xlLWJhY2tncm91bmQsIDUlKSAhZGVmYXVsdDtcbiR0b2dnbGUtY2hlY2tlZC1iYWNrZ3JvdW5kOiAkdGVhbCAhZGVmYXVsdDtcbiR0b2dnbGUtY2hlY2tlZC1mb2N1cy1iYWNrZ3JvdW5kOiBsaWdodGVuKFxuICAkdG9nZ2xlLWNoZWNrZWQtYmFja2dyb3VuZCxcbiAgNSVcbikgIWRlZmF1bHQ7XG4kdG9nZ2xlLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktbGF0bztcbiR0b2dnbGUtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycyAhZGVmYXVsdDtcbiR0b2dnbGUtYnV0dG9uLXNpemU6ICgkdG9nZ2xlLXdpZHRoIC0gKDIgKiAkdG9nZ2xlLXBhZGRpbmcpKS8yO1xuXG4kZW5hYmxlLXRvZ2dsZS1yb3VuZGVkOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS10b2dnbGUtdHJhbnNpdGlvbjogdHJ1ZSAhZGVmYXVsdDtcblxuLnRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udG9nZ2xlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6ICR0b2dnbGUtcGFkZGluZztcbiAgd2lkdGg6ICR0b2dnbGUtd2lkdGg7XG4gIGJhY2tncm91bmQ6ICR0b2dnbGUtYmFja2dyb3VuZDtcbiAgQGlmICRlbmFibGUtdG9nZ2xlLXJvdW5kZWQge1xuICAgIGJvcmRlci1yYWRpdXM6ICR0b2dnbGUtd2lkdGgvMjtcbiAgfVxuICBAaWYgJGVuYWJsZS10b2dnbGUtdHJhbnNpdGlvbiB7XG4gICAgdHJhbnNpdGlvbjogJHRvZ2dsZS10cmFuc2l0aW9uLWR1cmF0aW9uIGJhY2tncm91bmQ7XG4gIH1cbiAgZm9udC1zaXplOiAwO1xuICAudG9nZ2xlLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogJHRvZ2dsZS1idXR0b24tc2l6ZTtcbiAgICBoZWlnaHQ6ICR0b2dnbGUtYnV0dG9uLXNpemU7XG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgIEBpZiAkZW5hYmxlLXRvZ2dsZS1yb3VuZGVkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b2dnbGUtYnV0dG9uLXNpemUgLyAyO1xuICAgIH1cbiAgICBAaWYgJGVuYWJsZS10b2dnbGUtdHJhbnNpdGlvbiB7XG4gICAgICB0cmFuc2l0aW9uOiAkdG9nZ2xlLXRyYW5zaXRpb24tZHVyYXRpb24gbGVmdDtcbiAgICB9XG4gICAgbGVmdDogMDtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAkdG9nZ2xlLWZvY3VzLWJhY2tncm91bmQ7XG4gIH1cbiAgJi5jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiAkdG9nZ2xlLWNoZWNrZWQtYmFja2dyb3VuZDtcbiAgICAudG9nZ2xlLWJ0biB7XG4gICAgICBsZWZ0OiAkdG9nZ2xlLWJ1dHRvbi1zaXplO1xuICAgIH1cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6ICR0b2dnbGUtY2hlY2tlZC1mb2N1cy1iYWNrZ3JvdW5kO1xuICAgIH1cbiAgfVxufVxubGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1mYW1pbHk6ICR0b2dnbGUtZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkZ3JheS05MDA7XG59XG4iLCIudG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRvZ2dsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjE4NzVyZW07XG4gIHdpZHRoOiAyLjE4NzVyZW07XG4gIGJhY2tncm91bmQ6ICNhZGI1YmQ7XG4gIGJvcmRlci1yYWRpdXM6IDEuMDkzNzVyZW07XG4gIHRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZDtcbiAgZm9udC1zaXplOiAwO1xufVxuLnRvZ2dsZS13cmFwcGVyIC50b2dnbGUtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwLjkwNjI1cmVtO1xuICBoZWlnaHQ6IDAuOTA2MjVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDUzMTI1cmVtO1xuICB0cmFuc2l0aW9uOiAwLjJzIGxlZnQ7XG4gIGxlZnQ6IDA7XG59XG4udG9nZ2xlLXdyYXBwZXI6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjYmJjMmM4O1xufVxuLnRvZ2dsZS13cmFwcGVyLmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjMjBjOTk3O1xufVxuLnRvZ2dsZS13cmFwcGVyLmNoZWNrZWQgLnRvZ2dsZS1idG4ge1xuICBsZWZ0OiAwLjkwNjI1cmVtO1xufVxuLnRvZ2dsZS13cmFwcGVyLmNoZWNrZWQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMjZkY2E2O1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjEyNTI5O1xufSIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cbi8vIENvbG9yIHN5c3RlbVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXG4gICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXG4gICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXG4gICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxuICApLFxuICAkZ3JheXNcbik7XG5cbiRibHVlOiAgICAjMDA3YmZmICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNkYzM1NDUgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAgICMyOGE3NDUgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMTdhMmI4ICFkZWZhdWx0O1xuXG4kY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXG4gICAgXCJpbmRpZ29cIjogICAgICRpbmRpZ28sXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxuICAgIFwicmVkXCI6ICAgICAgICAkcmVkLFxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxuICAgIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuICApLFxuICAkY29sb3JzXG4pO1xuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNldCBhIHNwZWNpZmljIGp1bXAgcG9pbnQgZm9yIHJlcXVlc3RpbmcgY29sb3IganVtcHNcbiR0aGVtZS1jb2xvci1pbnRlcnZhbDogICAgICA4JSAhZGVmYXVsdDtcblxuLy8gVGhlIHlpcSBsaWdodG5lc3MgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZW4gdGhlIGxpZ2h0bmVzcyBvZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJkYXJrXCIgdG8gXCJsaWdodFwiLiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgYmV0d2VlbiAwIGFuZCAyNTUuXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTUwICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIFlJUSBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiR5aXEtdGV4dC1kYXJrOiAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4keWlxLXRleHQtbGlnaHQ6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJlZmVycy1yZWR1Y2VkLW1vdGlvbi1tZWRpYS1xdWVyeTogICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkLCBubyBsb25nZXIgYWZmZWN0cyBhbnkgY29tcGlsZWQgQ1NTXG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZGVwcmVjYXRpb24tbWVzc2FnZXM6ICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuXG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAwOiAwLFxuICAgIDE6ICgkc3BhY2VyICogLjI1KSxcbiAgICAyOiAoJHNwYWNlciAqIC41KSxcbiAgICAzOiAkc3BhY2VyLFxuICAgIDQ6ICgkc3BhY2VyICogMS41KSxcbiAgICA1OiAoJHNwYWNlciAqIDMpXG4gICksXG4gICRzcGFjZXJzXG4pO1xuXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzaXplczogbWFwLW1lcmdlKFxuICAoXG4gICAgMjU6IDI1JSxcbiAgICA1MDogNTAlLFxuICAgIDc1OiA3NSUsXG4gICAgMTAwOiAxMDAlLFxuICAgIGF1dG86IGF1dG9cbiAgKSxcbiAgJHNpemVzXG4pO1xuXG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRsaW5rLWNvbG9yLCAxNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lICFkZWZhdWx0O1xuLy8gRGFya2VuIHBlcmNlbnRhZ2UgZm9yIGxpbmtzIHdpdGggYC50ZXh0LSpgIGNsYXNzIChlLmcuIGAudGV4dC1zdWNjZXNzYClcbiRlbXBoYXNpemVkLWxpbmstaG92ZXItZGFya2VuLXBlcmNlbnRhZ2U6IDE1JSAhZGVmYXVsdDtcblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAgIDFyZW0gIWRlZmF1bHQ7XG5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5AaW5jbHVkZSBfYXNzZXJ0LXN0YXJ0cy1hdC16ZXJvKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuXG5cbi8vIEdyaWQgY29udGFpbmVyc1xuLy9cbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXG5cbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4XG4pICFkZWZhdWx0O1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkY29udGFpbmVyLW1heC13aWR0aHMsIFwiJGNvbnRhaW5lci1tYXgtd2lkdGhzXCIpO1xuXG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1jb2x1bW5zOiAgICAgICAgICAgICAgICAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG5cblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG5cbiRyb3VuZGVkLXBpbGw6ICAgICAgICAgICAgICAgIDUwcmVtICFkZWZhdWx0O1xuXG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAgICAgICAgICAgICAgIDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcblxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNvbXBvbmVudC1hY3RpdmUtYmc6ICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAuM2VtICFkZWZhdWx0O1xuJGNhcmV0LXZlcnRpY2FsLWFsaWduOiAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuJGNhcmV0LXNwYWNpbmc6ICAgICAgICAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1iYXNlOiAgICAgICAgICAgICBhbGwgLjJzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tZmFkZTogICAgICAgICAgICAgb3BhY2l0eSAuMTVzIGxpbmVhciAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiAgICAgICAgIGhlaWdodCAuMzVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6IGpvaW4oXG4gIChcbiAgICAoMjEgOSksXG4gICAgKDE2IDkpLFxuICAgICg0IDMpLFxuICAgICgxIDEpLFxuICApLFxuICAkZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zXG4pO1xuXG4vLyBUeXBvZ3JhcGh5XG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6ICAgICAgICAgbGlnaHRlciAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgIDcwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6ICAgICAgICAgIGJvbGRlciAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAxLjIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtc2l6ZTogICAgICAgICAgICAgICA2cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkyLXNpemU6ICAgICAgICAgICAgICAgNS41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkzLXNpemU6ICAgICAgICAgICAgICAgNC41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXk0LXNpemU6ICAgICAgICAgICAgICAgMy41cmVtICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTItd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTMtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheS1saW5lLWhlaWdodDogICAgICAgICAkaGVhZGluZ3MtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIDgwJSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcblxuJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XG5cbiRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4ka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcblxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1sZXZlbDogICAgICAgICAgLTYgIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiAgICAgICBudWxsICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6ICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgcmdiYSgkY29tcG9uZW50LWFjdGl2ZS1iZywgLjI1KSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogIDAgMCAwICRpbnB1dC1idG4tZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogICAgJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKCR3aGl0ZSwgLjE1KSwgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRidG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNjUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICBpbnNldCAwIDNweCA1cHggcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuXG4kYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAyNSUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW19ICsgI3skaW5wdXQtcGFkZGluZy15fSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAvIDJ9KSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAxZW19ICsgI3skaW5wdXQtcGFkZGluZy15ICogMn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodC1zbSAqIDFlbX0gKyAjeyRpbnB1dC1idG4tcGFkZGluZy15LXNtICogMn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbX0gKyAjeyRpbnB1dC1idG4tcGFkZGluZy15LWxnICogMn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAgICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDogICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1zcGFjZXIteDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3gtc2hhZG93OiAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBub25lICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDQnJTNlJTNjcGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgLyAyICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgICAgICAgY2FsYygjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZX0gLSAjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNH0pICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXk6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtZmFtaWx5OiAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZTogICAgICAgICAgICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQ6ICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6ICAgMXJlbSAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDUnJTNlJTNjcGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6ICAgICAgICAgICRjdXN0b20tc2VsZWN0LWluZGljYXRvciBuby1yZXBlYXQgcmlnaHQgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14IGNlbnRlciAvICRjdXN0b20tc2VsZWN0LWJnLXNpemUgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXG5cbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogY2FsYygoMWVtICsgI3syICogJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15fSkgKiAzIC8gNCArICN7JGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmd9KSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246ICAgICAgY2VudGVyIHJpZ2h0ICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWJvcmRlci13aWR0aDogICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiAgICAgICAgICBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICAgICAgICAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogICAgMCAwIDAgJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICAgICAgICAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICAgICAgICAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICBpbnNldCAwIC4yNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcbiRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJvcmRlci1jb2xvcjogICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb250LWZhbWlseTogICAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRjdXN0b20tZmlsZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS10ZXh0OiAoXG4gIGVuOiBcIkJyb3dzZVwiXG4pICFkZWZhdWx0O1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuXG4kZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgdmlld0JveD0nLTIgLTIgNyA3JyUzZSUzY3BhdGggc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIGQ9J00wIDBsMyAzbTAtM0wwIDMnLyUzZSUzY2NpcmNsZSByPScuNScvJTNlJTNjY2lyY2xlIGN4PSczJyByPScuNScvJTNlJTNjY2lyY2xlIGN5PSczJyByPScuNScvJTNlJTNjY2lyY2xlIGN4PSczJyBjeT0nMycgcj0nLjUnLyUzZSUzYy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxuICAgICksXG4gICAgXCJpbnZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcbiAgICApLFxuICApLFxuICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuKTtcblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuXG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuXG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXG4kbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3BhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tc3BhY2VyOiAgICAgICAgICAgICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgIGNhbGMoI3skZHJvcGRvd24tYm9yZGVyLXJhZGl1c30gLSAjeyRkcm9wZG93bi1ib3JkZXItd2lkdGh9KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICRuYXYtZGl2aWRlci1tYXJnaW4teSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgIGRhcmtlbigkZ3JheS05MDAsIDUlKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgICAxLjI1ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cblxuLy8gSnVtYm90cm9uXG5cbiRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBjYWxjKCN7JGNhcmQtYm9yZGVyLXJhZGl1c30gLSAjeyRjYXJkLWJvcmRlci13aWR0aH0pICFkZWZhdWx0O1xuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcbiRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcblxuJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLW1hcmdpbjogICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAhZGVmYXVsdDtcblxuXG4vLyBUb29sdGlwc1xuXG4kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XG5cbi8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15OiAgICAgJHRvb2x0aXAtcGFkZGluZy15ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ6ICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cblxuLy8gUG9wb3ZlcnNcblxuJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBUb2FzdHNcblxuJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIDc1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNGVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcbiRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG5cbiRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XG4vLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXG4vLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXG4kYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcblxuXG4vLyBNb2RhbHNcblxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgICAgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xuXG4kbW9kYWwtZmFkZS10cmFuc2Zvcm06ICAgICAgICAgICAgICB0cmFuc2xhdGUoMCwgLTUwcHgpICFkZWZhdWx0O1xuJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuXG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cblxuLy8gRmlndXJlc1xuXG4kZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxuXG5cbi8vIFNwaW5uZXJzXG5cbiRzcGlubmVyLXdpZHRoOiAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aDogIC4yNWVtICFkZWZhdWx0O1xuXG4kc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xuXG5cbi8vIENsb3NlXG5cbiRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XG5cblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICA4Ny41JSAhZGVmYXVsdDtcbiRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xuXG4ka2JkLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xuJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG4kcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcblxuXG4vLyBVdGlsaXRpZXNcblxuJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsIGlubGluZS1mbGV4ICFkZWZhdWx0O1xuJG92ZXJmbG93czogYXV0bywgaGlkZGVuICFkZWZhdWx0O1xuJHBvc2l0aW9uczogc3RhdGljLCByZWxhdGl2ZSwgYWJzb2x1dGUsIGZpeGVkLCBzdGlja3kgIWRlZmF1bHQ7XG5cblxuLy8gUHJpbnRpbmdcblxuJHByaW50LXBhZ2Utc2l6ZTogICAgICAgICAgICAgICAgICAgYTMgIWRlZmF1bHQ7XG4kcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xuIiwiJGZvbnQtZmFtaWx5LWxhdG86ICdMYXRvJywgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktbGF0bztcblxuQGltcG9ydCAnZnVuY3Rpb25zJztcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/inputs/toggle/toggle.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/inputs/toggle/toggle.component.ts ***!
          \**********************************************************/
        /*! exports provided: ToggleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function () { return ToggleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var id = 0;
            var ToggleComponent = /** @class */ (function () {
                function ToggleComponent() {
                    this.checked = false;
                    this.changetoggleState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.id = "shared-toggle-" + ++id;
                }
                ToggleComponent.prototype.toggle = function () {
                    this.checked = !this.checked;
                    this.changetoggleState.emit(this.checked);
                };
                ToggleComponent.prototype.onKeydown = function (event) {
                    if (event.key === ' ') {
                        this.toggle();
                        event.preventDefault();
                    }
                };
                return ToggleComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ToggleComponent.prototype, "checked", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ToggleComponent.prototype, "label", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ToggleComponent.prototype, "changetoggleState", void 0);
            ToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shared-toggle',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toggle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/inputs/toggle/toggle.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toggle.component.scss */ "./src/app/shared/inputs/toggle/toggle.component.scss")).default]
                })
            ], ToggleComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/pipes/custom-currency.pipe.ts": 
        /*!******************************************************!*\
          !*** ./src/app/shared/pipes/custom-currency.pipe.ts ***!
          \******************************************************/
        /*! exports provided: CustomCurrencyPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCurrencyPipe", function () { return CustomCurrencyPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var CustomCurrencyPipe = /** @class */ (function () {
                function CustomCurrencyPipe(localeId) {
                    this.localeId = localeId;
                    this.currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"](localeId);
                }
                CustomCurrencyPipe.prototype.transform = function (value) {
                    var v = value.toString().replace(/[^0-9\.]/g, '');
                    var transformed = this.currencyPipe.transform(parseInt(v, 10));
                    return transformed;
                };
                return CustomCurrencyPipe;
            }());
            CustomCurrencyPipe.ctorParameters = function () { return [
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
            ]; };
            CustomCurrencyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'pcCurrency',
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]))
            ], CustomCurrencyPipe);
            /***/ 
        }),
        /***/ "./src/app/shared/services/income-tax-calculator.service.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/shared/services/income-tax-calculator.service.ts ***!
          \******************************************************************/
        /*! exports provided: IncomeTaxService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTaxService", function () { return IncomeTaxService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _resolution_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolution.service */ "./src/app/shared/services/resolution.service.ts");
            var IncomeTaxService = /** @class */ (function () {
                function IncomeTaxService(res) {
                    this.res = res;
                }
                IncomeTaxService.prototype.calculateAnnuallyIncomeTax = function (taxRatesData$, annuallyTaxableIncome$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(taxRatesData$, annuallyTaxableIncome$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var taxRatesData = _a[0], annuallyTaxableIncome = _a[1];
                        return ({
                            annuallyTaxableIncome: annuallyTaxableIncome,
                            rates: taxRatesData,
                        });
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var annuallyTaxableIncome = _a.annuallyTaxableIncome, rates = _a.rates;
                        return rates.reverse().reduce(function (acc, curr) {
                            var _a = curr.range, lower = _a[0], upper = _a[1];
                            var tierTaxableIncome = 0;
                            if (annuallyTaxableIncome >= lower) {
                                if (upper) {
                                    tierTaxableIncome =
                                        Math.min(upper, annuallyTaxableIncome) -
                                            lower +
                                            Math.min(1, lower);
                                }
                                else {
                                    tierTaxableIncome =
                                        annuallyTaxableIncome - lower + Math.min(1, lower);
                                }
                            }
                            return acc + tierTaxableIncome * curr.rate;
                        }, 0);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tax) { return Math.round(tax); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({ refCount: true, bufferSize: 1 }));
                };
                IncomeTaxService.prototype.calculateMonthlyIncomeTax = function (annuallyIncomeTax$) {
                    return annuallyIncomeTax$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.monthlyMapper));
                };
                IncomeTaxService.prototype.calculateFortnightlyIncomeTax = function (annuallyIncomeTax$) {
                    return annuallyIncomeTax$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.fortnightlyMapper));
                };
                IncomeTaxService.prototype.calculateWeeklyIncomeTax = function (annuallyIncomeTax$) {
                    return annuallyIncomeTax$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.weeklyMapper));
                };
                IncomeTaxService.prototype.calculateAnnuallyTotalTaxes = function (annuallyIncomeTax$, annuallyMedicareLevy$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(annuallyIncomeTax$, annuallyMedicareLevy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var incomeTax = _a[0], medicareLevy = _a[1];
                        return incomeTax + medicareLevy;
                    }));
                };
                IncomeTaxService.prototype.calculateMonthlyTotalTaxes = function (monthlyIncomeTax$, monthlyMedicareLevy$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(monthlyIncomeTax$, monthlyMedicareLevy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var incomeTax = _a[0], medicareLevy = _a[1];
                        return incomeTax + medicareLevy;
                    }));
                };
                IncomeTaxService.prototype.calculateFortnightlyTotalTaxes = function (fortnightlyIncomeTax$, fortnightlyMedicareLevy$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(fortnightlyIncomeTax$, fortnightlyMedicareLevy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var incomeTax = _a[0], medicareLevy = _a[1];
                        return incomeTax + medicareLevy;
                    }));
                };
                IncomeTaxService.prototype.calculateWeeklyTotalTaxes = function (weeklyIncomeTax$, weeklyMedicareLevy$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(weeklyIncomeTax$, weeklyMedicareLevy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var incomeTax = _a[0], medicareLevy = _a[1];
                        return incomeTax + medicareLevy;
                    }));
                };
                IncomeTaxService.prototype.calculateAnnuallyIncomeTaxExcludingOffsets = function (annuallyTotalTaxes$, annuallyTaxOffset$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(annuallyTotalTaxes$, annuallyTaxOffset$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var annuallyTotalTaxes = _a[0], annuallyTaxOffset = _a[1];
                        return annuallyTotalTaxes - annuallyTaxOffset;
                    }));
                };
                return IncomeTaxService;
            }());
            IncomeTaxService.ctorParameters = function () { return [
                { type: _resolution_service__WEBPACK_IMPORTED_MODULE_4__["ResolutionService"] }
            ]; };
            IncomeTaxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], IncomeTaxService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/medicare-levy.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/services/medicare-levy.service.ts ***!
          \**********************************************************/
        /*! exports provided: MedicareLevyService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicareLevyService", function () { return MedicareLevyService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _resolution_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolution.service */ "./src/app/shared/services/resolution.service.ts");
            var MedicareLevyService = /** @class */ (function () {
                function MedicareLevyService(res) {
                    this.res = res;
                }
                MedicareLevyService.prototype.calculateAnnuallyMedicareLevy = function (medicareLevyData$, annuallyTaxableIncome$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(annuallyTaxableIncome$, medicareLevyData$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var annuallyTaxableIncome = _a[0], medicareLevy = _a[1];
                        var levy = 0;
                        medicareLevy.some(function (tier) {
                            var _a = tier.range, lower = _a[0], upper = _a[1];
                            if ((lower === undefined || annuallyTaxableIncome >= lower) &&
                                (upper === undefined || annuallyTaxableIncome <= upper)) {
                                levy = tier.formula(annuallyTaxableIncome);
                                return true;
                            }
                        });
                        return levy;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({ refCount: true, bufferSize: 1 }));
                };
                MedicareLevyService.prototype.calculateMonthlyMedicareLevy = function (annuallyMedicareLevy$) {
                    return annuallyMedicareLevy$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.monthlyMapper));
                };
                MedicareLevyService.prototype.calculateFortnightlyMedicareLevy = function (annuallyMedicareLevy$) {
                    return annuallyMedicareLevy$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.fortnightlyMapper));
                };
                MedicareLevyService.prototype.calculateWeeklyMedicareLevy = function (annuallyMedicareLevy$) {
                    return annuallyMedicareLevy$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.weeklyMapper));
                };
                return MedicareLevyService;
            }());
            MedicareLevyService.ctorParameters = function () { return [
                { type: _resolution_service__WEBPACK_IMPORTED_MODULE_4__["ResolutionService"] }
            ]; };
            MedicareLevyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], MedicareLevyService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/move-focus.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/services/move-focus.service.ts ***!
          \*******************************************************/
        /*! exports provided: MoveFocusService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveFocusService", function () { return MoveFocusService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MoveFocusService = /** @class */ (function () {
                function MoveFocusService() {
                }
                MoveFocusService.prototype.byQuerySelector = function (querySelector) {
                    var element = document.querySelector(querySelector);
                    if (!element) {
                        return;
                    }
                    if (!this.isElementFocusable(element)) {
                        element.setAttribute('tabindex', '-1');
                    }
                    element.focus();
                };
                MoveFocusService.prototype.isElementFocusable = function (element) {
                    var nodeName = element.nodeName.toLowerCase();
                    var focusableTagNames = [
                        'input',
                        'a',
                        'link',
                        'button',
                        'select',
                        'textarea',
                    ];
                    var inputTagName = focusableTagNames.shift();
                    return (focusableTagNames.includes(nodeName) ||
                        (nodeName === inputTagName &&
                            element.getAttribute('type') !== 'hidden') ||
                        Boolean(element.getAttribute('tabindex')));
                };
                return MoveFocusService;
            }());
            MoveFocusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], MoveFocusService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/pay.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/shared/services/pay.service.ts ***!
          \************************************************/
        /*! exports provided: PayService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayService", function () { return PayService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var PayService = /** @class */ (function () {
                function PayService() {
                }
                PayService.prototype.calculateAnnuallyPay = function (annuallyTaxableIncome$, annuallyTotalTaxes$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(annuallyTaxableIncome$, annuallyTotalTaxes$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var taxableIncome = _a[0], totalTaxes = _a[1];
                        return taxableIncome - totalTaxes;
                    }));
                };
                PayService.prototype.calculateMonthlyPay = function (monthlyTaxableIncome$, monthlyTotalTaxes$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(monthlyTaxableIncome$, monthlyTotalTaxes$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var taxableIncome = _a[0], totalTaxes = _a[1];
                        return taxableIncome - totalTaxes;
                    }));
                };
                PayService.prototype.calculateFortnightlyPay = function (fortnightlyTaxableIncome$, fortnightlyTotalTaxes$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(fortnightlyTaxableIncome$, fortnightlyTotalTaxes$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var taxableIncome = _a[0], totalTaxes = _a[1];
                        return taxableIncome - totalTaxes;
                    }));
                };
                PayService.prototype.calculateWeeklyPay = function (weeklyTaxableIncome$, weeklyTotalTaxes$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(weeklyTaxableIncome$, weeklyTotalTaxes$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var taxableIncome = _a[0], totalTaxes = _a[1];
                        return taxableIncome - totalTaxes;
                    }));
                };
                PayService.prototype.calculateAnnuallyPayIncludingTaxOffsets = function (annuallyTaxableIncome$, annuallyIncomeTaxExcludingOffsets$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(annuallyTaxableIncome$, annuallyIncomeTaxExcludingOffsets$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var annuallyTaxableIncome = _a[0], annuallyIncomeTaxExcludingOffsets = _a[1];
                        return annuallyTaxableIncome - annuallyIncomeTaxExcludingOffsets;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({ refCount: true, bufferSize: 1 }));
                };
                return PayService;
            }());
            PayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], PayService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/resolution.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/services/resolution.service.ts ***!
          \*******************************************************/
        /*! exports provided: ResolutionService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolutionService", function () { return ResolutionService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ResolutionService = /** @class */ (function () {
                function ResolutionService() {
                }
                ResolutionService.prototype.monthlyMapper = function (value) {
                    return value / 12;
                };
                ResolutionService.prototype.fortnightlyMapper = function (value) {
                    return value / 26;
                };
                ResolutionService.prototype.weeklyMapper = function (value) {
                    return value / 52;
                };
                return ResolutionService;
            }());
            ResolutionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ResolutionService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/superannuation.service.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/shared/services/superannuation.service.ts ***!
          \***********************************************************/
        /*! exports provided: SuperannuationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperannuationService", function () { return SuperannuationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _resolution_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolution.service */ "./src/app/shared/services/resolution.service.ts");
            var SuperannuationService = /** @class */ (function () {
                function SuperannuationService(res) {
                    this.res = res;
                }
                SuperannuationService.prototype.calculateAnnuallySuperannuation = function (superannuationData$, income$, superannuationIncluded$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(superannuationData$, income$, superannuationIncluded$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var superannuation = _a[0], income = _a[1], superannuationIncluded = _a[2];
                        return superannuationIncluded
                            ? income - income / (1 + superannuation)
                            : income * superannuation;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({ refCount: true, bufferSize: 1 }));
                };
                SuperannuationService.prototype.calculateMonthlySuperannuation = function (annuallySuperannuation$) {
                    return annuallySuperannuation$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.monthlyMapper));
                };
                SuperannuationService.prototype.calculateFortnightlySuperannuation = function (annuallySuperannuation$) {
                    return annuallySuperannuation$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.fortnightlyMapper));
                };
                SuperannuationService.prototype.calculateWeeklySuperannuation = function (annuallySuperannuation$) {
                    return annuallySuperannuation$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.weeklyMapper));
                };
                return SuperannuationService;
            }());
            SuperannuationService.ctorParameters = function () { return [
                { type: _resolution_service__WEBPACK_IMPORTED_MODULE_4__["ResolutionService"] }
            ]; };
            SuperannuationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], SuperannuationService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/tax-data.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/services/tax-data.service.ts ***!
          \*****************************************************/
        /*! exports provided: TaxDataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxDataService", function () { return TaxDataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _pc_data_income_tax_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pc/data/income-tax-data */ "./src/app/data/income-tax-data.ts");
            var TaxDataService = /** @class */ (function () {
                function TaxDataService() {
                    this.taxData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_pc_data_income_tax_data__WEBPACK_IMPORTED_MODULE_4__["INCOME_TAX_DATA"]);
                }
                TaxDataService.prototype.getApplicableTaxData = function (taxYear$, residencyStatus$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.taxData$, taxYear$, residencyStatus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var taxData = _a[0], taxYear = _a[1], residencyStatus = _a[2];
                        return taxData[taxYear][residencyStatus];
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                };
                TaxDataService.prototype.getTaxRatesData = function (applicableTaxData$) {
                    return applicableTaxData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.taxRates; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                };
                TaxDataService.prototype.getSuperannuationData = function (applicableTaxData$) {
                    return applicableTaxData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.superannuation; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                };
                TaxDataService.prototype.getMedicareLevyData = function (applicableTaxData$) {
                    return applicableTaxData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.medicareLevy; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                };
                TaxDataService.prototype.getLowIncomeTaxOffsetData = function (applicableTaxData$) {
                    return applicableTaxData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.lowIncomeTaxOffset; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                };
                TaxDataService.prototype.getLowAndMiddleIncomeTaxOffsetData = function (applicableTaxData$) {
                    return applicableTaxData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.lowAndMiddleIncomeTaxOffset; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                };
                TaxDataService.prototype.getTaxYearsData = function () {
                    return Object.keys(_pc_data_income_tax_data__WEBPACK_IMPORTED_MODULE_4__["INCOME_TAX_DATA"])
                        .map(function (i) { return Number(i); })
                        .sort(function (a, b) { return b - a; });
                };
                return TaxDataService;
            }());
            TaxDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], TaxDataService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/tax-offset.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/services/tax-offset.service.ts ***!
          \*******************************************************/
        /*! exports provided: TaxOffsetService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxOffsetService", function () { return TaxOffsetService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var TaxOffsetService = /** @class */ (function () {
                function TaxOffsetService() {
                }
                TaxOffsetService.prototype.calculateLowAndMiddleIncomeTaxOffset = function (annuallyTaxableIncome$, lowAndMiddleIncomeTaxOffsetData$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(annuallyTaxableIncome$, lowAndMiddleIncomeTaxOffsetData$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var annuallyTaxableIncome = _a[0], lowIncomeTaxOffsetData = _a[1];
                        var offset = 0;
                        lowIncomeTaxOffsetData.some(function (tier) {
                            var _a = tier.range, lower = _a[0], upper = _a[1];
                            if ((lower === undefined || annuallyTaxableIncome >= lower) &&
                                (upper === undefined || annuallyTaxableIncome <= upper)) {
                                offset = tier.formula(annuallyTaxableIncome);
                                return true;
                            }
                        });
                        return offset;
                    }));
                };
                TaxOffsetService.prototype.calculateLowIncomeTaxOffset = function (annuallyTaxableIncome$, lowIncomeTaxOffsetData$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(annuallyTaxableIncome$, lowIncomeTaxOffsetData$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var annuallyTaxableIncome = _a[0], lowIncomeTaxOffsetData = _a[1];
                        var offset = 0;
                        lowIncomeTaxOffsetData.some(function (tier) {
                            var _a = tier.range, lower = _a[0], upper = _a[1];
                            if ((lower === undefined || annuallyTaxableIncome >= lower) &&
                                (upper === undefined || annuallyTaxableIncome <= upper)) {
                                offset = tier.formula(annuallyTaxableIncome);
                                return true;
                            }
                        });
                        return offset;
                    }));
                };
                TaxOffsetService.prototype.calculateTotalIncomeTaxOffset = function (annuallyLowIncomeTaxOffset$, annuallyLowAndMiddleIncomeTaxOffset$, annuallyIncomeTax$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(annuallyLowIncomeTaxOffset$, annuallyLowAndMiddleIncomeTaxOffset$, annuallyIncomeTax$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var annuallyLowIncomeTaxOffset = _a[0], annuallyLowAndMiddleIncomeTaxOffset = _a[1], annuallyIncomeTax = _a[2];
                        return Math.min(annuallyIncomeTax, annuallyLowIncomeTaxOffset + annuallyLowAndMiddleIncomeTaxOffset);
                    }));
                };
                return TaxOffsetService;
            }());
            TaxOffsetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], TaxOffsetService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/taxable-income.service.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/shared/services/taxable-income.service.ts ***!
          \***********************************************************/
        /*! exports provided: TaxableIncomeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxableIncomeService", function () { return TaxableIncomeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _resolution_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolution.service */ "./src/app/shared/services/resolution.service.ts");
            var TaxableIncomeService = /** @class */ (function () {
                function TaxableIncomeService(res) {
                    this.res = res;
                }
                TaxableIncomeService.prototype.calculateAnnuallyTaxableIncome = function (superannuationData$, income$, superannuationIncluded$) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(superannuationData$, income$, superannuationIncluded$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                        var superannuation = _a[0], income = _a[1], superannuationIncluded = _a[2];
                        return superannuationIncluded ? income / (1 + superannuation) : income;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                };
                TaxableIncomeService.prototype.calculateMonthlyTaxableIncome = function (annuallyTaxableIncome$) {
                    return annuallyTaxableIncome$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.monthlyMapper), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                };
                TaxableIncomeService.prototype.calculateFortnightlyTaxableIncome = function (annuallyTaxableIncome$) {
                    return annuallyTaxableIncome$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.fortnightlyMapper), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                };
                TaxableIncomeService.prototype.calculateWeeklyTaxableIncome = function (annuallyTaxableIncome$) {
                    return annuallyTaxableIncome$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.res.weeklyMapper), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                };
                return TaxableIncomeService;
            }());
            TaxableIncomeService.ctorParameters = function () { return [
                { type: _resolution_service__WEBPACK_IMPORTED_MODULE_4__["ResolutionService"] }
            ]; };
            TaxableIncomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], TaxableIncomeService);
            /***/ 
        }),
        /***/ "./src/app/shared/shared.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/shared.module.ts ***!
          \*****************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _inputs_currency_currency_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputs/currency/currency.component */ "./src/app/shared/inputs/currency/currency.component.ts");
            /* harmony import */ var _pipes_custom_currency_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/custom-currency.pipe */ "./src/app/shared/pipes/custom-currency.pipe.ts");
            /* harmony import */ var _services_income_tax_calculator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/income-tax-calculator.service */ "./src/app/shared/services/income-tax-calculator.service.ts");
            /* harmony import */ var _services_tax_offset_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/tax-offset.service */ "./src/app/shared/services/tax-offset.service.ts");
            /* harmony import */ var _services_superannuation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/superannuation.service */ "./src/app/shared/services/superannuation.service.ts");
            /* harmony import */ var _services_resolution_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/resolution.service */ "./src/app/shared/services/resolution.service.ts");
            /* harmony import */ var _services_taxable_income_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/taxable-income.service */ "./src/app/shared/services/taxable-income.service.ts");
            /* harmony import */ var _services_medicare_levy_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/medicare-levy.service */ "./src/app/shared/services/medicare-levy.service.ts");
            /* harmony import */ var _services_pay_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/pay.service */ "./src/app/shared/services/pay.service.ts");
            /* harmony import */ var _services_tax_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/tax-data.service */ "./src/app/shared/services/tax-data.service.ts");
            /* harmony import */ var _inputs_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inputs/checkbox/checkbox.component */ "./src/app/shared/inputs/checkbox/checkbox.component.ts");
            /* harmony import */ var _inputs_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inputs/toggle/toggle.component */ "./src/app/shared/inputs/toggle/toggle.component.ts");
            /* harmony import */ var _inputs_radio_radio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inputs/radio/radio.component */ "./src/app/shared/inputs/radio/radio.component.ts");
            /* harmony import */ var _services_move_focus_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/move-focus.service */ "./src/app/shared/services/move-focus.service.ts");
            /* harmony import */ var _inputs_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./inputs/dropdown/dropdown.component */ "./src/app/shared/inputs/dropdown/dropdown.component.ts");
            /* harmony import */ var _inputs_label_label_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./inputs/label/label.component */ "./src/app/shared/inputs/label/label.component.ts");
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [
                        _inputs_currency_currency_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyComponent"],
                        _pipes_custom_currency_pipe__WEBPACK_IMPORTED_MODULE_5__["CustomCurrencyPipe"],
                        _inputs_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_14__["CheckboxComponent"],
                        _inputs_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_15__["ToggleComponent"],
                        _inputs_radio_radio_component__WEBPACK_IMPORTED_MODULE_16__["RadioComponent"],
                        _inputs_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_18__["DropdownComponent"],
                        _inputs_label_label_component__WEBPACK_IMPORTED_MODULE_19__["LabelComponent"],
                    ],
                    exports: [
                        _inputs_currency_currency_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyComponent"],
                        _pipes_custom_currency_pipe__WEBPACK_IMPORTED_MODULE_5__["CustomCurrencyPipe"],
                        _inputs_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_14__["CheckboxComponent"],
                        _inputs_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_15__["ToggleComponent"],
                        _inputs_radio_radio_component__WEBPACK_IMPORTED_MODULE_16__["RadioComponent"],
                        _inputs_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_18__["DropdownComponent"],
                        _inputs_label_label_component__WEBPACK_IMPORTED_MODULE_19__["LabelComponent"],
                    ],
                    providers: [
                        _services_income_tax_calculator_service__WEBPACK_IMPORTED_MODULE_6__["IncomeTaxService"],
                        _services_tax_offset_service__WEBPACK_IMPORTED_MODULE_7__["TaxOffsetService"],
                        _services_superannuation_service__WEBPACK_IMPORTED_MODULE_8__["SuperannuationService"],
                        _services_resolution_service__WEBPACK_IMPORTED_MODULE_9__["ResolutionService"],
                        _services_taxable_income_service__WEBPACK_IMPORTED_MODULE_10__["TaxableIncomeService"],
                        _services_medicare_levy_service__WEBPACK_IMPORTED_MODULE_11__["MedicareLevyService"],
                        _services_pay_service__WEBPACK_IMPORTED_MODULE_12__["PayService"],
                        _services_tax_data_service__WEBPACK_IMPORTED_MODULE_13__["TaxDataService"],
                        _services_move_focus_service__WEBPACK_IMPORTED_MODULE_17__["MoveFocusService"],
                    ],
                })
            ], SharedModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=features-income-tax-calculator-income-tax-calculator-module-es2015.js.map
//# sourceMappingURL=features-income-tax-calculator-income-tax-calculator-module-es5.js.map
//# sourceMappingURL=features-income-tax-calculator-income-tax-calculator-module-es5.js.map