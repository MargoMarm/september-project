import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function ProductModal({ pageType, data }) {
  return (
    <>
      <img src="" alt="it`s a placeholder image, but it`s avocado too" />
      <strong>Well Done</strong>
      
      <button>NextProduct</button>
      <NavLink to={'/dairy'}>To the diary</NavLink>
    </>
  );
}

ProductModal.propTypes = {
  pageType: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default ProductModal;
