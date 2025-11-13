import { portfolioData } from "@/data/portfolio.data";

export default function Footer() {
  const year = new Date().getFullYear();
  const name = portfolioData.personal.name;
  return (
    <footer className="md:py-4 py-3 px-4 border-t border-primary/20 text-center text-muted-foreground">
      <p>
        &copy; {year} {name}. All rights reserved.
      </p>
    </footer>
  );
}
