export default function toPascalCase(str: string) {
  const arr = str.split(/\s|_/);
  for (let i = 0, l = arr.length; i < l; i++) {
    arr[i] =
      arr[i].substr(0, 1).toUpperCase() +
      (arr[i].length > 1 ? arr[i].substr(1).toLowerCase() : "");
  }
  return arr.join(" ");
}
