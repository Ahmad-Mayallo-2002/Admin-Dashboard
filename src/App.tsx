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
              <Route path="/" element={<Home />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </Suspense>
          <Footer />
        </GridItem>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
