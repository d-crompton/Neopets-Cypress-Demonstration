// Used when iteracting with 'li' elements to create links for each area
export function navigateToLink(area: string, target: string) {
  return `li[onclick="location.href = '/${area}/${target}.phtml'"]`;
}
