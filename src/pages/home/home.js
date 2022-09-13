import React from "react";
import * as C from "./styles";

class Alunos extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            alunos : []
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
                <C.Tr>
                    <td>Luiz</td>
                    <td>luiz@dgd.com</td>
                    <td>Atualizar  Excluir</td>
                </C.Tr>
                
              </tbody>
            </C.Table>
            </C.Container>
        )
    }
    
}

export default Alunos;