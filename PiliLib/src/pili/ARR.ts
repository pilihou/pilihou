module pili {
	export class ARR {
		/**将list拆分成length个一组的数组 */
		public static slice(list: any[], len: number): any[][] {
			let result: any[][] = [];
			for (let i: number = 0, len: number = list.length; i < len; i += length) {
				result.push(list.slice(i, i + length));
			}
			return result;
		}
	}
}