import "@/app/globals.css";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Prevent fontawesome from adding its CSS since we did it manually above:

/* eslint-disable import/first */

//React imports
import { config, library } from "@fortawesome/fontawesome-svg-core";
//allows later to just use icon name to render-them
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(fab, fas, far);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Hoe",
  description: "Daniel Hoe's resume and project website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex justify-center bg-portfolio-background ${inter.className}`}
      >
        <div className="flex min-h-screen max-w-screen-xl justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
