// Quest Log Page
class QuestLog {
  selectors = {
    // Daily Quests
    divQuests: "#QuestLogQuests", // Parent elem each quest is in
    divQuestTitle: ".ql-quest-title",
    divDailyBonus: "#QuestLogDailyAlert",
    // Top Quest
    divTopQuest: ".questlog-quest:first-of-type",
    btnClaimReward: `.questlog-quest:first-of-type button[onClick*="claim"]`,
    btnBackToQuests: "#QuestLogRewardPopup .button-yellow__2020",
  };

  url = "";
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
