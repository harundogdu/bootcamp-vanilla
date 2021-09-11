import React, {useState } from 'react'
import data from '../../assets/currency';
import Tbody from '../Tbody';
import Thead from '../Thead';
import styles from './style.module.css'
function Table() {   

    const [title,setTitle] = useState(
        Object.keys(data.currencies[0]).map((i) => i)
    )  

    return (
            <table className={styles.table}>
                <Thead title={title} setTitle={setTitle} />
                <Tbody data={data} title={title} />
            </table>
    )
}

export default Table
