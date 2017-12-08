import React, { Component } from "react";
import axios from "axios";
//import "./styles.css";


export default class ApiCaller extends Component {

    constructor(props) {
        super(props);

        this.state = {
            class:"",
            races:""
        };
        this.getApiData = this.getApiData.bind(this);
    }

    getApiData(){
        axios
            .post("/api/getApiData", { class: this.state.location })
            .then(result => {
                return this.setState({ race: result.data.daily.summary });
            })
            .catch(error => {
                console.log(error);
            });
    }


    render(){
        return(
            <div>
                <div> 
                    <h1>

                    </h1>
                </div>
            

                <input
                    onChange={event => {
                         this.setState({ class: event.target.value });
                 }}
                 />
                 <button onClick={this.getApiData}> Get Api Data </button>

                <h3> {this.state.race} </h3>
            </div>        
        );
    }
}