import { Node } from '../../../three-types';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
export * from 'three/examples/jsm/postprocessing/FilmPass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        FilmPass: typeof FilmPass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            filmPass: FilmPassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        filmPass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        filmPass: string[];
    }
}
export type FilmPassProps = Node<FilmPass, typeof FilmPass, {
    intensity?: number;
    grayscale?: boolean;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        filmPass: Partial<{
            intensity?: number;
            grayscale?: boolean;
        }>;
    }
}
//# sourceMappingURL=FilmPass.d.ts.map