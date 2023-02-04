let output = new Array();

const revisedRelations = (relations) => {
  return relations
    .map(JSON.stringify)
    .filter(
      (relation, index, relations) => index === relations.indexOf(relation)
    )
    .map(JSON.parse);
};

const getAList = (relations, numberOfUsers) => {
  let aList = new Array(numberOfUsers);

  for (let i = 0; i < numberOfUsers; i++) {
    aList[i] = [];
  }

  for (let i = 0; i < relations.length; i++) {
    aList[relations[i][0]].push(relations[i][1]);
    aList[relations[i][1]].push(relations[i][0]);
  }

  return aList;
};

function getAllPaths(sourceId, destinationId, aList, currentUsers) {
  let isVisited = new Array(currentUsers.length);

  for (let i = 0; i < currentUsers.length; i++) isVisited[i] = false;

  let path = new Array();
  path.push(sourceId);

  getCurrentPaths(sourceId, destinationId, isVisited, aList, path);
}

function getCurrentPaths(currentNode, destinationId, isVisited, aList, path) {
  if (currentNode === destinationId) {
    output.push(JSON.parse(JSON.stringify(path)));
    return;
  }

  isVisited[currentNode] = true;
  // console.log(aList[currentNode].length);

  for (let i = 0; i < aList[currentNode]?.length; i++) {
    if (!isVisited[aList[currentNode][i]]) {
      path.push(aList[currentNode][i]);
      console.log(path);
      getCurrentPaths(
        aList[currentNode][i],
        destinationId,
        isVisited,
        aList,
        path
      );
      console.log(path);
      path.splice(path.indexOf(aList[currentNode][i]), 1);
    }
  }

  isVisited[currentNode] = false;
}

export const logic = (sourceId, destinationId, relations, currentUsers) => {
  output = new Array();
  relations = revisedRelations(relations);
  console.log(relations);
  let aList = getAList(relations, currentUsers.length);
  console.log(aList);
  getAllPaths(sourceId, destinationId, aList, currentUsers);

  console.log(output);

  return "ok";
};
