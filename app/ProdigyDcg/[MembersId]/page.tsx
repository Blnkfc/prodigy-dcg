import "./members.module.css"

const Members = ({ params }: { params: { MembersId: string } }) =>{
    console.log(params.MembersId)
    return (
        <div  >
            Members
            {params.MembersId}
        </div>
    )
}

export default Members