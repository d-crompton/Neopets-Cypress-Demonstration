// Quest Log Page
class QuestLog {
  selectors = {
    // Daily Quests
    divQuests: "#QuestLogQuests", // Parent elem each quest is in
    divDailyBonus: "#QuestLogDailyAlert",
    // Top Quest
    divTopQuest: ".questlog-quest:first-of-type",
    divTopQuestTitle: ".questlog-quest:first-of-type .ql-quest-title",
    divTopQuestDesc: ".questlog-quest:first-of-type .ql-quest-description",
    divTopQuestTaskNum: ".questlog-quest:first-of-type .ql-task-num",
    btnClaimReward: `.questlog-quest:first-of-type button[onClick*="claim"]`,
    btnBackToQuests: "#QuestLogRewardPopup .button-yellow__2020",
  };

  url = "questlog/";
}

export const questLog = new QuestLog();
