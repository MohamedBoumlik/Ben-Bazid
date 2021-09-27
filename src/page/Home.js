import React from "react";
import '../asset/scss/Home.scss';
import MovingText from 'react-moving-text'
import { Carousel } from "react-bootstrap";

const Home = () => {
return(
    <div>

        <Carousel>

            <Carousel.Item>
                <img
                className="d-block w-100 fluid"
                src="https://images.unsplash.com/photo-1591557562184-96fd1b4cf797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
                style={{height: '94vh',
                    width: '100%',
                    objectFit: 'cover'
                   }}
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100 fluid"
                src="https://images.unsplash.com/photo-1575867094741-beeb9b072b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Second slide"
                style={{height: '94vh',
                    width: '100%',
                    objectFit: 'cover'
                   }}
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100 fluid"
                src="https://images.unsplash.com/photo-1529220502050-f15e570c634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1229&q=80"
                alt="Third slide"
                style={{height: '94vh',
                    width: '100%',
                    objectFit: 'cover'
                   }}
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        <h1 className='titles'>À propos de nous</h1>
        <div className="description m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos laudantium illo, distinctio temporibus nisi doloribus? Illo atque, temporibus repellat consequatur incidunt similique sequi facilis quia, esse, cupiditate distinctio consequuntur laboriosam quaerat nam exercitationem fugit quasi laborum numquam quod ab odit facere beatae architecto. Eos veritatis pariatur velit doloribus praesentium ratione, itaque nam?
        </div>

    </div>
)

}

export default Home;