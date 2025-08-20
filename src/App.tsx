import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollableHome from "./pages/ScrollableHome";
import Problem from "./pages/Problem";
import CaseStudies from "./pages/CaseStudies";
import Solutions from "./pages/Solutions";
import Weather from "./pages/Weather";
import Education from "./pages/Education";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ScrollableHome />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
