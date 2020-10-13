exports.createPages = ({ graphql, actions }) => {
    const { createRedirect } = actions;

    createRedirect({ fromPath: "/discord", toPath: "https://discord.gg/seheC2W" })
    createRedirect({ fromPath: "/donate", toPath: "https://store.azisaba.net" })
    createRedirect({ fromPath: "/jms", toPath: "https://minecraft.jp/servers/59b7c551a9b0bd23dc00834d" })
    createRedirect({ fromPath: "/jms/*", toPath: "https://minecraft.jp/servers/59b7c551a9b0bd23dc00834d/:splat" })
    createRedirect({ fromPath: "/services", toPath: "https://github.com/azisaba" })
    createRedirect({ fromPath: "/github", toPath: "https://github.com/azisaba" })

    createRedirect({ fromPath: "/external", toPath: "/", isPermanent: true })
    createRedirect({ fromPath: "/welcome", toPath: "/", isPermanent: true })

    let wordPressCompat = {
        "/staff": [
            "/wp-login.php",
            "/login",
            "/admin-introduction",
            "/admins",
            "/info/admin",
            "/info/admins",
            "/information/administrators",
            "/author/*"
        ],
        "/servers": [
            "/about-leongunwar",
            "/about/*"
        ],
        "/terms": [
            "/rules",
            "/info/rules",
            "/information/rules"
        ],
        "/how-to-join": [
            "/wiki/how-to-join",
            "/guide/how-to-join"
        ],
        "/tags": [
            "/category/*",
            "/tag/*"
        ],
        "/": [
            "/info/*",
            "/information/*",
            "/broadcast/*",
            "/news/*",
            "/announcements/*",
            "/guide/*",
            "/main-guide/*",
            "/wiki/*"
        ]
    }
    Object.keys(wordPressCompat).forEach(to => {
        wordPressCompat[to].forEach(from => {
            createRedirect({ fromPath: from, toPath: to, isPermanent: true })
        })
    })
}
