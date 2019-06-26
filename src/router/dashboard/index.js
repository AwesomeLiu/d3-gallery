import React, { Component } from 'react';
import styles from './index.less';
import logo from '../../assets/logo.png';
import Carousel from '../../components/carousel/index';

const gallery = [
  {
    "url": "http://xxx/yyy/zzz",
  },
  {
    "url": "http://aaaa/bbbb/cccc",
  },
  {
    "url": "http://111/222/3333",
  },
  {
    "url": "http://abcd/efg/hijk/lmn",
  },
  {
    "url": "http://mm/nn/pp/qq",
  },
  {
    "url": "http://mm/nn/pp",
  },
  {
    "url": "http://mm/nn/pp",
  },
  {
    "url": "http://mm/nn/pp",
  },
  {
    "url": "http://mm/nn/pp",
  },
  {
    "url": "http://mm/nn/pp",
  },
  {
    "url": "http://mm/nn/p/oo",
  },
  {
    "url": "http://mm/nn/pp",
  },
  {
    "url": "http://mm/nn/pp",
  },
  {
    "url": "http://mm/nn/pp",
  },
  {
    "url": "http://mm/nn/pp",
  },
  {
    "url": "http://mm/nn/p/oo",
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
        />
      </div>
    );
  }
}

export default Dashboard;
