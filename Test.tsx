import React from "react";
import { Text, StyleSheet } from "react-native";

interface TestProp {}

const styles = StyleSheet.create({
  text: {
    color: "green",
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 20
  }
});

export class Test extends React.Component<TestProp> {

  constructor(props: TestProp) {
    super(props);
    console.log("Test: constructor");
  }
  componentDidMount() {
    console.log("Test: componentDidMount");
  }
  componentDidUpdate() {
    console.log("Test: componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Test: componentWillUnmount");
  }
  render() {
    // console.log("Test: render")
    return <Text style={styles.text}>Test Screen</Text>;
  }
}

export default Test
