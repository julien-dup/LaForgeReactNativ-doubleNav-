import React from "react";
import {View , Text} from 'react-native'
import { Avatar } from 'react-native-paper';


const PhoneNumberComponent = () => {
    return (
        <View  style={{flex :0.20 , flexDirection: 'row', alignItems: 'center'}}>
            <Avatar.Icon  icon="phone" style={{size: 16}}/>
            <Text style={{color: 'white', fontSize: 32, marginLeft: '5%'}}>02 45 58 69 35</Text>
        </View>
    )
}

export default PhoneNumberComponent