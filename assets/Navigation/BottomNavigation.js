import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import ContactScreen from '../Screen/ContactScreen';
import HomeScreen from '../Screen/HomeScreen';
import SavoirFaireScreen from '../Screen/SavoirFaireScreen';
import MyStack from './TestStack';

const HomeRoute = () => {    
return (
<HomeScreen />
    )
}

const SavoirFaireRoute = () => {
    return (
        <SavoirFaireScreen />
    )
}

const RealisationsRoute = () => {
    return (
       <MyStack />
    )
}

const ContactRoute = () => {
    return (
        <ContactScreen />
    )
}

const BottomTabsNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'home', icon: 'home', color: 'black' },
    { key: 'savoirFaire', title: 'savoirFaire', icon: 'wrench', color: 'black'},
    { key: 'realisation', title: 'realisations', icon: 'cog', color: 'black'  },
    { key: 'contact', title: 'contact', icon: 'account', color: 'black'  },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    savoirFaire: SavoirFaireRoute,
    realisation: RealisationsRoute,
    contact: ContactRoute,
  });

  return (
    <BottomNavigation
      style={{backgroundColor: 'black'}}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabsNavigation;