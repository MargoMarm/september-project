export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUser = state => state.auth.user;

export const selectDailyTime = state => state.auth.user.dailyTime;

export const selectDailyСalories = state => state.auth.user.dailyСalories;

export const selectError = state => state.auth.error;

