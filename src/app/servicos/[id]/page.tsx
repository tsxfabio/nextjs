interface ServicosIdPageProps {
  params: {
    id: string
  }
}

export default function ServicosIdPage({ params }: ServicosIdPageProps) {
  return <h1>Serviço {params.id}</h1>
}
