import styled from '@emotion/styled';
import { colors, mq } from '../../utils';



export const Option = styled.option`
  width: '200px',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  appearance: 'none',
  cursor: 'pointer',
`


export const Select = styled.select`
  appearance: none;
  position: reletive;
  
  height: 46px;
  width: 100%;

  
  ${mq.tablet} {
    height: 52px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${colors.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  outline: none;

  color: ${colors.textWhite06};
  background-color: transparent;
 
}
`;



export const FilterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${mq.tablet} {
    flex-direction: row;
    width: 664px;
  }
`;

export const FilterTitle = styled.div`
  display: none;
  ${mq.desktop} {
    display: block;
    position: absolute;
    top: -24px;
    right: 12px;
    font-size: 14px;
    line-height: 128%;
    color: ${colors.textWhite05};
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 16px;

`;

export const SelectPointer = styled.div`
  position: relative;
&::after {
  content: " ";
  background-image: url('../../assets/shewron.svg'); 
  color: red;
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  pointer-events: none; 
}
`

export const InputWrapper = styled.form`
  position: relative;
  width: 100%;
  ${mq.tablet} {
    width: 236px;
  }
`;

export const TextInput = styled.input`
  height: 46px;
  width: 100%;
  ${mq.tablet} {
    height: 52px;
    width: 236px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${colors.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  outline: none;

  color: ${colors.textWhite06};
  background-color: transparent;
  &:focus-visible {
    border: 1px solid ${colors.orange};
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
`;


