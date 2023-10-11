import { useState, useEffect } from "react";

import styles from './Formulario.module.css';

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [mensagem, setMensagem] = useState('');        

    const calculaIMC = () => {
        
        const imc = (peso / (altura * altura))

        if (imc < 18.5) {                       
            setMensagem(`Seu IMC é ${parseInt(imc)} - Abaixo do peso`);         

        } else if (imc > 18.5 && imc < 25) {
            setMensagem(`Seu IMC é ${parseInt(imc)} - Peso Ideal`);        

        } else if (imc > 25 && imc < 30) {                        
            setMensagem(`Seu IMC é ${parseInt(imc)} - Levemente acima do peso`);  
        
        } else if (imc > 30 && imc < 35) {
            setMensagem(`Seu IMC é ${parseInt(imc)} - Obesidade grau I`);                         

        } else if (imc > 35 && imc < 40) {
            setMensagem(`Seu IMC é ${parseInt(imc)} - Obesidade grau II`);         

        } else if (imc > 40) {
            setMensagem(`Seu IMC é ${parseInt(imc)} - Obesidade grau III`);             
        }        
    }

    return (
        <div className="container">
            <h1 className={styles.h1}>Cálculo do IMC</h1>
            <form>
                <input className={styles.input} required type="number" placeholder="Seu peso (Kg)" onChange={evento => setPeso(evento.target.value)} /><br />
                <input className={styles.input} required type="number" placeholder="Sua altura (m)" onChange={evento => setAltura(evento.target.value)} /><br/>
                <button className={styles.button} type="button" onClick={() => calculaIMC()}> Calcular IMC </button> <br />
            </form>           
            <p className={styles.p}>{mensagem}</p>
        </div>
    )
}

export default Formulario;