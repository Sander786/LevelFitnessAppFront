import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {App} from './App.jsx'
import { LanguageContext, LanguageProvider, GetDataContext, GetDataProvider } from "./context";
import { Localization } from "./Localization";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GetDataProvider>
      <LanguageProvider>
        <BrowserRouter>
          <App
            {...Localization}
            LanguageContext={LanguageContext}
            GetDataContext={GetDataContext}
            />
        </BrowserRouter>
      </LanguageProvider>
    </GetDataProvider>
  </React.StrictMode>,
)
