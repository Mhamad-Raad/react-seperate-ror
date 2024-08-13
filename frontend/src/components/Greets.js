import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingsSlice';

const Greeting = () => {
  const greetingShow = useSelector((state) => state.greetings.message);
  const status = useSelector((state) => state.greetings.status);
  const dispatch = useDispatch();
  let content;
  if (status === 'succeeded') {
    content = greetingShow;
  }

  return (
    <>
      <h1>Random Greeting: {content}</h1>
      <button type='button' onClick={() => dispatch(fetchGreeting())}>
        generate new
      </button>
    </>
  );
};

export default Greeting;
