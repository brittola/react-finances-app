import InfoOutput from './InfoOutput';
import styles from './styles/Infos.module.css';

function Infos(props) {

    return (
        <section className={styles.container}>
            <InfoOutput type="Entradas" icon="income" value={props.incomes.toFixed(2)} />
            <InfoOutput type="Saídas" icon="outcome" value={props.outcomes.toFixed(2)} />
            <InfoOutput type="Total" icon="total" value={props.total.toFixed(2)} />
        </section>
    );
}

export default Infos;