"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *Store
 *
 * @class Store
 * @template S
 * @template A
 */
var Store = /** @class */ (function () {
    /**
     *Creates an instance of Store.
     * @param {Reducer} reducer
     * @param {S} [state]
     * @memberof Store
     */
    function Store(reducer, state) {
        var _this = this;
        this.reducer = reducer;
        /**
         *listeners
         *
         * @private
         * @type {Listener<S>[]}
         * @memberof Store
         */
        this.listeners = [];
        /**
         *dispatch
         *
         * @type {Dispatch<A>}
         * @memberof Store
         */
        this.dispatch = function (action) {
            _this.state = _this.reducer(_this.state, action);
            _this.listeners.forEach(function (l) { return l(_this.state); });
            return action;
        };
        /**
         *subscribe
         *
         * @type {Subscribe<S>}
         * @memberof Store
         */
        this.subscribe = function (listener) {
            _this.listeners.push(listener);
            return function () { return (_this.listeners = _this.listeners.filter(function (l) { return l !== listener; })); };
        };
        this.state = state || {};
    }
    /**
     *getState
     *
     * @returns {S}
     * @memberof Store
     */
    Store.prototype.getState = function () {
        return this.state;
    };
    return Store;
}());
exports.Store = Store;
/**
 * createStore
 * @param reducer
 * @param state
 */
exports.createStore = function (reducer, state) {
    return new Store(reducer, state);
};
/**
 * combineReducers
 * @param reducers
 */
exports.combineReducers = function (reducers) {
    return function (state, action) {
        if (state === void 0) { state = {}; }
        return Object.keys(reducers).reduce(function (nextState, key) {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});
    };
};
/**
 *compose
 *
 * @export
 * @template argType
 * @param {...Array<(...args: argType[]) => argType>} funcs
 * @returns
 */
function compose() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    if (funcs.length === 0) {
        return function (arg) { return arg; };
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce(function (a, b) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return a(b.apply(void 0, args));
    }; });
}
exports.compose = compose;
/**
 *pipe
 *
 * @export
 * @template argType
 * @param {...Array<(...args: argType[]) => argType>} funcs
 * @returns
 */
function pipe() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    if (funcs.length === 0) {
        return function (arg) { return arg; };
    }
    return compose.apply(void 0, funcs.reverse());
}
exports.pipe = pipe;
