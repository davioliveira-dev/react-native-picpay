import {Container, Img, Option, Title} from './styles';

import React from 'react';
import img10 from '../../assets/images/10.png';
import img11 from '../../assets/images/11.png';
import img12 from '../../assets/images/12.png';
import img8 from '../../assets/images/08.png';
import img9 from '../../assets/images/09.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#172c4a ',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Economize para presentear',
    bgColor: '#6a0159 ',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Ajude quem precisa',
    bgColor: '#4139c8 ',
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Pague boletos com a câmera',
    bgColor: '#00ac4b',
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Personalize deixe a seu gosto',
    bgColor: '#ba2f76 ',
  },
];

const Tips = () => {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
};

export default Tips;
