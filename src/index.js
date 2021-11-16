import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./componentes/Primeiro";

import BomDia from "./componentes/BomDia";

const h1 = <h1>React 32</h1>

//ReactDOM.render(<Primeiro/>, document.getElementById('root'))
ReactDOM.render(<BomDia nome="Humberto Marcone"/>, document.getElementById('root'))

// $('<h1>').html('React 2')