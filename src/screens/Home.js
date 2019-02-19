import React from 'react';
import { 
  View, 
  StyleSheet, 
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity } from 'react-native';
import { 
  Container, 
  Content,
  Text } from 'native-base';

class Home extends React.Component {

  render() {
    return (
      <ImageBackground source={require('../../assets/Polos.jpg')} style={styles.backgroundImage}>
        <Container style={{ justifyContent: 'center', backgroundColor: 'transparent' }}>
          <View style={styles.wms}>
            <Image source={require('../../assets/logo.png')} style={{width:120,height:120,marginTop:20, marginBottom:5}}/>
            <Text style={{color:'#FFFFFF', fontWeight:'bold', fontSize:20, marginTop:5}}>Sea Monitoring System</Text>
          </View>
          <Content>
            <View style={styles.contain}>
              <View style={styles.card}>
                <View style={styles.wrapcard}>

                  <TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate('Site',{site: 'Site 1'})}>
                    <View style={[styles.carditem,{marginTop:20}]}>
                      <View style={styles.carditems}>
                        <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Site 1</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate('Site',{site: 'Site 2'})}>
                    <View style={styles.carditem}>
                      <View style={styles.carditems}>
                        <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Site 2</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate('About')}>
                    <View style={[styles.carditem,{marginBottom:20}]}>
                      <View style={styles.carditems}>
                        <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>About</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL('https://itarsi.stmkg.ac.id/')}>
              <View style={styles.wms}>
                <View style={styles.about}>
                  <Text style={{fontWeight:'bold', color: '#00B8EE'}}>ITARSI-STMKG</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Content>
        </Container>
      </ImageBackground>
      )
  }
}

export default Home;

const styles = StyleSheet.create({
    wms: {
      alignItems: 'center',
      margin: 10
    },
    backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
    },
    about: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 20
    },
    contain: {
      padding: 20,
      width: 100+'%'
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      padding: 10,
      borderRadius: 20,
    },
    wrapcard: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 20,
    },
    carditem: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      backgroundColor: '#F7F7F7',
    },
    carditems: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 70+'%',
      backgroundColor: '#00B8EE',
      borderRadius: 20,
      height: 40
    },
    touch: {
      alignItems:'center',
      width: 100+'%'
    }
  });