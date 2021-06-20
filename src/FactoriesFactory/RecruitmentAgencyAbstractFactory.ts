import { Agency } from "./Agencys/Agency";

export class RecruitmentAgencyAbstractFactory {
  agencyFactories: object;
  constructor() {
    this.agencyFactories = {};
  }
  register<Type>(area: string, agencyFactorie: Type) {
    this.agencyFactories[area] = agencyFactorie;
  }
  getAgency(area: string) {
    return new this.agencyFactories[area]();
  }
}
