import React from 'react';
import './style.css'

import { Avatar } from '../../src/components/Avatar/Avatar';

export default {
  title: 'Components-TP1/Avatar',
  component: Avatar
};

const Template = (args) => <Avatar {...args} />;

export const Orange = Template.bind({});
Orange.args = {
  color: "#f56a00",
  text: 'Bill',
  size: "small"
};

export const Purple = Template.bind({});
Purple.args = {
    color: "#800080",
    text: 'Max',
    size: "medium"
};

export const Red = Template.bind({});
Red.args = {
    color: "#FF0000",
    text: 'Ginette',
    size: "large"
};