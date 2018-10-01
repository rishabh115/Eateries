import React,{Component} from 'react'
import {Text} from 'react-native'
import {mapValToColor} from '../Utils'

const ratingView= ({val})=>{
    let colorMapped=mapValToColor(val);
    return(<Text style={{fontSize:14,fontWeight:"bold", borderRadius:5,elevation:5,
    ...{backgroundColor:colorMapped},color:"#FFEB3B",width:60,height:40,flex:1,
     textAlignVertical:"center", textAlign:"center"}}>
    {(val!=0)?val:"-.-"}
    </Text>);
}

export default ratingView;