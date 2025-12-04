import React from 'react'

type Props = {
  temperature: number
  setTemperature: (v: number) => void
  maxTokens: number
  setMaxTokens: (v: number) => void
}

const ParametersPanel: React.FC<Props> = ({ temperature, setTemperature, maxTokens, setMaxTokens }) => {
  return (
    <div>
      <div className="mb-3">
        <label className="block text-sm font-medium">Temperature: {temperature.toFixed(1)}</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium">Max Tokens: {maxTokens}</label>
        <input
          type="range"
          min={50}
          max={2000}
          step={50}
          value={maxTokens}
          onChange={(e) => setMaxTokens(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default ParametersPanel
