/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  NavigatorIOS,
  ScrollView,
  TouchableHighlight,
  MapView,
} from 'react-native'
import QRCodeScreen from './page/qrcode'
import Camera from './page/camera'
import Web from './page/webview'

class rnQrcode extends Component {
  
  constructor() {
    super();
  }
  
  render() {
    return (
    	<NavigatorIOS
	    	style={[css.container]}
	    	renderScene={this._renderScene}
	    	initialRoute={{
	    		component: Index,
	    		title: 'index'
	    	}}
    	/>
    );
  }

  _renderScene(route, navigator) {
  	let Component;
  	switch (route.title) {
  		case 'Camera': 
	  		Component = Camera;
	  		break;
  		case 'QRCode':
	  		Component = QRCodeScreen;
	  		break;
  		case 'web': 
	  		Component = Web;
	  		break;
  		default:
	  		Component = Index;
  	}
  	return <Component {...route.passProps} navigator={navigator} />
  }
  
}

class Index extends Component {

	constructor() {
		super();
		this.webViewOpened = false;
	}

	render() {
		return (
			<View style={[{paddingTop: 60}]}>
              <TouchableHighlight
                onPress={this.camHandler.bind(this)}
                underlayColor={"rgb(210,210,210)"}>
                  <View style={[css.container, css.center, css.list]}>
                      <Text style={[css.fz16]}>camera</Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.qrHandler.bind(this)}
                underlayColor={"rgb(210,210,210)"}>
                  <View style={[css.container, css.center, css.list]}>
                      <Text style={[css.fz16]}>QRCode</Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.webHandler.bind(this)}
                underlayColor={"rgb(210,210,210)"}>
                  <View style={[css.container, css.center, css.list]}>
                      <Text style={[css.fz16]}>百度</Text>
                  </View>
              </TouchableHighlight>
			</View>
		)
	}

	camHandler() {
		this.props.navigator.push({
			component: Camera,
			title: 'Camera'
		})
	}

	qrHandler() {
		this.props.navigator.push({
			component: QRCodeScreen,
			title: 'QRCode',
			passProps: {
				onSucess: this._onSucess.bind(this),
			}
		})
	}

	webHandler(uri) {
		this.props.navigator.push({
			component: Web,
			title: 'web',
			passProps: {
				uri: uri.constructor === String ? uri : 'http://www.baidu.com/'
			}
		})
	}

	_onSucess(result) {
		!this.webViewOpened && this.webHandler(result);
		this.webViewOpened = true;
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
	fz16: {
		fontSize: 16
	},
	list: {
		height: 50,
		borderBottomWidth: 1,
		borderColor: '#EFEFEF'
	}
})

AppRegistry.registerComponent('rnQrcode', () => rnQrcode);
