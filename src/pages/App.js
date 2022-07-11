/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: szhangbiao
 * @Date: 2022-07-09 17:07:58
 * @LastEditors: szhangbiao
 * @LastEditTime: 2022-07-11 13:50:55
 */
import React from 'react';
import styles from './App.module.scss';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import WorkPageDetail from './WorkPageDetail';

function App () {
    const location = useLocation();
    console.log('hash', location.hash);
    console.log('pathname', location.pathname);
    console.log('search', location.search);
    return (
        <div className={styles.App}>

            {/* 头部导航 */}
            <header className={styles.header}>
                <div className={styles.box}>
                    <Link to="/"><div className={styles.boxLeft}>VauxLab</div></Link>
                    <div className={styles.boxRight}>
                        <Link to="/"><p className={location.pathname === "/" ? styles.selected : null}>HOME</p></Link>
                        <Link to="/works"><p className={location.pathname === "/works" ? styles.selected : null}>WORKS</p></Link>
                    </div>
                </div>
            </header>

            {/* 内容区 */}
            <section className={styles.content}>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/works" exact element={<WorkPage />} />
                    <Route path="/works/:id" exact element={<WorkPageDetail />} />
                </Routes>
            </section>

            {/* 底部 */}
            <footer className={styles.footer}>
                <p>© <b>2022 szhangbiao</b></p>
                <p>Practice with</p>
            </footer>
        </div>
    );
}

export default App;
