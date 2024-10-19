import HomePage from "./ProdigyDcg/page"
import { Member } from "./interfaceLIst"


export default async function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch('https://prodigy-dcg.vercel.app/api/get-members')
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const data: Member[] = await fetchData()
  console.log(data)

  return (
    <div>
      <HomePage members={data} />
    </div>
  );
}
