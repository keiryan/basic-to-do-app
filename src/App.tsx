import React, { useState, useEffect } from "react";
import "./App.css";
import { Container } from "./styles.app";
import List from "./components/List/list";

export default function App() {
  return (
    <Container>
      <List />
    </Container>
  );
}
