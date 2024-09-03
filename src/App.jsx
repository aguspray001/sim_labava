import { Auth, Dashboard } from "@/layouts";
import { Navigate, Route, Routes } from "react-router-dom";
import { PackingContext, PackingProvider } from "./context/packingContext";
import { useContext } from "react";
import PageLoader from "./widgets/components/loader";

function App() {
  const { isLoading } = useContext(PackingContext);
  return (
    <PackingProvider>
      <PageLoader active={isLoading}>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route
            path="*"
            element={<Navigate to="/dashboard/monitoring" replace />}
          />
        </Routes>
      </PageLoader>
    </PackingProvider>
  );
}

export default App;
