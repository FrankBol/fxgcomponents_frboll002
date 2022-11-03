import React from 'react';
import './style.css'

import { Tag } from '../../src/components/Tag/Tag';

export default {
  title: 'Components-TP1/Tag',
  component: Tag
};

const Template = (args) => <Tag {...args} />;

export const Magenta = Template.bind({});
Magenta.args = {
 color: 'magenta'
};

export const Volcano = Template.bind({});
Volcano.args = {
  color: 'volcano'
};

export const Lime = Template.bind({});
Lime.args = {
  color: 'lime'
};