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
   * @name Brian Kariuki <bkariuki@hotmail.com>
   */
  const getTestimonials = async (source: string): Promise<ITestimonial[]> => {
    try {
      // Make the request.
      const response = await fetch(source);

      // Check if the request was successful and return the data.
      if (response.ok) {
        // Get the data from the API.
        const data = await response.text();

        // Return the parsed data.
        return JSON.parse(data.trim());
      }

      // If there was an error, throw an exception.
      throw new Error('Error fetching the testimonials...');
    } catch (error) {
      console.error((error as Error).message);

      // Return an empty array.
      return [
        {
          quote: 'I want to tell you…',
          name: 'Jody Conley',
          title: 'Calculus Teacher',
        },
        {
          quote: 'Brian K is great…',
          name: 'Ted',
          title: 'Business owner',
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
   * @name Brian Kariuki <bkariuki@hotmail.com>
   */
  const setTestimonials = async (): // source: string,
  // testimonials: ITestimonial[]
  Promise<void> => {};

  return { getTestimonials, setTestimonials };
};
