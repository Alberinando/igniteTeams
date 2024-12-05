import AsyncStorage from "@react-native-async-storage/async-storage";
import {PlayerStorageDTO} from "./PlayerStorageDTO.ts";
import {PLAYER_COLLECTION} from "../StorageConfig.ts";

export async function playersGetByGroups(groupId: string) {
    try {
        const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${groupId}`);

        const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];
        return players;
    } catch (e) {
        throw e;
    }
}