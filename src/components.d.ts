/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CounterComponent {
    }
}
declare global {
    interface HTMLCounterComponentElement extends Components.CounterComponent, HTMLStencilElement {
    }
    var HTMLCounterComponentElement: {
        prototype: HTMLCounterComponentElement;
        new (): HTMLCounterComponentElement;
    };
    interface HTMLElementTagNameMap {
        "counter-component": HTMLCounterComponentElement;
    }
}
declare namespace LocalJSX {
    interface CounterComponent {
    }
    interface IntrinsicElements {
        "counter-component": CounterComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "counter-component": LocalJSX.CounterComponent & JSXBase.HTMLAttributes<HTMLCounterComponentElement>;
        }
    }
}
