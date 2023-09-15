import { Text } from './MainTitle.styled';
import sprite from '../../assets/sprite.svg';

export default function MainTitle() {
  return (
    <Text>
      Transforming your{' '}
      <span>
        body{' '}
        <svg width={185} height={67}>
          <use href={sprite + `#line`}></use>
        </svg>
      </span>{' '}
      shape with Power Pulse
    </Text>
  );
}
