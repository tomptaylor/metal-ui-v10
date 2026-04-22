import { html } from 'lit';
import './MetalDropdown';

export default {
    title: 'Components/MetalDropdown',
    component: 'metal-dropdown',
    argTypes: {
        // This creates the editable array in the Controls panel
        colors: { control: 'object' },
        onColorChange: { action: 'color-change' }
    },
};

export const Default = {
    args: {
        label: 'Choose Finish',
        colors: ['Neon Cyan', 'Acid Green', 'Laser Red', 'Deep Cobalt'],
    },
    render: (args: any) => html`
    <div class="p-20 bg-slate-950 min-h-[300px]">
      <metal-dropdown 
        .label=${args.label} 
        .colors=${args.colors}
        @color-change=${args.onColorChange}
      ></metal-dropdown>
    </div>
  `,
};