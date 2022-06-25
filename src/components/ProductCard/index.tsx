import styled from "styled-components";

interface Props{
  type: string,
  size: string,
  amount: number,
  image: string
}

interface ImageProps{
  img: string
}

const ImageDiv = styled.div<ImageProps>`
  height: 70px;
  width: 50px;
  background-image: url(${({img}) => img});
  background-size: contain;
  background-repeat: no-repeat;
`;

const ProductCard = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px'
      }}
    >
      <div>
        <ImageDiv img={props.image}/>
      </div>
      <div
        style={{
          padding: '10px'
        }}
      >
        <h4>
          {props.type}
        </h4>
        <h4>
          {props.size}
        </h4>
        <h5>
          Total
        </h5>
      </div>
      <div
        style={{
          textAlign: 'center',
          padding: '10px'
        }}
      >
        <h1>
          {props.amount}
        </h1>
        <h5>
          U$ 10.00
        </h5>
      </div>
    </div>
  )
}

export default ProductCard;