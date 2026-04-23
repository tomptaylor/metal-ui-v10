import { html } from 'lit';
import './MetalCheckboxGroup';

export default {
    title: 'Components/MetalCheckboxGroup',
    component: 'metal-checkbox-group',
    argTypes: {
        label: { control: 'text' },
        items: { control: 'object' },
        onMetalChange: { action: 'metal-change' },
    },
};

export const Default = {
    args: {
        label: 'System Upgrades',
        items: [
            'Neural Link v2',
            'Optical Camouflage',
            'Bio-Feedback Loop',
            'Sub-Dermal Armor'
        ],
    },
    render: (args: any) => html`
    <div class="p-10 bg-slate-950 min-h-[300px]">
      <metal-checkbox-group 
        .label=${args.label}
        .items=${args.items}
        @metal-change=${args.onMetalChange}
      ></metal-checkbox-group>
    </div>
  `,
};

export const LargeBatch = {
    args: {
        label: 'Inventory Manifest',
        items: Array.from({ length: 12 }, (_, i) => `Module ${i + 101}`),
    },
    render: (args: any) => html`
    <div class="p-10 bg-slate-950">
      <div class="grid grid-cols-2 gap-4 max-w-md">
        <metal-checkbox-group 
          .label=${args.label}
          .items=${args.items}
        ></metal-checkbox-group>
      </div>
    </div>
  `,
};