import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Texto from '../../components/texto'

import Topo from "./components/topo";
import Detalhes from "./components/detalhes";
import Item from "./components/item";


export function Cesta({topo,detalhes, itens}){
  return (
    <View>

<FlatList
       data={itens.lista}
        renderItem={Item}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent ={()=>{
         return<>
            <Topo {...topo}/>
            <View style={styles.cesta}>
            <Detalhes {...detalhes} />
            <Texto style={styles.titulo}>{itens.titulo}</Texto>
            
        </View>
          </>
        }}
        ></FlatList>

        

        
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },

  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
