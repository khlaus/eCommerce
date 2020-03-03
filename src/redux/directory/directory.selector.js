import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectiorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
