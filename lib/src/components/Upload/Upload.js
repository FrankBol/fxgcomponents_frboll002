import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload as Uploaded } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';


export const Upload = ({text}) => (
  <Uploaded action="https://www.mocky.io/v2/5cc8019d300000980a055e76" 
  directory>
    <Button icon={<UploadOutlined />}>{text}</Button>
  </Uploaded>
);

Upload.PropTypes = {
    text: PropTypes.string
}