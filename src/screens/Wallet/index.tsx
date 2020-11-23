import {
  Action,
  ActionLabel,
  Actions,
  AddButton,
  AddLabel,
  BalanceContainer,
  Bold,
  Card,
  CardBody,
  CardDetails,
  CardInfo,
  CardTitle,
  EyeButton,
  Header,
  HeaderContainer,
  Img,
  Info,
  PaymentMethods,
  PaymentMethodsTitle,
  Title,
  UseBalance,
  UseBalanceTitle,
  UseTicketButton,
  UseTicketContainer,
  UseTicketLabel,
  Value,
  Wrapper,
} from './styles';
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import React, {useState} from 'react';

import {Switch} from 'react-native';
import creditCard from '../../assets/images/credit-card.png';

const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  const handleToggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleToggleUseBalance = () => {
    setUseBalance((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Header
        colors={useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']}
      >
        <HeaderContainer>
          <Title>Saldo do PicPay</Title>
          <BalanceContainer>
            <Value>R$ <Bold>{isVisible ? '0,00' : '----'}</Bold></Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={isVisible ? 'eye' : 'eye-off'}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Formas de Pagamento
        </PaymentMethodsTitle>
      </PaymentMethods>

      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>Cadastre seu cartão de crédito</CardTitle>
            <CardInfo>
            Cadastre seu cartão de crédito para
            fazer pagamentos mesmo quando
            não tiver saldo no  seu PicPay!
            </CardInfo>
          </CardDetails>
          <Img source={creditCard} resizeMode="contain" />
        </CardBody>

        <AddButton>
          <AntDesign name="pluscircleo" size={30} color="#0db060" />
          <AddLabel>Adicionar cartão de crédito</AddLabel>
        </AddButton>

      </Card>

      <UseTicketContainer>
        <UseTicketButton>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={20}
            color="#0db060"
          />
          <UseTicketLabel> Usar código promocional </UseTicketLabel>
        </UseTicketButton>
      </UseTicketContainer>

    </Wrapper>
  );
};

export default Wallet;
