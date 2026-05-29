'use client'

import { useState } from 'react'
import styles from './Formulario.module.css'

export default function Formulario() {
    const [servico, setServico] = useState('')
    const [estrela, setEstrela] = useState('')
    const [enviado, setEnviado] = useState(false)

    function handleSubmit() {
        if (!servico || !estrela) {
            alert('Preencha todos os campos')
            return
        }
        if (estrela > 5 || estrela < 1) {
            alert('Sua avaliação deve ser entre 1 e 5 estrelas')
            return
        }
        setEnviado(true)
    }

    if (enviado) {
        return (
            <div className={styles.sucesso}>
                <h3>Avaliação de {servico} enviada!</h3>
                <p>Sua Avaliação foi de {estrela} <img src="/star.svg" alt="Estrela" /></p>
                <button onClick={() => setEnviado(false)}>Enviar outra</button>
            </div>
        )
    }

    return (
        <div className={styles.form}>
            <h2>Avaliação de produto, serviço ou experiência</h2>

            <label>O que você irá avaliar</label>
            <input
                type='text'
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                placeholder='Produto, serviço ou experiência'
            />

            <label>Sua Avaliação (1 a 5 estrelas)</label>
            <input
                type='number'
                value={estrela}
                onChange={(e) => setEstrela(e.target.value)}
                placeholder='Quantas estrelas?'
            />

            <button onClick={handleSubmit}>Enviar Avaliação</button>

        </div>
    )
}