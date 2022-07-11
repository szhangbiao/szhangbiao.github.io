/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: szhangbiao
 * @Date: 2022-07-10 11:21:14
 * @LastEditors: szhangbiao
 * @LastEditTime: 2022-07-11 11:20:38
 */

import React from 'react';
import styles from './works.module.scss'
import datas from '../works.json'
import WorkLists from '../../components/WrokList'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return <div className={styles.wrap}>
        <div className={styles.title}>
            <h3>My work</h3>
            <p>A collection of different things I have worked on.</p>
        </div>
        <WorkLists dataSource={datas.data} />
    </div>
}
