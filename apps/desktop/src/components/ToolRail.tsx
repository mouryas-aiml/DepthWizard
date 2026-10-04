import {
  AccuracyIcon,
  AiReconstructionIcon,
  AnalysisIcon,
  DashboardIcon,
  DatasetIcon,
  ElevationModelIcon,
  ImageInspectorIcon,
  SettingsIcon,
  TerrainIcon,
  UploadIcon,
} from "./icons";

export const SIDEBAR_PAGES = [
  { id: "Dashboard", label: "01 — DepthWizard Overview (Dashboard)", icon: DashboardIcon },
  { id: "Terrain", label: "02 — 3D Terrain Flythrough", icon: TerrainIcon },
  { id: "Dataset", label: "03 — Indian Mountain Dataset", icon: DatasetIcon },
  { id: "Import", label: "04 — Upload & Ingest Imagery", icon: UploadIcon },
  { id: "Inspector", label: "05 — Image Quality & Metadata", icon: ImageInspectorIcon },
  { id: "Reconstruction", label: "06 — Monocular Depth Estimation", icon: AiReconstructionIcon },
  { id: "Accuracy", label: "07 — Accuracy & Residuals", icon: AccuracyIcon },
  { id: "Elevation", label: "08 — Scale Calibration & DSM", icon: ElevationModelIcon },
  { id: "Intelligence", label: "09 — Terrain Analysis Derivations", icon: AnalysisIcon },
  { id: "Settings", label: "10 — Settings", icon: SettingsIcon },
] as const;

export type SidebarPageId = (typeof SIDEBAR_PAGES)[number]["id"];

export function ToolRail({
  active,
  onChange,
  disabledTools,
}: {
  active: string;
  onChange: (tool: string) => void;
  disabledTools?: ReadonlySet<string>;
}) {
  return (
    <nav className="dw-toolrail" aria-label="Workspace tools">
      {SIDEBAR_PAGES.map(({ id, label, icon: ToolIcon }) => {
        const disabled = disabledTools?.has(id) ?? false;
        return (
          <button
            key={id}
            className="dw-tool"
            data-active={active === id}
            title={label}
            aria-label={label}
            disabled={disabled}
            onClick={() => {
              if (!disabled) onChange(id);
            }}
          >
            <span className="dw-tool-icon" aria-hidden="true">
              <ToolIcon />
            </span>
          </button>
        );
      })}
    </nav>
  );
}
