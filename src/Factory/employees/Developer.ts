import { IWorker } from "./Worker";

export class Developer extends IWorker {
  constructor(skills: string[], benefits: string[]) {
    super();
    this.skills = ["programming"].concat(skills);
    this.benefits = ["computer"].concat(benefits);
    this.salary = 40000;
  }
}
