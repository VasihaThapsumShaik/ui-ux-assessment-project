import React from 'react'
import ModelSelector from './ModelSelector'
import ParametersPanel from './ParametersPanel'

type Props = {
  model: string
  setModel: (m: string) => void
  temperature: number
  setTemperature: (v: number) => void
  maxTokens: number
  setMaxTokens: (v: number) => void
  templates: any[]
  selectTemplate: (t: any) => void
}

const Sidebar: React.FC<Props> = ({ model, setModel, temperature, setTemperature, maxTokens, setMaxTokens, templates, selectTemplate }) => {
  return (
    <aside className="w-80 p-4 bg-white h-full border-r">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">AI Studio</h2>
        <p className="text-sm text-gray-500">Prototype UI — Model controls & templates</p>
      </div>

      <ModelSelector model={model} setModel={setModel} />
      <ParametersPanel temperature={temperature} setTemperature={setTemperature} maxTokens={maxTokens} setMaxTokens={setMaxTokens} />

      <div className="mt-4">
        <h3 className="text-sm font-medium mb-2">Templates</h3>
        <div className="space-y-2">
          {templates.map((t) => (
            <button key={t.id} onClick={() => selectTemplate(t)} className="w-full text-left p-2 rounded-md border">{t.name}</button>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
