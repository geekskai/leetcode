/*
 * @lc app=leetcode.cn id=741 lang=javascript
 *
 * [741] 摘樱桃
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const N = grid.length;
    let dp = new Array(N).fill(null).map(()=>
                new Array(N).fill(null).map(()=>
                    new Array(N).fill(null)))

    /**
     * @param {Number} Ar row for picker A
     * @param {Number} Ac column for picker A
     * @param {Number} Br row for picker B
     */
    let dfs = function(Ar, Ac, Br) {
        let Bc = Ar + Ac - Br;

        if (Ar >= N || Ac >= N || Br >= N || Bc >= N) return -1; // out of boundary
        if (grid[Ar][Ac] < 0 || grid[Br][Bc] < 0) return -1; // meet a thorn
        if ((Ar == N-1 && Ac == N-1) || (Br == N-1 && Bc == N-1)) return grid[N-1][N-1]; // reaches to the end
        if (dp[Ar][Ac][Br]!=null) return dp[Ar][Ac][Br]; // memoization

        let curPickup = (Ar == Br && Ac == Bc)?grid[Ar][Ac]:(grid[Ar][Ac]+grid[Br][Bc]);
        let remainPickUp = Math.max(dfs(Ar+1, Ac, Br+1), // A down, B down
                                    dfs(Ar+1, Ac, Br),   // A down, B right
                                    dfs(Ar, Ac+1, Br+1), // A right, B down
                                    dfs(Ar, Ac+1, Br))   // A right, B right

        if (remainPickUp < 0) return dp[Ar][Ac][Br] = -1; // no available path

        remainPickUp += curPickup;
        return  dp[Ar][Ac][Br] = remainPickUp;
    }

    return Math.max(0, dfs(0, 0, 0));
};
// @lc code=end

