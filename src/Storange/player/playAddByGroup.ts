import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppError} from "@utils/AppError.ts";
import {PLAYER_COLLECTION} from "../StorageConfig.ts";
import {PlayerStorageDTO} from "./PlayerStorageDTO.ts";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify(newPlayer));
    }catch (e) {
        
    }
}
