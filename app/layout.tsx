import './globals.css';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from '@/components/theme-provider';

const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI ERP',
  description: 'AI-powered Enterprise Resource Planning System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={sora.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}