import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="flex justify-center bg-body text-white">
      {children}
    </NextUIProvider>
  );
}
