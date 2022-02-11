import axios from "axios";
import React from "react";
import { Card, Button } from "react-bootstrap";

function VotingCard(props) {
  let { candidate, onSubmit } = props;
  const voteCandidate = (id)=>{
    axios.post("https://vote-app-service.vercel.app/api/vote/vote",{
    // axios.post("http://localhost:8090/api/vote/vote",{
      "Pemilih":"Anonymous",
      "Pilihan" : id,
      "Alasan" : "Unknown"
    }).then(
      onSubmit()
    )
  }

  return (
    <Card style={{ width: "18rem","marginBottom":"6px" }}>
      <Card.Img  style={{"width":"17rem","height":"20rem","margin": "auto"}} variant="top" src={candidate.Foto} />
      <Card.Body>
        <Card.Title>{candidate.NamaKandidat}</Card.Title>
        <Card.Subtitle>VISI</Card.Subtitle>
        <Card.Text>{candidate.Visi}</Card.Text>
        <Card.Subtitle>MISI</Card.Subtitle>
        <Card.Text>{candidate.Misi}</Card.Text>
        <Button disabled={candidate.pilih}  variant="success" onClick={candidate.pilih?{}:() => voteCandidate(candidate._id)}>
          Vote
        </Button>
      </Card.Body>
      {/* <Card.Footer>Vote count: {candidate.votes}</Card.Footer> */}
    </Card>
  );
}
export default VotingCard;
