const routes = [
  {
    path: "VasylHol.github.io",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("src/pages/HomePage.vue"),
      },
      {
        name: "movie",
        path: "movie/:id",
        component: () => import("src/pages/MoviePage.vue"),
        props: (route) => ({
          id: route.params.id,
        }),
      },
      {
        name: "favorites",
        path: "favorites",
        component: () => import("src/pages/FavoritesPage.vue"),
      },
      {
        name: "category",
        path: "category/:categoryId",
        component: () => import("src/pages/CategoryPage"),
        props: (route) => ({
          id: +route.params.categoryId,
        }),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
