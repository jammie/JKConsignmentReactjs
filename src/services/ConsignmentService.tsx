

import fetch from 'node-fetch';

const CONSIGNMENT_API_BASE_URL = "http://localhost:5000/consignments/";

class ConsignmentService {

    getConsignments(page:any, per_page:any ){
        return fetch(CONSIGNMENT_API_BASE_URL+"?page="+page+"&per_page="+per_page,{
            headers: {
                'Accept': '*/*',
            }
        })
    }

    createConsignment(consignment:any){
        return fetch(CONSIGNMENT_API_BASE_URL, {
            method: 'POST', 
            body: JSON.stringify(consignment),
            headers: {
                'Accept': '*/*',
            }
        });
    }

    getConsignmentById(consignmentId:any){
        return fetch(CONSIGNMENT_API_BASE_URL  + consignmentId, {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
    }

    updateConsignment(consignment:any, consignmentId:any){
        return fetch(CONSIGNMENT_API_BASE_URL  + consignmentId, {
            method: 'PUT', 
            body: JSON.stringify(consignment), 
            headers: {
                'Accept': '*/*',
            }
        });
    }

    deleteConsignment(consignmentId:any){
        return fetch(CONSIGNMENT_API_BASE_URL  + consignmentId, {
            method: 'DELETE',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
    }
}

export default new ConsignmentService()

