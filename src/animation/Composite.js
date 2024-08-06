import { PropertyBinding } from './PropertyBinding';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
Three.Composite = PropertyBinding;
consParams.propertyBinding_Composite = [
    'targetGroup',
    'path',
    'parsedPath',
].distinct();
objParams.propertyBinding_Composite = [].distinct();
