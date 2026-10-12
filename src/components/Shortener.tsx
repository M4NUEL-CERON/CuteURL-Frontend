import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../translations'
import acentoSvg from '../assets/shortener/accent-left.svg'
import trazosSvg from '../assets/shortener/accent-right.svg'
import simboloSvg from '../assets/shortener/icon-link.svg'

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
    <section id="shorten" className="pb-10">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="relative max-w-[700px] lg:max-w-[820px] mx-auto">

          <img src={acentoSvg} alt="" aria-hidden="true"
               className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2" />
          <img src={trazosSvg} alt="" aria-hidden="true"
               className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2" />

          <div
            className="bg-white/85 backdrop-blur-xl border border-[rgba(79,70,229,0.12)] rounded-3xl p-12"
            style={{ boxShadow: '0 0 80px rgba(79,70,229,0.08)' }}
          >
            <h2 className="flex items-center justify-start gap-2 font-[Patrick_Hand] text-[1.8rem] text-left mb-2"
                style={{ color: '#181E3B' }}>
              <img src={simboloSvg} alt="" aria-hidden="true" className="w-9 h-9" />
              {tr.title}
            </h2>
            <p className="font-[Inter] text-left text-[0.9rem] mb-7" style={{ color: '#293353' }}>{tr.sub}</p>

            <form onSubmit={handleShorten} className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                placeholder={tr.placeholder}
                value={inputUrl}
                onChange={e => setInputUrl(e.target.value)}
                required
                autoFocus
                className="flex-1 w-full px-5 py-4 rounded-[14px] border border-[rgba(79,70,229,0.12)] bg-white font-[Inter] text-[#293353] text-[0.97rem] outline-none transition-all focus:border-primary focus:ring-[3px] focus:ring-primary/10 placeholder:text-[rgba(79,70,229,0.3)]"
              />
              <button
                type="submit"
                disabled={loading}
                className="shrink-0 px-7 py-4 rounded-[14px] bg-grad text-white font-bold text-[0.97rem] cursor-pointer transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-55 disabled:cursor-not-allowed"
                style={{ boxShadow: '0 4px 22px rgba(79,70,229,0.4)' }}
              >
                {loading
                  ? <span className="inline-block w-[18px] h-[18px] border-[2.5px] border-white/30 border-t-white rounded-full animate-spin-slow align-middle" />
                  : tr.btn}
              </button>
            </form>

            <p className="font-[Inter] text-left text-[0.75rem] mt-3" style={{ color: '#293353' }}>
              {tr.tip}
            </p>

            {error && (
              <p className="text-[#ef4444] text-[0.88rem] text-center mt-3">{error}</p>
            )}

            {shortUrl && (
              <div
                className="flex items-center gap-3 bg-primary/[0.08] border border-primary/25 rounded-[14px] px-5 py-4 mt-3 animate-slide-up"
              >
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-primary text-[0.95rem] font-medium overflow-hidden text-ellipsis whitespace-nowrap no-underline hover:opacity-75 transition-opacity"
                >
                  {shortUrl}
                </a>
                <button
                  onClick={handleCopy}
                  className={`shrink-0 px-4 py-2 rounded-[10px] border font-[Inter] text-[0.83rem] font-semibold cursor-pointer transition-all whitespace-nowrap
                    ${copied
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                      : 'bg-white border-[rgba(79,70,229,0.12)] text-[#293353] hover:border-primary-light'
                    }`}
                >
                  {copied ? tr.copied : tr.copy}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
