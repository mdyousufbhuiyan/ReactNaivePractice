import React, { Component } from 'react';
import { Text, View, Image, StyleSheet,FlatList } from 'react-native';
import DataList from './DataList';
import CustomeListView from './CustomeListView';




export default class FlatListPractice extends Component {

    constructor(props) {
        super(props)
        this.state = {
         dataList : DataList,


        }
    }




    render() {

        return (
            <View style={styles.container}>
           <FlatList
           data = {[

            {
                name : "Md Yousuf",
                age : 26,
                designation : "Software Engineer Android",
                image : require('../Image/02.png'),
         
            } ,{
                name : "Md Farhan Munshi",
                age : 26,
                designation : "Software Engineer Larabel",
                image : require('../Image/05.png'),
         
            } ,{
                name : "Md Tuhin",
                age : 26,
                designation : "Software Engineer Cake Php",
                image : require('../Image/03.png'),
         
            } ,{
                name : "Salman Ovi",
                age : 26,
                designation : "Software Engineer Larabel",
                image : require('../Image/04.png'),
         
            } ,{
                name : "Md Majad ",
                age : 26,
                designation : "Software Engineer Larabel",
                image : require('../Image/05.png'),
         
            } ,{
                name : "Md Tuhin",
                age : 26,
                designation : "Software Engineer Cake PHp",
                image : require('../Image/02.png'),
         
            } ,
                
         ] }
        // renderItem = {({item})=> <Text>{item.name}</Text>}
         
        renderItem = {({item})=>   <CustomeListView name = {item.name} image = {item.image} designation = {item.designation} age = {item.age}  >
           </CustomeListView>}
         
         />
           

           {/* <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        /> */}
      </View>    
        )

    }


}
const styles = StyleSheet.create({


})