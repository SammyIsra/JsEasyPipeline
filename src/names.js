const defaultNames = [
  "Sammy",
  "David",
  "Alyssa",
  "Andrew",
  "Helen",
  "Zack",
  "Bonnie",
  "Samantha"
];

export function funkyFilteredNames(names = [...defaultNames]) {
  return names
    .filter(name => name.toLocaleLowerCase()[0] == "a")
    .map(name => name.toLocaleUpperCase());
}
