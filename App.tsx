/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// ====================================================================================

import React from "react";
import { 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Text 
} from "react-native";
import { Test } from "./Test";

interface Prop {}
interface State {
  count: number;
  visible: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 200,
    height: 50,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 12
  }
});

export class App extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = { count: 0, visible: true };
  }
  onPlusPress = () => this.setState({ count: this.state.count + 1 });
  onMinusPress = () => this.setState({ count: this.state.count - 1 });
  change = () => this.setState({ visible: !this.state.visible });
  render() {
    return (
      <View style={styles.container}>
        
        {this.state.visible ? <Test /> : null}
        <Text style={styles.text}>current count：{this.state.count}</Text>
        <TouchableOpacity style={styles.button} onPress={this.onPlusPress}>
          <Text>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.onMinusPress}>
          <Text>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.change}>
          <Text>{this.state.visible ? "invisible" : "visible"}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default App

