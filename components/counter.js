import { Card, ListGroup, ButtonGroup, Button } from "react-bootstrap";
import { usePlayers } from "../hooks/players";

const Counter = ({ player, index }) => {
  const [players, setPlayers] = usePlayers();

  return (
    <ListGroup.Item>
      <ListGroup horizontal>
        <Button
          variant="info"
          style={{ width: "10rem", backgroundColor: player.color }}
          onClick={() =>
            setPlayers(
              players.map((p, i) => {
                if (i === index) p.score += 1;
                return p;
              })
            )
          }
        >
          +1
        </Button>
        <Card
          style={{
            width: "100%",
          }}
        >
          <Card.Body>
            <Card.Title>
              <h3>{player.name}</h3>
            </Card.Title>
            <Card.Title>Score: {player.score}</Card.Title>
          </Card.Body>
        </Card>
        <ButtonGroup style={{ width: "20%" }}>
          <Button
            variant="success"
            style={{ width: "60%" }}
            onClick={() =>
              setPlayers(
                players.map((p, i) => {
                  if (i === index) p.score += 2;
                  return p;
                })
              )
            }
          >
            +2
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              setPlayers(
                players.map((p, i) => {
                  if (i === index) p.score -= 1;
                  return p;
                })
              )
            }
          >
            -1
          </Button>
        </ButtonGroup>
      </ListGroup>
    </ListGroup.Item>
  );
};

export default Counter;
