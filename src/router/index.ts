import { createRouter, createWebHashHistory } from "vue-router"

import routes from './routers'

const router = createRouter({
    routes,
    history: createWebHashHistory()

})

export default router