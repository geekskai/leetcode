/*
 * @lc app=leetcode.cn id=638 lang=javascript
 *
 * [638] 大礼包
 */

// @lc code=start
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
 var shoppingOffers = function(price, special, needs) {
    const memo = new Map();

    // 记忆化搜索计算满足购物清单所需花费的最低价格
    const dfs = (price, special, curNeeds, filterSpecial, n) => {
        if (!memo.has(curNeeds)) {
            let minPrice = 0;
            for (let i = 0; i < n; ++i) {
                minPrice += curNeeds[i] * price[i]; // 不购买任何大礼包，原价购买购物清单中的所有物品
            }
            for (const curSpecial of filterSpecial) {
                const specialPrice = curSpecial[n];
                const nxtNeeds = [];
                for (let i = 0; i < n; ++i) {
                    if (curSpecial[i] > curNeeds[i]) { // 不能购买超出购物清单指定数量的物品
                        break;
                    }
                    nxtNeeds.push(curNeeds[i] - curSpecial[i]);
                }
                if (nxtNeeds.length === n) { // 大礼包可以购买
                    minPrice = Math.min(minPrice, dfs(price, special, nxtNeeds, filterSpecial, n) + specialPrice);
                }
            }
            memo.set(curNeeds, minPrice);
        }
        return memo.get(curNeeds);
    }

    const n = price.length;

    // 过滤不需要计算的大礼包，只保留需要计算的大礼包
    const filterSpecial = [];
    for (const sp of special) {
        let totalCount = 0, totalPrice = 0;
        for (let i = 0; i < n; ++i) {
            totalCount += sp[i];
            totalPrice += sp[i] * price[i];
        }
        if (totalCount > 0 && totalPrice > sp[n]) {
            filterSpecial.push(sp);
        }
    }

    return dfs(price, special, needs, filterSpecial, n);
};

// @lc code=end

