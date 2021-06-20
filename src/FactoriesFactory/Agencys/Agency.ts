import { Employee } from "../../assets/employees/Employee";
export abstract class Agency {
  abstract getStaffMember(skills: string[], benefits: string[]): Employee;
}
