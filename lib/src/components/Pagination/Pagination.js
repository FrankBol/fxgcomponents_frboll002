import { Pagination as PaginationAntD } from 'antd';
import PropTypes from 'prop-types';



export const Pagination = ({totalItems, jumperVisible, changerVisible}) => {

  
  return (
    <>
        <PaginationAntD 
          total={totalItems}
          showSizeChanger = {changerVisible}
          showQuickJumper = {jumperVisible}
          showTotal={total => `Total ${total} items`}>
        </PaginationAntD>
      </>
      )
}

Pagination.propTypes = {
  totalItems: PropTypes.number,
  jumperVisible: PropTypes.bool,
  changerVisible: PropTypes.bool,
};
