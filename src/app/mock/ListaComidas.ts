import { Item } from '../models/item'

export const comidas2: Item = new Item("test");

comidas2.Id = 124231;

export const ListaComidas: Item[] = [
    { "Id": 1, "Nombre": "Waffles", "Descripcion": "Un conjunto de delicias en el paladar, el mejor waffle de la vida!!", "Foto": "waffle1.png", "Precio": 250, "Calorias": 290 },
    { "Id": 2, "Nombre": "Panqueques", "Descripcion": "Los mejores paqueques, hechos por los mejores pasteleros del mundo, calidad de confianza", "Foto": "panqueques1.png", "Precio": 200, "Calorias": 320 },
    { "Id": 3, "Nombre": "ComboLabs", "Descripcion": "El combo mas completo, ademas de waffles y paqueques, el extra que vos quieras..Pedilo!!", "Foto": "combo22.png", "Precio": 2000, "Calorias": 2340 },
    { "Id": 4, "Nombre": "Logo", "Descripcion": "Nuestro logo, puede comprarlo y se lo entregaremos en formato de stiker.", "Foto": "IMG-20160531-WA0008.png", "Precio": 100, "Calorias": 0 },

];

export const ListaComidas3: Item[] = [
    new Item("Waffles"),
    new Item("Panqueques"),
    new Item("ComboLabs"),
    new Item("ExtraLabs")]

