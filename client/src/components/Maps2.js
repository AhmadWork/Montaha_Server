import React, { Component } from 'react'
import L from 'leaflet' 
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
const positions = [
  {code:'MR0001',position:[51.505, -0.09]},
  {code:'MR0002',position:[51.506, -0.39]},
  {code:'MR0003',position:[51.505, -.059]},
  {code:'MR0004',position:[51.515, -0.09]},
  {code:'MR0005',position:[51.505, -0.39]},
  {code:'MR0006',position:[51.505, .059]},
  {code:'MR0007',position:[51.505, 0.09]},
  {code:'MR0008',position:[51.505, 0.39]},
  {code:'MR0009',position:[51.507, -.059]},
  {code:'MR0010',position:[51.535, -0.09]},
  {code:'MR0011',position:[51.508, -0.39]},
  {code:'MR0012',position:[51.509, -.059]},
  {code:'MR0013',position:[51.510, -0.09]},
  {code:'MR0014',position:[51.511, -0.39]},
  {code:'MR0015',position:[51.512, -.059]},
  {code:'MR0016',position:[51.513, -0.09]},
  {code:'MR0017',position:[51.514, -0.39]},
  {code:'MR0018',position:[51.516, -.059]},
  {code:'MR0019',position:[51.517, -0.09]},
  {code:'MR0020',position:[51.518, -0.39]},
  {code:'MR0021',position:[51.519, -.059]},
  {code:'MR0022',position:[51.505, -0.09]},
  {code:'MR0023',position:[51.505, -0.39]},
  {code:'MR0024',position:[51.505, -.059]},
  {code:'MR0025',position:[51.505, -0.09]},
  {code:'MR0026',position:[51.505, -0.39]},
  {code:'MR0027',position:[51.505, -.059]},
  {code:'MR0028',position:[51.505, -0.09]},
  {code:'MR0029',position:[51.505, -0.39]},
  {code:'MR0030',position:[51.505, -.059]},
  {code:'MR0031',position:[51.505, -0.09]},
  {code:'MR0032',position:[51.505, -0.39]},
  {code:'MR0033',position:[51.505, -.059]},
  {code:'MR0034',position:[51.505, -0.09]},
  {code:'MR0035',position:[51.505, -0.39]},
  {code:'MR0036',position:[51.505, -.059]},
  {code:'MR0037',position:[51.505, -0.09]},
  {code:'MR0038',position:[51.505, -0.39]},
  {code:'MR0039',position:[51.505, -.059]},
  {code:'MR0040',position:[51.505, -0.09]},
  {code:'MR0041',position:[51.505, -0.39]},
  {code:'MR0042',position:[51.505, -.059]},
  {code:'MR0043',position:[51.505, -0.09]},
  {code:'MR0044',position:[51.505, -0.39]},
  {code:'MR0045',position:[51.505, -.059]},
  {code:'MR0046',position:[51.505, -0.09]},
  {code:'MR0047',position:[51.505, -0.39]},
  {code:'MR0048',position:[51.505, -.059]},
  {code:'MR0049',position:[51.505, -0.09]},
  {code:'MR0050',position:[51.505, -0.39]},
  {code:'MR0051',position:[51.505, -.059]},
  {code:'MR0052',position:[51.505, -0.09]},
  {code:'MR0053',position:[51.505, -0.39]},
  {code:'MR0054',position:[51.505, -.059]},
  {code:'MR0055',position:[51.505, -0.09]},
  {code:'MR0056',position:[51.505, -0.39]},
  {code:'MR0057',position:[51.505, -.059]},
  {code:'MR0058',position:[51.505, -0.09]},
  {code:'MR0059',position:[51.505, -0.39]},
  {code:'MR0060',position:[51.505, -.059]},
  {code:'MR0061',position:[51.505, -0.09]},
  {code:'MR0062',position:[51.505, -0.39]},
  {code:'MR0063',position:[51.505, -.059]},
  {code:'MR0064',position:[51.505, -0.09]},
  {code:'MR0065',position:[51.505, -0.39]},
  {code:'MR0066',position:[51.505, -.059]},
  {code:'MR0067',position:[51.505, -0.09]},
  {code:'MR0068',position:[51.505, -0.39]},
  {code:'MR0069',position:[51.505, -.059]},
  {code:'MR0070',position:[51.505, -0.09]},
  {code:'MR0071',position:[51.505, -0.39]},
  {code:'MR0072',position:[51.505, -.059]},
  {code:'MR0073',position:[51.505, -0.09]},
  {code:'MR0074',position:[51.505, -0.39]},
  {code:'MR0075',position:[51.505, -.059]},
  {code:'MR0076',position:[51.505, -0.09]},
  {code:'MR0077',position:[51.505, -0.39]},
  {code:'MR0078',position:[51.505, -.059]},
  {code:'MR0079',position:[51.505, -0.09]},
  {code:'MR0080',position:[51.505, -0.39]},
  {code:'MR0081',position:[51.505, -.059]},
  {code:'MR0082',position:[51.505, -0.09]},
  {code:'MR0083',position:[51.505, -0.39]},
  {code:'MR0084',position:[51.505, -.059]},
  {code:'MR0085',position:[51.505, -0.09]},
  {code:'MR0086',position:[51.505, -0.39]},
  {code:'MR0087',position:[51.505, -.059]},
  {code:'MR0088',position:[51.505, -0.09]},
  {code:'MR0089',position:[51.505, -0.39]},
  {code:'MR0090',position:[51.505, -.059]},
  {code:'MR0091',position:[51.505, -0.09]},
  {code:'MR0092',position:[51.505, -0.39]},
  {code:'MR0093',position:[51.505, -.059]},
  {code:'MR0094',position:[51.505, -0.09]},
  {code:'MR0095',position:[51.505, -0.39]},
  {code:'MR0096',position:[51.505, -.059]},
  {code:'MR0097',position:[51.505, -0.09]},
  {code:'MR0098',position:[51.505, -0.39]},
  {code:'MR0099',position:[51.505, -.059]},
  {code:'MR0100',position:[51.505, -0.09]},
  {code:'MR0101',position:[51.505, -0.39]},
  {code:'MR0102',position:[51.505, -.059]},
  {code:'MR0103',position:[51.505, -0.09]},
  {code:'MR0104',position:[51.505, -0.39]},
  {code:'MR0105',position:[51.505, -.059]},
  {code:'MR0106',position:[51.505, -0.09]},
  {code:'MR0107',position:[51.505, -0.39]},
  {code:'MR0108',position:[51.505, -.059]},
  {code:'MR0109',position:[51.505, -0.09]},
  {code:'MR0110',position:[51.505, -0.39]},
  {code:'MR0111',position:[51.505, -.059]},
  {code:'MR0112',position:[51.505, -0.09]},
  {code:'MR0113',position:[51.505, -0.39]},
  {code:'MR0114',position:[51.505, -.059]},

]

