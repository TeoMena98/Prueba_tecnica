const fs = require("node:fs/promises");

async function readData() {
  const data = await fs.readFile("marcadores.json", "utf8");
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile("marcadores.json", JSON.stringify(data));
}

async function getAll() {
  const storedData = await readData();
  if (!storedData.marcadores) {
    throw new Error("Could not find any marcador.");
  }
  return storedData.marcadores;
}

async function add(data) {
  const storedData = await readData();
  const id = crypto.randomUUID();
  storedData.marcadores.unshift({ ...data, id: id });
  await writeData(storedData);
  return id;
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.marcadores || storedData.marcadores.length === 0) {
    throw new Error("Could not find any marcador.");
  }

  const index = storedData.marcadores.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new Error("Could not find marcador for id " + id);
  }

  storedData.marcadores[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.marcadores.filter((ev) => ev.id !== id);
  await writeData({ marcadores: updatedData });
}

exports.getAll = getAll;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
