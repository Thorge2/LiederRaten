import { useRouter } from "next/router";
import { Card, ListGroup, Badge } from "react-bootstrap";
import { useGame } from "../../hooks/games";

const Game = () => {
  const router = useRouter();

  const { loading, error, data } = useGame(router.query.id);

  return (
    <Card>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Card.Header>
            <Card.Title>
              <h1>
                {data.game.name}
                {"  "}
                <Badge variant="primary">{data.game.id}</Badge>
              </h1>
              <p>
                Datum: {new Date(parseInt(data.game.date)).toLocaleDateString()}
                {" | "}
                {new Date(parseInt(data.game.date)).toLocaleTimeString()}
              </p>
            </Card.Title>
          </Card.Header>

          <Card.Body>
            <ListGroup variant="flush">
              {data.game.players.map((player, i) => (
                <ListGroup.Item key={i}>
                  <h2>
                    {player.name}
                    {"  "}
                    <Badge style={{ backgroundColor: player.color }}>
                      {player.score}
                    </Badge>
                  </h2>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

export default Game;
