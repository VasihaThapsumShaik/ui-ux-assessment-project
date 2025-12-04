import React from 'react'

type Props = {
  prompt: string
  setPrompt: (p: string) => void
  onSend: () => void
  onSaveTemplate: () => void
}

const PromptEditor: React.FC<Props> = ({ prompt, setPrompt, onSend, onSaveTemplate }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-2">Prompt</label>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={8}
        className="p-3 rounded-md border resize-none"
      />
      <div className="flex items-center gap-2 mt-3">
        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white" onClick={onSend}>Send</button>
        <button className="px-3 py-2 rounded-lg border" onClick={onSaveTemplate}>Save Template</button>
      </div>
    </div>
  )
}

export default PromptEditor
