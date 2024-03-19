import FarmCount from '../Components/FarmCount'

const CowFarmCount = () => {
  const url ="https://gunaweldingworks-server.onrender.com/guna-welding-works/getVillageNameCow"
  const countUrl ="https://gunaweldingworks-server.onrender.com/guna-welding-works//searchVillageNameCowFarm"
  return (
    <>
    <FarmCount URL={url} CountURL={countUrl}/>
    </>
  )
}

export default CowFarmCount