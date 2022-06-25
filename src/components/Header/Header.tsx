import { MainDiv, SubDiv } from "./styles";
import { IoCart } from "react-icons/io5";

const Header = () => {
  return (
    <MainDiv>
      <SubDiv>
        logo
      </SubDiv>
      <SubDiv>
        <a href="#">Products</a>
        <a href="#">About Us</a>
      </SubDiv>
      <SubDiv>
        <IoCart size={70} cursor='pointer'/>
      </SubDiv>
    </MainDiv>
  );
}

export default Header;