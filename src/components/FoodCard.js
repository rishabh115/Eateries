import {Card,CardItem,Left, Body, Right} from 'native-base'
import React,{Component} from 'react'
import {Text, View} from 'react-native'
import RatingView from './RatingView'
const foodCard=({restaurant})=>
{
    return(
    <Card style={{padding:0,borderWidth:0, backgroundColor:"#ECEFF1"}}>
    <CardItem style={{backgroundColor:"#ECEFF1"}}>
    <Left>
     <Text style={{fontWeight:"bold", fontSize:16,fontFamily:"canaro_extra_bold"}}>{restaurant.name}</Text>
     </Left>
     <Right>
      <RatingView val={restaurant.user_rating.aggregate_rating} />
     </Right>
    </CardItem>
     <Text style={{marginStart:20,fontSize:12}}>{restaurant.location.address}</Text> 
    <View style={{
        borderBottomColor: '#455A64',
        marginEnd:5,
        marginTop:5,
        marginBottom:5,
        marginStart:5,
        borderBottomWidth: 1,
    }}
    /> 
    <View style={{backgroundColor:"#ECEFF1",marginBottom:5}}>
    <Text style={{marginStart:20}}>
      <Text style={{color:"#0D47A1",fontFamily:"gotham",marginStart:20}}>Cuisines    </Text>
      <Text style={{fontSize:12,textAlign:"center"}}>{restaurant.cuisines}</Text> 
      </Text> 
    </View> 
    </Card>
    );
}

export default foodCard;