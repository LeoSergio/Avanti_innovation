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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Formulario Enviado', formData)
        alert("mensagem enviada com sucesso")
        setFormData({nome:"", email:"", mensagem:""})
    }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input
        type="text"
        name="nome"
        placeholder="Nome:"
        className={styles.input}
        value={formData.nome}
        onChange={handleChange}
        required='True'
        />
        <input
            type="email"
            name="email"
            placeholder="E-mail:"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required='True'
        />

        <textarea
            name="mensagem"
            placeholder="Mensagem:"
            className={styles.textarea}
            value={formData.mensagem}
            onChange={handleChange}
            required='True'
        />
        <button type="submit" className={styles.button}>
            Enviar
        </button>
    </form>
  );
};

export default ContactForm;
