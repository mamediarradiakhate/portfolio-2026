/* Comparaison des deux pipelines : Machine Learning classique vs Deep Learning (CNN). */
export default function MLvsCNNDiagram({ color = "#db2777" }: { color?: string }) {
  const boxW = 220, boxH = 46, gapY = 34;
  const leftX = 20, rightX = 300;
  const startY = 46;

  const mlSteps = ["Image", "Extraction de caractéristiques", "SVM / KNN", "Classe prédite"];
  const cnnSteps = ["Image", "Convolutions + Pooling", "Couches neuronales", "Classe prédite"];

  const renderChain = (steps: string[], x: number, arrowId: string) => (
    <g>
      {steps.map((s, i) => {
        const y = startY + i * (boxH + gapY);
        const highlight = i === 0 || i === steps.length - 1;
        return (
          <g key={s}>
            <rect x={x} y={y} width={boxW} height={boxH} rx="10" fill={highlight ? "#f8fafc" : `${color}0d`} stroke={highlight ? "#e2e8f0" : color} strokeWidth={1.2} />
            <text x={x + boxW / 2} y={y + boxH / 2 + 4} textAnchor="middle" fontSize="11.5" fill={highlight ? "#64748b" : "#0f172a"} fontWeight={highlight ? 600 : 700}>{s}</text>
            {i < steps.length - 1 && (
              <line x1={x + boxW / 2} y1={y + boxH} x2={x + boxW / 2} y2={y + boxH + gapY} stroke="#94a3b8" strokeWidth="1.2" markerEnd={`url(#${arrowId})`} />
            )}
          </g>
        );
      })}
    </g>
  );

  const totalHeight = startY + mlSteps.length * (boxH + gapY);

  return (
    <svg viewBox={`0 0 540 ${totalHeight + 10}`} width="100%" height="auto" role="img" aria-label="Comparaison Machine Learning classique et Deep Learning (CNN)" style={{ maxWidth: "100%" }}>
      <defs>
        <marker id="mlcnn-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" />
        </marker>
      </defs>

      <text x={leftX + boxW / 2} y="18" textAnchor="middle" fontSize="12.5" fontWeight={800} fill="#0f172a">Machine Learning classique</text>
      <text x={rightX + boxW / 2} y="18" textAnchor="middle" fontSize="12.5" fontWeight={800} fill={color}>Deep Learning (CNN)</text>

      {renderChain(mlSteps, leftX, "mlcnn-arrow")}
      {renderChain(cnnSteps, rightX, "mlcnn-arrow")}
    </svg>
  );
}
