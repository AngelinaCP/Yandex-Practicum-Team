import { FC } from 'react'
import { Link } from 'react-router-dom'
import type { TRouteListItem } from '@/app/routes'

const RoutesList: FC<{ routes: TRouteListItem[] }> = ({ routes = [] }) => (
  <ul>
    {routes.map(({ path, label }) => (
      <li key={path}>
        <Link to={path}>{label}</Link>
      </li>
    ))}
  </ul>
)

export default RoutesList
