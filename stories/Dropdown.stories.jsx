import './style.css'

import { Dropdown } from '../src/components/Dropdown/Dropdown';

export default {
  title: 'Components-TP1/Dropdown',
  component: Dropdown
};

const Template = (args) => <Dropdown {...args} />;

export const Click = Template.bind({});
Click.args = {
    trigger: "click",
    text: "Click Me"
};

export const Hover = Template.bind({});
Hover.args = {
    trigger: "hover",
    text: "Over Me"
};

export const ContextMenu = Template.bind({});
ContextMenu.args = {
    trigger: "contextMenu",
    text: "Click Droit"
};