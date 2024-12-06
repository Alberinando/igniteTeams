import {playersGetByGroups} from './playersGetByGroups.ts';

export async function playersGetByGroupsAndTeams(group: string, team: string) {
  try {
    const storage = await playersGetByGroups(group);
    const players = storage.filter(player => player.team === team);

    return players;
  } catch (e) {
    throw e;
  }
}
