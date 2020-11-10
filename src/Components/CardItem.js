import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap'

const CardItem = ({product, AddInCart}) => {
    return (
        <Card className="mt-2 mb-1">
            <CardImg 
            top
            height="200"
            width="100%"
            src={product.smallImage}
            />
            <CardBody className="text-center">
                <CardTitle className="text-uppercase">{product.productName}</CardTitle>
                <CardText className="secondary">Price: Rs.{product.productPrice}</CardText>
                <Button
                color="success"
                onClick={() => AddInCart(product)} 
                >Add to Cart</Button>
            </CardBody>
        </Card>
    )
}

export default CardItem;