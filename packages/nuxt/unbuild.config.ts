import { builtinModules } from 'node:module'
import { defineBuildConfig } from 'unbuild'
import pkg from './package.json'

export default defineBuildConfig({
  rollup: { emitCJS: true },
  externals: [
    ...builtinModules,
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
  ],
  failOnWarn: false,
})
