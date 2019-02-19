import React from 'react';
import { 
  View, 
  StyleSheet, 
  Image,
  ImageBackground,
  TouchableOpacity } from 'react-native';
import { 
  Container, 
  Content,
  Text } from 'native-base';
import axios from 'axios';

class Site extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        suhu: '',
        hujan: '',
        pasut: ''
      }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    if(this.props.navigation.state.params.site === 'Site 1'){
      axios.get('http://139.180.220.65:3334/data?limit=all')
      .then((res) => {
        this.setState({
          suhu: res.data.suhu[res.data.suhu.length-1],
          hujan: res.data.hujan[res.data.hujan.length-1],
          pasut: res.data.pasut[res.data.pasut.length-1]
        })
      })
    } else {
      axios.get('http://139.180.220.65:3334/data2?limit=all')
      .then((res) => {
        this.setState({
          suhu: res.data.suhu[res.data.suhu.length-1],
          hujan: res.data.hujan[res.data.hujan.length-1],
          pasut: res.data.pasut[res.data.pasut.length-1]
        })
      })
    }
  }

  goStatistic() {
    if(this.props.navigation.state.params.site === 'Site 1'){
      this.props.navigation.navigate('Statistic',{site: 'Site 1'})
    }else{
      this.props.navigation.navigate('Statistic',{site: 'Site 2'})
    }
  }

  goMaps() {
    if(this.props.navigation.state.params.site === 'Site 1'){
      this.props.navigation.navigate('Maps',{site: 'Site 1'})
    }else{
      this.props.navigation.navigate('Maps',{site: 'Site 2'})
    }
  }

  render() {
    return (
      <ImageBackground source={require('../../assets/Polos.jpg')} style={styles.backgroundImage}>
        <Container style={{ justifyContent: 'center', backgroundColor: 'transparent' }}>
          <Content>
            <View style={styles.wms}>
              <Image source={require('../../assets/logo.png')} style={{width:100,height:100,margin:10}}/>
              <Text style={{color:'#FFFFFF', fontWeight:'bold', fontSize:20}}>Sea Monitoring System</Text>
            </View>

            <TouchableOpacity style={styles.touch} onPress={() => this.goMaps()}>
              <View style={[styles.carditem,{marginTop:10}]}>
                <View style={styles.cardss}>
                  <Text style={{color:'#00B8EE',fontWeight:'bold'}}>Maps</Text>
                </View>
              </View>
            </TouchableOpacity>      

            <View style={styles.contain}>
              <View style={styles.card}>
                <View style={styles.wrapcard}>
      
                  <View style={[styles.carditem,{marginTop:10}]}>
                    <View style={styles.icon}>
                      <Image source={require('../../assets/iconph.png')} style={{width:40,height:40,margin:10}}/>
                    </View>
                    <View style={styles.carditems}>
                      <Text style={{marginLeft:60,color:'#FFFFFF',fontWeight:'bold'}}>Curah Hujan</Text>
                    </View>
                    <Text style={styles.title}>{this.state.hujan}</Text>
                  </View>

                  <View style={styles.carditem}>
                    <View style={styles.icon}>
                      <Image source={require('../../assets/iconsuhu.png')} style={{width:40,height:40,margin:10}}/>
                    </View>
                    <View style={styles.carditems}>
                      <Text style={{marginLeft:60,color:'#FFFFFF',fontWeight:'bold'}}>Suhu</Text>
                    </View>
                    <Text style={styles.title}>{this.state.suhu}</Text>
                  </View>
      
                  <View style={styles.carditem}>
                    <View style={styles.icon}>
                      <Image source={require('../../assets/icontinggi.png')} style={{width:40,height:40,margin:10}}/>
                    </View>
                    <View style={styles.carditems}>
                      <Text style={{marginLeft:60,color:'#FFFFFF',fontWeight:'bold'}}>Pasang Surut</Text>
                    </View>
                    <Text style={styles.title}>{this.state.pasut}</Text>
                  </View>

                  <TouchableOpacity onPress={() => this.goStatistic()}>
                    <View style={[styles.carditem,{marginBottom:10}]}>
                      <View style={styles.icon}>
                        <Image source={require('../../assets/iconstats.png')} style={{width:40,height:40,margin:10}}/>
                      </View>
                      <View style={styles.carditems}>
                        <Text style={{marginLeft:60,color:'#FFFFFF',fontWeight:'bold'}}>Statistik</Text>
                      </View>
                      <Text style={styles.title}>  </Text>
                    </View>
                  </TouchableOpacity>
      
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles.wms}>
              <View style={styles.about}>
                <Text style={{fontWeight:'bold', color: '#00B8EE'}}>Back</Text>
              </View>
            </View>
            </TouchableOpacity>
          </Content>
        </Container>
      </ImageBackground>
      )
  }
}

export default Site;

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
      marginBottom: 20
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
      backgroundColor: '#F7F7F7',
      borderRadius: 20,
    },
    carditem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      backgroundColor: 'transparent',
    },
    carditems: {
      flexDirection: 'row',
      margin: -50,
      alignItems: 'center',
      width: 70+'%',
      backgroundColor: '#00B8EE',
      borderRadius: 20,
      height: 40
    },
    icon: {
      zIndex: 1,
      borderRadius: 50,
      margin: 5,
      backgroundColor: '#FFFFFF'
    },
    title: {
      marginLeft: 60,
      fontWeight: 'bold',
      fontSize: 20,
      width: 20+'%'
    },
    cardss: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 85+'%',
      backgroundColor: '#FFF',
      borderRadius: 10,
      height: 40
    },
    touch: {
      alignItems:'center',
      width: 100+'%'
    }
  });