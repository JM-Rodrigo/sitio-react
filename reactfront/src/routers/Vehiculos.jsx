import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Vehiculos = () => {
  return (
    <Container className='mt-4'>
        <Row >
          <Col sm>
            <Card style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://noticias.coches.com/wp-content/uploads/2020/07/Volkswagen-Tiguan-R-2021-3.jpeg" style={{ width: '24rem', height:'14rem'}} />
                <Card.Body>
                  <Card.Title>Volkswagen Tiguan R Line</Card.Title>
                  <Card.Text>
                  Esta nueva camioneta SUV tiene motor de 2.0 L TSI 134 kW, potencia de 180 Hp y transmisión DSG de 7 velocidades.                  
                  </Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://www.hibridosyelectricos.com/media/hibridos/images/2019/04/26/2019042601362290284.jpg?width=1200&enable=upscale" style={{ width: '24rem', height:'14rem'}} />
                <Card.Body>
                  <Card.Title>Tesla Model 3</Card.Title>
                  <Card.Text>
                  Esta version cuenta con 462 CV, acelera hasta los 100 km/h en 3,5 segundos con 530 km de autonomía.
                  </Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src="https://siempreauto.com/wp-content/uploads/sites/9/2021/12/TAC_MY22_0005_V001.jpg?quality=60&strip=all&w=1200" style={{ width: '24rem', height:'14rem'}} />
              <Card.Body>
                <Card.Title>Toyota Tacoma</Card.Title>
                <Card.Text>
                Motor 2.7 litros DOHC y 16 válvulas 4 cilindros con VVT-i; 159 caballos de fuerza, tracción trasera (RWD).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mt-4'>
        <Col sm>
            <Card style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://images.drive.ru/i/0/601b86b0de4c227593f78c15.jpg"  style={{ width: '24rem', height:'14rem'}}/>
                <Card.Body>
                  <Card.Title>Ford Raptor</Card.Title>
                  <Card.Text>
                  De 450HP y 510 lb-pie de torque, motor 3.5LTwin-Turbo EcoBoost, gran estabilidad en los terrenos más difíciles. 
                  </Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_48fc4696292241ed8569c9b653fdab66.jpg" style={{ width: '24rem', height:'14rem'}}/>
                <Card.Body>
                  <Card.Title>Volkswagen Golf GTI</Card.Title>
                  <Card.Text>
                  El motor 2.0 TSI llega a su cuarta generación y ahora entrega 241 hp y 273 lb-pie de par, con poco turbolag.
                  </Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src="https://img.remediosdigitales.com/f13da9/ram-1500-trx-2021-21/1366_2000.jpg"  style={{ width: '24rem', height:'14rem'}}/>
              <Card.Body>
                <Card.Title>RAM 1500 TRX </Card.Title>
                <Card.Text>
                Diseñado para ofrecer un nuevo nivel de rendimiento, el motor Hemi V8 supercargado de 6.2 litros, es el nuevo referente de potencia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>

  
        
        
    
      

   
    
  )
}

export default Vehiculos