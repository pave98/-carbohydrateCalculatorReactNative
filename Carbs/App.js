import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Card, Input, Badge } from 'react-native-elements'

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
        <Badge
          badgeStyle={styles.result}
          value={<Text style={styles.resultText}>{this.state.weight / 100 * this.state.carbs}</Text>}
        />
        <Card title='Carbs Counter'>
          <Text style={styles.label1}>Give weight in grams</Text>
          <Input style={styles.input} keyboardType='numeric' onChangeText={(weight) => this.setState({ weight })} />
          <Text style={styles.label2}>Give carbohydrates per 100g</Text>
          <Input style={styles.input} keyboardType='numeric' onChangeText={(carbs) => this.setState({ carbs })} />
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container  : {
    flex            : 1,
    backgroundColor : '#fff',
    alignItems      : 'center',
    justifyContent  : 'center',
    marginBottom    : 50
  },
  input      : {
    width       : '100%',
    height      : 'auto',
    padding     : 10,
    fontSize    : 20,
    borderWidth : 1,
    borderStyle : 'solid',
    borderColor : 'blue'
  },
  label1     : {
    marginTop  : 1,
    marginLeft : 10
  },
  label2     : {
    marginTop  : 10,
    marginLeft : 10
  },
  result     : {
    padding : 10,
    height  : 50
  },
  resultText : {
    fontSize : 42,
    color    : 'white'
  }
})
