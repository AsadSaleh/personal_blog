export interface IApplication {
  appName: string;
  shortDesc: string;
  longDesc: string;
  sourceCodeUrl: string;
  instances: IEnvInstance[];
  techStacks: string[];
  deployment: string;
}

export interface IEnvInstance {
  name: string;
  appUrl: string;
  healthCheckUrl: string;
  healthCheckStatus?: boolean;
}

// TODO:
export enum TechStackList {
  Go,
  JavaScript,
  HTML,
  CSS,
  Java,
  React,
  NextJS,
  RemixRun,
  SCSS,
  jQuery,
  UIKit,
  TailwindCSS,
  BootstrapCSS,
}
