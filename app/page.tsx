import ProdigyDcg from "./ProdigyDcg/page"
import { Member } from "./interfaceLIst"


export default async function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch('https://prodigy-dcg.vercel.app/api/get-members', {next:{
        revalidate: 3600
      }})
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const data: {members:Member[]} = await fetchData()

  return (
    <div>
      <ProdigyDcg members={data.members} />
    </div>
  );
}
