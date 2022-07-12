import styles from './styles/Inputs.module.css';
import { useState } from 'react';

function Inputs(props) {

    const [desc, setDesc] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState('income');

    function handleAdd() {

        if (desc === '') {
            alert('Preencha todos os campos.');
            return;
        }

        if (value === 0 || value < 0 || value === '') {
            alert('Insira um valor corretamente.');
            return;
        }

        props.addTransaction(desc, value, type);

        setDesc('');
        setValue('');
    }

    function handleKeypress(e) {
        if(e.key === 'Enter'){
            handleAdd();
        }
    }

    return (
        <section className={styles.inputs}>
            <label>
                <span>Descrição</span>
                <input onChange={(e) => { setDesc(e.target.value) }} onKeyPress={(e) => handleKeypress(e)} type="text" value={desc} maxLength="40" />
            </label>
            <label>
                <span>Valor</span>
                <input onChange={(e) => setValue(Number(e.target.value))} onKeyPress={(e) => handleKeypress(e)} type="number" value={value} placeholder="R$" min={0} />
            </label>
            <div>
                <label>
                    <input onClick={() => { setType('income') }} type="radio" name="transactionType" defaultChecked />Entrada
                </label>
                <label>
                    <input onClick={() => { setType('outcome') }} type="radio" name="transactionType" />Saída
                </label>
            </div>
            <button onClick={handleAdd}>Adicionar</button>
        </section>
    );
}

export default Inputs;