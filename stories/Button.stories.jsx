import React from 'react';
import './style.css'

import { Button } from '../lib/components/Button/Button';

export default {
  title: 'Components-TP1/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Dashed = Template.bind({});
Dashed.args = {
  text: "Button",
  type: 'dashed',
  size: 'small'
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Button",
  type: 'primary',
  size: "medium" 
};

export const Link = Template.bind({});
Link.args = {
  text: "Button",
  type: "link",
  size: "large"
};