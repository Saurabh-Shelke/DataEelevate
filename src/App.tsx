import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ContactPageContainer } from './controllers/ContactPageContainer'
import { MainLayout } from './views/layout/MainLayout'
import { ScrollToTop } from './views/layout/ScrollToTop'
import { AboutPageView } from './views/pages/AboutPageView'
import { BenefitsPageView } from './views/pages/BenefitsPageView'
import { BlogListPageView } from './views/pages/BlogListPageView'
import { BlogPostPageView } from './views/pages/BlogPostPageView'
import { HomePageView } from './views/pages/HomePageView'
import { SpecialtiesPageView } from './views/pages/SpecialtiesPageView'
import { WorkplacePageView } from './views/pages/WorkplacePageView'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePageView />} />
          <Route path="about" element={<AboutPageView />} />
          <Route path="specialties" element={<SpecialtiesPageView />} />
          <Route path="workplace" element={<WorkplacePageView />} />
          <Route path="benefits" element={<BenefitsPageView />} />
          <Route path="blog" element={<BlogListPageView />} />
          <Route path="blog/:slug" element={<BlogPostPageView />} />
          <Route path="contact" element={<ContactPageContainer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
