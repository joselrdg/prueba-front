import React from 'react';
import { useCategory } from '../../../hooks/useCategory';
// import { usePet } from '../../hooks/usePet';
import TabPanel from "../TabPanel";
import AddPetForm from './AddPetForm';
import PetCharacteristics from './PetCharacteristics';
import PetProfile from './PetProfile';

const folderBox = (folder) => {
    switch (folder) {
        case 0:
            return <PetProfile />
            break;
        case 1:
            return <AddPetForm />
            break;
        case 2:
            return <PetCharacteristics />
            break;

        default:
            break;
    }
}

const PetsScreen = () => {
    const { stateCategory } = useCategory()
    const { folder } = stateCategory
    // const { petsUser } = usePet();
    return (
        <>
            <TabPanel category={0} />
            {
                folderBox(folder)
            }
        </>
    )
}

export default PetsScreen