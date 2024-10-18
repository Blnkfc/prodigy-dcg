

export default function Home() {
  const fetchData = async () => {
    try{
      const response = await fetch('http://localhost:3000/api/get-members')
      const data = await response.json()
      console.log("aaa")
      console.log(data)
    }catch (error) {
      console.log(error)
    }
  }

fetchData()


  return (
    <div>
      STYFF
    </div>
  );
}
