import "./members.module.css"
import MemberPage from "./MemberPage/MemberPage"
import { Member } from "@/app/interfaceLIst"


async function Members({ params }: { params: { MembersNickName: string } }) {
    const fetchData = async () => {
        try {
            const response = await fetch(`https://prodigy-dcg.vercel.app/api/get-members/?nickName=${params.MembersNickName}`, {
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

    const data: { member: Member } = await fetchData()

    console.log(`MEMBER DATA: ${JSON.stringify(data)}`)

    return (
        <div  >
            <MemberPage memberData={data.member} />
            {params.MembersNickName}
        </div>
    )
}

export default Members