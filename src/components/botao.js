import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "./texto";

export function Button(botao) {
  return (
    <TouchableOpacity style={styles.botao} onPress={() => {}}>
      <Texto style={styles.textoBotao}>{botao}</Texto>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },

  textoBotao: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
