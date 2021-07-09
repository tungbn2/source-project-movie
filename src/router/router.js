import mainPage from "../components/layouts/main.vue"
import categoryPage from "../components/layouts/category.vue"
import movieDetailPage from "../components/layouts/movie-detail.vue"
import userProfile from "../components/layouts/userProfile.vue"
import adminMonitor from "../components/layouts/adminMonitor.vue"
import watchMovie from "../components/layouts/watch.vue"
import updateMonitor from "../components/layouts/updateMonitor.vue"

export const routes = [
    {path: `/`, name: `home`, component: mainPage},
    {path: `/:category`, name: `category`, component: categoryPage, children:[
        
    ]},
    {path: `/:category/:movieId`, name: `movieDetail`, component: movieDetailPage},
    {path: `/:category/:movieId/watch`, name: `watchMovie`, component: watchMovie},
    {path: `/userProfile/`, name: `userProfile`, component: userProfile},
    {path: `/adminMonitor`, name: `adminMonitor`, component: adminMonitor},
    {path: `/update/:id`, name: `updateMonitor`, component: updateMonitor},
]
