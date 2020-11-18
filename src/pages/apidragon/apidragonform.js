import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../apidragon/apidragon.css'
import routesConfig from '../../routesConfig';

class ApiDragonForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            action: '',
            name: '',
            type: '',
            id: '',
        };
        this.changeInput = this.changeInput.bind(this);
    }

    componentDidMount() {
        const { match } = this.props
        const id = match.params.id;

        if (id) {
            this.setState({ title: 'Editar Dragão', botao11:  <form onSubmit={this.onEdit}>  
                     
            <div className="container cards">
            <div className="row">
                <div className="col mt-5">
                    <label>Name:</label>
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <input className="botao3" type="text" name="name" value={this.state.textValue} onChange={() => this.changeInput} />
                </div>
            </div>
            <br></br>

            <div className="row">
                <div className="col">
                    <label>Type:</label>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <input className="botao3" type="text" name="type" value={this.state.textValue} onChange={() => this.changeInput} />
                </div>
            </div>


            
            <br></br>
            <br></br>

            <input name="id" type="hidden" value={id}/>

            <button className="botao3 mb-5" to="/apidragon" type="submit">editar</button>
      
        </div>

    </form>  });

            fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + id)
                .then(response => response.json())
                .then(data => this.setState({ name: data.name, type: data.type, id: data.id }));

        } else {
            this.setState({title: 'criar',  botao00: <form  onSubmit={this.onCreate}>  
                     
            <div className="container cards">
            <div className="row">
                <div className="col mt-5">
                    <label>Name:</label>
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <input className="botao3" type="text" name="name" value={this.state.textValue} onChange={() => this.changeInput} />
                </div>
            </div>
            <br></br>

            <div className="row">
                <div className="col">
                    <label>Type:</label>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <input className="botao3" type="text" name="type" value={this.state.textValue} onChange={() => this.changeInput} />
                </div>
            </div>


            
            <br></br>
            <br></br>

            <button className="botao3 mb-5" type="submit">criar</button>

        </div>

    </form>
});
        }

    }
    

    changeInput(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }


onCreate(event) {
    event.preventDefault();
    let form = event.target;
   
     {const dragon = {
        name: form.elements.name.value,
        type: form.elements.type.value,
    };
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dragon)
    }
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/', request)
        .then(response => response.json())
}
}



    onEdit(id) {
        id.preventDefault();
        let form = id.target;
        console.log("hii")

        const dragon = {
            name: form.elements.name.value,
            type: form.elements.type.value,
            id: form.elements.id.value,
        };
        const request = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dragon)
        }
        fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' +  dragon.id, request)
            .then(response => response.json())
            .then( () => { window.history.back() } )
    }



    changeText(event){
        this.setState(
            {textValue : event.target.value}
        );
    }

    render() {
        const {title, botao00, botao11} = this.state;
       
        return <>
            <p className="botao3 mb-4" >{title}</p>
            {botao00} {botao11}
            
            {/* <form  onSubmit={this.onCreate}>  
                     
                    <div className="container cards">
                    <div className="row">
                        <div className="col mt-5">
                            <label>Name:</label>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col">
                            <input className="botao3" type="text" name="name" value={this.state.textValue} onChange={() => this.changeInput} />
                        </div>
                    </div>
                    <br></br>

                    <div className="row">
                        <div className="col">
                            <label>Type:</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <input className="botao3" type="text" name="type" value={this.state.textValue} onChange={() => this.changeInput} />
                        </div>
                    </div>


                    <input name="id" type="hidden" value={this.state.Id} />
                    <br></br>
                    <br></br>

                    <button className="botao3 mb-5" type="submit">{action}</button>

                </div>

            </form>

            <form onSubmit={this.onEdit}>  
                     
                     <div className="container cards">
                     <div className="row">
                         <div className="col mt-5">
                             <label>Name:</label>
                         </div>
                     </div>
 
 
                     <div className="row">
                         <div className="col">
                             <input className="botao3" type="text" name="name" value={this.state.textValue} onChange={() => this.changeInput} />
                         </div>
                     </div>
                     <br></br>
 
                     <div className="row">
                         <div className="col">
                             <label>Type:</label>
                         </div>
                     </div>
 
                     <div className="row">
                         <div className="col">
                             <input className="botao3" type="text" name="type" value={this.state.textValue} onChange={() => this.changeInput} />
                         </div>
                     </div>
 
 
                     <input name="id" type="hidden" value={this.state.Id} />
                     <br></br>
                     <br></br>
 
                     <button className="botao3 mb-5" type="submit">{action}</button>
 
                 </div>
 
             </form> */}
        </>;
    }
}

export default withRouter(ApiDragonForm);