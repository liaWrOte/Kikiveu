export const CHANGE_STATUS = 'CHANGE_STATUS';

export const changeStatus = (value, name) => ({
  type: CHANGE_STATUS,
  value,
  name,
});
