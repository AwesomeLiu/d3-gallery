import React, { Component } from 'react';
import styles from './index.less';
import logo from '../../assets/logo.png';
import { Carousel } from '../../components';

const gallery = [
  {
    "id": 1,
    "url": "/gallery/color",
    "cover": require("../../assets/doge.jpg")
  }
];

class Dashboard extends Component {
  render() {
    return (
      <div className={styles.indexpage}>
        <div className={styles.logo_wrapper}>
          <img src={logo} alt="logo" />
        </div>
        <h1 className={styles.title}>D3 Gallery</h1>
        <Carousel
          data={gallery}
          autoplay={false}
        />
        <footer>
          <p>Design By Ryan</p>
        </footer>
      </div>
    );
  }
}

export default Dashboard;
