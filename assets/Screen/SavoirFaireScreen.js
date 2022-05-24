import React from "react";
import {View} from 'react-native'
import CardSavoirFaireComponent from "../components/CardSavoirFaireComponent";
import Header from "../components/Header";
import TitleHomeComponent from "../components/TitleHomeComponent";


const SavoirFaireScreen = () => {
    return (

        <View style={{flex: 1}}>
            <Header />
            
            <TitleHomeComponent name='Nos savoir faire' />
            <CardSavoirFaireComponent />
            
       </View>
    )
}

export default SavoirFaireScreen