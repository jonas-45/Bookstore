import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Status = ({ percent }) => (
  <div className="status-wrapper">
    <div className="oval">
      <CircularProgressbar value={percent} text={`${percent}%`} />
    </div>
    <div className="percent-complete">
      <span>
        {percent}
        %
      </span>
      <span className="completed">Completed</span>
    </div>
  </div>
);

Status.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default Status;
