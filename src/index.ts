import { SoftwareHouse } from "./Factory/SoftwareHouse";
import { RecruitmentAgency } from "./Factory/RecruitmentAgency";
import { Developer } from "./Factory/employees/Developer";
import { BusinessAnalyst } from "./Factory/employees/BusinessAnalyst";
import { Salesman } from "./Factory/employees/Salesman";

const softwareHouse = new SoftwareHouse();
const recruitmentAgency = new RecruitmentAgency();
//Register
recruitmentAgency.register("dev", Developer);
recruitmentAgency.register("ba", BusinessAnalyst);
recruitmentAgency.register("sale", Salesman);

//hire employees
softwareHouse.hireEmployee(
  recruitmentAgency.getStaffMember(
    "dev",
    ["C#", "C", "C++"],
    ["fruity Thursdays"]
  )
);
console.log(softwareHouse);
softwareHouse.hireEmployee(
  recruitmentAgency.getStaffMember("ba", ["python"], ["free fridays"])
);
console.log(softwareHouse);
softwareHouse.hireEmployee(
  recruitmentAgency.getStaffMember("sale", ["charisma"], ["5% of the profit"])
);
console.log(softwareHouse);
