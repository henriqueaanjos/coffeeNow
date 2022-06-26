import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import Header from "../../components/Header/Header"
import ProductCard from "../../components/ProductCard";
import { useShop } from "../../hooks/useShop";
import { 
  Container, 
  Title,
  ProductsCards,
  Content,
  Footer,
  Total,
  TotalTitle,
  TotalValue,
} from "./styles";

const Products = () => {

  const theme = useTheme();
  const { itens, total} = useShop();

  return (
    <Container>
      <Header />
      <Content>
        <Title>Your Products</Title>
        <ProductsCards>
          {
            itens.map((item, index) => 
              <ProductCard key={index} idType={item.idType} idSize={item.idSize} quantity={item.quantity}/>
            )
          }
        </ProductsCards>
        <hr className="solid" color={theme.colors.brow._300}/>
        <Footer>
          <Total>
            <TotalTitle>Total:</TotalTitle>
            <TotalValue>U$ {total}.00</TotalValue>
          </Total>
          <Button title="Buy Now" color={theme.colors.red._900} textSize="1.5rem" size="25rem"/>
        </Footer>
      </Content>
    </Container>
  )
}

export default Products;