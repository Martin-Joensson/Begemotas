import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ContentRoutes } from "./routes/ContentRoutes";

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex-grow flex-1 justify-center">
        <ContentRoutes />
      </main>
      <Footer />
    </div>
  );
};
