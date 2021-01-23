import {
  Badge,
  Card,
  Form,
  Button,
  Overlay,
  Tooltip,
  Alert,
} from "react-bootstrap";
import { CirclePicker } from "react-color";
import { useEffect, useRef, useState } from "react";
import { usePlayers } from "../../hooks/players";

const Add = () => {
  const [color, setColor] = useState("#efefef");
  const [name, setName] = useState("");

  const target = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(name.length === 0);
  }, [name]);

  const [players, setPlayers] = usePlayers();

  const submit = (e) => {
    e.preventDefault();
    if (name.length !== 0) {
      setPlayers([...players, { name: name, score: 0, color: color }]);
      setName("");
    }
  };

  return (
    <Card>
      <Card.Header style={{ backgroundColor: color }}>
        <Card.Title>
          <h1>{name.length == 0 ? "Spieler hinzufügen" : name} </h1>
        </Card.Title>
      </Card.Header>

      <Card.Body>
        <Form onSubmit={submit}>
          <Form.Label>
            <h3>Name</h3>
          </Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={target}
          ></Form.Control>
          <br />

          <Form.Label>
            <h3>Farbe</h3>
          </Form.Label>
          <CirclePicker
            color={color}
            colors={[
              "#f44336",
              "#e91e63",
              "#9c27b0",
              "#673ab7",
              "#3f51b5",
              "#2196f3",
              "#03a9f4",
              "#00bcd4",
              "#009688",
              "#4caf50",
              "#8bc34a",
              "#cddc39",
              "#ffeb3b",
              "#ffc107",
              "#ff9800",
              "#ff5722",
              "#607d8b",
              "#efefef",
            ]}
            onChangeComplete={(c) => setColor(c.hex)}
          />

          <hr />

          <Button type="submit" variant="success">
            Spieler hinzufügen
          </Button>
        </Form>
      </Card.Body>

      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Alert variant="danger" {...props}>
            Name ist Leer
          </Alert>
        )}
      </Overlay>
    </Card>
  );
};

export default Add;
