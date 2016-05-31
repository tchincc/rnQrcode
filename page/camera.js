'use strict'

import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native'

import Camera from 'react-native-camera'

class component extends Component {

	constructor() {
		super();
	}

	render() {
		return (
			<View style={[css.container, {flexDirection: 'column', justifyContent: 'space-between'}]}>
			        
				<View style={[css.header, css.container]}>
				  <Camera
				    ref={(cam) => {
				      this.camera = cam;
				    }}
				    style={[css.container, css.center]}
				    aspect={Camera.constants.Aspect.fill}>
				  </Camera>
				</View>

				<View style={[css.btn, css.center]}>
				  <Text onPress={this.takePicture.bind(this)}>拍照</Text>
				</View>

			</View>
		)
	}


	takePicture() {
		this.camera.capture()
			.then((data) => console.log(data))
			.catch(err => console.error(err));
	}

}


const css = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    paddingTop: 20,
  },
  tc: {
    textAlign: 'center'
  },
  btn: {
    height: 50,
    backgroundColor: '#efefef'
  },
  scanner: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width *0.5,
    borderWidth: 2,
    borderColor: 'white'
  }
});

module.exports = component;



