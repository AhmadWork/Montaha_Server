import React,  { Component } from 'react';
import Maps2 from './Maps2';


class Map extends Component {
    updateDimensions() {
        const height = window.innerWidth >= 200 ? window.innerHeight : 50
        this.setState({ height: height })
      }
    
      componentWillMount() {
        this.updateDimensions()
      }
    
      componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this))
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this))
      }
    

    render(){

    
return(

    <div class="map-container" style={{ height: this.state.height }}>
<Maps2 />
  </div>
)
    }
}

export default Map;