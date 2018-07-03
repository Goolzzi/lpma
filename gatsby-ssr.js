/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from "styled-components"

import store from './src/store/configureStore'

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
    const sheet = new ServerStyleSheet()

    const ConnectedBody = () => (
        <StyleSheetManager sheet={sheet.instance}>
            <Provider store={store}>
                {bodyComponent}
            </Provider>
        </StyleSheetManager>
    )

    replaceBodyHTMLString(renderToString(<ConnectedBody/>))
    setHeadComponents([sheet.getStyleElement()])

    return
}