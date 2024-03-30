// Used when iteracting with 'li' elements to create links for each area
// export function createLinkElement(area: string, target: string) {
//   if (area === "") {
//     return `li[onclick="location.href = '/${target}.phtml'"]`;
//   } else {
//     return `li[onclick="location.href = '/${area}/${target}.phtml'"]`;
//   }
// }

export function createLinkElement(target: string) {
  return `li[onclick*='${target}']`;
}
