import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// IMPORTS THE BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const rarityCollection: NextPage = () => {
  return (
    <div className={styles.container}>

      {/* MAIN */}
      <main className={styles.main}>
        <Container className="find">
          <div className={styles.collectionContainer}>
            <h1 className={styles.center}>COLLECTION TITLE</h1>
            <Col>
              <Row className={styles.rowClass}>
                {/* NFT-1 */}
                <Card className={styles.cardClass} style={{ width: "12rem" }}>
                  <Card.Img variant="top" src="nft-card-placeholder.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </Card.Text>
                    <Button variant="primary">MINT NFT</Button>
                  </Card.Body>
                </Card>
                {/* NFT-2 */}
                <Card className={styles.cardClass} style={{ width: "12rem" }}>
                  <Card.Img variant="top" src="nft-card-placeholder.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </Card.Text>
                    <Button variant="primary">MINT NFT</Button>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </div>
        </Container>
      </main>

      
    </div>
  );
};

export default rarityCollection;
