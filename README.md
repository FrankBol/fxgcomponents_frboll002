# TP1 Création de Components React!

&nbsp;&nbsp;&nbsp;

## 🤓 Description
Vous trouverez dans ce dossier une StoryBook de 10 Components React modifiable incluant 3 exemples de modification pour chaqun!

<img src="./lib/src/assets/img/strorybook.jpg" height="300"/>

&nbsp;&nbsp;

## 🎌 Pour Démarrer la StoryBook
```
yarn storybook
```

--------

&nbsp;&nbsp;

## Liste des Components 
1. **Alert**  ([code Component](./src/components/Alert/Alert.js), [code Story](./src/stories/Alert.stories.jsx))
2. **Avatar**  ([code Component](./src/components/Avatar/Avatar.js), [code Story](./src/stories/Avatar.stories.jsx))
3. **Button**  ([code Component](./src/components/Button/Button.js), [code Story](./src/stories/Button.stories.jsx))
4. **Card**  ([code Component](./src/components/Card/Card.js), [code Story](./src/stories/Card.stories.jsx))
5. **DropDown**  ([code Component](./src/components/Dropdown/Dropdown.js), [code Story](./src/stories/Dropdown.stories.jsx))
6. **Navbar**  ([code Component](./src/components/Alert/Alert.js), [code Story](./src/stories/Alert.stories.jsx))
7. **Pagination**  ([code Component](./src/components/Pagination/Pagination.js), [code Story](./src/stories/Pagination.stories.jsx))
8. **Table**  ([code Component](./src/components/Table/Table.js), [code Story](./src/stories/Table.stories.jsx))
9. **Tag**  ([code Component](./src/components/Tag/Tag.js), [code Story](./src/stories/Tag.stories.jsx))
10. **Upload**  ([code Component](./src/components/Upload/Upload.js), [code Story](./src/stories/Upload.stories.jsx))

&nbsp;&nbsp;

## 🫵 Modification Possible des Components

### [Alert](https://react-bootstrap.github.io/components/alerts/) (React-Bootstrap)
| Nom | Type | Option | Description | 
| :---: | :---: | :---: | :---: | 
| text | string | "Le texte de votre choix" | Le texte qui apparaitreras pour votre alerte | 
| varient | string | 'primary', 'secondary', 'success', 'danger',<br/>'warning', 'info', 'dark', 'light' | couleur d'arrière plan | 


### [Avatar](https://ant.design/components/avatar/) (ANT-Desing)
| Nom | Type | Option | Description | 
| :---: | :---: | :---: | :---: | 
| color | string | (rgb, rgba, nomDeCouleur etc..) | La couleur d'arrière plan désiré | 
| varient | string | 'Le texte de votre choix' | Le mot qui apparaitras pour votre avtatar | 
| type | string | 'small','medium','large' | Grosseur de l'avatar | 

### [Button](https://ant.design/components/button/) (ANT-Desing)
| Nom | Type | Option | Description | 
| :---: | :---: | :---: | :---: | 
| text | string | 'Le texte de votre choix' | Le texte qui apparais dans le bouton | 
| type | string |'primary', 'ghost', 'dashed', 'link', 'text', default' | Aspect du bouton | 
| size | string | 'small','medium','large' | Grosseur du Boutton | 

### [Card](https://react-bootstrap.github.io/components/cards/) (React-Bootstrap)
| Nom | Type | Option | Description | 
| :---: | :---: | :---: | :---: | 
| textTitle | string | "Le texte de votre choix" | Le texte qui apparaitreras dans le corp de la carte | 
| textBody | string | "Le texte de votre choix" | Le texte qui apparaitreras pour le titre de la carte | 
| img | string | 'Le lien ou le chemin de l'image de votre choix' | L'image qui apparaitras dans la carte | 
| width | string | (rem, em, %, px etc.. ) | Dimention de l'image shouaiter |

### [Dropdown](https://ant.design/components/dropdown/) (ANT-Desing)
| Nom | Type | Option | Description | 
| :---: | :---: | :---: | :---: | 
| text | string | 'Le texte de votre choix' | Le texte affiché par default | 
| trigger | string | 'click'<br/>'hover'<br/>contexMenu | Clic gauche pour défiler<br/>Passer au dessus<br/>Clic droit sur pour défiler | 

### [NavBar](https://react-bootstrap.github.io/components/navbar/) (React-Bootstrap)
| Nom | Type | Option | Description | 
| :---: | :---: | :---: | :---: | 
| bgColor | string | 'primary', 'secondary', 'success', 'danger',<br/>'warning', 'info', 'dark', 'light' | couleur d'arrière plan | 
| textColor | string | 'dark', 'light' | couleur du texte qui s'ajuste selon la couleur de l'arrière plan | 

### [Pagination](https://ant.design/components/pagination/) (ANT-Desing)
| Nom | Type | Option | Description | 
| :---: | :---: | :---: | :---: | 
| totalItem | number | le nombre de votre choix | nombre d'items maximum souhaité dans une page | 
| jumperVisible | boolean | true, false | pour afficher le "jumper" | 
| changerVisible | boolean | true, false | pour afficher le "changer" |

### [Table](https://react-bootstrap.github.io/components/table/) (React-Bootstrap)
| Nom | Type | Option | Description | 
| :---: | :---: | :---: | :---: | 
| size | string | 'sm', 'null' | compact le tableau en réduisant le "padding" | 
| darkMode | string | 'dark', 'null'| met le tableau en mode sombre | 

### [Tag](https://ant.design/components/tag/) (ANT-Desing)
| Nom | Type | Option | Description | 
| :---: | :---: | :---: | :---: | 
| color | string | (rgb, rgba, nomDeCouleur etc..) | choix de la couleur du Tag | 

### [Upload](https://ant.design/components/upload/) (ANT-Desing)
| Nom | Type | Option | Description | 
| :---: | :---: | :---: | :---: | 
| text | string | 'Le texte de votre choix' | nomme le nom du téléchargement que vous souhaiter |

------------

&nbsp;&nbsp;

## 📖 Bibliothèque externe Utilisé 
* [React-Bootstarp](https://react-bootstrap.github.io/)
* [ANT Desing](https://ant.design/)

&nbsp;&nbsp;

## 🕺Contributeurs 
- [Francis Bolduc](https://github.com/FrankBol)
- [Gabriel Lafrance](https://github.com/woobay)


