import instance from './options'
// let base = 'http://localhost:3000/'
export function getBookList (callback,errfun){
    instance.get(instance.baseURL+'/books/list').then(res => callback(res)).catch(err=>errfun(err))
}

export function addBook (params,callback,errfun){
    instance.post(instance.baseURL+'/books/add',params).then(res => callback(res)).catch(err=>errfun(err))
}

export function updateBook (params,callback,errfun){
    instance.post(instance.baseURL+'/books/update',params).then(res => callback(res)).catch(err=>errfun(err))
}