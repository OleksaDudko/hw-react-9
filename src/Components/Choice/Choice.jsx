import { Component } from "react";
import { Text } from "./Choice.styled";

class Choice extends Component{
    render(){
        return(
            <>
                <Text>{this.props.name || "Немає даних"}</Text>
            </>
        )
    }
}

export default Choice