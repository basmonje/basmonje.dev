import { Button, Card } from "@basmonje/quarks_ui";

export default function Home() {
  return (
    <div className="p-2">
      <h1>Welcome</h1>

      <div className="flex flex-column items-center content-center">
        <Button type="gray" gradient="200" radius="medium">
          Descargar
        </Button>
        <Button type="primary" gradient="200" radius="medium">
          Descargar
        </Button>
        <Button type="danger" gradient="200" radius="medium">
          Error
        </Button>
        <Button type="warning" gradient="200" radius="medium">
          Precaución
        </Button>
      </div>

      <div>
        <Card type="gray" gradiant="400" radius="small">
          <h1>Primer contenido</h1>
        </Card>
      </div>
    </div>
  );
}
