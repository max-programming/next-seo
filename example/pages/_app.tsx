import "../styles/globals.css"

import type {AppProps} from "next/app"
import {FC} from "react"

import SEO from "../../."
import pkg from "../package.json"

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
    return (
        <>
            <SEO
                title={pkg.name}
                description={pkg.description}
                keywords={pkg.keywords}
                icon="/favicon.ico"
                facebook={{
                    image: "/facebook.png",
                    type: "website",
                    url: pkg.homepage,
                }}
                twitter={{
                    image: "/twitter.png",
                    card: "summary",
                    site: "@bradgarropy",
                }}
            />

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
