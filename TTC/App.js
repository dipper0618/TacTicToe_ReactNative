import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import MyImage from './components/MyImage';




export default class App extends React.Component {

  render() {
    return (

      <View style={styles.container}>
      <View style ={styles.header}>
      <Text style={styles.textHeader}> Tic Tac Toe</Text>
      </View>

        <View style={styles.row}>
          <MyImage  boxId={0} />
          <MyImage  boxId={1} />
          <MyImage  boxId={2} />

          </View>
        <View style={styles.row}>
          <MyImage  boxId={3}/>
          <MyImage  boxId={4}/>
          <MyImage  boxId={5}/>

          </View>

          <View style={styles.row}>
            <MyImage  boxId={6}/>
            <MyImage  boxId={7}/>
            <MyImage  boxId={8}/>

            </View>

        <Text>HI </Text>

      </View>



    );
  }
}

const styles = StyleSheet.create({
  header:{
    alignItems: 'center',
    justifyContent: 'center',


  },

  textHeader:{
    fontWeight: 'bold',
    fontSize:32,
    color:'red'


  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageSize:{
    width: 100,
    height:100,
  },
  row:{
    flexDirection: 'row',
    width: 310,
    height: 105,
    justifyContent: 'center',

  },

});
