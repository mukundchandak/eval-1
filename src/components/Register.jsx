import React, { Component } from 'react'
import { AuthContext } from "./context/AuthContextProvider"
import axios from "axios"


export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            userId: '',
            title: '',
            body: ''
        }
        
    }
    handleSubmit = () => {
       
        const { userId, title, body } = this.state
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            userId, title, body
        }).then(res => console.log(res))
        console.log(this.state.data)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
        <AuthContext.Consumer>
            {
                (value) => {
                    const { isAuth } = value
                    return (
                        <div>
                            <h3>Register</h3>
                            <div>
                                TITLE: <input value={this.state.title} onChange={this.handleChange} name="title" />
                                ID: <input value={this.state.userId} onChange={this.handleChange} name="userId" />
                                BODY: <input value={this.state.body} onChange={this.handleChange} name="body" />
                            </div>
                            <div>
                                <button onClick={this.handleSubmit}>SUBMIT</button>
                            </div>
                        </div>
                    )
                }
            }
        </AuthContext.Consumer>
        )
    }
}
