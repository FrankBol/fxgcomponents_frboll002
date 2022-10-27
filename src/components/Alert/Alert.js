import { Alert as AlertAntD } from 'antd';
import PropTypes from 'prop-types';



export const Alert = ({text, variant}) => {

  
  return (
    <>
        <AlertAntD 
          message={text} type={variant} style={{textAlign: 'center'}}>
        </AlertAntD>
      </>
      )
}

Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};
