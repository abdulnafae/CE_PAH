import React, {Component} from 'react'
export default class day6_3 extends Component{
    render(){
        const{title1, ...restValue}=this.props;
        return(
            <div>
            <h1>Title is {title1}</h1>
            <input {...restValue}></input>
            </div>
        )
    }
    }