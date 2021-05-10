import * as React from 'react';
import { AuthProvider } from '@/lib/auth';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import customTheme from '@/styles/theme';
import { css, Global } from '@emotion/react';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
