

import React, { Component } from 'react';
import ConsignmentService from '../services/ConsignmentService';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import { isTemplateSpan } from 'typescript';

class ListConsignmentComponent extends Component<any, any> {
    constructor(props:any) {
        super(props)

        this.state = {
          consignments: [],
          totalItems: 0,
          totalPages: 1,
          page: 1
        }
        console.log("1");
        this.addConsignment = this.addConsignment.bind(this);
        this.editConsignment = this.editConsignment.bind(this);
        this.deleteConsignment = this.deleteConsignment.bind(this);
        this.viewConsignment = this.viewConsignment.bind(this);
        this.listConsignmentUpdated = this.listConsignmentUpdated.bind(this);
    }

    deleteConsignment(id:any){
        ConsignmentService.deleteConsignment(id).then( (res:any) => {
            this.setState({consignments: this.state.consignments.filter( (consignment:any) => consignment.id !== id )});
        });
    }
    viewConsignment(id:any){
        this.props.history.push(`/view-consignment/${id}`);
    }
    editConsignment(id:any){
        this.props.history.push(`/add-consignment/${id}`);
    }

    componentDidMount(){ 
        ConsignmentService.getConsignments(1, 5).then((res:any) => { 
            res.json().then( (data:any) => { 
                this.setState({ consignments: data.items, totalPages: data.total_pages, totalItems: data.no_of_items, page: data.page });
            });
        });
    }

    addConsignment(){
        this.props.history.push('/add-consignment/_add');
    } 

    listConsignmentUpdated(page:any, per_page:any){ 
        ConsignmentService.getConsignments(page, per_page).then((res:any) => { 
            res.json().then( (data:any) => { 
                this.setState({ consignments: data.items, totalPages: data.total_pages, totalItems: data.no_of_items, page: data.page });
            });
        });
    }

    render() { 
        const {totalPages, page} = this.state;
        let pageItems = []

        for(let i=0; i < (totalPages); i++){
            pageItems.push(
                <Pagination.Item key={i + 1} active={(i + 1) == page} onClick={ () => this.listConsignmentUpdated((i + 1), 5)}>
                {i + 1}
                </Pagination.Item>
            );
        }
        return (
            <div>
                 <h2 className="text-center">Consignment List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addConsignment}> Add Consignment</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Consignment Name</th> 
                                    <th> Consignment Service Type</th> 
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {
                                    this.state.consignments.map((consignment:any) => 
                                        <tr key = {consignment.id}>
                                            <td> {consignment.name} </td>   
                                            <td> {consignment.service_type}</td> 
                                            <td>
                                                <button onClick={ () => this.editConsignment(consignment.id)} className="btn btn-info">Edit </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteConsignment(consignment.id)} className="btn btn-danger">Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewConsignment(consignment.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <Pagination size="sm">
                            {
                                pageItems
                            }
                        </Pagination>

                 </div>

            </div>
        )
    }
}

export default ListConsignmentComponent;