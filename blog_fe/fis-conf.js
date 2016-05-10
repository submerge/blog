fis.match('*.tmpl', {
    parser: fis.plugin('utc'),
    isJsLike: true,
    release: false
});

fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        // allInOne: true,
        useInlineMap: true // 资源映射表内嵌
    })
});


fis.match('**.ejs', {
	useMap: true,
	isHtmlLike: true,
	useSameNameRequire: true
});

fis.match('**.less', {
    useHash: false,
    parser: fis.plugin('less'),
    rExt: '.css'
});

fis.match('*.js', {
    useHash: false,
    useMap: true,
});