/* Diagramme générique de pipeline (étapes en chaîne), disposé en grille façon "S"
   pour rester lisible même avec beaucoup d'étapes. Réutilisable pour n'importe
   quel moteur/processus séquentiel. */
export interface PipelineStep {
  title: string;
  sub?: string;
}

export default function PipelineDiagram({ steps, color = "#7c3aed", cols = 4 }: { steps: PipelineStep[]; color?: string; cols?: number }) {
  const boxW = 168, boxH = 60, gapX = 18, gapY = 46, marginX = 16, marginY = 16;
  const rows = Math.ceil(steps.length / cols);
  const width = cols * (boxW + gapX) - gapX + marginX * 2;
  const height = rows * (boxH + gapY) - gapY + marginY * 2;

  const positions = steps.map((_, i) => {
    const row = Math.floor(i / cols);
    const posInRow = i % cols;
    const displayCol = row % 2 === 0 ? posInRow : cols - 1 - posInRow;
    const x = marginX + displayCol * (boxW + gapX);
    const y = marginY + row * (boxH + gapY);
    return { x, y };
  });

  const arrowId = `pipe-arrow-${color.replace("#", "")}`;

  const wrapTitle = (title: string): string[] => {
    const words = title.split(" ");
    const lines: string[] = [];
    let current = "";
    for (const w of words) {
      const next = current ? `${current} ${w}` : w;
      if (next.length > 22 && current) {
        lines.push(current);
        current = w;
      } else {
        current = next;
      }
    }
    if (current) lines.push(current);
    return lines.slice(0, 2);
  };

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="auto" role="img" aria-label="Diagramme du pipeline" style={{ maxWidth: "100%" }}>
      <defs>
        <marker id={arrowId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Flèches entre étapes consécutives */}
      {steps.slice(1).map((_, idx) => {
        const i = idx + 1;
        const prev = positions[i - 1];
        const cur = positions[i];
        const sameRow = Math.floor((i - 1) / cols) === Math.floor(i / cols);
        if (sameRow) {
          const goingRight = cur.x > prev.x;
          const x1 = goingRight ? prev.x + boxW : prev.x;
          const x2 = goingRight ? cur.x : cur.x + boxW;
          const y = prev.y + boxH / 2;
          return <line key={i} x1={x1} y1={y} x2={x2} y2={y} stroke="#94a3b8" strokeWidth="1.4" markerEnd={`url(#${arrowId})`} />;
        }
        const x = prev.x + boxW / 2;
        return <line key={i} x1={x} y1={prev.y + boxH} x2={cur.x + boxW / 2} y2={cur.y} stroke="#94a3b8" strokeWidth="1.4" markerEnd={`url(#${arrowId})`} />;
      })}

      {/* Boîtes d'étapes */}
      {steps.map((step, i) => {
        const { x, y } = positions[i];
        const titleLines = wrapTitle(step.title);
        const titleStartY = step.sub ? y + 21 : y + (titleLines.length > 1 ? 22 : 34);
        return (
          <g key={step.title}>
            <rect x={x} y={y} width={boxW} height={boxH} rx="10" fill={`${color}0d`} stroke={color} strokeWidth="1.2" />
            <text x={x + boxW / 2} y={titleStartY} textAnchor="middle" fontSize="11" fill="#0f172a" fontWeight={700}>
              {titleLines.map((line, li) => (
                <tspan key={li} x={x + boxW / 2} dy={li === 0 ? 0 : 13}>{line}</tspan>
              ))}
            </text>
            {step.sub && (
              <text x={x + boxW / 2} y={y + boxH - 10} textAnchor="middle" fontSize="9" fill="#64748b" fontWeight={500}>
                {step.sub.length > 30 ? step.sub.slice(0, 29) + "…" : step.sub}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
