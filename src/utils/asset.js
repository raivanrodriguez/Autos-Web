// Rutas a archivos de /public que funcionan tanto en local ("/") como en
// GitHub Pages ("/nombre-del-repo/"). Uso: asset("/Auto/Lambor/1.png")
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "");
