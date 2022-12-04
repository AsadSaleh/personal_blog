import InstanceBox from "./InstanceBox";
import type { IApplication } from "~/model/application-model";
import ArrowTopRightIcon from "../atomic/ArrowTopRightIcon";

export default function ApplicationInfoBox({
  appName,
  shortDesc,
  longDesc,
  sourceCodeUrl,
  instances,
  techStacks,
  deployment,
}: IApplication) {
  return (
    <div className="p-4 bg-white ">
      <h4 className="text-2xl font-bold">{appName}</h4>
      <p className="text-lg">{shortDesc}</p>
      <p className="mt-0 text-gray-500">{longDesc}</p>
      <div>
        <div className="flex gap-1 mt-2 flex-wrap">
          {techStacks?.map((techStack, index) => (
            <span
              className="bg-slate-200 rounded-lg px-2 py-1 text-xs select-none"
              key={index}
            >
              {techStack}
            </span>
          ))}
          {deployment && (
            <div className="bg-stone-300 rounded-lg px-2 py-1 text-xs select-none">
              🚀&nbsp;{deployment}
            </div>
          )}
          {true && (
            <a
              className="flex items-center justify-center bg-stone-200 rounded-lg hover:bg-stone-300 py-1 px-2 text-xs"
              href={sourceCodeUrl}
              target="_blank"
              rel="noreferrer"
            >
              💻 Go to Source Code&nbsp;
              <ArrowTopRightIcon />
            </a>
          )}
        </div>
      </div>

      {instances.length !== 0 && (
        <div className="mt-2 gap-y-2 grid bg-stone-100 rounded-lg py-2">
          {instances.map((instance, index) => (
            <InstanceBox {...instance} key={index} />
          ))}
        </div>
      )}

      <div className="mt-2 container mx-auto"></div>
    </div>
  );
}
