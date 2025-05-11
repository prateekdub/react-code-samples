import React, { Suspense } from 'react';

const wrapPromise = (promise) => {
  let status = 'pending';
  let result;
  const suspender = promise.then(
    res => {
      status = 'success';
      result = res;
    },
    err => {
      status = 'error';
      result = err;
    }
  );
  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    }
  };
};

const delayedContent = wrapPromise(new Promise(resolve => {
  setTimeout(() => resolve("Here is your content after 3s"), 3000);
}));

const Content = () => {
  const data = delayedContent.read();
  return <div>{data}</div>;
};

const CheckSuspense = () => (
  <div>
    <h1>Streaming-like UI</h1>
    <Suspense fallback={<div>Loading main content...</div>}>
      <Content />
    </Suspense>
  </div>
);

export default CheckSuspense;
