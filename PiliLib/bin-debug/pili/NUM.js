var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var pili;
(function (pili) {
    var NUM = (function () {
        function NUM() {
        }
        /**角度转成弧度 */
        NUM.degree2Radian = function (degree) {
            return degree * Math.PI / 180;
        };
        /**弧度转成角度 */
        NUM.radian2Degree = function (radian) {
            return radian / Math.PI / 180;
        };
        /**两点之间距离 */
        NUM.getDistance = function (x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        };
        /**两点之间距离的平方 */
        NUM.getDistance2 = function (x1, y1, x2, y2) {
            return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
        };
        /**随机获取小于等于seed的正整数 */
        NUM.getRandInt = function (seed) {
            return seed * Math.random() << 0;
        };
        /**获取介于min和max之间的随机数[min,max) */
        NUM.getBetweenRand = function (min, max) {
            return Math.random() * (max - min) + min;
        };
        /**获取介于min和max之间的随机整数[min,max) */
        NUM.getBetweenRandInt = function (min, max) {
            return Math.random() * (max - min) + min << 0;
        };
        return NUM;
    }());
    pili.NUM = NUM;
    __reflect(NUM.prototype, "pili.NUM");
})(pili || (pili = {}));
//# sourceMappingURL=NUM.js.map