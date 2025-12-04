import React from 'react'

type Props = {
  responses: string[]
}

const ResponseView: React.FC<Props> = ({ responses }) => {
  return (
    <div className="space-y-3">
      {responses.length === 0 && <div className="text-sm text-gray-500">No responses yet. Send a prompt to see results.</div>}
      {responses.map((r, i) => (
        <div key={i} className="p-3 bg-white rounded-lg shadow-sm">
          <pre className="whitespace-pre-wrap text-sm">{r}</pre>
        </div>
      ))}
    </div>
  )
}

export default ResponseView
