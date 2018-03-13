var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var pili;
(function (pili) {
    var OBJ = (function () {
        function OBJ() {
        }
        /**判断obj是否为null或{} */
        OBJ.isEmpty = function (obj) {
            return obj ? Object.keys(obj).length == 0 : obj == null;
        };
        /**清空obj中的数据 */
        OBJ.empty = function (obj) {
            if (obj) {
                if (obj instanceof Array)
                    obj.length = 0;
                else {
                    for (var key in obj) {
                        delete obj[key];
                    }
                }
            }
        };
        /**进行对象的深度克隆,注意了,只支持普通的数据模式的对象,不支持带方法的对象克隆 */
        OBJ.clone = function (obj) {
            return obj ? JSON.parse(JSON.stringify(obj)) : null;
        };
        return OBJ;
    }());
    pili.OBJ = OBJ;
    __reflect(OBJ.prototype, "pili.OBJ");
})(pili || (pili = {}));
//# sourceMappingURL=OBJ.js.map