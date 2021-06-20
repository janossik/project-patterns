import { SoftwareHouse } from "./Factory/SoftwareHouse";
import { RecruitmentAgency } from "./Factory/RecruitmentAgency";

const softwareHouse = new SoftwareHouse();
const recruitmentAgency = new RecruitmentAgency();

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
