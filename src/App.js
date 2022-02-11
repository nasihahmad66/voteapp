import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./components/VotingCard";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";


function App() {
  let [candidates, setCandidates] = useState([])

  useEffect(() => {
    GetCandidates()
  }, []);

  const GetCandidates = ()=>{
    axios.get("https://vote-app-service.vercel.app/api/vote/all").then(data=>{
    // axios.get("http://localhost:8090/api/vote/all").then(data=>{
      if (data?.status == 200) {
        if (data?.data?.success) {
          console.log(data?.data?.data);
          setCandidates(data?.data?.data??[])
        }
      }
    })
  }

  function telahmemilih() {
    let newCandidates = candidates.map((candidate) => {
      candidate.pilih = true
      return candidate
    });
    setCandidates(newCandidates);
  }

  return (
    <Container className="app">
      <Row>
        {candidates.map((dt,key) => {
          return (
            <Col key={"COL"+key} md={4}>
              <VotingCard
                candidate={dt}
                onSubmit={telahmemilih}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default App;
