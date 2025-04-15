import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nome:'',
        email:'',
        mensagem:''
    })


    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
  return (
    <form className={styles.form}>
        <input
        type="text"
        name="nome"
        placeholder="Nome:"
        className={styles.input}
        value={formData.nome}
        onChange={handleChange}
        />
        <input
            type="email"
            name="email"
            placeholder="E-mail:"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
        />

        <textarea
            name="mensagem"
            placeholder="Mensagem:"
            className={styles.textarea}
            value={formData.mensagem}
            onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
            Enviar
        </button>
    </form>
  );
};

export default ContactForm;
