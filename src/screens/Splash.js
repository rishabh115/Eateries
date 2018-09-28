import React,{Component} from 'react'
import {View, StyleSheet,StatusBar, Image, Text} from 'react-native'
export default class Splash extends Component
{
  componentDidMount()
  {
      setTimeout(()=>{this.props.navigation.navigate("Home")},1000);
  }  
  render()
  {
      return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#D50000" barStyle="light-content"></StatusBar>
       <Image style={styles.logo} source={require("../images/logo.png")}/>
       <Text style={styles.title}>Eateries..</Text>
      </View>);
  }
}
const styles=StyleSheet.create({
    "container":{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#cb202d"
    },
    "logo":{
       alignSelf:"center",
       width:150,height:150 
    },
    "title":{
        fontFamily:"canaro_extra_bold",
        fontWeight:"bold",
        color:"#dcd9cd",
        fontSize:20
    }
});