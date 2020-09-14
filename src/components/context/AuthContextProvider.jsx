import React, { createContext } from "react";

export const AuthContext = createContext()

export class AuthContextProvider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isAuth: false
        }
    }

    // toggleAuth = () => {
    //     this.setState({
    //         isAuth: !this.state.isAuth
    //     })
    // }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}