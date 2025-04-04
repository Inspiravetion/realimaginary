import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { writeFileSync } from "node:fs";

function gitHubActionsRouting() {
    return { 
        name: 'GithubActionRoutingPlugin',
        generateBundle: (options, bundle) => {
            console.log('DIR: ', options.dir)
            writeFileSync('./testing', JSON.stringify(bundle, null,2))
        }
    } satisfies Plugin
}

export default defineConfig({
//   base: "/realimaginary/",
//   build: {
//     outDir: "dist"
//   },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), gitHubActionsRouting()],
});
