import { createAsyncAction, createAction } from "typesafe-actions";
import { GitInfo } from "../../types/gitInfo";
import { GitInfoActionType } from "./actionTypes";

export const loadGitInfoAsync = createAsyncAction(
  GitInfoActionType.LOAD_GIT_INFO_REQUEST,
  GitInfoActionType.LOAD_GIT_INFO_SUCCESS,
  GitInfoActionType.LOAD_GIT_INFO_FAILURE
)<undefined, GitInfo, string>();

export const setGitInfo = createAction(GitInfoActionType.SET_GIT_INFO)<GitInfo>();
