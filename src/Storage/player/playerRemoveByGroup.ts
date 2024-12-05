import AsyncStorage from "@react-native-async-storage/async-storage";
import {PLAYER_COLLECTION} from "@storage/StorageConfig.ts";
import {playersGetByGroups} from "@storage/player/playersGetByGroups.ts";

export async function playerRemoveByGroup(playerName: string, group: string) {
    try {
        const storage = await playersGetByGroups(group);
        const filteredPlayers = storage.filter(player => player.name !== playerName);
        const players = JSON.stringify(filteredPlayers);
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
    }catch (e) {
        throw e;
    }
}