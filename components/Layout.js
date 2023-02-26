import { useState } from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.drawer}
        style={{ width: isDrawerOpen ? '250px' : '0' }}
      >
        Drawer Sidebar
      </div>
      <div className={styles.content}>
        <button onClick={toggleDrawer}>Toggle Drawer</button>
        {children}
      </div>
    </div>
  );
};

export default Layout;