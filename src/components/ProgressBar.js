import React,{Component} from 'react'
import { Modal, View, Text, ActivityIndicator } from "react-native";

const ProgressDialog=({visible})=>{
return(
<Modal transparent={true} onRequestClose={()=>null} visible={visible}>
    <View style={{flex:1,  alignItems:"center", justifyContent:"center"}}>
        <View style={{borderRadius:10,backgroundColor: '#dcdcde', padding:25}}>
            <Text style={{fontSize:20, fontWeight:'200'}}>Search in progress...</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    </View>
</Modal>);
}

export default ProgressDialog;