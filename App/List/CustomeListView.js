import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


export default class CustomeView extends Component {

        constructor(props){
            super(props)
        }


    render() {

        return (
            <View style={styles.container}>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../Image/02.png')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>
                            {this.props.name}
                        </Text>
                    </View>
                    <View style={styles.designationContainer}>
                        <Text style={styles.designation}>
                            {this.props.designation}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    imageContainer: {
        flex: 1,
        padding: 10,
    },
    image : {
        width : 80,
        height : 80,
        borderRadius :100,
        borderColor : '#f8360d',
        borderWidth : 2
    },
    textContainer : {
        flex : 3,
        flexDirection : 'column',
        padding : 10,
        justifyContent : 'center',
        alignItems: 'stretch',

    },nameContainer : {

    },
    name:{
        color: '#000000',
        fontSize : 20,
        fontWeight : 'bold'
    },
    designationContainer : {

    },designation : {
        color : '#000000',
        fontSize : 16,
        fontWeight : 'normal'
    }

})