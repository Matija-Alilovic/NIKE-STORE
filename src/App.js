import SideBar from './components/SideBar';
import Header from './components/Header';
import ShoeShowcase from './components/ShoeShowcase';
import Footer from './components/Footer';
import Cart from './components/Cart/Cart';
import styles from './App.module.css';

import { CartProvider } from './context/CartContext.js';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.background}></div>
      <CartProvider>
        <SideBar></SideBar>
        <Header></Header>
        <ShoeShowcase></ShoeShowcase>
        <Footer></Footer>
      </CartProvider>
    </div>
  );
}

export default App;
