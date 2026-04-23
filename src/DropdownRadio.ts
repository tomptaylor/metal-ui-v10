import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StoreController } from '@nanostores/lit';
import { $selectedColor, updateColor } from './store/themeStore';

// Import your atoms
import './MetalDropdown';
import './MetalRadio';
import './MetalCheckboxGroup';

@customElement('dropdown-radio')
export class DropdownRadio extends LitElement {
  // Connect the store to the component's lifecycle
  private _theme = new StoreController(this, $selectedColor);

  // MEMORY: This keeps track of which radio is selected locally
  @state() private _selectedRadio = 'crit';

  // Stay in Light DOM for Tailwind v4 support
  createRenderRoot() { return this; }

  render() {
    const activeColor = this._theme.value;
    console.log("Parent re-rendering with color:", activeColor);

    return html`
      <div class="p-8 bg-slate-900 border border-cyan-500/20 rounded-lg space-y-6">
        <header class="border-b border-cyan-500/10 pb-4">
          <h2 class="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            Configuration Module
          </h2>
        </header>

        <metal-dropdown 
          .colors=${['neon cyan', 'acid green', 'plasma pink']}
          @color-change=${(e: CustomEvent) => updateColor(e.detail.color)}>
        </metal-dropdown>

        ${activeColor === 'acid green' ? html`
          <div class="pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <h3 class="text-green-500 font-mono text-xs mb-4 uppercase">
              // Radioactive Parameters Detected
            </h3>
            
            <div class="space-y-2">
              <metal-radio 
                name="acid" 
                label="Critical Mass" 
                value="crit" 
                .checked=${this._selectedRadio === 'crit'}
                @metal-change=${() => this._selectedRadio = 'crit'}>
              </metal-radio>
              
              <metal-radio 
                name="acid" 
                label="Stable Isotope" 
                value="stable" 
                .checked=${this._selectedRadio === 'stable'}
                @metal-change=${this._handleRadioChange}>
              </metal-radio>
              
              <metal-radio 
                name="acid" 
                label="Depleted" 
                value="low" 
                .checked=${this._selectedRadio === 'low'}
                @metal-change=${() => this._selectedRadio = 'low'}>
              </metal-radio>
            </div>
          </div>
        ` : html`
          <div class="py-4 text-slate-600 font-mono text-[10px] italic">
            Waiting for color authorization...
          </div>
        `}
      </div>
    `;
  }

  private _handleRadioChange(e: CustomEvent) {
    this._selectedRadio = 'stable';
    console.log("Radio changed to:", this._selectedRadio);
  }
}