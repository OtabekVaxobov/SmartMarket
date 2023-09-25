import { BrowserRouter, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./component/Layout"
import AboutPage from "./pages/aboutPage";
import ErrorPage from "./pages/errorPage";
import HomePage from "./pages/indexPage";
import Header from "./component/Header";
import ContactsPage from "./pages/contactsPage";

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
        <RouterProvider router={router} />
        <Outlet />
      </Layout>
    </>
  )
}

export default App
