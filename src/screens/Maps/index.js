import React from 'react';
import { 
  View, 
  StyleSheet,
  Text, 
  TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Maps from './Maps1';
import Maps1 from './Maps2';
import axios from 'axios';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suhu: '',
      hujan: '',
      pasut: '',
      info: false,
      title: 'Wilayah 1',
      text: 'Bakauheni'
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData(){
    if(this.props.navigation.state.params.site === 'Site 1'){
      axios.get('http://139.180.220.65:3334/data?limit=all').then((res) => {
        this.setState({
          suhu: res.data.suhu[res.data.suhu.length-1],
          hujan: res.data.hujan[res.data.hujan.length-1],
          pasut: res.data.pasut[res.data.pasut.length-1],
          title: 'Wilayah 1',
          text: 'Bakauheni',
          info: false
        })
      })      
    } else {
      axios.get('http://139.180.220.65:3334/data2?limit=all').then((res) => {
        this.setState({
          suhu: res.data.suhu[res.data.suhu.length-1],
          hujan: res.data.hujan[res.data.hujan.length-1],
          pasut: res.data.pasut[res.data.pasut.length-1],
          title: 'Wilayah 2',
          text: 'Merak',
          info: true
        })
      })
    }
  }

  renderMaps() {
    if(this.state.info === true) {
      return(
        <Maps1 />
      )
    } else {
      return(
        <Maps />
      )      
    }
  }

  btnNext() {
    axios.get('http://139.180.220.65:3334/data2?limit=all').then((res) => {
      this.setState({
        suhu: res.data.suhu[res.data.suhu.length-1],
        hujan: res.data.hujan[res.data.hujan.length-1],
        pasut: res.data.pasut[res.data.pasut.length-1],
        title: 'Wilayah 2',
        text: 'Merak',
        info: true
      })
    })
  }

  btnBack() {
    axios.get('http://139.180.220.65:3334/data?limit=all').then((res) => {
      this.setState({
        suhu: res.data.suhu[res.data.suhu.length-1],
        hujan: res.data.hujan[res.data.hujan.length-1],
        pasut: res.data.pasut[res.data.pasut.length-1],
        title: 'Wilayah 1',
        text: 'Bakauheni',
        info: false
      })    
    })
  }

  render() {
    return(
      <View style={styles.container}>
        {this.renderMaps()}
        <View style={styles.contain}>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={{marginBottom:10}} onPress={()=>this.btnBack()}>
              <View style={styles.icon}>
                <Icon style={{color:'#fff'}} name='arrow-back' />
              </View>
            </TouchableOpacity>
            <Text>{this.state.title}</Text>
            <TouchableOpacity style={{marginBottom:10}} onPress={()=>this.btnNext()}>
              <View style={styles.icon}>
                <Icon style={{color:'#fff'}} name='arrow-forward' />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View style={styles.carditem}>
              <View style={styles.information}>
                <View style={styles.subinfo}>
                  <Text>Curah Hujan</Text>
                  <Text style={{fontWeight: 'bold'}}>{this.state.hujan}</Text>
                </View>
                <View style={[styles.subinfo,{borderRightWidth: 2, borderLeftWidth: 2}]}>
                  <Text>Suhu</Text>
                  <Text style={{fontWeight: 'bold'}}>{this.state.suhu}</Text>
                </View>
                <View style={styles.subinfo}>
                  <Text>Pasang Surut</Text>
                  <Text style={{fontWeight: 'bold'}}>{this.state.pasut}</Text>
                </View>
              </View>

              <View style={{alignItems: 'center', margin: 10}}>
                <Text>Lokasi</Text>              
                <Text style={{fontWeight: 'bold'}}>{this.state.text}</Text>              
              </View>
            </View>
          </View>

        </View>
      </View>
    )
  }
}

export default Index;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 0.4,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contain: {
    padding: 20,
    backgroundColor: 'transparent',
    width: 100+'%'
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderRadius: 20
  },
  carditem: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20
  },
  icon: {
    borderRadius: 5,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00B8EE'
  },
  information: {
    flexDirection: 'row',
    borderColor: '#F0F0F0',
    borderBottomWidth: 5,
    width: 100+'%'
  },
  subinfo: {
    flex: 1,
    height: 60,
    borderColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
