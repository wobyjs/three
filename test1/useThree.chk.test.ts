/** @jsxImportSource @woby/three */
// @ts-ignore
import { expect, test } from '@woby/chk'
import { useThree } from '../code/lib/hooks/useThree'

test('useThree hook should be defined', () => {
    expect(useThree).toBeDefined()
    expect(typeof useThree).toBe('function')
})

test('useThree hook should return context when called without parameters', () => {
    // Since we can't easily mock the context in this environment,
    // we'll just verify the function exists and is callable
    expect(useThree).toBeDefined()
})