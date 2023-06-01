import { useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Nav, Form, FormControl, Button,Container } from "react-bootstrap";
import Link from "next/link";

export default function MainNav(){
    const router = useRouter();
    const [searchField, setSearchField] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(searchField){
    router.push(`/artwork?title=true&q=${searchField}`);
    }
  };
    return(
        <>
        <Navbar className="fixed-top navbar-dark bg-dark" expand="lg">
      <Container>
        <Navbar.Brand >Sajanpreet Singh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link href="/" passHref legacyBehavior><Nav.Link >Home</Nav.Link></Link>
            <Link href="/search" passHref legacyBehavior><Nav.Link >Advanced Search</Nav.Link></Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              value={searchField}
              onChange={(event)=>setSearchField(event.target.value)}
            />
            <Button type="submit" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />
    <br />
        </>
    );
}