import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  const { isLoading, page, nbPages, pageHandler } = useGlobalContext();

  return (
    <section className="btn-container">
      <button
        type="button"
        disabled={isLoading}
        onClick={() => pageHandler('dec')}
      >
        prev
      </button>
      <p>{page + 1} / {nbPages}</p>
      <button
        type="button"
        disabled={isLoading}
        onClick={() => pageHandler('inc')}
      >
        next
      </button>

    </section>
  );
};

export default Buttons;
