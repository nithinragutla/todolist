import { Component } from "react";
import "./todo.css"

class Todolist extends Component{
    constructor(){
        super();
        this.state={
            data:"",
            list:[]
        }
    }
    data=(event)=>{
        this.setState({
            data:event.target.value
        })

    }
    sub=(event)=>{
        event.preventDefault()
this.setState({
    list:[...this.state.list,this.state.data]
})
    }
delete=(ind)=>{
    var updated=this.state.list.filter((val,i)=>{

        return i!==ind
    })
    this.setState({
        list:updated
    })
}
edit=(values,ind)=>{
    var p=prompt("change"+values)
    this.state.list.splice(ind,1,p)

    this.setState({
        list:this.state.list
    })
}
    render(){
        var a=this.state.list.map((val,ind)=>{
            return(
            <tr key={ind}>
                <td>{val} <input type="submit" value="edit" onClick={()=>this.edit(val,ind)}/>
                <input type="button"  value="delete" onClick={()=>this.delete(ind)} /></td>
                </tr>
            )
        })
        return(
            <>
          {/* {console.log(this.state)} */}
            <h1>to do list</h1>
            <form action="" onSubmit={this.sub}>
                <input type="text" name="data" onChange={this.data} />
                <input type="submit"  name="sub" />
            </form>
            
                <table>
                {a}
            </table>
           
            </>
           
        
        )
    }
}
export default Todolist;