import type { SanitizedConfig } from '../../config/types.js'
import type { AddToComponentImportMap, ComponentMap, ImportMap } from './index.js'

import { iterateCollections } from './iterateCollections.js'
import { iterateGlobals } from './iterateGlobals.js'

export function iterateConfig({
  addToComponentImportMap,
  baseDir,
  componentMap,
  config,
  importMap,
}: {
  addToComponentImportMap: AddToComponentImportMap
  baseDir: string
  componentMap: ComponentMap
  config: SanitizedConfig
  importMap: ImportMap
}) {
  iterateCollections({
    addToComponentImportMap,
    baseDir,
    collections: config.collections,
    componentMap,
    config,
    importMap,
  })

  iterateGlobals({
    addToComponentImportMap,
    baseDir,
    componentMap,
    config,
    globals: config.globals,
    importMap,
  })

  typeof config.admin?.avatar === 'object' &&
    addToComponentImportMap(config.admin?.avatar?.Component)

  addToComponentImportMap(config.admin?.components?.Nav)

  addToComponentImportMap(config.admin?.components?.logout?.Button)
  addToComponentImportMap(config.admin?.components?.graphics?.Icon)
  addToComponentImportMap(config.admin?.components?.graphics?.Logo)

  addToComponentImportMap(config.admin?.components?.actions)
  addToComponentImportMap(config.admin?.components?.afterDashboard)
  addToComponentImportMap(config.admin?.components?.afterLogin)
  addToComponentImportMap(config.admin?.components?.afterNavLinks)
  addToComponentImportMap(config.admin?.components?.beforeDashboard)
  addToComponentImportMap(config.admin?.components?.beforeLogin)
  addToComponentImportMap(config.admin?.components?.beforeNavLinks)

  addToComponentImportMap(config.admin?.components?.providers)

  if (config.admin?.components?.views) {
    addToComponentImportMap(Object.values(config.admin?.components?.views))
  }

  if (config?.admin?.componentImportMap?.generators?.length) {
    for (const generator of config.admin.componentImportMap.generators) {
      generator({
        addToComponentImportMap,
        baseDir,
        componentMap,
        config,
        importMap,
      })
    }
  }

  if (
    config?.editor &&
    typeof config.editor === 'object' &&
    config.editor.generateComponentImportMap &&
    typeof config.editor.generateComponentImportMap === 'function'
  ) {
    config.editor.generateComponentImportMap({
      addToComponentImportMap,
      baseDir,
      componentMap,
      config,
      importMap,
    })
  }
}