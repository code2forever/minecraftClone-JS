import React from 'react';
import type { DebugOptions } from 'cannon-es-debugger';
import type { Color } from 'three';
import { Scene } from 'three';
import type { Body } from 'cannon-es';
declare type DebugApi = {
    update: () => void;
};
export declare type DebuggerInterface = (scene: Scene, bodies: Body[], props?: DebugOptions) => DebugApi;
export declare type DebugInfo = {
    bodies: Body[];
    refs: {
        [uuid: string]: Body;
    };
};
export declare type DebugProps = {
    children: React.ReactNode;
    color?: string | number | Color;
    scale?: number;
    impl?: DebuggerInterface;
};
export declare function Debug({ color, scale, children, impl, }: DebugProps): JSX.Element;
export {};
