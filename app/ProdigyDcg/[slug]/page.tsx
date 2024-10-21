import "./members.module.css"
import MemberPage from "./MemberPage/MemberPage"
import { Member } from "@/app/interfaceLIst"


async function Members({ params }: { params: { slug: string } }) {
    const fetchData = async () => {
        try {
            const response = await fetch(`https://prodigy-dcg.vercel.app/api/get-members/?nickName=${params.slug}`, {
                next: {
                    revalidate: 3600
                }
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const data: { member: Member[] } = await fetchData()


    return (
        <div  >
            <MemberPage memberData={data.member} />
        </div>
    )
}

export default Members