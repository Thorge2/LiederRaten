import {
  Card,
  ListGroup,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { BsXCircle } from "react-icons/bs";
import { usePlayers } from "../hooks/players";

const Player = ({ player, index }) => {
  const [players, setPlayers] = usePlayers();

  return (
    <ListGroup.Item>
      <ListGroup horizontal>
        <div
          style={{
            width: "5rem",
            backgroundColor: player.color,
            borderRadius: "5px",
          }}
        />
        <Card bg="light" text="dark" style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{player.name}</Card.Title>
            <Card.Subtitle>Score: {player.score}</Card.Subtitle>
          </Card.Body>
        </Card>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => (
            <Tooltip {...props}>Entferne den Spieler</Tooltip>
          )}
        >
          <Button
            style={{ width: "5rem" }}
            variant="danger"
            onClick={() => setPlayers(players.filter((p, i) => i != index))}
          >
            <BsXCircle size={30} />
          </Button>
        </OverlayTrigger>
      </ListGroup>
    </ListGroup.Item>
  );
};

export default Player;
