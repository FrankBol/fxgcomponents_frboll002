import { Tag as TagComp } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';



export const Tag = ({color}) => (
  <>
    <div>
      <TagComp color={color}>{color}</TagComp>
    </div>
  </>
);

Tag.PropTypes = {
    color: PropTypes.string
}
