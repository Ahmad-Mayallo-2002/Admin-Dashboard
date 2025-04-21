import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/MyComponents/Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./components/MyComponents/Sidebar";
import Header from "./components/MyComponents/Header";
import { lazy, Suspense } from "react";
import Loading from "./components/MyComponents/Loading";

// Dynamically imported pages
const Home = lazy(() => import("./pages/Home"));
const Billing = lazy(() => import("./pages/Billing"));
const Tables = lazy(() => import("./pages/Tables"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Pricing = lazy(() => import("./pages/Pricing"));

function App() {
  return (
    <BrowserRouter>
      <Grid gridTemplateColumns={{ base: "auto 1fr", lg: "250px 1fr" }}>
        <Sidebar />
        <GridItem p={3}>
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/admindashboard-2002" element={<Home />} />
              <Route
                path="/admindashboard-2002/billing"
                element={<Billing />}
              />
              <Route path="/admindashboard-2002/tables" element={<Tables />} />
              <Route
                path="/admindashboard-2002/notifications"
                element={<Notifications />}
              />
              <Route
                path="/admindashboard-2002/pricing"
                element={<Pricing />}
              />
            </Routes>
          </Suspense>
          <Footer />
        </GridItem>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
