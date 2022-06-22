import {Container,Row,Col,Image,Button} from 'react-bootstrap'

 export default function StoreListing(){

    const styles ={
        indvStoreCont:{
            boxShadow: '1px 2px 9px #000000',
            display: 'flex',
            //  borderRadius: '15%',
            width: '300px',
            height: '150px',
            alignItems: 'center',
            marginBottom:'2rem'
        },
        h2:{
            display:'block', 
            position:'relative',
            margin: 'auto'
        }

    }
    return(
       
        <div style={{display:"block", margin: "auto" }}>
            <div style={styles.h2}>
                <h2> Browse stores in Houston</h2>
            </div>
            <Container style={{ marginTop: "40px", textAlign: "center", dropShadow:'', display: "inline-flex"}}>
               
                <Row style={{ borderBottom: "1px solid #E8E9EB", flexDirection: "row", justifyContent: "space-evenly"}} >
                    
                    <Col sm="1"></Col>
                    <Row>
                        <Button variant="outline-secondary" size="md" style={styles.indvStoreCont}>
                        <Col xs=".5" >
                            <Image src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                        </Button>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Button variant="outline-secondary" size="md" style={styles.indvStoreCont}>
                        <Col xs=".5">
                            <Image src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                        </Button>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Button variant="outline-secondary" size="md" style={styles.indvStoreCont}>
                        <Col xs=".5" >
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kroger_logo_%281961-2019%29.svg/750px-Kroger_logo_%281961-2019%29.svg.png" width="75px" roundedCircle />
                        </Col>
                        <Col >
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                        </Button>
                    </Row>
                </Row>
                <Row></Row>
                
                <Col sm="1"></Col>
                <Row style={{ borderBottom: "1px solid #E8E9EB", flexDirection: "row", justifyContent: "space-evenly"}} >
                    <Row >
                    <Button variant="outline-secondary" size="md" style={styles.indvStoreCont}>
                        <Col xs=".5" >
                            <Image src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Button>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Button variant="outline-secondary" size="md" style={styles.indvStoreCont}>
                            <Col xs=".5">
                                <Image src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />
                            </Col>
                            <Col>
                                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Button>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                    <Button variant="outline-secondary" size="md" style={styles.indvStoreCont}>   
                            <Col xs=".5" >
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kroger_logo_%281961-2019%29.svg/750px-Kroger_logo_%281961-2019%29.svg.png" width="75px" roundedCircle />
                            </Col>
                            <Col>
                                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                                <p>Delivery</p>
                            </Col>
                        </Button>
                    </Row>
                </Row>
            </Container>

        </div>
    )
}