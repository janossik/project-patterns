import { BusinessAnalyst } from "./employees/BusinessAnalyst";
import { Developer } from "./employees/Developer";
import { Salesman } from "./employees/Salesman";

type TypeRoles = "dev" | "sale" | "ba";

export class RecruitmentAgency {
  getStaffMember(role: TypeRoles, skills: string[], benefits: string[]) {
    switch (role.toLocaleLowerCase()) {
      case "dev":
        return new Developer(skills, benefits);
      case "sale":
        return new Salesman(skills, benefits);
      case "ba":
        return new BusinessAnalyst(skills, benefits);
      default:
        throw new Error(`There are no vacancies for the position of a ${role}`);
    }
  }
}
