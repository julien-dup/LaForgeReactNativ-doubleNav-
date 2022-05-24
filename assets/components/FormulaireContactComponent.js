import React from "react";
import {View , Text, StyleSheet, ImageBackground} from 'react-native'
import { TextInput } from 'react-native-paper';



const FormulaireContactComponent = () => {
    const [text, setText] = React.useState("");
    return (
        <View style={styles.form}>
        
            <View style={{ alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'white'}}>Envoyer nous votre demande</Text>
            </View>
            <View style={{flex: 0.85, flexDirection: 'row' , justifyContent: 'space-around', padding: 10}}>
                <TextInput style={{width: '25%'}}
                label="Nom"
                value={text}
                onChangeText={text => setText(text)}
                />
                <TextInput style={{width: '65%'}}
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
                />
            </View>
            <View style={{flex: 3, padding: 10}}>
                <TextInput style={{flex: 1}}
                label="Votre demande"
                value={text}
                onChangeText={text => setText(text)}
                />
            </View>
        
        </View>
    )
}

export default FormulaireContactComponent

const styles = StyleSheet.create ({
    form: {
        flex: 1,
       
        
    }
})