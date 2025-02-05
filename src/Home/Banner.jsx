import React from 'react';
import PropTypes from 'prop-types';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import GitHubButton from 'react-github-button';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'left';
}

export default function Banner({ onEnterChange }) {
  return (
    <section className="page banner-wrapper">
      <ScrollElement
        className="page"
        id="banner"
        onChange={({ mode }) => onEnterChange(mode)}
        playScale={0.9}
      >
        <QueueAnim className="banner-text-wrapper" type={typeFunc} delay={300} key="banner">
          
          <h2 key="h2">David Bundo</h2>
          <h3 className='text--secondary'>Tarotista</h3>
          
          <p key="content">
            Amarres de amor | Tarot online | Problemas de dinero
          </p>
          <span className="line" key="line" />

          <div key="button1" className="start-button clearfix flex gap-5">
            <a>
              Haz tu consulta
            </a>
            <a>
              Testimonios
            </a>
          </div>
          
        </QueueAnim>
        <Icon type="down" className="down" />
      </ScrollElement>
    </section>
  );
}
Banner.propTypes = {
  onEnterChange: PropTypes.func,
};
