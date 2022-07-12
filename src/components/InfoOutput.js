import styles from './styles/InfoOutput.module.css'
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";


function InfoOutput(props) {

    function getIcon() {
        switch (props.icon) {
            case 'income':
                return <BsFillArrowUpCircleFill />
            case 'outcome':
                return <BsFillArrowDownCircleFill />
            case 'total':
                return <BsCurrencyDollar />
            default:
                return;
        }
    }

    return (
        <div className={styles.card}>
            <div>
                <h3>{props.type}</h3> <span className={props.icon}>{getIcon()}</span>
            </div>
            <h2 className={props.value < 0 ? styles.negative : ''}>R${props.value}</h2>
        </div>
    );
}

export default InfoOutput;