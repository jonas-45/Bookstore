import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

export default function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);
  return (
    <div className="category-wrapper">
      <p className="status-display">{status}</p>
      <button type="button" className="check-status-btn" onClick={() => dispatch(checkStatus())}>Check status </button>
    </div>
  );
}
