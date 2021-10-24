import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppHeader from "./Components/AppHeader/AppHeader";
import ShoppingList from "./Pages/ShoppingList/ShoppingList";
import Box from "@mui/material/Box";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <header className="App-header">
        <AppHeader />
      </header>
      <main>
        <Box className="App-content">
          <ShoppingList />
        </Box>
      </main>
    </>
  );
}

export default App;
