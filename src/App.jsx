import './App.css'
import { Component } from 'react'
import { GlobalStyle } from './GlobalStyle'
import stickers from "./stickers.json"
import Choice from './Components/Choice/Choice'
import StickerList from './Components/StickerList/StickerList'

class App extends Component{
  state = {
    pokemonName: ""
  }

  handleClick = (text) => {
    this.setState({
      pokemonName: text
    })
  }


  render(){
    return(
      <>
        <GlobalStyle/>
        <StickerList data = {stickers} onName={this.handleClick}/>
        <Choice name = {this.state.pokemonName}/>
      </>
    )
  }
}


export default App
