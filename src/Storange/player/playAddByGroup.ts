import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppError} from "@utils/AppError.ts";
import {PLAYER_COLLECTION} from "../StorageConfig.ts";
import {PlayerStorageDTO} from "./PlayerStorageDTO.ts";
import {playersGetByGroups} from "./playersGetByGroups.ts";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {
        const storedPlayers = await playersGetByGroups(group);
        const playerAlredyExists = storedPlayers.filter(player => player.name === newPlayer.name);

        if (playerAlredyExists.length > 0) {
            throw new AppError("Essa pessoa já est[a adicionada em um time aqui.")
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer]);
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
    } catch (e) {
        throw AppError;
    }
}
