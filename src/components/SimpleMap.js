import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.549694,
      lng: -122.047711
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDZFZJoTLh6ksAqU0ZGE2_SCu-6EpHo3Rw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.549694}
            lng={-122.047711}
            text={'Rosemont Family Dental Care'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;