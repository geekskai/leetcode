/*
 * @lc app=leetcode.cn id=749 lang=javascript
 *
 * [749] 隔离病毒
 */

// @lc code=start
/**
 * @param {number[][]} isInfected
 * @return {number}
 */

var containVirus = function (grid) {
  if (!grid.length || !grid[0].length) return 0;
  let BLOCKED = -1,
    HEALTHY = 0,
    UNGROUPED = 1; //, GROUPED >=2
  let g = grid,
    walls = 0;
  while (true) {
    // console.table(g)
    let [grouped, groupIds] = group(g);
    let [max, id, wallt] = findDangerGroup(groupIds);
    if (max == 0) return walls;
    walls += wallt;
    g = nextDay(grouped, id, groupIds);
  }

  function nextDay(grouped = grid, id = 0, groupIds) {
    for (let i = 0; i < grouped.length; i++) {
      for (let j = 0; j < grouped[i].length; j++) {
        grouped[i][j] =
          grouped[i][j] == id ? -1 : grouped[i][j] > 0 ? 1 : grouped[i][j];
      }
    }
    for (let [groupId, [cells]] of groupIds.entries()) {
      if (id == groupId) continue;
      loopCells(cells, (i, j) => (grouped[i][j] = 1));
    }
    return grouped;

    function loopCells(cells = new Map(), cb = () => {}) {
      cells.forEach((jSet = new Set(), i) => jSet.forEach((j) => cb(i, j)));
    }
  }

  function findDangerGroup(groupIds = new Map()) {
    let max = 0,
      id = 0,
      wallt = 0;
    for (let [groupId, [cells, countWalls, countCells]] of groupIds.entries()) {
      if (countCells > max) {
        (max = countCells), (id = groupId), (wallt = countWalls);
      }
    }
    return [max, id, wallt];
  }

  //  [[0,1,0,0,0,0,0,1],   [[0,2,0,0,0,0,0,3],
  //  [0,1,0,0,0,0,0,1],    [0,2,0,0,0,0,0,3],
  //  [0,0,0,0,0,0,0,1], => [0,0,0,0,0,0,0,3],
  //  [0,0,0,0,0,0,0,0]]    [0,0,0,0,0,0,0,0]]
  function group(grid) {
    let idIterator = getGroupId(),
      groupIds = new Map();
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == UNGROUPED) {
          let groupId = idIterator.next();
          setGroup(i, j, groupId.value, grid);
        }
      }
    }
    return [grid, groupIds];

    function setGroup(i, j, groupId, grid) {
      if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) return;
      if (grid[i][j] == BLOCKED) return;
      if (grid[i][j] == HEALTHY) {
        if (!groupIds.has(groupId)) groupIds.set(groupId, [new Map(), 0, 0]);
        let groupArr = groupIds.get(groupId),
          groupCells = groupArr[0];
        if (!groupCells.has(i)) groupCells.set(i, new Set());
        let rowCells = groupCells.get(i);
        groupArr[1]++;
        if (!rowCells.has(j)) groupArr[2]++;
        return rowCells.add(j);
      }
      if (grid[i][j] > UNGROUPED) return;
      grid[i][j] = groupId;
      setGroup(i + 1, j, groupId, grid);
      setGroup(i - 1, j, groupId, grid);
      setGroup(i, j + 1, groupId, grid);
      setGroup(i, j - 1, groupId, grid);
    }
    function* getGroupId() {
      let i = 2;
      while (true) {
        yield i;
        i++;
      }
    }
  }
};

// @lc code=end
