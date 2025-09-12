import Stats from 'three/examples/jsm/libs/stats.module.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
export { Stats }

export default Stats

declare module '../../../lib/3/three'
{
    interface Three {
        Stats: typeof Stats
    }
}
// class Panel {
//     constructor(name: string, foregroundColor: string, backgroundColor: string);
//     dom: HTMLCanvasElement;
//     update(value: number, maxValue: number): void;
// }
Three.Stats = Stats

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            panel: PanelProps,
            stats: StatsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        panel: typeof panel
        stats: typeof stats
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        panel: typeof _panel
        stats: typeof _stats
    }
}


const panel = ([
    'name',
    'foregroundColor',
    'backgroundColor',
] as const).distinct()
consParams.panel = panel


const _stats = ([
    'dom',
] as const).distinct()
objProps.stats = _stats


const stats = ([
] as const).distinct()
consParams.stats = stats


const _panel = ([
    'dom',
] as const).distinct()
objProps.panel = _panel

export type StatsProps = Node<Stats, typeof Stats, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stats: Partial<{}>
    }
}

defaults.stats = {}

export type PanelProps = Node<Stats.Panel, typeof Stats.Panel, { name: string, foregroundColor: string, backgroundColor: string }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        panel: Partial<{ name: string, foregroundColor: string, backgroundColor: string }>
    }
}

defaults.panel = {}


// import { } from 'three/examples/jsm/libs/fflate.module'
// import { } from 'three/examples/jsm/libs/meshopt_decoder.module'
// import { } from 'three/examples/jsm/libs/stats.module'
// import { } from 'three/examples/jsm/libs/tween.module'