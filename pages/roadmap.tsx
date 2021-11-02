import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Link from next/l

// IMPORTS THE BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const roadmap: NextPage = () => {
  return (
    <div className={styles.container}>

      {/* MAIN */}
      <main className={styles.main}>
        <Container className={styles.collectionContainer}>
          <h1 className={styles.center}>ROADMAP</h1>
          <div className={styles.roadmapContainer}>
            <div>
              <Image
                className={styles.img}
                src="roadmap-placeholder.jpg"
                alt="Second slide"
              />
            </div>
          </div>
        </Container>
      </main>

    </div>
  );
};

export default roadmap;
