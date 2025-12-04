import React from 'react'

type Props = {
  model: string
  setModel: (m: string) => void
}

const ModelSelector: React.FC<Props> = ({ model, setModel }) => {
  const models = ['gpt-3.5', 'gpt-4', 'custom']
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium">Model</label>
      <select
        className="mt-2 w-full p-2 rounded-md border"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      >
        {models.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </div>
  )
}

export default ModelSelector
