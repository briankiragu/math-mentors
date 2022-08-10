export interface ITestimonial {
  id: number;
  message: string;
  author: string;
  author_profession: string;
  created_at: string;
  updated_at: null | string;
}

export enum ITestimonialFields {
  author = 'author',
  author_profession = 'author_profession',
  message = 'message',
}
