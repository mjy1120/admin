let mint = [{
    path: "one",
    name: 'one',
    component: () => import("@/views/product/index")
}, {
    path: "publish",
    name: "publish",
    component: () => import("@/views/product/publish")
}, {
    path: "manage",
    name: "manage",
    component: () => import("@/views/product/manage")
}];
export default mint;