import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

interface LabelProps {
  focused: boolean
}

export const Button = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<LabelProps>`
  color: ${({focused}) => focused ? '#000' : '#fff'};
  font-size: 12px;
`;
