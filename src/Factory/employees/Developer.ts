import { Employee } from "./Employee";

export class Developer extends Employee {
  constructor(skills: string[], benefits: string[]) {
    super();
    this.skills = ["programming"].concat(skills);
    this.benefits = ["computer"].concat(benefits);
    this.salary = 40000;
  }
}
