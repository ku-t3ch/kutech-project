export interface Project {
  id: string;
  user_created: string;
  date_created: string;
  user_updated?: string;
  date_updated?: string;
  name: string;
  detail?: string;
  cover?: string;
  description?: string;
  release?: string;
}
