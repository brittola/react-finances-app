import InfoOutput from './InfoOutput';
import styles from './styles/Infos.module.css';
import { useSelector } from 'react-redux';

function Infos() {

    let io = useSelector(state => state).io;

    return (
        <section>
            <div className={styles.container}>
                <InfoOutput type="Entradas" icon="income" value={io.incomes.toFixed(2)} />
                <InfoOutput type="Saídas" icon="outcome" value={io.outcomes.toFixed(2)} />
                <InfoOutput type="Total" icon="total" value={io.total.toFixed(2)} />
            </div>
        </section>
    );
}

export default Infos;