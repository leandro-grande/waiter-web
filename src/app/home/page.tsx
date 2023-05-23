'use client';

import { Header } from "@/components/Header";
import { Container } from "./styles";
import { Orders } from "@/components/Orders";

export default function Home() {
  return (
   <Container>
    
    <Header />
    <Orders />

   </Container>
  )
}
