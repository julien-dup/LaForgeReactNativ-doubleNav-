import  React from 'react';
import { ScrollView, View, ImageBackground } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import DataSavoirFaire from '../json/SavoirFaire.json'

const imageBackground = {uri :'https://i.pinimg.com/originals/90/69/19/906919d4901973a2004589bc97805687.jpg'}



const CardSavoirFaireComponent = () => (

    <ScrollView >
      <ImageBackground source={imageBackground} style={{alignItems: 'center'}} >
      <View style={{height: 50}}></View>
        {DataSavoirFaire.map((l, k) => (
  <Card key={k} style={{borderColor: '#ff8800', borderWidth: 2, borderRadius: 10, marginTop: 10, backgroundColor: 'black', width: '80%'}}>
    
    <View style={{alignItems: 'center', padding: 10}}>
    <Card.Cover source={{ uri: l.img }} style={{width : '80%',borderColor: '#ff8800', borderWidth: 2, borderRadius: 10, marginTop: 10}} />
    </View>
    <Card.Content>
      <View style={{alignItems: 'center'}}>
      <Title style={{fontSize: 24, color: '#ff8800'}}>{l.title}</Title>
      </View>
      <Paragraph style={{color: 'white'}}>{l.desc}</Paragraph>
    </Card.Content>
   
  </Card>
    ))}
    <View style={{height: 125}}></View>
    </ImageBackground>
  </ScrollView>
);

export default CardSavoirFaireComponent

