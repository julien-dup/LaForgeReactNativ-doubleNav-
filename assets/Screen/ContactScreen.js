import React from "react";
import {View, ImageBackground} from 'react-native'
import FormulaireContactComponent from "../components/FormulaireContactComponent";
import Header from "../components/Header";
import PhoneNumberComponent from "../components/PhoneNumberComponent";
import PlanComponent from "../components/PlanComponent";
import TitleHomeComponent from "../components/TitleHomeComponent";

const imageBackground = {uri :'https://i.pinimg.com/originals/90/69/19/906919d4901973a2004589bc97805687.jpg'}

const ContactScreen = () => {
    return (

        <View style={{flex: 1}}>
            <Header />
            <ImageBackground source={imageBackground} style={{flex: 1}} >
            <TitleHomeComponent name='Nous contacter' />
            <PlanComponent />
            <PhoneNumberComponent />
            <FormulaireContactComponent />
            </ImageBackground>
       </View>
    )
}

export default ContactScreen