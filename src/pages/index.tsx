import { useTheme } from 'styled-components';
import { Button } from '../components/Button';
import {
  Container,
  Content,
  Title,
  Line,
  TitleLogo,
  SubTitle
} from '../styles/index';


export default function Home() {
  const theme = useTheme();
  return (
    <Container img='/background.png'>
      <Content>
        <Title>
          Do you like good
        </Title>
        <Line>
          <TitleLogo>Coffee</TitleLogo>
          <Title>
            ?
          </Title>
        </Line>
        <SubTitle>
          So, Welcome to right place! 
        </SubTitle>
        <Button 
          title='Order Now' 
          color={theme.colors.red._900}
        />
      </Content>
    </Container>
  )
}