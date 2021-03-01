import ajax from '../../utils/ajax.js';
import {GETINDEXDATAMUTATION} from '../mutation-types.js';

const state = {
	indexData:{}
};

const mutations={
	[GETINDEXDATAMUTATION](state,indexData){
		// mutation并不是我们直接调用的,他是回调函数,所以他只能接受两个实参
		// 我们传递是实参是给commit,与mutation无关
		// console.log('state',indexData);
		state.indexData = indexData;
	}
};

const actions={
	async getIndexData(store){
		let indexData = await ajax('/getIndexData');
		// console.log('getIndexData',indexData);
		store.commit(GETINDEXDATAMUTATION,indexData);
	}
};

const getters={
	
};

export default {
	state,
	mutations,
	actions,
	getters
}