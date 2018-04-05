module.exports = {
    apps: [
        {
            name: "chanoch",
            script: "./dist/server/index.js",
            watch: true,
            env: {
                "NODE_ENV": "development",
            },
            env_production: {
                "NODE_ENV": "production"
            }
        }
    ]
}

