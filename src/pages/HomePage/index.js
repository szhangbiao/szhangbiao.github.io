/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: szhangbiao
 * @Date: 2022-07-10 11:20:26
 * @LastEditors: szhangbiao
 * @LastEditTime: 2022-07-11 13:55:40
 */

import React from 'react';
import styles from './home.module.scss';
import WorkLists from '../../components/WrokList';
import worksData from '../works.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return <div className={styles.wrap}>
        {/* 个人简介 */}
        <section className={styles.brief}>
            <img src={require("../../assets/avatar.jpg")} />
            <h2>Szhangbiao</h2>
            <ul>
                <li>software engineer</li>
                <li>full-stack developer</li>
                <li>sound designer</li>
            </ul>
            <p>I design applications, interactive systems and websites. I love using technology in creative contexts.</p>
            <p>I am a freelancer based in Utrecht, the Netherlands.</p>
            <p>Contact me at szhangbiao@gmail.com</p>
        </section>

        {/* 个人简介 */}
        <section className={styles.work}>
            <div className={styles.title}>
                <h3>A selection of work</h3>
                <p>You can find more in the work overview.</p>
            </div>
            <WorkLists dataSource={worksData.data} />
        </section>
    </div>
}