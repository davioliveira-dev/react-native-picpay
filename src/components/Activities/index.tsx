import {
  Actions,
  Avatar,
  Bold,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Date,
  Description,
  Details,
  Divider,
  Header,
  Option,
  Title,
  UserName,
  Value,
} from './styles';
import {AntDesign, Feather, MaterialCommunityIcons} from '@expo/vector-icons';

import React from 'react';
import avatar from '../../assets/images/avatar.png';

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@davioliveira-dev</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Davi Oliveira</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>Há 2 semanas</Date>

          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#fff"
              />
            </Option>
            <Option>
              <AntDesign
                name="hearto"
                size={14}
                color="#fff"
              />
            </Option>
          </Actions>

        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
