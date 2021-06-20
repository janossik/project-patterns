import { SoftwareHouse } from "./Factory/SoftwareHouse";
import { DevAgency } from "./FactoriesFactory/Agencys/DevAgency";
import { RecruitmentAgencyAbstractFactory } from "./FactoriesFactory/RecruitmentAgencyAbstractFactory";

const softwareHouse = new SoftwareHouse();
const agencyFinder = new RecruitmentAgencyAbstractFactory();

//Register
agencyFinder.register("dev", DevAgency);

//hire employees
const devAgency = agencyFinder.getAgency("dev");

softwareHouse.hireEmployee(
  devAgency.getStaffMember(["C#", "C", "C++"], ["fruity Thursdays"])
);

console.log(softwareHouse.employees[0]);
