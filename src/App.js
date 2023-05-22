import React from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { TemaClaro, TemaOscuro } from "./Components/UI/Tema";
import SwichtTheme from "./Components/SwichtTheme";
import { BtnTema } from "./Components/UI";
import { useState } from "react";


function App() {
const [tema, cambiarTema] = useState(true);

const cambioDeTema = ()=>{
  cambiarTema((tema) => !tema)
}

  return (
    <ThemeProvider theme={tema ? TemaClaro : TemaOscuro}>
      <GlobalStyle/>
      <BtnTema onClick={cambioDeTema}>
        <SwichtTheme tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
