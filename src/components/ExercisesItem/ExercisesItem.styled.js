import styled from '@emotion/styled';

export const ExercisesItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

export const Filter = styled.span`
  color: #efede8;
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const Name = styled.span`
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const Image = styled.img`
  max-width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.5) 0%, rgba(4, 4, 4, 0.5) 100%),
    url(<path-to-image>),
    lightgray -2px -151.969px / 101.493% 247.543% no-repeat;
`;
export const WrapSpan = styled.div``;

export const WrapList = styled.li``;
export const WrapImg = styled.div``;
