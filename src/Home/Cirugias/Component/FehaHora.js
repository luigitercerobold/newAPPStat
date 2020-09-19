import React, { Component, useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Line from './Line'

class FechaHora extends Component {
  state = {
    isDatePickerVisible: false,
  }
  showDatePicker = () => {
    console.log(this.state.isDatePickerVisible)
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
        <View>
          <Line>
           <Button title={this.props.title} onPress={this.showDatePicker} />
            <DateTimePickerModal
              isVisible={this.state.isDatePickerVisible}
              mode="datetime"
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
            />
          </Line>
        </View>

      </View>
    )
  }

}
export default FechaHora;
const styles = StyleSheet.create({

})