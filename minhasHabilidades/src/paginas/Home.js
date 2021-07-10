/*Agrupando elementos que ficam fora da VIEW. Não tem impacto
visual
Usar 
<> e </>
*/
import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity

} from 'react-native';

export function Home() {

    return (
        //Serve para colocar o conteúdo da View fora do entalhe no IOS
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Bem Vindo, Wender!</Text>
            <TextInput
                style={styles.formulario}
                placeholder="Nova Habilidade"
                placeholderTextColor="#555"
            />
            <TouchableOpacity
                style={styles.botao}
                activeOpacity={0.7}
            >
                <Text style={styles.botaoTexto}> Adicionar</Text>
            </TouchableOpacity>
            <Text style={[styles.titulo, { marginTop: 50 }
            ]}>Minhas Habilidades:</Text>
        </SafeAreaView>


    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 70,
        backgroundColor: '#121015',
    },
    titulo: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    formulario: {
        backgroundColor: '#1F1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    botao: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,


    },
    botaoTexto: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },

})
