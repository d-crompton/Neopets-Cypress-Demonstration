// Functions related to Pet's Status
import { hungerStatuses } from "../fixtures/petStatus";

// If the pet's hunger status is in the "red" return true
export function isPetHungry(statusText) {
  if (
    statusText === hungerStatuses.fine ||
    statusText === hungerStatuses.satiated ||
    statusText === hungerStatuses.very_full
  ) {
    return false;
  } else {
    return true;
  }
}
