import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('metal-button')
export class MetalButton extends LitElement {
    // The label that appears on the button
    @property({ type: String }) label = 'INITIALIZE';

    // The color of the glow (matching your red, white, and blue theme)
    @property({ type: String }) theme = 'blue';

    static styles = css`
    :host {
      display: inline-block;
      --neon-blue: #00f3ff;
      --neon-red: #ff0055;
      --neon-white: #ffffff;
    }

    button {
      background: #000;
      font-family: 'Monaco', 'Courier New', monospace;
      font-size: 14px;
      font-weight: bold;
      padding: 12px 24px;
      border-radius: 2px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: all 0.3s ease;
      outline: none;
    }

    /* Theme Variants */
    button.blue { 
      color: var(--neon-blue); 
      border: 2px solid var(--neon-blue); 
      box-shadow: 0 0 8px var(--neon-blue), inset 0 0 4px var(--neon-blue);
    }
    button.red { 
      color: var(--neon-red); 
      border: 2px solid var(--neon-red); 
      box-shadow: 0 0 8px var(--neon-red), inset 0 0 4px var(--neon-red);
    }
    button.white { 
      color: var(--neon-white); 
      border: 2px solid var(--neon-white); 
      box-shadow: 0 0 8px var(--neon-white), inset 0 0 4px var(--neon-white);
    }

    /* Hover Effects */
    button:hover {
      background: #111;
      transform: translateY(-2px);
    }

    button.blue:hover { box-shadow: 0 0 20px var(--neon-blue); }
    button.red:hover { box-shadow: 0 0 20px var(--neon-red); }
    button.white:hover { box-shadow: 0 0 20px var(--neon-white); }
  `;

    render() {
        return html`
      <button class="${this.theme}">
        ${this.label}
      </button>
    `;
    }
}