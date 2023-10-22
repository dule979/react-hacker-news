import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const { isLoading, hits, removeHandler } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {hits.map((story) => {
        console.log(story);
        const { objectID, points, title, url, num_comments, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author}</span> |{' '}
              <span>{num_comments} comments</span>
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noreferrer"
              >
                read more
              </a>
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeHandler(objectID)}
              >
                delete
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
