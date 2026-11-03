import { Component } from "react";
import Sticker from "../Sticker/Sticker";
import { List } from "./StickerList.styled";

class StickerList extends Component{
    render(){
        const {data, onName} = this.props
        return(
            <>
                <List>
                    {data.map((item) => {
                        return (
                            <Sticker key={item.label} items={item} onName={onName}/>
                        )
                    })}
                </List>
            </>
        )
    }
}

export default StickerList