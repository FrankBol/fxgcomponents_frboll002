import React from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Card } from '../../src/components/Card/Card';

export default {
  title: 'Components-TP1/Card',
  component: Card
};

const Template = (args) => <Card {...args} />;

export const Small = Template.bind({});
Small.args = {
  width: '20%',
  img: "https://fakeimg.pl/300/",
  textTitle: "CardComp Title",
  textBody:"Some quick example text to build on the CardComp title and make up the bulk of the CardComp's content."
};

export const Medium = Template.bind({});
Medium.args = {
  width: '24rem',
  img: "https://fakeimg.pl/300/",
  textTitle: "CardComp Title",
  textBody: "Some quick example text to build on the CardComp title and make up the bulk of the CardComp's content."
};

export const Large = Template.bind({});
Large.args = {
  width: '30rem',
  img: "https://fakeimg.pl/300/",
  textTitle: "CardComp Title",
  textBody: "Some quick example text to build on the CardComp title and make up the bulk of the CardComp's content."
};