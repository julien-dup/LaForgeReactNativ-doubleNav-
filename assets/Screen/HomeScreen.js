import React from "react";
import {View, ImageBackground} from 'react-native'
import Header from "../components/Header";
import ImagePresentationComponent from "../components/PresentationImageComponent";
import PresentationTextComponenent from "../components/PresentationText";
import TitleHomeComponent from "../components/TitleHomeComponent";



const HomeScreen = () => {
    return (

        <View style={{flex: 1}}>
            <Header />
            
            <TitleHomeComponent name="Qui somme nous " />
            <ImagePresentationComponent />
            <PresentationTextComponenent />
            
       </View>
    )
}

export default HomeScreen