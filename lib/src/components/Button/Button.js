import React from 'react';
import { Button as ButtonAntD } from 'antd';
import PropTypes from 'prop-types';

/**
 * Onclick, displays a collection of images to showcase a product
 */
export const Button = ({ text, type, size}) => {

  return (
    <>
      <ButtonAntD
        type={type}
        size={size}>
        {text}
        </ButtonAntD>
      
    </>
  );
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string
};
