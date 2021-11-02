import { Container, Box } from "@basmonje/quarks_ui";

export default function Hero() {
  return (
    <div className="hero">
      <Container size="small">
        <Box className="flex flex-col">
          <h1 className="text-bold text-4xl">Bastián Monje</h1>
          <p className="text-sm">Estudiante de desarrollo de software</p>
          <span className="text-base mt-2">
            Autodidacta, apasionado por la tecnología, amante de la música y las
            ciencias.
          </span>
        </Box>
      </Container>
    </div>
  );
}
