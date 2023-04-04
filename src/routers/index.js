import routesConfig  from "~/config/routes"

// Layout
import { HeaderOnly } from "~/components/Layout"

// Pages
import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"

// Public routers
const publicRoutes = [
    {path:routesConfig.home, component: Home},
    {path:routesConfig.following, component: Following},
    {path:routesConfig.profile, component: Profile},
    {path:routesConfig.upload, component: Upload, layout: HeaderOnly},
    {path:routesConfig.search, component: Search, layout: null}

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }