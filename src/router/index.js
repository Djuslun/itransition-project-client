import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('../pages/homePage/HomePage'))
const CollectionsPage = lazy(() => import('../pages/collectionsPage/CollectionsPage'))
const CollectionPage = lazy(() => import('../pages/collectionPage/CollectionPage'))
const ItemPage = lazy(() => import('../pages/itemPage/ItemPage'))
const NotFoundPage = lazy(() => import('../pages/notFoundPage/NotFoundPage'))
const ProfilePage = lazy(() => import('../pages/profilePage/ProfilePage'))

const AppRouter = () => {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/collections' element={<CollectionsPage />} />
      <Route path='/collection' element={<CollectionPage />} />
      <Route path='/item' element={<ItemPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
export default AppRouter