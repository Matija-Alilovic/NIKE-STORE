import SideBar from './components/SideBar';
import Header from './components/Header';
import ShoeShowcase from './components/ShoeShowcase';
import Footer from './components/Footer';
import Modal from './components/reusable/Modal';
import styles from './App.module.css';

import { CartProvider } from './context/CartContext.js';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.background}></div>
      <SideBar></SideBar>
      <Header></Header>
      <ShoeShowcase></ShoeShowcase>
      <CartProvider>
        <Footer></Footer>
      </CartProvider>
    </div>
  );
}

export default App;
