import PropTypes from 'prop-types';

import { ScrollContainer } from './Scrollbar.syled';

export default function ScrollBar({ width, children }) {
  return <ScrollContainer width={width}>{children}</ScrollContainer>;
}

ScrollBar.propTypes = {
  width: PropTypes.object,
};
