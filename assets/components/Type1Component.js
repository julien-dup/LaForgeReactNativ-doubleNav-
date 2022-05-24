
import { View, Text, TouchableOpacity , SafeAreaView} from "react-native";
import Header from "./Header";


const Type1 = ({navigation}) => {
    return (
        <SafeAreaView>
        <Header />
       
            <Text>Tst oh oug ou oùgm </Text>
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

export default Type1