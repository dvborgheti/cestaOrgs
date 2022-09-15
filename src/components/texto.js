import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}){

    let estilo = styles.texto
    if (style?.fontWeight ==='bold'){
        estilo = styles.textoNegrito
    }


    return <Text style={[style, styles]}>{children}</Text>
}

const styles = StyleSheet.create({
    texto:{
        fontFamily:"MontserratRegular",
        fontWeight: 'normal',
    },
    textoNegrito:{
        fontFamily:"MontserratBold",
        fontWeight: 'normal',
    },
})

