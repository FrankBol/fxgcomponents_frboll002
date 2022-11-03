import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Table } from '../src/components/Table/Table';

export default {
  title: 'Components-TP1/Table',
  component: Table
};

const Template = (args) => <Table {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  darkMode: null
};

export const Regulier = Template.bind({});
Regulier.args = {
  size: null,
  darkMode: null
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  size: null,
  darkMode: "dark"
};