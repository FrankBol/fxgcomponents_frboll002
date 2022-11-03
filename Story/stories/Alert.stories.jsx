import './style.css'

import { Alert } from '../../src/components/Alert/Alert';

export default {
  title: 'Components-TP1/Alert',
  component: Alert
};

const Template = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
    text: "Ceci est une texte de Success",
    variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
    text: "Ceci est un texte de Warning",
    variant: "warning",
};

export const Info = Template.bind({});
Info.args = {
    text: "Ceci est une Information",
    variant: "info",
};