import HomePage from "./pages/user/homePage";
import ProfilePage from "./pages/user/profilePage";
import Layout from "./pages/user/theme/layout";
import { ROUTERS } from "./utils/router";
import { Routes, Route} from 'react-router-dom'

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
        {
            path: ROUTERS.USER.SHOP,
            component: "",
        },
        {
            path: ROUTERS.USER.POSTS,
            component: "",
        },
        {
            path: ROUTERS.USER.CONTACT,
            component: "",
        },
    ]
    return (
        <Layout>
        <Routes>
            {
                userRouters.map((item, key) => (<Route key={key} path={item.path} element={item.component} />)
                )
            }
        </Routes>
        </Layout>)
}
const RouterCustom = () => {
    return renderUserRouter();
}
export default RouterCustom;