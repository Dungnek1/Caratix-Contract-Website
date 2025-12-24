import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Contract } from './pages/Contract';
import { Pricing } from './pages/Pricing';
import { Node } from './pages/Node';
import { FinancialPlan } from './pages/FinancialPlan';
import { Documentation } from './pages/Documentation';
import { Projects } from './pages/Projects';
export function App() {
  return <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/node" element={<Node />} />
        <Route path="/financial-plan" element={<FinancialPlan />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
    </Router>;
}