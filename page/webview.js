'use strict'

import React, {Component} from 'react'
import {
	View,
	Text,
	WebView
} from 'react-native'

class component extends Component {

	constructor() {
		super();
	}

	render() {
		const uri = this.props.uri;

		console.log(uri);

		return <WebView source={{uri: uri}} />
	}

}

module.exports = component;