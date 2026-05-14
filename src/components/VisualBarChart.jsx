export default function VisualBarChart({ data, labelKey, valueKey, color, formatValue }) {
  const max = Math.max(...data.map(d => d[valueKey]), 1)

  return (
    <div className="bar-chart">
      {data.map((item, i) => (
        <div key={i} className="bar-row">
          <div className="bar-label">{item[labelKey]}</div>
          <div className="bar-track">
            <div
              className="bar-fill"
              style={{
                width: `${(item[valueKey] / max) * 100}%`,
                backgroundColor: color || '#2563eb',
              }}
            />
          </div>
          <div className="bar-value">
            {formatValue ? formatValue(item[valueKey]) : item[valueKey].toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  )
}
