import PropTypes from 'prop-types';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { useScrollbar } from '../../hooks/useScrollBar';
import { useRef } from 'react';

import { ScrollContainer } from './Scrollbar.syled';

export default function Scrollbar({ children, width }) {
  const { isMobile } = useMatchMedia();
  const ContainerWrapper = useRef(null);
  const hasScroll = !isMobile;
  useScrollbar(ContainerWrapper, hasScroll);

  return (
    <ScrollContainer width={width} ref={ContainerWrapper}>
      {children}
    </ScrollContainer>
  );
}

ScrollContainer.propTypes = {
  width: PropTypes.object,
};
