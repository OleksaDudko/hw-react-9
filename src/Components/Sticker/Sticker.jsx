import { Component } from "react";
import { Item } from "./Sticker.styled";

class Sticker extends Component{
    render(){
        const {img, label} = this.props.items
        return(
            <>
                <Item>
                    <img src={img} alt={label} onClick={() => this.props.onName(label)}/>
                </Item>
            </>
        )
    }
}

export default Sticker