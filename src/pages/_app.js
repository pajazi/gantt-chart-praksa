import '@/styles/globals.css'
import { wrapper } from '@/redux/store'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function App({ Component, pageProps }) {
    // const {
    //     store,
    //     props: { pageProps },
    // } = wrapper.useWrappedStore(props)

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

//export default wrapper.withRedux(App)
