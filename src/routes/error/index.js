import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.less';
import { Button } from '../../components';

class ErrorPage extends Component {
  render() {
    let { match } = this.props;
    console.log(match);
    if (match) {

    }
    return (
      <div className={styles.errorpage}>
        <div className={styles.error_img}>Img</div>
        <h1 className={styles.error_title}>Title</h1>
        <p className={styles.error_info}>Info</p>
        <div className={styles.footer}>
          <Button type="primary">返回首页</Button>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
