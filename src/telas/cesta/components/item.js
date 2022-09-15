import { View, Image, StyleSheet, FlatList } from "react-native";

import Texto from "../../../components/texto";

export default function Item({item: {nome, imagem}}) {
  return  <View  style={styles.item}>
      <Image source={imagem} style={styles.imagem} />
      <Texto style={styles.nome}>{nome}</Texto>
    </View>

}

const styles = StyleSheet.create({

  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    alignItems: "center",
    marginHorizontal:16,
    paddingVertical:16,
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
