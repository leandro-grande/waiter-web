
interface ProductParams {
  params: {
    id: string;
  }
}

export default function Product({ params }: ProductParams) {
  return (
    <h1>Product: {params.id}</h1>
  )
}