const listaPlatos = [
    {
    id: 1,
    titulo: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio: "U$S 65.50"
},
{
    id: 2,
    titulo: "Risotto de berenjena",
    descripcion: "Risotto de berenjena y queso de cabra",
    precio: "U$S 47.00"
},
{
    id: 3,
    titulo: "Mousse de arroz",
    descripcion: "Mousse de arroz con leche y aroma de azahar",
    precio: "U$S 20.50"
},
{
    id: 4,
    titulo: "Espárragos blancos",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: "U$S 80.50"
},
{
    id: 5,
    titulo: "Milanesa con Pure",
    descripcion: "Milanesa de seytan con pure mixto",
    precio: "U$S 1.50"
},
]



const mainControllers = {
    index: (req, res) => {
        res.render("index", {menu: listaPlatos})
    },
    detalleMenu: (req, res) => {
        const idusuario = req.params.id
        const plato =listaPlatos.find(plato=> plato.id==idusuario)
        res.render("detalleMenu", {plato})
    }
}
module.exports = mainControllers