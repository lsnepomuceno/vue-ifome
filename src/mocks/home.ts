export interface HomeCategories {
  description: string
  image: string
  filter: string
}

export const defaultImagePath = (): string => '@/assets/images/highlights/'

export const homeCategories = <HomeCategories[]>[
  {
    description: 'Açaí',
    image: require('@/assets/images/highlights/acai.png'),
    filter: 'acai'
  },
  {
    description: 'Árabe',
    image: require('@/assets/images/highlights/arabe.png'),
    filter: 'arabe'
  },
  {
    description: 'Bebidas',
    image: require('@/assets/images/highlights/bebidas.png'),
    filter: 'bebidas'
  },
  {
    description: 'Brasileira',
    image: require('@/assets/images/highlights/brasileira.png'),
    filter: 'brasileira'
  },
  {
    description: 'Cafeteria',
    image: require('@/assets/images/highlights/cafeteria.png'),
    filter: 'cafeteria'
  },
  {
    description: 'Carnes',
    image: require('@/assets/images/highlights/carnes.png'),
    filter: 'carnes'
  },
  {
    description: 'Chinesa',
    image: require('@/assets/images/highlights/chinesa.png'),
    filter: 'chinesa'
  },
  {
    description: 'Doces e Bolos',
    image: require('@/assets/images/highlights/doces_bolos.png'),
    filter: 'doces_bolos'
  },
  {
    description: 'Gourmet',
    image: require('@/assets/images/highlights/gourmet.png'),
    filter: 'gourmet'
  },
  {
    description: 'Italiana',
    image: require('@/assets/images/highlights/italiana.png'),
    filter: 'italiana'
  },
  {
    description: 'Japonesa',
    image: require('@/assets/images/highlights/japonesa.png'),
    filter: 'japonesa'
  },
  {
    description: 'Lanches',
    image: require('@/assets/images/highlights/lanches.png'),
    filter: 'lanches'
  },
  {
    description: 'Marmita',
    image: require('@/assets/images/highlights/marmita.png'),
    filter: 'marmita'
  },
  {
    description: 'Mercado',
    image: require('@/assets/images/highlights/mercado.png'),
    filter: 'mercado'
  },
  {
    description: 'Pizza',
    image: require('@/assets/images/highlights/pizza.png'),
    filter: 'pizza'
  },
  {
    description: 'Promoções',
    image: require('@/assets/images/highlights/promocoes.png'),
    filter: 'promocoes'
  },
  {
    description: 'Salgados',
    image: require('@/assets/images/highlights/salgados.png'),
    filter: 'salgados'
  },
  {
    description: 'Sorvetes',
    image: require('@/assets/images/highlights/sorvetes.png'),
    filter: 'sorvetes'
  },
  {
    description: 'Vale',
    image: require('@/assets/images/highlights/vale.png'),
    filter: 'vale'
  },
  {
    description: 'Vegetariano',
    image: require('@/assets/images/highlights/vegetariano.png'),
    filter: 'vegetariano'
  }
]
