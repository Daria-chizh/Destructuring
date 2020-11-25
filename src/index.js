export default function characterInformation({ special = [] }) {
  const newArray = [];

  for (const {
    id, name, icon, description,
  } of special) {
    const newObject = {};
    newObject.id = id;
    newObject.name = name;
    newObject.icon = icon;
    newObject.description = description;

    if (!description) {
      newObject.description = 'Описание недоступно';
    }
    newArray.push(newObject);
  }

  return newArray;
}
