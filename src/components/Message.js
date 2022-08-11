import React,{Component} from "react";

class Message extends Component{
    constructor()
    {
        super()
        this.state={
            message:"Pease subscribe",
            reply:"Test me"
        }
    }
    changemessage(){
        this.setState({
            message:'Thank you',
            reply:"Tested Ok"
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h2> {this.state.reply} </h2>
                <button onClick={()=>this.changemessage()}>Subscribe</button>                
            </div>
        )
        
    }
}

export default Message;