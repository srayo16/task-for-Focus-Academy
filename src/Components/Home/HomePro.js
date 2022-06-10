import React from 'react';
import { Card } from 'react-bootstrap';
import './HomePro.css';

const HomePro = ({ data }) => {
    // console.log(data);
    return (
        <div className='col-12 col-sm-12 col-md-4 col-lg-3'>
            <Card className='mx-auto cardWidth'>
                <Card.Img variant="top" src={data?.picture?.large} className='img-fluid' />
                <Card.Body>
                    <Card.Title className='text-center'> {data?.name?.title} {data?.name?.first} {data?.name?.last}</Card.Title>
                    {/* <Card.Text>

                    </Card.Text> */}
                </Card.Body>
            </Card>
        </div>


    );
};

export default HomePro;