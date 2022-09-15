import { SafeAreaView, StatusBar, View } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading'

import { Cesta } from "./src/telas/cesta";
import mock from './src/mocks/cesta'

export default function App() {
   
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if (!fonteCarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
