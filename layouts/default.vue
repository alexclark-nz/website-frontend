<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<style>
@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-Regular.woff2'), url('~assets/fonts/Inter-Regular.woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-Italic.woff2'), url('~assets/fonts/Inter-Italic.woff');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-Bold.woff2'), url('~assets/fonts/Inter-Bold.woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-BoldItalic.woff2'), url('~assets/fonts/Inter-BoldItalic.woff');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-Black.woff2'), url('~assets/fonts/Inter-Black.woff');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-BlackItalic.woff2'), url('~assets/fonts/Inter-BlackItalic.woff');
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}

html {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply bg-gray-200;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
