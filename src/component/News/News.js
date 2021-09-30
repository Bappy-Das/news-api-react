// import Button from '@restart/ui/esm/Button';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Card, Col } from 'react-bootstrap';
import './News.css'

const News = (props) => {
    const { title, description, urlToImage, publishedAt, url } = props.news;
    return (
        <div>
            <Col className="card">
                <Card >
                    <Card.Img variant="top" src={urlToImage} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary" href={url}>See More</Button>
                        {/* <Button variant="primary">Primary</Button> */}
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text>Published At: {publishedAt}</Card.Text>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default News;