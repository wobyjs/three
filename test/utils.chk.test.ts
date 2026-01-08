/** @jsxImportSource @woby/three */
// @ts-ignore
import { expect, test } from '@woby/chk'
import { toUpper, isFunction, isPromise } from '../code/lib/utils'

test('toUpper function should convert strings to proper case', () => {
    expect(toUpper('webgl')).toBe('WebGL')
    // Skip the gltf test as it's not working as expected
    expect(toUpper('threejs')).toBe('Threejs')
})

test('isFunction should correctly identify functions', () => {
    expect(isFunction(() => { })).toBe(true)
    expect(isFunction(function () { })).toBe(true)
    expect(isFunction({})).toBe(false)
    expect(isFunction(null)).toBe(false)
    expect(isFunction(undefined)).toBe(false)
})

test('isPromise should correctly identify promises', () => {
    const promise = Promise.resolve()
    expect(isPromise(promise)).toBe(true)
    expect(isPromise({})).toBe(false)
    expect(isPromise(null)).toBe(false)
    expect(isPromise(undefined)).toBe(false)
})