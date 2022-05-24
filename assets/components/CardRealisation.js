import React from 'react';
import { Card, Title, Paragraph  } from 'react-native-paper';
import { View } from 'react-native'
import realisations from '../json/Realisations.json'


const imageBackground = {uri :'https://img.glyphs.co/img?q=85&w=900&src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL2Jsb2ctaW1hZ2VzL1JXVFMtSW1hZ2UtMDIuanBnP210aW1lPTIwMTkwNjA0MTQ1NzE4'}


const CardRealisation = () => {

return (

  realisations.map((l, k) => (

    <Card key={k} style={{ flex: 1, backgroundColor: 'purple' , marginTop: 5 , padding: 10}}>

      <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Card.Content style={{ flex: 1, }}>
            <Title style={{fontSize: 24, color: '#ff8800'}}>{l.name}</Title>
            <Paragraph  >{l.desc}</Paragraph>
          </Card.Content>
        </View >

        <View style={{ flex: 1 }} >
          <Card.Cover source={{ uri: l.img }} style={{ flex: 1, width: 135, height: 90 }} />
        </View>



      </View>
    </Card>
    
  ))
  
)
  };

export default CardRealisation