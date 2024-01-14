import { routesList, type TRouteListItem } from '@/app/routes'
import RoutesList from './RoutesList'

export default ({ routes = routesList }: { routes?: TRouteListItem[] }) => (
  <RoutesList routes={routes} />
)
