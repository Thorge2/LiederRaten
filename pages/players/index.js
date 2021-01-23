import { Card, ListGroup, Button } from "react-bootstrap";
import { usePlayers } from "../../hooks/players";
import Link from "next/link";
import Player from "../../components/player";

const Players = () => {
  const [players, setPlayers] = usePlayers();

  return (
    <Card style={{ overflow: "hidden", maxHeight: "80vh" }}>
      <Card.Header>
        <Card.Title>
          <h1>Spieler</h1>
        </Card.Title>
        <Link href="/players/add">
          <Button variant="success">Spieler Hinzufügen</Button>
        </Link>
      </Card.Header>

      <Card.Body style={{ overflow: "auto" }}>
        <ListGroup variant="flush">
          {players.length == 0 ? (
            <div>
              <h2>Keiner spielt mit :( </h2>
              <Link href="/players/add">füge einen Spieler hinzu</Link>
            </div>
          ) : (
            players.map((player, i) => (
              <Player player={player} index={i} key={i} />
            ))
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Players;
