export async function Profile({ id }: any) {
  const response = await fetch(`https://api.github.com/users/${id}`)
  const data = await response.json()

  return (
    <div>
      <h3>Profile</h3>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  )
}
