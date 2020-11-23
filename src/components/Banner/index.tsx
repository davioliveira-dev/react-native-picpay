import {Container, Description, Details, Img, Title} from './styles';

import React from 'react';
import img13 from '../../assets/images/13.png';

const Banner: React.FC = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer cobranças
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
};

export default Banner;
