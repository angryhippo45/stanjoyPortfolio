import { Html, Head, Main, NextScript } from "next/document";

//override default render on server 
export default function Document(){
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}