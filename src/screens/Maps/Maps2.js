import React from 'react';
import { 
  StyleSheet, 
  Dimensions } from 'react-native';
import { Text } from 'native-base';
import MapView, { 
  PROVIDER_GOOGLE,
  Marker,
  Callout } from 'react-native-maps';
import water from '../../../assets/water.png';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const lat = -5.9281721;
const lng = 105.9935215;
const latDelta = 0.0922;
const lngDelta = latDelta * ASPECT_RATIO;

class Maps2 extends React.Component {
  render(){
    return(
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{...StyleSheet.absoluteFillObject}}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: lngDelta
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lng,
          }}
          image={water}
          tittle='Merak'
          description='Sea Monitoring System untuk Wilayah 2'
        >
          <Callout style={width}>
            <Text>Merak</Text>
            <Text note>description</Text>
          </Callout>
        </Marker>
      </MapView>
    )
  }
}

export default Maps2;