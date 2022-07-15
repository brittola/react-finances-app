import { BsTrashFill } from 'react-icons/bs';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../actions/financesActions';
import { deleteIO } from '../actions/ioActions';

function TableRows(props) {

    const dispatch = useDispatch();

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

    function handleDelete(transaction) {
        dispatch(deleteTransaction(transaction.id));

        switch(transaction.type) {
            case 'income':
                dispatch(deleteIO('DELETE_INCOME', transaction.value));
                break;
            case 'outcome':
                dispatch(deleteIO('DELETE_OUTCOME', transaction.value));
                break;
            default:
                break;
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
                        <BsTrashFill className="pointer" onClick={() => { handleDelete(transaction) }} />
                    </td>
                </tr>
            )
        })
    );
}

export default TableRows;
