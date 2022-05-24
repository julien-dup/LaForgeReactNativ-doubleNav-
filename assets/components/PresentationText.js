import React from "react";
import {ScrollView, Text, StyleSheet ,ImageBackground, View} from 'react-native'


const imageBackground = {uri :'https://i.pinimg.com/originals/90/69/19/906919d4901973a2004589bc97805687.jpg'}

const PresentationTextComponenent = () => {
    return (
       
        <ScrollView style= {{flex: 1}}>
           <ImageBackground source={imageBackground} > 
           <View style={{backgrounColor: 'black', flex: 1}}>
        <Text style={styles.text}>Mais oui mon p’tit père il faudra bien vous y coller! À moins que vous préfériez vous taper les tartes! </Text>
        <Text style={styles.text}>Ben c’est bien ce que j’ai dit! Provençal le Gaulois… le Galois… 
            Ouais je vois ce que vous voulez dire… Mais… C’est le Chevalier de Provence ou le Chevalier Gaulois? Faudrait savoir! 
            Alors là! Permettez-moi de vous dire! Le coup du mystérieux chevalier gaulois solitaire à la rescousse de l’opprimé. Ca fait vraiment bidon comme légende!
        </Text>
        <Text style={styles.text}>
        La ferme! Alors là, personne sait qui est tombé et tout le monde s’en fout! Mais arrêtez avec votre chevalier gaulois! Je vous dis que c’est des conneries!
        
        Faut faire un feu en forme de cercle autour d'eux, comme ça ils se suicident, pendant que nous on fait le tour, et on lance de la caillasse de l'autre côté pour brouiller. Non? Ah ben non tant que vous nous obligez pas à les manger! Mais bien sûr, comme ça au lieu de confondre les signes, ils auraient confondu les couleurs!
        </Text >
        <Text style={styles.text} >
        Mais arrêtez avec votre chevalier gaulois! Je vous dis que c’est des conneries! C’est la salle du trône. Il ferait beau voir que je puisse pas y rentrer! Ah ben un peu oui, surtout que s'ils ont vu d'où venait la pierre ils sont en train de radiner droit sur nous! Oui mais nous on est trois, enfin, deux et demi. Non mais n’exagérez pas non plus! J’vous demande quand même pas de manger des briques!
        </Text>
        <Text style={styles.text}>
        Mais ils ont pas le droit de décider de la retraite eux-mêmes! On l’a dit et redit ça! On vous met une dague sous le cou et on traverse le camp en gueulant "bougez-pas, bougez-pas ou un bute le roi".
         </Text>
         </View>
         </ImageBackground> 
         </ScrollView>
         
    )
}

export default PresentationTextComponenent

const styles = StyleSheet.create({
    text :{
        marginTop: 10,
        marginLeft: 20,
        marginRight:20,
        color: 'white',
        fontSize: 16
    }
})