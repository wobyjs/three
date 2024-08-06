import Stats from 'three/examples/jsm/libs/stats.module.js';
import { Node } from '../../../three-types';
export { Stats };
declare module '../../../lib/3/three' {
    interface Three {
        Stats: typeof Stats;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            panel: PanelProps;
            stats: StatsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        panel: string[];
        stats: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        panel: string[];
        stats: string[];
    }
}
export type StatsProps = Node<Stats, typeof Stats, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        stats: Partial<{}>;
    }
}
export type PanelProps = Node<Stats.Panel, typeof Stats.Panel, {
    name: string;
    foregroundColor: string;
    backgroundColor: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        panel: Partial<{
            name: string;
            foregroundColor: string;
            backgroundColor: string;
        }>;
    }
}
//# sourceMappingURL=stats.module.d.ts.map