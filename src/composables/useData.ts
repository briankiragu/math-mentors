import { ITestimonial } from '@/interfaces';

export default () => {
  /**
   * Return the list of testimonials.
   *
   * @param {string} source The source file to read the testimonials from.
   *
   * @returns {Promise<ITestimonial[]>} List of testimonials.
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  const getTestimonials = async (source: string): Promise<ITestimonial[]> => {
    // Create a variable to hold the testimonials.
    let testimonials: ITestimonial[] = [];

    // Fill the testimonials array with the data from the file.
    testimonials = [
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

    // Return the testimonials array.
    return testimonials;
  };

  return { getTestimonials };
};
