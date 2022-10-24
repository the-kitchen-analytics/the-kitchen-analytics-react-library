import workerCatgoriesJson from '../../data/worker-categories.json'

const getWorkerCategoryDisplayName = (
  name,
  workerCategories = workerCatgoriesJson
) => {
  return workerCategories.find((it) => it.name === name)?.displayName
}

export default getWorkerCategoryDisplayName
