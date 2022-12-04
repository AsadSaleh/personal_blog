import CoppiedTooltip from "./CoppiedTooltip";
import type { IEnvInstance } from "~/model/application-model";
import ArrowTopRightIcon from "../atomic/ArrowTopRightIcon";

export default function InstanceBox({
  name,
  appUrl,
  healthCheckStatus,
}: IEnvInstance) {
  function handleCopyAppUrl() {
    navigator.clipboard.writeText(appUrl);
  }

  return (
    <div className="flex items-center justify-between px-2 rounded-lg group">
      <h4 className="text-lg">{name}</h4>
      <div className="flex items-center gap-2">
        <div className="hidden group-hover:block">
          <CoppiedTooltip onClick={handleCopyAppUrl} />
        </div>

        <a
          className="hidden group-hover:flex items-center bg-stone-200 rounded-lg hover:bg-stone-300 py-1 px-2 text-sm"
          target="_blank"
          rel="noreferrer"
          href={appUrl}
        >
          Open App <ArrowTopRightIcon />
        </a>

        <div className="w-24 text-center">
          {healthCheckStatus ? (
            <div className="rounded-lg py-1 bg-green-600 text-white">Live</div>
          ) : (
            <div className="rounded-lg py-1 bg-red-600 text-white">Down!</div>
          )}
        </div>
      </div>
    </div>
  );
}
