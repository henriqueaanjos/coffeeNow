import styled from "styled-components";
import Header from "../../components/Header/Header";
import { NamePrice } from "../../components/NamePrice";
import { CenterDiv, Container } from "../../styles";

const HalfDiv = styled.div`
  height: 100%;
  width: 50%;
  background-color: lightcyan;
`;

const OrderPage = () => {
  return(
    <div style={{height: '100vh'}}>
     
      <Header />
     
      <div 
        style={{
          display: 'flex', 
          flexDirection: 'row', 
          height: '90%'
        }}
      >{/* content */}
        <HalfDiv>{/* order */}
          <div
            style={{
              padding: '20px'
            }}
          >
            <h1 style={{textAlign: 'center'}}>WHAT DO YOU WANT TODAY ?</h1>
            <h5>Pricing</h5>
            <div
              style={{
                display: 'flex',
                paddingTop: '30px'
              }}
            >
              <HalfDiv>
                <NamePrice name="EXPRESS" price='U$ 2.00'/>
                <NamePrice name="LATE" price='U$ 3.00'/>
                <NamePrice name="CAPPUCCINO" price='U$ 5.00'/>
                <NamePrice name="MOCHA" price='U$ 7.00'/>
              </HalfDiv>
              <HalfDiv>
                <NamePrice name="SMALL (150ML)" price="INCLUSE" />
                <NamePrice name="MEDIUM (300ML)" price="+ U$ 1.00" />
                <NamePrice name="LARGER (500ML)" price="+ U$ 3.00" />
              </HalfDiv>
            </div>
            <div
              style={{
                display: 'flex',
                padding: '20px'
              }}
            >
              <HalfDiv>
                <select
                  style={{
                    width: '90%'
                  }}
                >
                  <option value="EXPRESS">EXPRESS</option>
                  <option value="LATE">LATE</option>
                  <option value="CAPPUCCINO">CAPPUCCINO</option>
                  <option value="MOCHA">MOCHA</option>
                </select>
              </HalfDiv>
              <HalfDiv
                style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <select
                  style={{
                    width: '60%'
                  }}
                >
                  <option value="SMALL">SMALL</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="LARGER">LARGER</option>
                </select>
                <input type="number" min={0} max={100}/>
              </HalfDiv>
            </div>
            <div
              style={{
                display: 'flex'
              }}
            >
              <HalfDiv>
                <h1>TOTAL:</h1>
              </HalfDiv>
              <HalfDiv
                style={{
                  textAlign: 'end'
                }}
              >
                <h1>U$ 5.00</h1>
              </HalfDiv>
            </div>
            <div
              style={{
                display: 'flex',
                padding: '20px'
              }}
            >
              <div
                style={{
                  width: '60%',
                }}
              >
                <button>Add to Cart</button>
              </div>
              <div>
                <button>Go to Cart</button>
              </div>
            </div>
          </div>

        </HalfDiv>
        <HalfDiv>{/* image */}
          <Container img="/background.png">
            <CenterDiv>
              <div
                style={{
                  height: '500px',
                  width: '300px'
                }}
              >
                <Container img="/Mocha%20Sm.png"/>
              </div>
            </CenterDiv>
          </Container>
        </HalfDiv>
      </div>
    </div>
  )
}

export default OrderPage;