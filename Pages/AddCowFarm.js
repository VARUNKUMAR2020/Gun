import AddFarm from '../Components/AddFarm'

const AddCowFarm = () => {
  const url = "https://gunaweldingworks-server.onrender.com/guna-welding-works/addingCowFarms"
  return (
   <>
   <AddFarm URL={url}/>
   </>
  )
}

export default AddCowFarm