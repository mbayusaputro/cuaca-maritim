import React from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity } from 'react-native';
import { 
  Spinner, 
  Container, 
  Content, 
  Icon, 
  Text } from 'native-base';
import { 
  Table as Tables, 
  TableWrapper, 
  Row, 
  Col } from 'react-native-table-component';
import axios from 'axios';

class Table extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Waktu', 'Hujan', 'Suhu', 'Pasang Surut'],
      sea: [],
      page: 1
    }
  }

  componentDidMount() {
    this.getTable(1)
  }

  getTable(number){
    if(this.props.navigation.state.params.site === 'Site 1'){
      axios.get('http://139.180.220.65:3334/data?page='+number)
      .then((res) => {
        this.setState({
          sea: res.data, 
          page: number, 
          thispage: res.data.page,
          lastpage: res.data.lastPage
         })
      })
      .catch((err) => {
        alert('No Connection')
      })
    } else {
      axios.get('http://139.180.220.65:3334/data2?page='+number)
      .then((res) => {
        this.setState({
          sea: res.data, 
          page: number, 
          thispage: res.data.page,
          lastpage: res.data.lastPage
         })
      })
      .catch((err) => {
        alert('No Connection')
      })
    }
  }

  render(){
    const state = this.state;
    return(
      <Container>
        <Content>
          {
            (state.sea.length < 1) ? <Spinner /> :
          <View>

            <View style={styles.container}>

              <Tables borderStyle={{borderWidth: 2, borderColor: '#F7F7F7'}}>
                <Row data={state.tableHead} style={styles.head} textStyle={[styles.text,{fontWeight:'bold', color:'#fff'}]}/>
                  <TableWrapper style={styles.wrapper}>
                    <Col data={this.state.sea.waktu} heightArr={[40,40,40,40]} textStyle={styles.text}/>
                    <Col data={this.state.sea.hujan} textStyle={styles.text}/>
                    <Col data={this.state.sea.suhu} textStyle={styles.text}/>
                    <Col data={this.state.sea.pasut} textStyle={styles.text}/>
                  </TableWrapper>                      
              </Tables>

            </View>

            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <TouchableOpacity style={{margin:10}} onPress={()=>{
                if(state.page>1){
                  const back = state.page-1;
                  this.getTable(back);
                }
              }}>
                <View style={styles.icon}>
                  <Icon style={{color:'#fff'}} name='arrow-back' />
                </View>
              </TouchableOpacity>
              <Text note style={{margin:10}}>{state.thispage} of {state.lastpage}</Text>
              <TouchableOpacity style={{margin:10}} onPress={()=>{
                if(state.page<state.lastpage){
                  const next = state.page+1;
                  this.getTable(next);
                }
              }}>
                <View style={styles.icon}>
                  <Icon style={{color:'#fff'}} name='arrow-forward' />
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

export default Table;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff'
  },
  icon: {
    borderRadius: 5,
    margin: 5,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00B8EE'
  },
  head: {  
    height: 50,  
    backgroundColor: '#00B8EE'
  },
  wrapper: { 
    flexDirection: 'row'
  },
  title: { 
    flex: 1, 
    backgroundColor: '#f6f8fa' 
  },
  text: { 
    textAlign: 'center', 
  }
});