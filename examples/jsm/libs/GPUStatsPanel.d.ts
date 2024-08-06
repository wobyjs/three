import { GPUStatsPanel } from 'three/examples/jsm/utils/GPUStatsPanel.js';
export * from 'three/examples/jsm/utils/GPUStatsPanel.js';
import { Node } from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        GPUStatsPanel: typeof GPUStatsPanel;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gpuStatsPanel: GPUStatsPanelProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        gpuStatsPanel: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        gpuStatsPanel: string[];
    }
}
export type GPUStatsPanelProps = Node<GPUStatsPanel, typeof GPUStatsPanel, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        gPUStatsPanel: {};
    }
}
//# sourceMappingURL=GPUStatsPanel.d.ts.map