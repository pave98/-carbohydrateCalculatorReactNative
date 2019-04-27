import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weight : 0,
      carbs  : 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Give weight in grams</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={(weight) => this.setState({ weight })} />
        <Text>Give carbohydrates per 100g</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={(carbs) => this.setState({ carbs })} />
        <Text style={{ padding: 10, fontSize: 42 }}>{this.state.weight / 100 * this.state.carbs}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex            : 1,
    backgroundColor : '#fff',
    alignItems      : 'center',
    justifyContent  : 'center'
  },
  input     : {
    width    : '50%',
    height   : 80,
    padding  : 10,
    fontSize : 20
  }
})
