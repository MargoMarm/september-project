import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const CheckboxWrap = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;

  &:not(:last-child) {
    margin-right: 9px;
  }

  &:hover p,
  &:focus p {
    color: ${colors.orange};
    border-color: ${colors.orange};
  }
`;

export const InputHidden = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;

  &:checked + p {
    border-color: #ef8964;

    &:before {
      background-color: #ef8964;
    }
  }
`;

export const Chkbx = styled.p`
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 14px;
  height: 14px;
  background-color: #000;
  border: 1px solid #636366;
  border-radius: 50%;
  transition:
    color 0.3s,
    border-color 0.3s;

  &:before {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    background-color: #000;
    border-radius: 50%;
  }
`;

export const CheckboxText = styled.p`
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
  line-height: 1.3;
  color: grey;
  transition:
    color 0.3s,
    border-color 0.3s;
`;
