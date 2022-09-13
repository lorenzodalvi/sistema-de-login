import React from "react";
import * as C from "./styles";

class Alunos extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            alunos : [
                {'id':1, 'nome': 'Luiz Dalvi', 'email':'luiz@teste.com'},
                {'id':2, 'nome': 'Lorena Dalvi', 'email':'lorena@teste.com'},
                {'id':3, 'nome': 'Paulo Dalvi', 'email':'paulo@teste.com'}
            ]
        }
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