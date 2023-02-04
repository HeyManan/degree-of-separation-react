let output = [];

const revisedRelations = (relations) => {
  return new Promise(function (resolve, reject) {
    resolve(
      relations
        .map(JSON.stringify)
        .filter(
          (relation, index, relations) => index === relations.indexOf(relation)
        )
        .map(JSON.parse)
    );
  });
};

const getAList = (relations, numberOfUsers) => {
  return new Promise(function (resolve, reject) {
    let aList = new Array(numberOfUsers);

    for (let i = 0; i < numberOfUsers; i++) {
      aList[i] = [];
    }

    for (let i = 0; i < relations.length; i++) {
      aList[relations[i][0]].push(relations[i][1]);
      aList[relations[i][1]].push(relations[i][0]);
    }
    resolve(aList);
  });
};

function getAllPaths(sourceId, destinationId, aList, currentUsers) {
  let isVisited = new Array(currentUsers.length);

  for (let i = 0; i < currentUsers.length; i++) isVisited[i] = false;

  let path = [];
  path.push(sourceId);

  getCurrentPaths(sourceId, destinationId, isVisited, aList, path);

  return new Promise((resolve, reject) => resolve(output));
}

function getCurrentPaths(currentNode, destinationId, isVisited, aList, path) {
  if (currentNode === destinationId) {
    output.push(JSON.parse(JSON.stringify(path)));
    return;
  }

  isVisited[currentNode] = true;

  for (let i = 0; i < aList[currentNode]?.length; i++) {
    if (!isVisited[aList[currentNode][i]]) {
      path.push(aList[currentNode][i]);
      // console.log(path);
      getCurrentPaths(
        aList[currentNode][i],
        destinationId,
        isVisited,
        aList,
        path
      );
      // console.log(path);
      path.splice(path.indexOf(aList[currentNode][i]), 1);
    }
  }

  isVisited[currentNode] = false;
}

export const logic = (sourceId, destinationId, relations, currentUsers) => {
  output = new Array();

  return new Promise(function (resolve, reject) {
    revisedRelations(relations)
      .then(function (relations) {
        return relations;
      })
      .then(function (relations) {
        return getAList(relations, currentUsers.length);
      })
      .then(function (aList) {
        return aList;
      })
      .then(function (aList) {
        return getAllPaths(sourceId, destinationId, aList, currentUsers);
      })
      .then(function (output) {
        console.log(output);
        resolve(output);
      });
  });
};
