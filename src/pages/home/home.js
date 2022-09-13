import React from "react";
import * as C from "./styles";

class Alunos extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            alunos : []
        }
    }

    componentDidMount() {
        this.buscarAluno();
    }

    componentWillUnmount() {

    }

    buscarAluno = () => {
        fetch("http://localhost:3000/alunos")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({ alunos : dados})
          })
        };

    deletarAluno = (id) => {
        fetch("http://localhost:3000/alunos/"+ id, { method: "DELETE"})
        .then(resposta => {
            if(resposta.ok) {
                this.buscarAluno();
            }
        })
    };
            
      




    renderTabela(){
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
                        <td>Atualizar <button onClick={() => this.deletarAluno(aluno.id)}>Excluir</button> </td>
                    </C.Tr>
                    )
                }
                
                
              </tbody>
            </C.Table>
            </C.Container>
        )
    }
    render() {
        return (
            <div>
            {this.renderTabela()}
            </div>
        )
    }
}

export default Alunos;