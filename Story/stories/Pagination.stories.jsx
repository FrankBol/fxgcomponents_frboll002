import './style.css'

import { Pagination } from '../../src/components/Pagination/Pagination';

export default {
  title: 'Components-TP1/Pagination',
  component: Pagination
};

const Template = (args) => <Pagination {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    totalItems: 50,
    jumperVisible: false,
    changerVisible : false
};

export const WithChanger = Template.bind({});
WithChanger.args = {
    totalItems: 75,
    jumperVisible: false,
    changerVisible : true
};

export const WithJumper = Template.bind({});
WithJumper.args = {
    totalItems: 100,
    jumperVisible: true,
    changerVisible : true
};