import produce from "immer";
import { ActionType, createReducer, PayloadAction } from "typesafe-actions";
import { GitInfo } from "../../types/gitInfo";
import { GitInfoActionType } from "../actions/actionTypes";
import { setGitInfo } from "../actions/gitInfo";
import * as Actions from "../actions";

export interface GitInfoInitState {
  name: string;
  description: string;
}

export const initState: GitInfoInitState = {
  name: "",
  description: "",
};

const setGitInfoHandler = (
  state: GitInfoInitState,
  action: PayloadAction<GitInfoActionType.SET_GIT_INFO, GitInfo>
) => {
  const gitInfo = action.payload;

  return produce(state, (draft) => {
    draft.name = gitInfo.name;
    draft.description = gitInfo.description;
  });
};

export const gitInfoReducer = createReducer<GitInfoInitState, ActionType<typeof Actions>>(
  initState
).handleAction(setGitInfo, setGitInfoHandler);
