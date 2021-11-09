import { Button, Container } from "@basmonje/quarks_ui";
import Layout from "../layouts";
import Hero from "../components/Hero";
import Projects from "../components/ListProjects";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "@basmonje/icons";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <Layout title="Home">
      <Hero />
      <div className="--border-top-xs --border-bottom-xs --border-gray-5">
        <Container size="medium">
          <div className="--flex --flex-row --items-center --content-between --py-2">
            <Link href="#jesus">
              <a>Ir a </a>
            </Link>
          </div>
        </Container>
      </div>
      <Projects />
      <div className="--border-top-xs --border-gray-5">
        <Container size="medium">
          <div className="--flex --flex-row --items-center --content-between --py-2">
            <span className="--p-2">Cambiar Theme</span>
            {mounted && (
              <Button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                bgHv="gray"
                shape="circle"
              >
                <span className="--td-text-gray-1 --tw-text-gray-8">
                  {theme === "light" ? <Moon /> : <Sun />}
                </span>
              </Button>
            )}
          </div>
        </Container>
      </div>

      <div id="jesus" className="--w-full --h-view">
        <h1>Jesus</h1>
      </div>
    </Layout>
  );
}
