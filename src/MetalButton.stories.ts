import { html } from 'lit';
import './MetalButton';

export default {
    title: 'Metal/Components/Button',
    component: 'metal-button', // Tells Storybook to target your custom tag
};

export const Default = {
    args: {
        label: 'Identify System',
    },
    render: (args: any) => html`<metal-button .label=${args.label}></metal-button>`,
};