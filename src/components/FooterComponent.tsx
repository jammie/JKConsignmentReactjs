import React, { Component } from 'react'

class FooterComponent extends Component<any, any> {
    constructor(props:any) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">2021 @James Kachiro Sarumaha</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent

