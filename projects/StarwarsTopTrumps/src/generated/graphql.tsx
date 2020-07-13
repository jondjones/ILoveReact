import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Film = Node & {
   __typename?: 'Film',
  title?: Maybe<Scalars['String']>,
  episodeID?: Maybe<Scalars['Int']>,
  openingCrawl?: Maybe<Scalars['String']>,
  director?: Maybe<Scalars['String']>,
  producers?: Maybe<Array<Maybe<Scalars['String']>>>,
  releaseDate?: Maybe<Scalars['String']>,
  speciesConnection?: Maybe<FilmSpeciesConnection>,
  starshipConnection?: Maybe<FilmStarshipsConnection>,
  vehicleConnection?: Maybe<FilmVehiclesConnection>,
  characterConnection?: Maybe<FilmCharactersConnection>,
  planetConnection?: Maybe<FilmPlanetsConnection>,
  created?: Maybe<Scalars['String']>,
  edited?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};


export type FilmSpeciesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmStarshipConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmVehicleConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmCharacterConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmPlanetConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type FilmCharactersConnection = {
   __typename?: 'FilmCharactersConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<FilmCharactersEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  characters?: Maybe<Array<Maybe<Person>>>,
};

export type FilmCharactersEdge = {
   __typename?: 'FilmCharactersEdge',
  node?: Maybe<Person>,
  cursor: Scalars['String'],
};

export type FilmPlanetsConnection = {
   __typename?: 'FilmPlanetsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<FilmPlanetsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  planets?: Maybe<Array<Maybe<Planet>>>,
};

export type FilmPlanetsEdge = {
   __typename?: 'FilmPlanetsEdge',
  node?: Maybe<Planet>,
  cursor: Scalars['String'],
};

export type FilmsConnection = {
   __typename?: 'FilmsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<FilmsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  films?: Maybe<Array<Maybe<Film>>>,
};

export type FilmsEdge = {
   __typename?: 'FilmsEdge',
  node?: Maybe<Film>,
  cursor: Scalars['String'],
};

export type FilmSpeciesConnection = {
   __typename?: 'FilmSpeciesConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<FilmSpeciesEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  species?: Maybe<Array<Maybe<Species>>>,
};

export type FilmSpeciesEdge = {
   __typename?: 'FilmSpeciesEdge',
  node?: Maybe<Species>,
  cursor: Scalars['String'],
};

export type FilmStarshipsConnection = {
   __typename?: 'FilmStarshipsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<FilmStarshipsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  starships?: Maybe<Array<Maybe<Starship>>>,
};

export type FilmStarshipsEdge = {
   __typename?: 'FilmStarshipsEdge',
  node?: Maybe<Starship>,
  cursor: Scalars['String'],
};

export type FilmVehiclesConnection = {
   __typename?: 'FilmVehiclesConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<FilmVehiclesEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  vehicles?: Maybe<Array<Maybe<Vehicle>>>,
};

export type FilmVehiclesEdge = {
   __typename?: 'FilmVehiclesEdge',
  node?: Maybe<Vehicle>,
  cursor: Scalars['String'],
};

export type Node = {
  id: Scalars['ID'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type PeopleConnection = {
   __typename?: 'PeopleConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<PeopleEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  people?: Maybe<Array<Maybe<Person>>>,
};

export type PeopleEdge = {
   __typename?: 'PeopleEdge',
  node?: Maybe<Person>,
  cursor: Scalars['String'],
};

export type Person = Node & {
   __typename?: 'Person',
  name?: Maybe<Scalars['String']>,
  birthYear?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Scalars['String']>,
  gender?: Maybe<Scalars['String']>,
  hairColor?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Int']>,
  mass?: Maybe<Scalars['Float']>,
  skinColor?: Maybe<Scalars['String']>,
  homeworld?: Maybe<Planet>,
  filmConnection?: Maybe<PersonFilmsConnection>,
  species?: Maybe<Species>,
  starshipConnection?: Maybe<PersonStarshipsConnection>,
  vehicleConnection?: Maybe<PersonVehiclesConnection>,
  created?: Maybe<Scalars['String']>,
  edited?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};


export type PersonFilmConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonStarshipConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonVehicleConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type PersonFilmsConnection = {
   __typename?: 'PersonFilmsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<PersonFilmsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  films?: Maybe<Array<Maybe<Film>>>,
};

export type PersonFilmsEdge = {
   __typename?: 'PersonFilmsEdge',
  node?: Maybe<Film>,
  cursor: Scalars['String'],
};

export type PersonStarshipsConnection = {
   __typename?: 'PersonStarshipsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<PersonStarshipsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  starships?: Maybe<Array<Maybe<Starship>>>,
};

export type PersonStarshipsEdge = {
   __typename?: 'PersonStarshipsEdge',
  node?: Maybe<Starship>,
  cursor: Scalars['String'],
};

export type PersonVehiclesConnection = {
   __typename?: 'PersonVehiclesConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<PersonVehiclesEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  vehicles?: Maybe<Array<Maybe<Vehicle>>>,
};

export type PersonVehiclesEdge = {
   __typename?: 'PersonVehiclesEdge',
  node?: Maybe<Vehicle>,
  cursor: Scalars['String'],
};

export type Planet = Node & {
   __typename?: 'Planet',
  name?: Maybe<Scalars['String']>,
  diameter?: Maybe<Scalars['Int']>,
  rotationPeriod?: Maybe<Scalars['Int']>,
  orbitalPeriod?: Maybe<Scalars['Int']>,
  gravity?: Maybe<Scalars['String']>,
  population?: Maybe<Scalars['Float']>,
  climates?: Maybe<Array<Maybe<Scalars['String']>>>,
  terrains?: Maybe<Array<Maybe<Scalars['String']>>>,
  surfaceWater?: Maybe<Scalars['Float']>,
  residentConnection?: Maybe<PlanetResidentsConnection>,
  filmConnection?: Maybe<PlanetFilmsConnection>,
  created?: Maybe<Scalars['String']>,
  edited?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};


export type PlanetResidentConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type PlanetFilmConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type PlanetFilmsConnection = {
   __typename?: 'PlanetFilmsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<PlanetFilmsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  films?: Maybe<Array<Maybe<Film>>>,
};

export type PlanetFilmsEdge = {
   __typename?: 'PlanetFilmsEdge',
  node?: Maybe<Film>,
  cursor: Scalars['String'],
};

export type PlanetResidentsConnection = {
   __typename?: 'PlanetResidentsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<PlanetResidentsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  residents?: Maybe<Array<Maybe<Person>>>,
};

export type PlanetResidentsEdge = {
   __typename?: 'PlanetResidentsEdge',
  node?: Maybe<Person>,
  cursor: Scalars['String'],
};

export type PlanetsConnection = {
   __typename?: 'PlanetsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<PlanetsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  planets?: Maybe<Array<Maybe<Planet>>>,
};

export type PlanetsEdge = {
   __typename?: 'PlanetsEdge',
  node?: Maybe<Planet>,
  cursor: Scalars['String'],
};

export type Root = {
   __typename?: 'Root',
  allFilms?: Maybe<FilmsConnection>,
  film?: Maybe<Film>,
  allPeople?: Maybe<PeopleConnection>,
  person?: Maybe<Person>,
  allPlanets?: Maybe<PlanetsConnection>,
  planet?: Maybe<Planet>,
  allSpecies?: Maybe<SpeciesConnection>,
  species?: Maybe<Species>,
  allStarships?: Maybe<StarshipsConnection>,
  starship?: Maybe<Starship>,
  allVehicles?: Maybe<VehiclesConnection>,
  vehicle?: Maybe<Vehicle>,
  node?: Maybe<Node>,
};


export type RootAllFilmsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type RootFilmArgs = {
  id?: Maybe<Scalars['ID']>,
  filmID?: Maybe<Scalars['ID']>
};


export type RootAllPeopleArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type RootPersonArgs = {
  id?: Maybe<Scalars['ID']>,
  personID?: Maybe<Scalars['ID']>
};


export type RootAllPlanetsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type RootPlanetArgs = {
  id?: Maybe<Scalars['ID']>,
  planetID?: Maybe<Scalars['ID']>
};


export type RootAllSpeciesArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type RootSpeciesArgs = {
  id?: Maybe<Scalars['ID']>,
  speciesID?: Maybe<Scalars['ID']>
};


export type RootAllStarshipsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type RootStarshipArgs = {
  id?: Maybe<Scalars['ID']>,
  starshipID?: Maybe<Scalars['ID']>
};


export type RootAllVehiclesArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type RootVehicleArgs = {
  id?: Maybe<Scalars['ID']>,
  vehicleID?: Maybe<Scalars['ID']>
};


export type RootNodeArgs = {
  id: Scalars['ID']
};

export type Species = Node & {
   __typename?: 'Species',
  name?: Maybe<Scalars['String']>,
  classification?: Maybe<Scalars['String']>,
  designation?: Maybe<Scalars['String']>,
  averageHeight?: Maybe<Scalars['Float']>,
  averageLifespan?: Maybe<Scalars['Int']>,
  eyeColors?: Maybe<Array<Maybe<Scalars['String']>>>,
  hairColors?: Maybe<Array<Maybe<Scalars['String']>>>,
  skinColors?: Maybe<Array<Maybe<Scalars['String']>>>,
  language?: Maybe<Scalars['String']>,
  homeworld?: Maybe<Planet>,
  personConnection?: Maybe<SpeciesPeopleConnection>,
  filmConnection?: Maybe<SpeciesFilmsConnection>,
  created?: Maybe<Scalars['String']>,
  edited?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};


export type SpeciesPersonConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type SpeciesFilmConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type SpeciesConnection = {
   __typename?: 'SpeciesConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<SpeciesEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  species?: Maybe<Array<Maybe<Species>>>,
};

export type SpeciesEdge = {
   __typename?: 'SpeciesEdge',
  node?: Maybe<Species>,
  cursor: Scalars['String'],
};

export type SpeciesFilmsConnection = {
   __typename?: 'SpeciesFilmsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<SpeciesFilmsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  films?: Maybe<Array<Maybe<Film>>>,
};

export type SpeciesFilmsEdge = {
   __typename?: 'SpeciesFilmsEdge',
  node?: Maybe<Film>,
  cursor: Scalars['String'],
};

export type SpeciesPeopleConnection = {
   __typename?: 'SpeciesPeopleConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<SpeciesPeopleEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  people?: Maybe<Array<Maybe<Person>>>,
};

export type SpeciesPeopleEdge = {
   __typename?: 'SpeciesPeopleEdge',
  node?: Maybe<Person>,
  cursor: Scalars['String'],
};

export type Starship = Node & {
   __typename?: 'Starship',
  name?: Maybe<Scalars['String']>,
  model?: Maybe<Scalars['String']>,
  starshipClass?: Maybe<Scalars['String']>,
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>,
  costInCredits?: Maybe<Scalars['Float']>,
  length?: Maybe<Scalars['Float']>,
  crew?: Maybe<Scalars['String']>,
  passengers?: Maybe<Scalars['String']>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  hyperdriveRating?: Maybe<Scalars['Float']>,
  MGLT?: Maybe<Scalars['Int']>,
  cargoCapacity?: Maybe<Scalars['Float']>,
  consumables?: Maybe<Scalars['String']>,
  pilotConnection?: Maybe<StarshipPilotsConnection>,
  filmConnection?: Maybe<StarshipFilmsConnection>,
  created?: Maybe<Scalars['String']>,
  edited?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};


export type StarshipPilotConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type StarshipFilmConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type StarshipFilmsConnection = {
   __typename?: 'StarshipFilmsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<StarshipFilmsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  films?: Maybe<Array<Maybe<Film>>>,
};

export type StarshipFilmsEdge = {
   __typename?: 'StarshipFilmsEdge',
  node?: Maybe<Film>,
  cursor: Scalars['String'],
};

export type StarshipPilotsConnection = {
   __typename?: 'StarshipPilotsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<StarshipPilotsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  pilots?: Maybe<Array<Maybe<Person>>>,
};

export type StarshipPilotsEdge = {
   __typename?: 'StarshipPilotsEdge',
  node?: Maybe<Person>,
  cursor: Scalars['String'],
};

export type StarshipsConnection = {
   __typename?: 'StarshipsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<StarshipsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  starships?: Maybe<Array<Maybe<Starship>>>,
};

export type StarshipsEdge = {
   __typename?: 'StarshipsEdge',
  node?: Maybe<Starship>,
  cursor: Scalars['String'],
};

export type Vehicle = Node & {
   __typename?: 'Vehicle',
  name?: Maybe<Scalars['String']>,
  model?: Maybe<Scalars['String']>,
  vehicleClass?: Maybe<Scalars['String']>,
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>,
  costInCredits?: Maybe<Scalars['Float']>,
  length?: Maybe<Scalars['Float']>,
  crew?: Maybe<Scalars['String']>,
  passengers?: Maybe<Scalars['String']>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  cargoCapacity?: Maybe<Scalars['Float']>,
  consumables?: Maybe<Scalars['String']>,
  pilotConnection?: Maybe<VehiclePilotsConnection>,
  filmConnection?: Maybe<VehicleFilmsConnection>,
  created?: Maybe<Scalars['String']>,
  edited?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};


export type VehiclePilotConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type VehicleFilmConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type VehicleFilmsConnection = {
   __typename?: 'VehicleFilmsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<VehicleFilmsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  films?: Maybe<Array<Maybe<Film>>>,
};

export type VehicleFilmsEdge = {
   __typename?: 'VehicleFilmsEdge',
  node?: Maybe<Film>,
  cursor: Scalars['String'],
};

export type VehiclePilotsConnection = {
   __typename?: 'VehiclePilotsConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<VehiclePilotsEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  pilots?: Maybe<Array<Maybe<Person>>>,
};

export type VehiclePilotsEdge = {
   __typename?: 'VehiclePilotsEdge',
  node?: Maybe<Person>,
  cursor: Scalars['String'],
};

export type VehiclesConnection = {
   __typename?: 'VehiclesConnection',
  pageInfo: PageInfo,
  edges?: Maybe<Array<Maybe<VehiclesEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  vehicles?: Maybe<Array<Maybe<Vehicle>>>,
};

export type VehiclesEdge = {
   __typename?: 'VehiclesEdge',
  node?: Maybe<Vehicle>,
  cursor: Scalars['String'],
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Root' }
  & { allPeople: Maybe<(
    { __typename?: 'PeopleConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'PeopleEdge' }
      & { node: Maybe<(
        { __typename?: 'Person' }
        & Pick<Person, 'name' | 'height'>
      )> }
    )>>> }
  )> }
);

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = (
  { __typename?: 'Root' }
  & { allStarships: Maybe<(
    { __typename?: 'StarshipsConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'StarshipsEdge' }
      & { node: Maybe<(
        { __typename?: 'Starship' }
        & Pick<Starship, 'name' | 'model' | 'hyperdriveRating'>
      )> }
    )>>> }
  )> }
);

