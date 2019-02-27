export const imports = {
  'src/components/Card.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-card" */ 'src/components/Card.mdx'),
  'src/components/Filter.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-filter" */ 'src/components/Filter.mdx'),
}
