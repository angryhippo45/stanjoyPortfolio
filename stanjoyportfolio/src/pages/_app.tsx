import { AppProps } from 'next/app';
import '../styles/global.css';

//override existing app, pass in global props to current page
//Component is the current page
//pageprops is initial props

export default function App({Component, pageProps}: AppProps){
    return <Component {...pageProps} />
}