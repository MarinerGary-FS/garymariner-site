export const garyContact = {
  name: 'Gary L. Mariner II',
  role: 'AI Systems Architect',
  organization: 'Mariner Nexus',
  phone: '+1 (404) 804-1250',
  phoneHref: 'tel:+14048041250',
  primaryEmail: 'gary@marinernexus.com',
  foundationEmail: 'gary@undugufoundation.org',
  website: 'https://www.garymariner.com',
  businessSite: 'https://www.marinernexus.com',
  foundationSite: 'https://www.undugu.org',
  vcardPath: '/gary-mariner.vcf',
  socialUrl: 'https://www.garymariner.com/social',
}

export const socialChannels = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gary-mariner-ii/',
    event: 'linkedin_click',
    type: 'Social',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/theleodynasty/',
    event: 'instagram_click',
    type: 'Social',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@theleodynasty',
    event: 'tiktok_click',
    type: 'Social',
  },
  {
    label: 'Mariner Nexus',
    href: garyContact.businessSite,
    event: 'mariner_nexus_click',
    type: 'Business',
  },
  {
    label: 'Undugu Foundation',
    href: garyContact.foundationSite,
    event: 'undugu_click',
    type: 'Impact',
  },
] as const

export const contactRows = [
  {
    label: 'Phone',
    value: garyContact.phone,
    href: garyContact.phoneHref,
  },
  {
    label: 'Primary Email',
    value: garyContact.primaryEmail,
    href: `mailto:${garyContact.primaryEmail}`,
  },
  {
    label: 'Foundation Email',
    value: garyContact.foundationEmail,
    href: `mailto:${garyContact.foundationEmail}`,
  },
  {
    label: 'GaryMariner.com',
    value: 'garymariner.com',
    href: garyContact.website,
  },
  {
    label: 'Undugu.org',
    value: 'undugu.org',
    href: garyContact.foundationSite,
  },
] as const
