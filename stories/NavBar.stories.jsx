import 'bootstrap/dist/css/bootstrap.min.css'

import { NavBar } from '../lib/components/NavBar/NavBar';

export default {
  title: 'Components-TP1/NavBar',
  component: NavBar
};

const Template = (args) => <NavBar {...args} />;

export const BgDark = Template.bind({});
BgDark.args = {
  textColor: "dark",
  bgColor: "dark"
};

export const BgPrimary = Template.bind({});
BgPrimary.args = {
  textColor: "dark",
  bgColor: "primary"
};

export const BgLight = Template.bind({});
BgLight.args = {
  textColor: "light",
  bgColor: "light"
};