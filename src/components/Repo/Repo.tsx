export async function Repo({ id }: any) {
  const response = await fetch(`https://api.github.com/users/${id}/repos`)
  const data = await response.json()

  return (
    <div>
      <h3>Repositórios</h3>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  )
}
