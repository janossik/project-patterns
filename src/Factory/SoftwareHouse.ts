export class SoftwareHouse {
  employees: any;
  constructor() {
    this.employees = [];
  }
  hireEmployee(employe: any) {
    this.employees.push(employe);
  }
}
