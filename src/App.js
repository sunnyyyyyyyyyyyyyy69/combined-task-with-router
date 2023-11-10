import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Responsive from "./components/Task-1/Responsive";
import Calculator from "./components/Task-2/Calculator";
import ColorPicker from "./components/Task-3/ColorPicker";
import UserTable from "./components/Task-4/UserTable";
import AgeCalculator from "./components/Task-5/AgeCalculator";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import App1 from "./components/Task-6/App1";
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Nav.Link href="/task1">Task 1</Nav.Link>
            <Nav.Link href="/task2">Task 2</Nav.Link>
            <Nav.Link href="/task3">Task 3</Nav.Link>
            <Nav.Link href="/task4">Task 4</Nav.Link>
            <Nav.Link href="/task5">Task 5</Nav.Link>
            <Nav.Link href="/task6">Task 6</Nav.Link>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/task1" element={<Responsive />}></Route>
          <Route path="/task2" element={<Calculator />} />
          <Route path="/task3" element={<ColorPicker />} />
          <Route path="/task4" element={<UserTable />} />
          <Route path="/task5" element={<AgeCalculator />} />
          <Route path="/task6" element={<App1 />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
