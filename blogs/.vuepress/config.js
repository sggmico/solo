module.exports = {
    title: 'SGG',
    base: '/solo/',
    description: '知识沉淀下来才更有力量',
    head: [
        ['link', { rel: 'icon', href: `/icon/favicon.ico` }]
    ],
    themeConfig: {
        search: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/blog/' },
            { text: '关于我', link: '/about/' },
            { text: 'Github', link: 'https://github.com/szjxxy' }
            // { text: 'External', link: 'https://google.com' },
        ],
        sidebar: {
            '/blog/2018-06/': [
                '/',
                '/blog/2018-06/',
                'javascript-小题测试'
            ],
            '/blog/2018-08/': [
                '/',
                '/blog/2018-08/',
                'reduce'
            ]
            // '/': [
            //     '',
            //     ''
            // ]
        }
    },
    markdown: {
        anchor: {
            permalinkSymbol: '@'
        }
    }
}