/**
 * Minimal ambient declaration for `process.env.NODE_ENV`.
 *
 * This project targets the browser — `@types/node` is not installed.
 * Only `process.env.NODE_ENV` is used (in debug guards), so a targeted
 * ambient declaration is preferred over pulling in the full Node.js
 * type definitions.
 */

declare var process: {
    env: {
        NODE_ENV?: string
    }
}