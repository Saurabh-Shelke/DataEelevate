/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Overrides `contactFormRecipientEmail` for FormSubmit (optional). */
  readonly VITE_CONTACT_RECIPIENT_EMAIL?: string
  /**
   * If set, contact form uses Web3Forms (https://web3forms.com) instead of FormSubmit.
   * Create a form there, set destination to your Gmail, paste the access key here.
   */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string
  /**
   * Full FormSubmit action URL from your activation email, e.g. https://formsubmit.co/el/xxxxx
   * (invisible endpoint). Overrides JSON posts to /ajax/{email}.
   */
  readonly VITE_FORMSUBMIT_ACTION_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
