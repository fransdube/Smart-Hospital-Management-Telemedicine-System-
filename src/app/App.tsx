import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { LaboratoryProvider } from "./contexts/LaboratoryContext";
import { BillingProvider } from "./contexts/BillingContext";

export default function App() {
  return (
    <AuthProvider>
      <LaboratoryProvider>
        <BillingProvider>
          <RouterProvider router={router} />
        </BillingProvider>
      </LaboratoryProvider>
    </AuthProvider>
  );
}
