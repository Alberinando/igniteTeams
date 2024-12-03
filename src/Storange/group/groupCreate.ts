import AsyncStorage from '@react-native-async-storage/async-storage';
import {GROUP_COLLECTION} from '../StorageConfig.ts';
import {groupGetAll} from './groupGetAll.ts';
import {AppError} from "@utils/AppError.ts";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroup = await groupGetAll();
    const groupAlreadyExists = storedGroup.includes(newGroup.trim());

    if(groupAlreadyExists){
      throw new AppError("Group already exists")
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storedGroup, newGroup.trim()]),
    );
  } catch (error) {
    throw error;
  }
}
