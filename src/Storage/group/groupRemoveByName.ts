import AsyncStorage from "@react-native-async-storage/async-storage";
import {GROUP_COLLECTION, PLAYER_COLLECTION} from "@storage/StorageConfig.ts";
import {groupGetAll} from "@storage/group/groupGetAll.ts";

export async function groupRemoveByName(groupName: string) {
    try {
        const storageGroups = await groupGetAll();
        const groups = storageGroups.filter(group => group !== groupName);

        await AsyncStorage.setItem(`${GROUP_COLLECTION}`, JSON.stringify(groups));
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);
    } catch (e) {
        throw e;
    }
}
