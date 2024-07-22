import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { type Metadata } from "next";
import { Anuphan } from "next/font/google";

import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { TRPCReactProvider } from "@/trpc/react";

const theme = createTheme({});

export const metadata: Metadata = {
  title: "KU Tech Project",
  description: "KU Tech Project",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fontSans = Anuphan({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={fontSans.className}>
        <MantineProvider theme={theme}>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
