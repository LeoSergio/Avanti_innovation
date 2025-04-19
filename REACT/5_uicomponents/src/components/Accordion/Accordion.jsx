import { useState } from 'react'
import styles from "./Accordion.module.css"

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const items = [
    { question: "O que é React:", answer: "React é uma biblioteca JavaScript para criar interfaces de usuário." },
    { question: "O que é Hook:", answer: "Hooks são funções que permitem usar estado e outras funcionalidades do React em componentes funcionais." },
    { question: "O que é useState:", answer: "useState é um Hook que permite adicionar estado a componentes funcionais." }
  ]

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={`${styles.item} ${activeIndex === index ? styles.open : ""}`}>
          <button className={styles.button} onClick={() => toggleAccordion(index)}>
            {item.question}
          </button>
          {activeIndex === index && <p className={styles.answer}>{item.answer}</p>}
        </div>
      ))}
    </div>
  )
}

export default Accordion
