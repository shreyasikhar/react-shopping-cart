import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import {random, commerce} from 'faker'
import {Container, Col, Row} from 'reactstrap'

import CardItem from './CardItem'

// const apiKey = "";
// const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localUrl = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";

const BuyPage = ({AddInCart}) => {
    const [product, setProduct] = useState([]);

    // const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //         header: {
    //             Authorization: apiKey
    //         }
    //     });
    // }

    const fetchPhotos = async () => {
        const response = await Axios.get(localUrl);

        const photos = response.data.photos;

        const allProducts = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }));

        setProduct(allProducts);
    }

    useEffect(() => {
        fetchPhotos();
    }, []);

    return (
        <Container fluid>
            <h1 className="text-center text-dark mb-2">View Products</h1>
            <Row>
                {product.map(product => (
                   <Col md={4} key={product.id}>
                        <CardItem product={product} AddInCart={AddInCart}/>
                   </Col>
                ))}
            </Row>
        </Container>
    )
}

export default BuyPage;