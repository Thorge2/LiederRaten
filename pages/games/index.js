import { Badge, Card, ListGroup } from "react-bootstrap";
import { useGames } from "../../hooks/games";
import Game from "../../components/game";
import { useDeleteGame } from "../../hooks/games";

const Games = () => {
  const { loading, error, data } = useGames();

  const [deleteGame, { res }] = useDeleteGame();

  const highscore = () => {
    let high = { score: 0, name: "Niemand", color: "#999999" };
    data.games.map((game) => {
      game.players.map((player) => {
        if (high.score < player.score) high = player;
      });
    });
    return (
      <>
        {high.name}
        {"  "}
        <Badge style={{ backgroundColor: high.color }}>{high.score}</Badge>
      </>
    );
  };

  return (
    <Card style={{ maxHeight: "80vh" }}>
      <Card.Header>
        <Card.Title>
          <h1>Spiele</h1>
        </Card.Title>
      </Card.Header>

      <Card.Body style={{ overflow: "auto" }}>
        <Card.Text>
          <h3>Highscore:</h3>
          <h4>{loading ? "loading..." : highscore()}</h4>
        </Card.Text>

        <hr />

        <ListGroup variant="flush">
          {loading ? (
            "loading..."
          ) : data.games.length == 0 ? (
            <div>
              <h2>Keine Spiele gespeichert...</h2>
            </div>
          ) : (
            data.games
              .slice()
              .reverse()
              .map((g, i) => (
                <Game
                  game={g}
                  remove={(id) => deleteGame({ variables: { id } })}
                  key={i}
                ></Game>
              ))
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Games;
