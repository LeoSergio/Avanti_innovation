import React from 'react'
import './App.css'
import TextComponent from './components/TextComponents'
import { SecondText, ThirdText } from './components/OtherComponents'
import Events from './components/Events'
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent'
import Counter from './components/Counter'
import ProductQuantity from './components/ProductQuantity'
import GithubUser from './components/GithubUser'
// <> </>= fragment, sera usada semppre quando agente não quer um div dentro de outra
function App() {
//Props
  return (
    <> 
      <h1>Contador</h1>
      <p><Counter/></p>
        <hr></hr>

      <h2>Controle de Quantidade do produtos:</h2>
      <ProductQuantity/> {/*Usado para adicionar item ao Carrinho,*/}
                          {/*Para decrementar o processo é parecido*/}
      <hr></hr>
      <h2>Meu componente CSS</h2>
      <MyCSSComponent/>

      <hr></hr>

      <h2>Eventos</h2>
      <Events/>
      {/*
        

        
      
      */}

        <h2>Usuario do Github</h2>
        <GithubUser/>

        <hr></hr>
        {/* contador */}
        <hr></hr>
        <TextComponent text="Meu primmeiro Texto" description = "Descrição do primeiro Texto" />
        <TextComponent text="Meu Segundo Texto" description = "Descrição do segundo Texto" />
        <TextComponent text="Meu terceiro Texto" description = "Descrição do terceiro Texto" />
        <SecondText/>
        <ThirdText/>
        <TextComponent/>
    </>
  )
}

export default App


//jsx é basicammente a mistura de javascript com html
// components facilita na reutilização das function