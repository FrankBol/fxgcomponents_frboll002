import { Avatar as AvatarComp } from 'antd';
import React from 'react';
import PropTypes from 'prop-types'


export const Avatar = ({color, text, size}) => {
 
  return (
    
    <>
      <AvatarComp
        style={{
          backgroundColor: `${color}`,
          verticalAlign: 'middle',
        }}
        size={size} 
        >
       {text}
        </AvatarComp>
    </>
  );
};
 
Avatar.PropTypes = {
    color: PropTypes.string,
    user: PropTypes.string,
    size: PropTypes.string
}