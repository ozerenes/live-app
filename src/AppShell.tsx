import { AppShell } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

export function CustomAppShell() {
  return (
    <BrowserRouter>
      <AppShell padding="md">
        <AppShell.Main>
          <Router />
        </AppShell.Main>
      </AppShell>
    </BrowserRouter>
  );
}
