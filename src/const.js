export const STATES_IDS = {
    focus: 'focus',
    shortBreak: 'shortBreak',
    longBreak: 'longBreak',
  };
  
  export const STATE_INFO = {
    [STATES_IDS.focus]: 'Focus',
    [STATES_IDS.shortBreak]: 'Short Break',
    [STATES_IDS.longBreak]: 'Long Break',
  };
  
  export const STATE_SECONDS = {
    [STATES_IDS.focus]: 25 * 60, // 25 minutes
    [STATES_IDS.shortBreak]: 5 * 60, // 5 minutes
    [STATES_IDS.longBreak]: 15 * 60, // 15 minutes
  };
  
  export const STATE_FLOW = [
    STATES_IDS.focus,
    STATES_IDS.shortBreak,
    STATES_IDS.focus,
    STATES_IDS.shortBreak,
    STATES_IDS.focus,
    STATES_IDS.shortBreak,
    STATES_IDS.focus,
    STATES_IDS.longBreak,
    // ...
  ];
  