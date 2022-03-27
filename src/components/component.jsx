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
        return <h1>Title</h1>;
    }
}

// Objetos
export const MeusComponent = {
    Title: function () {
        return <h1>Ola Mundo!</h1>
    }
}


export default MeuComponent;
