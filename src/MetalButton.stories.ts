import { html } from 'lit';
import { within, expect } from 'storybook/test';
import './MetalButton'; // This is the crucial import!
import './MetalRadio'

export default {
    title: 'Metal/Compositions/ActionMenu',
};

// You can define how the radio looks here...
const RadioTemplate = (args: any) => html`<metal-radio .options=${args.options}></metal-radio>`;

// ...and then "invoke" that concept inside the Button
export const ExpandableMenu = {
    render: () => html`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <p style="color: white; font-family: Monaco;">Click to invoke sub-menu:</p>
      <metal-button label="Access Core"></metal-button>
    </div>
  `,
};

export const GlobalStateSync = {
    render: () => html`
    <div style="display: flex; gap: 20px;">
      <metal-button></metal-button>
      <metal-button></metal-button>
    </div>
    <p style="color: white; margin-top: 10px;">
      Notice: Both buttons stay in sync via Nano Stores.
    </p>
  `,
};