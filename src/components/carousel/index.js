import React, { Component } from 'react';
import styles from './index.less';
import classname from 'classnames';

const carouselOdd = [1, 2, 16, 3, 15, 5, 13, 7, 11, 6, 12, 4, 14, 8, 10];
const carouselEven = [1, 2, 16, 3, 15, 9, 5, 13, 7, 11, 6, 12, 4, 14, 8, 10];

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    let len = this.props.data.length,
        pos = this.setPosition(len);
    this.state = {
      position: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    };
  }
  
  setPosition(counter) {
    if (counter > 5 && (counter - 5) % 2 === 1) {
      return carouselEven.slice(0, counter).sort((a, b) => a - b);
    } else {
      return carouselOdd.slice(0, counter).sort((a, b) => a - b);
    }
  }

  goToPrevPage() {
    let { position } = this.state,
        current = position.shift();

    position.push(current);
    this.setState({
      position: position
    });
  }

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
                <a href={d.url} target="_blank">
                  {
                    <img src={require("../../assets/doge.jpg")} />
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
          title="下一个"
          onClick={() => this.goToNextPage()}
        >
          &gt;
        </span>
      </div>
    );
  }
};