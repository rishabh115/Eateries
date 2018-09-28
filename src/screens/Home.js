import React, {Component} from 'react'
import {Container, Header,Icon, Title,Left,Body,Right,InputGroup,Input, StyleProvider,Content,ListItem, Button, Switch} from 'native-base'
import {Image,Text,StyleSheet,FlatList} from 'react-native'
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import FoodCard from "../components/FoodCard";
import {BASE_URL,API_KEY}  from '../Constants'

const axios=require('axios')
export default class Home extends Component
{ 
  state={
    restaurants:[],
    isLoading:true
  }
  constructor(props)
  {
    super(props)
    this.searchStatus=false
    this.searchToggle.bind(this)
  }
  
  componentWillMount()
  {
    this.loadRestaurants("delhi");
  }
  searchToggle=()=>{
    const currentStatus=this.searchStatus
    this.searchStatus=!currentStatus
    this.forceUpdate()
  }
    async loadRestaurants(keyword)
    {
      try{
       let finalUrl=BASE_URL+"?q="+keyword
       const response=await axios.get(finalUrl,{"headers":{"user-key":API_KEY}}).then((response)=>{
         this.setState({
           restaurants:response.data.restaurants,
           isLoading:false
         })
       })
      }
      catch(error)
      {
        console.error(error)
      }
     
    }
    render()
    {
      return(
      <Container>
       <MasterToolbar searchToggle={this.searchToggle} searchStatus={this.searchStatus}/>
       <Content>
       {
       this.state.isLoading?<Text style={styles.info}>Nothing to display</Text>:<FlatList
         data={this.state.restaurants} 
         renderItem={({item})=><FoodCard restaurant={item.restaurant}/>}
         keyExtractor={(item,index)=>index}
       />
       }
       </Content>
       </Container>
      );
    }
}
const MasterToolbar=(props)=>{

  return(
  <StyleProvider style={getTheme(material)}>
  <Header style={{ backgroundColor: '#cb202d'}} androidStatusBarColor="#D50000" searchBar rounded>
      <Left>
          <Image resizeMode="contain" source={require('../images/ic_launcher.png')}/>
      </Left>
      <Body>
          <Title>Eateries</Title>
      </Body>
      <Right>
      <Button transparent onPress={props.searchToggle}>
      <InputGroup transparent underline="false">
        {
          props.searchStatus&&<Input style={{color:"#dcd9c9",textShadowColor:"#dcd9c9"}} placeholder='Search' />
        }
        <Icon name='ios-search' style={{fontSize: 20, color: 'white'}} />
       </InputGroup>
      </Button>
      <Button transparent>
      <StyleProvider style={getTheme({iconFamily: "MaterialCommunityIcons"})}>
          <Icon name='filter-variant' />
          </StyleProvider>
          </Button>
      </Right>
  </Header>
  </StyleProvider>);
};
const styles=StyleSheet.create({
  "info":
  {
    textAlign:"center",
    textAlignVertical:"center",
    fontFamily:"gotham",
    fontSize:15
  }
})