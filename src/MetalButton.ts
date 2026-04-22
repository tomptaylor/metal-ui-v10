import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cartItems, addToCart } from './store/cartStore';

@customElement('metal-button')
export class MetalButton extends LitElement {
  @property({ type: String }) label = 'INITIALIZE';
  @state() private _count = 0;
  private _unsub?: () => void;

  // --- THE KEY TO TAILWIND ---
  // This disables the Shadow DOM, allowing global Tailwind 
  // styles to "flow through" directly to the button.
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
    return html`
      <button 
        @click=${addToCart}
        class="bg-black text-cyan-400 border-2 border-cyan-400 px-6 py-3 
               font-mono font-bold uppercase tracking-widest 
               hover:bg-cyan-950 hover:text-white transition-all duration-300
               shadow-[0_0_10px_rgba(0,243,255,0.5)] hover:shadow-[0_0_20px_rgba(0,243,255,1)]"
      >
        ${this.label} [${this._count}]
      </button>
    `;
  }
}