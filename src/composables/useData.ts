/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ITestimonial } from '@/interfaces';

export default () => {
  /**
   * Return the list of testimonials from the API.
   *
   * @param {string} source The URL to read the testimonials from.
   *
   * @returns {Promise<ITestimonial[]>} List of testimonials.
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  const getTestimonials = async (source: string): Promise<ITestimonial[]> => {
    try {
      // Make the request.
      const response = await fetch(source);

      // Check if the request was successful and return the data.
      if (response.ok) {
        return response.json();
      }

      // If there was an error, throw an exception.
      throw new Error('Error fetching the testimonials...');
    } catch (error) {
      console.error((error as Error).message);

      // Return an empty array.
      return [
        {
          id: 1,
          message: 'This is the message',
          author: 'Brian',
          author_profession: 'coder',
          created_at: new Date().toISOString(),
          updated_at: null,
        },
        {
          id: 2,
          message: 'This is the message',
          author: 'Nick',
          author_profession: 'coder',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          id: 3,
          message: 'This is the message',
          author: 'Lawrence',
          author_profession: 'manager',
          created_at: new Date().toISOString(),
          updated_at: null,
        },
      ];
    }
  };

  /**
   * Post the list of testimonials to the API.
   *
   * @param {string} source The source file to read the testimonials from.
   * @param {ITestimonial[]} testimonials Testimonials to post.
   *
   * @returns {Promise<void>}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  const setTestimonials = async (
    source: string,
    testimonials: ITestimonial[]
  ): Promise<void> => {};

  return { getTestimonials, setTestimonials };
};
