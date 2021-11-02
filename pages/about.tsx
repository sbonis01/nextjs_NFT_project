import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// TODO: FIX THIS 'const Home: NextPage' to about page
const about: NextPage = () => {
  return (
    <div className={styles.container}>


      {/* MAIN */}
      <main className={styles.about}>
        <Container>
          <Row>
            <Col id="leftAboutCol" className={styles.leftAboutCol} xs={4}>
              <h1 className={styles.wrapper}> Got cancelled?</h1>
              <p className={styles.wrapper}>
                {" "}
                Here, we will insert some sort of catchy phrase. But, now, we
                don't have any phrase, so we just wanted to fill this area in
                with plenty of text. I hope you have a stellar day!
              </p>
            </Col>

            <Col className={styles.rightAboutCol} xs={8}>
              <h1
                id="home-container-right-column-h1"
                className={styles.centerHorizontal}
              >
                NFT TITLE HERE
              </h1>
            </Col>
          </Row>
        </Container>
      </main>

    </div>
  );
};

export default about;