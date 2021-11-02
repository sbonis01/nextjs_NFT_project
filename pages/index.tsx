import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Link from next/l

// IMPORTS THE BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const index: NextPage = () => {
  return (
    <div className={styles.container}>
      
      {/* MAIN */}
      <main className={styles.main}>
        {/* <div className={styles.minColWidth}> */}
        <Container>
          <Row>
            <Col id="leftHomeCol" className={styles.leftHomeCol} xs={4}>
              <p className={styles.wrapper}>
                {" "}
                A collection of uniquely generated, collectible, and hilarious
                members of what we like to call the Cancelled Crew.
              </p>
            </Col>

            <Col className={styles.rightHomeCol} xs={8}>
              <h1
                id="home-container-right-column-h1"
                className={styles.centerHorizontal}
              >
                THE CANCELLED CREW
              </h1>
              {/* CAROSUEL/SLIDESHOW */}
              <Carousel>
                <Carousel.Item>
                  <Image
                    className="d-block w-100 wrapper img"
                    src="NFT-Placeholder1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src="NFT-Placeholder2.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </main>

 
    </div>
  );
};

export default index
