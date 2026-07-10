import { _ as Fragment, a as jsxs, c as types_exports, d as wobyCustomElements, f as ssr_exports, g as renderToString, i as jsxDEV, l as createElement, n as isJsx, o as unwrapJsx, r as jsx, s as wrapCloneElement, t as getMeta, u as WobyCustomElementsRegistry, v as SYMBOL_STACK, y as wrapElement } from "/@fs/D:/Developments/tslib/@woby/woby/dist/runtime-xCjNPpZz.js";
import { $ as useRenderEffect, $t as disposed, A as isBoolean, At as SYMBOL_SUSPENSE_COLLECTOR, B as isPrimitive, Bt as readonly, C as assign$1, Ct as SYMBOL_CONTEXT, D as flatten, Dt as SYMBOL_JSX, E as fixBigInt, Et as SYMBOL_ISSLOT, F as isFunction, Ft as tick, G as isSVGElement, Ht as observable, I as isFunctionReactive, It as suspended, J as isTruthy, Jt as isStore, K as isString, L as isNil, Lt as store, M as isComponent, Mt as _with, N as isError, Nt as untracked, O as indexOf, Ot as SYMBOL_NO_SHADOW, P as isFalsy, Q as toArray, Qt as effect, R as isNode, Rt as selector, St as SYMBOL_CLONE, T as castError, Tt as SYMBOL_DEFAULT, Ut as isBatching, V as isPromise, Vt as isObservableWritable, W as isSVG, X as noop, Xt as get, Y as isVoidChild, Yt as suspense, Z as once, Zt as resolve, _ as DocumentContext, a as setClasses, an as SYMBOL_OBSERVABLE, b as useDocument, bt as DIRECTIVES, c as setProp, cn as SYMBOL_OBSERVABLE_WRITABLE, ct as createDocument, d as setRef, dn as SYMBOL_UNTRACKED, dt as createHTMLNode, en as context, et as useMicrotask, f as setStyles, fn as SYMBOL_UNTRACKED_UNWRAPPED, g as resolveArraysAndStatics, gn as callStack, hn as Stack, ht as Element$1, i as setChildReplacement, in as isObservable, it as createHTMLNode$1, j as isClass, jt as SYMBOL_TEMPLATE_ACCESSOR, k as isArray, kt as SYMBOL_SUSPENSE, l as setProperty, mn as DEBUGGER, n as setAttribute, nn as boolean, nt as FragmentUtils, o as setEvent, on as SYMBOL_OBSERVABLE_FROZEN, pn as batch, q as isTemplateAccessor, qt as untrack, r as setChild, rn as memo, s as setHTML, sn as SYMBOL_OBSERVABLE_READABLE, t as getSetters, tn as cleanup, un as SYMBOL_UNCACHED, v as EnvironmentContext, w as castArray, wt as SYMBOL_CONTEXT_WRAP, x as useEnvironment, xt as SYMBOLS_DIRECTIVES, y as showEnvLog, yt as CONTEXTS_DATA, z as isObject, zt as root } from "/@fs/D:/Developments/tslib/@woby/woby/dist/setters-CWXbz-OW.js";
import { A as Suspense, C as useAnimationLoop, D as useEventListener, E as useAbortController, M as If, N as For, O as Ternary, P as ErrorBoundary, S as useContext, T as useAbortSignal, _ as useInterval, a as HtmlHidden, b as useFetch, c as setPendingContextWrap, d as make, f as assign, g as usePromise, h as useTimeout, i as createContext, j as useResolved, k as Switch, l as HtmlChild, m as mark, n as hmr, o as consumePendingContextWrap, p as useMounted, r as createDirective, s as customElement, t as htm_module_default, u as defaults, v as useIdleLoop, w as useAnimationFrame, x as useResource, y as useIdleCallback } from "/@fs/D:/Developments/tslib/@woby/woby/dist/htm.module-ZBD0epUB.js";
//#region src/methods/is_server.ts
var IS_BROWSER = !!globalThis.CDATASection?.toString?.().match(/^\s*function\s+CDATASection\s*\(\s*\)\s*\{\s*\[native code\]\s*\}\s*$/);
var isServer = () => {
	return !IS_BROWSER;
};
//#endregion
//#region src/components/dynamic.ts
var Dynamic = ({ component, props: propsProp, children, ...restProps }) => {
	const env = useEnvironment();
	if (env === "ssr") {
		const finalProps = propsProp !== void 0 ? {
			...restProps,
			...get(propsProp)
		} : restProps;
		if (children !== void 0) finalProps.children = children;
		return resolve(createElement(isObservable(component) ? get(component) : component, finalProps));
	} else if (isFunction(component) || isFunction(propsProp)) return memo(() => {
		const finalProps = propsProp !== void 0 ? {
			...restProps,
			...get(propsProp)
		} : restProps;
		if (children !== void 0) finalProps.children = children;
		const comp = isObservable(component) ? get(component) : component;
		return EnvironmentContext.Provider(env, () => resolve(createElement(comp, finalProps)));
	});
	else return memo(() => {
		const finalProps = propsProp !== void 0 ? {
			...restProps,
			...get(propsProp)
		} : restProps;
		if (children !== void 0) finalProps.children = children;
		return EnvironmentContext.Provider(env, () => createElement(component, finalProps));
	});
};
//#endregion
//#region src/components/keep_alive.ts
var cache = {};
var runWithSuperRoot = _with();
var lockId = 1;
var MAX_CACHE_SIZE = 100;
var KeepAlive = ({ id, ttl, children }) => {
	return memo((stack) => {
		return useResolved([id, ttl], (id, ttl) => {
			const lock = lockId++;
			id in cache;
			const item = cache[id] ||= {
				id,
				lock
			};
			const cacheKeys = Object.keys(cache);
			if (cacheKeys.length > MAX_CACHE_SIZE) {
				const sortedKeys = cacheKeys.sort((a, b) => cache[a].lock - cache[b].lock);
				for (const key of sortedKeys) {
					if (cacheKeys.length <= MAX_CACHE_SIZE) break;
					if (key !== id && cache[key].dispose) cache[key].dispose();
				}
			}
			item.lock = lock;
			item.reset?.(stack);
			item.suspended ||= observable(false);
			item.suspended(false);
			if (!item.dispose || !item.result) runWithSuperRoot(() => {
				root((dispose) => {
					item.dispose = () => {
						delete cache[id];
						dispose();
					};
					suspense(item.suspended, () => {
						item.result = resolve(children);
					}, stack);
				});
			}, stack);
			cleanup(() => {
				const hasLock = () => lock === item.lock;
				if (!hasLock()) return;
				item.suspended?.(true);
				if (!ttl || ttl <= 0 || ttl >= Infinity) return;
				const dispose = () => hasLock() && item.dispose?.(stack);
				const timeoutId = setTimeout(dispose, ttl);
				const reset = () => clearTimeout(timeoutId);
				item.reset = reset;
			});
			return item.result;
		});
	});
};
//#endregion
//#region src/methods/render.ts
var render = (child, parent, options) => {
	if (!parent || !(parent instanceof HTMLElement || parent instanceof ShadowRoot)) throw new Error("Invalid parent node");
	return root((dispose) => {
		if (!options?.append) parent.textContent = "";
		const fragment = FragmentUtils.make();
		setChild(parent, child, fragment);
		return () => {
			if (options?.append) {
				const nodes = FragmentUtils.getChildrenFragmented(fragment);
				dispose();
				for (const node of nodes) try {
					parent.removeChild(node);
				} catch {}
			} else {
				dispose();
				parent.textContent = "";
			}
		};
	});
};
//#endregion
//#region src/components/portal.ts
var Portal = ({ when = true, mount, wrapper, children }) => {
	const isSSR = useEnvironment() === "ssr";
	const createHTMLNode$2 = isSSR ? createHTMLNode : createHTMLNode$1;
	const portal = get(wrapper) || createHTMLNode$2("div");
	if (isSSR) {
		if (!("appendChild" in portal)) throw new Error("Invalid wrapper node");
	} else if (!(portal instanceof HTMLElement)) throw new Error("Invalid wrapper node");
	const condition = boolean(when);
	const stack = /* @__PURE__ */ new Error();
	if (!isSSR) {
		useRenderEffect(() => {
			if (!get(condition)) return;
			const parent = get(mount) || document.body;
			if (isSSR) {
				if (!("appendChild" in parent)) throw new Error("Invalid mount node");
			} else if (!(parent instanceof Element)) throw new Error("Invalid mount node");
			parent.insertBefore(portal, null);
			return () => {
				parent.removeChild(portal);
			};
		}, stack);
		useRenderEffect(() => {
			if (!get(condition)) return;
			const disposeRender = render(children, portal);
			return () => {
				if (disposeRender) disposeRender();
			};
		}, stack);
	} else {
		const parent = get(mount) || createHTMLNode$2("div");
		if (wrapper) {
			let portal = get(wrapper);
			while (typeof portal === "function") portal = portal();
			setChild(portal, children, FragmentUtils.make(), stack);
			parent.appendChild(portal);
		} else setChild(parent, children, FragmentUtils.make(), stack);
		if (mount && parent.parentNode) {} else if (mount) createDocument().body.appendChild(parent);
	}
	return assign$1(() => get(condition) || children, { metadata: { portal } });
};
//#endregion
//#region src/methods/clone_element.ts
var cloneElement = (element, props, ...children) => {
	if (isPrimitive(element)) return element;
	else if (isFunction(element)) {
		if (!element[SYMBOL_CLONE]) throw new Error("target is not cloneable, it is not created by jsx.createElement");
		const { Component, props: oldProps } = element[SYMBOL_CLONE];
		const newProps = {
			...oldProps,
			...props
		};
		if (children.length > 0) Object.assign(props, { children });
		return wrapCloneElement(createElement(Component, newProps), Component, newProps);
	} else if (isArray(element)) return element.map((e) => cloneElement(e, props));
	else if (element.cloneNode) return element.cloneNode();
	throw new Error("Unknown element");
};
//#endregion
//#region src/methods/h.ts
function h(component, props, ...children) {
	if (children.length || isObject(props) && !isArray(props)) {
		if (!props) props = { children };
		else props = {
			...props,
			children
		};
		return createElement(component, props);
	} else return createElement(component, null, props);
}
//#endregion
//#region src/methods/html.ts
var registry = {};
var h$1 = (type, props, ...children) => createElement(registry[type] || type, props, ...children);
var register = (components) => void assign$1(registry, components);
var html = assign$1(htm_module_default.bind(h$1), { register });
//#endregion
//#region src/methods/lazy.ts
var lazy = (fetcher) => {
	const fetcherOnce = once(fetcher);
	const component = (props) => {
		const isSSR = useEnvironment() === "ssr";
		const resource = useResource(fetcherOnce);
		return memo(() => {
			return useResolved(resource, ({ pending, error, value }) => {
				if (pending) return;
				if (error) throw error;
				const component = "default" in value ? value.default : value;
				return resolve((isSSR ? createElement : createElement)(component, props));
			});
		});
	};
	component.preload = () => {
		return new Promise((resolve, reject) => {
			useResolved(useResource(fetcherOnce), ({ pending, error }) => {
				if (pending) return;
				if (error) return reject(error);
				return resolve();
			});
		});
	};
	return component;
};
//#endregion
//#region src/methods/template.ts
var template = (fn) => {
	const Element = useEnvironment() === "ssr" ? Element$1 : globalThis.Element;
	const safePropertyRe = /^[a-z0-9-_]+$/i;
	const checkValidProperty = (property) => {
		if (isString(property) && safePropertyRe.test(property)) return true;
		throw new Error(`Invalid property, only alphanumeric properties are allowed inside templates, received: "${property}"`);
	};
	const makeAccessor = (actionsWithNodes) => {
		return new Proxy({}, { get(target, prop) {
			checkValidProperty(prop);
			const accessor = (node, method, key, targetNode) => {
				if (key) checkValidProperty(key);
				actionsWithNodes.push([
					node,
					method,
					prop,
					key,
					targetNode
				]);
			};
			return assign$1(accessor, { [SYMBOL_TEMPLATE_ACCESSOR]: true });
		} });
	};
	const makeActionsWithNodesAndTemplate = () => {
		const actionsWithNodes = [];
		const component = fn(makeAccessor(actionsWithNodes));
		if (isFunction(component)) {
			const root = component();
			if (root instanceof Element) return {
				actionsWithNodes,
				root
			};
		}
		throw new Error("Invalid template, it must return a function that returns an Element");
	};
	const makeActionsWithPaths = (actionsWithNodes) => {
		const actionsWithPaths = [];
		for (let i = 0, l = actionsWithNodes.length; i < l; i++) {
			const [node, method, prop, key, targetNode] = actionsWithNodes[i];
			const nodePath = makeNodePath(node);
			const targetNodePath = targetNode ? makeNodePath(targetNode) : void 0;
			actionsWithPaths.push([
				nodePath,
				method,
				prop,
				key,
				targetNodePath
			]);
		}
		return actionsWithPaths;
	};
	const makeNodePath = (() => {
		let prevNode = null;
		let prevPath;
		return (node) => {
			if (node === prevNode) return prevPath;
			const path = [];
			let child = node;
			let parent = child.parentNode;
			while (parent) {
				const index = !child.previousSibling ? 0 : !child.nextSibling ? -0 : indexOf(parent.childNodes, child);
				path.push(index);
				child = parent;
				parent = parent.parentNode;
			}
			prevNode = node;
			prevPath = path;
			return path;
		};
	})();
	const makeNodePathProperties = (path) => {
		const properties = ["root"];
		const parts = path.slice().reverse();
		for (let i = 0, l = parts.length; i < l; i++) {
			const part = parts[i];
			if (Object.is(0, part)) properties.push("firstChild");
			else if (Object.is(-0, part)) properties.push("lastChild");
			else {
				properties.push("firstChild");
				for (let nsi = 0; nsi < part; nsi++) properties.push("nextSibling");
			}
		}
		return properties;
	};
	const makeReviverPaths = (actionsWithPaths) => {
		const paths = [];
		for (let i = 0, l = actionsWithPaths.length; i < l; i++) {
			const action = actionsWithPaths[i];
			const nodePath = action[0];
			const targetNodePath = action[4];
			paths.push(nodePath);
			if (targetNodePath) paths.push(targetNodePath);
		}
		return paths;
	};
	const makeReviverVariablesData = (paths, properties) => {
		const data = new Array(paths.length);
		for (let i = 0, l = paths.length; i < l; i++) data[i] = {
			path: paths[i],
			properties: properties[i]
		};
		return data;
	};
	const makeReviverVariables = (actionsWithPaths) => {
		const paths = makeReviverPaths(actionsWithPaths);
		const data = makeReviverVariablesData(paths, paths.map(makeNodePathProperties));
		const assignments = [];
		const map = /* @__PURE__ */ new Map();
		let variableId = 0;
		while (true) {
			const datum = data.find((datum) => datum.properties.length > 1);
			if (!datum) break;
			const [current, next] = datum.properties;
			const variable = `$${variableId++}`;
			const assignment = `const ${variable} = ${current}.${next};`;
			assignments.push(assignment);
			for (let i = 0, l = data.length; i < l; i++) {
				const datum = data[i];
				const [otherCurrent, otherNext] = datum.properties;
				if (otherCurrent !== current || otherNext !== next) continue;
				datum.properties[0] = variable;
				datum.properties.splice(1, 1);
			}
		}
		for (let i = 0, l = data.length; i < l; i++) {
			const datum = data[i];
			map.set(datum.path, datum.properties[0]);
		}
		return {
			assignments,
			map
		};
	};
	const makeReviverActions = (actionsWithPaths, variables) => {
		const actions = [];
		for (let i = 0, l = actionsWithPaths.length; i < l; i++) {
			const [nodePath, method, prop, key, targetNodePath] = actionsWithPaths[i];
			if (targetNodePath) actions.push(`this.${method} ( props["${prop}"], ${variables.get(targetNodePath)} );`);
			else if (key) actions.push(`this.${method} ( ${variables.get(nodePath)}, "${key}", props["${prop}"] );`);
			else actions.push(`this.${method} ( ${variables.get(nodePath)}, props["${prop}"] );`);
		}
		return actions;
	};
	const makeReviver = (actionsWithPaths) => {
		const { assignments, map } = makeReviverVariables(actionsWithPaths);
		const actions = makeReviverActions(actionsWithPaths, map);
		const fn = new Function("root", "props", `${assignments.join("")}${actions.join("")}return root;`);
		const apis = {
			setAttribute,
			setChildReplacement,
			setClasses,
			setEvent,
			setHTML,
			setProperty,
			setRef,
			setStyles
		};
		return fn.bind(apis);
	};
	const makeComponent = () => {
		const { actionsWithNodes, root } = makeActionsWithNodesAndTemplate();
		const reviver = makeReviver(makeActionsWithPaths(actionsWithNodes));
		return (props) => {
			const clone = root.cloneNode(true);
			return wrapElement(reviver.bind(void 0, clone, props));
		};
	};
	return makeComponent();
};
//#endregion
//#region src/methods/clone.ts
/**
* Creates a shallow or deep clone of an object.
* Preserves observable properties by creating new observables with the same values.
* 
* @param source d The object to clone
* @param deepClone d If true, performs deep cloning of nested objects
* @returns A cloned copy of the source object
* 
* @example
* ```tsx
* const original = { name: 'John', age: 30, active: $(true) }
* const shallowClone = clone(original)
* const deepClone = clone(original, true)
* ```
*/
var clone = (source, deepClone = false) => {
	if (isPrimitive(source)) return source;
	if (isFunction(source)) return source;
	if (isArray(source)) if (deepClone) return source.map((item) => clone(item, deepClone));
	else return source;
	const newObject = {};
	Object.keys(source).forEach((key) => {
		if (typeof source[key] === "function" && !isObservable(source[key])) newObject[key] = source[key];
		else if (isObservable(source[key]) && isObject(get(source[key])) && !isArray(get(source[key]))) newObject[key] = clone(get(source[key]));
		else if (isObservable(source[key])) newObject[key] = observable(get(source[key]));
		else if (isObject(get(source[key])) && deepClone) newObject[key] = clone(source[key]);
		else newObject[key] = source[key];
	});
	return newObject;
};
//#endregion
//#region src/html/html-boolean.ts
var is = (value) => value === "" || value === "true" || value === true;
var HtmlBoolean = {
	equals: (a, b) => is(a) === is(b),
	type: Boolean,
	toHtml: (value) => is(value) ? "" : void 0,
	fromHtml: (value) => is(value)
};
//#endregion
//#region src/html/html-number.ts
var toNumber = (value) => {
	if (value === void 0 || value === "") return NaN;
	if (typeof value === "number") return value;
	const num = Number(value);
	return isNaN(num) ? NaN : num;
};
var HtmlNumber = {
	equals: (a, b) => toNumber(a) === toNumber(b),
	type: Number,
	toHtml: (value) => {
		const num = toNumber(value);
		return isNaN(num) ? void 0 : String(num);
	},
	fromHtml: (value) => toNumber(value)
};
//#endregion
//#region src/html/html-date.ts
var toDate = (value) => {
	if (value === void 0 || value === "") return void 0;
	if (value instanceof Date) return isNaN(value.getTime()) ? void 0 : value;
	if (typeof value === "number") {
		const date = new Date(value);
		return isNaN(date.getTime()) ? void 0 : date;
	}
	if (typeof value === "string") {
		const timestamp = Date.parse(value);
		if (!isNaN(timestamp)) return new Date(timestamp);
		const numericTimestamp = Number(value);
		if (!isNaN(numericTimestamp)) {
			const date = new Date(numericTimestamp);
			if (!isNaN(date.getTime())) return date;
		}
		const date = new Date(value);
		return isNaN(date.getTime()) ? void 0 : date;
	}
	const date = new Date(value);
	return isNaN(date.getTime()) ? void 0 : date;
};
var HtmlDate = {
	equals: (a, b) => {
		const dateA = toDate(a);
		const dateB = toDate(b);
		return dateA === void 0 && dateB === void 0 || dateA !== void 0 && dateB !== void 0 && dateA.getTime() === dateB.getTime();
	},
	type: Date,
	toHtml: (value) => {
		const date = toDate(value);
		return date ? date.toISOString() : "";
	},
	fromHtml: (value) => toDate(value) || /* @__PURE__ */ new Date(NaN)
};
//#endregion
//#region src/html/html-bigint.ts
var toBigInt = (value) => {
	if (value === void 0 || value === "") return void 0;
	try {
		if (typeof value === "bigint") return value;
		if (typeof value === "number") {
			if (!Number.isInteger(value)) return void 0;
			return BigInt(value);
		}
		return BigInt(value);
	} catch {
		return;
	}
};
var HtmlBigInt = {
	equals: (a, b) => {
		const bigA = toBigInt(a);
		const bigB = toBigInt(b);
		return bigA === void 0 && bigB === void 0 || bigA !== void 0 && bigB !== void 0 && bigA === bigB;
	},
	type: "bigint",
	toHtml: (value) => {
		const big = toBigInt(value);
		return big ? big.toString() : void 0;
	},
	fromHtml: (value) => toBigInt(value) || BigInt(0)
};
//#endregion
//#region src/html/html-object.ts
var toObject = (value) => {
	if (value === void 0 || value === "") return void 0;
	if (typeof value !== "string") return value;
	try {
		return HtmlObject.JSON.parse(value);
	} catch {
		return;
	}
};
var HtmlObject = {
	/**
	* JSON implementation used for parsing and stringifying objects.
	* Consumers can replace this with alternative implementations like JSON5.
	*/
	JSON,
	equals: (a, b) => {
		const objA = toObject(a);
		const objB = toObject(b);
		return objA === void 0 && objB === void 0 || objA !== void 0 && objB !== void 0 && HtmlObject.JSON.stringify(objA) === HtmlObject.JSON.stringify(objB);
	},
	type: Object,
	toHtml: (value) => {
		const obj = toObject(value);
		try {
			return obj ? HtmlObject.JSON.stringify(obj) : void 0;
		} catch {
			return "";
		}
	},
	fromHtml: (value) => toObject(value) || {}
};
//#endregion
//#region src/html/html-length.ts
var parseCSSLength = (value) => {
	if (typeof value === "string" && value === "") return;
	if (typeof value === "object" && value !== null && "value" in value && "unit" in value) return {
		value: value.value,
		unit: value.unit,
		valueOf: () => `${value.value}${value.unit}`,
		toString: () => `${value.value}${value.unit}`
	};
	if (value === "auto" || value === "inherit" || value === "initial" || value === "unset") return value;
	if (typeof value === "undefined") return void 0;
	const match = value.match(/^(-?\d*\.?\d+)([a-zA-Z%]+)$/);
	if (match) {
		const [, num, unit] = match;
		const numericValue = parseFloat(num);
		return {
			value: numericValue,
			unit,
			valueOf: () => `${numericValue}${unit}`,
			toString: () => `${numericValue}${unit}`
		};
	}
	if (typeof value === "string" && /^-?\d*\.?\d+$/.test(value)) {
		const numericValue = parseFloat(value);
		return {
			value: numericValue,
			unit: "px",
			valueOf: () => `${numericValue}px`,
			toString: () => `${numericValue}px`
		};
	}
	return value;
};
var stringifyCSSLength = (value) => {
	if (typeof value === "string") return value;
	if (typeof value === "number") return `${value}px`;
	return `${value.value}${value.unit}`;
};
var HtmlLength = {
	equals: (a, b) => {
		const parsedA = parseCSSLength(a);
		const parsedB = parseCSSLength(b);
		if (typeof parsedA === "string" && typeof parsedB === "string") return parsedA === parsedB;
		if (typeof parsedA === "object" && typeof parsedB === "object") return parsedA.value === parsedB.value && parsedA.unit === parsedB.unit;
		return false;
	},
	type: Object,
	toHtml: (value) => {
		const parsed = parseCSSLength(value);
		if (parsed === void 0) return void 0;
		if (typeof parsed === "string" || typeof parsed === "number") return parsed;
		return stringifyCSSLength(parsed);
	},
	fromHtml: (value) => {
		if (typeof value !== "string") return value;
		return parseCSSLength(value);
	}
};
//#endregion
//#region src/html/html-box.ts
var parseCSSBox = (value) => {
	if (value === "") return;
	if (typeof value === "object" && value !== null && "top" in value && "right" in value && "bottom" in value && "left" in value) return {
		top: value.top,
		right: value.right,
		bottom: value.bottom,
		left: value.left,
		valueOf: () => `${value.top} ${value.right} ${value.bottom} ${value.left}`,
		toString: () => `${value.top} ${value.right} ${value.bottom} ${value.left}`
	};
	if (Array.isArray(value)) switch (value.length) {
		case 1: return {
			top: value[0],
			right: value[0],
			bottom: value[0],
			left: value[0],
			valueOf: () => `${value[0]}`,
			toString: () => `${value[0]}`
		};
		case 2: return {
			top: value[0],
			right: value[1],
			bottom: value[0],
			left: value[1],
			valueOf: () => `${value[0]} ${value[1]}`,
			toString: () => `${value[0]} ${value[1]}`
		};
		case 3: return {
			top: value[0],
			right: value[1],
			bottom: value[2],
			left: value[1],
			valueOf: () => `${value[0]} ${value[1]} ${value[2]}`,
			toString: () => `${value[0]} ${value[1]} ${value[2]}`
		};
		case 4: return {
			top: value[0],
			right: value[1],
			bottom: value[2],
			left: value[3],
			valueOf: () => `${value[0]} ${value[1]} ${value[2]} ${value[3]}`,
			toString: () => `${value[0]} ${value[1]} ${value[2]} ${value[3]}`
		};
	}
	if (typeof value === "string" || typeof value === "number") return {
		top: value,
		right: value,
		bottom: value,
		left: value,
		valueOf: () => `${value}`,
		toString: () => `${value}`
	};
	return {
		top: "0px",
		right: "0px",
		bottom: "0px",
		left: "0px",
		valueOf: () => "0px",
		toString: () => "0px"
	};
};
var HtmlBox = {
	equals: (a, b) => {
		const boxA = parseCSSBox(a);
		const boxB = parseCSSBox(b);
		if (boxA === void 0 || boxB === void 0) return boxA === boxB;
		return boxA.top === boxB.top && boxA.right === boxB.right && boxA.bottom === boxB.bottom && boxA.left === boxB.left;
	},
	type: Object,
	toHtml: (value) => {
		const box = parseCSSBox(value);
		if (box === void 0) return void 0;
		return box.toString();
	},
	fromHtml: (value) => {
		if (typeof value !== "string") return value;
		const parts = value.split(" ").filter((part) => part.length > 0);
		switch (parts.length) {
			case 1: return {
				top: parts[0],
				right: parts[0],
				bottom: parts[0],
				left: parts[0],
				valueOf: () => value,
				toString: () => value
			};
			case 2: return {
				top: parts[0],
				right: parts[1],
				bottom: parts[0],
				left: parts[1],
				valueOf: () => value,
				toString: () => value
			};
			case 3: return {
				top: parts[0],
				right: parts[1],
				bottom: parts[2],
				left: parts[1],
				valueOf: () => value,
				toString: () => value
			};
			case 4: return {
				top: parts[0],
				right: parts[1],
				bottom: parts[2],
				left: parts[3],
				valueOf: () => value,
				toString: () => value
			};
			default: return {
				top: "0px",
				right: "0px",
				bottom: "0px",
				left: "0px",
				valueOf: () => "0px",
				toString: () => "0px"
			};
		}
	}
};
//#endregion
//#region src/html/html-color.ts
var parseCSSColor = (value) => {
	if (value === "") return;
	if (typeof value === "object" && value !== null && "r" in value && "g" in value && "b" in value) return {
		r: value.r,
		g: value.g,
		b: value.b,
		valueOf: () => `#${Math.min(255, Math.max(0, value.r)).toString(16).padStart(2, "0")}${Math.min(255, Math.max(0, value.g)).toString(16).padStart(2, "0")}${Math.min(255, Math.max(0, value.b)).toString(16).padStart(2, "0")}`,
		toString: () => `#${Math.min(255, Math.max(0, value.r)).toString(16).padStart(2, "0")}${Math.min(255, Math.max(0, value.g)).toString(16).padStart(2, "0")}${Math.min(255, Math.max(0, value.b)).toString(16).padStart(2, "0")}`
	};
	if (typeof value === "string") {
		if (value.startsWith("#")) {
			const hex = value.slice(1);
			if (hex.length === 3) return {
				r: parseInt(hex[0] + hex[0], 16),
				g: parseInt(hex[1] + hex[1], 16),
				b: parseInt(hex[2] + hex[2], 16),
				valueOf: () => value,
				toString: () => value
			};
			else if (hex.length === 6) return {
				r: parseInt(hex.slice(0, 2), 16),
				g: parseInt(hex.slice(2, 4), 16),
				b: parseInt(hex.slice(4, 6), 16),
				valueOf: () => value,
				toString: () => value
			};
		}
		return value;
	}
	if (typeof value === "number") {
		const r = value >> 16 & 255;
		const g = value >> 8 & 255;
		const b = value & 255;
		const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
		return {
			r,
			g,
			b,
			valueOf: () => hex,
			toString: () => hex
		};
	}
	return String(value);
};
var stringifyCSSColor = (value) => {
	if (typeof value === "string") return value;
	return `#${Math.min(255, Math.max(0, value.r)).toString(16).padStart(2, "0")}${Math.min(255, Math.max(0, value.g)).toString(16).padStart(2, "0")}${Math.min(255, Math.max(0, value.b)).toString(16).padStart(2, "0")}`;
};
var HtmlColor = {
	equals: (a, b) => {
		const parsedA = parseCSSColor(a);
		const parsedB = parseCSSColor(b);
		if (typeof parsedA === "string" && typeof parsedB === "string") return parsedA === parsedB;
		if (typeof parsedA === "object" && typeof parsedB === "object" && "r" in parsedA && "r" in parsedB) return parsedA.r === parsedB.r && parsedA.g === parsedB.g && parsedA.b === parsedB.b;
		return false;
	},
	type: String,
	toHtml: (value) => {
		const parsed = parseCSSColor(value);
		if (parsed === void 0) return void 0;
		return stringifyCSSColor(parsed);
	},
	fromHtml: (value) => {
		return value;
	}
};
//#endregion
//#region src/html/html-style.ts
var toStyleObject = (value) => {
	if (value === void 0 || value === "") return void 0;
	if (typeof value === "object" && value !== null) return value;
	if (typeof value === "string") {
		if (value.trim() === "") return void 0;
		const style = {};
		const rules = value.split(";");
		for (const rule of rules) {
			const trimmedRule = rule.trim();
			if (trimmedRule) {
				const colonIndex = trimmedRule.indexOf(":");
				if (colonIndex > 0) {
					const property = trimmedRule.substring(0, colonIndex).trim();
					const value = trimmedRule.substring(colonIndex + 1).trim();
					if (property && value) {
						const camelCaseProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
						style[camelCaseProperty] = value;
					}
				}
			}
		}
		return Object.keys(style).length > 0 ? style : void 0;
	}
};
var stringifyStyleObject = (value) => {
	if (value === void 0 || value === null) return "";
	const cssRules = [];
	for (const [property, val] of Object.entries(value)) if (property && val !== void 0 && val !== null) {
		const kebabCaseProperty = property.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
		cssRules.push(`${kebabCaseProperty}: ${val}`);
	}
	return cssRules.join("; ");
};
var HtmlStyle = {
	equals: (a, b) => {
		const styleA = toStyleObject(a);
		const styleB = toStyleObject(b);
		if (styleA === void 0 && styleB === void 0) return true;
		if (styleA === void 0 || styleB === void 0) return false;
		return stringifyStyleObject(styleA) === stringifyStyleObject(styleB);
	},
	type: Object,
	toHtml: (value) => {
		return stringifyStyleObject(toStyleObject(value));
	},
	fromHtml: (value) => {
		return toStyleObject(value) || {};
	}
};
//#endregion
//#region src/html/html-string.ts
var toString = (value) => {
	if (value === null || value === void 0) return "";
	return String(value);
};
var HtmlString = {
	equals: (a, b) => toString(a) === toString(b),
	type: String,
	toHtml: (value) => toString(value),
	fromHtml: (value) => toString(value)
};
//#endregion
//#region src/html/html-function.ts
var toFunctionString = (value) => {
	if (value === null || value === void 0) return void 0;
};
var HtmlFunction = {
	equals: (a, b) => {
		return a === b;
	},
	type: [Function],
	toHtml: (value) => {
		return toFunctionString(value);
	},
	fromHtml: (value) => {}
};
//#endregion
//#region src/html/html-class.ts
var toClassString = (value) => {
	if (value === null || value === void 0) return "";
	if (typeof value === "string") return value;
	if (typeof value === "number") return String(value);
	if (typeof value === "boolean") return value ? "" : "";
	if (typeof value === "function") try {
		return toClassString(value());
	} catch {
		return "";
	}
	if (Array.isArray(value)) return value.map(toClassString).filter(Boolean).join(" ");
	if (typeof value === "object") return Object.entries(value).filter(([key, val]) => {
		try {
			return (typeof val === "function" ? val() : val) === true;
		} catch {
			return false;
		}
	}).map(([key]) => key).join(" ");
	return "";
};
var HtmlClass = {
	equals: (a, b) => toClassString(a) === toClassString(b),
	type: String,
	toHtml: (value) => toClassString(value),
	fromHtml: (value) => value
};
//#endregion
//#region src/index.ts
var ObservableSymbol = SYMBOL_OBSERVABLE;
//#endregion
export { observable as $, get as $$, CONTEXTS_DATA, DEBUGGER, DIRECTIVES, DocumentContext, Dynamic, EnvironmentContext, ErrorBoundary, For, Fragment, FragmentUtils, HtmlBigInt, HtmlBoolean, HtmlBox, HtmlChild, HtmlClass, HtmlColor, HtmlDate, HtmlFunction, HtmlHidden, HtmlLength, HtmlNumber, HtmlObject, HtmlString, HtmlStyle, If, types_exports as JSX, KeepAlive, ObservableSymbol, Portal, SYMBOLS_DIRECTIVES, SYMBOL_CLONE, SYMBOL_CONTEXT, SYMBOL_CONTEXT_WRAP, SYMBOL_DEFAULT, SYMBOL_ISSLOT, SYMBOL_JSX, SYMBOL_NO_SHADOW, SYMBOL_OBSERVABLE, SYMBOL_OBSERVABLE_FROZEN, SYMBOL_OBSERVABLE_READABLE, SYMBOL_OBSERVABLE_WRITABLE, SYMBOL_STACK, SYMBOL_SUSPENSE, SYMBOL_SUSPENSE_COLLECTOR, SYMBOL_TEMPLATE_ACCESSOR, SYMBOL_UNCACHED, SYMBOL_UNTRACKED, SYMBOL_UNTRACKED_UNWRAPPED, Stack, Suspense, Switch, Ternary, WobyCustomElementsRegistry, assign, batch, callStack, castArray, castError, clone, cloneElement, consumePendingContextWrap, context, createContext, createDirective, createDocument, createElement, customElement, defaults, fixBigInt, flatten, getMeta, getSetters, h, hmr, html, indexOf, isArray, isBatching, isBoolean, isClass, isComponent, isError, isFalsy, isFunction, isFunctionReactive, isJsx, isNil, isNode, isObject, isObservable, isObservableWritable, isPrimitive, isPromise, isSVG, isSVGElement, isServer, isStore, isString, isTemplateAccessor, isTruthy, isVoidChild, jsx, jsxDEV, jsxs, lazy, make, mark, noop, once, render, renderToString, resolve, resolveArraysAndStatics, setPendingContextWrap, setProp, setRef, showEnvLog, ssr_exports as ssr, store, template, tick, toArray, untrack, unwrapJsx, useAbortController, useAbortSignal, useAnimationFrame, useAnimationLoop, boolean as useBoolean, cleanup as useCleanup, useContext, disposed as useDisposed, useDocument, effect as useEffect, useEnvironment, useEventListener, useFetch, useIdleCallback, useIdleLoop, useInterval, memo as useMemo, useMicrotask, useMounted, usePromise, readonly as useReadonly, useResolved, useResource, root as useRoot, selector as useSelector, suspended as useSuspended, suspense as useSuspense, useTimeout, untracked as useUntracked, wobyCustomElements, wrapCloneElement };

                                    
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vc3JjL21ldGhvZHMvaXNfc2VydmVyLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvZHluYW1pYy50cyIsIi4uL3NyYy9jb21wb25lbnRzL2tlZXBfYWxpdmUudHMiLCIuLi9zcmMvbWV0aG9kcy9yZW5kZXIudHMiLCIuLi9zcmMvY29tcG9uZW50cy9wb3J0YWwudHMiLCIuLi9zcmMvbWV0aG9kcy9jbG9uZV9lbGVtZW50LnRzIiwiLi4vc3JjL21ldGhvZHMvaC50cyIsIi4uL3NyYy9tZXRob2RzL2h0bWwudHMiLCIuLi9zcmMvbWV0aG9kcy9sYXp5LnRzIiwiLi4vc3JjL21ldGhvZHMvdGVtcGxhdGUudHMiLCIuLi9zcmMvbWV0aG9kcy9jbG9uZS50cyIsIi4uL3NyYy9odG1sL2h0bWwtYm9vbGVhbi50cyIsIi4uL3NyYy9odG1sL2h0bWwtbnVtYmVyLnRzIiwiLi4vc3JjL2h0bWwvaHRtbC1kYXRlLnRzIiwiLi4vc3JjL2h0bWwvaHRtbC1iaWdpbnQudHMiLCIuLi9zcmMvaHRtbC9odG1sLW9iamVjdC50cyIsIi4uL3NyYy9odG1sL2h0bWwtbGVuZ3RoLnRzIiwiLi4vc3JjL2h0bWwvaHRtbC1ib3gudHMiLCIuLi9zcmMvaHRtbC9odG1sLWNvbG9yLnRzIiwiLi4vc3JjL2h0bWwvaHRtbC1zdHlsZS50cyIsIi4uL3NyYy9odG1sL2h0bWwtc3RyaW5nLnRzIiwiLi4vc3JjL2h0bWwvaHRtbC1mdW5jdGlvbi50cyIsIi4uL3NyYy9odG1sL2h0bWwtY2xhc3MudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIEhFTFBFUlMgKi9cclxuXHJcbmNvbnN0IElTX0JST1dTRVIgPSAhIWdsb2JhbFRoaXMuQ0RBVEFTZWN0aW9uPy50b1N0cmluZz8uKCkubWF0Y2goL15cXHMqZnVuY3Rpb25cXHMrQ0RBVEFTZWN0aW9uXFxzKlxcKFxccypcXClcXHMqXFx7XFxzKlxcW25hdGl2ZSBjb2RlXFxdXFxzKlxcfVxccyokLylcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXNTZXJ2ZXIgPSAoKTogYm9vbGVhbiA9PiB7XHJcblxyXG4gIHJldHVybiAhSVNfQlJPV1NFUlxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAnLi4vaG9va3Mvc29ieSdcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL21ldGhvZHMvY3JlYXRlX2VsZW1lbnQnXHJcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgcmVzb2x2ZSB9IGZyb20gJy4uL21ldGhvZHMvc29ieSdcclxuaW1wb3J0IHsgJCQgfSBmcm9tICcuLi9tZXRob2RzL3NvYnknXHJcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy9sYW5nJ1xyXG5pbXBvcnQgdHlwZSB7IENoaWxkLCBDb21wb25lbnQsIEZ1bmN0aW9uTWF5YmUsIE9ic2VydmFibGVNYXliZSB9IGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudENvbnRleHQsIHVzZUVudmlyb25tZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9lbnZpcm9ubWVudF9jb250ZXh0J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEeW5hbWljID0gPFAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge30+KHsgY29tcG9uZW50LCBwcm9wczogcHJvcHNQcm9wLCBjaGlsZHJlbiwgLi4ucmVzdFByb3BzIH06IHsgY29tcG9uZW50OiBPYnNlcnZhYmxlTWF5YmU8Q29tcG9uZW50PFA+IHwgc3RyaW5nPiwgcHJvcHM/OiBGdW5jdGlvbk1heWJlPFA+LCBjaGlsZHJlbj86IENoaWxkIH0gJiBPbWl0PFAsICdwcm9wcycgfCAnY2hpbGRyZW4nPiAmIFJlY29yZDxzdHJpbmcsIGFueT4pOiBDaGlsZCA9PiB7XHJcbiAgICBjb25zdCBlbnYgPSB1c2VFbnZpcm9ubWVudCgpXHJcbiAgICBjb25zdCBpc1NTUiA9IGVudiA9PT0gJ3NzcidcclxuXHJcbiAgICBpZiAoaXNTU1IpIHtcclxuICAgICAgICBjb25zdCBmaW5hbFByb3BzID0gcHJvcHNQcm9wICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyB7IC4uLnJlc3RQcm9wcywgLi4uJCQocHJvcHNQcm9wIGFzIGFueSkgfVxyXG4gICAgICAgICAgICA6IHJlc3RQcm9wc1xyXG5cclxuICAgICAgICAvLyBBZGQgY2hpbGRyZW4gdG8gcHJvcHMgaWYgcHJvdmlkZWRcclxuICAgICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmaW5hbFByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW4gYXMgYW55XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb21wID0gaXNPYnNlcnZhYmxlKGNvbXBvbmVudCkgPyAkJChjb21wb25lbnQpIDogY29tcG9uZW50XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ8UD4oY29tcCBhcyBDb21wb25lbnQ8UD4sIGZpbmFsUHJvcHMgYXMgUClcclxuICAgICAgICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmUoZWxlbWVudClcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZWQgYXMgYW55XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oY29tcG9uZW50KSB8fCBpc0Z1bmN0aW9uKHByb3BzUHJvcCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcmVzdFByb3BzIHdpdGggcmVzb2x2ZWQgcHJvcHNQcm9wXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5hbFByb3BzID0gcHJvcHNQcm9wICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHsgLi4ucmVzdFByb3BzLCAuLi4kJChwcm9wc1Byb3AgYXMgYW55KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiByZXN0UHJvcHNcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgY2hpbGRyZW4gdG8gcHJvcHMgaWYgcHJvdmlkZWRcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxQcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuIGFzIGFueVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXAgPSBpc09ic2VydmFibGUoY29tcG9uZW50KSA/ICQkKGNvbXBvbmVudCkgOiBjb21wb25lbnRcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRW52aXJvbm1lbnRDb250ZXh0LlByb3ZpZGVyKGVudiwgKCkgPT4gcmVzb2x2ZShjcmVhdGVFbGVtZW50PFA+KGNvbXAgYXMgQ29tcG9uZW50PFA+LCBmaW5hbFByb3BzIGFzIFApKSlcclxuICAgICAgICAgICAgfSkgYXMgYW55XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZvciBzdHJpbmcgY29tcG9uZW50cyAobGlrZSBcImg1XCIsIFwiZGl2XCIsIGV0Yy4pLCB3ZSBuZWVkIHRvIG1ha2UgaXQgcmVhY3RpdmVcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcmVzdFByb3BzIHdpdGggcmVzb2x2ZWQgcHJvcHNQcm9wXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5hbFByb3BzID0gcHJvcHNQcm9wICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHsgLi4ucmVzdFByb3BzLCAuLi4kJChwcm9wc1Byb3AgYXMgYW55KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiByZXN0UHJvcHNcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgY2hpbGRyZW4gdG8gcHJvcHMgaWYgcHJvdmlkZWRcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxQcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuIGFzIGFueVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBFbnZpcm9ubWVudENvbnRleHQuUHJvdmlkZXIoZW52LCAoKSA9PiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIGZpbmFsUHJvcHMgYXMgYW55KSlcclxuICAgICAgICAgICAgfSkgYXMgYW55XHJcblxyXG4gICAgICAgIH1cclxuXHJcbn0iLCJcblxuaW1wb3J0IHsgdXNlQ2xlYW51cCB9IGZyb20gJy4uL2hvb2tzL3NvYnknXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAnLi4vaG9va3Mvc29ieSdcbmltcG9ydCB7IHVzZVJlc29sdmVkIH0gZnJvbSAnLi4vaG9va3MvdXNlX3Jlc29sdmVkJ1xuaW1wb3J0IHsgdXNlUm9vdCB9IGZyb20gJy4uL2hvb2tzL3NvYnknXG5pbXBvcnQgeyB1c2VTdXNwZW5zZSB9IGZyb20gJy4uL2hvb2tzL3NvYnknXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnLi4vbWV0aG9kcy9zb2J5J1xuaW1wb3J0IHsgJCB9IGZyb20gJy4uL21ldGhvZHMvc29ieSdcbmltcG9ydCB7IHdpdGggYXMgX3dpdGggfSBmcm9tICdzb2J5J1xuaW1wb3J0IHR5cGUgeyBDaGlsZCwgRGlzcG9zZXIsIEZ1bmN0aW9uTWF5YmUsIE9ic2VydmFibGUsIE9ic2VydmFibGVSZWFkb25seSB9IGZyb20gJy4uL3R5cGVzJ1xuXG4vKiBUWVBFUyAqL1xuXG50eXBlIEl0ZW0gPSB7XG4gIGlkOiBzdHJpbmcsXG4gIGxvY2s6IG51bWJlcixcbiAgcmVzdWx0PzogQ2hpbGQsXG4gIHN1c3BlbmRlZD86IE9ic2VydmFibGU8Ym9vbGVhbj4sXG4gIGRpc3Bvc2U/OiBEaXNwb3NlcixcbiAgcmVzZXQ/OiBEaXNwb3NlclxufVxuXG4vKiBIRUxQRVJTICovXG5cbmNvbnN0IGNhY2hlOiBSZWNvcmQ8c3RyaW5nLCBJdGVtPiA9IHt9XG5jb25zdCBydW5XaXRoU3VwZXJSb290ID0gX3dpdGgoKVxuXG5sZXQgbG9ja0lkID0gMVxuY29uc3QgTUFYX0NBQ0hFX1NJWkUgPSAxMDAgLy8gTWF4aW11bSBudW1iZXIgb2YgY2FjaGVkIGl0ZW1zIHRvIHByZXZlbnQgdW5ib3VuZGVkIGdyb3d0aFxuXG5cbi8vVE9ETzogU3VwcG9ydCBob3Qtc3dhcHBpbmcgb3duZXIgYW5kIGNvbnRleHQsIHRvIG1ha2UgdGhlIGNvbnRleHQgSnVzdFdvcmvihKJcblxuZXhwb3J0IGNvbnN0IEtlZXBBbGl2ZSA9ICh7IGlkLCB0dGwsIGNoaWxkcmVuIH06IHsgaWQ6IEZ1bmN0aW9uTWF5YmU8c3RyaW5nPiwgdHRsPzogRnVuY3Rpb25NYXliZTxudW1iZXI+LCBjaGlsZHJlbjogQ2hpbGQgfSk6IE9ic2VydmFibGVSZWFkb25seTxDaGlsZD4gPT4ge1xuXG4gIHJldHVybiB1c2VNZW1vKChzdGFjaykgPT4ge1xuXG4gICAgcmV0dXJuIHVzZVJlc29sdmVkKFtpZCwgdHRsXSwgKGlkLCB0dGwpID0+IHtcblxuICAgICAgY29uc3QgbG9jayA9IGxvY2tJZCsrXG4gICAgICBjb25zdCBpc05ldyA9ICEoaWQgaW4gY2FjaGUpXG4gICAgICBjb25zdCBpdGVtID0gY2FjaGVbaWRdIHx8PSB7IGlkLCBsb2NrIH1cblxuICAgICAgLy8gQ1ItMDUgRklYOiBFbmZvcmNlIGNhY2hlIHNpemUgbGltaXQgb24gRVZFUlkgYWNjZXNzLCBub3QganVzdCBuZXcgZW50cmllc1xuICAgICAgLy8gVGhpcyBwcmV2ZW50cyB1bmJvdW5kZWQgY2FjaGUgZ3Jvd3RoIHdoZW4gdGhlIHNhbWUgc2V0IG9mIElEcyBpcyByZXBlYXRlZGx5IGFjY2Vzc2VkXG4gICAgICBjb25zdCBjYWNoZUtleXMgPSBPYmplY3Qua2V5cyhjYWNoZSlcbiAgICAgIGlmIChjYWNoZUtleXMubGVuZ3RoID4gTUFYX0NBQ0hFX1NJWkUpIHtcbiAgICAgICAgY29uc3Qgc29ydGVkS2V5cyA9IGNhY2hlS2V5cy5zb3J0KChhLCBiKSA9PiBjYWNoZVthXS5sb2NrIC0gY2FjaGVbYl0ubG9jaylcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygc29ydGVkS2V5cykge1xuICAgICAgICAgIGlmIChjYWNoZUtleXMubGVuZ3RoIDw9IE1BWF9DQUNIRV9TSVpFKSBicmVha1xuICAgICAgICAgIGlmIChrZXkgIT09IGlkICYmIGNhY2hlW2tleV0uZGlzcG9zZSkge1xuICAgICAgICAgICAgY2FjaGVba2V5XS5kaXNwb3NlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaXRlbS5sb2NrID0gbG9ja1xuICAgICAgaXRlbS5yZXNldD8uKHN0YWNrKVxuICAgICAgaXRlbS5zdXNwZW5kZWQgfHw9ICQoZmFsc2UpXG4gICAgICBpdGVtLnN1c3BlbmRlZChmYWxzZSlcblxuICAgICAgaWYgKCFpdGVtLmRpc3Bvc2UgfHwgIWl0ZW0ucmVzdWx0KSB7XG5cbiAgICAgICAgcnVuV2l0aFN1cGVyUm9vdCgoKSA9PiB7XG5cbiAgICAgICAgICB1c2VSb290KChkaXNwb3NlKSA9PiB7XG5cbiAgICAgICAgICAgIGl0ZW0uZGlzcG9zZSA9ICgpID0+IHtcblxuICAgICAgICAgICAgICBkZWxldGUgY2FjaGVbaWRdXG5cbiAgICAgICAgICAgICAgZGlzcG9zZSgpXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlU3VzcGVuc2UoaXRlbS5zdXNwZW5kZWQsICgpID0+IHtcblxuICAgICAgICAgICAgICBpdGVtLnJlc3VsdCA9IHJlc29sdmUoY2hpbGRyZW4pXG5cbiAgICAgICAgICAgIH0sIHN0YWNrKVxuXG4gICAgICAgICAgfSlcblxuICAgICAgICB9LCBzdGFjaylcblxuICAgICAgfVxuXG4gICAgICB1c2VDbGVhbnVwKCgpID0+IHtcblxuICAgICAgICBjb25zdCBoYXNMb2NrID0gKCkgPT4gbG9jayA9PT0gaXRlbS5sb2NrXG5cbiAgICAgICAgaWYgKCFoYXNMb2NrKCkpIHJldHVyblxuXG4gICAgICAgIGl0ZW0uc3VzcGVuZGVkPy4odHJ1ZSlcblxuICAgICAgICBpZiAoIXR0bCB8fCB0dGwgPD0gMCB8fCB0dGwgPj0gSW5maW5pdHkpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IGRpc3Bvc2UgPSAoKSA9PiBoYXNMb2NrKCkgJiYgaXRlbS5kaXNwb3NlPy4oc3RhY2spXG4gICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZGlzcG9zZSwgdHRsKVxuICAgICAgICBjb25zdCByZXNldCA9ICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXG5cbiAgICAgICAgaXRlbS5yZXNldCA9IHJlc2V0XG5cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBpdGVtLnJlc3VsdFxuXG4gICAgfSlcblxuICB9KVxuXG59IiwiaW1wb3J0IHsgdXNlUm9vdCB9IGZyb20gJy4uL2hvb2tzL3NvYnknXG5pbXBvcnQgeyBzZXRDaGlsZCB9IGZyb20gJy4uL3V0aWxzL3NldHRlcnMnXG5pbXBvcnQgdHlwZSB7IENoaWxkLCBEaXNwb3NlciB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgRnJhZ21lbnRVdGlscyB9IGZyb20gJy4uL3V0aWxzL2ZyYWdtZW50J1xuXG5cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAoY2hpbGQ6IENoaWxkLCBwYXJlbnQ/OiBFbGVtZW50IHwgbnVsbCB8IFNoYWRvd1Jvb3QsIG9wdGlvbnM/OiB7IGFwcGVuZD86IGJvb2xlYW4gfSk6IERpc3Bvc2VyID0+IHtcbiAgICBpZiAoIXBhcmVudCB8fCAhKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHBhcmVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFyZW50IG5vZGUnKVxuXG4gICAgcmV0dXJuIHVzZVJvb3QoKGRpc3Bvc2UpID0+IHtcbiAgICAgICAgaWYgKCFvcHRpb25zPy5hcHBlbmQpIHtcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgbW9kZTogY2xlYXIgZXhpc3RpbmcgY29udGVudCBmaXJzdFxuICAgICAgICAgICAgcGFyZW50LnRleHRDb250ZW50ID0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyYWNrIHRoZSBmcmFnbWVudCBzbyBkaXNwb3NlKCkgY2FuIHJlbW92ZSBvbmx5IG91ciBub2RlcyAoaW1wb3J0YW50IGZvciBhcHBlbmQgbW9kZSlcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBGcmFnbWVudFV0aWxzLm1ha2UoKVxuICAgICAgICBzZXRDaGlsZChwYXJlbnQsIGNoaWxkLCBmcmFnbWVudClcblxuICAgICAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnM/LmFwcGVuZCkge1xuICAgICAgICAgICAgICAgIC8vIENhcHR1cmUgbm9kZXMgQkVGT1JFIGRpc3Bvc2UgdGVhcnMgZG93biByZWFjdGl2aXR5ICh3aGljaCBtYXkgY2xlYXIgZnJhZ21lbnQpXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBGcmFnbWVudFV0aWxzLmdldENoaWxkcmVuRnJhZ21lbnRlZChmcmFnbWVudClcbiAgICAgICAgICAgICAgICBkaXNwb3NlKClcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHsgcGFyZW50LnJlbW92ZUNoaWxkKG5vZGUgYXMgTm9kZSkgfSBjYXRjaCB7IC8qIGFscmVhZHkgcmVtb3ZlZCAqLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwb3NlKClcbiAgICAgICAgICAgICAgICBwYXJlbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KVxufSIsImltcG9ydCB7IHVzZUJvb2xlYW4gfSBmcm9tICcuLi9ob29rcy9zb2J5J1xuaW1wb3J0IHsgdXNlUmVuZGVyRWZmZWN0IH0gZnJvbSAnLi4vaG9va3MvdXNlX3JlbmRlcl9lZmZlY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuLi9tZXRob2RzL3JlbmRlcidcbmltcG9ydCB7ICQkIH0gZnJvbSAnLi4vbWV0aG9kcy9zb2J5J1xuaW1wb3J0IHsgY3JlYXRlSFRNTE5vZGUgYXMgY3JlYXRlSFRNTE5vZGVET00gfSBmcm9tICcuLi91dGlscy9jcmVhdG9ycydcbmltcG9ydCB7IGNyZWF0ZURvY3VtZW50LCBjcmVhdGVIVE1MTm9kZSBhcyBjcmVhdGVIVE1MTm9kZVNTUiB9IGZyb20gJy4uL3NzcidcbmltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4uL3V0aWxzL2xhbmcnXG5pbXBvcnQgdHlwZSB7IENoaWxkLCBDaGlsZFdpdGhNZXRhZGF0YSwgRnVuY3Rpb25NYXliZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgdXNlRW52aXJvbm1lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Vudmlyb25tZW50X2NvbnRleHQnXG5pbXBvcnQgeyBzZXRDaGlsZCB9IGZyb20gJy4uL3V0aWxzL3NldHRlcnMnXG5pbXBvcnQgeyBGcmFnbWVudFV0aWxzIH0gZnJvbSAnLi4vdXRpbHMvZnJhZ21lbnQnXG5cblxuZXhwb3J0IGNvbnN0IFBvcnRhbCA9ICh7IHdoZW4gPSB0cnVlLCBtb3VudCwgd3JhcHBlciwgY2hpbGRyZW4gfTogeyBtb3VudD86IENoaWxkLCB3aGVuPzogRnVuY3Rpb25NYXliZTxib29sZWFuPiwgd3JhcHBlcj86IENoaWxkLCBjaGlsZHJlbj86IENoaWxkIH0pOiBDaGlsZFdpdGhNZXRhZGF0YTx7IHBvcnRhbDogSFRNTEVsZW1lbnQgfT4gPT4ge1xuICAgIGNvbnN0IGlzU1NSID0gdXNlRW52aXJvbm1lbnQoKSA9PT0gJ3NzcidcblxuICAgIGNvbnN0IGNyZWF0ZUhUTUxOb2RlID0gaXNTU1IgPyBjcmVhdGVIVE1MTm9kZVNTUiA6IGNyZWF0ZUhUTUxOb2RlRE9NXG4gICAgY29uc3QgcG9ydGFsID0gJCQod3JhcHBlcikgfHwgY3JlYXRlSFRNTE5vZGUoJ2RpdicpXG5cbiAgICAvLyBVc2UgZGlmZmVyZW50IHZhbGlkYXRpb24gYmFzZWQgb24gZW52aXJvbm1lbnRcbiAgICBpZiAoaXNTU1IpIHtcbiAgICAgICAgaWYgKCEoJ2FwcGVuZENoaWxkJyBpbiAocG9ydGFsIGFzIEhUTUxFbGVtZW50KSkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB3cmFwcGVyIG5vZGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghKHBvcnRhbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHdyYXBwZXIgbm9kZScpXG4gICAgfVxuXG4gICAgY29uc3QgY29uZGl0aW9uID0gdXNlQm9vbGVhbih3aGVuKVxuXG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKVxuXG4gICAgaWYgKCFpc1NTUikge1xuICAgICAgICB1c2VSZW5kZXJFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoISQkKGNvbmRpdGlvbikpIHJldHVyblxuXG4gICAgICAgICAgICAvLyBVc2UgZGlmZmVyZW50IHBhcmVudCBzZWxlY3Rpb24gYmFzZWQgb24gZW52aXJvbm1lbnRcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudDogYW55ID0gKCQkKG1vdW50KSB8fCBkb2N1bWVudC5ib2R5KVxuXG4gICAgICAgICAgICAvLyBVc2UgZGlmZmVyZW50IHZhbGlkYXRpb24gYmFzZWQgb24gZW52aXJvbm1lbnRcbiAgICAgICAgICAgIGlmIChpc1NTUikge1xuICAgICAgICAgICAgICAgIGlmICghKCdhcHBlbmRDaGlsZCcgaW4gKHBhcmVudCBhcyBIVE1MRWxlbWVudCkpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbW91bnQgbm9kZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghKHBhcmVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbW91bnQgbm9kZScpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocG9ydGFsLCBudWxsKVxuXG4gICAgICAgICAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuXG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBvcnRhbClcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIHN0YWNrKVxuXG4gICAgICAgIHVzZVJlbmRlckVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICghJCQoY29uZGl0aW9uKSkgcmV0dXJuXG5cbiAgICAgICAgICAgIC8vIEluIFNTUiBtb2RlLCB3ZSBkb24ndCBwYXNzIHRoZSBwb3J0YWwgdG8gYXZvaWQgaXNzdWVzXG4gICAgICAgICAgICBjb25zdCBkaXNwb3NlUmVuZGVyID0gcmVuZGVyKGNoaWxkcmVuLCBwb3J0YWwgYXMgRWxlbWVudClcblxuICAgICAgICAgICAgcmV0dXJuICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzcG9zZVJlbmRlcikgZGlzcG9zZVJlbmRlcigpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgc3RhY2spXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBTU1IgbW9kZTogcmVuZGVyIGNoaWxkcmVuIGRpcmVjdGx5IHRvIHBhcmVudFxuICAgICAgICBjb25zdCBwYXJlbnQ6IGFueSA9ICgkJChtb3VudCkgYXMgYW55IHx8IGNyZWF0ZUhUTUxOb2RlKCdkaXYnKSlcblxuICAgICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICAgICAgLy8gSWYgd3JhcHBlciBpcyBwcm92aWRlZCwgdXNlIGl0XG4gICAgICAgICAgICBsZXQgcG9ydGFsOiBhbnkgPSAkJCh3cmFwcGVyKVxuICAgICAgICAgICAgLy8gVW53cmFwIGlmIGl0J3MgYSBmdW5jdGlvblxuICAgICAgICAgICAgd2hpbGUgKHR5cGVvZiBwb3J0YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwb3J0YWwgPSBwb3J0YWwoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW5kZXIgY2hpbGRyZW4gdG8gdGhlIHBvcnRhbCBlbGVtZW50XG4gICAgICAgICAgICBzZXRDaGlsZChwb3J0YWwsIGNoaWxkcmVuLCBGcmFnbWVudFV0aWxzLm1ha2UoKSwgc3RhY2spXG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgcG9ydGFsICh3aXRoIGNoaWxkcmVuKSB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocG9ydGFsKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gd3JhcHBlciAtIHJlbmRlciBjaGlsZHJlbiBkaXJlY3RseSB0byBwYXJlbnRcbiAgICAgICAgICAgIHNldENoaWxkKHBhcmVudCwgY2hpbGRyZW4sIEZyYWdtZW50VXRpbHMubWFrZSgpLCBzdGFjaylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dGFjaCB0aGUgcGFyZW50IHRvIGRvY3VtZW50IGJvZHkgc28gaXQncyBpbmNsdWRlZCBpbiBTU1Igb3V0cHV0XG4gICAgICAgIGlmIChtb3VudCAmJiBwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgLy8gQ29udGFpbmVyIGFscmVhZHkgYXR0YWNoZWQgdG8gZG9jdW1lbnQsIG5vIG5lZWQgdG8gcmUtYXBwZW5kXG4gICAgICAgIH0gZWxzZSBpZiAobW91bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvYyA9IGNyZWF0ZURvY3VtZW50KClcbiAgICAgICAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKHBhcmVudClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhc3NpZ24oKCkgPT4gJCQoY29uZGl0aW9uKSB8fCBjaGlsZHJlbiwgeyBtZXRhZGF0YTogeyBwb3J0YWw6IHBvcnRhbCBhcyBIVE1MRWxlbWVudCB9IH0pXG59IiwiaW1wb3J0IHR5cGUgeyBDaGlsZCwgUHJvcHMgfSBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0IHsgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNQcmltaXRpdmUgfSBmcm9tICcuLi91dGlscy9sYW5nJ1xyXG5pbXBvcnQgeyBTWU1CT0xfQ0xPTkUgfSBmcm9tICcuLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi9tZXRob2RzL2NyZWF0ZV9lbGVtZW50J1xyXG5pbXBvcnQgeyBDbG9uZWFibGVUeXBlLCB3cmFwQ2xvbmVFbGVtZW50IH0gZnJvbSAnLi4vbWV0aG9kcy93cmFwX2Nsb25lX2VsZW1lbnQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNsb25lRWxlbWVudCA9IDxQIGV4dGVuZHMgUHJvcHM+KGVsZW1lbnQ6IENoaWxkIHwgRWxlbWVudCwgcHJvcHM6IFAsIC4uLmNoaWxkcmVuOiBDaGlsZFtdKTogQ2hpbGQgPT4ge1xyXG5cclxuICBpZiAoaXNQcmltaXRpdmUoZWxlbWVudCkpXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24oZWxlbWVudCkpIHtcclxuICAgIGlmICghZWxlbWVudFtTWU1CT0xfQ0xPTkVdKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RhcmdldCBpcyBub3QgY2xvbmVhYmxlLCBpdCBpcyBub3QgY3JlYXRlZCBieSBqc3guY3JlYXRlRWxlbWVudCcpXHJcblxyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHByb3BzOiBvbGRQcm9wcyB9ID0gZWxlbWVudFtTWU1CT0xfQ0xPTkVdIGFzIENsb25lYWJsZVR5cGU8UD5cclxuICAgIGNvbnN0IG5ld1Byb3BzID0geyAuLi5vbGRQcm9wcywgLi4ucHJvcHMgfVxyXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApXHJcbiAgICAgIE9iamVjdC5hc3NpZ24ocHJvcHMsIHsgY2hpbGRyZW4gfSlcclxuXHJcbiAgICByZXR1cm4gd3JhcENsb25lRWxlbWVudChjcmVhdGVFbGVtZW50PFA+KENvbXBvbmVudCBhcyBhbnksIG5ld1Byb3BzKSwgQ29tcG9uZW50LCBuZXdQcm9wcylcclxuICB9XHJcbiAgZWxzZSBpZiAoaXNBcnJheShlbGVtZW50KSlcclxuICAgIHJldHVybiBlbGVtZW50Lm1hcChlID0+IGNsb25lRWxlbWVudChlLCBwcm9wcykpXHJcbiAgZWxzZSBpZiAoKGVsZW1lbnQgYXMgRWxlbWVudCkuY2xvbmVOb2RlKSAvL25hdGl2ZSBodG1sXHJcbiAgICByZXR1cm4gKGVsZW1lbnQgYXMgRWxlbWVudCkuY2xvbmVOb2RlKClcclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBlbGVtZW50XCIpXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vbWV0aG9kcy9jcmVhdGVfZWxlbWVudCdcclxuaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscy9sYW5nJ1xyXG5pbXBvcnQgdHlwZSB7IENoaWxkLCBDb21wb25lbnQsIEVsZW1lbnQgfSBmcm9tICcuLi90eXBlcydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaDxQIGV4dGVuZHMgeyBjaGlsZHJlbj86IENoaWxkIH0gPSB7fT4oY29tcG9uZW50OiBDb21wb25lbnQ8UD4sIGNoaWxkOiBDaGlsZCk6IEVsZW1lbnRcclxuZXhwb3J0IGZ1bmN0aW9uIGg8UCBleHRlbmRzIHsgY2hpbGRyZW4/OiBDaGlsZCB9ID0ge30+KGNvbXBvbmVudDogQ29tcG9uZW50PFA+LCBwcm9wcz86IFAgfCBudWxsLCAuLi5jaGlsZHJlbjogQ2hpbGRbXSk6IEVsZW1lbnRcclxuZXhwb3J0IGZ1bmN0aW9uIGg8UCBleHRlbmRzIHsgY2hpbGRyZW4/OiBDaGlsZCB9ID0ge30+KGNvbXBvbmVudDogQ29tcG9uZW50PFA+LCBwcm9wcz86IENoaWxkIHwgUCB8IG51bGwsIC4uLmNoaWxkcmVuOiBDaGlsZFtdKTogRWxlbWVudCB7XHJcblxyXG4gIC8vIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIGtleSwgaXNTdGF0aWMsIHNvdXJjZSwgc2VsZik7IC8vVFNDXHJcblxyXG4gIGlmIChjaGlsZHJlbi5sZW5ndGggfHwgKGlzT2JqZWN0KHByb3BzKSAmJiAhaXNBcnJheShwcm9wcykpKSB7XHJcbiAgICBpZiAoIXByb3BzKSBwcm9wcyA9IHsgY2hpbGRyZW4gfSBhcyBhbnlcclxuICAgIGVsc2UgcHJvcHMgPSB7IC4uLihwcm9wcyBhcyBvYmplY3QpLCBjaGlsZHJlbiB9IGFzIFBcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMgYXMgYW55KSAvL1RTQ1xyXG5cclxuICB9IGVsc2Uge1xyXG5cclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgbnVsbCwgcHJvcHMgYXMgQ2hpbGQpIC8vVFNDXHJcblxyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgaHRtIGZyb20gJ2h0bSdcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL21ldGhvZHMvY3JlYXRlX2VsZW1lbnQnXHJcbmltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4uL3V0aWxzL2xhbmcnXHJcbmltcG9ydCB0eXBlIHsgQ2hpbGQsIENvbXBvbmVudHNNYXAsIEVsZW1lbnQsIFByb3BzIH0gZnJvbSAnLi4vdHlwZXMnXHJcblxyXG4vKiBIRUxQRVJTICovXHJcblxyXG5jb25zdCByZWdpc3RyeTogQ29tcG9uZW50c01hcCA9IHt9XHJcbmNvbnN0IGggPSAodHlwZTogc3RyaW5nLCBwcm9wcz86IFByb3BzIHwgbnVsbCwgLi4uY2hpbGRyZW46IENoaWxkW10pOiBFbGVtZW50ID0+IGNyZWF0ZUVsZW1lbnQoKHJlZ2lzdHJ5W3R5cGVdIHx8IHR5cGUpIGFzIGFueSwgcHJvcHMsIC4uLmNoaWxkcmVuKVxyXG5jb25zdCByZWdpc3RlciA9IChjb21wb25lbnRzOiBDb21wb25lbnRzTWFwKTogdm9pZCA9PiB2b2lkIGFzc2lnbihyZWdpc3RyeSwgY29tcG9uZW50cylcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaHRtbCA9IGFzc2lnbihodG0uYmluZChoKSwgeyByZWdpc3RlciB9KSIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICcuLi9ob29rcy9zb2J5J1xyXG5pbXBvcnQgeyB1c2VSZXNvbHZlZCB9IGZyb20gJy4uL2hvb2tzL3VzZV9yZXNvbHZlZCdcclxuaW1wb3J0IHsgdXNlUmVzb3VyY2UgfSBmcm9tICcuLi9ob29rcy91c2VfcmVzb3VyY2UnXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgYXMgY3JlYXRlRWxlbWVudFNTUiB9IGZyb20gJy4vY3JlYXRlX2VsZW1lbnQnXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgYXMgY3JlYXRlRWxlbWVudENsaWVudCB9IGZyb20gJy4uL21ldGhvZHMvY3JlYXRlX2VsZW1lbnQnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICcuLi9tZXRob2RzL3NvYnknXHJcbmltcG9ydCB7IG9uY2UgfSBmcm9tICcuLi91dGlscy9sYW5nJ1xyXG5pbXBvcnQgdHlwZSB7IENoaWxkLCBMYXp5RmV0Y2hlciwgTGF6eVJlc3VsdCwgT2JzZXJ2YWJsZVJlYWRvbmx5IH0gZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCB7IHVzZUVudmlyb25tZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9lbnZpcm9ubWVudF9jb250ZXh0J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsYXp5ID0gPFAgPSB7fT4oZmV0Y2hlcjogTGF6eUZldGNoZXI8UD4pOiBMYXp5UmVzdWx0PFA+ID0+IHtcclxuXHJcbiAgY29uc3QgZmV0Y2hlck9uY2UgPSBvbmNlKGZldGNoZXIpXHJcblxyXG4gIGNvbnN0IGNvbXBvbmVudCA9IChwcm9wczogUCk6IE9ic2VydmFibGVSZWFkb25seTxDaGlsZD4gPT4ge1xyXG4gICAgY29uc3QgaXNTU1IgPSB1c2VFbnZpcm9ubWVudCgpID09PSAnc3NyJ1xyXG4gICAgY29uc3QgcmVzb3VyY2UgPSB1c2VSZXNvdXJjZShmZXRjaGVyT25jZSlcclxuXHJcbiAgICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XHJcblxyXG4gICAgICByZXR1cm4gdXNlUmVzb2x2ZWQocmVzb3VyY2UsICh7IHBlbmRpbmcsIGVycm9yLCB2YWx1ZSB9KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChwZW5kaW5nKSByZXR1cm5cclxuXHJcbiAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxyXG5cclxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSAoJ2RlZmF1bHQnIGluIHZhbHVlKSA/IHZhbHVlLmRlZmF1bHQgOiB2YWx1ZVxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBpc1NTUiA/IGNyZWF0ZUVsZW1lbnRTU1IgOiBjcmVhdGVFbGVtZW50Q2xpZW50XHJcblxyXG4gICAgICAgIHJldHVybiByZXNvbHZlKGNyZWF0ZUVsZW1lbnQ8UD4oY29tcG9uZW50LCBwcm9wcykpXHJcblxyXG4gICAgICB9KVxyXG5cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50LnByZWxvYWQgPSAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IHJlc291cmNlID0gdXNlUmVzb3VyY2UoZmV0Y2hlck9uY2UpXHJcblxyXG4gICAgICB1c2VSZXNvbHZlZChyZXNvdXJjZSwgKHsgcGVuZGluZywgZXJyb3IgfSkgPT4ge1xyXG5cclxuICAgICAgICBpZiAocGVuZGluZykgcmV0dXJuXHJcblxyXG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIHJlamVjdChlcnJvcilcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxyXG5cclxuICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnRcclxuXHJcbn0iLCJcclxuXHJcbmltcG9ydCB7IFNZTUJPTF9URU1QTEFURV9BQ0NFU1NPUiB9IGZyb20gJy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHsgd3JhcEVsZW1lbnQgfSBmcm9tICcuLi9tZXRob2RzL3dyYXBfZWxlbWVudCdcclxuaW1wb3J0IHsgYXNzaWduLCBpbmRleE9mLCBpc0Z1bmN0aW9uLCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL2xhbmcnXHJcbmltcG9ydCB7IHNldEF0dHJpYnV0ZSwgc2V0Q2hpbGRSZXBsYWNlbWVudCwgc2V0Q2xhc3Nlcywgc2V0RXZlbnQsIHNldEhUTUwsIHNldFByb3BlcnR5LCBzZXRSZWYsIHNldFN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL3NldHRlcnMnXHJcbmltcG9ydCB0eXBlIHsgQ2hpbGQsIFRlbXBsYXRlQWN0aW9uUGF0aCwgVGVtcGxhdGVBY3Rpb25XaXRoTm9kZXMsIFRlbXBsYXRlQWN0aW9uV2l0aFBhdGhzLCBUZW1wbGF0ZVZhcmlhYmxlUHJvcGVydGllcywgVGVtcGxhdGVWYXJpYWJsZURhdGEsIFRlbXBsYXRlVmFyaWFibGVzTWFwIH0gZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCB7IEVsZW1lbnQgYXMgRWxlbWVudFNTUiB9IGZyb20gJy4uL3NzcidcclxuaW1wb3J0IHsgdXNlRW52aXJvbm1lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzJ1xyXG5cclxuLy9UT0RPOiBBdm9pZCB1c2luZyBcIkZ1bmN0aW9uXCIgYW5kIFwiZXZhbFwiLCB3aGlsZSBzdGlsbCBrZWVwaW5nIHNpbWlsYXIgcGVyZm9ybWFuY2UsIGlmIHBvc3NpYmxlXHJcbi8vVE9ETzogU3VwcG9ydCBjb21wbGV4IGNoaWxkcmVuIGluIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvblxyXG4vL1RPRE86IFN1cHBvcnQgYXJndW1lbnRsZXNzIGNhbGxzIG9uIHByb3BzLCBsaWtlIHByb3BzLmZvby5iYXIoKVxyXG5cclxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gPFAgPSB7fT4oZm46ICgocHJvcHM6IFApID0+IENoaWxkKSk6ICgocHJvcHM6IFApID0+ICgpID0+IENoaWxkKSA9PiB7XHJcbiAgY29uc3QgaXNTU1IgPSB1c2VFbnZpcm9ubWVudCgpID09PSAnc3NyJ1xyXG4gIGNvbnN0IEVsZW1lbnQgPSBpc1NTUiA/IEVsZW1lbnRTU1IgOiBnbG9iYWxUaGlzLkVsZW1lbnRcclxuXHJcbiAgY29uc3Qgc2FmZVByb3BlcnR5UmUgPSAvXlthLXowLTktX10rJC9pXHJcblxyXG4gIGNvbnN0IGNoZWNrVmFsaWRQcm9wZXJ0eSA9IChwcm9wZXJ0eTogdW5rbm93bik6IHByb3BlcnR5IGlzIHN0cmluZyA9PiB7XHJcblxyXG4gICAgaWYgKGlzU3RyaW5nKHByb3BlcnR5KSAmJiBzYWZlUHJvcGVydHlSZS50ZXN0KHByb3BlcnR5KSkgcmV0dXJuIHRydWVcclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcHJvcGVydHksIG9ubHkgYWxwaGFudW1lcmljIHByb3BlcnRpZXMgYXJlIGFsbG93ZWQgaW5zaWRlIHRlbXBsYXRlcywgcmVjZWl2ZWQ6IFwiJHtwcm9wZXJ0eX1cImApXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFrZUFjY2Vzc29yID0gKGFjdGlvbnNXaXRoTm9kZXM6IFRlbXBsYXRlQWN0aW9uV2l0aE5vZGVzW10pOiBhbnkgPT4ge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJveHkoe30sIHtcclxuXHJcbiAgICAgIGdldCh0YXJnZXQ6IHVua25vd24sIHByb3A6IHN0cmluZykge1xyXG5cclxuICAgICAgICBjaGVja1ZhbGlkUHJvcGVydHkocHJvcClcclxuXHJcbiAgICAgICAgY29uc3QgYWNjZXNzb3IgPSAobm9kZTogTm9kZSwgbWV0aG9kOiBzdHJpbmcsIGtleT86IHN0cmluZywgdGFyZ2V0Tm9kZT86IE5vZGUpOiB2b2lkID0+IHtcclxuXHJcbiAgICAgICAgICBpZiAoa2V5KSBjaGVja1ZhbGlkUHJvcGVydHkoa2V5KVxyXG5cclxuICAgICAgICAgIGFjdGlvbnNXaXRoTm9kZXMucHVzaChbbm9kZSwgbWV0aG9kLCBwcm9wLCBrZXksIHRhcmdldE5vZGVdKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0geyBbU1lNQk9MX1RFTVBMQVRFX0FDQ0VTU09SXTogdHJ1ZSB9XHJcblxyXG4gICAgICAgIHJldHVybiBhc3NpZ24oYWNjZXNzb3IsIG1ldGFkYXRhKVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFrZUFjdGlvbnNXaXRoTm9kZXNBbmRUZW1wbGF0ZSA9ICgpOiB7IGFjdGlvbnNXaXRoTm9kZXM6IFRlbXBsYXRlQWN0aW9uV2l0aE5vZGVzW10sIHJvb3Q6IEVsZW1lbnQgfSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWN0aW9uc1dpdGhOb2RlczogVGVtcGxhdGVBY3Rpb25XaXRoTm9kZXNbXSA9IFtdXHJcbiAgICBjb25zdCBhY2Nlc3NvciA9IG1ha2VBY2Nlc3NvcihhY3Rpb25zV2l0aE5vZGVzKVxyXG4gICAgY29uc3QgY29tcG9uZW50ID0gZm4oYWNjZXNzb3IpXHJcblxyXG4gICAgaWYgKGlzRnVuY3Rpb24oY29tcG9uZW50KSkge1xyXG5cclxuICAgICAgY29uc3Qgcm9vdCA9IGNvbXBvbmVudCgpXHJcblxyXG4gICAgICBpZiAocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgYWN0aW9uc1dpdGhOb2Rlcywgcm9vdCB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSwgaXQgbXVzdCByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gRWxlbWVudCcpXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFrZUFjdGlvbnNXaXRoUGF0aHMgPSAoYWN0aW9uc1dpdGhOb2RlczogVGVtcGxhdGVBY3Rpb25XaXRoTm9kZXNbXSk6IFRlbXBsYXRlQWN0aW9uV2l0aFBhdGhzW10gPT4ge1xyXG5cclxuICAgIGNvbnN0IGFjdGlvbnNXaXRoUGF0aHM6IFRlbXBsYXRlQWN0aW9uV2l0aFBhdGhzW10gPSBbXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYWN0aW9uc1dpdGhOb2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuXHJcbiAgICAgIGNvbnN0IFtub2RlLCBtZXRob2QsIHByb3AsIGtleSwgdGFyZ2V0Tm9kZV0gPSBhY3Rpb25zV2l0aE5vZGVzW2ldXHJcblxyXG4gICAgICBjb25zdCBub2RlUGF0aCA9IG1ha2VOb2RlUGF0aChub2RlKVxyXG4gICAgICBjb25zdCB0YXJnZXROb2RlUGF0aCA9IHRhcmdldE5vZGUgPyBtYWtlTm9kZVBhdGgodGFyZ2V0Tm9kZSkgOiB1bmRlZmluZWRcclxuXHJcbiAgICAgIGFjdGlvbnNXaXRoUGF0aHMucHVzaChbbm9kZVBhdGgsIG1ldGhvZCwgcHJvcCwga2V5LCB0YXJnZXROb2RlUGF0aF0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhY3Rpb25zV2l0aFBhdGhzXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFrZU5vZGVQYXRoID0gKCgpID0+IHtcclxuXHJcbiAgICBsZXQgcHJldk5vZGU6IE5vZGUgfCBudWxsID0gbnVsbFxyXG4gICAgbGV0IHByZXZQYXRoOiBUZW1wbGF0ZUFjdGlvblBhdGhcclxuXHJcbiAgICByZXR1cm4gKG5vZGU6IE5vZGUpOiBUZW1wbGF0ZUFjdGlvblBhdGggPT4ge1xyXG5cclxuICAgICAgaWYgKG5vZGUgPT09IHByZXZOb2RlKSByZXR1cm4gcHJldlBhdGggLy8gQ2FjaGUgaGl0XHJcblxyXG4gICAgICBjb25zdCBwYXRoOiBUZW1wbGF0ZUFjdGlvblBhdGggPSBbXVxyXG5cclxuICAgICAgbGV0IGNoaWxkID0gbm9kZVxyXG4gICAgICBsZXQgcGFyZW50ID0gY2hpbGQucGFyZW50Tm9kZVxyXG5cclxuICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9ICFjaGlsZC5wcmV2aW91c1NpYmxpbmcgPyAwIDogIWNoaWxkLm5leHRTaWJsaW5nID8gLTAgOiBpbmRleE9mKHBhcmVudC5jaGlsZE5vZGVzLCBjaGlsZClcclxuXHJcbiAgICAgICAgcGF0aC5wdXNoKGluZGV4KVxyXG5cclxuICAgICAgICBjaGlsZCA9IHBhcmVudFxyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBwcmV2Tm9kZSA9IG5vZGVcclxuICAgICAgcHJldlBhdGggPSBwYXRoXHJcblxyXG4gICAgICByZXR1cm4gcGF0aFxyXG5cclxuICAgIH1cclxuXHJcbiAgfSkoKVxyXG5cclxuICBjb25zdCBtYWtlTm9kZVBhdGhQcm9wZXJ0aWVzID0gKHBhdGg6IFRlbXBsYXRlQWN0aW9uUGF0aCk6IFRlbXBsYXRlVmFyaWFibGVQcm9wZXJ0aWVzID0+IHtcclxuXHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiBUZW1wbGF0ZVZhcmlhYmxlUHJvcGVydGllcyA9IFsncm9vdCddXHJcblxyXG4gICAgY29uc3QgcGFydHMgPSBwYXRoLnNsaWNlKCkucmV2ZXJzZSgpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwYXJ0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuXHJcbiAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXVxyXG5cclxuICAgICAgaWYgKE9iamVjdC5pcygwLCBwYXJ0KSkge1xyXG5cclxuICAgICAgICBwcm9wZXJ0aWVzLnB1c2goJ2ZpcnN0Q2hpbGQnKVxyXG5cclxuICAgICAgfSBlbHNlIGlmIChPYmplY3QuaXMoLTAsIHBhcnQpKSB7XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMucHVzaCgnbGFzdENoaWxkJylcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMucHVzaCgnZmlyc3RDaGlsZCcpXHJcblxyXG4gICAgICAgIGZvciAobGV0IG5zaSA9IDA7IG5zaSA8IHBhcnQ7IG5zaSsrKSB7XHJcblxyXG4gICAgICAgICAgcHJvcGVydGllcy5wdXNoKCduZXh0U2libGluZycpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb3BlcnRpZXNcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBtYWtlUmV2aXZlclBhdGhzID0gKGFjdGlvbnNXaXRoUGF0aHM6IFRlbXBsYXRlQWN0aW9uV2l0aFBhdGhzW10pOiBUZW1wbGF0ZUFjdGlvblBhdGhbXSA9PiB7XHJcblxyXG4gICAgY29uc3QgcGF0aHM6IFRlbXBsYXRlQWN0aW9uUGF0aFtdID0gW11cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFjdGlvbnNXaXRoUGF0aHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcblxyXG4gICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zV2l0aFBhdGhzW2ldXHJcbiAgICAgIGNvbnN0IG5vZGVQYXRoID0gYWN0aW9uWzBdXHJcbiAgICAgIGNvbnN0IHRhcmdldE5vZGVQYXRoID0gYWN0aW9uWzRdXHJcblxyXG4gICAgICBwYXRocy5wdXNoKG5vZGVQYXRoKVxyXG5cclxuICAgICAgaWYgKHRhcmdldE5vZGVQYXRoKSB7XHJcblxyXG4gICAgICAgIHBhdGhzLnB1c2godGFyZ2V0Tm9kZVBhdGgpXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRoc1xyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IG1ha2VSZXZpdmVyVmFyaWFibGVzRGF0YSA9IChwYXRoczogVGVtcGxhdGVBY3Rpb25QYXRoW10sIHByb3BlcnRpZXM6IFRlbXBsYXRlVmFyaWFibGVQcm9wZXJ0aWVzW10pOiBUZW1wbGF0ZVZhcmlhYmxlRGF0YVtdID0+IHtcclxuXHJcbiAgICBjb25zdCBkYXRhOiBUZW1wbGF0ZVZhcmlhYmxlRGF0YVtdID0gbmV3IEFycmF5KHBhdGhzLmxlbmd0aClcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhdGhzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG5cclxuICAgICAgZGF0YVtpXSA9IHtcclxuICAgICAgICBwYXRoOiBwYXRoc1tpXSxcclxuICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzW2ldXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBtYWtlUmV2aXZlclZhcmlhYmxlcyA9IChhY3Rpb25zV2l0aFBhdGhzOiBUZW1wbGF0ZUFjdGlvbldpdGhQYXRoc1tdKTogeyBhc3NpZ25tZW50czogc3RyaW5nW10sIG1hcDogTWFwPFRlbXBsYXRlQWN0aW9uUGF0aCwgc3RyaW5nPiB9ID0+IHsgLy9UT0RPOiBPcHRpbWl6ZSB0aGlzIGZ1cnRoZXIsIHRoZXJlJ3Mgc29tZSBkdXBsaWNhdGlvbiBhbmQgdW5uZWNlc3Nhcnkgd29yayBiZWluZyBkb25lXHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSBtYWtlUmV2aXZlclBhdGhzKGFjdGlvbnNXaXRoUGF0aHMpXHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gcGF0aHMubWFwKG1ha2VOb2RlUGF0aFByb3BlcnRpZXMpXHJcbiAgICBjb25zdCBkYXRhID0gbWFrZVJldml2ZXJWYXJpYWJsZXNEYXRhKHBhdGhzLCBwcm9wZXJ0aWVzKVxyXG4gICAgY29uc3QgYXNzaWdubWVudHM6IHN0cmluZ1tdID0gW11cclxuICAgIGNvbnN0IG1hcDogVGVtcGxhdGVWYXJpYWJsZXNNYXAgPSBuZXcgTWFwKClcclxuXHJcbiAgICBsZXQgdmFyaWFibGVJZCA9IDBcclxuXHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG5cclxuICAgICAgY29uc3QgZGF0dW0gPSBkYXRhLmZpbmQoZGF0dW0gPT4gZGF0dW0ucHJvcGVydGllcy5sZW5ndGggPiAxKVxyXG5cclxuICAgICAgaWYgKCFkYXR1bSkgYnJlYWtcclxuXHJcbiAgICAgIGNvbnN0IFtjdXJyZW50LCBuZXh0XSA9IGRhdHVtLnByb3BlcnRpZXNcclxuICAgICAgY29uc3QgdmFyaWFibGUgPSBgJCR7dmFyaWFibGVJZCsrfWBcclxuICAgICAgY29uc3QgYXNzaWdubWVudCA9IGBjb25zdCAke3ZhcmlhYmxlfSA9ICR7Y3VycmVudH0uJHtuZXh0fTtgXHJcblxyXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpXHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdHVtID0gZGF0YVtpXVxyXG4gICAgICAgIGNvbnN0IFtvdGhlckN1cnJlbnQsIG90aGVyTmV4dF0gPSBkYXR1bS5wcm9wZXJ0aWVzXHJcblxyXG4gICAgICAgIGlmIChvdGhlckN1cnJlbnQgIT09IGN1cnJlbnQgfHwgb3RoZXJOZXh0ICE9PSBuZXh0KSBjb250aW51ZVxyXG5cclxuICAgICAgICBkYXR1bS5wcm9wZXJ0aWVzWzBdID0gdmFyaWFibGVcclxuICAgICAgICBkYXR1bS5wcm9wZXJ0aWVzLnNwbGljZSgxLCAxKVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcblxyXG4gICAgICBjb25zdCBkYXR1bSA9IGRhdGFbaV1cclxuXHJcbiAgICAgIG1hcC5zZXQoZGF0dW0ucGF0aCwgZGF0dW0ucHJvcGVydGllc1swXSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgYXNzaWdubWVudHMsIG1hcCB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFrZVJldml2ZXJBY3Rpb25zID0gKGFjdGlvbnNXaXRoUGF0aHM6IFRlbXBsYXRlQWN0aW9uV2l0aFBhdGhzW10sIHZhcmlhYmxlczogTWFwPFRlbXBsYXRlQWN0aW9uUGF0aCwgc3RyaW5nPik6IHN0cmluZ1tdID0+IHtcclxuXHJcbiAgICBjb25zdCBhY3Rpb25zOiBzdHJpbmdbXSA9IFtdXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhY3Rpb25zV2l0aFBhdGhzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyAvL1RPRE86IFdyaXRlIHRoaXMgbW9yZSBjbGVhbmx5LCB3aXRoIGEgc2luZ2xlIGNhc2VcclxuXHJcbiAgICAgIGNvbnN0IFtub2RlUGF0aCwgbWV0aG9kLCBwcm9wLCBrZXksIHRhcmdldE5vZGVQYXRoXSA9IGFjdGlvbnNXaXRoUGF0aHNbaV1cclxuXHJcbiAgICAgIGlmICh0YXJnZXROb2RlUGF0aCkge1xyXG5cclxuICAgICAgICBhY3Rpb25zLnB1c2goYHRoaXMuJHttZXRob2R9ICggcHJvcHNbXCIke3Byb3B9XCJdLCAke3ZhcmlhYmxlcy5nZXQodGFyZ2V0Tm9kZVBhdGgpfSApO2ApXHJcblxyXG4gICAgICB9IGVsc2UgaWYgKGtleSkge1xyXG5cclxuICAgICAgICBhY3Rpb25zLnB1c2goYHRoaXMuJHttZXRob2R9ICggJHt2YXJpYWJsZXMuZ2V0KG5vZGVQYXRoKX0sIFwiJHtrZXl9XCIsIHByb3BzW1wiJHtwcm9wfVwiXSApO2ApXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBhY3Rpb25zLnB1c2goYHRoaXMuJHttZXRob2R9ICggJHt2YXJpYWJsZXMuZ2V0KG5vZGVQYXRoKX0sIHByb3BzW1wiJHtwcm9wfVwiXSApO2ApXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhY3Rpb25zXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFrZVJldml2ZXIgPSAoYWN0aW9uc1dpdGhQYXRoczogVGVtcGxhdGVBY3Rpb25XaXRoUGF0aHNbXSk6ICgocm9vdDogRWxlbWVudCwgcHJvcHM6IFApID0+IEVsZW1lbnQpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGFzc2lnbm1lbnRzLCBtYXAgfSA9IG1ha2VSZXZpdmVyVmFyaWFibGVzKGFjdGlvbnNXaXRoUGF0aHMpXHJcbiAgICBjb25zdCBhY3Rpb25zID0gbWFrZVJldml2ZXJBY3Rpb25zKGFjdGlvbnNXaXRoUGF0aHMsIG1hcClcclxuICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKCdyb290JywgJ3Byb3BzJywgYCR7YXNzaWdubWVudHMuam9pbignJyl9JHthY3Rpb25zLmpvaW4oJycpfXJldHVybiByb290O2ApXHJcbiAgICBjb25zdCBhcGlzID0geyBzZXRBdHRyaWJ1dGUsIHNldENoaWxkUmVwbGFjZW1lbnQsIHNldENsYXNzZXMsIHNldEV2ZW50LCBzZXRIVE1MLCBzZXRQcm9wZXJ0eSwgc2V0UmVmLCBzZXRTdHlsZXMgfVxyXG4gICAgY29uc3QgcmV2aXZlciA9IGZuLmJpbmQoYXBpcylcclxuXHJcbiAgICByZXR1cm4gcmV2aXZlclxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IG1ha2VDb21wb25lbnQgPSAoKTogKChwcm9wczogUCkgPT4gKCkgPT4gQ2hpbGQpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGFjdGlvbnNXaXRoTm9kZXMsIHJvb3QgfSA9IG1ha2VBY3Rpb25zV2l0aE5vZGVzQW5kVGVtcGxhdGUoKVxyXG4gICAgY29uc3QgYWN0aW9uc1dpdGhQYXRocyA9IG1ha2VBY3Rpb25zV2l0aFBhdGhzKGFjdGlvbnNXaXRoTm9kZXMpXHJcbiAgICBjb25zdCByZXZpdmVyID0gbWFrZVJldml2ZXIoYWN0aW9uc1dpdGhQYXRocylcclxuXHJcbiAgICByZXR1cm4gKHByb3BzOiBQKTogKCgpID0+IENoaWxkKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCBjbG9uZSA9IHJvb3QuY2xvbmVOb2RlKHRydWUpIGFzIGFueVxyXG5cclxuICAgICAgY29uc3Qgd3JhcHBlZCA9IHdyYXBFbGVtZW50KHJldml2ZXIuYmluZCh1bmRlZmluZWQsIGNsb25lIGFzIGFueSwgcHJvcHMpKVxyXG4gICAgICByZXR1cm4gd3JhcHBlZFxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWFrZUNvbXBvbmVudCgpXHJcblxyXG59IiwiaW1wb3J0IHsgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNPYmplY3QsIGlzUHJpbWl0aXZlIH0gZnJvbSAnLi4vdXRpbHMnXHJcbmltcG9ydCB7ICQsICQkLCBpc09ic2VydmFibGUgfSBmcm9tICcuL3NvYnknXHJcblxyXG4vLyBpbXBvcnQgeyAkLCAkJCwgaXNPYnNlcnZhYmxlLCBpc0Z1bmN0aW9uLCBpc0FycmF5IH0gZnJvbSBcIi4uXCJcclxuXHJcbi8vIGNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHN5bWJvbCB8IG51bGwgfCB1bmRlZmluZWQgfCBiaWdpbnQgPT4ge1xyXG4vLyBcdGNvbnN0IHQgPSB0eXBlb2YgdmFsdWVcclxuLy8gXHRyZXR1cm4gISh0ID09PSBcIm9iamVjdFwiIHx8IHQgPT09IFwiZnVuY3Rpb25cIilcclxuLy8gfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzaGFsbG93IG9yIGRlZXAgY2xvbmUgb2YgYW4gb2JqZWN0LlxyXG4gKiBQcmVzZXJ2ZXMgb2JzZXJ2YWJsZSBwcm9wZXJ0aWVzIGJ5IGNyZWF0aW5nIG5ldyBvYnNlcnZhYmxlcyB3aXRoIHRoZSBzYW1lIHZhbHVlcy5cclxuICogXHJcbiAqIEBwYXJhbSBzb3VyY2UgZCBUaGUgb2JqZWN0IHRvIGNsb25lXHJcbiAqIEBwYXJhbSBkZWVwQ2xvbmUgZCBJZiB0cnVlLCBwZXJmb3JtcyBkZWVwIGNsb25pbmcgb2YgbmVzdGVkIG9iamVjdHNcclxuICogQHJldHVybnMgQSBjbG9uZWQgY29weSBvZiB0aGUgc291cmNlIG9iamVjdFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogYGBgdHN4XHJcbiAqIGNvbnN0IG9yaWdpbmFsID0geyBuYW1lOiAnSm9obicsIGFnZTogMzAsIGFjdGl2ZTogJCh0cnVlKSB9XHJcbiAqIGNvbnN0IHNoYWxsb3dDbG9uZSA9IGNsb25lKG9yaWdpbmFsKVxyXG4gKiBjb25zdCBkZWVwQ2xvbmUgPSBjbG9uZShvcmlnaW5hbCwgdHJ1ZSlcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2xvbmUgPSA8VCw+KHNvdXJjZTogVCwgZGVlcENsb25lID0gZmFsc2UpOiBUID0+IHtcclxuXHRpZiAoaXNQcmltaXRpdmUoc291cmNlKSlcclxuXHRcdHJldHVybiBzb3VyY2VcclxuXHJcblx0aWYgKGlzRnVuY3Rpb24oc291cmNlKSlcclxuXHRcdHJldHVybiBzb3VyY2VcclxuXHJcblx0aWYgKGlzQXJyYXkoc291cmNlKSlcclxuXHRcdGlmIChkZWVwQ2xvbmUpXHJcblx0XHRcdHJldHVybiBzb3VyY2UubWFwKGl0ZW0gPT4gY2xvbmUoaXRlbSwgZGVlcENsb25lKSkgYXMgYW55XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBzb3VyY2VcclxuXHJcblx0Ly9pcyBvYmplY3RcclxuXHRjb25zdCBuZXdPYmplY3QgPSB7fVxyXG5cclxuXHRPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Vba2V5XSA9PT0gXCJmdW5jdGlvblwiICYmICFpc09ic2VydmFibGUoc291cmNlW2tleV0pKSB7XHJcblx0XHRcdG5ld09iamVjdFtrZXldID0gc291cmNlW2tleV1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGlzT2JzZXJ2YWJsZShzb3VyY2Vba2V5XSkgJiYgaXNPYmplY3QoJCQoc291cmNlW2tleV0pKSAmJiAhaXNBcnJheSgkJChzb3VyY2Vba2V5XSkpKSB7XHJcblx0XHRcdGNvbnN0IGlubmVyT2JqZWN0ID0gY2xvbmUoJCQoc291cmNlW2tleV0pKVxyXG5cdFx0XHRuZXdPYmplY3Rba2V5XSA9IGlubmVyT2JqZWN0XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChpc09ic2VydmFibGUoc291cmNlW2tleV0pKSB7XHJcblx0XHRcdG5ld09iamVjdFtrZXldID0gJCgkJChzb3VyY2Vba2V5XSkpXHJcblx0XHR9XHJcblxyXG5cdFx0ZWxzZSBpZiAoaXNPYmplY3QoJCQoc291cmNlW2tleV0pKSAmJiBkZWVwQ2xvbmUpIHtcclxuXHRcdFx0Y29uc3QgaW5uZXJPYmplY3QgPSBjbG9uZShzb3VyY2Vba2V5XSlcclxuXHRcdFx0bmV3T2JqZWN0W2tleV0gPSBpbm5lck9iamVjdFxyXG5cdFx0fSBlbHNlXHJcblx0XHRcdG5ld09iamVjdFtrZXldID0gc291cmNlW2tleV1cclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gbmV3T2JqZWN0IGFzIFRcclxufSIsImltcG9ydCB0eXBlIHsgT2JzZXJ2YWJsZU9wdGlvbnMgfSBmcm9tIFwic29ieVwiXHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBIVE1MIHN0cmluZyB2YWx1ZXMgdG8gYm9vbGVhblxyXG4vLyBUcmVhdHMgZW1wdHkgc3RyaW5ncyBhbmQgJ3RydWUnIGFzIHRydWUsIGFuZCBldmVyeXRoaW5nIGVsc2UgYXMgZmFsc2VcclxuY29uc3QgaXMgPSAodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSB0cnVlXHJcblxyXG5leHBvcnQgY29uc3QgSHRtbEJvb2xlYW46IE9ic2VydmFibGVPcHRpb25zPGJvb2xlYW4gfCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0ge1xyXG4gICAgZXF1YWxzOiAoYSwgYikgPT4gaXMoYSkgPT09IGlzKGIpLFxyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIHRvSHRtbDogKHZhbHVlKSA9PiBpcyh2YWx1ZSkgPyAnJyA6IHVuZGVmaW5lZCBhcyBhbnksIC8vIFJldHVybiBlbXB0eSBzdHJpbmcgZm9yIHRydWUsIHVuZGVmaW5lZCBmb3IgZmFsc2VcclxuICAgIGZyb21IdG1sOiAodmFsdWUpID0+IGlzKHZhbHVlKVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgT2JzZXJ2YWJsZU9wdGlvbnMgfSBmcm9tIFwic29ieVwiXHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBIVE1MIHN0cmluZyB2YWx1ZXMgdG8gbnVtYmVyXHJcbi8vIFRyZWF0cyBlbXB0eSBzdHJpbmdzIGFuZCBub24tbnVtZXJpYyB2YWx1ZXMgYXMgTmFOXHJcbmNvbnN0IHRvTnVtYmVyID0gKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWQpOiBudW1iZXIgPT4ge1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSByZXR1cm4gTmFOXHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHZhbHVlXHJcbiAgICBjb25zdCBudW0gPSBOdW1iZXIodmFsdWUpXHJcbiAgICByZXR1cm4gaXNOYU4obnVtKSA/IE5hTiA6IG51bVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSHRtbE51bWJlcjogT2JzZXJ2YWJsZU9wdGlvbnM8bnVtYmVyIHwgdW5kZWZpbmVkPiA9IHtcclxuICAgIGVxdWFsczogKGE6IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCwgYjogbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB0b051bWJlcihhKSA9PT0gdG9OdW1iZXIoYiksXHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICB0b0h0bWw6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG51bSA9IHRvTnVtYmVyKHZhbHVlKVxyXG4gICAgICAgIHJldHVybiBpc05hTihudW0pID8gdW5kZWZpbmVkIGFzIGFueSA6IFN0cmluZyhudW0pXHJcbiAgICB9LFxyXG4gICAgZnJvbUh0bWw6ICh2YWx1ZSkgPT4gdG9OdW1iZXIodmFsdWUpXHJcbn0iLCJpbXBvcnQgdHlwZSB7IE9ic2VydmFibGVPcHRpb25zIH0gZnJvbSBcInNvYnlcIlxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgSFRNTCBzdHJpbmcgdmFsdWVzIHRvIERhdGVcclxuLy8gVHJlYXRzIGVtcHR5IHN0cmluZ3MgYW5kIGludmFsaWQgZGF0ZXMgYXMgdW5kZWZpbmVkXHJcbi8vIEhhbmRsZXMgdmFyaW91cyBkYXRlIGZvcm1hdHMgaW5jbHVkaW5nOlxyXG4vLyAtIElTTyBkYXRlIHN0cmluZ3NcclxuLy8gLSBUaW1lc3RhbXAgbnVtYmVycyBhbmQgbnVtZXJpYyBzdHJpbmdzIChlLmcuIFwiMjE0MTUxMjU1MVwiKVxyXG4vLyAtIEN1c3RvbSBkYXRlIGZvcm1hdHMgKGUuZy4gXCIyMDI1IE9jdCAuLi4uXCIpXHJcbi8vIC0gRGF0ZSBvYmplY3RzXHJcbmNvbnN0IHRvRGF0ZSA9ICh2YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCk6IERhdGUgfCB1bmRlZmluZWQgPT4ge1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSByZXR1cm4gdW5kZWZpbmVkXHJcblxyXG4gICAgLy8gSWYgaXQncyBhbHJlYWR5IGEgRGF0ZSBvYmplY3QsIHJldHVybiBpdFxyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIGlzTmFOKHZhbHVlLmdldFRpbWUoKSkgPyB1bmRlZmluZWQgOiB2YWx1ZVxyXG5cclxuICAgIC8vIFRyeSB0byBwYXJzZSBhcyBhIG51bWJlciAodGltZXN0YW1wKVxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpXHJcbiAgICAgICAgcmV0dXJuIGlzTmFOKGRhdGUuZ2V0VGltZSgpKSA/IHVuZGVmaW5lZCA6IGRhdGVcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3Igc3RyaW5ncywgdHJ5IG11bHRpcGxlIHBhcnNpbmcgc3RyYXRlZ2llc1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvLyBGaXJzdCB0cnkgRGF0ZS5wYXJzZSBmb3Igc3RhbmRhcmQgZm9ybWF0c1xyXG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUucGFyc2UodmFsdWUpXHJcbiAgICAgICAgaWYgKCFpc05hTih0aW1lc3RhbXApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUcnkgcGFyc2luZyBhcyBhIG51bWVyaWMgdGltZXN0YW1wIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IG51bWVyaWNUaW1lc3RhbXAgPSBOdW1iZXIodmFsdWUpXHJcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVGltZXN0YW1wKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobnVtZXJpY1RpbWVzdGFtcClcclxuICAgICAgICAgICAgaWYgKCFpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIG5ldyBEYXRlKCkgZm9yIGN1c3RvbSBmb3JtYXRzXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKVxyXG4gICAgICAgIHJldHVybiBpc05hTihkYXRlLmdldFRpbWUoKSkgPyB1bmRlZmluZWQgOiBkYXRlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbGJhY2sgZm9yIGFueSBvdGhlciB0eXBlXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpXHJcbiAgICByZXR1cm4gaXNOYU4oZGF0ZS5nZXRUaW1lKCkpID8gdW5kZWZpbmVkIDogZGF0ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSHRtbERhdGU6IE9ic2VydmFibGVPcHRpb25zPERhdGUgfCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+ID0ge1xyXG4gICAgZXF1YWxzOiAoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGVBID0gdG9EYXRlKGEpXHJcbiAgICAgICAgY29uc3QgZGF0ZUIgPSB0b0RhdGUoYilcclxuICAgICAgICByZXR1cm4gKGRhdGVBID09PSB1bmRlZmluZWQgJiYgZGF0ZUIgPT09IHVuZGVmaW5lZCkgfHxcclxuICAgICAgICAgICAgKGRhdGVBICE9PSB1bmRlZmluZWQgJiYgZGF0ZUIgIT09IHVuZGVmaW5lZCAmJiBkYXRlQS5nZXRUaW1lKCkgPT09IGRhdGVCLmdldFRpbWUoKSlcclxuICAgIH0sXHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgdG9IdG1sOiAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlID0gdG9EYXRlKHZhbHVlKVxyXG4gICAgICAgIHJldHVybiBkYXRlID8gZGF0ZS50b0lTT1N0cmluZygpIDogXCJcIiBhcyBhbnlcclxuICAgIH0sXHJcbiAgICBmcm9tSHRtbDogKHZhbHVlKSA9PiB0b0RhdGUodmFsdWUpIHx8IG5ldyBEYXRlKE5hTilcclxufSIsImltcG9ydCB0eXBlIHsgT2JzZXJ2YWJsZU9wdGlvbnMgfSBmcm9tIFwic29ieVwiXHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBIVE1MIHN0cmluZyB2YWx1ZXMgdG8gQmlnSW50XHJcbi8vIFRyZWF0cyBlbXB0eSBzdHJpbmdzIGFuZCBpbnZhbGlkIHZhbHVlcyBhcyB1bmRlZmluZWRcclxuLy8gSGFuZGxlcyBCaWdJbnQsIG51bWJlciwgYW5kIHN0cmluZyBpbnB1dHNcclxuY29uc3QgdG9CaWdJbnQgPSAodmFsdWU6IGJpZ2ludCB8IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCk6IGJpZ2ludCB8IHVuZGVmaW5lZCA9PiB7XHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHJldHVybiB1bmRlZmluZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2JpZ2ludCcpIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkpIHJldHVybiB1bmRlZmluZWRcclxuICAgICAgICAgICAgcmV0dXJuIEJpZ0ludCh2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEJpZ0ludCh2YWx1ZSlcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEh0bWxCaWdJbnQ6IE9ic2VydmFibGVPcHRpb25zPGJpZ2ludCB8IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZD4gPSB7XHJcbiAgICBlcXVhbHM6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmlnQSA9IHRvQmlnSW50KGEpXHJcbiAgICAgICAgY29uc3QgYmlnQiA9IHRvQmlnSW50KGIpXHJcbiAgICAgICAgcmV0dXJuIChiaWdBID09PSB1bmRlZmluZWQgJiYgYmlnQiA9PT0gdW5kZWZpbmVkKSB8fFxyXG4gICAgICAgICAgICAoYmlnQSAhPT0gdW5kZWZpbmVkICYmIGJpZ0IgIT09IHVuZGVmaW5lZCAmJiBiaWdBID09PSBiaWdCKVxyXG4gICAgfSxcclxuICAgIHR5cGU6ICdiaWdpbnQnLFxyXG4gICAgdG9IdG1sOiAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBiaWcgPSB0b0JpZ0ludCh2YWx1ZSlcclxuICAgICAgICByZXR1cm4gYmlnID8gYmlnLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQgYXMgYW55XHJcbiAgICB9LFxyXG4gICAgZnJvbUh0bWw6ICh2YWx1ZSkgPT4gdG9CaWdJbnQodmFsdWUpIHx8IEJpZ0ludCgwKVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgT2JzZXJ2YWJsZU9wdGlvbnMgfSBmcm9tIFwic29ieVwiXHJcblxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgSFRNTCBzdHJpbmcgdmFsdWVzIHRvIE9iamVjdCB1c2luZyBKU09OLnBhcnNlXHJcbi8vIFRyZWF0cyBlbXB0eSBzdHJpbmdzIGFuZCBpbnZhbGlkIEpTT04gYXMgdW5kZWZpbmVkXHJcbmNvbnN0IHRvT2JqZWN0ID0gPFQgZXh0ZW5kcyBvYmplY3Q+KHZhbHVlOiBUIHwgc3RyaW5nIHwgdW5kZWZpbmVkKTogVCB8IHVuZGVmaW5lZCA9PiB7XHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHJldHVybiB1bmRlZmluZWRcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSByZXR1cm4gdmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEh0bWxPYmplY3QuSlNPTi5wYXJzZSh2YWx1ZSlcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEh0bWxPYmplY3Q6IE9ic2VydmFibGVPcHRpb25zPG9iamVjdCB8IHVuZGVmaW5lZD4gJiB7IEpTT046IE9taXQ8dHlwZW9mIEpTT04sICd0b1N0cmluZ1RhZyc+IH0gPSB7XHJcbiAgICAvKipcclxuICAgICAqIEpTT04gaW1wbGVtZW50YXRpb24gdXNlZCBmb3IgcGFyc2luZyBhbmQgc3RyaW5naWZ5aW5nIG9iamVjdHMuXHJcbiAgICAgKiBDb25zdW1lcnMgY2FuIHJlcGxhY2UgdGhpcyB3aXRoIGFsdGVybmF0aXZlIGltcGxlbWVudGF0aW9ucyBsaWtlIEpTT041LlxyXG4gICAgICovXHJcbiAgICBKU09OLFxyXG5cclxuICAgIGVxdWFsczogKGE6IG9iamVjdCB8IHN0cmluZywgYjogb2JqZWN0IHwgc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqQSA9IHRvT2JqZWN0KGEpXHJcbiAgICAgICAgY29uc3Qgb2JqQiA9IHRvT2JqZWN0KGIpXHJcbiAgICAgICAgcmV0dXJuIChvYmpBID09PSB1bmRlZmluZWQgJiYgb2JqQiA9PT0gdW5kZWZpbmVkKSB8fFxyXG4gICAgICAgICAgICAob2JqQSAhPT0gdW5kZWZpbmVkICYmIG9iakIgIT09IHVuZGVmaW5lZCAmJiBIdG1sT2JqZWN0LkpTT04uc3RyaW5naWZ5KG9iakEpID09PSBIdG1sT2JqZWN0LkpTT04uc3RyaW5naWZ5KG9iakIpKVxyXG4gICAgfSxcclxuICAgIHR5cGU6IE9iamVjdCxcclxuICAgIHRvSHRtbDogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0gdG9PYmplY3QodmFsdWUpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iaiA/IEh0bWxPYmplY3QuSlNPTi5zdHJpbmdpZnkob2JqKSA6IHVuZGVmaW5lZCBhcyBhbnlcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCIgYXMgYW55XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZyb21IdG1sOiAodmFsdWUpID0+IHRvT2JqZWN0KHZhbHVlKSB8fCB7fVxyXG59IiwiaW1wb3J0IHR5cGUgeyBPYnNlcnZhYmxlT3B0aW9ucyB9IGZyb20gXCJzb2J5XCJcclxuXHJcbi8vIERlZmluZSBDU1MgdW5pdCB0eXBlc1xyXG4vLyBTdXBwb3J0cyBweCwgZW0sIHJlbSwgJSwgdmgsIHZ3LCB2bWluLCB2bWF4LCBjaCwgZXgsIHB0LCBwYywgaW4sIGNtLCBtbSB1bml0c1xyXG5leHBvcnQgdHlwZSBDU1NVbml0ID1cclxuICAgIHwgYCR7bnVtYmVyfXB4YFxyXG4gICAgfCBgJHtudW1iZXJ9ZW1gXHJcbiAgICB8IGAke251bWJlcn1yZW1gXHJcbiAgICB8IGAke251bWJlcn0lYFxyXG4gICAgfCBgJHtudW1iZXJ9dmhgXHJcbiAgICB8IGAke251bWJlcn12d2BcclxuICAgIHwgYCR7bnVtYmVyfXZtaW5gXHJcbiAgICB8IGAke251bWJlcn12bWF4YFxyXG4gICAgfCBgJHtudW1iZXJ9Y2hgXHJcbiAgICB8IGAke251bWJlcn1leGBcclxuICAgIHwgYCR7bnVtYmVyfXB0YFxyXG4gICAgfCBgJHtudW1iZXJ9cGNgXHJcbiAgICB8IGAke251bWJlcn1pbmBcclxuICAgIHwgYCR7bnVtYmVyfWNtYFxyXG4gICAgfCBgJHtudW1iZXJ9bW1gXHJcblxyXG5leHBvcnQgdHlwZSBDU1NMZW5ndGggPSBDU1NVbml0IHwgXCJhdXRvXCIgfCBcImluaGVyaXRcIiB8IFwiaW5pdGlhbFwiIHwgXCJ1bnNldFwiIHwgXCJcIiB8IHN0cmluZyB8IG51bWJlclxyXG5cclxuLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmVkIHJlcHJlc2VudGF0aW9uIG9mIENTUyBsZW5ndGhcclxuLy8gQ29udGFpbnMgdmFsdWUgYW5kIHVuaXQgcHJvcGVydGllcyB3aXRoIHZhbHVlT2YgYW5kIHRvU3RyaW5nIG1ldGhvZHNcclxuZXhwb3J0IGludGVyZmFjZSBDU1NMZW5ndGhPYmplY3Qge1xyXG4gICAgdmFsdWU6IG51bWJlclxyXG4gICAgdW5pdDogc3RyaW5nXHJcbiAgICB2YWx1ZU9mKCk6IHN0cmluZ1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nXHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSBDU1MgbGVuZ3RoIHN0cmluZ3MgaW50byBzdHJ1Y3R1cmVkIG9iamVjdHNcclxuLy8gVHJlYXRzIGVtcHR5IHN0cmluZ3MgYXMgdW5kZWZpbmVkXHJcbi8vIFN1cHBvcnRzIENTUyBrZXl3b3JkcyAoYXV0bywgaW5oZXJpdCwgaW5pdGlhbCwgdW5zZXQpIGFuZCBudW1lcmljIHZhbHVlcyB3aXRoIHVuaXRzXHJcbi8vIFRyZWF0cyBwbGFpbiBudW1iZXJzIGFzIHBpeGVscyAoZS5nLiwgMSAtPiAxcHgpXHJcbi8vIFRyZWF0cyBwbGFpbiBudW1iZXJzIGFzIHBpeGVscyAoZS5nLiwgMSAtPiAxcHgpXHJcbmNvbnN0IHBhcnNlQ1NTTGVuZ3RoID0gKHZhbHVlOiBDU1NMZW5ndGggfCBDU1NMZW5ndGhPYmplY3QgfCB1bmRlZmluZWQpOiBDU1NMZW5ndGhPYmplY3QgfCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQgPT4ge1xyXG4gICAgLy8gSWYgaXQncyBhbiBlbXB0eSBzdHJpbmcsIHJldHVybiB1bmRlZmluZWRcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGl0J3MgYWxyZWFkeSBhIHN0cnVjdHVyZWQgb2JqZWN0LCByZXR1cm4gaXRcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsICYmICd2YWx1ZScgaW4gdmFsdWUgJiYgJ3VuaXQnIGluIHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLnZhbHVlLFxyXG4gICAgICAgICAgICB1bml0OiB2YWx1ZS51bml0LFxyXG4gICAgICAgICAgICB2YWx1ZU9mOiAoKSA9PiBgJHt2YWx1ZS52YWx1ZX0ke3ZhbHVlLnVuaXR9YCxcclxuICAgICAgICAgICAgdG9TdHJpbmc6ICgpID0+IGAke3ZhbHVlLnZhbHVlfSR7dmFsdWUudW5pdH1gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGl0J3Mgb25lIG9mIHRoZSBzcGVjaWFsIGtleXdvcmRzLCByZXR1cm4gYXMgaXNcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJhdXRvXCIgfHwgdmFsdWUgPT09IFwiaW5oZXJpdFwiIHx8IHZhbHVlID09PSBcImluaXRpYWxcIiB8fCB2YWx1ZSA9PT0gXCJ1bnNldFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG5cclxuICAgIC8vIFBhcnNlIG51bWVyaWMgdmFsdWVzIHdpdGggdW5pdHNcclxuICAgIGNvbnN0IG1hdGNoID0gKHZhbHVlIGFzIHN0cmluZykubWF0Y2goL14oLT9cXGQqXFwuP1xcZCspKFthLXpBLVolXSspJC8pXHJcbiAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICBjb25zdCBbLCBudW0sIHVuaXRdID0gbWF0Y2hcclxuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBwYXJzZUZsb2F0KG51bSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogbnVtZXJpY1ZhbHVlLFxyXG4gICAgICAgICAgICB1bml0LFxyXG4gICAgICAgICAgICB2YWx1ZU9mOiAoKSA9PiBgJHtudW1lcmljVmFsdWV9JHt1bml0fWAsXHJcbiAgICAgICAgICAgIHRvU3RyaW5nOiAoKSA9PiBgJHtudW1lcmljVmFsdWV9JHt1bml0fWBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgaXQncyBhIHBsYWluIG51bWJlciwgdHJlYXQgYXMgcGl4ZWxzXHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAvXi0/XFxkKlxcLj9cXGQrJC8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBudW1lcmljVmFsdWUsXHJcbiAgICAgICAgICAgIHVuaXQ6ICdweCcsXHJcbiAgICAgICAgICAgIHZhbHVlT2Y6ICgpID0+IGAke251bWVyaWNWYWx1ZX1weGAsXHJcbiAgICAgICAgICAgIHRvU3RyaW5nOiAoKSA9PiBgJHtudW1lcmljVmFsdWV9cHhgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiBhcyBpcyBpZiBwYXJzaW5nIGZhaWxzXHJcbiAgICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgc3RydWN0dXJlZCBvYmplY3RzIGJhY2sgdG8gc3RyaW5nc1xyXG4vLyBDb252ZXJ0cyBDU1NMZW5ndGhPYmplY3QgdG8gQ1NTIGxlbmd0aCBzdHJpbmdcclxuLy8gQ29udmVydHMgbnVtYmVycyB0byBwaXhlbCB2YWx1ZXNcclxuY29uc3Qgc3RyaW5naWZ5Q1NTTGVuZ3RoID0gKHZhbHVlOiBDU1NMZW5ndGhPYmplY3QgfCBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHJldHVybiB2YWx1ZVxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiBgJHt2YWx1ZX1weGBcclxuICAgIHJldHVybiBgJHt2YWx1ZS52YWx1ZX0ke3ZhbHVlLnVuaXR9YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSHRtbExlbmd0aDogT2JzZXJ2YWJsZU9wdGlvbnM8LyogQ1NTTGVuZ3RoIHwgQ1NTTGVuZ3RoT2JqZWN0IHwgKi8gbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHtcclxuICAgIGVxdWFsczogKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJzZWRBID0gcGFyc2VDU1NMZW5ndGgoYSlcclxuICAgICAgICBjb25zdCBwYXJzZWRCID0gcGFyc2VDU1NMZW5ndGgoYilcclxuXHJcbiAgICAgICAgLy8gSWYgYm90aCBhcmUgc3RyaW5ncywgY29tcGFyZSBkaXJlY3RseVxyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VkQSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHBhcnNlZEIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRBID09PSBwYXJzZWRCXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBib3RoIGFyZSBvYmplY3RzLCBjb21wYXJlIHRoZWlyIHByb3BlcnRpZXNcclxuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZEEgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwYXJzZWRCID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkQS52YWx1ZSA9PT0gcGFyc2VkQi52YWx1ZSAmJiBwYXJzZWRBLnVuaXQgPT09IHBhcnNlZEIudW5pdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGV5J3JlIG5vdCBlcXVhbFxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHR5cGU6IE9iamVjdCxcclxuICAgIHRvSHRtbDogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VDU1NMZW5ndGgodmFsdWUpXHJcbiAgICAgICAgaWYgKHBhcnNlZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkIGFzIGFueVxyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgcGFyc2VkID09PSAnbnVtYmVyJykgcmV0dXJuIHBhcnNlZCBhcyBhbnlcclxuICAgICAgICByZXR1cm4gc3RyaW5naWZ5Q1NTTGVuZ3RoKHBhcnNlZCkgYXMgYW55XHJcbiAgICB9LFxyXG4gICAgZnJvbUh0bWw6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSByZXR1cm4gdmFsdWVcclxuICAgICAgICByZXR1cm4gcGFyc2VDU1NMZW5ndGgodmFsdWUgYXMgQ1NTTGVuZ3RoKSBhcyBhbnkvL2FzIENTU0xlbmd0aE9iamVjdFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHR5cGUgeyBPYnNlcnZhYmxlT3B0aW9ucyB9IGZyb20gXCJzb2J5XCJcclxuaW1wb3J0IHR5cGUgeyBDU1NMZW5ndGggfSBmcm9tIFwiLi9odG1sLWxlbmd0aFwiXHJcblxyXG4vLyBEZWZpbmUgdGhlIHN0cnVjdHVyZWQgcmVwcmVzZW50YXRpb24gb2YgQ1NTIGJveCB2YWx1ZXNcclxuLy8gQ29udGFpbnMgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IHByb3BlcnRpZXMgd2l0aCB2YWx1ZU9mIGFuZCB0b1N0cmluZyBtZXRob2RzXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ1NTQm94T2JqZWN0IHtcclxuICAgIHRvcDogQ1NTTGVuZ3RoXHJcbiAgICByaWdodDogQ1NTTGVuZ3RoXHJcbiAgICBib3R0b206IENTU0xlbmd0aFxyXG4gICAgbGVmdDogQ1NTTGVuZ3RoXHJcbiAgICB2YWx1ZU9mKCk6IHN0cmluZ1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENTU0JveFZhbHVlID0gQ1NTTGVuZ3RoIHwgW0NTU0xlbmd0aF0gfCBbQ1NTTGVuZ3RoLCBDU1NMZW5ndGhdIHwgW0NTU0xlbmd0aCwgQ1NTTGVuZ3RoLCBDU1NMZW5ndGhdIHwgW0NTU0xlbmd0aCwgQ1NTTGVuZ3RoLCBDU1NMZW5ndGgsIENTU0xlbmd0aF0gfCBDU1NCb3hPYmplY3RcclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSBDU1MgYm94IHZhbHVlcyBpbnRvIGEgY29uc2lzdGVudCBvYmplY3QgZm9ybWF0XHJcbi8vIFRyZWF0cyBlbXB0eSBzdHJpbmdzIGFzIHVuZGVmaW5lZFxyXG4vLyBTdXBwb3J0cyBzaW5nbGUgdmFsdWVzLCBhcnJheXMgKDEtNCBlbGVtZW50cyksIGFuZCBzdHJ1Y3R1cmVkIG9iamVjdHNcclxuLy8gUGxhaW4gbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBwaXhlbHMgKGUuZy4sIDEgLT4gMXB4KSB0aHJvdWdoIEh0bWxMZW5ndGggcGFyc2luZ1xyXG5jb25zdCBwYXJzZUNTU0JveCA9ICh2YWx1ZTogQ1NTQm94VmFsdWUpOiBDU1NCb3hPYmplY3QgfCB1bmRlZmluZWQgPT4ge1xyXG4gICAgLy8gSWYgaXQncyBhbiBlbXB0eSBzdHJpbmcsIHJldHVybiB1bmRlZmluZWRcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBpdCdzIGFscmVhZHkgYSBzdHJ1Y3R1cmVkIG9iamVjdCwgcmV0dXJuIGl0XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAndG9wJyBpbiB2YWx1ZSAmJiAncmlnaHQnIGluIHZhbHVlICYmICdib3R0b20nIGluIHZhbHVlICYmICdsZWZ0JyBpbiB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcDogdmFsdWUudG9wLFxyXG4gICAgICAgICAgICByaWdodDogdmFsdWUucmlnaHQsXHJcbiAgICAgICAgICAgIGJvdHRvbTogdmFsdWUuYm90dG9tLFxyXG4gICAgICAgICAgICBsZWZ0OiB2YWx1ZS5sZWZ0LFxyXG4gICAgICAgICAgICB2YWx1ZU9mOiAoKSA9PiBgJHt2YWx1ZS50b3B9ICR7dmFsdWUucmlnaHR9ICR7dmFsdWUuYm90dG9tfSAke3ZhbHVlLmxlZnR9YCxcclxuICAgICAgICAgICAgdG9TdHJpbmc6ICgpID0+IGAke3ZhbHVlLnRvcH0gJHt2YWx1ZS5yaWdodH0gJHt2YWx1ZS5ib3R0b219ICR7dmFsdWUubGVmdH1gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGl0J3MgYW4gYXJyYXksIGNvbnZlcnQgdG8gb2JqZWN0IGZvcm1hdCBmb2xsb3dpbmcgQ1NTIHNob3J0aGFuZCBydWxlc1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FzZSAxOiAvLyBBbGwgc2lkZXMgc2FtZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHZhbHVlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB2YWx1ZVswXSxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHZhbHVlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbHVlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlT2Y6ICgpID0+IGAke3ZhbHVlWzBdfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9TdHJpbmc6ICgpID0+IGAke3ZhbHVlWzBdfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAyOiAvLyBUb3AvYm90dG9tLCBsZWZ0L3JpZ2h0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdmFsdWVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHZhbHVlWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogdmFsdWVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdmFsdWVbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVPZjogKCkgPT4gYCR7dmFsdWVbMF19ICR7dmFsdWVbMV19YCxcclxuICAgICAgICAgICAgICAgICAgICB0b1N0cmluZzogKCkgPT4gYCR7dmFsdWVbMF19ICR7dmFsdWVbMV19YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDM6IC8vIFRvcCwgbGVmdC9yaWdodCwgYm90dG9tXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdmFsdWVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHZhbHVlWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogdmFsdWVbMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdmFsdWVbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVPZjogKCkgPT4gYCR7dmFsdWVbMF19ICR7dmFsdWVbMV19ICR7dmFsdWVbMl19YCxcclxuICAgICAgICAgICAgICAgICAgICB0b1N0cmluZzogKCkgPT4gYCR7dmFsdWVbMF19ICR7dmFsdWVbMV19ICR7dmFsdWVbMl19YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDQ6IC8vIFRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHZhbHVlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB2YWx1ZVsxXSxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHZhbHVlWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbHVlWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlT2Y6ICgpID0+IGAke3ZhbHVlWzBdfSAke3ZhbHVlWzFdfSAke3ZhbHVlWzJdfSAke3ZhbHVlWzNdfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9TdHJpbmc6ICgpID0+IGAke3ZhbHVlWzBdfSAke3ZhbHVlWzFdfSAke3ZhbHVlWzJdfSAke3ZhbHVlWzNdfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgaXQncyBhIHNpbmdsZSBDU1MgbGVuZ3RoIHZhbHVlLCB0cmVhdCBhcyBhbGwgc2lkZXMgc2FtZVxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcDogdmFsdWUsXHJcbiAgICAgICAgICAgIHJpZ2h0OiB2YWx1ZSxcclxuICAgICAgICAgICAgYm90dG9tOiB2YWx1ZSxcclxuICAgICAgICAgICAgbGVmdDogdmFsdWUsXHJcbiAgICAgICAgICAgIHZhbHVlT2Y6ICgpID0+IGAke3ZhbHVlfWAsXHJcbiAgICAgICAgICAgIHRvU3RyaW5nOiAoKSA9PiBgJHt2YWx1ZX1gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmF1bHQgZmFsbGJhY2tcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiAnMHB4JyxcclxuICAgICAgICByaWdodDogJzBweCcsXHJcbiAgICAgICAgYm90dG9tOiAnMHB4JyxcclxuICAgICAgICBsZWZ0OiAnMHB4JyxcclxuICAgICAgICB2YWx1ZU9mOiAoKSA9PiAnMHB4JyxcclxuICAgICAgICB0b1N0cmluZzogKCkgPT4gJzBweCdcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEh0bWxCb3g6IE9ic2VydmFibGVPcHRpb25zPC8qIENTU0JveFZhbHVlICovIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB7XHJcbiAgICAvLyBDb21wYXJlIHR3byBDU1MgYm94IHZhbHVlcyBmb3IgZXF1YWxpdHlcclxuICAgIC8vIEhhbmRsZXMgdW5kZWZpbmVkLCBzdHJpbmcsIGFuZCBvYmplY3QgdmFsdWVzXHJcbiAgICBlcXVhbHM6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm94QSA9IHBhcnNlQ1NTQm94KGEpXHJcbiAgICAgICAgY29uc3QgYm94QiA9IHBhcnNlQ1NTQm94KGIpXHJcblxyXG4gICAgICAgIC8vIElmIGVpdGhlciBpcyB1bmRlZmluZWQsIHRoZXkncmUgZXF1YWwgb25seSBpZiBib3RoIGFyZSB1bmRlZmluZWRcclxuICAgICAgICBpZiAoYm94QSA9PT0gdW5kZWZpbmVkIHx8IGJveEIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYm94QSA9PT0gYm94QlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJveEEudG9wID09PSBib3hCLnRvcCAmJlxyXG4gICAgICAgICAgICBib3hBLnJpZ2h0ID09PSBib3hCLnJpZ2h0ICYmXHJcbiAgICAgICAgICAgIGJveEEuYm90dG9tID09PSBib3hCLmJvdHRvbSAmJlxyXG4gICAgICAgICAgICBib3hBLmxlZnQgPT09IGJveEIubGVmdFxyXG4gICAgfSxcclxuICAgIHR5cGU6IE9iamVjdCxcclxuICAgIHRvSHRtbDogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm94ID0gcGFyc2VDU1NCb3godmFsdWUpXHJcbiAgICAgICAgaWYgKGJveCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkIGFzIGFueVxyXG4gICAgICAgIHJldHVybiBib3gudG9TdHJpbmcoKSBhcyBhbnlcclxuICAgIH0sXHJcbiAgICBmcm9tSHRtbDogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJyAnKS5maWx0ZXIocGFydCA9PiBwYXJ0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgc3dpdGNoIChwYXJ0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdG9wOiBwYXJ0c1swXSwgcmlnaHQ6IHBhcnRzWzBdLCBib3R0b206IHBhcnRzWzBdLCBsZWZ0OiBwYXJ0c1swXSwgdmFsdWVPZjogKCkgPT4gdmFsdWUsIHRvU3RyaW5nOiAoKSA9PiB2YWx1ZSB9IGFzIGFueSAvL2FzIENTU0JveE9iamVjdFxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0b3A6IHBhcnRzWzBdLCByaWdodDogcGFydHNbMV0sIGJvdHRvbTogcGFydHNbMF0sIGxlZnQ6IHBhcnRzWzFdLCB2YWx1ZU9mOiAoKSA9PiB2YWx1ZSwgdG9TdHJpbmc6ICgpID0+IHZhbHVlIH0gYXMgYW55IC8vYXMgQ1NTQm94T2JqZWN0XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHRvcDogcGFydHNbMF0sIHJpZ2h0OiBwYXJ0c1sxXSwgYm90dG9tOiBwYXJ0c1syXSwgbGVmdDogcGFydHNbMV0sIHZhbHVlT2Y6ICgpID0+IHZhbHVlLCB0b1N0cmluZzogKCkgPT4gdmFsdWUgfSBhcyBhbnkgLy9hcyBDU1NCb3hPYmplY3RcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdG9wOiBwYXJ0c1swXSwgcmlnaHQ6IHBhcnRzWzFdLCBib3R0b206IHBhcnRzWzJdLCBsZWZ0OiBwYXJ0c1szXSwgdmFsdWVPZjogKCkgPT4gdmFsdWUsIHRvU3RyaW5nOiAoKSA9PiB2YWx1ZSB9IGFzIGFueSAvL2FzIENTU0JveE9iamVjdFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdG9wOiAnMHB4JywgcmlnaHQ6ICcwcHgnLCBib3R0b206ICcwcHgnLCBsZWZ0OiAnMHB4JywgdmFsdWVPZjogKCkgPT4gJzBweCcsIHRvU3RyaW5nOiAoKSA9PiAnMHB4JyB9IGFzIGFueSAvL2FzIENTU0JveE9iamVjdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB0eXBlIHsgT2JzZXJ2YWJsZU9wdGlvbnMgfSBmcm9tIFwic29ieVwiXHJcblxyXG4vLyBEZWZpbmUgdGhlIHN0cnVjdHVyZWQgcmVwcmVzZW50YXRpb24gb2YgUkdCIGNvbG9yIHZhbHVlc1xyXG4vLyBDb250YWlucyByLCBnLCBiIHByb3BlcnRpZXMgd2l0aCB2YWx1ZU9mIGFuZCB0b1N0cmluZyBtZXRob2RzXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ1NTQ29sb3JPYmplY3Qge1xyXG4gICAgcjogbnVtYmVyXHJcbiAgICBnOiBudW1iZXJcclxuICAgIGI6IG51bWJlclxyXG4gICAgdmFsdWVPZigpOiBzdHJpbmdcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDU1NDb2xvclZhbHVlID0gc3RyaW5nIHwgbnVtYmVyIHwgQ1NTQ29sb3JPYmplY3RcclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSBDU1MgY29sb3Igc3RyaW5ncyBpbnRvIHN0cnVjdHVyZWQgb2JqZWN0c1xyXG4vLyBUcmVhdHMgZW1wdHkgc3RyaW5ncyBhcyB1bmRlZmluZWRcclxuLy8gU3VwcG9ydHMgaGV4IGNvbG9ycyAoI3JnYiwgI3JyZ2diYiksIFJHQiBvYmplY3RzLCBhbmQgbnVtZXJpYyB2YWx1ZXNcclxuY29uc3QgcGFyc2VDU1NDb2xvciA9ICh2YWx1ZTogQ1NTQ29sb3JWYWx1ZSk6IENTU0NvbG9yT2JqZWN0IHwgc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcclxuICAgIC8vIElmIGl0J3MgYW4gZW1wdHkgc3RyaW5nLCByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgaXQncyBhbHJlYWR5IGEgc3RydWN0dXJlZCBvYmplY3QsIHJldHVybiBpdFxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwgJiYgJ3InIGluIHZhbHVlICYmICdnJyBpbiB2YWx1ZSAmJiAnYicgaW4gdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByOiB2YWx1ZS5yLFxyXG4gICAgICAgICAgICBnOiB2YWx1ZS5nLFxyXG4gICAgICAgICAgICBiOiB2YWx1ZS5iLFxyXG4gICAgICAgICAgICB2YWx1ZU9mOiAoKSA9PiBgIyR7TWF0aC5taW4oMjU1LCBNYXRoLm1heCgwLCB2YWx1ZS5yKSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyl9JHtNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIHZhbHVlLmcpKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKX0ke01hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgdmFsdWUuYikpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpfWAsXHJcbiAgICAgICAgICAgIHRvU3RyaW5nOiAoKSA9PiBgIyR7TWF0aC5taW4oMjU1LCBNYXRoLm1heCgwLCB2YWx1ZS5yKSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyl9JHtNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIHZhbHVlLmcpKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKX0ke01hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgdmFsdWUuYikpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpfWBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgaXQncyBhIHN0cmluZywgdHJ5IHRvIHBhcnNlIGl0XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vIEhhbmRsZSBoZXggZm9ybWF0ICNyZ2Igb3IgI3JyZ2diYlxyXG4gICAgICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKCcjJykpIHtcclxuICAgICAgICAgICAgY29uc3QgaGV4ID0gdmFsdWUuc2xpY2UoMSlcclxuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXhbMF0gKyBoZXhbMF0sIDE2KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGhleFsxXSArIGhleFsxXSwgMTYpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4WzJdICsgaGV4WzJdLCAxNilcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgciwgZywgYixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZU9mOiAoKSA9PiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b1N0cmluZzogKCkgPT4gdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChoZXgubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDAsIDIpLCAxNilcclxuICAgICAgICAgICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc2xpY2UoMiwgNCksIDE2KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg0LCA2KSwgMTYpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHIsIGcsIGIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVPZjogKCkgPT4gdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9TdHJpbmc6ICgpID0+IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmV0dXJuIGFzIGlzIGlmIHBhcnNpbmcgZmFpbHNcclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBpdCdzIGEgbnVtYmVyLCB0cmVhdCBhcyBSR0IgaW50ZWdlclxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBjb25zdCByID0gKHZhbHVlID4+IDE2KSAmIDB4RkZcclxuICAgICAgICBjb25zdCBnID0gKHZhbHVlID4+IDgpICYgMHhGRlxyXG4gICAgICAgIGNvbnN0IGIgPSB2YWx1ZSAmIDB4RkZcclxuICAgICAgICBjb25zdCBoZXggPSBgIyR7ci50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKX0ke2cudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyl9JHtiLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpfWBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByLCBnLCBiLFxyXG4gICAgICAgICAgICB2YWx1ZU9mOiAoKSA9PiBoZXgsXHJcbiAgICAgICAgICAgIHRvU3RyaW5nOiAoKSA9PiBoZXhcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIGFzIGlzIGlmIHBhcnNpbmcgZmFpbHNcclxuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IHN0cnVjdHVyZWQgb2JqZWN0cyBiYWNrIHRvIHN0cmluZ3NcclxuLy8gQ29udmVydHMgQ1NTQ29sb3JPYmplY3QgdG8gaGV4IGNvbG9yIHN0cmluZ1xyXG5jb25zdCBzdHJpbmdpZnlDU1NDb2xvciA9ICh2YWx1ZTogQ1NTQ29sb3JPYmplY3QgfCBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHJldHVybiB2YWx1ZVxyXG4gICAgcmV0dXJuIGAjJHtNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIHZhbHVlLnIpKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKX0ke01hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgdmFsdWUuZykpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpfSR7TWF0aC5taW4oMjU1LCBNYXRoLm1heCgwLCB2YWx1ZS5iKSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyl9YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSHRtbENvbG9yOiBPYnNlcnZhYmxlT3B0aW9uczwvKiBDU1NDb2xvclZhbHVlICovIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB7XHJcbiAgICBlcXVhbHM6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkQSA9IHBhcnNlQ1NTQ29sb3IoYSlcclxuICAgICAgICBjb25zdCBwYXJzZWRCID0gcGFyc2VDU1NDb2xvcihiKVxyXG5cclxuICAgICAgICAvLyBJZiBib3RoIGFyZSBzdHJpbmdzLCBjb21wYXJlIGRpcmVjdGx5XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRBID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgcGFyc2VkQiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZEEgPT09IHBhcnNlZEJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGJvdGggYXJlIG9iamVjdHMsIGNvbXBhcmUgdGhlaXIgcHJvcGVydGllc1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VkQSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBhcnNlZEIgPT09ICdvYmplY3QnICYmXHJcbiAgICAgICAgICAgICdyJyBpbiBwYXJzZWRBICYmICdyJyBpbiBwYXJzZWRCKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRBLnIgPT09IHBhcnNlZEIuciAmJlxyXG4gICAgICAgICAgICAgICAgcGFyc2VkQS5nID09PSBwYXJzZWRCLmcgJiZcclxuICAgICAgICAgICAgICAgIHBhcnNlZEEuYiA9PT0gcGFyc2VkQi5iXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoZXkncmUgbm90IGVxdWFsXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9LFxyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgdG9IdG1sOiAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUNTU0NvbG9yKHZhbHVlKVxyXG4gICAgICAgIGlmIChwYXJzZWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZCBhcyBhbnlcclxuICAgICAgICByZXR1cm4gc3RyaW5naWZ5Q1NTQ29sb3IocGFyc2VkKSBhcyBhbnlcclxuICAgIH0sXHJcbiAgICBmcm9tSHRtbDogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlIC8vYXMgQ1NTQ29sb3JWYWx1ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHR5cGUgeyBPYnNlcnZhYmxlT3B0aW9ucyB9IGZyb20gXCJzb2J5XCJcclxuXHJcbi8vIERlZmluZSB0aGUgc3RydWN0dXJlZCByZXByZXNlbnRhdGlvbiBvZiBDU1Mgc3R5bGUgb2JqZWN0c1xyXG5leHBvcnQgaW50ZXJmYWNlIENTU1N0eWxlT2JqZWN0IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDU1NTdHlsZVZhbHVlID0gc3RyaW5nIHwgQ1NTU3R5bGVPYmplY3RcclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IEhUTUwgc3RyaW5nIHZhbHVlcyB0byBDU1Mgc3R5bGUgb2JqZWN0c1xyXG4vLyBUcmVhdHMgZW1wdHkgc3RyaW5ncyBhbmQgaW52YWxpZCB2YWx1ZXMgYXMgdW5kZWZpbmVkXHJcbmNvbnN0IHRvU3R5bGVPYmplY3QgPSAodmFsdWU6IENTU1N0eWxlVmFsdWUgfCB1bmRlZmluZWQpOiBDU1NTdHlsZU9iamVjdCB8IHVuZGVmaW5lZCA9PiB7XHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHJldHVybiB1bmRlZmluZWRcclxuXHJcbiAgICAvLyBJZiBpdCdzIGFscmVhZHkgYSBzdHlsZSBvYmplY3QsIHJldHVybiBpdFxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB0cnkgdG8gcGFyc2UgaXQgYXMgQ1NTIHN0eWxlc1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvLyBIYW5kbGUgZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHJldHVybiB1bmRlZmluZWRcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGU6IENTU1N0eWxlT2JqZWN0ID0ge31cclxuICAgICAgICBjb25zdCBydWxlcyA9IHZhbHVlLnNwbGl0KCc7JylcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIHJ1bGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaW1tZWRSdWxlID0gcnVsZS50cmltKClcclxuICAgICAgICAgICAgaWYgKHRyaW1tZWRSdWxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvbkluZGV4ID0gdHJpbW1lZFJ1bGUuaW5kZXhPZignOicpXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb25JbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRyaW1tZWRSdWxlLnN1YnN0cmluZygwLCBjb2xvbkluZGV4KS50cmltKClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRyaW1tZWRSdWxlLnN1YnN0cmluZyhjb2xvbkluZGV4ICsgMSkudHJpbSgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ICYmIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgQ1NTIHByb3BlcnR5IHRvIGNhbWVsQ2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW1lbENhc2VQcm9wZXJ0eSA9IHByb3BlcnR5LnJlcGxhY2UoLy0oW2Etel0pL2csIChnKSA9PiBnWzFdLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlW2NhbWVsQ2FzZVByb3BlcnR5XSA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGUpLmxlbmd0aCA+IDAgPyBzdHlsZSA6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWRcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgQ1NTIHN0eWxlIG9iamVjdHMgdG8gQ1NTIHN0cmluZ1xyXG4vLyBDb252ZXJ0cyBjYW1lbENhc2UgcHJvcGVydGllcyBiYWNrIHRvIGtlYmFiLWNhc2VcclxuY29uc3Qgc3RyaW5naWZ5U3R5bGVPYmplY3QgPSAodmFsdWU6IENTU1N0eWxlT2JqZWN0IHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm4gXCJcIlxyXG5cclxuICAgIGNvbnN0IGNzc1J1bGVzOiBzdHJpbmdbXSA9IFtdXHJcbiAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcclxuICAgICAgICBpZiAocHJvcGVydHkgJiYgdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgY2FtZWxDYXNlIHRvIGtlYmFiLWNhc2VcclxuICAgICAgICAgICAgY29uc3Qga2ViYWJDYXNlUHJvcGVydHkgPSBwcm9wZXJ0eS5yZXBsYWNlKC9bQS1aXS9nLCBtYXRjaCA9PiBgLSR7bWF0Y2gudG9Mb3dlckNhc2UoKX1gKVxyXG4gICAgICAgICAgICBjc3NSdWxlcy5wdXNoKGAke2tlYmFiQ2FzZVByb3BlcnR5fTogJHt2YWx9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNzc1J1bGVzLmpvaW4oJzsgJylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEh0bWxTdHlsZTogT2JzZXJ2YWJsZU9wdGlvbnM8Q1NTU3R5bGVWYWx1ZSB8IHN0cmluZz4gPSB7XHJcbiAgICAvLyBDb21wYXJlIHR3byBDU1Mgc3R5bGUgdmFsdWVzIGZvciBlcXVhbGl0eVxyXG4gICAgLy8gSGFuZGxlcyB1bmRlZmluZWQsIHN0cmluZywgYW5kIG9iamVjdCB2YWx1ZXNcclxuICAgIGVxdWFsczogKGE6IENTU1N0eWxlVmFsdWUgfCB1bmRlZmluZWQsIGI6IENTU1N0eWxlVmFsdWUgfCB1bmRlZmluZWQpID0+IHtcclxuICAgICAgICBjb25zdCBzdHlsZUEgPSB0b1N0eWxlT2JqZWN0KGEpXHJcbiAgICAgICAgY29uc3Qgc3R5bGVCID0gdG9TdHlsZU9iamVjdChiKVxyXG5cclxuICAgICAgICAvLyBJZiBib3RoIGFyZSB1bmRlZmluZWQsIHRoZXkncmUgZXF1YWxcclxuICAgICAgICBpZiAoc3R5bGVBID09PSB1bmRlZmluZWQgJiYgc3R5bGVCID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlXHJcblxyXG4gICAgICAgIC8vIElmIG9ubHkgb25lIGlzIHVuZGVmaW5lZCwgdGhleSdyZSBub3QgZXF1YWxcclxuICAgICAgICBpZiAoc3R5bGVBID09PSB1bmRlZmluZWQgfHwgc3R5bGVCID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZVxyXG5cclxuICAgICAgICAvLyBDb21wYXJlIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25zXHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ2lmeVN0eWxlT2JqZWN0KHN0eWxlQSkgPT09IHN0cmluZ2lmeVN0eWxlT2JqZWN0KHN0eWxlQilcclxuICAgIH0sXHJcbiAgICB0eXBlOiBPYmplY3QsXHJcbiAgICB0b0h0bWw6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gdG9TdHlsZU9iamVjdCh2YWx1ZSlcclxuICAgICAgICByZXR1cm4gc3RyaW5naWZ5U3R5bGVPYmplY3Qoc3R5bGUpIGFzIGFueVxyXG4gICAgfSxcclxuICAgIGZyb21IdG1sOiAodmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gdG9TdHlsZU9iamVjdCh2YWx1ZSkgfHwge31cclxuICAgIH1cclxufSIsImltcG9ydCB0eXBlIHsgT2JzZXJ2YWJsZU9wdGlvbnMgfSBmcm9tIFwic29ieVwiXHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHN0cmluZyB2YWx1ZXNcclxuLy8gVHJlYXRzIG51bGwgYW5kIHVuZGVmaW5lZCBhcyBlbXB0eSBzdHJpbmdzXHJcbmNvbnN0IHRvU3RyaW5nID0gKHZhbHVlOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJydcclxuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIdG1sU3RyaW5nOiBPYnNlcnZhYmxlT3B0aW9uczxzdHJpbmcgfCB1bmRlZmluZWQ+ID0ge1xyXG4gICAgZXF1YWxzOiAoYTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgYjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4gdG9TdHJpbmcoYSkgPT09IHRvU3RyaW5nKGIpLFxyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgdG9IdG1sOiAodmFsdWUpID0+IHRvU3RyaW5nKHZhbHVlKSxcclxuICAgIGZyb21IdG1sOiAodmFsdWUpID0+IHRvU3RyaW5nKHZhbHVlKVxyXG59IiwiLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSBmdW5jdGlvbiB2YWx1ZXNcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGVPcHRpb25zIH0gZnJvbSBcInNvYnlcIlxyXG5cclxuLy8gRnVuY3Rpb25zIGNhbm5vdCBiZSBtZWFuaW5nZnVsbHkgY29udmVydGVkIHRvIEhUTUwgYXR0cmlidXRlcywgc28gd2UgcmV0dXJuIHVuZGVmaW5lZFxyXG5jb25zdCB0b0Z1bmN0aW9uU3RyaW5nID0gKHZhbHVlOiBbRnVuY3Rpb25dIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgLy8gRnVuY3Rpb25zIGRvbid0IGhhdmUgYSBtZWFuaW5nZnVsIHN0cmluZyByZXByZXNlbnRhdGlvbiBmb3IgSFRNTCBhdHRyaWJ1dGVzXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIdG1sRnVuY3Rpb246IE9ic2VydmFibGVPcHRpb25zPFtGdW5jdGlvbl0gfCB1bmRlZmluZWQ+ID0ge1xyXG4gICAgZXF1YWxzOiAoYTogW0Z1bmN0aW9uXSB8IG51bGwgfCB1bmRlZmluZWQsIGI6IFtGdW5jdGlvbl0gfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgICAgICAgLy8gRnVuY3Rpb25zIGFyZSBjb21wYXJlZCBieSByZWZlcmVuY2VcclxuICAgICAgICByZXR1cm4gYSA9PT0gYlxyXG4gICAgfSxcclxuICAgIHR5cGU6IFtGdW5jdGlvbl0sXHJcbiAgICB0b0h0bWw6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRvRnVuY3Rpb25TdHJpbmcodmFsdWUpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCBhcyBhbnlcclxuICAgIH0sXHJcbiAgICBmcm9tSHRtbDogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgLy8gRnVuY3Rpb25zIGNhbm5vdCBiZSBtZWFuaW5nZnVsbHkgY3JlYXRlZCBmcm9tIEhUTUwgc3RyaW5nc1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQgYXMgYW55XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgdHlwZSB7IE9ic2VydmFibGVPcHRpb25zLCBGdW5jdGlvbk1heWJlIH0gZnJvbSBcInNvYnlcIlxyXG5cclxuLy8gRGVmaW5lIHRoZSB0eXBlcyBmb3IgY2xhc3MgdmFsdWVzXHJcbmV4cG9ydCB0eXBlIENsYXNzVmFsdWUgPVxyXG4gIHwgc3RyaW5nXHJcbiAgfCBudW1iZXJcclxuICB8IGJvb2xlYW5cclxuICB8IG51bGxcclxuICB8IHVuZGVmaW5lZFxyXG4gIHwgQ2xhc3NBcnJheVxyXG4gIHwgQ2xhc3NEaWN0aW9uYXJ5XHJcbiAgfCAoKCkgPT4gQ2xhc3NWYWx1ZSlcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NEaWN0aW9uYXJ5IHtcclxuICBbaWQ6IHN0cmluZ106IEZ1bmN0aW9uTWF5YmU8Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQ+XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NBcnJheSBleHRlbmRzIEFycmF5PENsYXNzVmFsdWU+IHsgfVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgY2xhc3MgdmFsdWVzIHRvIHN0cmluZ1xyXG5jb25zdCB0b0NsYXNzU3RyaW5nID0gKHZhbHVlOiBDbGFzc1ZhbHVlKTogc3RyaW5nID0+IHtcclxuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnXHJcblxyXG4gIC8vIEhhbmRsZSBzdHJpbmcgYW5kIG51bWJlciBkaXJlY3RseVxyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSByZXR1cm4gdmFsdWVcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIFN0cmluZyh2YWx1ZSlcclxuXHJcbiAgLy8gSGFuZGxlIGJvb2xlYW5cclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHJldHVybiB2YWx1ZSA/ICcnIDogJydcclxuXHJcbiAgLy8gSGFuZGxlIGZ1bmN0aW9uXHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIHRvQ2xhc3NTdHJpbmcodmFsdWUoKSlcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICByZXR1cm4gJydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEhhbmRsZSBhcnJheVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLm1hcCh0b0NsYXNzU3RyaW5nKS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbiAgfVxyXG5cclxuICAvLyBIYW5kbGUgb2JqZWN0L2RpY3Rpb25hcnlcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHZhbHVlKVxyXG4gICAgICAuZmlsdGVyKChba2V5LCB2YWxdKSA9PiB7XHJcbiAgICAgICAgLy8gSGFuZGxlIG9ic2VydmFibGUgdmFsdWVzXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc29sdmVkVmFsID0gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHZhbCgpIDogdmFsXHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZWRWYWwgPT09IHRydWVcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLm1hcCgoW2tleV0pID0+IGtleSlcclxuICAgICAgLmpvaW4oJyAnKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuICcnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIdG1sQ2xhc3M6IE9ic2VydmFibGVPcHRpb25zPENsYXNzVmFsdWUgfCB1bmRlZmluZWQ+ID0ge1xyXG4gIGVxdWFsczogKGEsIGIpID0+IHRvQ2xhc3NTdHJpbmcoYSkgPT09IHRvQ2xhc3NTdHJpbmcoYiksXHJcbiAgdHlwZTogU3RyaW5nLFxyXG4gIHRvSHRtbDogKHZhbHVlKSA9PiB0b0NsYXNzU3RyaW5nKHZhbHVlKSxcclxuICBmcm9tSHRtbDogKHZhbHVlKSA9PiB2YWx1ZSBhcyBDbGFzc1ZhbHVlXHJcbn0iLCIvKiBFWFBPUlQgKi9cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vc2luZ2xldG9uJ1xyXG4vLyBleHBvcnQgKiBmcm9tICcuL2pzeC9qc3gnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnXHJcbmV4cG9ydCAqIGZyb20gJy4vanN4L3J1bnRpbWUnXHJcbmV4cG9ydCAqIGZyb20gJy4vaG9va3MnXHJcbi8vIEV4cGxpY2l0bHkgZXhwb3J0IGZyb20gbWV0aG9kcyBhbmQgdXRpbHMgdG8gYXZvaWQgYXNzaWduIGNvbmZsaWN0XHJcbmV4cG9ydCB7XHJcbiAgICAkLFxyXG4gICAgJCQsXHJcbiAgICBiYXRjaCxcclxuICAgIGNvbnRleHQsXHJcbiAgICBjcmVhdGVDb250ZXh0LFxyXG4gICAgY3JlYXRlRGlyZWN0aXZlLFxyXG4gICAgY3JlYXRlRWxlbWVudCxcclxuICAgIGRlZmF1bHRzLFxyXG4gICAgYXNzaWduLFxyXG4gICAgbWFrZSxcclxuICAgIGNsb25lLFxyXG4gICAgaCxcclxuICAgIGhtcixcclxuICAgIGh0bWwsXHJcbiAgICBpc0JhdGNoaW5nLFxyXG4gICAgaXNPYnNlcnZhYmxlLFxyXG4gICAgaXNPYnNlcnZhYmxlV3JpdGFibGUsXHJcbiAgICBpc1NlcnZlcixcclxuICAgIGlzU3RvcmUsXHJcbiAgICBsYXp5LFxyXG4gICAgcmVuZGVyLFxyXG4gICAgcmVuZGVyVG9TdHJpbmcsXHJcbiAgICByZXNvbHZlLFxyXG4gICAgc3RvcmUsXHJcbiAgICB0ZW1wbGF0ZSxcclxuICAgIHRpY2ssXHJcbiAgICB1bnRyYWNrLFxyXG4gICAgY2xvbmVFbGVtZW50LFxyXG4gICAgc2V0UmVmLFxyXG4gICAgY3VzdG9tRWxlbWVudCxcclxuICAgIHdyYXBDbG9uZUVsZW1lbnQsXHJcbiAgICBTWU1CT0xfU1RBQ0ssXHJcbiAgICBzZXRQZW5kaW5nQ29udGV4dFdyYXAsXHJcbiAgICBjb25zdW1lUGVuZGluZ0NvbnRleHRXcmFwLFxyXG59IGZyb20gJy4vbWV0aG9kcydcclxuXHJcbi8vIEV4cG9ydCBTU1IgdXRpbGl0aWVzIGZvciBQb3J0YWwgYW5kIG90aGVyIGNvbXBvbmVudHMgdGhhdCBuZWVkIG1vY2sgZG9jdW1lbnQgY3JlYXRpb25cclxuZXhwb3J0ICogYXMgc3NyIGZyb20gJy4vc3NyL2luZGV4J1xyXG5leHBvcnQgeyBXb2J5Q3VzdG9tRWxlbWVudHNSZWdpc3RyeSwgd29ieUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAnLi9tZXRob2RzL2N1c3RvbV9lbGVtZW50X3JlZ2lzdHJ5J1xyXG5leHBvcnQgdHlwZSB7XHJcbiAgICBFbGVtZW50QXR0cmlidXRlcyxcclxuICAgIEN1c3RvbUVsZW1lbnRDaGlsZHJlbixcclxuICAgIFN0eWxlRW5jYXBzdWxhdGlvblByb3BzLFxyXG59IGZyb20gJy4vbWV0aG9kcydcclxuZXhwb3J0IHtcclxuICAgIGNhc3RBcnJheSxcclxuICAgIGNhc3RFcnJvcixcclxuICAgIGZsYXR0ZW4sXHJcbiAgICBpbmRleE9mLFxyXG4gICAgaXNBcnJheSxcclxuICAgIGlzQm9vbGVhbixcclxuICAgIGlzQ29tcG9uZW50LFxyXG4gICAgaXNFcnJvcixcclxuICAgIGlzRmFsc3ksXHJcbiAgICBpc0Z1bmN0aW9uLFxyXG4gICAgaXNDbGFzcyxcclxuICAgIGlzRnVuY3Rpb25SZWFjdGl2ZSxcclxuICAgIGlzTmlsLFxyXG4gICAgaXNOb2RlLFxyXG4gICAgaXNPYmplY3QsXHJcbiAgICBpc1ByaW1pdGl2ZSxcclxuICAgIGlzUHJvbWlzZSxcclxuICAgIGlzU3RyaW5nLFxyXG4gICAgaXNTVkcsXHJcbiAgICBpc1NWR0VsZW1lbnQsXHJcbiAgICBpc1RlbXBsYXRlQWNjZXNzb3IsXHJcbiAgICBpc1RydXRoeSxcclxuICAgIGlzVm9pZENoaWxkLFxyXG4gICAgbWFyayxcclxuICAgIG5vb3AsXHJcbiAgICBvbmNlLFxyXG4gICAgZml4QmlnSW50LFxyXG4gICAgdG9BcnJheSxcclxuICAgIHNldFByb3AsXHJcbiAgICByZXNvbHZlQXJyYXlzQW5kU3RhdGljcyxcclxuICAgIGdldFNldHRlcnMsXHJcbiAgICBGcmFnbWVudFV0aWxzXHJcbn0gZnJvbSAnLi91dGlscydcclxuZXhwb3J0ICogZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuXHJcbi8vZXhwb3J0IHR5cGUge0NvbnRleHQsIERpcmVjdGl2ZSwgRGlyZWN0aXZlT3B0aW9ucywgRnVuY3Rpb25NYXliZSwgT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZVJlYWRvbmx5LCBPYnNlcnZhYmxlTWF5YmUsIE9ic2VydmFibGVPcHRpb25zLCBSZXNvdXJjZSwgU3RvcmVPcHRpb25zLCBDU1NQcm9wZXJ0aWVzLCBDb21wb25lbnQsIEpTWC5FbGVtZW50fSBmcm9tICcuL3R5cGVzJztcclxuXHJcbi8vIGV4cG9ydCB0eXBlIHtJQ29tcHV0YXRpb24sIElFZmZlY3QsIElNZW1vLCBJT2JzZXJ2YWJsZSwgSU9ic2VydmVyLCBJUmVhY3Rpb24sIElSb290LCBJU3VwZXJSb290LCBJU3VzcGVuc2V9IGZyb20gJ3NvYnknO1xyXG5leHBvcnQgdHlwZSB7IEJhdGNoRnVuY3Rpb24sIENhbGxiYWNrRnVuY3Rpb24sIENsZWFudXBGdW5jdGlvbiwgRGlzcG9zZUZ1bmN0aW9uLCBFZmZlY3RGdW5jdGlvbiwgRXJyb3JGdW5jdGlvbiwgRXF1YWxzRnVuY3Rpb24sIC8qIExpc3RlbmVyRnVuY3Rpb24sICovIE1hcEZ1bmN0aW9uLCAvKiBNYXBJbmRleEZ1bmN0aW9uLCAqLyBNYXBWYWx1ZUZ1bmN0aW9uLCBNZW1vRnVuY3Rpb24sIC8qIE9ic2VydmVkRnVuY3Rpb24sIE9ic2VydmVkRGlzcG9zYWJsZUZ1bmN0aW9uLCBSZWFjdGlvbkZ1bmN0aW9uLCAqLyBTZWxlY3RvckZ1bmN0aW9uLCBTdXNwZW5zZUZ1bmN0aW9uLCBUcnlDYXRjaEZ1bmN0aW9uLCBVbnRyYWNrRnVuY3Rpb24sIFVwZGF0ZUZ1bmN0aW9uLCBXaXRoRnVuY3Rpb24gfSBmcm9tICcuL3NvYnknXHJcbmV4cG9ydCB0eXBlIHsgT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZVJlYWRvbmx5LCBPYnNlcnZhYmxlT3B0aW9ucyB9IGZyb20gJ3NvYnknXHJcbmV4cG9ydCB7IERFQlVHR0VSLCBTdGFjaywgY2FsbFN0YWNrIH0gZnJvbSAnc29ieSdcclxuXHJcbmltcG9ydCB7IFNZTUJPTF9PQlNFUlZBQkxFIH0gZnJvbSAnc29ieSdcclxuXHJcbi8vIGV4cG9ydCB0eXBlIHtPd25lcn0gZnJvbSAnc29ieSc7XHJcbmV4cG9ydCB0eXBlIHsgU3RvcmVPcHRpb25zIH0gZnJvbSAnc29ieSdcclxuZXhwb3J0IHR5cGUgeyBDU1NVbml0LCBDU1NMZW5ndGggfSBmcm9tICcuL2h0bWwvaHRtbC1sZW5ndGgnXHJcblxyXG5leHBvcnQgdHlwZSB7XHJcbiAgICBBcnJheU1heWJlLCBDYWxsYmFjaywgQ2hpbGQsIENoaWxkV2l0aE1ldGFkYXRhLCBDbGFzc2VzLCBDb21wb25lbnRGdW5jdGlvbiwgQ29tcG9uZW50SW50cmluc2ljRWxlbWVudCxcclxuICAgIENvbXBvbmVudE5vZGUsIENvbXBvbmVudCwgQ29tcG9uZW50c01hcCwgLyogQ29uc3RydWN0b3IsICovIENvbnN0cnVjdG9yV2l0aCwgQ29udGV4dERhdGEsIENvbnRleHRQcm92aWRlcixcclxuICAgIENvbnRleHQsIENvbnRleHRXaXRoRGVmYXVsdCwgRGlyZWN0aXZlRnVuY3Rpb24sIERpcmVjdGl2ZVByb3ZpZGVyLCBEaXJlY3RpdmVSZWYsIERpcmVjdGl2ZVJlZ2lzdGVyLCBEaXJlY3RpdmUsIERpcmVjdGl2ZURhdGEsXHJcbiAgICBEaXJlY3RpdmVPcHRpb25zLCBEaXNwb3NlciwgRWxlbWVudCwgRXZlbnRMaXN0ZW5lciwgRmFsc3ksIEZOLCBGcmFnbWVudFVuZGVmaW5lZCwgRnJhZ21lbnROb2RlLCBGcmFnbWVudEZyYWdtZW50LFxyXG4gICAgRnJhZ21lbnROb2RlcywgRnJhZ21lbnRGcmFnbWVudHMsIEZyYWdtZW50TWl4ZWQsIC8qIEZyYWdtZW50LCAqLyBGdW5jdGlvbk1heWJlLCBNZW1vT3B0aW9ucywgTGF6eUNvbXBvbmVudCwgTGF6eUZldGNoZXIsIExhenlSZXN1bHQsXHJcbiAgICAvKiBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlUmVhZG9ubHksICovIE9ic2VydmFibGVNYXliZSwgLyogT2JzZXJ2YWJsZU9wdGlvbnMsICovIFByb21pc2VNYXliZSwgT2JzZXJ2YWJsZUxpa2UsIFByb3BzLCBSZWYsXHJcbiAgICBSZXNvdXJjZVN0YXRpY1BlbmRpbmcsIFJlc291cmNlU3RhdGljUmVqZWN0ZWQsIFJlc291cmNlU3RhdGljUmVzb2x2ZWQsIFJlc291cmNlU3RhdGljLCBSZXNvdXJjZUZ1bmN0aW9uLCBSZXNvdXJjZSxcclxuICAgIC8qIFN0b3JlT3B0aW9ucywgKi8gU3VzcGVuc2VEYXRhLCBUZW1wbGF0ZUFjdGlvblBhdGgsIFRlbXBsYXRlQWN0aW9uUHJveHksIFRlbXBsYXRlQWN0aW9uV2l0aE5vZGVzLCBUZW1wbGF0ZUFjdGlvbldpdGhQYXRocyxcclxuICAgIFRlbXBsYXRlVmFyaWFibGVQcm9wZXJ0aWVzLCBUZW1wbGF0ZVZhcmlhYmxlRGF0YSwgVGVtcGxhdGVWYXJpYWJsZXNNYXAsIFRydXRoeSxcclxuICAgIENTU1Byb3BlcnRpZXMsIE51bGxhYmxlLCBVbm9ic2VydmFudCwgT2JzZXJ2YW50LFxyXG59IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgT2JzZXJ2YWJsZVN5bWJvbCA9IFNZTUJPTF9PQlNFUlZBQkxFXHJcbmV4cG9ydCAqIGFzIEpTWCBmcm9tICcuL3R5cGVzJ1xyXG5cclxuLy8gQWRkIEh0bWxCb29sZWFuIGV4cG9ydFxyXG5leHBvcnQgKiBmcm9tICcuL2h0bWwnXHJcblxyXG4vLyBFeHBvcnQgU1NSIGRvY3VtZW50IGZhY3RvcnkgZm9yIGlzb2xhdGVkIGNvbnRleHRzXHJcbmV4cG9ydCB7IGNyZWF0ZURvY3VtZW50LCB0eXBlIFNTUkRvY3VtZW50IH0gZnJvbSAnLi9zc3IvZG9jdW1lbnQnIl0sIm1hcHBpbmdzIjoiOzs7O0FBR0EsSUFBTSxhQUFhLENBQUMsQ0FBQyxXQUFXLGNBQWMsV0FBVyxFQUFFLE1BQU0sdUVBQXVFO0FBR3hJLElBQWEsaUJBQTBCO0NBRXJDLE9BQU8sQ0FBQztBQUVWOzs7QUNEQSxJQUFhLFdBQStDLEVBQUUsV0FBVyxPQUFPLFdBQVcsVUFBVSxHQUFHLGdCQUFnTDtDQUNwUixNQUFNLE1BQU0s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