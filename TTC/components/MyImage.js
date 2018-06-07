import React from 'react';
import { StyleSheet, View,Image,TouchableOpacity,Alert } from 'react-native';


let pic1 =require('../images/1.png');
let pic2 =require('../images/2.png');
let pic3 =require('../images/3.png');
let empty = 0;
let count =0;
let playerOneInputs= [];
let playerTwoInputs= [];

let gameState =0;

import{ condition } from '../constants/conditions';

export default class MyImage extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     source:pic3,
     boxId:props.boxId,

   }
   this.switchImage =this.switchImage.bind(this);

 }



restart(){
  this.setState ( this.baseState)
  playerOneInputs= [];
  playerTwoInputs= [];
  count =0;
  empty=1;
}

 checkempty(){
   var x =this.state.source
   if(x ==pic3){
     empty =0
   }else {
     empty = 1
   }
 }

 playerOne(){
   const boxId = this.props.boxId
  playerOneInputs= playerOneInputs.concat(boxId)
  this.setState ({
    source: pic1,
  })

  let res =this.judgeWinner(playerOneInputs)
  if(res){
    console.log('player 1 win');
    gameState =1;
    console.log('gameState: ' +gameState);
    Alert.alert('play 1 win');

  }

 }

 playerTwo(){
   const boxId = this.props.boxId
   playerTwoInputs= playerTwoInputs.concat(boxId)
   this.setState ({
     source: pic2,
   })
   let res =this.judgeWinner(playerTwoInputs)
   if(res){
     console.log('player 2 win');
     gameState =1;
     console.log('gameState: ' +gameState);
     Alert.alert('play 2 win');


   }
 }

 judgeWinner(input){
   return condition.some(d => d.every(item => input.indexOf(item) !== -1))
 }


 switchImage(){
   if(gameState ===0)
      {
        this.checkempty();
         if (empty === 0){
           if (count === 0){
             count =1;
             this.playerOne();
             console.log('player 1' + ' '+playerOneInputs );

         }else if( count===1){
           count =0;
           this.playerTwo();
            console.log('player 2' + ' '+playerTwoInputs);
         }
         if(playerTwoInputs.length +playerOneInputs.length === 9){
            console.log('DRAW');
            console.log('gameState: ' +gameState);
            Alert.alert('DRAW');

         }

       }}
}

  render() {
    const {source, count} =this.state
    let display= this.state.source


    return (

        <TouchableOpacity onPress={this.switchImage}>
        <Image source={display}
        style={styles.imageSize}/>
        </TouchableOpacity >

    );
  }
}

const styles = StyleSheet.create({
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
    flexDirection: 'row'

  }

});
