import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cartItems, addToCart } from './store/cartStore';

@customElement('metal-button')
export class MetalButton extends LitElement {
  @property({ type: String }) label = 'INITIALIZE';
  @state() private _count = 0;
  private _unsub?: () => void;

  // CRITICAL: This allows Tailwind to style the element
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this._unsub = cartItems.subscribe(val => {
      this._count = val;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsub?.();
  }

  render() {
    // Using Tailwind classes directly
    return html`
      <button 
        @click=${addToCart}
        class="bg-black text-cyan-400 border-2 border-cyan-400 px-6 py-2 font-mono uppercase hover:bg-cyan-900 transition-colors"
      >
        ${this.label} [${this._count}]
      </button>
    `;
  }
}