import FarmCount from '../Components/FarmCount'

const GoatFarmCount = () => {

  const url ="https://gunaweldingworks-server.onrender.com/guna-welding-works/getVillageNameGoat"
  const countUrl ="https://gunaweldingworks-server.onrender.com/guna-welding-works/searchVillageNameGoatFarm"
  return (
    <>
    <FarmCount URL={url} CountURL={countUrl}/>
    </>
  )
}

export default GoatFarmCount