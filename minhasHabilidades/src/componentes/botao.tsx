/* Introdução:
 Quando usamos Type Script é necessário  tipar os tipos de 
componentes que existem, por isso foi necessário importar o
TouchableOpacityProps e tipar o botao.
Operador ...rest recebe todas as proprieadades de outro elemento
Dica: Usar o ..rest facilita e o código fica mais legível
*/

import React, { useState } from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
    Text
} from 'react-native';

interface BotaoProps extends TouchableOpacityProps {
    title: string
};
//Definindo construtor/propriedade do componente e tipando
export function Botao({ title, ...rest }: BotaoProps) {
    return (
        <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.7}
            //Recebendo propriedades do BotaoProps
            {...rest}
        >
            <Text style={styles.botaoTexto}>{title}</Text>
        </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    botao: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20


    },
    botaoTexto: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },

})

