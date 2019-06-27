import React, { Component } from 'react';
import styles from './index.less';
import logo from '../../assets/logo.png';
import Carousel from '../../components/carousel/index';

const gallery = [
  {
    "id": 1,
    "url": "http://xxx/yyy/zzz",
  },
  {
    "id": 2,
    "url": "http://aaaa/bbbb/cccc",
  },
  {
    "id": 3,
    "url": "http://111/222/3333",
  },
  {
    "id": 4,
    "url": "http://abcd/efg/hijk/lmn",
  },
  {
    "id": 5,
    "url": "http://mm/nn/pp/qq",
  },
  {
    "id": 6,
    "url": "http://mm/nn/pp",
  },
  {
    "id": 7,
    "url": "http://mm/nn/pp",
  },
  {
    "id": 8,
    "url": "http://xxx/yyy/zzz",
  },
  {
    "id": 9,
    "url": "http://aaaa/bbbb/cccc",
  },
  {
    "id": 10,
    "url": "http://111/222/3333",
  },
  {
    "id": 11,
    "url": "http://abcd/efg/hijk/lmn",
  },
  {
    "id": 12,
    "url": "http://mm/nn/pp/qq",
  },
  {
    "id": 13,
    "url": "http://mm/nn/pp",
  },
  {
    "id": 14,
    "url": "http://mm/nn/pp",
  },
  {
    "id": 15,
    "url": "http://mm/nn/pp",
  },
  {
    "id": 16,
    "url": "http://mm/nn/pp",
  },
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
