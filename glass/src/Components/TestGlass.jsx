import React, { Component } from 'react'

import "./style.css";
export default class TestGlass extends Component {

    state = {
        imageUrl: "./glassesImage/v1.png",
    }

    handleChangeGlass = (color) => {
        this.setState({
            imageUrl: `./glassesImage/${color}.png`
        });
    };
  render() {
    return (
      <div className='glasses'>
        <h3>TRY GLASSES APP ONLINE</h3>
        <img className='girl' src="./glassesImage/model.jpg" alt="" width={300} />
        
        <div >
        <img className='glassTest' src={this.state.imageUrl}/>
        </div>
        <div>
            <img src="./glassesImage/g1.jpg" alt="" width={100} onClick={() =>this.handleChangeGlass("v1")}/>
            <img src="./glassesImage/g2.jpg" alt="" width={100} onClick={() =>this.handleChangeGlass("v2")}/>
            <img src="./glassesImage/g3.jpg" alt="" width={100} onClick={() =>this.handleChangeGlass("v3")}/>
            <img src="./glassesImage/g4.jpg" alt="" width={100} onClick={() =>this.handleChangeGlass("v4")}/>
            <img src="./glassesImage/g5.jpg" alt="" width={100} onClick={() =>this.handleChangeGlass("v5")}/>
            <img src="./glassesImage/g6.jpg" alt="" width={100} onClick={() =>this.handleChangeGlass("v6")}/>
            <img src="./glassesImage/g7.jpg" alt="" width={100} onClick={() =>this.handleChangeGlass("v7")}/>
            <img src="./glassesImage/g8.jpg" alt="" width={100} onClick={() =>this.handleChangeGlass("v8")}/>
            <img src="./glassesImage/g9.jpg" alt="" width={100} onClick={() =>this.handleChangeGlass("v9")}/>

        </div>
        
      </div>
    )
  }
}
