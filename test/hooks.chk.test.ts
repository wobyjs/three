/** @jsxImportSource @woby/three */
// @ts-ignore
import { expect, test } from '@woby/chk'
import * as hooks from '../code/lib/hooks/index'

test('All hooks should be importable from main hooks export', () => {
    expect(hooks.useFrame).toBeDefined()
    expect(hooks.useThree).toBeDefined()
})

test('Hook functions should be callable', () => {
    expect(typeof hooks.useFrame).toBe('function')
    expect(typeof hooks.useThree).toBe('function')
})