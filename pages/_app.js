import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "../store/store";
import AppLayout from "../components/AppLayout";
//import withRedux from "next-redux-wrapper";
import { createWrapper } from "next-redux-wrapper";
import { useRouter } from "next/router";
import LoginPage from "./login";
import { startChecking } from "../actions/auth";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const dispatch = useDispatch();
  const router = useRouter();
  const { checking, uid } = useSelector((state) => state.auth);

  //const [checking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    dispatch(startChecking());

    //setCheking(false);
  }, [dispatch]);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <>
      {!!uid ? (
        <div suppressHydrationWarning>
          <Provider store={store}>
            <AppLayout>
              {typeof window === "undefined" ? null : (
                <Component {...pageProps} />
              )}
            </AppLayout>
          </Provider>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);

//export default withRedux(store)(MyApp);
