import GameStartPage from '@/pages/GameStart'
import GameEndPage from '@/pages/GameEnd'
import { ReactElement } from 'react'

const routesData = {
  'game-start': {
    label: 'Игра: начало',
    element: <GameStartPage />,
  },
  'game-end': {
    label: 'Игра: конец',
    element: <GameEndPage />,
  },
}

export type TRouteListItem = {
  path: string
  label: string
}

type TRoutesAcc = {
  appChildren: {
    path: string
    element: ReactElement
  }[]
  routesList: TRouteListItem[]
}

export const routes = Object.entries(routesData).reduce(
  (acc: TRoutesAcc, [routerPath, routerData]) => {
    return {
      appChildren: [
        ...acc.appChildren,
        { path: routerPath, element: routerData.element },
      ],
      routesList: [
        ...acc.routesList,
        { path: '/' + routerPath, label: routerData.label },
      ],
    }
  },
  { appChildren: [], routesList: [] }
)

export const { appChildren, routesList } = routes
