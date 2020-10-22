import React, { Component, useState } from "react";
import { Button, View, StyleSheet, Pressable, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Line from './Line'
import Colors from 'newAPPStat/src/Lib/Colors'
import StatFont from '../../../Lib/Component/StatFont'
class FechaHora extends Component {
  state = {
    isDatePickerVisible: false,
  }

  showDatePicker = () => {

    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleConfirm = (date) => {
    this.props.onChageDateHour(date);
    this.hideDatePicker();
  };

  render() {
    return (
      <View>
        <Pressable
          onPress={this.showDatePicker}
        >
          <View style={styles.container}>
            <StatFont style={styles.text}>
              {this.props.title}
            </StatFont>
            <Line>
              {this.props.children}
              <DateTimePickerModal
                isVisible={this.state.isDatePickerVisible}
                mode="datetime"
                onConfirm={this.handleConfirm}
                onCancel={this.hideDatePicker}
              />
            </Line>
          </View>
        </Pressable>
      </View>
    )
  }

}
export default FechaHora;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: Colors.grayLetter,
    paddingBottom: 20,
    padding: 20
  },
})