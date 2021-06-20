interface IDeveloperTeam {
  analyze: <Type>(specs: Type) => any;
  wirteCode: <Type>(deatailedSPecs: Type) => any;
  test: <Type>(code: Type) => any;
  deploy: <Type>(testedCode: Type) => any;
}

class WebSwBuilderTeam implements IDeveloperTeam {
  constructor() {}
  analyze(specs) {
    //analyze specs...
  }
  wirteCode(deatailedSPecs) {
    //write code...
  }
  test(code) {
    //testing code...
  }
  deploy(testedCode) {
    //deploy tested code...
  }
}

class ProjectMenager {
  buildTeam: IDeveloperTeam;
  constructor(builderTeam: IDeveloperTeam) {
    this.buildTeam = builderTeam;
  }
  buildSoftware(specs) {
    const detailedSpecs = this.buildTeam.analyze(specs);
    const code = this.buildTeam.wirteCode(detailedSpecs);
    const testedCode = this.buildTeam.test(code);
    return this.buildTeam.deploy(testedCode);
  }
}

export class SoftwareHouse {
  createSoftware(specs) {
    let webBuilderTeam = new WebSwBuilderTeam();
    let projectMenager = new ProjectMenager(webBuilderTeam);
    return projectMenager.buildSoftware(specs);
  }
}
