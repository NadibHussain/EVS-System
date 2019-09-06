// server IP
const serverIp = "http://192.168.87.244:8080";

// voter url List
export const voterListUrl = `${serverIp}/get`;
export const addNewVoterUrl = `${serverIp}/add`;
export const deleteVoterUrl = `${serverIp}/delete`;
export const loginUrl = `${serverIp}/verify/login`;
export const enableVote = `${serverIp}/enable`;

// president url list
export const presidentListUrl = `${serverIp}/list/president`;
export const addNewPresidentUrl = `${serverIp}/addPresident`;
export const deletePresidentUrl = `${serverIp}/list/president/delete`;
export const presidentVoteUrl = `${serverIp}/count/president`;

// executive url list
export const executiveListUrl = `${serverIp}/list/executive`;
export const addNewExecutiveUrl = `${serverIp}/addExecutive`;
export const deleteExecutiveUrl = `${serverIp}/list/executive/delete`;
export const executiveVoteUrl = `${serverIp}/count/executive`;

// export const getBoothListUrl = `${serverIp}/getBooth`;
export const setBoothAccessUrl= `${serverIp}/setBooth`;
export const getBoothAccessUrl= `${serverIp}/getBooth`;