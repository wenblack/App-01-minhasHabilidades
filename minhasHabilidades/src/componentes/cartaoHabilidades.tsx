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
    StyleSheet,
    Text,
    TouchableOpacityProps

} from 'react-native';
//Tipando variavel habilidades usado no cartão juntamente com componente
interface CartaoHabilidadesProps extends TouchableOpacityProps {
    habilidades: string
};

export function CartaoHabilidades({ habilidades, ...rest }: CartaoHabilidadesProps) {
    return (
        <TouchableOpacity
            style={styles.botaoHabilidade}
            {...rest}
            activeOpacity={0.7}
        >
            <Text style={styles.titulo}>
                {habilidades}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    titulo: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },

    botaoHabilidade: {
        backgroundColor: '#1F1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },

})
