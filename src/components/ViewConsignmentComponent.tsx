

import React, { Component } from 'react'
import ConsignmentService from '../services/ConsignmentService'

class ViewConsignmentComponent extends Component<any, any> {
    constructor(props:any) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            consignment: {}
        }
    }

    componentDidMount(){
      ConsignmentService.getConsignmentById(this.state.id).then( (res:any) => {
            res.json().then( (data:any) => {
                console.log(data);
                this.setState({consignment: data});
            });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Consignment Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Consignment Name: </label>
                            <div> { this.state.consignment.name }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewConsignmentComponent;