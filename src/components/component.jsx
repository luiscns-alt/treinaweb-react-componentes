import React from 'react';

// function MeuComponent() {
//     return <h1>Meu Componente</h1>;
// }

// Com Arrow function
// const MeuComponent = () => {
//     return <div>Title</div>;
// }

// Com Classe
class MeuComponent extends React.Component {
    render() {
        const { props } = this;
        return <h1>{props.nome}</h1>;
    }
}

// Objetos
export const MeusComponent = {
    Title: function (props) {
        return <h1>{props.nome}</h1>
    }
}


export default MeuComponent;
