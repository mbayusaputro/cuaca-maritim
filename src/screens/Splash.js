import React, { Component } from 'react';
import {
  StyleSheet,
  Image } from 'react-native';

class Splash extends Component {
//   state = {
//     appReady: false,
//   };

  constructor(){
    super();
    this._image = require('../../assets/SplashScreen.jpg')
  }

  componentDidMount(){
    this.resetAnimation();
  }

  resetAnimation(){
    // this.setState({
    //   appReady: true
    // });
    setTimeout(()=>{
        this.props.navigation.navigate('Home')
    }, 1000);
  }

  render(){
    // setTimeout(()=> {
    //     if(this.state.appReady === true){
    //         this.props.navigation.navigate('Home')
    //     }
    // }, 1000);
        return (
            <Image source={this._image}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}

export default Splash;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text: {
        textAlign: 'center',
        color: 'blue',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});