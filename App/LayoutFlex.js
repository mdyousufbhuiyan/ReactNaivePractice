import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';


export default class FlexDirectionBasics extends Component {
    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{
                        flex: 1, flexDirection: 'column'
                        , justifyContent: 'center', alignItems: 'center'
                    }}>
                        <View style={{ width: 150, height: 50, backgroundColor: 'powderblue' }} />
                        <View style={{ width: 150, height: 50, backgroundColor: 'skyblue' }} />
                        <View style={{ width: 150, height: 50, backgroundColor: 'steelblue' }} />
                    </View>

                    <View style={{
                        flex: 1, flexDirection: 'column'
                        , justifyContent: 'center', alignItems: 'stretch', marginTop: 20
                    }}>
                        <View style={{ height: 50, backgroundColor: 'powderblue' }} />
                        <View style={{ height: 50, backgroundColor: 'skyblue' }} />
                        <View style={{ height: 50, backgroundColor: 'steelblue' }} />
                    </View>

                    <View style={{
                        flex: 1, flexDirection: 'column'
                        , justifyContent: 'center', alignItems: 'stretch', marginTop: 20
                    }}>
                        <View style={{ width: 150, height: 50, backgroundColor: 'powderblue', alignSelf: 'flex-start' }} />
                        <View style={{ alignSelf: 'stretch', height: 50, backgroundColor: 'skyblue' }} />
                        <View style={{ alignSelf: 'flex-end', width: 150, height: 50, backgroundColor: 'steelblue' }} />
                    </View>


                    <View style={{
                        flex: 1, flexDirection: 'column'
                        , justifyContent: 'center',
                        flexWrap: 'nowrap', marginTop: 20
                    }}>
                        <View style={{ alignContent: 'flex-start', width: 150, height: 50, backgroundColor: 'powderblue', alignSelf: 'flex-start' }} />
                        <View style={{ alignSelf: 'stretch', height: 50, backgroundColor: 'skyblue' }} />
                        <View style={{ alignSelf: 'flex-end', width: 150, height: 50, backgroundColor: 'steelblue' }} />
                       
                    </View>

                   


                </View>
            </ScrollView>

        );
    }
};