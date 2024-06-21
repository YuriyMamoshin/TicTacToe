import { useState } from "react";
import Side from "components/Side/SIde";
import Header from "components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Side player="1" />
      <Side player="2" />
    </>
  );
}

export default App;
