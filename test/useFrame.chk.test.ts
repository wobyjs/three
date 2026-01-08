/** @jsxImportSource @woby/three */
// @ts-ignore
import { expect, test } from '@woby/chk'
import { useFrame } from '../code/lib/hooks/useFrame'

test('useFrame hook should be defined', () => {
    expect(useFrame).toBeDefined()
    expect(typeof useFrame).toBe('function')
})