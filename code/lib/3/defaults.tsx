export interface defaults { }

declare global {
    interface Window {
        __$$defaults$$__: defaults
    }
}

if (!window.__$$defaults$$__)
    window.__$$defaults$$__ = {} as defaults

export const defaults: defaults = window.__$$defaults$$__
