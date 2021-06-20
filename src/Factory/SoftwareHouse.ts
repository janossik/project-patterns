import { Employee } from "../assets/employees/Employee";

export class SoftwareHouse {
  employees: Employee[];
  constructor() {
    this.employees = [];
  }
  hireEmployee(employe: Employee) {
    this.employees.push(employe);
  }
}
