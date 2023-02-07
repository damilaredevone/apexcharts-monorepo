import { builtinModules } from 'node:module'
import { defineBuildConfig } from 'unbuild'
import pkg from './package.json'

export default defineBuildConfig({
  externals: [
    ...builtinModules,
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
  ],
  failOnWarn: false,
})
