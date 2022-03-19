function mapButtons(buttons){
    // 将buttons数组,转换为对象形式,方便后续读取,提高代码性能

// 用于收集当前账号拥有的所有的按钮权限
    const mapObj = {};

    buttons.forEach(permissionName => {
        mapObj[permissionName] = true;
    });

    return mapObj;
}


export default mapButtons