import { LearningCycleState } from '../types/app';

export const saveState = (state: LearningCycleState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('learningCycleState', serializedState);
  } catch (error) {
    console.error("Could not save state", error);
  }
};

export const loadState = (): LearningCycleState | undefined => {
  try {
    const serializedState = localStorage.getItem('learningCycleState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Could not load state", error);
    return undefined;
  }
};