/*Agrupando elementos que ficam fora da VIEW. Não tem impacto
visual
Usar 
<> e </>
Use State: Serve para armazenar/alterar dados no estado além de alterar
dinamicamente o valor em tempo real na tela.
*/
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native';

import { Botao } from '../componentes/botao';
import { CartaoHabilidades } from '../componentes/cartaoHabilidades';
//Interface dos dados Flatlist
interface DadosHabilidade {
    id: string;
    name: string;
}

export function Home() {
    /*primeiro dado do UseState é o estado para consulta, segundo é a função
  que altera o estado */
    const [novaHabilidade, setNovaHabilidade] = useState('');
    //Tipando o array minhas habilades com interface criada . Para tipar utilizar sinal <>
    const [minhasHabilidades, setMinhasHabilidades] = useState<DadosHabilidade[]>([]);
    const [saudacao, setNovaSaudacao] = useState('');

    //Por conveção usar o nome handle pra função quando envolve interação do Usuário
    function handleAddHabilidade() {

        const data = {
            id: String(new Date().getTime()),
            name: novaHabilidade
        }

        /*Atualizando estado do App utilizando função 
        Usar o  spread ... para não gerar dois arrays e puxar os valores do array atual
        Outra forma de declarar função 
        setNovaHabilidade([...estadoAtual, novaHabilidade]);
        */
        setMinhasHabilidades(estadoAtual => [...estadoAtual, data]);

    }

    /*hook executado por padrão quando a tela renderiza, ao colocar 
      a depenencia entre [], ele é executado naquele momento */
    useEffect(() => {
        const horaAtual = new Date().getHours();
        if (horaAtual < 12) {
            setNovaSaudacao('Bom Dia!')
        }
        else if (horaAtual >= 12 && horaAtual < 18) {
            setNovaSaudacao('Boa Tarde!')
        } else {
            setNovaSaudacao('Boa Noite!')
        }

    }, [])

    return (
        //Serve para colocar o conteúdo da View fora do entalhe no IOS
        <SafeAreaView style={styles.container}>

            <Text style={styles.titulo}>Bem Vindo, Wender!</Text>
            <Text style={styles.saudacao}>
                {saudacao}
            </Text>


            <TextInput
                style={styles.formulario}
                placeholder="Nova Habilidade"
                placeholderTextColor="#555"
                onChangeText={setNovaHabilidade}
            />

            <Text style={[styles.titulo, { marginVertical: 50 }]}>
                Minhas Habilidades
            </Text>


            <Botao
                onPress={handleAddHabilidade}
                title="Adicionar"
            />

            <FlatList

                data={minhasHabilidades}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CartaoHabilidades
                        habilidades={item.name} />

                )}
            />


        </SafeAreaView >


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

    botaoHabilidade: {
        backgroundColor: '#1F1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textHabilidades: {
        color: '#fff',
        padding: 15,
        fontSize: 22,
        fontWeight: 'bold',
    },

    saudacao: {
        color: '#fff'
    }
})
