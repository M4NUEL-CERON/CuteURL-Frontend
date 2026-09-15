import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL as string

export default function App() {
  const [inputUrl, setInputUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [error, setError]   = useState('')
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
        setError('URL inválida o el servidor no respondió.')
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
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>CuteURL</h1>
        <p style={styles.subtitle}>Acorta cualquier link al instante</p>

        <form onSubmit={handleShorten} style={styles.form}>
          <input
            type="url"
            placeholder="https://tu-url-larga.com/aqui"
            value={inputUrl}
            onChange={e => setInputUrl(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? '...' : 'Acortar'}
          </button>
        </form>

        {error && <p style={styles.error}>{error}</p>}

        {shortUrl && (
          <div style={styles.result}>
            <a href={shortUrl} target="_blank" rel="noreferrer" style={styles.link}>
              {shortUrl}
            </a>
            <button onClick={handleCopy} style={styles.copyBtn}>
              {copied ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    width: '100%',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    background: '#1a1a1f',
    border: '1px solid #2a2a33',
    borderRadius: '16px',
    padding: '2.5rem 2rem',
    width: '100%',
    maxWidth: '520px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    textAlign: 'center',
    background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    textAlign: 'center',
    color: '#888',
    fontSize: '0.95rem',
    marginTop: '-0.5rem',
  },
  form: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  input: {
    flex: 1,
    padding: '0.7rem 1rem',
    borderRadius: '10px',
    border: '1px solid #2a2a33',
    background: '#0f0f11',
    color: '#e8e8e8',
    fontSize: '0.95rem',
    outline: 'none',
  },
  button: {
    padding: '0.7rem 1.3rem',
    borderRadius: '10px',
    border: 'none',
    background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
    color: '#fff',
    fontWeight: 600,
    fontSize: '0.95rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  error: {
    color: '#f87171',
    fontSize: '0.88rem',
    textAlign: 'center',
  },
  result: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: '#0f0f11',
    border: '1px solid #2a2a33',
    borderRadius: '10px',
    padding: '0.7rem 1rem',
    marginTop: '0.25rem',
  },
  link: {
    flex: 1,
    color: '#a78bfa',
    textDecoration: 'none',
    fontSize: '0.9rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  copyBtn: {
    padding: '0.4rem 0.8rem',
    borderRadius: '8px',
    border: '1px solid #2a2a33',
    background: 'transparent',
    color: '#e8e8e8',
    fontSize: '0.82rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
}