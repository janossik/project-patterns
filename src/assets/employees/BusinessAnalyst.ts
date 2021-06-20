import { Employee } from "./Employee";

export class BusinessAnalyst extends Employee {
  constructor(skills: string[], benefits: string[]) {
    super();
    this.skills = ["analyzing"].concat(skills);
    this.benefits = ["computer"].concat(benefits);
    this.salary = 60000;
  }
}
