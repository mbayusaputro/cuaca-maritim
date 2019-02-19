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

const lat = -5.871986;
const lng = 105.7528677;
const latDelta = 0.0922;
const lngDelta = latDelta * ASPECT_RATIO;

class Maps1 extends React.Component {
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
          tittle='Bakauheni'
          description='Sea Monitoring System untuk Wilayah 1'
        >
          <Callout style={width}>
            <Text>Bakauheni</Text>
            <Text note>description</Text>
          </Callout>
        </Marker>
      </MapView>
    )
  }
}

export default Maps1;