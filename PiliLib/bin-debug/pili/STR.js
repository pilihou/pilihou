var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var pili;
(function (pili) {
    var STR = (function () {
        function STR() {
        }
        /**
         * 将ori用fillStr来填充,如fill(1,"000")，输出001
         * @param ori 要填充的源
         * @param fillStr 填充内容
         * @param isPre 是否放前面
         */
        STR.fill = function (ori, fillStr, isPre) {
            if (isPre === void 0) { isPre = true; }
            var strOri = ori + "";
            var len = strOri.length;
            var fillLen = fillStr.length;
            return len >= fillLen ? strOri : isPre ? fillStr.substring(0, fillLen - len) + strOri : strOri + fillStr.substring(len);
        };
        return STR;
    }());
    pili.STR = STR;
    __reflect(STR.prototype, "pili.STR");
})(pili || (pili = {}));
//# sourceMappingURL=STR.js.map