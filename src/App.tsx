import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { GitInfo2Container } from "./Container/GitInfo2Container";
import { GitInfoContainer } from "./Container/GitInfoContainer";

const App: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<h1 style={{ backgroundColor: "red" }}>Loading</h1>}>
          <GitInfoContainer />
          <GitInfo2Container />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
};

export default App;
