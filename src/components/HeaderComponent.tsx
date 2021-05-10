

import React, { Component } from 'react'

class HeaderComponent extends Component<any, any> {
    constructor(props:any) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000" className="navbar-brand">Consignment Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent

