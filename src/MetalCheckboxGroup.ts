import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('metal-checkbox-group')
export class MetalCheckboxGroup extends LitElement {
    // Pass an array of labels: ['Option A', 'Option B', 'Option C']
    @property({ type: Array }) items: string[] = [];
    @property({ type: String }) label = 'Select Parameters';

    @state() private selectedItems = new Set<string>();

    createRenderRoot() { return this; }

    private _toggleItem(item: string) {
        if (this.selectedItems.has(item)) {
            this.selectedItems.delete(item);
        } else {
            this.selectedItems.add(item);
        }

        // Request update because Sets are not naturally reactive in Lit
        this.requestUpdate();

        // Dispatch event with the current array of selected items
        this.dispatchEvent(new CustomEvent('metal-change', {
            detail: { selected: Array.from(this.selectedItems) },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
      <div class="font-mono">
        <h3 class="text-cyan-500 text-xs uppercase tracking-tighter mb-4">// ${this.label}</h3>
        <div class="space-y-3">
          ${this.items.map(item => html`
            <label class="flex items-center cursor-pointer group">
              <div class="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  class="sr-only" 
                  @change=${() => this._toggleItem(item)}
                />
                <div class="w-5 h-5 border-2 transition-all 
                  ${this.selectedItems.has(item)
                ? 'border-cyan-400 bg-cyan-400 shadow-[0_0_10px_#22d3ee]'
                : 'border-cyan-900 bg-black group-hover:border-cyan-600'}">
                  
                  ${this.selectedItems.has(item) ? html`
                    <svg class="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ` : ''}
                </div>
              </div>
              <span class="ml-3 text-sm uppercase tracking-wide 
                ${this.selectedItems.has(item) ? 'text-cyan-100' : 'text-cyan-900 group-hover:text-cyan-400'}">
                ${item}
              </span>
            </label>
          `)}
        </div>
      </div>
    `;
    }
}