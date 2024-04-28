// Quest Log Page
class QuestLog {
  selectors = {
    // Daily Quests
    divQuests: "#QuestLogQuests", // Parent elem each quest is in
    divQuest: ".questlog-quest", // Box each quest is in - Used this as first part of selector
    // divQuest: '.questlog-quest:nth-of-type(1)'
    divQuestTitle: ".ql-quest-title",
    btnClaimReward: 'button[onClick*="claim"]',
    divDailyBonus: "#QuestLogDailyAlert",
  };
}

/* Possible Daily Quests
- Title (description)
- Purchase an Item (Purchase 3 items)
- Spin the Wheel (Wheel of Misfortune)
- Groom a Pet - (With Grooming item) - Can get a grooming item from General Store
*/

export const questLog = new QuestLog();
