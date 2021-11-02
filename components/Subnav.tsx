import { useState } from "react";
import Link from "next/link";
import { Button, Container } from "@basmonje/quarks_ui";
import { ArrowLeft, Sliders } from "@basmonje/icons";

interface Props {
  page: string;

  className?: string;
}

export default function Subnav({ page, className }: Props) {
  const [isActive, setActive] = useState(false);

  return (
    <div className={`subnav ${className}`}>
      <Container size="small">
        <div className="flex flex-row content-between align-center">
          <div>
            <Link href={`/${page}`}>
              <a>
                <Button size="lg" hover="700" color="gray-100">
                  <ArrowLeft />
                  Volver atras
                </Button>
              </a>
            </Link>
          </div>
          <div className="position-relative">
            <Button
              size="lg"
              color="gray-100"
              onClick={() => setActive(!isActive)}
            >
              <Sliders />
            </Button>

            <div className={`menu ${isActive ? "open" : ""} bg-gray-900`}>
              <ul className="flex flex-col gap-1">
                <li className="flex content-center">
                  <Link href="/">
                    <a className="hover-gray-800 nav-te p-2">Notes</a>
                  </Link>
                </li>
                <li className="flex content-center">
                  <Link href="/notes">
                    <a className="hover-gray-800 nav-te p-2">Notes</a>
                  </Link>
                </li>
                <li className="flex content-center">
                  <Link href="/snippets">
                    <a className="hover-gray-800 nav-te p-2">Snippets</a>
                  </Link>
                </li>
                <li className="flex content-center mb-1">
                  <Link href="/blog">
                    <a className="hover-gray-800 nav-te p-2">Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
