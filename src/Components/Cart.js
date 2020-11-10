import React from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Row,
    Col,
    Button
} from 'reactstrap'
import {FaCartArrowDown} from 'react-icons/fa'

const Cart = ({cartItem, removeItem, buyNow}) => {
    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);
    })

    return (
        <Container fluid>
            <h1 className="text-dark text-center mb-2">Your Cart <FaCartArrowDown /></h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img 
                                src={item.tinyImage}
                                height="80"
                                alt=""
                                />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary m-1">
                                    {item.productName}
                                </div>
                                <span className="m-1">Price: {item.productPrice}</span>
                                <Button
                                className="m-1"
                                color="danger"
                                onClick={() => removeItem(item)}
                                >Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>

            {/* If cart is empty */}
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>Grand Total</CardHeader>
                        <CardBody>Your amount for {cartItem.length} product(s) is Rs.{amount}</CardBody>
                        <CardFooter>
                            <Button
                            color="primary"
                            onClick={buyNow}
                            >Pay Here</Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <p className="alert alert-warning text-center mt-4 border border-warning">Cart is empty !</p>
                )
            }
        </Container>
    )
}

export default Cart;