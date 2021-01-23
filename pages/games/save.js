import { useState, useEffect, useRef } from "react";
import { Card, Form, Button, Overlay, Alert, Badge } from "react-bootstrap";
import { usePlayers } from "../../hooks/players";
import { useSaveGame } from "../../hooks/games";

const Save = () => {
  const [players, setPlayers] = usePlayers();
  const [name, setName] = useState("");

  const target = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(name.length === 0);
  }, [name]);

  const [saveGame, { data }] = useSaveGame();

  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h1>Spiel Speichern</h1>
        </Card.Title>
      </Card.Header>

      <Card.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (name.length === 0 || players.length === 0) return;
            saveGame({ variables: { name, players } });
            setName("");
            setPlayers([]);
          }}
        >
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={target}
          />
          <br />
          <Form.Label>
            Spieler: {players.length}{" "}
            {players.length === 0 ? (
              <Badge variant="danger">Füge einen Spieler hinzu</Badge>
            ) : (
              ""
            )}
          </Form.Label>
          <br />
          <Button type="submit" variant="success">
            Speichern
          </Button>
        </Form>
      </Card.Body>

      <Overlay
        target={target.current}
        show={name.length === 0}
        placement="bottom"
      >
        {(props) => (
          <Alert variant="danger" {...props}>
            Name ist Leer
          </Alert>
        )}
      </Overlay>
    </Card>
  );
};

export default Save;
