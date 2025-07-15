export default {
  presets: [
    '@babel/preset-env',[
      '@babel/preset-react',
      { runtime: 'automatic' }   // ← this tells Babel to auto‑import the JSX helpers
  ]]
}
