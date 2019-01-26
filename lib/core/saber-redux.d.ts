/*
 * @Author: AK-12 
 * @Date: 2019-01-26 04:04:39 
 * @Last Modified by:   AK-12 
 * @Last Modified time: 2019-01-26 04:04:39 
 */
/**
 *Action
 *
 * @export
 * @interface Action
 * @template T
 */
export interface Action<T = any> {
    type: T;
}
/**
 *ActionV
 *
 * @export
 * @interface ActionV
 * @template T
 * @template V
 */
export interface ActionV<T, V> {
    type: T;
    value: V;
}
/**
 *ActionOf types
 *
 * @export
 * @interface ActionOf
 * @extends {Action<keyof F>}
 * @template F
 */
export interface ActionOf<F> extends Action<keyof F> {
}
/**
 *ActionBy types with value
 *
 * @export
 * @interface ActionBy
 * @extends {Action<keyof T>}
 * @template T
 * @template V
 */
export interface ActionBy<T, V = string> extends Action<keyof T> {
    value: V;
}
/**
 *AnyAction
 *
 * @export
 * @interface AnyAction
 * @extends {Action}
 */
export interface AnyAction extends Action {
    [extraProps: string]: any;
}
/**
 *Reducer
 *
 * @export
 * @interface Reducer
 * @template S
 * @template A
 */
export interface Reducer<S = any, A extends Action = AnyAction> {
    (state?: S | undefined, action?: A): S;
}
/**
 *Dispatch
 *
 * @export
 * @interface Dispatch
 * @template A
 */
export interface Dispatch<A extends Action = AnyAction> {
    <T extends A>(action: T): T;
}
/**
 *Listener
 *
 * @export
 * @interface Listener
 * @template S
 */
export interface Listener<S> {
    (state: S): void;
}
/**
 *unSubscribe
 *
 * @export
 * @interface unSubscribe
 */
export interface unSubscribe {
    (): void;
}
/**
 *Subscribe
 *
 * @export
 * @interface Subscribe
 * @template S
 */
export interface Subscribe<S> {
    (listener: Listener<S>): unSubscribe;
}
/**
 *Store
 *
 * @class Store
 * @template S
 * @template A
 */
export declare class Store<S = any, A extends Action = AnyAction> {
    private reducer;
    /**
     *state
     *
     * @private
     * @type {S}
     * @memberof Store
     */
    private state;
    /**
     *listeners
     *
     * @private
     * @type {Listener<S>[]}
     * @memberof Store
     */
    private listeners;
    /**
     *Creates an instance of Store.
     * @param {Reducer} reducer
     * @param {S} [state]
     * @memberof Store
     */
    constructor(reducer: Reducer, state?: S);
    /**
     *dispatch
     *
     * @type {Dispatch<A>}
     * @memberof Store
     */
    dispatch: Dispatch<A>;
    /**
     *getState
     *
     * @returns {S}
     * @memberof Store
     */
    getState(): S;
    /**
     *subscribe
     *
     * @type {Subscribe<S>}
     * @memberof Store
     */
    subscribe: Subscribe<S>;
}
/**
 * createStore
 * @param reducer
 * @param state
 */
export declare let createStore: <S>(reducer: Reducer<S, AnyAction>, state?: S) => Store<S, AnyAction>;
/**
 *ReducersMapObject
 *
 * @export
 * @interface ReducersMapObject
 * @template S
 * @template A
 */
export declare type ReducersMapObject<S = any, A extends Action = Action> = {
    [K in keyof S]: Reducer<S[K], A>;
};
/**
 * combineReducers
 * @param reducers
 */
export declare const combineReducers: <S, A extends Action<any> = AnyAction>(reducers: ReducersMapObject<S, A>) => (state: S, action: A) => S;
/**
 *compose
 *
 * @export
 * @template argType
 * @param {...Array<(...args: argType[]) => argType>} funcs
 * @returns
 */
export declare function compose<argType>(...funcs: Array<(...args: argType[]) => argType>): (...args: argType[]) => argType;
/**
 *pipe
 *
 * @export
 * @template argType
 * @param {...Array<(...args: argType[]) => argType>} funcs
 * @returns
 */
export declare function pipe<argType>(...funcs: Array<(...args: argType[]) => argType>): (arg: argType) => argType;
