

import { View, Text, TouchableOpacity } from "react-native";


const Type3 = ({navigation}) => {
    return (
        <View>
            <Text>bonjour type 3</Text>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
           style={{alignItems: 'center', padding: 10, backgroundColor: 'blue', width: '30%', borderRadius: 20}}
        onPress={() =>
            navigation.navigate("home")
        }
>
    <Text style={{color: 'white'}}>Retour</Text>
</TouchableOpacity>
</View>
        </View>
    )
}

export default Type3