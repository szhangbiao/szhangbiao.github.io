import styles from './App.module.scss';
import { Link,Route } from 'react-router-dom';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import WorkPageDetail from './WorkPageDetail';

function App() {
  return (
    <div className={styles.App}>
        {/* 头部导航 */}
        <header className={styles.header}>
          <div className={styles.box}>
            <Link to="/"><div className={styles.boxLeft}>VauxLab</div></Link>
            <div className={styles.boxRight}>
              <Link to="/"><p>HOME</p></Link>
              <Link to="/works"><p>WORKS</p></Link>
            </div>
          </div>
        </header>

        {/* 内容区 */}
        <section className={styles.content}>
          <Route path="/" exact component={ HomePage } />
          <Route path="/works" exact component={ WorkPage } />
          <Route path="/works/:id" exact component={ WorkPageDetail } />
        </section>

        {/* 底部 */}
        <footer className={styles.footer}>
          <p>© <b>2022 Thijs Koerselman</b></p>
          <p>Handmade with</p>
        </footer>
    </div>
  );
}

export default App;