class Maps2 extends Component {
  constructor(props) {
    super(props);
    this.state = {value:'',position:[51.705, -0.09]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  


  componentDidMount(){
    this.map = L.map('map', {
      center: this.state.position,
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   const code= positions.find(item => item.code.includes(this.state.value));
   console.log(code.position);
//this.map.panTo(new L.LatLng(code.position[0],code.position[1]));
this.map.flyTo([code.position[0], code.position[1]], 16, {
  animate: true,
  duration: 2
});
L.marker([code.position[0],code.position[1]]).addTo(this.map).bindPopup("I am a green leaf.");


    event.preventDefault();
  }

  
render(){

 
 
return(
  <React.Fragment >
     <div className="row justify-content-center">
        <div className="col-sm-8">
      
<form onSubmit={this.handleSubmit} >
  <label>
Enter Coffee Code
    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} style={styles.input} />
  </label>
  <input type="submit" value="Submit"  style={styles.input}/>
</form>
 
<div style={{height:'20px'}}/>

<div className='map' id='map'></div>
</div>
    
        </div>
 
  </React.Fragment>

)

}
}

const styles = {
map:{
  width: "50vh",
  height: "200px",
  position:'center'
},
input:{
  width: "100%",
  height: "50px",
  margin: '10',
}
};

export default Maps2;