import { Employee } from "./Employee";

export class Salesman extends Employee {
  constructor(skills: string[], benefits: string[]) {
    super();
    this.skills = ["selling"].concat(skills);
    this.benefits = ["computer"].concat(benefits);
    this.salary = 50000;
  }
}
