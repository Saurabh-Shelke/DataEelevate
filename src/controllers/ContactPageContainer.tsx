import { COMPANY_MODEL } from '../models/company.model'
import { ContactPageView } from '../views/pages/ContactPageView'
import { useContactFormController } from './useContactFormController'

export function ContactPageContainer() {
  const controller = useContactFormController()
  return <ContactPageView {...controller} company={COMPANY_MODEL} />
}
