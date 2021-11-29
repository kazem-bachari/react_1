import React from 'react';
import $, { map } from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card, Button } from 'react-bootstrap';
import Logo from './logo.png'
const Carousel = () => {
    const list = [1, 2, 3, 4, 5]
    
    console.log(list);
    return (
        <>
            <div className='container  mx-auto '>
                <OwlCarousel  autoplayTimeout={20}  dotsData={true}  className='owl-theme' items={3} margin={20} nav >
                    {list.map(item =>
                        <div class='item my-5'>
                            <Card className='border border-blue-400' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Logo} />
                                <Card.Body className='p-3 bg-blue-400 text-white'>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </div>

                    )}
                </OwlCarousel></div>

        </>
    );
}

export default Carousel;
