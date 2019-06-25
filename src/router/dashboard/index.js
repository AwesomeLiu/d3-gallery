import React, { Component } from 'react';
import styles from './index.less';
import logo from '../../assets/logo.png';

class Dashboard extends Component {
  render() {
    return (
      <div className={styles.indexpage}>
        <div className={styles.logo_wrapper}>
          <img src={logo} alt="logo" />
        </div>
        <h1 className={styles.title}>Frontend Base Environment</h1>
      </div>
    );
  }
}

export default Dashboard;
