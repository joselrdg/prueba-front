import React from "react";
import { useCategory } from "../../../hooks/useCategory";
// import { usePet } from '../../hooks/usePet';
import TabPanel from "../TabPanel";
import AddPet from "./AddPet.jsx/AddPet";
import Hygiene from "./Hygiene/Hygiene";
import Appointments from "./Appointments";
import Medication from "./Medication";
// import PetCharacteristics from './PetCharacteristics';
import PetProfile from "./PetProfile";
import Breed from "./Breed";
import Review from "./Review";

const folderBox = (folder) => {
  switch (folder) {
    case 0:
      return <PetProfile />;
    case 1:
      return <Appointments />;
    case 2:
      return <Hygiene />;
    case 3:
      return <Medication />;
    case 4:
      return <Review />;
    case 5:
      return <Breed />;
    case 6:
      return <AddPet action='edit'/>;
    case 7:
      return <AddPet action='add'/>;
    default:
      break;
  }
};

const PetsScreen = () => {
  const { stateCategory } = useCategory();
  const { folder } = stateCategory;
  console.log(folder)
  // const { petsUser } = usePet();
  return (
    <>
      <TabPanel category={0} />
      {folderBox(folder)}
    </>
  );
};

export default PetsScreen;
