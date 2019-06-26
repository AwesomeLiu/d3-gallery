import React, { Component } from 'react';
import styles from './index.less';
import classname from 'classnames';

export default class Carousel extends Component {
  componentDidMount() {
    document
  }  

  render() {
    const { data } = this.props;

    return (
      <div className={styles.carousel}>
        <span 
          className={classname({
            [styles.arrow]: true,
            [styles.arrow_left]: true
          })}
        >
          &lt;
        </span>
        <ul>
          {
            data.map((d, index) =>
              <li key={index}>
                <a href={d.url} target="_blank">
                  {
                    d.cover ? <img src={d.cover} /> : <h1>{index + 1}</h1>
                  }
                </a>
              </li>
            )
          }
        </ul>
        <span 
          className={classname({
            [styles.arrow]: true,
            [styles.arrow_right]: true
          })}
        >
          &gt;
        </span>
      </div>
    );
  }
};