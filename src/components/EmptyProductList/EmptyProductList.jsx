import {TextContainer, MainText, AccentText } from './EmptyProductList.styled';

import PropTypes from 'prop-types';

const EmptyProductList = () => {
  return (
   <TextContainer>
    <MainText> <AccentText>Sorry, no results were found</AccentText> for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs.</MainText>
     <AccentText>Try changing the search parameters.</AccentText>
    </TextContainer>
  );
};



export default EmptyProductList;