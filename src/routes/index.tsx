import { component$, $, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const store = useStore<{ content: any, status?: number }>({ content: undefined, status: undefined });
  const makeApiCall = $(async () => {
    const response = await fetch('/api/something', {
      method: 'POST',
    });
    store.content = await response.text();
    store.status = response.status;
  });


  return (
    <>
      <h1>Welcome to Qwik Docs Starter</h1>
      <button onClick$={makeApiCall}>Make API Call</button>
      <div>Status: {store.status}</div>
      <div>Content: {store.content}</div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Docs Starter',
};
