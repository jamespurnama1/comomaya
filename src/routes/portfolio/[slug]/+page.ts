import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load: PageLoad = ({ params }) => {
  // if (params.slug === 'hello-world') {
    return {
      title: params.slug,
      desc: '',
      client: '',
      industry: '',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
    };
  // }
 
  // throw error(404, 'Not found');
}
