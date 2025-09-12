import { Node } from '../../../three-types'
import MemberNode from 'three/src/nodes/utils/MemberNode.js'
export * from 'three/src/nodes/utils/MemberNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		MemberNode: typeof MemberNode
	}
}

Three.MemberNode = MemberNode

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			memberNode: MemberNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		memberNode: typeof memberNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		memberNode: typeof _memberNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a 'node' and a 'property' string.
const memberNode = ([
	'node',
	'property',
] as const).distinct()
consParams.memberNode = memberNode

// ---[ Object Properties ]---

// Inherits from Node and adds its own properties and methods.
// Assumes `objProps.node` has been defined.
const _memberNode = ([
	...(objProps.node || []),
	'node',
	'property',
	'isMemberNode',
	'getNodeType',
	'generate',
] as const).distinct()
objProps.memberNode = _memberNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type MemberNodeArgs = {
	node: TSLNode
	property: string
}

// The final Props type for the JSX component.
export type MemberNodeProps = Node<MemberNode, typeof MemberNode, MemberNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		memberNode: Partial<MemberNodeArgs>
	}
}

// Both constructor arguments are required, so the defaults object is empty.
defaults.memberNode = {}