import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { LOCALS } from './i18n/constants.js'

import './i18n'


function App() {
  const [count, setCount] = useState(0)

    const { t } = useTranslation()
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        <h2>{ t('Welcome to React') }</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            {t('button.counts', { click: count })}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h3>{i18next.language}</h3>
      <div>
          <button
              disabled={i18next.language === LOCALS.EN}
              onClick={() => i18next.changeLanguage(LOCALS.EN)}>
              English
          </button>
          <button
              disabled={i18next.language === LOCALS.FR}
              onClick={() => i18next.changeLanguage(LOCALS.FR)}>
              French
          </button>
          <button
              disabled={i18next.language === LOCALS.UK}
              onClick={() => i18next.changeLanguage(LOCALS.UK)}>
              Ukrainian
          </button>
      </div>
    </>
  )
}

export default App
