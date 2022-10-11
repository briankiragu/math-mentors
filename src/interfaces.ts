// eslint-disable-next-line no-shadow
export enum ITestimonialFields {
  Name = 'name',
  Title = 'title',
  Quote = 'quote',
}

export interface ITestimonial {
  id?: number;
  quote: string;
  name: string;
  title: string;
  created_at?: string;
  updated_at?: null | string;
}
