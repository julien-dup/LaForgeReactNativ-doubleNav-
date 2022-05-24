import React from "react";
import {Image, View} from 'react-native'

const imageCarte = require('../img/carte.png')

const PlanComponent = () => {
    return (
        <View style={{padding: 10 , backgroundColor: 'none'}}>
       
        <Image source={imageCarte} style={{height: 190, width: '100%' }}></Image>
   
        </View>
        
    )
}

export default PlanComponent