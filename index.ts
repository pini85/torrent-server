#!/usr/bin/env node

export * from './src/app'
export * from './src/config'
export * from './src/api'
export * from './src/services/logging'
export * from './src/services/openapi'
export * from './src/services/torrent-client'
export * from './src/services/torrent-search'
export * from './src/cli'

import { buildCli } from './src/cli'

if (!module.parent) {
    buildCli().argv
}
