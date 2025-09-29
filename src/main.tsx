import { createRoot } from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import '@assets/styles/index.scss'
import '@assets/styles/_main.sass'

const rootElement = document.getElementById('root')

rootElement &&
	createRoot(rootElement).render(
		<Provider store={store}>
			<App />
		</Provider>
	)
