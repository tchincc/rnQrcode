'use strict'

import React, {Component} from 'react'
import {
	View,
	Text
} from 'react-native'
import QRCodeScreen from '../widget/QRCodeScreen'

class component extends Component {

	constructor() {
		super();
	}

	render() {
		return <QRCodeScreen {...this.props} />
	}

}

module.exports = component;