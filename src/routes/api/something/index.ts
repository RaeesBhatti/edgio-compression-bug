import type { RequestHandler } from '@builder.io/qwik-city';

export const onPost: RequestHandler = async ({ json }) => {
    json(200, { url: 'https://google.com' })
};
