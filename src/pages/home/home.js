import React from "react";
import * as C from "./styles";


class Alunos extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id:0, 
            nome: '',
            email: '',
            alunos: []
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
        fetch("http://localhost:3000/alunos/"+ id, {
        method: "DELETE"})
        .then(resposta => {
            if(resposta.ok) {
                this.buscarAluno();
            }
        })
    };

    carregarDados = (id) => {
        fetch("http://localhost:3000/alunos/"+ id, {
        method: "GET"})
        .then(resposta => resposta.json())
        .then(aluno => {
            this.setState({ 
                id : aluno.id,
                nome: aluno.nome,
                email: aluno.email
            })
          })
        };
    
    cadastrarAluno = (aluno) => {
        fetch("http://localhost:3000/alunos", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(aluno)
        })
        .then((resposta) => {
            if(resposta.ok) {
                this.buscarAluno();
            } else{
                alert('Não foi possível adicionar o aluno')
            }
            
        })  
    }

    atualizarAluno = (aluno) => {
        fetch("http://localhost:3000/alunos", {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(aluno)
        })
        .then((resposta) => {
            if(resposta.ok) {
                this.buscarAluno();
            } else{
                alert('Não foi possível atualizar o aluno')
            }
            
        })  
    }




    renderTabela(){
        return (
            <C.Body>
            <C.Container>
                
            <h1>ALUNOS</h1>
            <C.Table>
            
                <C.Thead>
                    
                    <C.Tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Opções</th>
                    </C.Tr>
                </C.Thead>
              <tbody>
                {
                    this.state.alunos.map((aluno) =>
                    <C.Tr>
                        <C.Td>{aluno.nome}</C.Td>
                        <C.Td>{aluno.email}</C.Td>
                        <C.Td><C.Button2  onClick={() => this.carregarDados(aluno.id)}>Atualizar </C.Button2> 
                            <C.Button onClick={() => this.deletarAluno(aluno.id)}>Excluir</C.Button> </C.Td>
                    </C.Tr>
                    )
                }
                
                
              </tbody>
            </C.Table>
            
            </C.Container>
            </C.Body>
        )
    }


    atualizaNome = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }

    atualizaEmail = (e) => {
        this.setState(
            {
                email: e.target.value
            }
        )
    }

    submit = () => {

        if(this.state.id == 0) {
            const aluno = {
                email: this.state.email,
                nome: this.state.nome
            }
            this.cadastrarAluno(aluno);
        } else{
            const aluno = {
                id: this.state.id,
                email: this.state.email,
                nome: this.state.nome
            }
            this.atualizarAluno(aluno);
        }

        
    }

    render() {
        return (
          
            <div>
              <C.Form>
                <legend>Cadastrar novo Aluno</legend>
                
                <C.Input  value={this.state.id} readOnly = {true}></C.Input><br></br>
                
                <C.Input placeholder="Nome" value={this.state.nome} onChange={this.atualizaNome}></C.Input><br></br>
                
                <C.Input placeholder="Email" value={this.state.email} onChange={this.atualizaEmail}></C.Input> <br></br>
                <C.Button2 onClick={this.submit}>Cadastrar</C.Button2>
                </C.Form>   
            {this.renderTabela()}
            </div>
        )
    }
}

export default Alunos;