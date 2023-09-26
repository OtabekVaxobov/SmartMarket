import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./component/Layout"
import AboutPage from "./pages/aboutPage";
import ErrorPage from "./pages/errorPage";

import Header from "./component/Header";
import ContactsPage from "./pages/contactsPage";
import Footer from "./component/Footer";
import { Suspense } from "react";
import Loading from "./component/Loading";
import { lazy } from 'react';
// import HomePage from "./pages/indexPage";
const HomePage = lazy(() => import('./pages/indexPage'));
function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "contact",
      element: <ContactsPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "about",
      element: <AboutPage />,
      errorElement: <ErrorPage />,
    },

  ]);

  return (
    <>
      <Layout>
        <Header />
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
        <Footer />
      </Layout>
    </>
  )
}

export default App
