import { useState } from "react";
import {
  ListGroup,
  Badge,
  Button,
  ButtonGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsXCircle } from "react-icons/bs";
import Link from "next/link";

const Game = ({ game, remove }) => {
  const [key, setKey] = useState("info");

  return (
    <ListGroup.Item>
      <ListGroup horizontal>
        <ListGroup.Item>
          <h4>
            {game.name} <Badge variant="primary">{game.id}</Badge>
          </h4>
          <p>
            Datum: {new Date(parseInt(game.date)).toLocaleDateString()}
            {" | "}
            {new Date(parseInt(game.date)).toLocaleTimeString()}
          </p>
        </ListGroup.Item>
        <ButtonGroup style={{ width: "8rem" }}>
          <Link href={"/games/" + game.id}>
            <Button variant="info">
              <AiOutlineInfoCircle size={25} />
            </Button>
          </Link>

          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => <Tooltip {...props}>Lösche das Spiel</Tooltip>}
          >
            <Button
              variant="danger"
              onClick={() => {
                remove(game.id);
              }}
            >
              <BsXCircle size={25} />
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </ListGroup>
    </ListGroup.Item>
  );
};

export default Game;
