import { Project } from './project';

export class Job {
  h3: string;
  h4: string;
  text: string;
  class: string;
  projects?: Project[];
  logos?: Project[];
}
