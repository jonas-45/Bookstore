import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ chapter }) => (
  <div className="progress-wrapper">
    <p className="chapter">CURRENT CHAPTER</p>
    <p className="chapter-title">{chapter}</p>
    <button type="button" className="update-progress-btn">Update progress</button>
  </div>

);

Progress.propTypes = {
  chapter: PropTypes.string.isRequired,
};

export default Progress;
