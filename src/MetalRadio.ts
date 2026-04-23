import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('metal-radio')
export class MetalRadio extends LitElement {
  @property({ type: String }) name = 'metal-group';
  @property({ type: String }) value = '';
  @property({ type: String }) label = '';
  @property({ type: Boolean, reflect: true }) checked = false;

  createRenderRoot() { return this; }

  private _handleChange() {
    // Dispatch custom event so the parent (Story) can update state
    this.dispatchEvent(new CustomEvent('metal-change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <label class="flex items-center space-x-3 cursor-pointer group font-mono mb-4">
        <div class="relative flex items-center justify-center">
          <input 
            type="radio" 
            name=${this.name} 
            .checked=${this.checked}
            @change=${this._handleChange}
            class="sr-only"
          />
          
          <div class="w-6 h-6 rounded-full border-2 border-cyan-900 bg-black transition-all 
                      group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_#22d3ee]
                      ${this.checked ? 'border-cyan-400 shadow-[0_0_15px_#22d3ee]' : ''}">
          </div>

          ${this.checked ? html`
            <div class="absolute w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse"></div>
          ` : ''}
        </div>
        
        <span class="text-cyan-100 uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
          ${this.label}
        </span>
      </label>
    `;
  }
}