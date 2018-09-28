import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet, Button, TextInput, WebView } from 'react-native';
import t from 'tcomb-form-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value.name);
    Alert.alert('Thankyou !, Your message has been sended to me')
  }

  modelInput = (val) => {
    this.setState({
      message: val
    })
  }

  render() {
    return (
      <View style ={styles.container}>
        <Text style={styles.paragraph}>
          Send message to Me
        </Text>

        {/* <TextInput onChangeText={this.modelInput}></TextInput> */}

        <Form 
          type={User} 
          options={userOptions}
          ref={c => this._form = c}></Form>
        <Button
          title="Send"
          onPress={this.handleSubmit}></Button>
      </View>
    )
  }

}

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  message: t.String
})

const userOptions = {
  fields: {
    name: {
      help: 'Your name'
    },
    message: {
      help: 'Your message here'
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
})