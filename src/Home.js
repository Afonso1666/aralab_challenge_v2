import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Styles/Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {

  const online = (status) => {
    if (status === 'online') {
      return (
        <div className="online">
          <img style={{width: 15}} src={process.env.PUBLIC_URL + "/images/green_icon.png"} alt="" />
        </div>
      );
    }
  }

  const off = (set_humidity) => {
    if (!set_humidity) {
      return (
        <div className="off">
          <p>OFF</p>
        </div>
      );
    } else {
      return (
        <div className="set_humidity">
          <p>{set_humidity}%rH</p>
        </div>
      );
    }
  }

  const renderCard = (chamber) => {
    return (
      <Row key={chamber.id}>
        <Col>
          <Card  style={{width: '80%', padding: 0, margin: 35, borderRadius: 25, boxShadow: '10px 8px 20px 10px rgba(0,0,0,0.2)'}}>
            <Card.Body>
              <Card.Title style={{display: 'flex', padding: '5px', whiteSpace: 'pre'}}>{online(chamber.status)}<span style={{paddingInline: '15px'}}>{chamber.name}</span></Card.Title>
              <Card.Subtitle style={{marginLeft: 35}}>{chamber.type}</Card.Subtitle>
            </Card.Body>
            <Card.Img variant="top" style={{width: 250}} src={process.env.PUBLIC_URL + "/images/" + chamber.type + ".png"} />
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{backgroundColor: '#FA5F55', fontWeight: 'bold', fontFamily: 'Lucida Console', fontSize: '20px', color: 'white'}}>
                <img style={{paddingRight: 10}} src={process.env.PUBLIC_URL + "/images/temp.png"} alt="" />{chamber.current_temperature + "ºC"}
                <div style={{fontSize: 10, textAlign: 'right' }}>{chamber.set_temperature + "ºC"}</div>
              </ListGroup.Item>
              <ListGroup.Item style={{backgroundColor: '#0096FF', fontWeight: 'bold', fontFamily: 'Lucida Console', fontSize: '20px', color: 'white', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                <div className='footer'>
                  <img style={{paddingRight: 10}} src={process.env.PUBLIC_URL + "/images/hum.png"} alt="" />
                  {chamber.current_humidity + "%rH"}
                  <p style={{fontSize: 10, textAlign: 'right'}}>{off(chamber.set_humidity)}</p>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      
    );
  }

  return (
    <div className="home">
      {props.filteredChambers.map(renderCard)}
    </div>
  )
}

export default Home;