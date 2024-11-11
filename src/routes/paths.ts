function path(root, sublink) {
    return `${root}${sublink}`
}

const ROOTS_FEATURES = '/'

export const PATH_FEATURES = {
    gantt: {
        root: path(ROOTS_FEATURES, ''),
    },
}
