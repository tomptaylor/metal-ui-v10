import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('metal-radio')
export class MetalRadio extends LitElement {
    @property({ type: Array }) options = ['ALPHA', 'BETA', 'GAMMA'];

    static styles = css`
    .radio-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 15px;
      border: 1px solid #00f3ff;
      background: #050505;
      color: #00f3ff;
      font-family: 'Monaco', monospace;
      box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
    }
  `;

    render() {
        return html`
      <div class="radio-group">
        ${this.options.map(opt => html`
          <label><input type="radio" name="metal-group" value="${opt}"> ${opt}</label>
        `)}
      </div>
    `;
    }
}