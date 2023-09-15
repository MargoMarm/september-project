import { Text } from './MainTitle.styled';
import sprite from '../../assets/sprite.svg';

export default function MainTitle() {
  return (
    <Text>
      Transforming your{' '}
      <span>
        body{' '}
        <svg>
          <use href={sprite + `#line`}></use>
        </svg>
      </span>{' '}
      shape with Power Pulse
    </Text>
  );
}
