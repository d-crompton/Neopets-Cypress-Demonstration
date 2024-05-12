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

/* Possible Daily Quests
- Title (description)
- Purchase an Item (Purchase 3 items)
- Spin the Wheel (Wheel of Misfortune)
- Groom a Pet - (With Grooming item) - Can groom from the homepage pet care window
- Feed a Pet
- Play a Game 
*/

/* 
// Daily Quest Function
- Take numQuestsCompleted - If < 5, rerun function - Try without recursive first, using different IT blocks
- Run functions from cypress\support\questFunctions.js
*/

export const questLog = new QuestLog();
