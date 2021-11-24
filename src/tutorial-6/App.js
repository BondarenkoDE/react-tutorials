import React from "react";
import { Nav, Navbar, Row, Col, Card } from "react-bootstrap";

const data = [
  { id: 1, title: "Заголовок 1", text: "111" },
  { id: 2, title: "Заголовок 2", text: "222" },
  { id: 3, title: "Заголовок 3", text: "333" },
  { id: 4, title: "Заголовок 4", text: "444" },
];

export default function App() {
  const { pathname } = window.location;

  const checkPathname = () => {
    return pathname.match("/post/");
  };

  const getIdCard = () => {
    return pathname.split("/")[2];
  };

  return (
    <div className="App">
      <header>
        <h2>
          <a href="/">React Blog</a>
        </h2>
        <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="/home" to="/">
              Главная
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/home" to="/about">
              Обо мне
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/home" to="/profile">
              Профиль
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      {pathname === "/" && (
        <Row xs={1} md={2} className="g-4">
          {data.map((card, index) => (
            <Col key={card.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150x150"
                />
                <Card.Body>
                  <Card.Title>
                    <a href={`/post/${card.id}`}>{card.title}</a>
                  </Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {/* ТУТ ДОПИСАТЬ РОУТ НА ПОЛНУЮ ЗАПИСЬ */}
      {checkPathname() && (
        <div>
          <h1>Статья №{getIdCard()}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            distinctio fuga animi aliquam sit id veritatis, doloribus ducimus
            quas, dignissimos non minima quia amet possimus? Impedit nemo
            ducimus fuga rem!
          </p>
          <a href="/">
            <button>Назад</button>
          </a>
        </div>
      )}
      {pathname === "/about" && (
        <Card>
          <Card.Body>Это мой личный сайт!</Card.Body>
        </Card>
      )}
      <br />
      <Navbar bg="light" style={{ paddingLeft: 20 }}>
        <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
      </Navbar>
    </div>
  );
}
