/// <reference types="react" />
import type { ProviderProps } from './Provider';
import { context } from './setup';
export * from './Debug';
export * from './hooks';
declare function Physics(props: ProviderProps): JSX.Element;
export { Physics, context };
