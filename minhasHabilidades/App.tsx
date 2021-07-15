//Pasta src serve para não apagar arquivos importantes do CLI
import React from 'react';
import { StatusBar } from 'react-native';
/* DICA: Ter só uma função Default. 

Quando importar a função não default, utilizar chaves. Permite importar
mais de uma função por arquivo
O auto import funciona melhor com o VS Code
Importar Status bar no Arquivo App pois é o principal/root

*/

import { Home } from './src/paginas/Home';

export default function App() {

  return (
    <>
      <StatusBar barStyle='light-content' />
      <Home />
    </>
  )




}
