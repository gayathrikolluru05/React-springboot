import React from 'react';
import UserService from "../services/UserService";
import axios from "axios";

class UserComponent extends React.Component{
    constructor() {
        super();
        this.state={
              tvshows:[]
        }

    }

    async getTodos(){
        let data = await axios.get("http://localhost:8080/api/allTvshows")
            .then(function(response){
                return response;
            }).catch(function(error){
                console.log(error);
            });
            this.setState({tvshows:data.data})
    }

    componentDidMount() {

        this.getTodos();
        //UserService.getAllshows()
            //.then((response)=>{
            //his.setState({show:response.data})
        //});

    }

    render() {
        return(
            <div>
                <h1 className=" text-center"> TV shows list</h1>
                <table className="table table-stripped">
                    <thead>
                      <tr>
                        <td>Name</td>
                        <td>Director</td>
                        <td>Available On</td>
                        <td>Watched</td>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tvshows.map(
                                tvshow =>
                                    <tr key={tvshow.name}>
                                        <td>{tvshow.director}</td>
                                        <td>{tvshow.available_on}</td>
                                        <td>{tvshow.watched}</td>
                                    </tr>


                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }


}

export default UserComponent