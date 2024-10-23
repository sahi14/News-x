import React from "react";
import { NewsContextProvider } from "./NewsContext"; // Correct import
import News from "./Components/News"; // Assuming you have a News component

function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default App;
