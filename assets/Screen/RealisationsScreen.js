import React from "react";
import {View, ScrollView, ImageBackground, StyleSheet} from 'react-native'
import Header from "../components/Header";
import { Card, Title, Paragraph , Button} from 'react-native-paper';
import realisations from '../json/Realisations.json'

import TitleHomeComponent from "../components/TitleHomeComponent";

const imageBackground = {uri :'https://i.pinimg.com/originals/90/69/19/906919d4901973a2004589bc97805687.jpg'}


const RealisationsScreen = ({navigation}) => {
    return (
        <>
        

        <View style={{flex: 1, }}>
        
            <Header />
            <TitleHomeComponent name='Nos réalisations' />
            <ScrollView >
            <ImageBackground source={imageBackground} >
            <View style={{height: 50}}></View>
            {realisations.map((l, k) => (

                    <Card key={k} style={styles.cardRealisations}>

                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>

                        <View style={{ flex: 2, flexDirection: 'row' , alignContent: 'center', justifyContent: 'center'}}>
                            <Card.Content style={{ flex: 1, }}>
                                <Title style={{fontSize: 22, color: '#ff8800'}} >{l.name}</Title>
                                <Paragraph style={{color: 'white'}} >{l.desc}</Paragraph>
                            </Card.Content>
                        </View >

                        <View style={{ flex: 2 , justifyContent: 'center'}} >
                            <Card.Cover source={{ uri: l.img }} style={{  width: 150, height: 120 ,borderColor: '#ff8800', borderWidth: 2, borderRadius: 10}} />
                        
                        
                            <Card.Actions>
                                <Button
                                mode = 'contained'
                                icon = "chevron-right-circle"
                                contentStyle= {{height: 32, width: 32, color: 'white'}}
                                color = 'white'
                                onPress={() =>
                                    navigation.navigate(l.name)
                                }
                                ></Button>
                            </Card.Actions>
                            </View>
                        



                    </View>
                    </Card>

            ))}
             <View style={{height: 125}}></View>
             </ImageBackground>  
            </ScrollView>
            
      
                    
           

           
              
            
       </View>
    
       </>
    )
}

export default RealisationsScreen


const styles =StyleSheet.create({
    cardRealisations: {
        flex: 1, 
        backgroundColor: 'black' , 
        marginTop: 5 , 
        padding: 10, 
        height: 200, 
        justifyContent: 'center', 
        width: '95%',
        borderColor: '#ff8800', 
        borderWidth: 2, 
        borderRadius: 10,
        marginLeft: '2.5%'
    }
})