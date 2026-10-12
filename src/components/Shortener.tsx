import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../translations'

const API_URL = import.meta.env.VITE_API_URL as string

export default function Shortener() {
  const { lang } = useApp()
  const tr = translations[lang].shortener

  const [inputUrl, setInputUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [copied, setCopied]     = useState(false)

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
      if (!res.ok) { setError(tr.errorInvalid); return }
      const data = await res.json() as { shortUrl: string }
      setShortUrl(data.shortUrl)
    } catch {
      setError(tr.errorConn)
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
    <section id="shorten" className="shortener">
      <div className="container">
        <div className="shortener__card">
          <h2 className="shortener__title">{tr.title}</h2>
          <p className="shortener__sub">{tr.sub}</p>

          <form onSubmit={handleShorten} className="shortener__form">
            <input
              className="shortener__input"
              type="url"
              placeholder={tr.placeholder}
              value={inputUrl}
              onChange={e => setInputUrl(e.target.value)}
              required
              autoFocus
            />
            <button className="shortener__btn" type="submit" disabled={loading}>
              {loading ? <span className="spinner" /> : tr.btn}
            </button>
          </form>

          {error && <p className="shortener__error">{error}</p>}

          {shortUrl && (
            <div className="shortener__result">
              <a className="shortener__link" href={shortUrl} target="_blank" rel="noreferrer">
                {shortUrl}
              </a>
              <button className={`btn-copy${copied ? ' copied' : ''}`} onClick={handleCopy}>
                {copied ? tr.copied : tr.copy}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
