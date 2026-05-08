# @woby/three Re-export Fix

## Summary

Fixed two issues:
1. `@woby/three` was not properly re-exporting from `woby`
2. Utils functions like `isNull` and `toColor` were not accessible

## Changes Made

### 1. Updated `code/index.ts`
- Added `export * from 'woby'` to re-export all woby exports
- This file is used for TypeScript type definitions

### 2. Updated `index.js` (root)
- Added `export * from 'woby'` to re-export all woby exports at the package root
- This ensures runtime exports work correctly

### 3. Updated `code/lib/index.tsx`
- Explicitly re-export all woby functions and types to prevent tree-shaking
- Includes: `$`, `$$`, `batch`, `context`, `createContext`, `useContext`, `createElement`, etc.
- Includes all type exports: `Observable`, `ObservableReadonly`, `ObservableMaybe`, `Context`, etc.
- **Added `export * from './utils'`** to export utility functions

### 4. Fixed `code/three-types.ts`
- Changed to import `PromiseMaybe` from `woby` instead of defining it locally
- This prevents duplicate export conflicts

## Verification

The following imports now work correctly:

```typescript
// Import woby hooks and types
import { 
    useContext, 
    createContext, 
    Observable, 
    ObservableMaybe, 
    ObservableReadonly 
} from '@woby/three'

// Import utils (NEW!)
import { isNull, toColor } from '@woby/three'
```

All woby exports are now available from `@woby/three`:
- ✅ `createContext` - exported in dist
- ✅ `useContext` - exported in dist  
- ✅ `Observable` - type exported in .d.ts
- ✅ `ObservableMaybe` - type exported in .d.ts
- ✅ `ObservableReadonly` - type exported in .d.ts
- ✅ `isNull` - exported in dist (from utils)
- ✅ `toColor` - exported in dist (from utils)
- ✅ All other woby functions and types

## Build Output

- **dist/index.es.js**: 13.87 kB (increased from 11.58 kB)
- **lib/index.d.ts**: Properly exports `* from 'woby'` and includes utils exports
- All woby exports and utils are preserved in the build

## Usage

**Recommended import style:**
```typescript
import { isNull, toColor, useContext, createContext } from '@woby/three'
```

Note: Direct imports from `@woby/three/lib/utils` may have TypeScript declaration path issues due to the build structure (`lib/lib/utils.d.ts`). Use the main package export instead.
