import styles from './styles/Outputs.module.css';
import TableRows from './TableRows';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Outputs() {

    let transactions = useSelector(state => state).finances;
    const [filter, setFilter] = useState('all');
    const [filtered, setFiltered] = useState(transactions);

    useEffect(() => {
        switch (filter) {
            case 'all':
                setFiltered(transactions);
                break;
            case 'incomes':
                let incomesFilter = transactions.filter(transaction => transaction.type === 'income');
                setFiltered(incomesFilter);
                break;
            case 'outcomes':
                let outcomesFilter = transactions.filter(transaction => transaction.type === 'outcome');
                setFiltered(outcomesFilter);
                break;
            default:
                break;
        }
    }, [filter, transactions])

    return (
        <section>
            <div className={styles.filters}>
                <span>Filtrar: </span>
                <label>
                    <input onClick={() => setFilter('all')} type="radio" name="filter" defaultChecked /> Todos
                </label>
                <label>
                    <input onClick={() => setFilter('incomes')} type="radio" name="filter" /> Entradas
                </label>
                <label>
                    <input onClick={() => setFilter('outcomes')} type="radio" name="filter" /> Saídas
                </label>
            </div>

            <div className={styles.scrollable}>
                <table className={styles.outputTable}>
                    <thead>
                        <tr>
                            <th>
                                Descrição
                            </th>
                            <th>
                                Valor
                            </th>
                            <th>
                                Tipo
                            </th>
                            <th>Remover</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRows transactions={filtered} />
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Outputs;