import {CONTACTS_LIST, RESOURCES, ECRAN_PDF, CREATE_CONTACT} from './routeNames'
export const data = [
    {
        id: 1,
        title: 'Creation Contact',
        subtitle: 'Un nouveau contact crée ?',
        content: 'Les informations necessaire à la création !',
        componentName: CREATE_CONTACT,
        icon:'heartbeat',
        img : '../assets/images/create-contact.jpg'
        
    },
    {
        id:2,
        title: 'Contacts List',
        subtitle: 'Tous les users disponibles !',
        content: 'Les informations necessaire !',
        componentName: CONTACTS_LIST,
        icon:"camera",
        img : '../assets/images/contacts-list.jpg'
        
    },
    {
        id: 3,
        title: 'Afficher PDF',
        subtitle: 'Un pdf prét à etre affiché !',
        content: 'Les informations necessaire !',
        componentName: ECRAN_PDF,
        icon : "add-a-photo",
        img : '../assets/images/ecran-pdf.png'
        
    },
    {
        id: 4,
        title: 'Resources List',
        subtitle: 'Tous les resources disponibles !',
        content: 'Les informations necessaire !',
        componentName: RESOURCES,
        img : '../assets/images/resources-list.jpg'
        
    },
   

]
