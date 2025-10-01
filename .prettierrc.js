module.exports = {
    plugins: [require("@trivago/prettier-plugin-sort-imports")],
    printWidth: 80,
    tabWidth: 4,
    importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderGroupNamespaceSpecifiers: true,
};
