import { PluginCommonModule, VendurePlugin } from '@vendure/core'
import { AdminUiExtension } from '@vendure/ui-devkit/compiler'
import path from 'path'

@VendurePlugin({
   imports: [PluginCommonModule],
   configuration: config => {
      return config
   },
})
export class DeactivatePlugin {
   static uiExtensions: AdminUiExtension = {
      extensionPath: path.join(__dirname, 'ui'),
      providers: ['providers.ts'],
      routes: [{ route: 'products', filePath: 'routes.ts' }]
   }
}