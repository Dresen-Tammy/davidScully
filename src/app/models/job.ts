import { Project } from './project';

export class Job {
  id: string;
  h3: string;
  h4: string;
  text: string;
  text2?: string;
  class: string;
  projects?: Project[];
  logos?: Project[];
}
