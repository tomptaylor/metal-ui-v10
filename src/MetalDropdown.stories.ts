import { html } from 'lit';
import { userEvent, within, expect } from '@storybook/test';
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

export const AutomatedSelection = {
  args: {
    label: 'Select Finish',
    colors: ['cyan', 'green', 'magenta'],
  },
  render: (args: any) => html`
    <metal-dropdown .label=${args.label} .colors=${args.colors}></metal-dropdown>
  `,

  // THIS IS THE MODULE BLOCK
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Step 1: Find the button
    const trigger = canvas.getByRole('button');

    // Step 2: Open it
    await userEvent.click(trigger);

    // Step 3: Select 'green'
    const option = await canvas.findByText('green');
    await userEvent.click(option);

    // Step 4: Verify
    await expect(trigger).toHaveTextContent('green');
  },
};