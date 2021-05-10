

import React, { Component } from 'react';
import ConsignmentService from '../services/ConsignmentService';
import PropTypes from "prop-types"; 
import { withRouter } from "react-router-dom";
class CreateConsignmentComponent extends Component<any, any> { 

    constructor(props: any) {
        super(props)

        this.state = { 
            id: this.props.match.params.id,
            name: '',
            service_type: 'express',
            vehicle_type: 'car'
        }
        this.changeNameHandler = this.changeNameHandler.bind(this); 
    }
 
    componentDidMount(){ 
        if(this.state && this.state.id === '_add'){
            return
        }else{
          ConsignmentService.getConsignmentById(this.state.id).then( (res:any) =>{
                
                res.json().then( (data:any) => { 
                    this.setState({ 
                        name: data.name,
                        vehicle_type: data.vehicle_type,
                        service_type: data.service_type
                    });
                }); 
            });
        }        
    }
    saveOrUpdateConsignment = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let consignment = {name: this.state.name, service_type: this.state.service_type, vehicle_type: this.state.vehicle_type };
        console.log('consignment => ' + JSON.stringify(consignment));

        if(this.state.id === '_add'){
          ConsignmentService.createConsignment(JSON.stringify(consignment)).then( (res:any) =>{
                this.props.history.push('/consignments');
            });
        }else{
          ConsignmentService.updateConsignment(JSON.stringify(consignment), this.state.id).then( (res:any) => {
                this.props.history.push('/consignments');
            });
        }
    }
    
    changeNameHandler= (event:any) => {
        this.setState({name: event.target.value});
    }
    
    changeServiceTypeHandler= (event:any) => {
        this.setState({service_type: event.target.value});
    }
    
    changeVehicleTypeHandler= (event:any) => {
        this.setState({vehicle_type: event.target.value});
    }

    cancel(){
        this.props.history.push('/consignments');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Consignment</h3>
        }else{
            return <h3 className="text-center">Update Consignment</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Consignment Name" name="Consignment Name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Service Type: </label>
                                            <select 
                                                value={this.state.serviceType} 
                                                onChange={this.changeServiceTypeHandler} 
                                            >
                                                <option value="regular">Regular</option>
                                                <option value="express">Express</option> 
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Vehicle Type: </label>
                                            <select 
                                            value={this.state.vehicleType} 
                                            onChange={this.changeVehicleTypeHandler} 
                                            >
                                                <option value="car">Car</option>
                                                <option value="bike">Bike</option> 
                                            </select>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateConsignment}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default withRouter(CreateConsignmentComponent);