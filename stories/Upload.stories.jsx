import React from 'react';
import './style.css'

import { Upload } from '../lib/components/Upload/Upload';

export default {
  title: 'Components-TP1/Upload',
  component: Upload
};

const Template = (args) => <Upload {...args} />;

export const Directory = Template.bind({});
Directory.args = {
    text: 'Upload directory'
};

export const Image = Template.bind({});
Image.args = {
    text: 'Upload Image'
};

export const Movie = Template.bind({});
Movie.args = {
    text: 'Upload Movie'
};