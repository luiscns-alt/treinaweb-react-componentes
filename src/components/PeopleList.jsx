import React, { Component } from 'react';

const myList = [
    {id: '12', nome: "João", idade: 23 },
    {id: '34', nome: "Maria", idade: 25 },
    {id: '56', nome: "Paulo", idade: 32 },
    {id: '78', nome: "Bruna", idade: 20 }
]

class PeopleList extends Component {
    render() {
        return (
                <ul>
                    {myList.map(person => <li key={person.id}>{person.nome} - {person.idade} anos</li>)}
                </ul>
        );
    }
}

export default PeopleList;
