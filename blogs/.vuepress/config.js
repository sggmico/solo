const slogan = [
    '知识沉淀下来才更有力量。',
    '做正确的事 — 愿景，正确的做事 — 运营。',
    '世界上最可怕的不是明星的技术错误，而是你觉得自己什么都对，最终却什么都没干成。'
]
module.exports = {
    title: '乘风破浪大前端',
    base: '/solo/',
    description: '知识沉淀下来才更有力量',
    head: [
        ['link', { rel: 'icon', href: `/icon/favicon1.png` }]
    ],
    // theme:'reco',
    themeConfig: {
        search: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/blog/' },
            { text: '关于我', link: '/about/' },
            { text: '时间轴', link: '/timeline/'},
            { text: 'Github', link: 'https://github.com/szjxxy' }
            // { text: 'External', link: 'https://google.com' },
        ],
        sidebar: 'auto'
    },
    markdown: {
        lineNumbers: true,
        anchor: {
            // permalinkSymbol: '@'
        }
    }
}