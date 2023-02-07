import { isObject } from '@damilaredev/utils'
import type { ApexOptions } from 'apexcharts'

export const extend = (
  target: Record<string, unknown> | ApexOptions,
  source: Record<string, unknown>,
) => {
  if (typeof Object.assign !== 'function') {
    ;(function () {
      Object.assign = function (target: Record<string, unknown>) {
        // We must check against these specific cases.
        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert undefined or null to object')
        }

        const output = Object(target)
        for (let index = 1; index < arguments.length; index++) {
          // eslint-disable-next-line prefer-rest-params,
          const source = arguments[index]
          if (source !== undefined && source !== null) {
            for (const nextKey in source) {
              // eslint-disable-next-line no-prototype-builtins
              if (source.hasOwnProperty(nextKey)) {
                output[nextKey] = source[nextKey]
              }
            }
          }
        }
        return output
      }
    })()
  }

  let output = { ...target }

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          output = { ...output, ...{ [key]: source[key] } }
        } else {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          output[key] = extend(target[key], source[key])
        }
      } else {
        output = { ...output, ...{ [key]: source[key] } }
      }
    })
  }
  return output
}
