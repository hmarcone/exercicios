import React, { Fragment } from "react";

export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]

// 1 - Primeira possibilidade

// export default props =>
//     <Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h1>Até breve!</h1>
//     </Fragment>

// 2 - Primeira possibilidade
// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h1>Até breve!</h1>
//     </div>
