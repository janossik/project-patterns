import { Employee } from "../assets/employees/Employee";

export class RecruitmentAgency {
  objConstuctors: object;
  constructor() {
    this.objConstuctors = {};
  }
  register<Type>(role: string, constructor: Type) {
    this.objConstuctors[role] = constructor;
  }
  getStaffMember(role: string, skills: string[], benefits: string[]): Employee {
    let objConstructor = this.objConstuctors[role];
    let member: Employee;
    if (!objConstructor) {
      throw new Error("This occupation has not been registered");
    }
    member = new objConstructor(skills, benefits);
    return member;
  }
}
