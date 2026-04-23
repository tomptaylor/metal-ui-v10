import { html } from 'lit';
import { userEvent, within, expect } from '@storybook/test';
import './MetalRadio';

export default {
    title: 'Components/MetalRadio',
    component: 'metal-radio',
    argTypes: {
        selected: { control: 'text' },
    },
};

export const RadioGroup = {
    render: () => {
        // We define a unique ID so we can find our specific group
        const containerId = 'metal-radio-container';
        let currentSelection = 'laser';

        const handleUpdate = (e: any) => {
            currentSelection = e.detail.value;

            // Manually find the radios and update their 'checked' property
            const container = document.getElementById(containerId);
            const radios = container?.querySelectorAll('metal-radio');

            radios?.forEach((radio: any) => {
                radio.checked = (radio.value === currentSelection);
            });
        };

        return html`
      <div id="${containerId}" class="p-10 bg-slate-950 min-h-[200px]">
        <metal-radio 
          name="mode-group" 
          label="Laser Mode" 
          value="laser" 
          .checked=${currentSelection === 'laser'}
          @metal-change=${handleUpdate}>
        </metal-radio>

        <metal-radio 
          name="mode-group" 
          label="Cyber Drive" 
          value="cyber" 
          .checked=${currentSelection === 'cyber'}
          @metal-change=${handleUpdate}>
        </metal-radio>

        <metal-radio 
          name="mode-group" 
          label="Neon Pulse" 
          value="neon" 
          .checked=${currentSelection === 'neon'}
          @metal-change=${handleUpdate}>
        </metal-radio>
      </div>
    `;
    },
};

export const AutomatedSelection = {
    ...RadioGroup,
    play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
        const canvas = within(canvasElement);

        // Select the second option
        const secondOption = canvas.getByText('Cyber Drive');
        await userEvent.click(secondOption);

        // Verify the second option is now the only one checked
        const radios = canvasElement.querySelectorAll('metal-radio');
        await expect(radios[1].checked).toBe(true);
        await expect(radios[0].checked).toBe(false);
    }
};