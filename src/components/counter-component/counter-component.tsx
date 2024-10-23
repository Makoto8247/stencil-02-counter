import { Component, h, State } from "@stencil/core/internal";

@Component ({
    tag: "counter-component",
    styleUrl: "counter-component.css"
})
export class CounterComponent{
    render() {
        return (
            <div class="counter-box">
                <p class="counter-title">Stencil Counter</p>
                <p>test</p>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}
