import { useEffect } from 'react'

type MetaOptions = {
  title: string
  description: string
}

export const usePageMeta = ({ title, description }: MetaOptions) => {
  useEffect(() => {
    document.title = title

    const metaDescription =
      document.querySelector('meta[name="description"]') ?? document.createElement('meta')

    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', description)

    if (!metaDescription.parentElement) {
      document.head.appendChild(metaDescription)
    }
  }, [description, title])
}
