import React from 'react'
import './App.css'
import TextComponent from './components/TextComponents'
import { SecondText, ThirdText } from './components/OtherComponents'
import Events from './components/Events'
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent'
import Counter from './components/Counter'
import ProductQuantity from './components/ProductQuantity'
// <> </>= fragment, sera usada semppre quando agente não quer um div dentro de outra
function App() {
//Props
  return (
    <> 
      <h1>Contador</h1>
      <p><Counter/></p>

      <h2>Controle de Quantidade do produtos:</h2>
      <ProductQuantity/> {/*Usado para adicionar item ao Carrinho,*/}
                          {/*Para decrementar o processo é parecido*/}

      <h2>Meu componente CSS</h2>
      <MyCSSComponent/>


      <h2>Eventos</h2>
      <Events/>
      {/*
        <h1>Contador</h1>
        <counter/>
        <hr></hr>

        controle de quantidade do produto
        <h2>Controle de quantidade do produto</h2>
        <ProductQuantity/>

        <hr></hr>

        <h2>Usuario do Github</h2>

        <GithubUser/>
      
      */}
        {/* contador */}

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