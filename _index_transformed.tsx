/** @jsxImportSource woby */
import { $, $$, render, useEffect } from "/@fs/D:/Developments/tslib/@woby/woby/dist/index.es.js";
import "/demo/src/input.css?t=1782048342833";
import { Sidebar } from "/demo/src/layout/Sidebar.tsx";
import { DemoViewer } from "/demo/src/layout/DemoViewer.tsx";
import { allDemos } from "/demo/src/registry.ts";
var _jsxFileName = "D:/Developments/tslib/@woby/three/demo/src/index.tsx";
import { jsxDEV as _jsxDEV } from "/@fs/D:/Developments/tslib/@woby/woby/dist/runtime.es.js";
export const App = () => {
	const activeDemo = $(null);
	const searchQuery = $("");
	// Load demo from URL hash on mount and on hash changes
	useEffect(() => {
		const loadFromHash = () => {
			const hash = window.location.hash.slice(1);
			if (hash) {
				const demo = allDemos.find((d) => d.id === hash);
				if (demo) activeDemo(demo);
			}
		};
		loadFromHash();
		window.addEventListener("hashchange", loadFromHash);
		window.__setDemo = (id) => {
			window.location.hash = id;
			loadFromHash();
		};
		return () => window.removeEventListener("hashchange", loadFromHash);
	});
	// Update URL hash when demo changes
	useEffect(() => {
		const demo = $$(activeDemo);
		if (demo) {
			window.location.hash = demo.id;
		}
	});
	return /* @__PURE__ */ _jsxDEV("div", {
		class: "flex h-screen w-screen overflow-hidden bg-gray-900",
		children: [/* @__PURE__ */ _jsxDEV(Sidebar, {
			activeDemo,
			searchQuery
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 45,
			columnNumber: 13
		}, this), /* @__PURE__ */ _jsxDEV(DemoViewer, { activeDemo }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 13
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 9
	}, this);
};
render(App, document.body);
export default App;

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IjtBQUVBLFNBQVMsR0FBRyxJQUFJLFFBQVEsaUJBQWlCO0FBQ3pDLE9BQU87QUFFUCxTQUFTLGVBQWU7QUFDeEIsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyxnQkFBZ0I7OztBQUd6QixPQUFPLE1BQU0sWUFBWTtDQUNyQixNQUFNLGFBQWEsRUFBb0IsSUFBSTtDQUMzQyxNQUFNLGNBQWMsRUFBRSxFQUFFOztDQUd4QixnQkFBZ0I7RUFDWixNQUFNLHFCQUFxQjtHQUN2QixNQUFNLE9BQU8sT0FBTyxTQUFTLEtBQUssTUFBTSxDQUFDO0dBQ3pDLElBQUksTUFBTTtJQUNOLE1BQU0sT0FBTyxTQUFTLE1BQUssTUFBSyxFQUFFLE9BQU8sSUFBSTtJQUM3QyxJQUFJLE1BQU0sV0FBVyxJQUFJO0dBQzdCO0VBQ0o7RUFFQSxhQUFhO0VBQ2IsT0FBTyxpQkFBaUIsY0FBYyxZQUFZO0VBRWpELEFBQUMsT0FBZSxhQUFhLE9BQWU7R0FDekMsT0FBTyxTQUFTLE9BQU87R0FDdkIsYUFBYTtFQUNqQjtFQUNBLGFBQWEsT0FBTyxvQkFBb0IsY0FBYyxZQUFZO0NBQ3RFLENBQUM7O0NBR0QsZ0JBQWdCO0VBQ1osTUFBTSxPQUFPLEdBQUcsVUFBVTtFQUMxQixJQUFJLE1BQU07R0FDTixPQUFPLFNBQVMsT0FBTyxLQUFLO0VBQ2hDO0NBQ0osQ0FBQztDQUVELE9BQ0ksd0JBQUMsT0FBRDtFQUFLLE9BQU07WUFBWCxDQUNJLHdCQUFDLFNBQUQ7R0FDZ0I7R0FDQztFQUNoQjs7OztZQUNELHdCQUFDLFlBQUQsRUFDZ0IsV0FDZjs7OztVQUNBOzs7Ozs7QUFFYjtBQUVBLE9BQU8sS0FBSyxTQUFTLElBQUk7QUFFekIsZUFBZSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJpbmRleC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2Ugd29ieSAqL1xyXG5cclxuaW1wb3J0IHsgJCwgJCQsIHJlbmRlciwgdXNlRWZmZWN0IH0gZnJvbSAnd29ieSdcclxuaW1wb3J0ICcuL2lucHV0LmNzcydcclxuXHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tICcuL2xheW91dC9TaWRlYmFyJ1xyXG5pbXBvcnQgeyBEZW1vVmlld2VyIH0gZnJvbSAnLi9sYXlvdXQvRGVtb1ZpZXdlcidcclxuaW1wb3J0IHsgYWxsRGVtb3MgfSBmcm9tICcuL3JlZ2lzdHJ5J1xyXG5pbXBvcnQgdHlwZSB7IERlbW9FbnRyeSB9IGZyb20gJy4vcmVnaXN0cnknXHJcblxyXG5leHBvcnQgY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlRGVtbyA9ICQ8RGVtb0VudHJ5IHwgbnVsbD4obnVsbClcclxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gJCgnJylcclxuXHJcbiAgICAvLyBMb2FkIGRlbW8gZnJvbSBVUkwgaGFzaCBvbiBtb3VudCBhbmQgb24gaGFzaCBjaGFuZ2VzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvYWRGcm9tSGFzaCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpXHJcbiAgICAgICAgICAgIGlmIChoYXNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZW1vID0gYWxsRGVtb3MuZmluZChkID0+IGQuaWQgPT09IGhhc2gpXHJcbiAgICAgICAgICAgICAgICBpZiAoZGVtbykgYWN0aXZlRGVtbyhkZW1vKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkRnJvbUhhc2goKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgbG9hZEZyb21IYXNoKVxyXG4gICAgICAgIC8vIEV4cG9zZSBmb3IgcHJvZ3JhbW1hdGljIHRlc3RpbmdcclxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLl9fc2V0RGVtbyA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaWRcclxuICAgICAgICAgICAgbG9hZEZyb21IYXNoKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgbG9hZEZyb21IYXNoKVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBVcGRhdGUgVVJMIGhhc2ggd2hlbiBkZW1vIGNoYW5nZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVtbyA9ICQkKGFjdGl2ZURlbW8pXHJcbiAgICAgICAgaWYgKGRlbW8pIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBkZW1vLmlkXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGgtc2NyZWVuIHctc2NyZWVuIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgICAgYWN0aXZlRGVtbz17YWN0aXZlRGVtb31cclxuICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPERlbW9WaWV3ZXJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZURlbW89e2FjdGl2ZURlbW99XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbnJlbmRlcihBcHAsIGRvY3VtZW50LmJvZHkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIl19