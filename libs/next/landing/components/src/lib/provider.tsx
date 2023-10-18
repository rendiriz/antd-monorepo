'use client';

import { StyledComponentsRegistry } from '@antd-monorepo/next/shared/components';

export function Provider({ children }: { children: React.ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
