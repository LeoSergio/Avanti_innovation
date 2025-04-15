import './App.css'

import Clock from './components/Clock/Clock'
import ContactForm from './components/ContactForm/ContactForm'
import Modal from './components/Modal/Modal'

function App() {

  return (
    <>
      <h1>Relógio</h1>
      <Clock/>
      <hr/>

      <h2>Modal</h2>
      <Modal/>
      <hr/>

      <h2>Formulario</h2>
      <ContactForm/>

    </>
  )
}

export default App
