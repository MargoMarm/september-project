import PropTypes from 'prop-types';

import {
  GreyCard,
  GreySvgWrapper,
  GreySvg,
  GreyTextWrapper,
  GreyDynamicText,
  GreyStaticText,
  OrangeCard,
  OrangeSvgWrapper,
  OrangeSvg,
  OrangeTextWrapper,
  OrangeDynamicText,
  OrangeStaticText,
} from './ParamsBlocks.styled';

const ParamsBlockCard = ({ data, measure, type, step }) => {
  if (type === 'grey') {
    return (
      <GreyCard step={step}>
        <GreySvgWrapper>
          <GreySvg viewBox="0 0 15 18">
            <path d="M15 9L0 17.6603L0 0.339746L15 9Z" />
          </GreySvg>
        </GreySvgWrapper>
        <GreyTextWrapper>
          <GreyDynamicText>{data}+</GreyDynamicText>
          <GreyStaticText>Video tutorial</GreyStaticText>
        </GreyTextWrapper>
      </GreyCard>
    );
  }

  if (type === 'orange') {
    return (
      <OrangeCard>
        <OrangeSvgWrapper>
          <OrangeSvg viewBox="0 0 32 32">
            <path d="M29.647 9.451c-0.419-0.501-1.166-0.567-1.667-0.149l-3.282 2.757-1.509-3.739c-0.054-0.14-0.135-0.258-0.229-0.362-0.308-0.686-0.844-1.275-1.582-1.617-0.32-0.146-0.652-0.224-0.982-0.262-0.073-0.038-0.139-0.088-0.222-0.114l-5.775-1.61c-0.324-0.088-0.65-0.031-0.917 0.125-0.317 0.107-0.589 0.338-0.719 0.672l-2.175 5.592c-0.236 0.608 0.066 1.294 0.676 1.534 0.607 0.236 1.294-0.068 1.532-0.678l1.837-4.722 2.63 0.731c-0.064 0.104-0.133 0.201-0.185 0.312l-3.372 7.309c-0.049 0.107-0.075 0.217-0.109 0.328l-4.098 6.871-6.859 2.294c-0.776 0.58-0.941 1.674-0.367 2.45 0.577 0.778 1.674 0.943 2.448 0.369l7.018-2.417c0.215-0.156 0.371-0.36 0.489-0.58 0.088-0.094 0.189-0.168 0.256-0.284l2.443-4.096 4.337 3.696-4.641 5.23c-0.639 0.721-0.575 1.832 0.149 2.469 0.723 0.643 1.83 0.575 2.473-0.149l5.791-6.524c0.18-0.201 0.288-0.433 0.36-0.676 0.043-0.132 0.043-0.269 0.054-0.406 0-0.069 0.026-0.132 0.021-0.196-0.016-0.478-0.21-0.943-0.601-1.274l-3.991-3.403c0.288-0.274 0.532-0.6 0.709-0.983l2.585-5.599 0.828 2.206c0.035 0.196 0.1 0.388 0.239 0.549 0.125 0.149 0.284 0.248 0.454 0.317 0.017 0.009 0.038 0.010 0.059 0.016 0.107 0.038 0.216 0.075 0.329 0.080 0.133 0.012 0.269-0.005 0.405-0.043 0.004-0.002 0.005-0.002 0.005-0.002 0.036-0.009 0.073-0.002 0.109-0.017 0.192-0.073 0.34-0.196 0.466-0.34l4.71-3.998c0.501-0.421 0.289-1.166-0.132-1.667z"></path>
            <path d="M23.689 6.602c1.823 0 3.301-1.478 3.301-3.301s-1.478-3.301-3.301-3.301c-1.823 0-3.301 1.478-3.301 3.301s1.478 3.301 3.301 3.301z"></path>
          </OrangeSvg>
        </OrangeSvgWrapper>
        <OrangeTextWrapper>
          <OrangeDynamicText>{data}</OrangeDynamicText>
          <OrangeStaticText>{measure}</OrangeStaticText>
        </OrangeTextWrapper>
      </OrangeCard>
    );
  }
};

ParamsBlockCard.propTypes = {
  data: PropTypes.number,
  type: PropTypes.string,
  measure: PropTypes.string,
  steps: PropTypes.string,
};

export default ParamsBlockCard;
