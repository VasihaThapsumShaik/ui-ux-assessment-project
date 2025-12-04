import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import PromptEditor from '../components/PromptEditor'
import ResponseView from '../components/ResponseView'
import { sampleTemplates } from '../utils/templates'

export default function Page() {
  const [model, setModel] = useState('gpt-3.5')
  const [temperature, setTemperature] = useState(0.7)
  const [maxTokens, setMaxTokens] = useState(500)
  const [prompt, setPrompt] = useState('')
  const [responses, setResponses] = useState<string[]>([])
  const [templates, setTemplates] = useState(sampleTemplates)

  const sendPrompt = () => {
    // Dummy response generation to simulate API
    const fake = `Response for model=${model} | temp=${temperature} | tokens=${maxTokens}\n\nReply:\n` +
      prompt.split('\n').slice(0,5).join(' ')
    setResponses([fake, ...responses])
  }

  const saveTemplate = () => {
    const id = `template-${Date.now()}`
    setTemplates([{ id, name: `Saved ${templates.length+1}`, prompt }, ...templates])
  }

  const selectTemplate = (t: any) => {
    setPrompt(t.prompt)
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar model={model} setModel={setModel} temperature={temperature} setTemperature={setTemperature} maxTokens={maxTokens} setMaxTokens={setMaxTokens} templates={templates} selectTemplate={selectTemplate} />

      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <PromptEditor prompt={prompt} setPrompt={setPrompt} onSend={sendPrompt} onSaveTemplate={saveTemplate} />

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Responses</h3>
            <ResponseView responses={responses} />
          </div>
        </div>
      </main>
    </div>
  )
}
