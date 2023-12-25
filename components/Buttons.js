import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

class Buttons extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.containerStyle]}
        onPress={this.props.onPress}
      >
        <Text style={[styles.text, this.props.textStyle]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Buttons;
