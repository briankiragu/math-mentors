/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ITestimonial } from '@/interfaces';

export default () => {
  // Request headers
  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  /**
   * Return the list of testimonials from the API.
   *
   * @param {string} endpoint The URL to read the testimonials from.
   *
   * @returns {Promise<ITestimonial[]>} List of testimonials.
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  const getTestimonials = async (endpoint: string): Promise<ITestimonial[]> => {
    try {
      // Make the request.
      const response = await fetch(endpoint, { headers });

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
   * @param {string} endpoint The API endpoint to send the data.
   * @param {ITestimonial[]} testimonials Testimonials to post.
   *
   * @returns {Promise<void>}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  const setTestimonials = async (
    endpoint: string,
    testimonials: ITestimonial[]
  ): Promise<void> => {
    try {
      // Make the request.
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers,
        body: JSON.stringify(testimonials),
      });

      // Check if the request was successful and return the data.
      if (response.ok) {
        // Get the data from the API.
        const data = await response.text();

        // Return the parsed data.
        return JSON.parse(data.trim());
      }

      // If there was an error, throw an exception.
      throw new Error('Error posting the testimonials...');
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return { getTestimonials, setTestimonials };
};
