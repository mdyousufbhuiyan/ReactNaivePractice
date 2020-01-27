import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import ProductItem from './ImagePractice';

export default class Practice extends Component {


    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column' }}>

                    <View style={{ flexDirection: 'column' }}>
                        <ProductItem />
                        <ProductItem />
                        {/* <ProductItem />
                    <ProductItem />
                    <ProductItem /> */}
                    </View>


                    <View style={{ flexDirection: 'column' }}>
                        <ProductItem />
                        <ProductItem />
                        {/* <ProductItem />
                    <ProductItem />
                    <ProductItem /> */}
                    </View>


                    <View style={{ flexDirection: 'column' }}>
                        <ProductItem />
                        <ProductItem />
                        {/* <ProductItem />
                    <ProductItem />
                    <ProductItem /> */}
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ProductItem />
                        <ProductItem />
                        {/* <ProductItem />
                    <ProductItem />
                    <ProductItem /> */}
                    </View>

                </View>
            </ScrollView>
        )

    }


}