import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../Home/Style';

import { BatLogo } from '../../componentes/BatLogo/BatLogo';
import { BatButton } from '../../componentes/BatButton/BatButton';

export default function Home() {
  return (
    <View style={styles.appContainer}
    >
      <View style={styles.logoContaiener}>
        <BatLogo/>
      </View>

      <View style={styles.inputContainer}>
        <BatButton/>
      </View>
      
      <Text>Olá meu querido pixel 8 S2!</Text>
      <StatusBar style="light" />
    </View>
  );
}
