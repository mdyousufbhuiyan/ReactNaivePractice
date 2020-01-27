import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class ImageView extends Component {
     render() {

          return (
               <View style={styles.container}>
                    <View style={styles.imageContainer}>
                         <Image source={{ uri: 'https://images.unsplash.com/photo-1501686962565-1350ab98237f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&Pauto=format&fit=crop&w=1000&q=80' }}
                              style={styles.imageItem} />
                         

                    </View>
                       
                    <View style={styles.textContainer}>
                         <Text style={styles.textItem}>Name Of The Element</Text>

                         <Text style={styles.textDescription}>Description  Of The Element</Text>
                    </View>
               </View>
          )

     }

}


const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#fff',
          margin: 20,
          justifyContent: "center",
          flexDirection: 'column',


     },
     imageContainer: {
          alignItems: 'center'
     },
     imageItem: {
          height: 200,
          width: 200,
          borderRadius: 100,
          borderWidth: 3,
          borderColor: '#c00000'
     },
     textContainer: {
          alignItems: 'center',
          marginTop: 10,

     },
     textItem: {
          color: '#000',
          fontSize: 25,
          fontWeight: 'bold',
          padding: 5,
          alignItems: 'stretch',
          flexWrap: 'wrap'

     },
     textDescription: {
          color: '#000',
          fontSize: 16,
          padding: 5,
          fontWeight: 'normal',
          alignItems: 'stretch'

     }
})