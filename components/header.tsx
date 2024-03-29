import Link from "next/link";

import {
  IconAI,
  IconGitHub,
  IconSeparator,
  IconSparkles,
  IconVercel,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full px-4 border-b h-14 shrink-0 bg-background backdrop-blur-xl">
      <span className="inline-flex items-center home-links whitespace-nowrap">
        <a rel="noopener" target="_blank">
          <IconAI className="w-5 h-5 sm:h-6 sm:w-6" />
        </a>
        <IconSeparator className="w-6 h-6 text-muted-foreground/20" />
        <Link href="/">
          <span className="text-lg font-bold">Lightspeed AI</span>
        </Link>
      </span>
      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" asChild>
          <a
            target="_blank"
            href="https://github.com/wolfzer44/lightspeed-ai"
            rel="noopener noreferrer"
          >
            <IconGitHub />
            <span className="hidden ml-2 md:flex">GitHub</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
