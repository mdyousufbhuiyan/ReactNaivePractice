
import React, { Component } from 'react';
import { Text, View, TouchableHighlight ,TextInput, TouchableOpacity, TouchableNativeFeedback , TouchableWithoutFeedback ,Button, StyleSheet, Alert , 
ScrollView } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import imageContent from './ImagePractice';
import FlatListPractice from './List/FlatListSectionList';

import NetworkingView from './networking/NetworkingPractice'


export class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
          email: "hello",
          password: "",
          props : props,
        }
      }


    _onPressButton() {
       // alert('You tapped the button!')
      // this.state.props.navigation.navigate("Image");

       this.props.navigation.navigate("FlatListNavigate",{email:"hello",phone:"018532254"});

    }

    _onPressNetworkingButton() {
        // alert('You tapped the button!')
       // this.state.props.navigation.navigate("Image");
 
        this.props.navigation.navigate("NetworkingView",{email:"hello",phone:"018532254"});
 
     }

    _onLongPressButton() {
        alert('You long-pressed the button!')
    }


    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <TouchableHighlight onPress={()=>this._onPressButton()} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>ImageView</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={()=>this._onPressNetworkingButton()} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Networking</Text>
                    </View>
                </TouchableHighlight>
              
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius : 20,
        borderColor : '#fff'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }
});








const AppStackNavigator = createStackNavigator({
    Home: HomePage, 
    FlatListNavigate : FlatListPractice,
    NetworkingView : NetworkingView,
    Image: imageContent,
});

const App = createAppContainer(AppStackNavigator);

export default App;