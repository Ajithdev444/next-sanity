import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"

 const config = defineConfig({
    projectId: "i5br944f",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "07-06-23",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types : schemas }
})
export default config