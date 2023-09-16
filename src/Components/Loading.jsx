import React from 'react';
import loadingImg from '../img/loading.png'
import styles from '../style/Loading.module.css'

const Loading = () =>{
    return(
        <div className={styles.loading}>
            <img src={loadingImg} alt="로딩 중"/>
        </div>
    )
}

export default Loading;




