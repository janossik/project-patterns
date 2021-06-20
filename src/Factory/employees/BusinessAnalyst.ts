import { IWorker } from "./Worker";

export class BusinessAnalyst extends IWorker {
  constructor(skills: string[], benefits: string[]) {
    super();
    this.skills = ["analyzing"].concat(skills);
    this.benefits = ["computer"].concat(benefits);
    this.salary = 60000;
  }
}
