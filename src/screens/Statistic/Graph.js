import React from 'react';
import { 
  View, 
  Text, 
  Dimensions, 
  StyleSheet, 
  TouchableOpacity } from 'react-native';
import { 
  Spinner, 
  Container, 
  Content, 
  Icon } from 'native-base';
import PureChart from 'react-native-pure-chart';
import axios from 'axios';

const {width} = Dimensions.get('window');
const height = 220;

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Curah Hujan',
      sea: [],
      suhu: [],
      hujan: [],
      pasut: [],
      tanggal: [],
      page: 1,
      next: false,
      back: false
    }
  }

  componentDidMount() {
    this.getChart(1)
  }

  getChart(number){
    if(this.props.navigation.state.params.site === 'Site 1'){
      axios.get('http://139.180.220.65:3334/chart?page='+number)
      .then((res) => {
        this.setState({ 
          sea: res.data.hujan,
          hujan: res.data.hujan,
          pasut: res.data.pasut,
          suhu: res.data.suhu, 
          tanggal: res.data.waktu,
          page: number, 
          thispage: res.data.page,
          lastpage: res.data.lastPage
         })
      })
    } else {
      axios.get('http://139.180.220.65:3334/chart2?page='+number)
      .then((res) => {
        this.setState({ 
          sea: res.data.hujan,
          hujan: res.data.hujan,
          pasut: res.data.pasut,
          suhu: res.data.suhu, 
          tanggal: res.data.waktu, 
          page: number, 
          thispage: res.data.page,
          lastpage: res.data.lastPage
         })
      })
    }
  }

  btnBack(){
    if(this.state.back === true){
      this.setState({
        text: 'Suhu',
        sea: this.state.suhu,
        next: true,
        back: false
      })      
    } else {
      this.setState({
        text: 'Curah Hujan',
        sea: this.state.hujan,
        next: false
      })      
    }
  }

  btnNext(){
    if(this.state.next === true){
      this.setState({
        text: 'Pasang Surut',
        sea: this.state.pasut,
        back: true
      })
    } else {
      this.setState({
        text: 'Suhu',
        sea: this.state.suhu,
        next: true
      })      
    }
  }

  render() {

    return (
      <Container>
        <Content>
          {
            (this.state.hujan.length < 1) ? <Spinner /> :
            <View>

              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>

                <TouchableOpacity style={{margin:10}} onPress={()=>this.btnBack()}>
                  <View style={styles.icon}>
                    <Icon style={{color:'#fff'}} name='arrow-back' />
                  </View>
                </TouchableOpacity>
                <Text style={styles.title}>{this.state.text}</Text>
                <TouchableOpacity style={{margin:10}} onPress={()=>this.btnNext()}>
                  <View style={styles.icon}>
                    <Icon style={{color:'#fff'}} name='arrow-forward' />
                  </View>
                </TouchableOpacity>

              </View>

              <PureChart type='line'
                data={this.state.sea}
                width={width}
                height={height}
                pinchZoom={true}
                doubleTapToZoomEnabled={true}
              />

              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <TouchableOpacity style={{margin:10}} onPress={()=>{
                  if(this.state.page>1){
                    const back = this.state.page-1;
                    this.getChart(back);
                  }
                }}>
                  <View style={styles.icon}>
                    <Icon style={{color:'#FFF'}} name='arrow-back' />
                  </View>
                </TouchableOpacity>
                <Text note style={{margin:10}}>{this.state.thispage} to {this.state.lastpage}</Text>
                <TouchableOpacity style={{margin:10}} onPress={()=>{
                  if(this.state.page<this.state.lastpage){
                    const next = this.state.page+1;
                    this.getChart(next);
                  }
                }}>
                  <View style={styles.icon}>
                    <Icon style={{color:'#FFF'}} name='arrow-forward' />
                  </View>
                </TouchableOpacity>
              </View>

            </View>       
          }
        </Content>
      </Container>
    )
  }
}

export default Graph;

const styles = StyleSheet.create({
  title : {
    margin: 10,
    fontWeight: 'bold'
  },
  icon: {
    borderRadius: 5,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00B8EE'
  },
  note: {
    flex: 1,
    marginVertical: 8
  },
  text: {
    paddingLeft: 20
  },
  texttitle: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  textcontent: {
    fontSize: 12
  },
  textcontent1: {
    fontSize: 12,
    marginTop: 10
  }

});