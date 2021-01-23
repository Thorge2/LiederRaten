import Head from "next/head";
import Link from "next/link";
import { FiSave } from "react-icons/fi";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  ListGroup,
} from "react-bootstrap";
import { PlayerProvider } from "../hooks/players";
import { GamesProvider } from "../hooks/games";

const App = ({ Component, pageProps }) => {
  return (
    <div
      style={{
        height: "100vh",
        background:
          "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
        overflow: "hidden",
      }}
    >
      <Head>
        <title>LiederRaten</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/lumen/bootstrap.min.css"
        />
      </Head>

      <Navbar
        variant="light"
        bg="light"
        expand="lg"
        style={{ marginBottom: "3rem" }}
      >
        <Link href="/">
          <Navbar.Brand>LiederRaten</Navbar.Brand>
        </Link>

        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>

          <Link href="/players" passHref>
            <Nav.Link>Spieler</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <Link href="/games" passHref>
            <Nav.Link>Spiele</Nav.Link>
          </Link>

          <Link href="/games/save">
            <Button variant="success" style={{ borderRadius: "2rem" }}>
              Spiel speichern
            </Button>
          </Link>
        </Nav>
      </Navbar>

      <Container>
        <PlayerProvider>
          <GamesProvider>
            <Component {...pageProps} />
          </GamesProvider>
        </PlayerProvider>
      </Container>
    </div>
  );
};

export default App;
