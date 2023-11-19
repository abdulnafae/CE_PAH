import React, {Component} from'react'
export default class PropsClassComp extends Component{
//constructor(){
    //super();
    //this.state={name:"Skcet",
//place:"CBT"
//}//
//}
state={name:""}
    //count: 0,
};
handleElement=()=>{
    this.setState({count: this.state.cout + 1});
}
//changeCollege(){
   // this.setState({name:"Atria"})
//}
    //state={name:"SKCET",
    //place:"CBT"
//}
//changeCollege=()=>{this.setStste({name:"Aria"})}
    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
            <button onMouseOver={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}