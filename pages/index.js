import { Card, ListGroup, Button } from "react-bootstrap";
import Link from "next/link";
import { usePlayers } from "../hooks/players";
import Counter from "../components/counter";

const Index = () => {
  const [players, setPlayers] = usePlayers();

  return (
    <Card style={{ overflow: "hidden", maxHeight: "80vh" }}>
      <Card.Header>
        <Card.Title>
          <h1>LiederRaten</h1>
          <h3>Es spielen: {players.length}</h3>
        </Card.Title>
      </Card.Header>

      <Card.Body style={{ overflow: "auto" }}>
        {players.length === 0 ? (
          <Link href="/players/add">
            <Button variant="success">Füge einen Spieler hinzu</Button>
          </Link>
        ) : (
          <ListGroup variant="flush">
            {players.map((player, index) => (
              <Counter player={player} index={index} key={index} />
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
};

export default Index;
