/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface YoobicGrid {
        /**
          * The data to render
         */
        "data": Array<any>;
    }
}
declare global {
    interface HTMLYoobicGridElement extends Components.YoobicGrid, HTMLStencilElement {
    }
    var HTMLYoobicGridElement: {
        prototype: HTMLYoobicGridElement;
        new (): HTMLYoobicGridElement;
    };
    interface HTMLElementTagNameMap {
        "yoobic-grid": HTMLYoobicGridElement;
    }
}
declare namespace LocalJSX {
    interface YoobicGrid {
        /**
          * The data to render
         */
        "data"?: Array<any>;
    }
    interface IntrinsicElements {
        "yoobic-grid": YoobicGrid;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "yoobic-grid": LocalJSX.YoobicGrid & JSXBase.HTMLAttributes<HTMLYoobicGridElement>;
        }
    }
}
