import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <View style={styles.itemContainer}><Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.address}>{item.address.street},{item.address.suite},{item.address.city}</Text>
          </View>}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#0804d2',
    margin: 10,
  },
  name: {
    color: '#e10e0e',
    fontWeight: "bold",
    fontSize: 22,
    paddingHorizontal: 8,
    alignItems: 'stretch'
  },
  email: {
    color: '#0f1cd2',
    fontSize: 16,
    alignItems: 'stretch',
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  address: {
    color: '#079c07',
    fontSize: 14,
    alignItems: 'stretch',
    paddingHorizontal: 8,
    paddingVertical: 3,
    padding: 3,
  }
})