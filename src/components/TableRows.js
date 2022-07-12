import { BsTrashFill } from 'react-icons/bs';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function TableRows(props) {

    function getIcon(type) {
        switch (type) {
            case 'income':
                return <BsFillArrowUpCircleFill />
            case 'outcome':
                return <BsFillArrowDownCircleFill />
            default:
                return;
        }
    }

    return (
        props.transactions.map(transaction => {
            return (
                <tr id={transaction.id} key={transaction.id}>
                    <td>
                        {transaction.desc}
                    </td>
                    <td>
                        R${transaction.value.toFixed(2)}
                    </td>
                    <td className={transaction.type === 'income' ? 'income' : 'outcome'}>
                        {getIcon(transaction.type)}
                    </td>
                    <td>
                        <BsTrashFill className="pointer" onClick={() => { props.deleteTransaction(transaction.id) }} />
                    </td>
                </tr>
            )
        })
    );
}

export default TableRows;
