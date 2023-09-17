import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { IsLoginState, isAdminState } from './store/atom';
import Start from './routes/Start';
import HomeAdmin from './routes/HomeAdmin';
import HomeUser from './routes/HomeUser';
import ReserveAdmin from './routes/ReserveAdmin';
import ReserveUser from './routes/ReserveUser';
import ApproveReserve from './routes/ApproveReserve';
import ManageSpace from './routes/ManageSpace';
import ManageUser from './routes/ManageUser';
import ManageSite from './routes/ManageSite';
import Header from './components/Header';

function Router() {
  const isAdmin = useRecoilValue(isAdminState);
  const isUserLoggedIn = useRecoilValue(IsLoginState);
  console.log(isAdmin);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* 로그인 전 시작 화면 */}
        <Route exact path="/start">
          <Start />
        </Route>
        {!isUserLoggedIn && <Redirect to="/start" />}
        {isUserLoggedIn && isAdmin ? (
          <>
            {/*  admin일 때 */}
            <Route exact path="/">
              <HomeAdmin />
            </Route>
            <Route exact path="/reserve">
              <ReserveAdmin />
            </Route>
            <Route exact path="/waitinglist">
              <ApproveReserve />
            </Route>
            <Route exact path="/manageSpace">
              <ManageSpace />
            </Route>
            <Route exact path="/manageUser">
              <ManageUser />
            </Route>
            <Route exact path="/manageSite">
              <ManageSite />
            </Route>
          </>
        ) : (
          <>
            {/*  admin이 아닐 때 */}
            <Route exact path="/">
              <HomeUser />
            </Route>
            <Route exact path="/reserve">
              <ReserveUser />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
