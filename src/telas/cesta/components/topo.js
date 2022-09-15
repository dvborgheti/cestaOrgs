import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";

import Texto from "../../../components/texto";
import topo from "../../../../assets/topo.png";

const width = Dimensions.get('screen').width

export default function Topo({titulo}){
  return (
    <View>
      <Image source={topo} style={styles.topo} />
      <Texto style={styles.titulo}>{titulo}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});
