var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var pili;
(function (pili) {
    var ARR = (function () {
        function ARR() {
        }
        /**将list拆分成length个一组的数组 */
        ARR.slice = function (list, len) {
            var result = [];
            for (var i = 0, len_1 = list.length; i < len_1; i += length) {
                result.push(list.slice(i, i + length));
            }
            return result;
        };
        return ARR;
    }());
    pili.ARR = ARR;
    __reflect(ARR.prototype, "pili.ARR");
})(pili || (pili = {}));
//# sourceMappingURL=ARR.js.map