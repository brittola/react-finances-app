import styles from './styles/Inputs.module.css';
import { useState } from 'react';
import { addTransaction } from '../actions/financesActions';
import { addIO } from '../actions/ioActions';
import { useDispatch } from 'react-redux';

function Inputs() {

    const dispatch = useDispatch();
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

        dispatch(addTransaction(desc, value, type));

        switch(type) {
            case 'income':
                dispatch(addIO('ADD_INCOME', value));
                break;
            case 'outcome':
                dispatch(addIO('ADD_OUTCOME', value));
                break;
            default:
                break;
        }

        setDesc('');
        setValue('');
    }

    function handleKeypress(e) {
        if (e.key === 'Enter') {
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