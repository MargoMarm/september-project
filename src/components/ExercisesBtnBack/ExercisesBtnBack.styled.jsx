import styled from 'styled-components';

import { mq, colors } from '../../utils';

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;

 padding: 0px;
 margin-top:10px;

	font-size: 14px;
  line-height: 1.28; 



  background-color: transparent;
  color: ${colors.textWhite04};
  border: none;
	scale: 1;

  transition:
  scale 250ms ease-in-out,
  color 250ms ease-in-out;
	fill 250ms ease-in-out;


		${mq.tablet}{
 font-size: 16px;
line-height: 1.5; 
		}



  &:hover {
    color: ${colors.orange};
    scale: 1.1;

  }
  &:focus {
    color: ${colors.orange};
		scale: 1.1;
  }

  &:hover svg {
    fill: ${colors.orange};
		scale: 1.1;
  }
  &:focus svg {
    fill: ${colors.orange};
		scale: 1.1;
  }
`;

export const SvgArrow = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: ${colors.textWhite04};
  scale: 1;

  transition:
    scale 250ms ease-in-out,
    fill 250ms ease-in-out;
`;
