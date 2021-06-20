import { Agency } from "./Agency";
import { Developer } from "../../assets/employees/Developer";

export class DevAgency extends Agency {
  getStaffMember(skills: string[], benefits: string[]) {
    return new Developer(skills, benefits);
  }
}
