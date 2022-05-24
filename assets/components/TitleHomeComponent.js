import React from "react";
import {View, Text} from 'react-native'

const TitleHomeComponent = (props) => {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
            <Text style={{fontSize: 24, color: 'white'}}>{props.name}</Text>
        </View>
    )
}

export default TitleHomeComponent