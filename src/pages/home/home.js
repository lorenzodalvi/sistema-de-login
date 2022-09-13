import React from "react";
import * as C from "./styles";

class Alunos extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            alunos : [
            ]
        }
    }

    componentDidMount() {
        fetch("https://mocki.io/v1/73f5f70d-1642-4d13-956d-e60cedf92443")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ alunos : dados})
            })
    }








    render(){
        return (
            <C.Container>
            <C.Table>
                <thead>
                    <C.Tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Opções</th>
                    </C.Tr>
                </thead>
              <tbody>
                {
                    this.state.alunos.map((aluno) =>
                    <C.Tr>
                        <td>{aluno.nome}</td>
                        <td>{aluno.email}</td>
                        <td>Atualizar Excluir</td>
                    </C.Tr>
                    )
                }
                
                
              </tbody>
            </C.Table>
            </C.Container>
        )
    }
    
}

export default Alunos;