import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import routes from "./routes";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import viVN from "antd/lib/locale/vi_VN";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Header from './component/layout/Header'


function App() {
    const dispatch = useDispatch();
    const maproutes = routes.map((route, index) => {
        return (
            <Route key={index} path={route.path} component={route.component} exact={route.exact} />
        );
    });
    useEffect(() => {

    }, [])

    return (
        <Router>
            <ConfigProvider locale={viVN}>
                {/* {isLoading && <Loading location="Loading...." /> } */}
               
                    <Header />
                <div className="App">
                    <Switch>{maproutes}</Switch>
                </div>
            </ConfigProvider>
        </Router>
    );
}

export default App;
