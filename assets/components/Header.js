import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={{backgroundColor: 'black'}}>
      <Appbar.Content title="La Forge Normande" style={{marginLeft: '25%'}}/>
    </Appbar.Header>
  );
};

export default Header;