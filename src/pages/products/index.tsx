import Header from "../../components/Header/Header"
import ProductCard from "../../components/ProductCard";

const Products = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          padding: '10px'
        }}
      >
        <div
          style={{
            display: 'flex'
          }}
        >
          <ProductCard type="EXPRESS" size="LARGER" amount={2} image="/Mocha%20Sm.png"/>
          <ProductCard type="EXPRESS" size="LARGER" amount={2} image="/Mocha%20Sm.png"/>
          <ProductCard type="EXPRESS" size="LARGER" amount={2} image="/Mocha%20Sm.png"/>
        </div>
        <hr className="solid"/>
        <div
          style={{
            textAlign: 'end'
          }}
        >
          <h1>
            Total: U$ 26.00
          </h1>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default Products;