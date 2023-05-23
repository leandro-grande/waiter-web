
import Image from "next/image";
import { Contain, Container } from "./styles";


export function Header() {
  return (
    <Container>
      <Contain>
        <div className="title">
          <h1>Pedidos</h1>
          <p>Acompanhe os pedidos dos clientes</p>
        </div>

        <Image src='/logo.svg' height={140} width={334} alt="Logo do WaiterApp" />
      </Contain>
    </Container>
  )
}