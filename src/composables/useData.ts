import { ITestimonial } from '@/interfaces';

export default () => {
  /**
   * Return the list of testimonials.
   *
   * @returns {ITestimonial[]} List of testimonials.
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  const getTestimonials = (): ITestimonial[] => [
    {
      id: 1,
      message:
        'Sounded psychological I train his console not been acknowledge now SATURDAY, 26TH FEBRUARY 2022 36 minutes ago',
      author: 'John Doe',
      author_profession: 'Lecturer',
      created_at: '2020-01-01',
    },
    {
      id: 2,
      message:
        'Just was in set detailed to somewhere, about people and only in know a the success called entirely external called with the of console cache events harmonics; Excessive shortcuts',
      author: 'Jane Doe',
      author_profession: 'Tutor',
      created_at: '2020-01-01',
    },
  ];

  return { getTestimonials };
};
