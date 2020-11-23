import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import {
  Balance,
  BalanceContainer,
  BalanceTitle,
  Container,
  Header,
  Wrapper,
} from './styles';

import Activities from '../../components/Activities';
import Banner from '../../components/Banner';
import React from 'react';
import Suggestions from '../../components/Suggestions';
import Tips from '../../components/Tips';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>0,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>

        <Suggestions />

        <Activities />

        <Tips />

        <Banner />

      </Container>
    </Wrapper>
  );
};

export default Home;
