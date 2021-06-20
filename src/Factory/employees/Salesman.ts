import { IWorker } from "./Worker";

export class Salesman extends IWorker {
  constructor(skills: string[], benefits: string[]) {
    super();
    this.skills = ["selling"].concat(skills);
    this.benefits = ["computer"].concat(benefits);
    this.salary = 50000;
  }
}
