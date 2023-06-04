import styled from 'styled-components'
import qr from './assets/images/image-qr-code.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 844px;
`

const Card = styled.div`
  display: flex;
  max-width: 350px;
  width: 100%;
  height: 550px;
  background-color: #fff;
  border-radius: 20px;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 90%;
  margin: 20px auto 40px auto;
`

const QR = styled.div`
  background-image: url(${qr});
  width: 100%;
  height: 370px;
  background-size: cover;
  border-radius: 10px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  text-align: center;
`

const Title = styled.div`
  width: 100%;
  margin: 30px auto;
  font-size: 25px;
  font-weight: bold;
`

const Description = styled.div`
  width: 100%;
  font-size: 20px;
  color: #818181;
`



function App() {

  return (
    <>
      <Container>
        <Card>
          <CardContainer>
            <QR/>
            <Info>
              <Title>Improves your front-end skills by building projects</Title>
              <Description>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Description>
            </Info>
          </CardContainer>
        </Card>
      </Container>
    </>
  )
}

export default App
