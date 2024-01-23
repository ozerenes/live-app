import { Route, Routes } from 'react-router-dom';
import { StreamPage } from '@/components/pages/StreamPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<StreamPage />} />
    </Routes>
  );
}
