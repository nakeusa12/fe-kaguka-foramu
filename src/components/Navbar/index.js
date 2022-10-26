import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavLink from '../NavLink';

function ComponentNavbar() {
  const navigate = useNavigate();

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/dashboard'>Dashboard</Navbar.Brand>
        <Nav className='me-auto'>
          <NavLink action={() => navigate('/categories')}>Categories</NavLink>
          <NavLink action={() => navigate('/speakers')}>Speakers</NavLink>
          <NavLink action={() => navigate('/events')}>Events</NavLink>
          <NavLink action={() => navigate('/participant')}>Participant</NavLink>
          <NavLink action={() => navigate('/transactions')}>
            Transactions
          </NavLink>
        </Nav>
        <Nav>
            <NavLink action={() => navigate('/login')}>Login</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ComponentNavbar;