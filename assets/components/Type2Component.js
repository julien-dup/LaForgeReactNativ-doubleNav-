

import { View, Text , TouchableOpacity, SafeAreaView } from "react-native";
import Header from '../components/Header'


const Type2 = ({navigation}) => {
    return (
        <SafeAreaView>
        <Header />
            <Text>bonjour type 2</Text>
       
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
        </SafeAreaView>
    )
}

export default Type2