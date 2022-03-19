function filterAsyncRoutes(asyncRoutes,routeNames){
    // 根据传入的两个数组,最终要返回出去一个当前用户可以访问的异步路由数组
    // 内部必须具有完整的路由对象信息
    // filter的返回值,根据回调函数的结果来决定保留原数组中的哪些元素,最终组成一个新的数组

    // 如果当前路由对象的路由别名,在routeNames数组中出现过,说明当前这项路由是可以访问的

    const newAsyncRoutes = asyncRoutes.filter((routeObj)=>{
        const name = routeObj.name;

        // if(routeObj.children&&routeObj.children.length){
        if(routeObj.children?.length){
            routeObj.children = filterAsyncRoutes(routeObj.children,routeNames);
        }

        return routeNames.includes(name);
    })

    return newAsyncRoutes;
}


export default filterAsyncRoutes