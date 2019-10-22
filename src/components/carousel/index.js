import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.less';
import classname from 'classnames';

// 位置优先级
// 位置由数字 1 - 16 表示，排列顺序为从正中间开始逆时针旋转一周的排列顺序
const carouselOdd = [1, 2, 16, 3, 15, 5, 13, 7, 11, 6, 12, 4, 14, 8, 10];
const carouselEven = [1, 2, 16, 3, 15, 9, 5, 13, 7, 11, 6, 12, 4, 14, 8, 10];

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    let { data } = this.props,
        pos = this.setPosition(data.length);
    this.state = {
      position: pos
    };
  }

  componentDidMount() {
    let { autoplay, duration } = this.props;
    if (typeof autoplay === 'boolean' && autoplay) {
      this.carouselInterval = setInterval(() => this.goToNextPage(), duration || 3000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }
  
  setPosition(counter) {
    if (counter > 5 && (counter - 5) % 2 === 1) {
      return carouselEven.slice(0, counter).sort((a, b) => a - b);
    } else {
      return carouselOdd.slice(0, counter).sort((a, b) => a - b);
    }
  }

  // 逆时针
  goToPrevPage() {
    let { position } = this.state,
        current = position.shift();

    position.push(current);
    this.setState({
      position: position
    });
  }

  // 顺时针
  goToNextPage() {
    let { position } = this.state,
        current = position.pop();

    position.unshift(current);
    this.setState({
      position: position
    });
  }

  render() {
    const { position } = this.state;
    const { data } = this.props;

    return (
      <div className={styles.carousel}>
        <span 
          className={classname({
            [styles.arrow]: true,
            [styles.arrow_left]: true
          })}
          title="上一个"
          onClick={() => this.goToPrevPage()}
        >
          &lt;
        </span>
        <ul>
          {
            data.map((d, index) =>
              <li key={d.id} className={styles[`li-${position[index]}`]}>
                <Link to={d.url} target="_blank">
                  <img src={d.cover} />
                </Link>
              </li>
            )
          }
        </ul>
        <span 
          className={classname({
            [styles.arrow]: true,
            [styles.arrow_right]: true
          })}
          title="下一个"
          onClick={() => this.goToNextPage()}
        >
          &gt;
        </span>
      </div>
    );
  }
};