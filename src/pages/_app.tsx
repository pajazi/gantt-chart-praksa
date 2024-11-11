import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '@/redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, ...props }: AppProps) {
    const {
        store,
        props: { pageProps },
    } = wrapper.useWrappedStore(props)

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
