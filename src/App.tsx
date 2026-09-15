import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL as string

export default function App() {
  const [inputUrl, setInputUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied]   = useState(false)

  async function handleShorten(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setShortUrl('')
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/shorten`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: inputUrl }),
      })

      if (!res.ok) {
        setError('URL inválida. Asegúrate de incluir https://')
        return
      }

      const data = await res.json() as { shortUrl: string }
      setShortUrl(data.shortUrl)
    } catch {
      setError('No se pudo conectar con el servidor.')
    } finally {
      setLoading(false)
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(shortUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="card-wrapper">
        <div className="card">
          <h1 className="title">CuteURL</h1>
          <p className="subtitle">Pega tu link largo y obtén uno corto al instante</p>

          <form onSubmit={handleShorten} className="form">
            <input
              className="input"
              type="url"
              placeholder="https://link-muy-largo.com/ejemplo/aqui"
              value={inputUrl}
              onChange={e => setInputUrl(e.target.value)}
              required
              autoFocus
            />
            <button className="btn-shorten" type="submit" disabled={loading}>
              {loading ? <span className="spinner" /> : 'Acortar link'}
            </button>
          </form>

          {error && <p className="error">{error}</p>}

          {shortUrl && (
            <div className="result">
              <a className="result-link" href={shortUrl} target="_blank" rel="noreferrer">
                {shortUrl}
              </a>
              <button
                className={`btn-copy${copied ? ' copied' : ''}`}
                onClick={handleCopy}
              >
                {copied ? '✓ Copiado' : 'Copiar'}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}