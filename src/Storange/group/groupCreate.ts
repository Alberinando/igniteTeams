import AsyncStorage from "@react-native-async-storage/async-storage"
import {GROUP_COLLECTION} from "../StorageConfig.ts";
import {groupGetAll} from "./groupGetAll.ts";

export async function groupCreate(newGroup: string) {
    try {
        const storedGroup = await groupGetAll();
        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...storedGroup, newGroup]));
    } catch (error){
        throw error;
    }
}