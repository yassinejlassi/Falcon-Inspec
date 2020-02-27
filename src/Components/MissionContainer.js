import React, { Component } from 'react'
import axios from 'axios';
import MissionCard from './MissionCard';
import {Link} from 'react-router-dom'




export default class MissionContainer extends Component {
    state = { 
        Miss:[], // initial variable to put extracting data from database named FalconData from collection named experts
    }

    // componentDidMount finction that get data from database
componentDidMount () {
    axios
    .get("/missionsList")
    .then(res => this.setState({
        Miss : res.data    // get data from database named FalconData and put all data in variable called profile
    }))
    .catch(err =>console.log("err", err))
  }
    render() {
        return (
            <div>
                <div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <Link to='/search/missionsList'><button className="homeButton">Chercher mission</button></Link>
               </div>
                </div>
            {this.state.Miss.map((el, i) =>{
                    // pass data as a props to expertCard container
                    return  <MissionCard key={i} data={el}  key={el._id}/>
                })
            } 
            </div>
        )
    }
}
