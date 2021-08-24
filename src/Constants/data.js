export const Constants = Object.freeze({
    HERO: {
        Header: "HEROES",
        PersonType: "Hero",
        Link: "/heroes"
    },
    VILLAIN: {
        Header: "VILLAINS",
        PersonType: "Villain",
        Link: "/villains"
    },
    ABOUT: {
        Header: "ABOUT",
        Link: "/about"
    }
})

export const cardsData = [
    {
        id: 1,
        title: "Aslaug",
        description: "warrior queen",
        personType: Constants.HERO.PersonType
    },
    {
        id: 2,
        title: "Ivar the Boneless",
        description: "commander of the Great Heathen Army",
        personType: Constants.HERO.PersonType
    },
    {
        id: 3,
        title: "Lagertha the Shieldmaiden",
        description: "aka Hlaogeror",
        personType: Constants.HERO.PersonType
    },
    {
        id: 4,
        title: "Joker",
        description: "The clown",
        personType: Constants.VILLAIN.PersonType
    },
    {
        id: 5,
        title: "Bowser",
        description: "The Dragon turtle",
        personType: Constants.VILLAIN.PersonType
    },
    {
        id: 6,
        title: "Xehanort",
        description: "Time traveler",
        personType: Constants.VILLAIN.PersonType
    }
]

export const buttonsData = [
    {
        id: 1,
        name: 'Heroes',
        active: true,
        location: Constants.HERO.Link
    },
    {
        id: 2,
        name: 'Villains',
        active: false,
        location: Constants.VILLAIN.Link
    },
    {
        id: 3,
        name: 'About',
        active: false,
        location: Constants.ABOUT.Link
    }
]

export const footerText = "Copyright © 2021 Tour Of Heroes. All rights reserved."