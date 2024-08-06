import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
export * from 'three/examples/jsm/loaders/FontLoader.js';
import '../../../src/loaders/Loader';
Three.FontLoader = FontLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FontLoader.d.ts
consParams.fontData = [
    'glyphs',
    'familyName',
    'ascender',
    'descender',
    'underlinePosition',
    'underlineThickness',
    'boundingBox',
    'resolution',
    'original_font_information',
].distinct();
consParams.fontLoader = [
    'manager',
].distinct();
consParams.font = [
    'data',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FontLoader.d.ts
objParams.fontData = [
    'glyphs',
    'familyName',
    'ascender',
    'descender',
    'underlinePosition',
    'underlineThickness',
    'boundingBox',
    'resolution',
    'original_font_information',
].distinct();
objParams.fontLoader = [...objParams.loader,
].distinct();
objParams.font = [
    /**
     * @default 'Font'
     */
    'type',
    'data',
].distinct();
defaults.fontLoader = {};
